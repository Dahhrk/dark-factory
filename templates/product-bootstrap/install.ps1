# Install product bootstrap into a real app
param(
  [Parameter(Mandatory = $true)]
  [string]$TargetRepo,
  [switch]$WithDesignSkills,
  [switch]$WithAntiSlop
)

$ErrorActionPreference = "Stop"
if (-not (Test-Path $TargetRepo)) { throw "TargetRepo not found: $TargetRepo" }

$destCursor = Join-Path $TargetRepo ".cursor"
$destRoot = $TargetRepo
New-Item -ItemType Directory -Force -Path $destCursor | Out-Null

Copy-Item -Force (Join-Path $PSScriptRoot "BUGBOT.md") (Join-Path $destRoot "BUGBOT.md")
Copy-Item -Force (Join-Path $PSScriptRoot "dune.md") (Join-Path $destCursor "dune.md")

$agentsSrc = Join-Path $PSScriptRoot "AGENTS.product.md"
$privateSrc = Join-Path $PSScriptRoot "PRIVATE.product.md"
if (Test-Path $agentsSrc) {
  $name = Split-Path $TargetRepo -Leaf
  (Get-Content $agentsSrc -Raw) -replace '\{\{PRODUCT\}\}', $name | Set-Content -NoNewline (Join-Path $destRoot "AGENTS.md")
  (Get-Content $privateSrc -Raw) -replace '\{\{PRODUCT\}\}', $name | Set-Content -NoNewline (Join-Path $destRoot "PRIVATE.md")
}

Write-Host "Copied BUGBOT.md, .cursor/dune.md, AGENTS.md, PRIVATE.md"

Push-Location $TargetRepo
try {
  if ($WithDesignSkills) {
    npx --yes skills add poteto/noodle --skill frontend-design
    npx --yes skills add poteto/noodle --skill make-interfaces-feel-better
    npx --yes skills add poteto/noodle --skill interaction-design
  }
  if ($WithAntiSlop) {
    npx --yes skills add dmmulroy/anti-slop --skill install-anti-slop
  }
}
finally {
  Pop-Location
}

Write-Host @"

Next in a Cursor chat opened on ${TargetRepo}:
  /create-verification-skill
  schedule daily /maintain-verification-skill
  pin /poteto-mode as Custom Mode (Opt+Enter)

Do not arm Autopilot until control-* --help works and CI fails a deliberate illegal import.
"@
