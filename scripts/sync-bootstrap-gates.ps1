# Copy product-generic CI gates FROM Control-Glass INTO the kitchen bootstrap pack.
#
# Glass (the product) is the source of truth for gate evolution.
# This kitchen is the distribute layer. After copy, adapt-bootstrap-gates.mjs
# keeps kitchen-only encodings (soft tropes, generic a11y launcher).
#
# Skip (product-specific): visual-parity, ci-drive-smoke, control-glass, probe.

param(
  [string]$GlassRepo = (Join-Path $env:USERPROFILE "Projects\Control-Glass"),
  [string]$DestDir = ""
)

$ErrorActionPreference = "Stop"

$Kitchen = Split-Path $PSScriptRoot -Parent
if (-not $DestDir) {
  $DestDir = Join-Path $Kitchen "templates\product-bootstrap\gates"
}

$GateFiles = @(
  "check-anti-ai-ui.mjs",
  "check-boundaries.mjs",
  "check-dune-footguns.mjs",
  "check-bundle-size.mjs",
  "check-file-size.mjs",
  "check-pr-size.mjs",
  "check-a11y.mjs",
  "check-commit-lint.mjs",
  "check-dead-exports.mjs",
  "check-func-length.mjs",
  "check-duplicate-code.mjs",
  "check-no-barrels.mjs",
  "check-import-order.mjs"
)

$GlassScripts = Join-Path $GlassRepo "scripts"
if (-not (Test-Path -LiteralPath $GlassScripts)) {
  throw @"
Control-Glass scripts/ not found at $GlassScripts.

Glass is the source of truth for gate evolution. Kitchen only distributes.
Clone Control-Glass under ~/Projects/Control-Glass or pass -GlassRepo <path>.
"@
}

New-Item -ItemType Directory -Force -Path $DestDir | Out-Null

$missing = @()
foreach ($name in $GateFiles) {
  $src = Join-Path $GlassScripts $name
  if (-not (Test-Path -LiteralPath $src)) {
    $missing += $name
    continue
  }
  Copy-Item -Force -LiteralPath $src -Destination (Join-Path $DestDir $name)
  Write-Host "copied $name"
}

if ($missing.Count -gt 0) {
  throw "Glass is missing expected gate script(s): $($missing -join ', ')"
}

$adapt = Join-Path $PSScriptRoot "adapt-bootstrap-gates.mjs"
if (-not (Test-Path -LiteralPath $adapt)) {
  throw "Missing kitchen adapter: $adapt"
}

& node $adapt $DestDir
if ($LASTEXITCODE -ne 0) {
  throw "adapt-bootstrap-gates.mjs failed ($LASTEXITCODE)"
}

Write-Host "sync-bootstrap-gates: ok ($($GateFiles.Count) files -> $DestDir)"
