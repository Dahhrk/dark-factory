# Vite

Coding bar lives in pack **vite-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `vite`, `poteto-vite`
- Rule: `vite.mdc` on `**/vite.config.*`
- Lint tiers (product repos; copy from vite-kit; **all required**):
  - Tier 0: `scripts/vite-rg-gate.sh` (PSR Vite: server.fs.strict:false; allow:['..']; loadEnv empty-prefix; single-walk; requires rg; covers vite.config.*)
  - Tier 0.5: `scripts/vite-hotpath-gate.sh` (`VITE_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/vite-vite-gate.sh` (vite package / vite.config.* / CI vite build|dev|preview wiring / live)
  - Product CI skeleton: `templates/github-workflows/vite-gates.yml`
- Pilot research: vitejs/vite (public MIT; docs drive fs.strict / allow parent / loadEnv empty-prefix encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-vite`
- Standards source: Programming Standards Reference Vite chapter (vite wiring / no fs.strict:false / no allow:['..'] / no loadEnv empty-prefix)

Do not put Vite product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-vite` standing rule; vite-kit 0.1.0).
