# Failure to infrastructure

Standing rule: repeated agent failures become a rule, gate, fixture, permission, or kit encode. They do not become a longer prompt.

Aligns with poteto / language-farm encode practice and this kitchen's quality ladder: structure beats reminders.

## When it fires

The same correction, failed check, or workaround appears twice in the same workspace (see [SELF-IMPROVE.md](../SELF-IMPROVE.md) and `audit/smells.tsv`). Encode the same day when practical. Friday encode-lessons is backup, not the only path.

## Preferred landing spots (existing)

Prefer these over new prose:

| Strength | Where in this factory |
|----------|------------------------|
| CI / gate | `templates/product-bootstrap/gates/` and product gate scripts synced via `scripts/sync-bootstrap-gates.ps1` |
| Kitchen visibility | `.github/workflows/kitchen-ci.yml`, `.github/workflows/factory-gate.yml`, `scripts/check-mojibake.mjs` |
| Close-loop ledger | `audit/smells.tsv` + `node scripts/close-loop.mjs` |
| Conventions | [language-conventions.md](../language-conventions.md), [factory-code-defaults.md](../factory-code-defaults.md) |
| Encode cadence | `automations/cursor/encode-lessons-weekly.md` (and twin encode routines) |
| Product eyes | Product `control-*` / verify skills (not hosted as live maps in this public kitchen) |
| Pack / kit substance | Write home `Dahhrk/plug-factory`; mirror via keep-up ([factory-keep-up.md](../factory-keep-up.md)) |

Do not invent paths. If the right encode home is unclear, open a draft PR that points at the nearest existing gate or skill and ask Dark.

## Do not

- Add a third reminder in chat or AGENTS when the smell already has two hits
- Encode by inventing evidence or fake ledger rows
- Turn Autopilot on to "burn down" repeats
- Put secrets or private Feature Maps into the kitchen to make a gate pass

## Related

[quality-ladder.md](../quality-ladder.md) · [SELF-IMPROVE.md](../SELF-IMPROVE.md) · [thin-harness-fat-skills.md](../thin-harness-fat-skills.md) · [autonomy-checklist.md](autonomy-checklist.md)
