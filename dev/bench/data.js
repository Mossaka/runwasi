window.BENCHMARK_DATA = {
  "lastUpdate": 1742950020028,
  "repoUrl": "https://github.com/Mossaka/runwasi",
  "entries": {
    "Criterion.rs Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1741913694517,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15656,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 3112 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66384,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19088,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3472 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19900,
            "unit": "kB",
            "extra": "shim: 16384 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1741913851067,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135846786,
            "range": "± 2720477",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82352607,
            "range": "± 1361919",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111900729,
            "range": "± 1293113",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119221257,
            "range": "± 1148140",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131167001,
            "range": "± 3646287",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132023837,
            "range": "± 1236084",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82084689,
            "range": "± 3028831",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82761379,
            "range": "± 972623",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1741999385535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15404,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2988 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66640,
            "unit": "kB",
            "extra": "shim: 54016 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19008,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3520 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 20160,
            "unit": "kB",
            "extra": "shim: 16512 kB\nzygote: 3648 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1741999491901,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137727459,
            "range": "± 4642108",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80477255,
            "range": "± 1182190",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111884926,
            "range": "± 1730441",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117606445,
            "range": "± 1764890",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130116732,
            "range": "± 1529915",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132698294,
            "range": "± 1104161",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80885111,
            "range": "± 2697582",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82080219,
            "range": "± 573724",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742086098189,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15400,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66512,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12752 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19340,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3596 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19520,
            "unit": "kB",
            "extra": "shim: 16128 kB\nzygote: 3392 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742086153137,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137385004,
            "range": "± 3901748",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82024720,
            "range": "± 1697275",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110958817,
            "range": "± 1668800",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119853365,
            "range": "± 1380842",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130961217,
            "range": "± 3160351",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134073460,
            "range": "± 1852556",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82265570,
            "range": "± 1260218",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82885667,
            "range": "± 1525354",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742172392868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15400,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66256,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12752 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18952,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 20028,
            "unit": "kB",
            "extra": "shim: 16384 kB\nzygote: 3644 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742172451871,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139464924,
            "range": "± 5729812",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82431797,
            "range": "± 1119289",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113041037,
            "range": "± 2090408",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121612779,
            "range": "± 2399719",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131635489,
            "range": "± 2603735",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135373639,
            "range": "± 1793769",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83754269,
            "range": "± 1741855",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85152392,
            "range": "± 1328028",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742258692000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15276,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2988 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66640,
            "unit": "kB",
            "extra": "shim: 53888 kB\nzygote: 12752 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19208,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19772,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742258758434,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141537579,
            "range": "± 2379177",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84867309,
            "range": "± 1017342",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115636046,
            "range": "± 3733276",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 126538605,
            "range": "± 3493362",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 137113576,
            "range": "± 5745167",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137921487,
            "range": "± 1729175",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83857599,
            "range": "± 4269087",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 89652640,
            "range": "± 2573700",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742345170008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15528,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66384,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12752 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19076,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3588 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19900,
            "unit": "kB",
            "extra": "shim: 16512 kB\nzygote: 3388 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742345233629,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139174758,
            "range": "± 2335834",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82532860,
            "range": "± 1056210",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112264688,
            "range": "± 1457870",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120315038,
            "range": "± 2009823",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133610920,
            "range": "± 6611412",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135108882,
            "range": "± 3491489",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84428391,
            "range": "± 2466802",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84245649,
            "range": "± 1604693",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742432177027,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15528,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66432,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12672 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19336,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19644,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3388 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742432275299,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137671364,
            "range": "± 2743789",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84134918,
            "range": "± 1338619",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112861201,
            "range": "± 955647",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120698609,
            "range": "± 2196971",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131853878,
            "range": "± 4928937",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135713467,
            "range": "± 2391210",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83081479,
            "range": "± 1631131",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84581766,
            "range": "± 1859685",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742517926117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15272,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66128,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19204,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3588 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 20028,
            "unit": "kB",
            "extra": "shim: 16512 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742518050844,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139349070,
            "range": "± 4245829",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84359306,
            "range": "± 1012877",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112886552,
            "range": "± 1221301",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121933001,
            "range": "± 1419331",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133774900,
            "range": "± 3780053",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136068863,
            "range": "± 1592068",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82961877,
            "range": "± 2825261",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85562473,
            "range": "± 1326791",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742604190851,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15528,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66256,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19204,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3588 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19900,
            "unit": "kB",
            "extra": "shim: 16384 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742604307542,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138013489,
            "range": "± 1991991",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82574932,
            "range": "± 1226378",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112634757,
            "range": "± 1153205",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120336038,
            "range": "± 2394551",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131062753,
            "range": "± 2146045",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133494423,
            "range": "± 1655275",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83363541,
            "range": "± 2396454",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84100198,
            "range": "± 1854535",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742691118923,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15404,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2860 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66384,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18824,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 20156,
            "unit": "kB",
            "extra": "shim: 16640 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742691211618,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139308680,
            "range": "± 2663170",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82080238,
            "range": "± 1424089",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113536175,
            "range": "± 1348030",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120425103,
            "range": "± 1328179",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130532709,
            "range": "± 5571738",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134492352,
            "range": "± 1107525",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84037561,
            "range": "± 3255984",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84027198,
            "range": "± 2153211",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742777172617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15400,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66256,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19208,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19644,
            "unit": "kB",
            "extra": "shim: 16128 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742777290430,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140167243,
            "range": "± 4630427",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83354317,
            "range": "± 610752",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112547700,
            "range": "± 1967119",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121206762,
            "range": "± 1489435",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133704264,
            "range": "± 2470678",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135813932,
            "range": "± 1711311",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84009716,
            "range": "± 3649096",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86462775,
            "range": "± 428820",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742863541049,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15784,
            "unit": "kB",
            "extra": "shim: 12672 kB\nzygote: 3112 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66768,
            "unit": "kB",
            "extra": "shim: 54144 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19208,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19648,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3392 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742863596260,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137029176,
            "range": "± 3717625",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82443854,
            "range": "± 1282324",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111659486,
            "range": "± 1849877",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119975538,
            "range": "± 1212535",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131020463,
            "range": "± 3401731",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136305803,
            "range": "± 3790196",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83269310,
            "range": "± 2807906",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84030555,
            "range": "± 725198",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742949913279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15528,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2984 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66256,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 19208,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3592 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19776,
            "unit": "kB",
            "extra": "shim: 16384 kB\nzygote: 3392 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742950018840,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137960577,
            "range": "± 3409644",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81885493,
            "range": "± 933345",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111484336,
            "range": "± 1186122",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120186407,
            "range": "± 1730672",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130416600,
            "range": "± 3283161",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133443999,
            "range": "± 1190050",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81952028,
            "range": "± 2176337",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84102738,
            "range": "± 949549",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "HTTP Throughput": [
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1741913734833,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20527.9829,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1741999385290,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19227.653,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742086109805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20595.4704,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742172345054,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20584.8241,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742258651032,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20176.1381,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742345071457,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19398.5807,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742432152701,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20203.8575,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742517883044,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20533.234,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742604200251,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20593.3181,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742690887287,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20500.7929,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742777238895,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20577.9099,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742863501761,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19029.7964,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742949922445,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20906.3319,
            "unit": "req/s"
          }
        ]
      }
    ],
    "HTTP Latency": [
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1741913737076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.4,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1741999386823,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.8,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742086110967,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.4,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742172346220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.3,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742258652273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.5,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742345072970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.8,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742432154934,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.4,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742517884535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.4,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742604202492,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.4,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742690888878,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.4,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742777240434,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.4,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742863503077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.8999999999999995,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742949925098,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.3,
            "unit": "ms"
          }
        ]
      }
    ],
    "Stress Test Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1741914277265,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.62657405452918,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 369ms 869us 458ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.819170943714624,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 918ms 10us 765ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.716105216370671,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 952ms 762us 317ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.144357806402065,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 31ms 192us 130ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.78603751538187,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 464ms 801us 968ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.766385513634212,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 594ms 942us 172ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.522219617180587,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 952ms 356us 71ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.12623259089071,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 140ms 183us 956ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.20842907195238,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 467ms 517us 586ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.47363292186242,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 610ms 324us 687ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.518728734456914,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 537ms 346us 189ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.23893412666175,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 580ms 396us 361ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1741999925729,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.15258825423464,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 939ms 150us 397ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.710263442128934,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 809ms 922us 508ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.330065355681063,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 783ms 352us 356ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.937040145829595,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 947ms 667us 693ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.7213600793686,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 232ms 106us 813ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.029502485627173,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 447ms 714us 28ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.246510578895718,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 491ms 579us 12ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.4547357620407,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 32ms 725us 1ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.19795898897907,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 788ms 57us 552ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 70.78585536337513,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 14s 127ms 116us 143ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.197867905970973,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 736ms 520us 251ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.065818655623687,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 243ms 949us 184ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742086560526,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.79942204406368,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 685ms 263us 331ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.88110223308938,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 869ms 823us 884ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.694756018097973,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 51ms 487us 127ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.174086749709168,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 901ms 824us 373ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.51491025184127,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 656ms 68us 35ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.017763214302146,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 313ms 608us 108ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.534133124531946,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 887ms 259us 36ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.29689061648212,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 762ms 970us 371ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.61047375374933,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 561ms 161us 275ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.66425255757791,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 216ms 280us 690ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.461813175299152,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 746ms 649us 798ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.37146598729989,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 81ms 884us 834ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742172880763,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 49.91101714380107,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 35ms 656us 599ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.160065145944245,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 29s 273ms 948us 856ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.204119481476253,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 402ms 111us 254ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.619348746058172,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 402ms 499us 822ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.09976224384324,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 701ms 13us 465ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 28.482260618031003,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 35s 109ms 572us 706ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.171361378999721,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 922ms 296us 202ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 53.89639544410536,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 554ms 116us 500ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.6929859302013,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 871ms 174us 766ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.02900024327688,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 14s 78ms 756us 516ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.937077149127017,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 746ms 762us 825ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.53681748255014,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 4s 363ms 245us 634ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742259220674,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 46.94648144325011,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 21s 300ms 850us 868ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 32.78595105268689,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 30s 500ms 869us 58ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 13.604330242948878,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 506ms 7us 436ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.192349418132126,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 460ms 497us 451ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 34.80733915151893,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 28s 729ms 573us 256ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 27.483034420058164,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 36s 386ms 84us 37ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 12.562714358699052,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 19s 600ms 631us 794ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 51.031129381760515,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 19s 595ms 882us 202ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 73.62596447556196,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 582ms 165us 30ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 68.51753847029396,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 14s 594ms 803us 350ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.47208743744883,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 4s 632ms 519us 952ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.446217780298209,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 4s 740ms 767us 884ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742345608735,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.422591855794245,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 832ms 379us 955ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.29253847287511,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 334ms 601us 116ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.50061896066041,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 962ms 573us 440ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.952825022662992,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 876ms 994us 714ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.74675088758177,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 213ms 290us 314ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.66057480612769,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 714ms 788us 285ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.275270289262938,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 328ms 33us 118ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.45120825773465,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 365ms 65us 386ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.72350741510576,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 702ms 686us 57ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.78414412702264,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 371ms 818us 474ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.202672474899938,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 718ms 213us 557ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.157868166586866,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 889ms 352us 586ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742432742413,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 49.010918375484,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 403ms 616us 850ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.5472686890526,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 945ms 848us 339ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.283664850789727,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 10ms 43us 672ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.59021806622094,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 539ms 71us 552ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.289602688139425,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 556ms 102us 187ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.188336370593444,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 260ms 260us 239ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.115583164731849,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 16s 245ms 180us 61ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 53.38808176050128,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 730ms 772us 244ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 76.0401357115646,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 150ms 949us 701ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.57765701795626,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 970ms 840us 87ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.053631945606348,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 291ms 200us 109ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.04138456822812,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 338ms 758us 587ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742518428077,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.103286173336485,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 958ms 770us 699ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.67968548792366,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 835ms 324us 944ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.314014787114303,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 861ms 601us 715ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.832529528087248,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 419ms 383us 734ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.385994849598454,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 483ms 101us 785ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 28.547979054256643,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 35s 28ms 749us 254ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.071449515830803,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 16s 502ms 609us 660ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.169765269780115,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 460ms 482us 430ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.06954429580598,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 975ms 294us 56ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.41072590545053,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 810ms 108us 758ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.96225451059761,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 647ms 791us 973ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.889025572206407,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 936ms 521us 529ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742604720490,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.104855678035015,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 567ms 612us 250ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.37443390527975,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 29s 91ms 388us 174ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.528565113235386,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 829ms 921us 758ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.851776068633617,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 332ms 14us 392ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.09092277497788,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 960ms 774us 367ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.49734089821025,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 901ms 360us 921ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.332844901804169,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 2ms 747us 528ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.18011876738,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 122ms 469us 149ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.97988597364753,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 503ms 143us 607ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.57774032327363,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 778ms 329us 217ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.184117985135195,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 788ms 971us 195ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.118397154780173,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 40ms 908us 311ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742691617802,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.54892791141987,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 782ms 813us 233ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.302698978117974,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 326ms 446us 106ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.654980211478847,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 236ms 189us 34ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.224721281955437,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 682ms 647us 418ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.75562911622806,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 206ms 717us 13ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.4572606600224,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 947ms 487us 906ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.50852366147675,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 27ms 334us 523ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.526185602831546,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 690ms 915us 977ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.83041081068762,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 526ms 554us 603ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.87760758719567,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 535ms 901us 238ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.435336422123733,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 844ms 510us 530ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.24331271132251,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 563ms 796us 608ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742777746702,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.5147504801027,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 796ms 197us 952ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.682299376831196,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 833ms 151us 722ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.396516058454782,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 461ms 249us 926ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.976862454346165,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 769ms 659us 69ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.909641751698246,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 93ms 191us 712ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.325675247926384,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 99ms 811us 566ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.206531183742454,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 720ms 110us 458ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 53.9278650768493,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 543ms 289us 236ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.71938530644238,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 703ms 351us 228ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.65497058501154,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 955ms 765us 969ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.273440948579502,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 449ms 818us 951ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.12534895813284,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 14ms 161us 839ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b",
          "message": "Merge pull request #877 from CaptainVincent/wasmedge-enable-plugin\n\nAdd plugin support to WasmEdge runtime",
          "timestamp": "2025-03-12T23:23:48Z",
          "url": "https://github.com/Mossaka/runwasi/commit/f3481703dd0d4b6b2ff9c72c4fd3ff54e2cd372b"
        },
        "date": 1742864064394,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.838658364419906,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 670ms 70us 615ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.55469139821084,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 939ms 630us 468ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.310760843799756,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 877ms 486us 663ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.885030047883154,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 181ms 590us 953ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.19264212960571,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 887ms 38us 477ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 28.89829273498689,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 604ms 120us 360ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.254872375870706,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 443ms 955us 373ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.828585488022796,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 238ms 661us 295ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.62212822041066,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 719ms 65us 518ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.50367833558792,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 985ms 294us 509ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.982691669360968,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 567ms 683us 885ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.808895972608134,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 255ms 524us 88ns"
          }
        ]
      }
    ]
  }
}