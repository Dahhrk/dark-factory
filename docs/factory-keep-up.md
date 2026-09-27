# Factory keep-up

Standing routine that keeps the factory repos aligned.

## Twins

- Kitchen: `Dahhrk/dark-factory`.
- Devin plugin pack: `Dahhrk/devin-factory-plugins`.
- Cursor pack twin: `Dahhrk/plug-factory` (private). Packs live at repo root:
  `pstack/`, `cursor-team-kit/`, `lua-kit/`, `typescript-kit/`, `python-kit/`, `go-kit/`, `shell-kit/`, `rust-kit/`, `c-kit/`, `cpp-kit/`, `java-kit/`, `csharp-kit/`, `javascript-kit/`, `ruby-kit/`, `php-kit/`, `swift-kit/`, `kotlin-kit/`, `zig-kit/`, `elixir-kit/`, `sql-kit/`, `html-kit/`, `css-kit/`, `powershell-kit/`, `r-kit/`, `fortran-kit/`, `assembly-kit/`, `ada-kit/`, `objc-kit/`, `cobol-kit/`, `delphi-kit/`, `vbnet-kit/`, `slint-kit/`, `wasm-kit/`, `apps-script-kit/`, `scss-kit/`, `astro-kit/`, `mdx-kit/`, `pug-kit/`, `tailwind-kit/`, `gotemplate-kit/`, `mako-kit/`.
- ZCode pack twin: `Dahhrk/zcode-factory` (private). ZCode/GLM-5.3 plugin:
  `.zcode-plugin/plugin.json`, `AGENTS.md`, `conventions/`, and flat prefixed
  skills `skills/pstack-<slug>/`, `skills/cursor-team-kit-<slug>/`, `skills/lua-kit-<slug>/`, `skills/typescript-kit-<slug>/`, `skills/python-kit-<slug>/`, `skills/go-kit-<slug>/`, `skills/shell-kit-<slug>/`, and `skills/rust-kit-<slug>/`, `skills/c-kit-<slug>/`, `skills/cpp-kit-<slug>/`, `skills/java-kit-<slug>/`, `skills/csharp-kit-<slug>/`, `skills/javascript-kit-<slug>/`, `skills/ruby-kit-<slug>/`, `skills/php-kit-<slug>/`, `skills/swift-kit-<slug>/`, `skills/kotlin-kit-<slug>/`, `skills/zig-kit-<slug>/`, `skills/elixir-kit-<slug>/`, `skills/sql-kit-<slug>/`, `skills/html-kit-<slug>/`, `skills/css-kit-<slug>/`, `skills/powershell-kit-<slug>/`, `skills/r-kit-<slug>/`, `skills/fortran-kit-<slug>/`, `skills/assembly-kit-<slug>/`, `skills/ada-kit-<slug>/`, `skills/objc-kit-<slug>/`, `skills/cobol-kit-<slug>/`, `skills/delphi-kit-<slug>/`, `skills/vbnet-kit-<slug>/`, `skills/slint-kit-<slug>/`, `skills/wasm-kit-<slug>/`, `skills/apps-script-kit-<slug>/`, `skills/scss-kit-<slug>/`, `skills/astro-kit-<slug>/`, `skills/mdx-kit-<slug>/`, `skills/pug-kit-<slug>/`, `skills/tailwind-kit-<slug>/`, `skills/gotemplate-kit-<slug>/`, `skills/mako-kit-<slug>/` plus
  `skills/pack-manifest.json`, exported from plug-factory. The conventions
  mirrors stay required.

The twins carry shared conventions and overlapping packs, skills, and rules.
They stay mirrored. Pack write home is `Dahhrk/plug-factory`: pack substance
is authored there and exported to the Devin and ZCode twins.

Product repos consume packs only. They do not host factory conventions.
DevinGo stays `Dahhrk/devin-go` only (not the kitchen, not the plugin pack).

## Kitchen peer (Claude + ChatGPT)

- `Dahhrk/claude-chatgpt-factory` (private; formerly `chat-factory`) is a **full kitchen peer** to this repo, not a pack twin.
- Export targets: Claude (Projects / skills / prompts) and ChatGPT (Custom GPTs / custom instructions / projects).
- Shared kitchen conventions **must** stay in sync with this kitchen: `docs/language-conventions.md`, `docs/naming.md`, `audit/decisions.tsv` shape, `intake/QUEUE.md` shape, poteto-mode / Done means.
- Weekday Factory Drift includes convention drift on this peer. Pack hard-check (`drift-check.mjs`) stays on pack twins only.
- On unexplained convention drift: open a draft PR on the lagging kitchen; never merge without Dark.


## Lane-native manifests

Each twin must ship its own lane-native plugin artifact. Do not treat a
Cursor-only tree as valid Devin (or ZCode) content.

| Twin | Required artifact |
|------|-------------------|
| `plug-factory` (Cursor) | `.cursor-plugin/plugin.json` (packs at repo root) |
| `devin-factory-plugins` (Devin) | `plugins/<kit>/.devin-plugin/plugin.json` |
| `zcode-factory` (ZCode) | flat skills layout (`skills/<kit>-<slug>/`, pack manifest) |

Cursor-only trees on Devin are a defect. Export and mirror must assert the
lane-native manifest exists for every kit before opening twin PRs. Prefer
`scripts/export-devin-plugin-manifests.mjs --assert` (Devin: create
missing manifests, then fail if any `plugins/<kit>/.devin-plugin/plugin.json`
is still absent) and `scripts/export-packs.mjs` (plug-factory targets) so
regenerations stay consistent. Creating without asserting is not enough.
Layout differences across twins are expected; missing an entire kit is not.

## Kitchen doc write path (Windows)

PowerShell `Set-Content` / `Out-File` double-encodes UTF-8. Kitchen docs with
em dashes then fail the visibility mojibake gate (`adjacent-craft.md` and
friends). Do not use those cmdlets for kitchen markdown.

- Write with Node: `fs.writeFileSync(path, text, "utf8")` (or equivalent).
- Repair double-encoded UTF-8 with `node scripts/check-mojibake.mjs --fix`,
  or a latin1 roundtrip (`Buffer.from(text, "latin1").toString("utf8")`) when
  the checker is not handy.
- Conflict merges of docs: union sections (keep thin-harness, effort, and Jev
  material), then run the mojibake check before push.

## Kit shell exec bits

Tracked `*.sh` in kits must be git mode `100755`. After adding shell
templates, run `git update-index --chmod=+x -- <paths>` before commit.
Attribution and exec-bit gates fail on `100644` shell scripts.

## Cadence

Weekdays, 10:30 AM Europe/London. Silent when clean: no report when the
twins agree and no drift is found.

## What runs

1. Refresh pack-twin mains from GitHub (`dark-factory`, `devin-factory-plugins`,
   `plug-factory`, `zcode-factory`) plus kitchen peer `claude-chatgpt-factory` for
   convention compare only.
2. Compare convention mirrors. At minimum
   `docs/language-conventions.md` in the kitchen against
   `plugins/factory-baseline/rules/language-conventions.md` in the plugin
   pack.
3. Run `scripts/drift-check.mjs` in hard-fail mode every run. Prefer the
   Devin plugins tree against the Cursor pack twin checkout
   (`PLUG_FACTORY_REPO` or `~/Projects/plug-factory`). The reverse check can
   also run from `plug-factory` once its scripts exist, or from the Devin
   tree with `PLUG_FACTORY_REPO` set. A missing checkout is a setup failure
   to fix, not a step to skip. The advisory `--content` pass alone never
   opens a PR. Devin CI uses `secrets.PLUG_FACTORY_TOKEN` (or
   `PLUG_FACTORY_READ_TOKEN`) when set; otherwise it falls back to public
   `Dahhrk/plugins` with a warning so the job is not bricked.
4. Run the ZCode twin's structural check:
   `node scripts/drift-check.mjs` inside `Dahhrk/zcode-factory`, or from a
   twin checkout with `ZCODE_FACTORY_REPO` pointing at it. With
   `DARK_FACTORY_REPO` set it also compares the conventions mirror's
   section headers against `docs/language-conventions.md` here. Missing
   checkout is a setup failure, not a skip. Private CI read uses
   `ZCODE_FACTORY_TOKEN` (or `ZCODE_FACTORY_READ_TOKEN`) when set.
5. After any plug pack edit, regenerate the ZCode twin with
   `node scripts/export-packs.mjs --target zcode` (and the Devin twin with
   `--target devin` when it is needed), assert lane-native manifests on every kit, then open mirror PRs on the lagging
   twins. Never merge without Dark. Pack drift is checked with
   `skills/pack-manifest.json` plus a nested compare of the exported skill
   trees. Twin-only adapt files stay on an allowlist so they do not read as
   drift.

## On unexplained drift

Open a mirror PR on the lagging twin. Never merge without Dark.

When the drift is in pack substance, fix it in `Dahhrk/plug-factory` first,
rerun `node scripts/export-packs.mjs --target zcode` (and `--target devin`
when needed), and mirror the export onto the lagging twins.

When both sides carry conflicting edits, do not pick a winner. Ask which one
wins, then mirror that choice.

## Never

- Block encode on CloudAgent when Cursor cloud on-demand is
  exhausted. Prefer Criminal/local `gh` merge for kitchen encode PRs.
- Merge without Dark.
- Post publicly outside the PR.
- Enable Autopilot.
- Put secrets in the kitchen.
- Invent evidence.

## Code defaults

Shipping bar for both lanes: [docs/factory-code-defaults.md](factory-code-defaults.md).

## Pointer

Language rules and the mirror contract live in
[docs/language-conventions.md](language-conventions.md), Anti-drift.
