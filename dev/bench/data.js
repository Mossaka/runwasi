window.BENCHMARK_DATA = {
  "lastUpdate": 1741913735821,
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
      }
    ]
  }
}