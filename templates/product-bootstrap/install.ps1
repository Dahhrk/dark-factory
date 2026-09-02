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
Copy-Item -Force (Join-Path $PSScriptRoot "cursor-settings.json") (Join-Path $destCursor "settings.json")

$rulesDir = Join-Path $destCursor "rules"
New-Item -ItemType Directory -Force -Path $rulesDir | Out-Null
Copy-Item -Force (Join-Path $PSScriptRoot "anti-ai-ui.mdc") (Join-Path $rulesDir "anti-ai-ui.mdc")

$scriptsDir = Join-Path $destRoot "scripts"
New-Item -ItemType Directory -Force -Path $scriptsDir | Out-Null
Copy-Item -Force (Join-Path $PSScriptRoot "check-anti-ai-ui.mjs") (Join-Path $scriptsDir "check-anti-ai-ui.mjs")

$agentsSrc = Join-Path $PSScriptRoot "AGENTS.product.md"
$privateSrc = Join-Path $PSScriptRoot "PRIVATE.product.md"
if (Test-Path $agentsSrc) {
  $name = Split-Path $TargetRepo -Leaf
  (Get-Content $agentsSrc -Raw) -replace '\{\{PRODUCT\}\}', $name | Set-Content -NoNewline (Join-Path $destRoot "AGENTS.md")
  (Get-Content $privateSrc -Raw) -replace '\{\{PRODUCT\}\}', $name | Set-Content -NoNewline (Join-Path $destRoot "PRIVATE.md")
}

Write-Host "Copied BUGBOT.md, .cursor/dune.md, .cursor/settings.json, .cursor/rules/anti-ai-ui.mdc, scripts/check-anti-ai-ui.mjs, AGENTS.md, PRIVATE.md"
Write-Host "Wire package.json script anti-ai-ui + CI step after create-verification-skill (see Control-Glass)."

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
