# Kotlin

Coding bar lives in pack **kotlin-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `kotlin`, `poteto-kotlin`
- Rule: `kotlin.mdc` on `**/*.{kt,kts}`
- Lint tiers (product repos; copy from kotlin-kit; **all required**):
  - Tier 0: `scripts/kotlin-rg-gate.sh` (PSR Kotlin: `!!` force unwrap; `runBlocking`; SQL string concat; single-walk; requires rg)
  - Tier 0.5: `scripts/kotlin-hotpath-gate.sh` (`KOTLIN_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/kotlin-fmt-gate.sh` (ktlint wiring / live)
  - Tier 1: `scripts/kotlin-detekt-gate.sh` (detekt wiring)
  - Product CI skeleton: `templates/github-workflows/kotlin-gates.yml`
- Pilot research: ktorio/ktor (public catalog top pick, Apache-2.0)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-kotlin`
- Standards source: Programming Standards Reference Kotlin chapter (ktlint / detekt / no `!!` / no `runBlocking` on hot paths / no SQL string concat)

Do not put Kotlin product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-kotlin` standing rule; kotlin-kit 0.1.0).
