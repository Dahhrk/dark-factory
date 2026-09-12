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
$destDevin = Join-Path $TargetRepo ".devin"
$destRoot = $TargetRepo
New-Item -ItemType Directory -Force -Path $destCursor | Out-Null
New-Item -ItemType Directory -Force -Path $destDevin | Out-Null

Copy-Item -Force (Join-Path $PSScriptRoot "BUGBOT.md") (Join-Path $destRoot "BUGBOT.md")
Copy-Item -Force (Join-Path $PSScriptRoot "dune.md") (Join-Path $destCursor "dune.md")
Copy-Item -Force (Join-Path $PSScriptRoot "cursor-settings.json") (Join-Path $destCursor "settings.json")
$gitName = (git config --global user.name)
$gitEmail = (git config --global user.email)
$blueprint = Get-Content (Join-Path $PSScriptRoot "devin-blueprint.yaml") -Raw
if ($gitName -and $gitEmail) {
  $blueprint = $blueprint -replace '\{\{GIT_NAME\}\}', $gitName -replace '\{\{GIT_EMAIL\}\}', $gitEmail
} else {
  $blueprint = $blueprint -replace '(?m)^  git config user\.name "\{\{GIT_NAME\}\}"\r?\n', '' -replace '(?m)^  git config user\.email "\{\{GIT_EMAIL\}\}"\r?\n', ''
  Write-Host "WARN: git user.name/user.email not set globally; cloud sessions will use the default commit identity. Set them or edit .devin/blueprint.yaml."
}
Set-Content -NoNewline (Join-Path $destDevin "blueprint.yaml") $blueprint
Copy-Item -Force (Join-Path $PSScriptRoot "devin-config.json") (Join-Path $destDevin "config.json")

$rulesDir = Join-Path $destCursor "rules"
New-Item -ItemType Directory -Force -Path $rulesDir | Out-Null
Copy-Item -Force (Join-Path $PSScriptRoot "anti-ai-ui.mdc") (Join-Path $rulesDir "anti-ai-ui.mdc")

$scriptsDir = Join-Path $destRoot "scripts"
New-Item -ItemType Directory -Force -Path $scriptsDir | Out-Null
$gatesDir = Join-Path $PSScriptRoot "gates"
if (-not (Test-Path $gatesDir)) { throw "Gate pack missing: $gatesDir" }
Get-ChildItem -Path $gatesDir -Filter "*.mjs" | ForEach-Object {
  Copy-Item -Force $_.FullName (Join-Path $scriptsDir $_.Name)
}

$pkg = Join-Path $destRoot "package.json"
$wire = Join-Path $PSScriptRoot "wire-package-scripts.mjs"
if ((Test-Path $pkg) -and (Test-Path $wire)) {
  & node $wire $pkg
  if ($LASTEXITCODE -ne 0) { throw "wire-package-scripts.mjs failed ($LASTEXITCODE)" }
}

$agentsSrc = Join-Path $PSScriptRoot "AGENTS.product.md"
$privateSrc = Join-Path $PSScriptRoot "PRIVATE.product.md"
if (Test-Path $agentsSrc) {
  $name = Split-Path $TargetRepo -Leaf
  (Get-Content $agentsSrc -Raw) -replace '\{\{PRODUCT\}\}', $name | Set-Content -NoNewline (Join-Path $destRoot "AGENTS.md")
  (Get-Content $privateSrc -Raw) -replace '\{\{PRODUCT\}\}', $name | Set-Content -NoNewline (Join-Path $destRoot "PRIVATE.md")
}

Write-Host "Copied BUGBOT.md, .cursor/dune.md, .cursor/settings.json, .cursor/rules/anti-ai-ui.mdc, gates/*.mjs -> scripts/, .devin/blueprint.yaml, .devin/config.json, AGENTS.md, PRIVATE.md"
Write-Host "Wired package.json gate scripts when package.json exists. No visual-parity (needs baselines)."

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
