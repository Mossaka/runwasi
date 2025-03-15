window.BENCHMARK_DATA = {
  "lastUpdate": 1741999493033,
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
      }
    ]
  }
}