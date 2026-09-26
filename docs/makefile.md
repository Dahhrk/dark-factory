# Makefile

Coding bar lives in pack **makefile-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `makefile`, `poteto-makefile`
- Rule: `makefile.mdc` on `**/Makefile`, `**/makefile`, `**/GNUmakefile`, `**/*.mk`, `**/*.make`
- Lint tiers (product repos; copy from makefile-kit; **all required**):
  - Tier 0: `scripts/makefile-rg-gate.sh` (PSR Makefile: recursive make without .PHONY; tab/space mix; unchecked $(shell); include of untrusted path; .ONESHELL / curl|bash; single-walk; requires rg; covers Makefile / makefile / GNUmakefile / *.mk / *.make)
  - Tier 0.5: `scripts/makefile-hotpath-gate.sh` (`MAKEFILE_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/makefile-make-gate.sh` (Makefile / *.mk / CI make wiring / live)
  - Product CI skeleton: `templates/github-workflows/makefile-gates.yml`
- Pilot research: mirror/make (public GPL-3.0; GNU Make manual Phony Targets / Include / One Shell / Recursion / Shell Function drive encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-makefile`
- Standards source: Programming Standards Reference Makefile chapter (make wiring / no recursive-without-PHONY / no tab-space mix / no unchecked $(shell) / no include(${...}) / no .ONESHELL|curl|bash)

Do not put Makefile product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-makefile` standing rule; makefile-kit 0.1.0).
