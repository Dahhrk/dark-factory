# Factory code defaults

Default shipping bar for Cursor, Devin, and ZCode lanes.

## Bar

- Prefer the smallest correct diff.
- Before marking a PR ready, run `/no-comments` and `/deslop`.
- For gnarly maintainability, run thermo-nuclear code quality review
  (`cursor-team-kit:thermo-nuclear-code-quality-review` on Cursor; the twin
  agent on Devin; manual review on ZCode).
- No narration comments. Survivors match the Devin baseline
  `smallest-correct-diff` rule: legal/license headers, public-API doc
  contracts, non-obvious behavior forced by an external dependency (mark
  it for reshape), and lint suppressions where the rule is faulty.

## Pointers

| Lane | Where |
|------|--------|
| Devin baseline | `Dahhrk/devin-factory-plugins` `plugins/factory-baseline/rules/smallest-correct-diff.md` and `code-quality-bar.md` |
| Cursor | `/no-comments` (pstack), `/deslop` and thermo agent (cursor-team-kit) |
| ZCode | `skills/smallest-correct-diff`, `skills/deslop` in `Dahhrk/zcode-factory` |
| PR steps | [pr-workflow.md](pr-workflow.md) |

Pointers only. Do not duplicate the full skills here.

## Lane-native manifests

Each twin ships its own artifact: Cursor `.cursor-plugin`, Devin
`.devin-plugin/plugin.json`, ZCode flat skills. See
[factory-keep-up.md](factory-keep-up.md) Lane-native manifests. Cursor-only
trees on Devin are a defect; export/mirror must assert before twin PRs (`scripts/export-devin-plugin-manifests.mjs --assert` on Devin).

## Windows kitchen writes

Never PowerShell `Set-Content` for kitchen docs. Use Node UTF-8 writes.
Run `node scripts/check-mojibake.mjs` before push after conflict merges.
Tracked kit `*.sh` files must be git `100755` (`git update-index --chmod=+x`).
