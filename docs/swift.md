# Swift

Coding bar lives in pack **swift-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `swift`, `poteto-swift`
- Rule: `swift.mdc` on `**/*.swift`
- Lint tiers (product repos; copy from swift-kit; **all required**):
  - Tier 0: `scripts/swift-rg-gate.sh` (PSR Swift: force unwrap; try!; unsafe pointers; single-walk; requires rg)
  - Tier 0.5: `scripts/swift-hotpath-gate.sh` (`SWIFT_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/swift-fmt-gate.sh` (swift-format / SwiftFormat wiring / live)
  - Tier 1: `scripts/swift-lint-gate.sh` (SwiftLint wiring)
  - Product CI skeleton: `templates/github-workflows/swift-gates.yml`
- Pilot research: apple/swift-nio (public catalog top pick, Apache-2.0)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-swift`
- Standards source: Programming Standards Reference Swift chapter (swift-format / SwiftFormat / SwiftLint / no force unwrap / no try! / no unchecked unsafe pointers)

Do not put Swift product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-swift` standing rule; swift-kit 0.1.0).
