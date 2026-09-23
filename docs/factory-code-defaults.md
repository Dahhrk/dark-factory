# Factory code defaults

Default shipping bar for Cursor and Devin lanes.

## Bar

- Prefer the smallest correct diff.
- Before marking a PR ready, run `/no-comments` and `/deslop`.
- For gnarly maintainability, run thermo-nuclear code quality review
  (`cursor-team-kit:thermo-nuclear-code-quality-review` on Cursor; the twin
  agent on Devin).
- No narration comments. Survivors match the Devin baseline
  `smallest-correct-diff` rule: legal/license headers, public-API doc
  contracts, non-obvious behavior forced by an external dependency (mark
  it for reshape), and lint suppressions where the rule is faulty.

## Pointers

| Lane | Where |
|------|--------|
| Devin baseline | `Dahhrk/devin-factory-plugins` `plugins/factory-baseline/rules/smallest-correct-diff.md` and `code-quality-bar.md` |
| Cursor | `/no-comments` (pstack), `/deslop` and thermo agent (cursor-team-kit) |
| PR steps | [pr-workflow.md](pr-workflow.md) |

Pointers only. Do not duplicate the full skills here.
