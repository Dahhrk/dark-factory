# COBOL

Coding bar lives in pack **cobol-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `cobol`, `poteto-cobol`
- Rule: `cobol.mdc` on `**/*.{cob,cbl,cpy}`
- Lint tiers (product repos; copy from cobol-kit; **all required**):
  - Tier 0: `scripts/cobol-rg-gate.sh` (PSR COBOL: GOTO/GO TO; ALTER; unchecked ACCEPT; END-IF imbalance; single-walk; requires rg)
  - Tier 0.5: `scripts/cobol-hotpath-gate.sh` (`COBOL_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/cobol-cobc-gate.sh` (GnuCOBOL cobc Makefile/CI wiring)
  - Product CI skeleton: `templates/github-workflows/cobol-gates.yml`
- Toolchain: **cobc** wiring required (Makefile / CI)
- Pilot research: meyfa/CobolCraft (public MIT, active). openmainframeproject/cobol-programming-course is CC-BY-4.0 — similar clear-license MIT host preferred. Corroboration: azac/cobol-on-wheelchair (MIT).
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-cobol`
- Standards source: Programming Standards Reference COBOL chapter (no GOTO/ALTER; checked ACCEPT; END-IF hygiene; cobc)

Do not put COBOL product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-cobol` standing rule; cobol-kit 0.1.0).
