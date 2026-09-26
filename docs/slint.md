# Slint

Coding bar lives in pack **slint-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `slint`, `poteto-slint`
- Rule: `slint.mdc` on `**/*.{slint,rs,toml}`
- Lint tiers (product repos; copy from slint-kit; **all required**):
  - Tier 0: `scripts/slint-rg-gate.sh` (PSR Slint: leftover `debug()` in `.slint`; `clone_strong` callback capture; `unsafe {` in `.on_` callback hosts; single-walk; requires rg)
  - Tier 0.5: `scripts/slint-hotpath-gate.sh` (`SLINT_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/slint-cargo-gate.sh` (Slint `Cargo.toml` / `build.rs` / CMake / CI wiring)
  - Product CI skeleton: `templates/github-workflows/slint-gates.yml`
- Toolchain: **slint** / **Cargo** (or CMake) wiring required (project / CI)
- Pilot research: MIT portions of slint-ui/slint (`examples/`, docs) + slint-ui/slint-rust-template (MIT). Corroboration: Vadoola/Tomotroid (MIT, active). Framework runtime is triple-licensed (Royalty-free / GPL-3.0 / Commercial); farm MIT only.
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-slint`
- Standards source: Programming Standards Reference Slint chapter (.slint hygiene; unsafe callbacks gateable via clone_strong / unsafe-in-.on_ host; slint/Cargo wiring)

Do not put Slint product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-slint` standing rule; slint-kit 0.1.0).
