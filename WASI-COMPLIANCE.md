# WASI Compliance Report

Last Modified: 2025-02-06

This document provides information about the [WASI](https://wasi.dev/) (WebAssembly System Interface) for each runtime shim in runwasi. This helps users understand the capabilities and limitations of each runtime implementation.

## Runtime Support Matrix

| Feature | Wasmtime | WasmEdge | Wasmer | WAMR |
|---------|----------|-----------|---------|------|
| WASI Preview 1 | ✅ | ✅ | ✅ | ✅ |
| WASI Preview 2 | ✅ | ❌ | ❌ | ❌ |
| WASI HTTP | ✅ | ❌ | ❌ | ❌ |

## Wasmtime Shim

The Wasmtime shim provides the most up-to-date WASI support:

- Full WASI Preview 1 support
- WASI Preview 2 support for Wasm Components
- WASI HTTP (`wasi:http/proxy`) world support with the instance-per-request isolation
  - feature parity with `wasmtime serve` CLI

Configuration options:
- `WASMTIME_HTTP_PROXY_SOCKET_ADDR`: Socket address to bind (default: 0.0.0.0:8080)
- `WASMTIME_HTTP_PROXY_BACKLOG`: Maximum pending connections (default: 100)

## WasmEdge Shim

The WasmEdge shim provides:

- Full WASI Preview 1 support
- Supports wasi-sockets: https://wasmedge.org/docs/develop/rust/socket_networking
- Can be built in two modes:
  - Static linking (default)
  - Dynamic linking (requires WasmEdge runtime installation)

## Wasmer Shim

The Wasmer shim provides:

- Full WASI Preview 1 support

## WAMR Shim

The WAMR (WebAssembly Micro Runtime) shim provides:

- Full WASI Preview 1 support

## Test Suite

Each shim implementation has a test suite that verifies basic WASI functionality:

```rust
- test_delete_after_create()
- test_hello_world()           // Basic WASI functionality
- test_hello_world_oci()
- test_unreachable()
- test_seccomp()               // Security features
- test_has_default_devices()   // Device access
```

The Wasmtime shim additionally tests:
```rust
- test_wasip2_component()            // WASI Preview 2             
- test_wasip2_component_http_proxy() // WASI HTTP support
```

## Release Considerations

1. Pre-release the compliance report for each runtime shim release to inform users about the WASI support for each shim runtime.


## References

- [WASI Preview 1 Specification](https://github.com/WebAssembly/WASI/blob/main/legacy/preview1/docs.md)
- [WASI 0.2.0 Specification](https://github.com/WebAssembly/WASI/tree/v0.2.0/preview2)
- [Component Model Specification](https://github.com/WebAssembly/component-model)
- [WASI HTTP Specification](https://github.com/WebAssembly/wasi-http)
