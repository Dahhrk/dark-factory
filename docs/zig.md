# Zig

Coding bar lives in pack **zig-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `zig`, `poteto-zig`
- Rule: `zig.mdc` on `**/*.zig`
- Lint tiers (product repos; copy from zig-kit; **all required**):
  - Tier 0: `scripts/zig-rg-gate.sh` (PSR Zig: `@panic`/`@trap`; `catch unreachable`; TODO/FIXME; single-walk; requires rg)
  - Tier 0.5: `scripts/zig-hotpath-gate.sh` (`ZIG_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/zig-fmt-gate.sh` (zig fmt wiring / live)
  - Tier 1: `scripts/zig-build-test-gate.sh` (zig build test wiring)
  - Product CI skeleton: `templates/github-workflows/zig-gates.yml`
- Pilot research: zigtools/zls (public catalog top pick, MIT)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-zig`
- Standards source: Programming Standards Reference Zig chapter (zig fmt / zig build test / no `@panic`/`@trap` in libs / no `catch unreachable` / no TODO/FIXME)

Do not put Zig product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-zig` standing rule; zig-kit 0.1.0).
