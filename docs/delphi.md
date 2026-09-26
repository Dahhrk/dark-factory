# Delphi / Object Pascal

Coding bar lives in pack **delphi-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `delphi`, `poteto-delphi`
- Rule: `delphi.mdc` on `**/*.{pas,pp,inc,dpr,lpr}`
- Lint tiers (product repos; copy from delphi-kit; **all required**):
  - Tier 0: `scripts/delphi-rg-gate.sh` (PSR Delphi/Pascal: goto; with-statement; unchecked GetMem; WriteLn in libs; single-walk; requires rg)
  - Tier 0.5: `scripts/delphi-hotpath-gate.sh` (`DELPHI_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/delphi-fpc-gate.sh` (Free Pascal `fpc` / Lazarus `lazbuild` Makefile/CI wiring)
  - Product CI skeleton: `templates/github-workflows/delphi-gates.yml`
- Toolchain: **fpc** / **lazbuild** wiring required (Makefile / CI)
- Pilot research: HashLoad/horse (public MIT, active, Delphi + Lazarus). skalogryz/pascal suggested but 404 — similar clear MIT Free Pascal / Lazarus-friendly host preferred. Corroboration: ikelaiah/free-pascal-snippets (MIT).
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-delphi`
- Standards source: Programming Standards Reference Delphi / Object Pascal chapter (no goto/with; unchecked GetMem; WriteLn banned in libs; fpc/lazbuild)

Do not put Delphi product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-delphi` standing rule; delphi-kit 0.1.0).
