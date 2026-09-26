# Objective-C

Coding bar lives in pack **objc-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `objc`, `poteto-objc`
- Rule: `objc.mdc` on `**/*.{m,h,mm}`
- Lint tiers (product repos; copy from objc-kit; **all required**):
  - Tier 0: `scripts/objc-rg-gate.sh` (PSR ObjC: `NSLog`; `performSelector:`; manual retain/release/autorelease; single-walk; requires rg)
  - Tier 0.5: `scripts/objc-hotpath-gate.sh` (`OBJC_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/objc-fmt-gate.sh` (clang-format wiring / live)
  - Product CI skeleton: `templates/github-workflows/objc-gates.yml`
- Formatter: **clang-format** required (wiring at 0.1.0; live when on PATH)
- Pilot research: SDWebImage/SDWebImage (public MIT, active). AFNetworking/AFNetworking is MIT but archived — similar active MIT host preferred.
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-objc`
- Standards source: Programming Standards Reference ObjC chapter (clang-format / ARC / no NSLog in libs / no performSelector:)

Do not put Objective-C product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-objc` standing rule; objc-kit 0.1.0).
