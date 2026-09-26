# Visual Basic .NET

Coding bar lives in pack **vbnet-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `vbnet`, `poteto-vbnet`
- Rule: `vbnet.mdc` on `**/*.{vb,vbproj}`
- Lint tiers (product repos; copy from vbnet-kit; **all required**):
  - Tier 0: `scripts/vbnet-rg-gate.sh` (PSR VB.NET: On Error Resume Next; Option Strict Off; Console.WriteLine in libs; single-walk; requires rg)
  - Tier 0.5: `scripts/vbnet-hotpath-gate.sh` (`VBNET_RG_BUDGET_MS`, default 250ms)
  - Tier 1: `scripts/vbnet-dotnet-gate.sh` (.NET `dotnet` / `.vbproj` wiring)
  - Product CI skeleton: `templates/github-workflows/vbnet-gates.yml`
- Toolchain: **dotnet** / **.vbproj** wiring required (project / CI)
- Pilot research: CommunityVB/Community.VisualBasic (public MIT). Corroboration: Lake1059/FFmpegFreeUI (MIT, active).
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-vbnet`
- Standards source: Programming Standards Reference Visual Basic .NET chapter (no On Error Resume Next; Option Strict On; Console.WriteLine banned in libs; dotnet/vbproj)

Do not put VB.NET product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-vbnet` standing rule; vbnet-kit 0.1.0).
