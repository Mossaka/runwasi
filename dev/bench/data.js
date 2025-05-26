window.BENCHMARK_DATA = {
  "lastUpdate": 1748221109531,
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
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743036887665,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14628,
            "unit": "kB",
            "extra": "shim: 11776 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65996,
            "unit": "kB",
            "extra": "shim: 53376 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18172,
            "unit": "kB",
            "extra": "shim: 14592 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19132,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743036990614,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141289877,
            "range": "± 4031046",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 85416617,
            "range": "± 1598936",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 118920614,
            "range": "± 2849040",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 128704248,
            "range": "± 1319224",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 137432291,
            "range": "± 3041008",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137998201,
            "range": "± 1312019",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 85854144,
            "range": "± 1780503",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 88440993,
            "range": "± 1672503",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743122673460,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66124,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18300,
            "unit": "kB",
            "extra": "shim: 14720 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18744,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743122790853,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139575707,
            "range": "± 3348010",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84134946,
            "range": "± 1859395",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114265366,
            "range": "± 1298231",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121499544,
            "range": "± 2007480",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133054404,
            "range": "± 2941210",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135893255,
            "range": "± 2508934",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84137987,
            "range": "± 1649165",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86367757,
            "range": "± 1152293",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743209096672,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65740,
            "unit": "kB",
            "extra": "shim: 53120 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18300,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3452 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19132,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743209220787,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 130543777,
            "range": "± 2850698",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 75465834,
            "range": "± 1403715",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 106626750,
            "range": "± 2131724",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 112647158,
            "range": "± 1976407",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 126034716,
            "range": "± 2655632",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 125179109,
            "range": "± 2415104",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 77975103,
            "range": "± 1288809",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 77715433,
            "range": "± 1224765",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743295717212,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66252,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18428,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19132,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743295883950,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135802810,
            "range": "± 3285523",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 79807991,
            "range": "± 522114",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 109913827,
            "range": "± 936648",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 116177275,
            "range": "± 1466180",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131268553,
            "range": "± 1526710",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 130974615,
            "range": "± 1008866",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83658203,
            "range": "± 1859188",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 81537732,
            "range": "± 869323",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743382069611,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15012,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65868,
            "unit": "kB",
            "extra": "shim: 53376 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18428,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18744,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743382351400,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135721484,
            "range": "± 2961941",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81551125,
            "range": "± 1496135",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111709815,
            "range": "± 1047792",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119327256,
            "range": "± 1951870",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133614668,
            "range": "± 2991488",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133591723,
            "range": "± 2790446",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 85620500,
            "range": "± 2134602",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85554812,
            "range": "± 2381212",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743468711133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14628,
            "unit": "kB",
            "extra": "shim: 11776 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66380,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18428,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19000,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743468808338,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135994553,
            "range": "± 2718431",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82025756,
            "range": "± 1608449",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115449109,
            "range": "± 1645301",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120713785,
            "range": "± 1722958",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131782881,
            "range": "± 3113823",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132654675,
            "range": "± 1208712",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84069938,
            "range": "± 2184696",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84292668,
            "range": "± 2115030",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743554724695,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14756,
            "unit": "kB",
            "extra": "shim: 11776 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66252,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18300,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3452 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19256,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743554834521,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141231871,
            "range": "± 4408503",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 86071388,
            "range": "± 1152524",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 119233376,
            "range": "± 1999699",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 124328379,
            "range": "± 3860493",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135326191,
            "range": "± 3961290",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 138573490,
            "range": "± 1001147",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84876118,
            "range": "± 2404951",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87507287,
            "range": "± 1161399",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743641083322,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14628,
            "unit": "kB",
            "extra": "shim: 11776 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66380,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18684,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18744,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743641194429,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136499088,
            "range": "± 4623160",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81462001,
            "range": "± 911198",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113370046,
            "range": "± 1571981",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119710953,
            "range": "± 1607877",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132135710,
            "range": "± 4273620",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132556094,
            "range": "± 1760112",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81329333,
            "range": "± 1998480",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82742506,
            "range": "± 891250",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743727485542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14628,
            "unit": "kB",
            "extra": "shim: 11776 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65876,
            "unit": "kB",
            "extra": "shim: 53376 kB\nzygote: 12500 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18308,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3460 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19512,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743727685878,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138724321,
            "range": "± 3560621",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80724157,
            "range": "± 1414858",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111405022,
            "range": "± 1311149",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119602696,
            "range": "± 1283653",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132245500,
            "range": "± 2345887",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132007557,
            "range": "± 1133435",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82400041,
            "range": "± 1911781",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83189893,
            "range": "± 1291247",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743813840266,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14684,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2780 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66396,
            "unit": "kB",
            "extra": "shim: 53888 kB\nzygote: 12508 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18300,
            "unit": "kB",
            "extra": "shim: 14720 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19000,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743814012922,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135218202,
            "range": "± 2767433",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80938296,
            "range": "± 1075818",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112092751,
            "range": "± 2535165",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118365862,
            "range": "± 1367167",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130407934,
            "range": "± 2646249",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131728326,
            "range": "± 1319135",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83810465,
            "range": "± 2107260",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83854229,
            "range": "± 1033368",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743900502230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14756,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65740,
            "unit": "kB",
            "extra": "shim: 53120 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18428,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19256,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743900640548,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138868830,
            "range": "± 3002428",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83436686,
            "range": "± 2176895",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114620904,
            "range": "± 1235556",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120562130,
            "range": "± 1529294",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132501431,
            "range": "± 3220907",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133129962,
            "range": "± 1581800",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83672674,
            "range": "± 1462655",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83888448,
            "range": "± 1366386",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743986911743,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135759729,
            "range": "± 3978184",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 78508006,
            "range": "± 679568",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110465267,
            "range": "± 820455",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117805470,
            "range": "± 1408585",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130140360,
            "range": "± 4085472",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131508450,
            "range": "± 14437860",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80518787,
            "range": "± 2244999",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 81234717,
            "range": "± 693049",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743986981769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65660,
            "unit": "kB",
            "extra": "shim: 52992 kB\nzygote: 12668 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18556,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19384,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744073078508,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14500,
            "unit": "kB",
            "extra": "shim: 11648 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65612,
            "unit": "kB",
            "extra": "shim: 53120 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18428,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18872,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744073194049,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136208649,
            "range": "± 8966410",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80043300,
            "range": "± 1014881",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112837908,
            "range": "± 3326196",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119607382,
            "range": "± 2798127",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133720018,
            "range": "± 4023182",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131934589,
            "range": "± 2500249",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83218906,
            "range": "± 2553841",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 81681058,
            "range": "± 886936",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744159575617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15012,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65612,
            "unit": "kB",
            "extra": "shim: 52992 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18176,
            "unit": "kB",
            "extra": "shim: 14720 kB\nzygote: 3456 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19004,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3388 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744159706072,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140826742,
            "range": "± 1525887",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83853830,
            "range": "± 2139201",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114559053,
            "range": "± 1364464",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122149771,
            "range": "± 2896542",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133200507,
            "range": "± 2264919",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135901917,
            "range": "± 1943855",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 85145278,
            "range": "± 3085692",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85386044,
            "range": "± 1064995",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744245894833,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14756,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66636,
            "unit": "kB",
            "extra": "shim: 54016 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18044,
            "unit": "kB",
            "extra": "shim: 14592 kB\nzygote: 3452 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19128,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744246009922,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140304124,
            "range": "± 3699188",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 85238016,
            "range": "± 858974",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 116168796,
            "range": "± 1920979",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 123494424,
            "range": "± 1975367",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133589314,
            "range": "± 3341533",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135061826,
            "range": "± 2113624",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 86139769,
            "range": "± 1652954",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86597015,
            "range": "± 1301922",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744332328333,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15012,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65740,
            "unit": "kB",
            "extra": "shim: 53120 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18300,
            "unit": "kB",
            "extra": "shim: 14720 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19000,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744332491136,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137904840,
            "range": "± 4220081",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80853439,
            "range": "± 1094229",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113283175,
            "range": "± 1022800",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119104564,
            "range": "± 1897968",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132035392,
            "range": "± 3648072",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133500879,
            "range": "± 1818416",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83044064,
            "range": "± 2282080",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83206111,
            "range": "± 924188",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744418766812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65868,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18428,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19004,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744418784943,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 142752212,
            "range": "± 3628363",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 87055942,
            "range": "± 2063348",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 117942416,
            "range": "± 6158893",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 125214382,
            "range": "± 1315702",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135079474,
            "range": "± 2291811",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 138811126,
            "range": "± 2107052",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 86520445,
            "range": "± 1363846",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 88174179,
            "range": "± 1431610",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744510347172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14756,
            "unit": "kB",
            "extra": "shim: 11776 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66124,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18428,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19128,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744510447821,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137727377,
            "range": "± 3203698",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81410242,
            "range": "± 656247",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112742245,
            "range": "± 1003814",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119040682,
            "range": "± 1628118",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 129602296,
            "range": "± 6552054",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132427889,
            "range": "± 677345",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83415041,
            "range": "± 2579078",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82881524,
            "range": "± 956901",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744591776228,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14500,
            "unit": "kB",
            "extra": "shim: 11648 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65996,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18300,
            "unit": "kB",
            "extra": "shim: 14720 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18872,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744591808124,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135432018,
            "range": "± 4291939",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83129413,
            "range": "± 1884423",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112169173,
            "range": "± 1486530",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117982708,
            "range": "± 1297037",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131080423,
            "range": "± 2587303",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131231719,
            "range": "± 2531390",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83864602,
            "range": "± 1600417",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83718669,
            "range": "± 1854938",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744678011729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14628,
            "unit": "kB",
            "extra": "shim: 11776 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66252,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18556,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19256,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744678171837,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139168002,
            "range": "± 2913214",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81768574,
            "range": "± 1149191",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113432776,
            "range": "± 1124675",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120674618,
            "range": "± 2276573",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133687605,
            "range": "± 3785320",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134502560,
            "range": "± 2976892",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83271870,
            "range": "± 1656042",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84614927,
            "range": "± 1909628",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744764454271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65956,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12452 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18428,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19516,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744764500748,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140088684,
            "range": "± 2125025",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84283759,
            "range": "± 1271533",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115209262,
            "range": "± 1421929",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122941271,
            "range": "± 2791711",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134791463,
            "range": "± 2024041",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135756120,
            "range": "± 1212489",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83916678,
            "range": "± 2064706",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86244991,
            "range": "± 981234",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744850794779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14756,
            "unit": "kB",
            "extra": "shim: 11776 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65740,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18300,
            "unit": "kB",
            "extra": "shim: 14720 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19132,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744850865457,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140403093,
            "range": "± 5951174",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81952236,
            "range": "± 601711",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115410057,
            "range": "± 2612918",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121020863,
            "range": "± 1205903",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135744501,
            "range": "± 3242975",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133718411,
            "range": "± 2152557",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84683127,
            "range": "± 2064392",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83537099,
            "range": "± 942718",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744937180959,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66380,
            "unit": "kB",
            "extra": "shim: 53888 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18428,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19260,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744937301031,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138838987,
            "range": "± 2547135",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83207975,
            "range": "± 1012046",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114679931,
            "range": "± 417993",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121737811,
            "range": "± 1910476",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134903962,
            "range": "± 3607692",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135476380,
            "range": "± 3447987",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84196154,
            "range": "± 1627978",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85249910,
            "range": "± 2153054",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745023481242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14756,
            "unit": "kB",
            "extra": "shim: 11776 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66252,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18428,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18748,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3388 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745023539049,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138239896,
            "range": "± 2055443",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84214485,
            "range": "± 1178302",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114013372,
            "range": "± 1328704",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122086033,
            "range": "± 2363445",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134089481,
            "range": "± 3473057",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135846765,
            "range": "± 1574728",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84670914,
            "range": "± 3138097",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86275248,
            "range": "± 1378497",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745110199117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14500,
            "unit": "kB",
            "extra": "shim: 11648 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66252,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18300,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3452 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18748,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3388 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745110295680,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136546941,
            "range": "± 3547595",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80438221,
            "range": "± 2005351",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113163980,
            "range": "± 2901148",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119307437,
            "range": "± 2342327",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131577208,
            "range": "± 1995901",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133321484,
            "range": "± 1639889",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82715971,
            "range": "± 1940208",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83950345,
            "range": "± 6098883",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745196508530,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65868,
            "unit": "kB",
            "extra": "shim: 53376 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18300,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3452 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19000,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745196664180,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137533544,
            "range": "± 4809498",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81264622,
            "range": "± 649631",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111120895,
            "range": "± 1504957",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117834520,
            "range": "± 2092781",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132267691,
            "range": "± 4257010",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132643483,
            "range": "± 2125537",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81835346,
            "range": "± 2475569",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82716074,
            "range": "± 721019",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745282783599,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66380,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18172,
            "unit": "kB",
            "extra": "shim: 14720 kB\nzygote: 3452 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19132,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745282887063,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140410397,
            "range": "± 4547623",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82488040,
            "range": "± 1133569",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115920073,
            "range": "± 1774530",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120053614,
            "range": "± 2318792",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132500288,
            "range": "± 2786469",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133408249,
            "range": "± 954475",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81740216,
            "range": "± 2749848",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83521885,
            "range": "± 1262948",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745369211480,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66000,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18308,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3460 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19000,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745369272892,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139640010,
            "range": "± 3760635",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83310829,
            "range": "± 850497",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 116403852,
            "range": "± 1892536",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120363831,
            "range": "± 773232",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133857092,
            "range": "± 3057297",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134265927,
            "range": "± 1300492",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83946859,
            "range": "± 3560957",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84128859,
            "range": "± 1181807",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745455626501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14972,
            "unit": "kB",
            "extra": "shim: 12036 kB\nzygote: 2936 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65864,
            "unit": "kB",
            "extra": "shim: 53204 kB\nzygote: 12660 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18824,
            "unit": "kB",
            "extra": "shim: 15108 kB\nzygote: 3716 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19112,
            "unit": "kB",
            "extra": "shim: 15556 kB\nzygote: 3556 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745455673277,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140230836,
            "range": "± 3835444",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84270251,
            "range": "± 1326397",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115558858,
            "range": "± 1652740",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 124769237,
            "range": "± 1757968",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 136334210,
            "range": "± 4236276",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 139684813,
            "range": "± 2638984",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87673915,
            "range": "± 4115171",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 89295486,
            "range": "± 2185438",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745541963821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14900,
            "unit": "kB",
            "extra": "shim: 11868 kB\nzygote: 3032 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65884,
            "unit": "kB",
            "extra": "shim: 53280 kB\nzygote: 12604 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18344,
            "unit": "kB",
            "extra": "shim: 14764 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19152,
            "unit": "kB",
            "extra": "shim: 15764 kB\nzygote: 3388 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745542080355,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138689443,
            "range": "± 2929074",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84387749,
            "range": "± 1657905",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 118034849,
            "range": "± 2693846",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 127861529,
            "range": "± 2846267",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 140744443,
            "range": "± 4089503",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 140598419,
            "range": "± 2737879",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 89615043,
            "range": "± 3538612",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 92169514,
            "range": "± 2467091",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745628339091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15004,
            "unit": "kB",
            "extra": "shim: 11976 kB\nzygote: 3028 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65640,
            "unit": "kB",
            "extra": "shim: 53036 kB\nzygote: 12604 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18348,
            "unit": "kB",
            "extra": "shim: 14740 kB\nzygote: 3608 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19252,
            "unit": "kB",
            "extra": "shim: 15868 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745628410809,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138234201,
            "range": "± 3886687",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84423928,
            "range": "± 2035650",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115855425,
            "range": "± 1751352",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 126457699,
            "range": "± 2673518",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 137043976,
            "range": "± 3947121",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 138236315,
            "range": "± 2290590",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87162446,
            "range": "± 3261384",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 89044603,
            "range": "± 1747342",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745714986273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14984,
            "unit": "kB",
            "extra": "shim: 11892 kB\nzygote: 3092 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65636,
            "unit": "kB",
            "extra": "shim: 52968 kB\nzygote: 12668 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18260,
            "unit": "kB",
            "extra": "shim: 14652 kB\nzygote: 3608 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19128,
            "unit": "kB",
            "extra": "shim: 15612 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745715098255,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 142154509,
            "range": "± 4232781",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82809179,
            "range": "± 1499145",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114608599,
            "range": "± 1525035",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121624497,
            "range": "± 2077063",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135756387,
            "range": "± 5487864",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135824190,
            "range": "± 3411983",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 89100276,
            "range": "± 3833581",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86684137,
            "range": "± 3269098",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745801456996,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139635967,
            "range": "± 2862324",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84971836,
            "range": "± 1438940",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115388494,
            "range": "± 1830607",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 123324668,
            "range": "± 3385623",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 138302398,
            "range": "± 6855265",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 138111273,
            "range": "± 2056276",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 89445176,
            "range": "± 4730994",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 88427886,
            "range": "± 1919179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745801537548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14844,
            "unit": "kB",
            "extra": "shim: 11992 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65640,
            "unit": "kB",
            "extra": "shim: 53100 kB\nzygote: 12540 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18260,
            "unit": "kB",
            "extra": "shim: 14776 kB\nzygote: 3484 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19084,
            "unit": "kB",
            "extra": "shim: 15532 kB\nzygote: 3552 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745887594425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14568,
            "unit": "kB",
            "extra": "shim: 11688 kB\nzygote: 2880 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65932,
            "unit": "kB",
            "extra": "shim: 53280 kB\nzygote: 12652 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18844,
            "unit": "kB",
            "extra": "shim: 15136 kB\nzygote: 3708 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19260,
            "unit": "kB",
            "extra": "shim: 15864 kB\nzygote: 3396 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745887705245,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 143338112,
            "range": "± 4525901",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81705374,
            "range": "± 1864167",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112353485,
            "range": "± 1819990",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119172885,
            "range": "± 2425941",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135061457,
            "range": "± 5142351",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134876083,
            "range": "± 2026612",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88855111,
            "range": "± 5298623",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85669582,
            "range": "± 1689617",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745973992690,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14936,
            "unit": "kB",
            "extra": "shim: 12028 kB\nzygote: 2908 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66176,
            "unit": "kB",
            "extra": "shim: 53684 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18640,
            "unit": "kB",
            "extra": "shim: 15060 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19048,
            "unit": "kB",
            "extra": "shim: 15500 kB\nzygote: 3548 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745974109471,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 142774619,
            "range": "± 3553041",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80992608,
            "range": "± 1097574",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112267755,
            "range": "± 826656",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119965671,
            "range": "± 3334491",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134934397,
            "range": "± 4889474",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135544192,
            "range": "± 4257777",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87386606,
            "range": "± 3217578",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86839931,
            "range": "± 1561189",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746060780205,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14844,
            "unit": "kB",
            "extra": "shim: 11840 kB\nzygote: 3004 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66012,
            "unit": "kB",
            "extra": "shim: 53520 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18892,
            "unit": "kB",
            "extra": "shim: 15248 kB\nzygote: 3644 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19260,
            "unit": "kB",
            "extra": "shim: 15700 kB\nzygote: 3560 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746060892765,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141079532,
            "range": "± 5058636",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81208907,
            "range": "± 2954726",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111072564,
            "range": "± 2573024",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121232630,
            "range": "± 3126505",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135983448,
            "range": "± 4924677",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134271849,
            "range": "± 3162698",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88673135,
            "range": "± 2238133",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85759419,
            "range": "± 1853676",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746146885709,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14748,
            "unit": "kB",
            "extra": "shim: 11812 kB\nzygote: 2936 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66184,
            "unit": "kB",
            "extra": "shim: 53524 kB\nzygote: 12660 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18504,
            "unit": "kB",
            "extra": "shim: 14964 kB\nzygote: 3540 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19308,
            "unit": "kB",
            "extra": "shim: 15740 kB\nzygote: 3568 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746146952988,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140502093,
            "range": "± 3897901",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82746437,
            "range": "± 1593036",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115247876,
            "range": "± 1905759",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121428158,
            "range": "± 2759037",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 137285881,
            "range": "± 2948627",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 138356857,
            "range": "± 2893564",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 90273514,
            "range": "± 5356462",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 93966444,
            "range": "± 3437400",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746233155906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14780,
            "unit": "kB",
            "extra": "shim: 11840 kB\nzygote: 2940 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66608,
            "unit": "kB",
            "extra": "shim: 53940 kB\nzygote: 12668 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18264,
            "unit": "kB",
            "extra": "shim: 14812 kB\nzygote: 3452 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19596,
            "unit": "kB",
            "extra": "shim: 16020 kB\nzygote: 3576 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746233344140,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 142559398,
            "range": "± 3939653",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83420153,
            "range": "± 900545",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 116373576,
            "range": "± 1210144",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 124183900,
            "range": "± 3400022",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135046404,
            "range": "± 9828860",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 139981487,
            "range": "± 2573368",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 89539514,
            "range": "± 3215177",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87419054,
            "range": "± 1159452",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746319961968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14668,
            "unit": "kB",
            "extra": "shim: 11732 kB\nzygote: 2936 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66000,
            "unit": "kB",
            "extra": "shim: 53336 kB\nzygote: 12664 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18428,
            "unit": "kB",
            "extra": "shim: 14784 kB\nzygote: 3644 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19400,
            "unit": "kB",
            "extra": "shim: 15844 kB\nzygote: 3556 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746320091231,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140261699,
            "range": "± 7133302",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83164308,
            "range": "± 2437550",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 116119216,
            "range": "± 712860",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121224807,
            "range": "± 2195002",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 136338953,
            "range": "± 3328302",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137703089,
            "range": "± 2958342",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87881766,
            "range": "± 3662823",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87804214,
            "range": "± 1780251",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746406280468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15068,
            "unit": "kB",
            "extra": "shim: 12156 kB\nzygote: 2912 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65692,
            "unit": "kB",
            "extra": "shim: 53080 kB\nzygote: 12612 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18472,
            "unit": "kB",
            "extra": "shim: 14852 kB\nzygote: 3620 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19248,
            "unit": "kB",
            "extra": "shim: 15736 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746406342911,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 143593468,
            "range": "± 2856645",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84482172,
            "range": "± 2449377",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 116414549,
            "range": "± 2880405",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122794180,
            "range": "± 3620287",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 138838467,
            "range": "± 3935054",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 140066598,
            "range": "± 2157526",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87705370,
            "range": "± 2594663",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87317545,
            "range": "± 2304802",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746492463192,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14816,
            "unit": "kB",
            "extra": "shim: 11908 kB\nzygote: 2908 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66224,
            "unit": "kB",
            "extra": "shim: 53620 kB\nzygote: 12604 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18516,
            "unit": "kB",
            "extra": "shim: 14888 kB\nzygote: 3628 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19168,
            "unit": "kB",
            "extra": "shim: 15732 kB\nzygote: 3436 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746492552858,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139765760,
            "range": "± 3075901",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81014682,
            "range": "± 2009205",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114518802,
            "range": "± 2432970",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122238046,
            "range": "± 2172367",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134606263,
            "range": "± 4393329",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137961993,
            "range": "± 2544062",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 91870905,
            "range": "± 3330393",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86412705,
            "range": "± 3984317",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746578836385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14664,
            "unit": "kB",
            "extra": "shim: 11728 kB\nzygote: 2936 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65996,
            "unit": "kB",
            "extra": "shim: 53460 kB\nzygote: 12536 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18404,
            "unit": "kB",
            "extra": "shim: 14952 kB\nzygote: 3452 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19208,
            "unit": "kB",
            "extra": "shim: 15656 kB\nzygote: 3552 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746578945563,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 143099802,
            "range": "± 3978924",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 85457890,
            "range": "± 2156716",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115413406,
            "range": "± 2186852",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 125572620,
            "range": "± 3805117",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135204538,
            "range": "± 2909143",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 140105013,
            "range": "± 2422234",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 89849580,
            "range": "± 2844989",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 91989626,
            "range": "± 1684609",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746665285394,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15140,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65884,
            "unit": "kB",
            "extra": "shim: 53216 kB\nzygote: 12668 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18640,
            "unit": "kB",
            "extra": "shim: 15060 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19084,
            "unit": "kB",
            "extra": "shim: 15536 kB\nzygote: 3548 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746665403489,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141545135,
            "range": "± 4796124",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 85342688,
            "range": "± 1248225",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 117674877,
            "range": "± 1263828",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 127238304,
            "range": "± 2587037",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134620858,
            "range": "± 3959984",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 139746091,
            "range": "± 3198482",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88170817,
            "range": "± 2944790",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 91293917,
            "range": "± 1823041",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746751641506,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14916,
            "unit": "kB",
            "extra": "shim: 11936 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65872,
            "unit": "kB",
            "extra": "shim: 53220 kB\nzygote: 12652 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18388,
            "unit": "kB",
            "extra": "shim: 14808 kB\nzygote: 3580 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19300,
            "unit": "kB",
            "extra": "shim: 15788 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746751814282,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141655448,
            "range": "± 3479913",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 86349898,
            "range": "± 2313692",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 117329688,
            "range": "± 2570514",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 124441460,
            "range": "± 3552202",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 137219688,
            "range": "± 4649940",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 139392941,
            "range": "± 3362694",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87352454,
            "range": "± 4562240",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 90257222,
            "range": "± 1136526",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746838035795,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139978139,
            "range": "± 4521220",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82796574,
            "range": "± 1306349",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115222819,
            "range": "± 2184230",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 123894994,
            "range": "± 5881697",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134877324,
            "range": "± 6207489",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137164141,
            "range": "± 2822037",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88660336,
            "range": "± 4422059",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 88077524,
            "range": "± 1918714",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746838100154,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14816,
            "unit": "kB",
            "extra": "shim: 11964 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65600,
            "unit": "kB",
            "extra": "shim: 52996 kB\nzygote: 12604 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18724,
            "unit": "kB",
            "extra": "shim: 15036 kB\nzygote: 3688 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18964,
            "unit": "kB",
            "extra": "shim: 15580 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746924695432,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15076,
            "unit": "kB",
            "extra": "shim: 12096 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66228,
            "unit": "kB",
            "extra": "shim: 53736 kB\nzygote: 12492 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18188,
            "unit": "kB",
            "extra": "shim: 14700 kB\nzygote: 3488 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19084,
            "unit": "kB",
            "extra": "shim: 15532 kB\nzygote: 3552 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746924786053,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137280715,
            "range": "± 6135193",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 78622392,
            "range": "± 3057238",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 109447235,
            "range": "± 1998663",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117345624,
            "range": "± 2434011",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135224358,
            "range": "± 4107510",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134428638,
            "range": "± 3685385",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 86275955,
            "range": "± 3237517",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83512695,
            "range": "± 3040425",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747011081415,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14708,
            "unit": "kB",
            "extra": "shim: 11772 kB\nzygote: 2936 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66224,
            "unit": "kB",
            "extra": "shim: 53604 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18260,
            "unit": "kB",
            "extra": "shim: 14772 kB\nzygote: 3488 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19556,
            "unit": "kB",
            "extra": "shim: 16040 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747011199280,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140784750,
            "range": "± 3146289",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84077401,
            "range": "± 2685579",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114206256,
            "range": "± 1671227",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 123985207,
            "range": "± 3044114",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 136345819,
            "range": "± 4098427",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137995739,
            "range": "± 2474649",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88777206,
            "range": "± 2629125",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87629354,
            "range": "± 1043910",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747097268243,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14932,
            "unit": "kB",
            "extra": "shim: 11952 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66308,
            "unit": "kB",
            "extra": "shim: 53704 kB\nzygote: 12604 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18132,
            "unit": "kB",
            "extra": "shim: 14648 kB\nzygote: 3484 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19112,
            "unit": "kB",
            "extra": "shim: 15728 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747097382572,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139295369,
            "range": "± 4467385",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83856693,
            "range": "± 2947686",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114854853,
            "range": "± 1562013",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122703940,
            "range": "± 2355904",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135781868,
            "range": "± 3538857",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137216272,
            "range": "± 2874992",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87728137,
            "range": "± 2891192",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87488408,
            "range": "± 2314179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747183636630,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14924,
            "unit": "kB",
            "extra": "shim: 11988 kB\nzygote: 2936 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65736,
            "unit": "kB",
            "extra": "shim: 53080 kB\nzygote: 12656 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18356,
            "unit": "kB",
            "extra": "shim: 14740 kB\nzygote: 3616 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18916,
            "unit": "kB",
            "extra": "shim: 15480 kB\nzygote: 3436 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747183771402,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138289372,
            "range": "± 4462009",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82854154,
            "range": "± 2365979",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115477630,
            "range": "± 2396672",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 123282961,
            "range": "± 969063",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134309425,
            "range": "± 3721399",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137946050,
            "range": "± 3278300",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 89210839,
            "range": "± 2251111",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86675907,
            "range": "± 1431318",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747270019508,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14788,
            "unit": "kB",
            "extra": "shim: 11852 kB\nzygote: 2936 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65476,
            "unit": "kB",
            "extra": "shim: 52820 kB\nzygote: 12656 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18660,
            "unit": "kB",
            "extra": "shim: 15120 kB\nzygote: 3540 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19204,
            "unit": "kB",
            "extra": "shim: 15688 kB\nzygote: 3516 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747270214837,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139325994,
            "range": "± 3074286",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82413851,
            "range": "± 1049828",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113029478,
            "range": "± 1820518",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120628046,
            "range": "± 2473341",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135319339,
            "range": "± 7045666",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137239272,
            "range": "± 3524541",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88133205,
            "range": "± 3991769",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87718389,
            "range": "± 1534733",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747356523676,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15092,
            "unit": "kB",
            "extra": "shim: 12112 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66020,
            "unit": "kB",
            "extra": "shim: 53400 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18508,
            "unit": "kB",
            "extra": "shim: 14996 kB\nzygote: 3512 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19596,
            "unit": "kB",
            "extra": "shim: 16020 kB\nzygote: 3576 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747356638648,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141985544,
            "range": "± 7409520",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80608344,
            "range": "± 1472422",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110100046,
            "range": "± 1602989",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117793879,
            "range": "± 2635219",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135344126,
            "range": "± 3836050",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134026711,
            "range": "± 3360770",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 85116001,
            "range": "± 3088458",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84799865,
            "range": "± 1370852",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747442846844,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14996,
            "unit": "kB",
            "extra": "shim: 11968 kB\nzygote: 3028 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66620,
            "unit": "kB",
            "extra": "shim: 53952 kB\nzygote: 12668 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18356,
            "unit": "kB",
            "extra": "shim: 14740 kB\nzygote: 3616 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19196,
            "unit": "kB",
            "extra": "shim: 15760 kB\nzygote: 3436 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747442898900,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135838128,
            "range": "± 3710125",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 79006545,
            "range": "± 1663519",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110485352,
            "range": "± 1350285",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121251384,
            "range": "± 3978856",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130809701,
            "range": "± 4464171",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133380396,
            "range": "± 2928503",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87097486,
            "range": "± 3526097",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84281549,
            "range": "± 2811250",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747529725419,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 144363933,
            "range": "± 3999452",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83755625,
            "range": "± 1929564",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114064873,
            "range": "± 1911709",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 125900050,
            "range": "± 1223485",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 138265734,
            "range": "± 6994751",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 138793248,
            "range": "± 2098641",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 90147168,
            "range": "± 2803092",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 90089802,
            "range": "± 2198439",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747529737219,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14952,
            "unit": "kB",
            "extra": "shim: 12016 kB\nzygote: 2936 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65604,
            "unit": "kB",
            "extra": "shim: 52936 kB\nzygote: 12668 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18508,
            "unit": "kB",
            "extra": "shim: 14924 kB\nzygote: 3584 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19216,
            "unit": "kB",
            "extra": "shim: 15704 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747616005870,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139106596,
            "range": "± 4078832",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80517815,
            "range": "± 1348972",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111655092,
            "range": "± 1934504",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120393606,
            "range": "± 2532070",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133500083,
            "range": "± 6706975",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133926512,
            "range": "± 2182501",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87626142,
            "range": "± 3171852",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85873515,
            "range": "± 1794636",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747616073377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15076,
            "unit": "kB",
            "extra": "shim: 12048 kB\nzygote: 3028 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66172,
            "unit": "kB",
            "extra": "shim: 53552 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18728,
            "unit": "kB",
            "extra": "shim: 15100 kB\nzygote: 3628 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19248,
            "unit": "kB",
            "extra": "shim: 15636 kB\nzygote: 3612 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747702135457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15000,
            "unit": "kB",
            "extra": "shim: 12096 kB\nzygote: 2904 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66016,
            "unit": "kB",
            "extra": "shim: 53396 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18312,
            "unit": "kB",
            "extra": "shim: 14700 kB\nzygote: 3612 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19172,
            "unit": "kB",
            "extra": "shim: 15624 kB\nzygote: 3548 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747702242841,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137631916,
            "range": "± 4922519",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81125883,
            "range": "± 1454569",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111443805,
            "range": "± 1244562",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119067560,
            "range": "± 2206850",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132866669,
            "range": "± 5815208",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134920487,
            "range": "± 2752803",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 87121582,
            "range": "± 6789996",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86466420,
            "range": "± 2165059",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747788565694,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14832,
            "unit": "kB",
            "extra": "shim: 11896 kB\nzygote: 2936 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66076,
            "unit": "kB",
            "extra": "shim: 53412 kB\nzygote: 12664 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18580,
            "unit": "kB",
            "extra": "shim: 14960 kB\nzygote: 3620 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19356,
            "unit": "kB",
            "extra": "shim: 15968 kB\nzygote: 3388 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747788667868,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138070491,
            "range": "± 6677156",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81214850,
            "range": "± 2233660",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111804478,
            "range": "± 1759811",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121712366,
            "range": "± 2491795",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133872125,
            "range": "± 4619679",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134134003,
            "range": "± 3242356",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 86924733,
            "range": "± 3789716",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86628437,
            "range": "± 1990543",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747874893229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14696,
            "unit": "kB",
            "extra": "shim: 11760 kB\nzygote: 2936 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65696,
            "unit": "kB",
            "extra": "shim: 53132 kB\nzygote: 12564 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18088,
            "unit": "kB",
            "extra": "shim: 14596 kB\nzygote: 3492 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19464,
            "unit": "kB",
            "extra": "shim: 15892 kB\nzygote: 3572 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747875007500,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140419742,
            "range": "± 4736324",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82726299,
            "range": "± 2567746",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114340484,
            "range": "± 1398028",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122403466,
            "range": "± 2079288",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135804506,
            "range": "± 3963918",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 141177060,
            "range": "± 2045190",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 89891636,
            "range": "± 5421925",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 88318416,
            "range": "± 3191099",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747961305830,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14692,
            "unit": "kB",
            "extra": "shim: 11756 kB\nzygote: 2936 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66240,
            "unit": "kB",
            "extra": "shim: 53636 kB\nzygote: 12604 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18484,
            "unit": "kB",
            "extra": "shim: 14984 kB\nzygote: 3500 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19132,
            "unit": "kB",
            "extra": "shim: 15572 kB\nzygote: 3560 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747961377195,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141580709,
            "range": "± 3782234",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81848628,
            "range": "± 3216027",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113760303,
            "range": "± 1750276",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 122482549,
            "range": "± 2500432",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134576395,
            "range": "± 3753604",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136285730,
            "range": "± 2329206",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 90798503,
            "range": "± 3253237",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 87808366,
            "range": "± 2129892",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748047558090,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14952,
            "unit": "kB",
            "extra": "shim: 12056 kB\nzygote: 2896 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65724,
            "unit": "kB",
            "extra": "shim: 53192 kB\nzygote: 12532 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18312,
            "unit": "kB",
            "extra": "shim: 14704 kB\nzygote: 3608 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19044,
            "unit": "kB",
            "extra": "shim: 15604 kB\nzygote: 3440 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748047692629,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140339217,
            "range": "± 5188104",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83727838,
            "range": "± 1120513",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114708495,
            "range": "± 2022161",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 125360038,
            "range": "± 2812912",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 135328562,
            "range": "± 2935576",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 139709839,
            "range": "± 3025302",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88991457,
            "range": "± 3781089",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 90830207,
            "range": "± 4324270",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748134449847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14856,
            "unit": "kB",
            "extra": "shim: 12024 kB\nzygote: 2832 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65360,
            "unit": "kB",
            "extra": "shim: 52820 kB\nzygote: 12540 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18788,
            "unit": "kB",
            "extra": "shim: 15148 kB\nzygote: 3640 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19412,
            "unit": "kB",
            "extra": "shim: 15840 kB\nzygote: 3572 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748134637262,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140808474,
            "range": "± 4452116",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84567747,
            "range": "± 2055744",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 115993155,
            "range": "± 1097169",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 125041041,
            "range": "± 3216285",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 138479223,
            "range": "± 5429567",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 137624447,
            "range": "± 2604593",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88192511,
            "range": "± 3016741",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 90511389,
            "range": "± 1659465",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748220627576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15032,
            "unit": "kB",
            "extra": "shim: 12000 kB\nzygote: 3032 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66216,
            "unit": "kB",
            "extra": "shim: 53596 kB\nzygote: 12620 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18616,
            "unit": "kB",
            "extra": "shim: 14984 kB\nzygote: 3632 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18964,
            "unit": "kB",
            "extra": "shim: 15580 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748220745154,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141038917,
            "range": "± 5712690",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82111466,
            "range": "± 2066027",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114337200,
            "range": "± 1198133",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121517347,
            "range": "± 1971973",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133742512,
            "range": "± 3688293",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136207617,
            "range": "± 2425670",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 88492753,
            "range": "± 4660473",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86566853,
            "range": "± 2522573",
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
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743036946688,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20225.4322,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743122677721,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20656.853,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743209060374,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20360.4962,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743295785031,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20099.3391,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743382074879,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19283.9188,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743468709509,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20502.2894,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743554743109,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20342.5339,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743641091318,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20482.425,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743727530043,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20543.1953,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743813853651,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19259.5538,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743900560841,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19550.7708,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743986920372,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20568.4563,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744073098784,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20625.341,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744159518402,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19604.0653,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744245904776,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20331.5714,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744332346772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20492.2144,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744418689851,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19315.1397,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744510402477,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19452.0909,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744591712457,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20705.5479,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744678075802,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20424.5899,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744764466752,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20319.0373,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744850809625,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19226.6988,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744937202700,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20532.1331,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745023503973,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20053.9727,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745110267734,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20268.4118,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745196516897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19110.9362,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745282788354,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19301.975,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745369172977,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20432.7493,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745455674194,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20600.8343,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745542063327,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20047.7155,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745628300996,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20407.1143,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745714994644,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20063.377,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745801295464,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19010.5855,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745887611481,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20712.3268,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745974011788,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20274.386,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746060877995,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19278.6249,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746146899185,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19050.5983,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746233173877,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20292.2211,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746319974116,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20447.5878,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746406282636,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20032.298,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746492471903,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20289.1494,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746578846962,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20038.998,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746665285627,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20479.1779,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746751665366,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20313.0352,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746837926079,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20756.3352,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746924692273,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19261.2615,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747011035277,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20574.8058,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747097278014,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20328.5022,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747183730193,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20288.426,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747270094098,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20363.8591,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747356589349,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20049.5252,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747442803503,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20805.5714,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747529557681,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20409.6825,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747616048865,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19913.3152,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747702239381,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20663.3533,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747788505957,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20319.5378,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747874900707,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20817.8182,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747961272940,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20188.7305,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748047582521,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20164.7233,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748134461890,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20838.6776,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748220601918,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20569.389,
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
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743036948234,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743122678990,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743209061638,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743295786205,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743382077291,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743468710824,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743554745497,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743641092600,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743727531318,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743813854950,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743900562141,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743986922716,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744073100124,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744159519831,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.6,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744245906151,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744332348137,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744418692230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.7,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744510404507,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.7,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744591714080,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744678078213,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744764468364,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744850812014,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.7,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744937204141,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745023506378,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745110269183,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745196518685,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745282790749,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745369174455,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745455676990,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745542064899,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745628302919,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745714996057,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745801296998,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.7,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745887613290,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745974013352,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746060880237,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.7,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746146900979,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746233176444,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746319975802,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746406285377,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746492474340,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746578848651,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746665288893,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746751668109,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746837928861,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746924693946,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.7,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747011037232,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747097279872,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747183731937,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747270096824,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747356591288,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747442805235,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747529559161,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747616051302,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747702242143,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747788507816,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747874902753,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.2,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747961274554,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748047584593,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748134463952,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748220603961,
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
        "date": 1742950393032,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.5224627988287,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 793ms 176us 37ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.42074269630898,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 232ms 44us 951ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.57615723088343,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 605ms 187us 510ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.981147007308683,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 750ms 563us 192ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.76278550391563,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 201ms 420us 847ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.669495867509188,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 704ms 650us 880ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.415465129765625,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 540ms 837us 36ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.67344048003149,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 290ms 416us 539ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.69039257548457,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 871ms 604us 414ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.41536512534219,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 438ms 84us 975ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.29542869650598,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 366ms 903us 481ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.137872980521422,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 966ms 34us 880ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743037394618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.209460170691386,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 916ms 565us 456ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.56365283597805,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 118ms 596us 383ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.837248578379638,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 397ms 940us 711ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.204858690152065,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 768ms 450us 755ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.01456181977644,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 16ms 394us 382ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.93234537953911,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 408ms 675us 41ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.677443071874434,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 113ms 80us 767ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.05835938297019,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 932ms 403us 989ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.89197799168193,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 675ms 559us 993ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.09527685375134,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 141ms 420us 90ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.48659775136661,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 655ms 328us 351ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.366642656109036,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 99ms 885us 970ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743123205656,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.95054902585171,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 626ms 873us 883ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.352190607804545,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 286ms 790us 233ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.612206012847587,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 435ms 936us 307ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.14241376105,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 39ms 669us 486ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.19709047717929,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 883ms 823us 94ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.37677742449397,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 40ms 493us 467ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.501602903917245,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 65ms 280us 35ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.49282953497658,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 393ms 473us 379ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.42446965180461,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 751ms 122us 251ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.78959862787454,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 738ms 226us 599ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.35465249354766,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 144ms 680us 414ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.274452842481413,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 445ms 998us 196ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743209578006,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.44536940378757,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 823ms 425us 60ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.68221498675767,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 25ms 166us 49ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.681391722120157,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 113ms 433us 585ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.936337270632052,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 950ms 818us 121ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.98379580018097,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 327ms 16us 6ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.24633370814195,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 61ms 858us 328ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.649834879844104,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 260ms 959us 477ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.109872476335646,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 208ms 779us 806ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.32971010765397,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 448ms 694us 246ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.5480356400744,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 236ms 611us 535ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.331712252050085,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 230ms 566us 922ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.137181949830925,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 968ms 688us 406ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743296248814,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.86452492389795,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 916ms 277us 58ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.32659889679108,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 528ms 38us 142ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.895233147164209,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 135ms 572us 174ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.210384081476153,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 744ms 559us 417ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 39.27619530421491,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 460ms 714us 620ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.871275148960503,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 392ms 571us 903ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.788383333199771,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 524ms 818us 598ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.526080734333505,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 799ms 358us 998ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.75115120732757,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 383ms 724us 381ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.25313647602077,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 288ms 482us 671ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.607114618713577,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 215ms 156us 152ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.365575876777424,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 103ms 868us 726ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743382787563,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.22230332050001,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 148ms 906us 433ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.720633950906574,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 995ms 23us 867ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.540109607296188,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 775ms 272us 471ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.887111187047235,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 172ms 199us 323ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.85509273074272,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 736ms 651us 999ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.044070459615547,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 284ms 437us 984ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.531366568164605,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 902ms 365us 660ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.25937875490866,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 464ms 387us 874ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.24811348620095,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 461ms 352us 131ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.69756295331825,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 210ms 464us 921ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.358854404112403,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 128ms 974us 884ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.95393258825707,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 680ms 470us 440ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743469301588,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.11667834475489,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 563ms 86us 499ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.39368275449161,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 253ms 629us 523ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.751480994694072,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 789ms 803us 638ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.10298271632792,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 212ms 86us 631ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.588954970960444,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 603ms 559us 497ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.82372641943148,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 530ms 350us 498ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.65438846333103,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 236ms 527us 779ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.3472858225466,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 138ms 757us 800ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.7299673676504,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 701ms 643us 776ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.07218730390616,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 320ms 512us 375ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.43013959723655,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 863ms 755us 544ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.396600334809033,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 988ms 252us 417ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743555243454,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.296765131620255,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 121ms 641us 606ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.38530609841519,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 483ms 622us 23ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.919634963224341,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 25ms 768us 557ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.261678855196765,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 523ms 590us 785ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.564112850745445,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 930ms 844us 147ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.514789015733488,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 770ms 995us 57ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.74431939494968,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 757ms 331us 321ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 60.00681970305107,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 664ms 772us 520ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.10224478655749,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 484ms 44us 644ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 77.00715849227478,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 985ms 805us 730ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.652184817713675,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 52ms 179us 996ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.393740324943874,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 998ms 892us 271ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743641617618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.71441838077715,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 718ms 258us 277ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 33.808226197029335,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 29s 578ms 600us 18ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.280668280532586,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 24ms 734us 162ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.952114209958607,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 880ms 173us 998ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.908865568241524,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 379ms 53us 686ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 28.790599341779,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 733ms 559us 664ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.328801558042183,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 25ms 499us 903ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.133398633263575,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 814ms 706us 117ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.38260404853979,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 757ms 932us 862ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.13506703937342,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 14s 57ms 764us 217ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.444969208506173,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 808ms 870us 319ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.959703876863095,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 657ms 804us 162ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743728111525,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 47.712787159791226,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 958ms 742us 80ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.71470388281806,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 806ms 237us 362ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.0762262146695,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 41ms 768us 209ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.911672277821133,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 61ms 559us 654ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.47732619858933,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 414ms 290us 32ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 28.219499261533517,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 35s 436ms 489us 880ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.242228863305552,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 515ms 988us 307ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.85850873948235,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 902ms 375us 530ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.56935251128405,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 891ms 689us 406ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.77298126214832,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 741ms 363us 658ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.976359293171976,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 592ms 483us 159ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.955450807245217,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 674ms 506us 166ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743814426808,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.723032406348544,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 714ms 909us 629ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.62861604229152,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 877ms 850us 584ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.62426959166872,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 379ms 483us 415ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.883055744308628,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 190ms 502us 890ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.62142684722219,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 580ms 597us 383ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.617463792589284,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 763ms 863us 341ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.513860753261287,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 998ms 98us 564ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.38939019667738,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 424ms 823us 588ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.88714706944978,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 362ms 903us 579ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.85209781249078,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 359ms 679us 10ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.404879386002303,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 957ms 473us 473ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.956290523101925,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 671ms 207us 857ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743901076378,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.93451910798088,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 633ms 50us 778ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.671211344328,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 33ms 811us 85ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.752661795811019,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 784ms 377us 751ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.034282249094135,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 514ms 648us 550ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.01669636956204,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 304ms 231us 969ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.598554717101138,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 681ms 282us 147ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.670138574810572,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 152ms 147us 985ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.058064228745636,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 932ms 488us 612ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.67157855842798,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 395ms 939us 411ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.07146468995109,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 320ms 640us 594ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.380000607994173,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 50ms 58us 784ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.23163880925664,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 608ms 73us 698ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1743987392713,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.878894475784115,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 654ms 515us 105ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.28533108196285,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 340ms 388us 749ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.63860353624432,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 312ms 527us 47ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.183652030390874,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 860ms 308us 47ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.817041945979575,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 443ms 104us 710ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.69143207629412,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 679ms 749us 681ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.641072513141484,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 308ms 18us 782ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.04166862606633,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 229ms 1us 572ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.4179332791878,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 591ms 614us 497ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.4088669766238,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 439ms 258us 527ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.279746546415097,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 426ms 17us 730ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.220279997031895,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 651ms 216us 883ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744073613618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.46694273562351,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 814ms 951us 51ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.09427663305005,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 494ms 674us 800ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.593397779653763,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 524ms 137us 771ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.99338984645123,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 696ms 58us 79ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.339976649290264,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 780ms 948us 724ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.379743043884186,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 37ms 57us 387ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.434628114981692,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 434ms 512us 920ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.36786123903715,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 132ms 716us 169ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.26194477935839,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 616ms 394us 952ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.51656535629044,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 419ms 834us 841ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.27590583252359,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 440ms 512us 761ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.95666717109984,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 669ms 728us 539ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744160090600,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.803594902967134,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 303ms 679us 636ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.94236947058743,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 69ms 189us 506ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.88568639804642,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 178ms 628us 735ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.23279487865971,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 647ms 834us 686ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.46668874134274,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 996ms 518us 877ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.59512100635143,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 684ms 949us 989ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.72638351821489,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 852ms 401us 266ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.8222816276037,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 716ms 179us 537ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.53270887725395,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 417ms 314us 827ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.27056044165045,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 111ms 218us 722ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.342630214607517,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 189ms 660us 836ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.38916888816063,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 15ms 906us 714ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744246417339,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.685076528096744,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 347ms 944us 652ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.929938125544716,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 831ms 943us 281ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.924083550060233,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 5ms 789us 444ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.128128998192317,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 102ms 27us 562ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.7055153664665,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 521ms 318us 971ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.317880927181893,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 983ms 835us 592ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.749792083979916,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 728ms 372us 465ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.369405602648,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 132ms 262us 864ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.33661679341117,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 604ms 520us 339ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.82940305515231,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 363ms 730us 822ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.647676772202203,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 68ms 441us 602ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.266810512224115,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 474ms 866us 216ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744332857267,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.338454925842655,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 478ms 576us 78ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.039999624283006,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 746ms 948us 125ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.748035546648,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 805ms 640us 747ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.058957853558349,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 405ms 657us 664ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.158758443770544,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 206ms 303us 370ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.37839249348991,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 918ms 134us 171ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.647282488630186,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 274ms 661us 152ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.000645132707724,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 241ms 187us 537ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.48348006526886,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 424ms 910us 46ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.65774057164018,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 44ms 997us 55ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.418644765178882,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 906ms 366us 774ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.174492430233208,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 825ms 742us 249ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744419193474,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.4513632540911,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 435ms 830us 982ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.87114751230648,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 877ms 558us 131ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.784640339012059,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 637ms 763us 48ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.065850184311739,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 375ms 278us 379ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.60352017910289,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 904ms 373us 367ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.25201883733266,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 55ms 645us 158ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.684649171856396,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 74ms 580us 681ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.88713715313294,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 981ms 637us 219ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.12748385244103,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 480ms 112us 340ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.86074794703833,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 10ms 542us 139ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.334393842764616,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 220ms 514us 800ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.167003877909604,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 854ms 379us 918ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744510871432,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.95568555915734,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 624ms 895us 417ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.16264443471341,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 439ms 271us 735ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.58428495573905,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 566ms 954us 296ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.966180327707136,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 817ms 315us 982ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.49814148476958,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 667ms 988us 343ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.707756052107563,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 661ms 243us 153ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.568303833592326,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 701ms 179us 769ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.45459277495184,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 107ms 295us 638ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.83241136338391,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 526ms 240us 695ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.28131009480906,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 283ms 509us 529ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.256150282931326,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 515ms 179us 338ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.222501684648723,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 642ms 773us 688ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744592220582,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.74477770418195,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 325ms 621us 722ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.286987020515014,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 558ms 88us 508ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.959402616166889,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 847ms 589us 149ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.239072649109614,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 620ms 790us 912ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.28535183163778,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 119ms 650us 262ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.770134369730535,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 499ms 45us 600ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.462006616228772,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 283ms 130us 926ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.419183525160896,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 829ms 581us 638ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.6274901410107,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 558ms 476us 956ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 77.0937077444449,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 971ms 227us 215ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.38592851535493,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 27ms 972us 816ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.38152481872797,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 44ms 378us 412ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744678529340,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.13064389061597,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 557ms 743us 144ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.44948840990331,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 209ms 151us 806ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.568092022736206,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 643ms 168us 813ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.980728686052776,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 752ms 427us 132ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.02949795231944,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 295ms 377us 374ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.60866293706661,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 773ms 899us 285ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.509798027864935,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 20ms 351us 595ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.44032562581264,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 111ms 472us 75ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.697591092929,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 547ms 430us 685ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.62030851854492,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 583ms 208us 494ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.333409821793193,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 224ms 203us 85ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.326221693741946,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 251ms 158us 949ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744764945776,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 46.50656224998428,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 21s 502ms 341us 855ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 32.8180827426664,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 30s 471ms 6us 117ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.27670314661119,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 44ms 182us 451ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.630736896952108,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 349ms 257us 255ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 35.315863451470214,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 28s 315ms 887us 34ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 28.049537966432826,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 35s 651ms 211us 125ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.205938109450095,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 723ms 511us 23ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.156900417196525,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 464ms 867us 677ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 72.54604648266529,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 784ms 348us 679ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 69.22716958835598,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 14s 445ms 195us 520ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.921064952074111,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 809ms 868us 750ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.71344036273332,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 639ms 787us 145ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744851344021,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 48.32594675489868,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 692ms 817us 568ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.35928180709662,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 29s 104ms 217us 184ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.3092008417404,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 885ms 104us 770ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.617137505921242,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 412ms 847us 563ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.61717532068007,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 309ms 588us 772ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 28.888024402882444,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 616ms 420us 495ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.114712022752565,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 16s 250ms 244us 631ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.38493730845579,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 55ms 450us 608ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.15252806793534,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 795ms 491us 390ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.08479485912683,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 872ms 551us 97ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.978908339023105,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 582ms 498us 52ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.98921199398879,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 542ms 169us 81ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1744937733583,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 49.687198635820906,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 125ms 908us 231ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.24927266504705,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 29s 197ms 700us 336ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.140054462971195,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 721ms 85us 454ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.588132413925932,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 548ms 870us 522ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.651962336024496,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 283ms 668us 766ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 28.703015475156885,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 839ms 545us 25ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.148019070801752,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 16s 57ms 84us 692ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.377850331681195,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 737ms 462us 392ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.48070528484949,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 906ms 439us 46ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.84536644096406,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 541ms 811us 60ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.864175607743736,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 35ms 106us 565ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.761697142899845,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 444ms 944us 471ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745023988623,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.71119783843796,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 971ms 300us 995ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.23951727152758,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 594ms 186us 548ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.18169292068829,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 868ms 806us 939ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.492792514581097,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 4s 546ms 142us 928ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 39.37554866891131,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 396ms 471us 511ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.831144978100966,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 434ms 734us 445ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.084950083366495,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 997ms 766us 700ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 60.3051711744165,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 582ms 325us 869ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.81691487075938,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 373ms 647us 294ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 77.41830249721804,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 916ms 842us 242ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.838831106940994,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 386ms 544us 924ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.52054473056275,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 530ms 691us 712ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745110709866,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.50785757999767,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 414ms 513us 571ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.828436424310254,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 910ms 790us 975ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.783114081281239,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 644ms 746us 195ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.147773638803223,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 16ms 302us 55ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.176729464224586,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 193ms 967us 216ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.277898376623483,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 27ms 391us 385ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.663489637444139,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 187ms 745us 337ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.219404806872824,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 886ms 356us 816ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.4794400731753,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 581ms 870us 218ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.97260326390571,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 338ms 205us 644ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.478342572681818,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 685ms 714us 937ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.383212059304654,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 38ms 91us 699ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745197050128,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.80250748411288,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 684ms 67us 766ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.853772308247876,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 891ms 67us 958ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.454132384234546,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 184ms 367us 32ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.005628439713403,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 641ms 660us 762ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.46791851697093,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 421ms 362us 136ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.467226682438714,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 822ms 153us 799ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.578588172711711,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 645ms 358us 949ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.290801094086135,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 866ms 22us 748ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.69155945141276,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 871ms 411us 91ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.33829523298124,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 452ms 16us 849ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.299141449532296,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 352ms 924us 821ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.242348744632494,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 567ms 450us 356ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745283405855,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.16087354435643,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 546ms 186us 973ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.36564691178418,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 276ms 27us 369ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.652830185174675,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 246ms 201us 407ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.109180278462928,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 184ms 927us 413ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.484371255940346,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 677ms 785us 74ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.25785996039867,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 49ms 263us 937ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.584782370716075,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 611ms 779us 174ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.89589986551239,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 979ms 110us 639ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.34192113329667,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 603ms 677us 674ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.29923337933246,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 106ms 291us 580ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.257326722192406,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 510ms 727us 876ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.345898595548384,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 177ms 425us 894ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745369726396,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.10293395496844,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 568ms 348us 89ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.1054505760141,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 485ms 605us 44ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.671394266739288,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 159ms 847us 784ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.111452313895848,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 174ms 976us 384ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.5240739279834,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 649ms 558us 412ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.571651595835746,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 816ms 170us 83ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.481471461924066,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 175ms 879us 304ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.826329067496935,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 999ms 190us 938ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.45806735126939,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 428ms 834us 459ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.02800716477107,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 693ms 376us 539ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.324563657174355,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 257ms 380us 44ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.268272180031733,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 469ms 342us 837ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745456182337,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 54.929138493781835,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 205ms 273us 693ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 37.25529854891609,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 26s 841ms 819us 525ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.666235477251252,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 183ms 822us 737ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.839465678584224,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 387ms 871us 77ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 41.562492046757384,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 24s 60ms 154us 980ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 31.31338822018755,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 31s 935ms 221us 860ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.683135437078487,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 82ms 664us 759ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.88884447331547,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 578ms 138us 724ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 86.83588607174158,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 515ms 976us 231ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 77.94164373234709,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 830ms 111us 762ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.45550220772044,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 769ms 947us 181ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.228434233904014,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 620ms 239us 241ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745542585088,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.888611635001354,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 272ms 51us 583ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 37.27588491205711,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 26s 826ms 995us 586ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.4300830022686,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 299ms 670us 684ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.588921740164508,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 545ms 161us 720ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 40.375977621587914,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 24s 767ms 202us 156ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.8379026451938,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 427ms 626us 856ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.392968872803115,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 666ms 43us 765ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.55436913070302,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 682ms 99us 816ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 83.41625268930808,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 988ms 71us 482ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 77.80315131493974,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 852ms 949us 824ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.173224239704986,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 830ms 590us 189ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.096987307540527,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 123ms 426us 11ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745628821122,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.310448761006725,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 758ms 693us 493ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.881905480925845,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 718ms 904us 144ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.592418702816627,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 528ms 735us 391ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.848574949480158,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 346ms 530us 115ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.34354511631088,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 616ms 350us 432ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 31.28607726037348,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 31s 963ms 99us 486ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.376458210614528,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 758ms 204us 620ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.58913472956111,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 671ms 236us 798ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 86.95235102802746,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 500ms 551us 603ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 81.77168564676785,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 229ms 171us 896ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.513258305182504,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 557ms 400us 697ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.432479488146715,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 855ms 88us 894ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745715545424,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.27959941815494,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 768ms 427us 820ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 37.39150786827524,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 26s 744ms 40us 479ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.872544897017864,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 237ms 988us 315ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.010377332430215,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 620ms 577us 75ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.13407560080402,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 733ms 759us 95ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.533899025166722,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 750ms 484us 934ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.874707276556052,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 73ms 592us 622ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.122853307178325,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 506ms 128us 320ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 86.1271636617363,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 610ms 738us 790ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 81.51121526394661,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 268ms 250us 409ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.7151621129918,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 825ms 922us 910ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.474690950839992,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 699ms 165us 950ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745801800339,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 55.86776406624339,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 899ms 409us 735ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 37.919643992720744,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 26s 371ms 555us 603ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.885130860461874,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 181ms 135us 952ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.961838680702375,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 836ms 705us 123ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.43005404868763,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 568ms 200us 4ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 31.121327887581877,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 132ms 305us 10ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.790707600628055,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 512ms 595us 362ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.60452288140325,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 666ms 432us 806ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 90.42964997148333,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 58ms 319us 924ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 81.66855457114761,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 244ms 614us 898ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.692812811340417,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 906ms 21us 310ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.389343457659525,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 15ms 256us 809ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745888102405,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.613124487903576,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 663ms 748us 628ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 39.091338468322874,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 581ms 114us 364ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.974129462393492,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 781ms 845us 483ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.201286299793011,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 783ms 906us 722ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.46795507776319,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 547ms 166us 285ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 34.28132891547133,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 29s 170ms 397us 754ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.087788970081192,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 983ms 459us 656ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.14260080336369,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 908ms 285us 845ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 88.0908305187733,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 351ms 919us 310ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 80.67939232677675,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 394ms 738us 869ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.80357534721801,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 511ms 144us 464ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.70676049806168,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 856ms 8us 597ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1745974588257,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.379684115984766,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 736ms 885us 470ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 39.25570595191937,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 474ms 3us 734ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.056639455380102,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 415ms 882us 705ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.078964924732139,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 317ms 549us 314ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.67271023852695,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 434ms 180us 637ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.311044200488894,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 949ms 170us 5ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.992844850578718,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 465ms 95us 960ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.30141970814698,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 863ms 2us 689ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 88.27605401739146,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 328ms 100us 368ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 84.56064057964839,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 825ms 832us 836ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.60756335382898,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 213ms 529us 143ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.55401185204479,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 408ms 317us 267ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746061290144,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 55.9452676575222,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 874ms 612us 847ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.47160094403401,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 993ms 199us 541ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.994614863332457,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 690ms 609us 203ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.11641858079405,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 153ms 235us 613ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.551580845030614,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 500ms 889us 512ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 31.75795422546187,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 31s 488ms 174us 361ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.963751557181354,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 613ms 992us 551ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.629692808359046,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 56ms 203us 983ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 88.76118784445185,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 266ms 185us 416ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 80.69834062473157,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 391ms 828us 534ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.584989296427786,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 295ms 486us 607ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.407528069962186,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 947ms 633us 46ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746147328237,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.57922562460599,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 674ms 331us 682ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.75091318009132,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 805ms 843us 474ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.091640476933351,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 261ms 848us 838ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.249492629414823,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 575ms 952us 217ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 43.20682813239174,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 144ms 489us 962ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.89193534725007,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 402ms 589us 250ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.00649549278774,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 395ms 446us 528ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.2982991502121,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 153ms 159us 90ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 89.12788157183645,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 219ms 833us 596ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 82.53204603286767,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 116ms 505us 625ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.72802262026812,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 779ms 928us 728ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.575572117071736,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 329ms 742us 644ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746233669106,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 57.04463112544385,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 530ms 133us 516ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.56019834327679,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 933ms 476us 563ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.999522605169206,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 668ms 788us 489ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.054169394020185,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 426ms 780us 105ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 43.119548269522355,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 191ms 337us 575ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 33.02996462688506,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 275ms 539us 538ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.043639861754565,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 206ms 610us 953ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.893777604829836,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 979ms 722us 488ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 92.04235381374882,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 10s 864ms 563us 525ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 82.44534939744932,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 129ms 246us 917ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.740513990568022,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 735ms 322us 378ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.389763748367972,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 13ms 692us 165ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746320479602,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.37698109293653,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 737ms 735us 874ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.9267531620583,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 689ms 273us 283ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.996885210678505,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 680ms 513us 50ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.128600248560952,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 99ms 968us 508ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.873523874535735,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 324ms 418us 187ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 31.750897142633736,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 31s 495ms 173us 50ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.933385600705487,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 770ms 65us 701ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.67956103509032,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 337ms 163us 842ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 89.41958331397166,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 183ms 232us 609ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 81.27067690288766,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 304ms 560us 982ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.682342152731707,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 943ms 621us 276ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.543562364912155,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 446ms 473us 253ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746406721477,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 57.72245096117531,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 324ms 281us 685ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 39.02425689744553,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 625ms 87us 561ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.219893151078821,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 703ms 483us 597ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.438363060643452,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 4s 773ms 706us 647ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 44.145194873118825,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 22s 652ms 522us 44ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.74363176397011,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 540ms 289us 703ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.199336911061154,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 425ms 823us 844ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.40785407045411,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 832ms 791us 146ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 92.23181470633517,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 10s 842ms 245us 739ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 83.24124559661385,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 13ms 275us 304ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.95637993002775,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 58s 974ms 852us 187ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.6729361933644,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 977ms 438us 191ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746493056268,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 55.87615431293108,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 896ms 721us 997ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 39.208433623002655,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 504ms 716us 909ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.846161333948931,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 357ms 478us 981ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.12178242270442,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 129ms 770us 423ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 43.0014063038443,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 255ms 53us 403ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.810817283906204,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 477ms 753us 460ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.992905271692205,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 464ms 787us 375ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.994112070168086,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 950ms 844us 159ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 88.0787315791237,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 353ms 478us 667ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 80.26023549220226,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 459ms 470us 46ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.78224934864789,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 586ms 768us 92ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.520455661133145,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 531ms 18us 61ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746579359722,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.23473722066467,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 782ms 602us 879ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.547519359691556,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 361ms 638us 150ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.630743555457661,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 349ms 226us 149ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.944474637861655,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 914ms 362us 949ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.10491706079502,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 750ms 195us 222ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.34110798072316,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 958ms 585us 449ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.582954382295465,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 621ms 685us 817ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.02518443651125,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 536ms 111us 630ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 91.75149657331791,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 10s 899ms 4us 783ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 81.05703562757088,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 336ms 991us 999ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.632682645018456,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 122ms 592us 449ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.05870469214048,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 271ms 523us 88ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746665781014,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.63652550448031,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 656ms 450us 340ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.67446099362235,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 856ms 856us 807ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.007722956224006,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 632ms 360us 80ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.176608814642227,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 890ms 872us 738ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 43.27117431940553,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 110ms 73us 62ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.25315518534644,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 31s 4ms 718us 585ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.929182261190501,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 791ms 723us 394ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.0041311166521,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 947ms 965us 864ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 92.84393274120796,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 10s 770ms 763us 48ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 80.68525439186243,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 393ms 838us 348ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.57719636391011,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 323ms 831us 488ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.518546138672946,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 538ms 15us 368ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746752197732,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 57.65496568643443,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 344ms 559us 798ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 39.09824423342464,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 576ms 596us 75ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.292545719087865,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 391ms 336us 300ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.33671397739502,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 203ms 15us 553ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 43.744729320596214,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 22s 859ms 896us 850ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.64330563749672,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 634ms 152us 408ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.091602140114276,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 964ms 251us 620ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.94923887518979,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 963ms 747us 439ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 92.5195081435275,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 10s 808ms 531us 304ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 82.23617371317792,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 160ms 98us 833ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.85926199920404,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 314ms 577us 355ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.7137395971995,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 831ms 14us 728ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746838636932,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.40243151581655,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 729ms 732us 90ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.09524504526204,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 26s 249ms 995us 211ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.935405499881606,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 954ms 994us 962ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.671490042552103,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 159ms 402us 835ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 43.435275949441724,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 22ms 761us 526ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.81388258269232,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 474ms 906us 390ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.758275998339863,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 683ms 525us 183ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.45319768561783,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 713ms 788us 430ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 88.70775700873106,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 272ms 971us 313ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 82.78540072540659,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 79ms 424us 527ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.627319129382084,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 141ms 986us 343ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.383373519760728,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 37ms 490us 160ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1746925191943,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 57.05250586695764,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 527ms 713us 898ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.96519927334121,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 663ms 926us 238ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.971565674145229,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 793ms 281us 462ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.337096426196267,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 201ms 389us 638ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 43.10741059198477,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 197ms 867us 519ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.00514280551721,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 31s 244ms 978us 536ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.122233729398781,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 810ms 327us 825ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.34410557547111,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 850ms 873us 230ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 87.4273170584455,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 438ms 72us 603ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 80.16069389774646,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 474ms 941us 912ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.82864889948791,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 422ms 476us 871ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.682450586005984,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 943ms 231us 652ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747011591106,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 57.11564524551897,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 508ms 337us 614ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.62928794366721,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 887ms 93us 789ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.000379350743557,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 664ms 980us 706ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.235197006579911,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 637ms 484us 16ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 43.59374281331266,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 22s 939ms 71us 882ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.96663323899726,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 333ms 701us 132ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.03055463003602,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 273ms 19us 946ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.725965350495244,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 28ms 242us 857ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 90.45315467006927,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 55ms 446us 365ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 81.32688417235941,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 296ms 56us 958ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.795334449961707,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 540ms 344us 551ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.658046212152644,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 31ms 49us 696ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747097774616,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 56.32267083294625,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 754ms 839us 840ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.172334216243954,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 26s 196ms 983us 248ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.94359499921578,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 918ms 301us 791ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.035046332083798,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 511ms 268us 267ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.5183533347473,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 519ms 255us 135ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 33.16272980882789,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 154ms 333us 65ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.779848833490977,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 569ms 736us 583ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.19066531282631,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 184ms 886us 865ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 88.64059219491875,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 281ms 513us 77ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 83.50673891800658,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 975ms 81us 448ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.469969855123534,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 716ms 565us 288ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.28702577204237,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 398ms 564us 354ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747184256272,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 48.17586651639256,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 757ms 281us 27ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.02860252868216,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 548ms 98us 634ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.443304836703916,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 236ms 231us 687ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.813476143579988,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 506ms 99us 872ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.68773662544294,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 257ms 64us 403ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.620427832650446,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 760ms 484us 678ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.462454951452967,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 280ms 657us 102ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.31487041403888,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 447ms 479us 36ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 76.56684215107995,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 60ms 483us 780ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 70.76571398977612,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 14s 131ms 137us 10ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.98718420580326,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 550ms 101us 827ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.10937804515825,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 75ms 642us 970ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747270555532,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 55.95580240209341,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 871ms 247us 611ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 38.69750169035118,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 841ms 461us 498ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.856428718869521,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 310ms 927us 742ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.084938924370435,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 291ms 285us 965ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 42.162982606991385,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 23s 717ms 487us 193ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 32.82205581774124,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 30s 467ms 317us 634ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.793619220807821,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 497ms 289us 72ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.858761955065795,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 989ms 823us 890ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 86.50264868999624,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 560ms 339us 656ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 81.55264568838133,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 262ms 17us 885ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.50340681677776,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 593ms 549us 629ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.554516062773473,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 406ms 477us 375ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747356992741,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 57.56944738950148,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 17s 370ms 324us 805ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 39.313163358642505,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 25s 436ms 772us 688ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 15.184618194814918,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 856ms 117us 498ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.131788652097688,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 86ms 40us 652ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 43.73764527671717,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 22s 863ms 599us 393ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 33.36970632769072,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 29s 967ms 299us 987ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 14.016696730606888,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 343ms 485us 503ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.98759546627126,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 670ms 113us 83ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 89.92237279416811,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 120ms 702us 990ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 85.13570024324885,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 11s 745ms 953us 779ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.620477503176733,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 166ms 743us 92ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.495111072916643,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 624ms 23us 420ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747443344180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 49.373731461485384,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 253ms 684us 913ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.96136842819382,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 602ms 999us 395ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.232925623985516,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 10s 259ms 623us 806ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.756044712537982,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 768ms 837us 753ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 35.987280673080704,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 787ms 595us 542ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.947045924916594,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 392ms 275us 235ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.272084521359094,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 346ms 114us 500ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.33295418079775,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 142ms 968us 568ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 74.54274112868795,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 415ms 122us 450ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.20245853446417,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 849ms 943us 898ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.900670363332702,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 890ms 430us 224ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.064274341142188,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 249ms 932us 911ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747530121284,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.77845428393685,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 313ms 52us 385ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.239764889860496,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 593ms 998us 3ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.929738186448313,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 980ms 411us 10ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.375306730165937,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 39ms 352us 876ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.20730522888142,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 173ms 5us 241ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.741881070285302,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 528ms 913us 820ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.753062036056303,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 711ms 80us 440ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 60.13855503674183,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 628ms 267us 829ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.86472694464419,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 366ms 331us 252ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.0339664031031,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 507ms 313us 583ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.575794434234552,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 328ms 933us 492ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.442222763346624,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 819ms 27us 597ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747616415613,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 48.436948652052244,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 645ms 396us 290ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.04489148724016,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 534ms 829us 402ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.428506480568497,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 307ms 242us 669ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.041467676560895,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 482ms 873us 979ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.09861958189235,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 701ms 890us 310ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.34626562508748,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 75ms 885us 933ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.310177862168729,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 130ms 476us 118ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.539768855500796,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 379ms 284us 274ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 76.26127475245788,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 112ms 815us 164ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.68508272845898,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 949ms 903us 689ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.12776845257241,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 4ms 858us 449ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.182893414708403,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 793ms 646us 808ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747702666641,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 49.56435946745421,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 175ms 787us 819ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.36258689290387,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 278ms 474us 169ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.812634183955469,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 509ms 936us 962ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.21970623705162,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 704ms 290us 505ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.09418057685331,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 705ms 297us 198ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.832045977613923,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 520ms 999us 557ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.452077598263942,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 337ms 959us 523ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.09611950631592,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 921ms 584us 841ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 73.6576416272704,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 576ms 323us 894ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.2935601554737,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 14s 26ms 512us 322ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.16346189208094,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 867ms 934us 399ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.37463214776959,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 70ms 74us 184ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747789073174,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.98916999686615,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 612ms 7us 806ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.18097723762086,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 424ms 452us 34ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.584810819061824,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 564ms 482us 77ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.304666380511199,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 339ms 549us 72ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.94477292046058,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 354ms 91us 39ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.7186271561638,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 648ms 929us 836ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.547047261392008,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 816ms 823us 748ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 60.90828709472952,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 418ms 127us 117ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.69392130679354,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 707ms 461us 814ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.4732430051483,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 798ms 195us 838ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.321687494569417,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 268ms 174us 650ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.38757965765077,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 21ms 823us 899ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747875442610,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.499617763822926,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 802ms 130us 81ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.484944363156266,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 180ms 965us 701ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.740243868890715,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 841ms 482us 739ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.185496063003667,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 852ms 310us 379ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.235889506675925,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 153ms 438us 900ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.814977157790576,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 540ms 190us 43ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.277580416969256,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 314ms 927us 12ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 60.44731237959214,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 543ms 332us 708ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.82544772422084,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 527ms 333us 432ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.73764199685186,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 561ms 594us 498ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.955918510915609,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 672ms 669us 36ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.39239977421799,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 3ms 880us 687ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1747961821670,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 49.92888149342696,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 28ms 487us 923ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.71651426554448,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 804ms 735us 186ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.387058780178563,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 506ms 910us 14ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.904007544363907,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 96ms 47us 625ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.9531109528005,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 348ms 301us 230ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.483376455782633,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 917ms 417us 888ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.2548731020043,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 443ms 951us 240ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.60547046235643,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 776ms 983us 593ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 75.7613372505753,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 199ms 344us 630ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.32988443431995,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 14s 19ms 369us 412ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.05515159403323,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 285ms 304us 137ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.971413102703831,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 611ms 867us 439ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748048085418,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.31142446733478,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 876ms 201us 292ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.29991199513433,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 328ms 682us 523ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.659961145063354,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 213ms 4us 803ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.327575662180674,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 241ms 889us 653ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.321226062070714,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 794ms 403us 762ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.990039237624682,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 344ms 404us 523ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.436956375576154,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 421ms 615us 435ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 60.0033939539712,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 665ms 723us 955ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 75.84434108046455,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 184ms 899us 305ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.02899283706283,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 883ms 298us 386ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.172032488940385,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 835ms 146us 614ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.29261245373335,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 377ms 510us 994ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748135035792,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.439569738262065,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 440ms 287us 22ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.91415679711271,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 844ms 173us 139ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.809093155154295,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 526ms 79us 384ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.216715732318313,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 717ms 203us 212ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.756051339141926,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 802ms 422us 214ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.336651106217445,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 963ms 427us 522ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.51578254893249,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 987ms 576us 848ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 60.266642346264035,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 592ms 927us 50ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.47486402528781,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 907ms 412us 134ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.1645838282851,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 857ms 212us 873ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.438537226809476,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 832ms 663us 284ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.292188271348437,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 379ms 109us 15ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aee137d4c33294951b4e6927fae6e59a14ed3bf8",
          "message": "Merge pull request #949 from Mossaka/fix-release-pipeline-shimkit3\n\nRELEASE: update condition for crates.io ownership check",
          "timestamp": "2025-03-26T18:06:04Z",
          "url": "https://github.com/Mossaka/runwasi/commit/aee137d4c33294951b4e6927fae6e59a14ed3bf8"
        },
        "date": 1748221108801,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.80289037047989,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 683ms 919us 413ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.812355687525525,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 923ms 323us 691ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.783813620659432,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 641ms 545us 386ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.287272265450792,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 413ms 893us 508ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.380161873775776,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 55ms 127us 211ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.183621932729,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 130ms 550us 145ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.607127627529517,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 490ms 895us 902ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.90406871740834,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 693ms 356us 919ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.72754883834985,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 865ms 451us 374ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.49701003352297,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 423ms 357us 522ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.459234199719184,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 756ms 168us 110ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.336326340804455,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 213ms 272us 748ns"
          }
        ]
      }
    ]
  }
}