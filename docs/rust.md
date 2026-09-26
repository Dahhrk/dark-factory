# Rust

Coding bar lives in pack **rust-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `rust`, `poteto-rust`
- Rule: `rust.mdc` on `**/*.rs`
- Lint tiers (product repos; copy from rust-kit; **all required**):
  - Tier 0: `scripts/rust-rg-gate.sh` (PSR Rust: unsafe / transmute / extern "C" / todo!|unimplemented! / #[no_mangle]; single-walk; requires rg)
  - Tier 0.5: `scripts/rust-hotpath-gate.sh` (`RUST_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/rust-fmt-gate.sh` + `scripts/rust-clippy-gate.sh`
  - Tier 1: `scripts/rust-test-ci-gate.sh` (`cargo test` or `${{ env.CARGO }} test` in Makefile or CI)
  - Product CI skeleton: `templates/github-workflows/rust-gates.yml`
- Pilot research: BurntSushi/ripgrep (public catalog top pick)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-rust`
- Standards source: Programming Standards Reference Rust chapter (rustfmt / Clippy / cargo test / unsafe invariants / FFI / lockfile policy)

Do not put Rust product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-rust` standing rule; rust-kit 0.1.0).
