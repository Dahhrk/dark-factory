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

Claude kitchen: `Dahhrk/claude-factory`. ChatGPT kitchen: `Dahhrk/chatgpt-factory`.
After plug pack edits, regenerate lane dumps with
`node scripts/export-packs.mjs --target claude` and `--target chatgpt` into
`exports/claude` and `exports/chatgpt` (full pack substance from plug-factory,
hand stubs preserved). Open a draft PR on that kitchen when the dump drifts.

Product repos consume packs only. They do not host factory conventions.
DevinGo stays `Dahhrk/devin-go` only (not the kitchen, not the plugin pack).

## Export ownership after plug write

Write-home is `Dahhrk/plug-factory`. After any **substantive** pack or kit write
there (new kit, skill body change, convention mirror change, version bump that
carries substance), someone must re-export and open mirror PRs. Do not leave
export as tribal knowledge.

| Who | When | What |
|-----|------|------|
| Weekday Factory Drift keep-up | Scheduled weekday run (see Cadence) | Full pack sync: Devin + ZCode hard-check twins, plus Claude + ChatGPT lane-native dumps |
| On-demand keep-up (outer loop) | Right after a substantive plug write, if Drift has not run yet | Same exports; open draft mirror PRs on lagging homes |

Commands (from a plug-factory checkout that has `scripts/export-packs.mjs`):

1. `node scripts/export-packs.mjs --target devin` then assert lane-native manifests
2. `node scripts/export-packs.mjs --target zcode`
3. `node scripts/export-packs.mjs --target claude` into `Dahhrk/claude-factory`
4. `node scripts/export-packs.mjs --target chatgpt` into `Dahhrk/chatgpt-factory`
5. Open draft mirror PRs on any home that drifted. Never merge without Dark.

A plug write that only touches docs or CI with no pack substance may skip export;
when unsure, run Drift / export and let clean trees stay silent.

## Kitchen peers (Claude + ChatGPT) — five-lane substance-parity

Five lanes stay substance-parity: Cursor (`plug-factory`) + Devin (`devin-factory-plugins`) + ZCode (`zcode-factory`) + Claude + ChatGPT.

Claude and ChatGPT are **separate** kitchen peers (former mono `Dahhrk/claude-chatgpt-factory` deleted 2026-09-27):

- `Dahhrk/claude-factory` (private) — Claude lane only (Projects / skills / prompts). Full kitchen peer to this repo; **not** a pack twin.
- `Dahhrk/chatgpt-factory` (private) — ChatGPT lane only (Custom GPTs / custom instructions / projects). Full kitchen peer to this repo; **not** a pack twin.

Pack substance mirrors via **lane-native exports** into each peer. Do **not** run pack hard-check (`drift-check.mjs` / export-packs compare) against either kitchen peer.

Shared kitchen conventions **must** stay in sync with this kitchen: `docs/language-conventions.md`, `docs/naming.md`, `audit/decisions.tsv` shape, `intake/QUEUE.md` shape, poteto-mode / Done means.

Weekday Factory Drift includes **full pack sync** on both peers via those lane-native exports (plus convention compare). Pack hard-check stays on pack twins only.

On unexplained drift: open a draft PR on the lagging home; never merge without Dark.

Former mono `Dahhrk/claude-chatgpt-factory` was deleted 2026-09-27 (Dark). Not in the keep-up set. Do not recreate without Dark.


## Lane-native manifests

Each twin must ship its own lane-native plugin artifact. Do not treat a
Cursor-only tree as valid Devin (or ZCode) content.

| Home | Required artifact |
|------|-------------------|
| `plug-factory` (Cursor) | `.cursor-plugin/plugin.json` (packs at repo root) |
| `devin-factory-plugins` (Devin) | `plugins/<kit>/.devin-plugin/plugin.json` |
| `zcode-factory` (ZCode) | flat skills layout (`skills/<kit>-<slug>/`, pack manifest) |
| `claude-factory` (Claude) | lane-native Claude exports (Projects / skills / prompts) |
| `chatgpt-factory` (ChatGPT) | lane-native ChatGPT exports (Custom GPTs / custom instructions / projects) |

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
   `plug-factory`, `zcode-factory`) plus kitchen peers `claude-factory` and
   `chatgpt-factory` for convention compare and lane-native export parity
   (not pack hard-check).
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
   twins. Also regenerate Claude/ChatGPT dumps into
   `Dahhrk/claude-factory` with `--target claude` and `Dahhrk/chatgpt-factory`
   with `--target chatgpt`
   when pack substance changed. Never merge without Dark. Pack drift is checked with
   `skills/pack-manifest.json` plus a nested compare of the exported skill
   trees. Twin-only adapt files stay on an allowlist so they do not read as
   drift.

## On unexplained drift

Open a mirror PR on the lagging twin. Never merge without Dark.

When the drift is in pack substance, fix it in `Dahhrk/plug-factory` first,
rerun `node scripts/export-packs.mjs --target zcode` (and `--target devin`
when needed; `--target claude` / `--target chatgpt` for the Claude/ChatGPT
kitchen dumps), and mirror the export onto the lagging homes.

When both sides carry conflicting edits, do not pick a winner. Ask which one
wins, then mirror that choice.

## Runner reboot recovery

Box self-hosted Actions runners die across a Grok Bot computer reboot. Routine
`factory runners keep-alive` already covers this on a schedule. After a reboot
(or when CI sits queued with no runner), humans and agents must run:

```bash
/home/box/ensure-all-factory-runners.sh
```

That script calls `ensure-running.sh` in each of these six dirs:

| Dir | Typical labels / home |
|-----|------------------------|
| `/home/box/actions-runner` | plug-factory |
| `/home/box/actions-runner-zcode` | zcode-factory |
| `/home/box/actions-runner-dark-factory` | dark-factory |
| `/home/box/actions-runner-devin-plugins` | devin-plugins |
| `/home/box/actions-runner-claude-factory` | claude-factory |
| `/home/box/actions-runner-chatgpt-factory` | chatgpt-factory |

Do not invent systemd units or cron on this box; keep-alive + the ensure script
are the recovery path. Cloud `ubuntu-latest` runners may be billing-blocked;
kitchen and twin CI prefer these self-hosted labels.

## Actions secret inventory (names only)

Names only. Never put values, PATs, or token bodies in this kitchen.

Verified against twin workflow YAML (clone/sync steps). Alternate `*_READ_TOKEN`
names are accepted by those workflows when the primary is unset.

| Repo | Secrets needed for CI clone/sync | Notes |
|------|----------------------------------|-------|
| `Dahhrk/devin-factory-plugins` | `PLUG_FACTORY_TOKEN` (or `PLUG_FACTORY_READ_TOKEN`); `ZCODE_FACTORY_TOKEN` (or `ZCODE_FACTORY_READ_TOKEN`) | `validate.yml` clones private plug-factory and zcode-factory. Falls back / skips with warning if unset. Also uses `GITHUB_TOKEN`. |
| `Dahhrk/zcode-factory` | `DARK_FACTORY_TOKEN` (or `DARK_FACTORY_READ_TOKEN`) | `drift-check.yml` clones dark-factory for conventions header compare. Structural-only if unset. Also uses `GITHUB_TOKEN`. |
| `Dahhrk/plug-factory` | none beyond `GITHUB_TOKEN` | `validate.yml` / `sync-from-plugins.yml` use `GITHUB_TOKEN` only (verified). |
| `Dahhrk/dark-factory` | none beyond `GITHUB_TOKEN` | Kitchen CI / factory-gate; no private twin clone (verified). |
| `Dahhrk/claude-factory` | none beyond `GITHUB_TOKEN` for current kitchen-ci / factory-gate | Pack sync is lane-native export from plug-factory, not a CI clone of plug. Mark **verify-needed** if a future sync workflow adds a private clone. |
| `Dahhrk/chatgpt-factory` | none beyond `GITHUB_TOKEN` for current kitchen-ci / factory-gate | Same as claude-factory. Mark **verify-needed** if a future sync workflow adds a private clone. |

Do not invent additional secret names. If a workflow gains a private clone
step, update this table from the YAML, not from memory.

## Cloud Agents posture (kitchen / twin docs)

Cursor Cloud Agents launched from Grok Bot are currently **usage-blocked**
until Dark enables on-demand spend. Factory kitchen and twin doc PRs prefer
`gh` on the box plus the self-hosted runners / local executors above.

- Do **not** block encode waiting for Cloud Agents when on-demand is dry.
- Autopilot and overnight fleet stay gated by [TRUST-NEXT.md](TRUST-NEXT.md).
- Do **not** enable Autopilot from keep-up.
- Do **not** invent pack smells to fill an empty encode.

Spend and pool detail: [spend-and-cloud.md](spend-and-cloud.md).

## Never

- Block encode on CloudAgent when Cursor cloud on-demand is
  exhausted. Prefer box `gh` + self-hosted runners / local executors for
  kitchen and twin encode PRs.
- Merge without Dark.
- Post publicly outside the PR.
- Enable Autopilot.
- Put secrets in the kitchen.
- Invent evidence.


## Harness contracts

Handoff, receipt, autonomy, and failure-to-infra: [harness/README.md](harness/README.md).

## Code defaults

Shipping bar for both lanes: [docs/factory-code-defaults.md](factory-code-defaults.md).

## Pointer

Language rules and the mirror contract live in
[docs/language-conventions.md](language-conventions.md), Anti-drift.
