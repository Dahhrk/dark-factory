# C

Coding bar lives in pack **c-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `c`, `poteto-c`
- Rule: `c.mdc` on `**/*.{c,h}`
- Lint tiers (product repos; copy from c-kit; **all required**):
  - Tier 0: `scripts/c-rg-gate.sh` (PSR C: strcpy / strcat / sprintf / gets; single-walk; requires rg)
  - Tier 0.5: `scripts/c-hotpath-gate.sh` (`C_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/c-fmt-gate.sh` + `scripts/c-warn-gate.sh` (clang-format; -Wall -Wextra)
  - Tier 1: `scripts/c-san-ci-gate.sh` (ASAN/UBSAN/TSAN or `-fsanitize=` in CMake/CI)
  - Tier 1b: `scripts/c-malloc-gate.sh` (malloc/calloc/realloc NULL-checked nearby)
  - Product CI skeleton: `templates/github-workflows/c-gates.yml`
- Pilot research: libuv/libuv (public catalog top pick)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-c`
- Standards source: Programming Standards Reference C chapter (ISO C/WG14 / CERT C / clang-format / -Wall -Wextra / sanitizers / bounds / malloc check)

Do not put C product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-c` standing rule; c-kit 0.1.0).
