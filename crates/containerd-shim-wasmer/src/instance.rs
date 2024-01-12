use anyhow::Result;
use containerd_shim_wasm::container::{Engine, Entrypoint, Instance, RuntimeContext, Stdio};
use wasmer::{Module, Store};
use wasmer_wasix::virtual_fs::host_fs::FileSystem;
use wasmer_wasix::{WasiEnv, WasiError};

pub type WasmerInstance = Instance<WasmerEngine>;

#[derive(Clone, Default)]
pub struct WasmerEngine {
    engine: wasmer::Cranelift,
}

impl Engine for WasmerEngine {
    fn name() -> &'static str {
        "wasmer"
    }

    fn run_wasi(&self, ctx: &impl RuntimeContext, wasm_bytes: &[u8], stdio: Stdio) -> Result<i32> {
        let args = ctx.args();
        let envs = std::env::vars();
        let Entrypoint {
            source: _,
            func,
            arg0: _,
            name,
        } = ctx.entrypoint();

        let mod_name = name.unwrap_or_else(|| "main".to_string());

        log::info!("Create a Store");
        let mut store = Store::new(self.engine.clone());

        let module = Module::from_binary(&store, wasm_bytes)?;

        let runtime = tokio::runtime::Builder::new_multi_thread()
            .enable_all()
            .build()?;
        let _guard = runtime.enter();

        log::info!("Creating `WasiEnv`...: args {args:?}, envs: {envs:?}");
        let (instance, wasi_env) = WasiEnv::builder(mod_name)
            .args(&args[1..])
            .envs(envs)
            .fs(Box::<FileSystem>::default())
            .preopen_dir("/")?
            .instantiate(module, &mut store)?;

        log::info!("redirect stdio");
        stdio.redirect()?;

        log::info!("Running {func:?}");
        let start = instance.exports.get_function(&func)?;
        wasi_env.data(&store).thread.set_status_running();
        let status = start.call(&mut store, &[]).map(|_| 0).or_else(|err| {
            match err.downcast_ref::<WasiError>() {
                Some(WasiError::Exit(code)) => Ok(code.raw()),
                _ => Err(err),
            }
        })?;

        Ok(status)
    }
}
