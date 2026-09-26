# C#

Coding bar lives in pack **csharp-kit** (plug-factory / plugins twin), not in this kitchen.

- Skills: `csharp`, `poteto-csharp`
- Rule: `csharp.mdc` on `**/*.{cs,csproj,props,targets,sln}`
- Lint tiers (product repos; copy from csharp-kit; **all required**):
  - Tier 0: `scripts/csharp-rg-gate.sh` (PSR C#: Console.Write/WriteLine in libs; SQL string concat; blocking on async; single-walk; requires rg)
  - Tier 0.5: `scripts/csharp-hotpath-gate.sh` (`CSHARP_RG_BUDGET_MS`, default 250ms)
  - Tier 0.5: `scripts/csharp-fmt-gate.sh` (dotnet format / .editorconfig csharp style wiring)
  - Tier 1: `scripts/csharp-analyzers-gate.sh` (EnableNETAnalyzers / AnalysisLevel / Roslyn wiring)
  - Tier 1: `scripts/csharp-nullable-gate.sh` (`<Nullable>enable</Nullable>` / `#nullable enable`)
  - Product CI skeleton: `templates/github-workflows/csharp-gates.yml`
- Pilot research: dotnet/runtime System.Text.Json (public catalog top pick, MIT)
- Poteto: `/poteto-mode` + Done means = EXIT PREDICATE in `poteto-csharp`
- Standards source: Programming Standards Reference C# chapter (C# language / .NET design guidance / dotnet format / Roslyn analyzers / nullable enable / no Console.WriteLine in libs / no SQL string concat / no blocking on async)

Do not put C# product CI into kitchen workflows. Point here only.

Factory health (CI / review / trust): [factory-health.md](factory-health.md).

Delivery labels: PR titles are plain work descriptions only (`poteto-csharp` standing rule; csharp-kit 0.1.0).
