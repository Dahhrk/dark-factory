# WebAssembly

Coding bar lives in pack **wasm-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `wasm`, `poteto-wasm`
- Rule: `wasm.mdc` on `**/*.{wat,wast,wasm,toml,yml,yaml}`
- Lint tiers (product repos; copy from wasm-kit; **all required**):
  - Tier 0: `scripts/wasm-rg-gate.sh` (PSR Wasm: wat hygiene leftover `$print`/`$log`/`$debug` / `(import "console" "log"`; unbounded `memory.grow` without same-line `;;` comment; imported host eval patterns; single-walk; requires rg)
  - Tier 0.5: `scripts/wasm-hotpath-gate.sh` (`WASM_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/wasm-tools-gate.sh` (wat/wasm tooling Makefile / Cargo / package.json / CI wiring)
  - Product CI skeleton: `templates/github-workflows/wasm-gates.yml`
- Toolchain: **wat2wasm** / **wasm-tools** / **wabt** wiring required (project / CI)
- Pilot research: WebAssembly/spec (Apache-2.0 interpreter). Corroboration: bytecodealliance/wasm-tools (Apache-2.0/MIT), zksecurity/wasmati (MIT).
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-wasm`
- Standards source: Programming Standards Reference Wasm chapter (wat hygiene; memory.grow bound comment; host-eval imports if gateable; wat/wasm tooling wiring)

Do not put Wasm product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-wasm` standing rule; wasm-kit 0.1.0).
