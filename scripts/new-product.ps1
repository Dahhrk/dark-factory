# New private product under ~/Projects — matches docs/storage-layout.md
# Web/Vite only. Non-web (Lua, CLI, engine plugin): skip this script —
# folder + templates/product-bootstrap pieces by hand. See docs/storage-layout.md
# and docs/lean-public-tip.md. Do not add -Kind until a second non-web product.
param(
  [Parameter(Mandatory = $true)]
  [string]$Name,
  [switch]$WithDesignSkills,
  [switch]$WithAntiSlop
)

$ErrorActionPreference = "Stop"
if ($Name -notmatch '^[a-zA-Z0-9][a-zA-Z0-9_-]*$') {
  throw "Name must be alphanumeric / dash / underscore: $Name"
}

$Projects = Join-Path $env:USERPROFILE "Projects"
$Target = Join-Path $Projects $Name
$Kitchen = Split-Path $PSScriptRoot -Parent
$Bootstrap = Join-Path $Kitchen "templates\product-bootstrap\install.ps1"

if (Test-Path $Target) { throw "Already exists: $Target" }
if (-not (Test-Path $Projects)) { New-Item -ItemType Directory -Path $Projects | Out-Null }

Write-Host "Creating $Target ..."
New-Item -ItemType Directory -Path $Target | Out-Null
Set-Location $Target
git init -b main | Out-Null

npm create vite@latest . -- --template react-ts
if ($LASTEXITCODE -ne 0) { throw "vite scaffold failed" }
npm install
if ($LASTEXITCODE -ne 0) { throw "npm install failed" }

& $Bootstrap -TargetRepo $Target `
  -WithDesignSkills:$WithDesignSkills `
  -WithAntiSlop:$WithAntiSlop

$templates = Join-Path $Kitchen "templates\product-bootstrap"
Copy-Item -Force (Join-Path $templates "AGENTS.product.md") (Join-Path $Target "AGENTS.md")
Copy-Item -Force (Join-Path $templates "PRIVATE.product.md") (Join-Path $Target "PRIVATE.md")

# Fill name placeholders
foreach ($f in @("AGENTS.md", "PRIVATE.md")) {
  $p = Join-Path $Target $f
  (Get-Content $p -Raw) -replace '\{\{PRODUCT\}\}', $Name | Set-Content -NoNewline $p
}

@"
# $Name

Private product for the dark-factory OS.

See [PRIVATE.md](PRIVATE.md). Kitchen: ``$Kitchen``.

``````powershell
npm install
# then in Cursor on this folder:
# /create-verification-skill
``````
"@ | Set-Content (Join-Path $Target "README.md")

Write-Host @"

Created private product: $Target

Gate pack is in scripts/ (anti-ai-ui, boundaries, dune-footguns, and the rest).
-WithDesignSkills still installs noodle. -WithAntiSlop still installs anti-slop.
Install does not add visual-parity (needs baselines).

Next:
  1. File → Open Folder → $Target
  2. /create-verification-skill
  3. Keep remote PRIVATE until scrubbed
  4. Do not put eyes in dark-factory

Layout: $Kitchen\docs\storage-layout.md
"@
