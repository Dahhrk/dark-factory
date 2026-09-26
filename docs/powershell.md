# PowerShell

Coding bar lives in pack **powershell-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `powershell`, `poteto-powershell`
- Rule: `powershell.mdc` on `**/*.{ps1,psm1,PS1,PSM1}`
- Lint tiers (product repos; copy from powershell-kit; **all required**):
  - Tier 0: `scripts/ps-rg-gate.sh` (PSR PowerShell: Invoke-Expression; Write-Host in modules; unquoted paths; single-walk; requires rg)
  - Tier 0.5: `scripts/ps-hotpath-gate.sh` (`PS_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/ps-pssa-gate.sh` (PSScriptAnalyzer lint wiring / live; PSAvoidUsingInvokeExpression + PSAvoidUsingWriteHost required)
  - Product CI skeleton: `templates/github-workflows/ps-gates.yml`
- Pilot research: PowerShell/PowerShell (public MIT; drives Invoke-Expression / Write-Host-in-modules / unquoted-path encode)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-powershell`
- Standards source: Programming Standards Reference PowerShell chapter (PSScriptAnalyzer / no Invoke-Expression / no Write-Host in modules / no unquoted paths)

Do not put PowerShell product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-powershell` standing rule; powershell-kit 0.1.0).
