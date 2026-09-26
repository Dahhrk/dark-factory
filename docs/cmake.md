# CMake

Coding bar lives in pack **cmake-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `cmake`, `poteto-cmake`
- Rule: `cmake.mdc` on `**/CMakeLists.txt`, `**/*.cmake`, `**/*.cmake.in`
- Lint tiers (product repos; copy from cmake-kit; **all required**):
  - Tier 0: `scripts/cmake-rg-gate.sh` (PSR CMake: file(DOWNLOAD) without hash; unchecked execute_process; GLOB for sources; CACHE FORCE abuse; include of untrusted path; single-walk; requires rg; covers CMakeLists.txt / *.cmake / *.cmake.in)
  - Tier 0.5: `scripts/cmake-hotpath-gate.sh` (`CMAKE_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/cmake-cmake-gate.sh` (CMakeLists.txt / *.cmake / CI cmake wiring / live)
  - Product CI skeleton: `templates/github-workflows/cmake-gates.yml`
- Pilot research: Kitware/CMake (public BSD-3-Clause; Help command docs for DOWNLOAD / execute_process / GLOB / CACHE FORCE / include drive encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-cmake`
- Standards source: Programming Standards Reference CMake chapter (cmake wiring / no DOWNLOAD-without-hash / no unchecked execute_process / no GLOB-sources / no CACHE FORCE / no include(${...}))

Do not put CMake product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-cmake` standing rule; cmake-kit 0.1.0).
