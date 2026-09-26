# Fortran

Coding bar lives in pack **fortran-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `fortran`, `poteto-fortran`
- Rule: `fortran.mdc` on `**/*.{f90,F90,f95,F95,f03,F03,f08,F08,f,F,fypp}`
- Lint tiers (product repos; copy from fortran-kit; **all required**):
  - Tier 0: `scripts/fortran-rg-gate.sh` (PSR Fortran: old-style / missing `implicit none`; `GOTO` / `GO TO`; unchecked `open`/`read`/`write`/`close` without `iostat=`; single-walk; requires rg)
  - Tier 0.5: `scripts/fortran-hotpath-gate.sh` (`FORTRAN_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/fortran-fortitude-gate.sh` (fortitude lint wiring / live; C001 / implicit-typing required)
  - Product CI skeleton: `templates/github-workflows/fortran-gates.yml`
- Formatter: **fprettify** recommended (not a hard EXIT at 0.1.0)
- Pilot research: fortran-lang/stdlib (public MIT; drives implicit none / GOTO / checked I/O encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-fortran`
- Standards source: Programming Standards Reference Fortran chapter (fortitude / implicit none / no GOTO / checked I/O)

Do not put Fortran product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-fortran` standing rule; fortran-kit 0.1.0).
