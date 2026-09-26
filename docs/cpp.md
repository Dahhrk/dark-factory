# C++

Coding bar lives in pack **cpp-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `cpp`, `poteto-cpp`
- Rule: `cpp.mdc` on `**/*.{cpp,cc,cxx,hpp,hh,h}`
- Lint tiers (product repos; copy from cpp-kit; **all required**):
  - Tier 0: `scripts/cpp-rg-gate.sh` (PSR C++: raw new/delete; C-style casts; sprintf/vsprintf; single-walk; requires rg)
  - Tier 0.5: `scripts/cpp-hotpath-gate.sh` (`CPP_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/cpp-fmt-gate.sh` + `scripts/cpp-warn-gate.sh` (clang-format; -Wall -Wextra)
  - Tier 1: `scripts/cpp-tidy-ci-gate.sh` (`.clang-tidy` or `clang-tidy` in CMake/CI)
  - Product CI skeleton: `templates/github-workflows/cpp-gates.yml`
- Pilot research: fmtlib/fmt (public catalog top pick)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-cpp`
- Standards source: Programming Standards Reference C++ chapter (ISO C++ / Core Guidelines / clang-format / -Wall -Wextra / clang-tidy / unique_ptr / named casts / no sprintf)

Do not put C++ product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-cpp` standing rule; cpp-kit 0.1.0).
