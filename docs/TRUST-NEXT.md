# Trust next — human checklist

Mechanical Dune/CI/remotes close the install gap. Trust without reading code is earned after this list.

## Before overnight

1. **Spend cap** — Cursor Settings → billing / Cloud Agents → set an on-demand cap. Do not copy lab spend.
2. **Automations** — daily `maintain-verify-glass` workspace = `~/Projects/Control-Glass`.
3. **Remotes green** — public [Dahhrk/dark-factory](https://github.com/Dahhrk/dark-factory) + private [Dahhrk/Control-Glass](https://github.com/Dahhrk/Control-Glass); Actions pass.
4. **Bugbot** — enable `Dahhrk/Control-Glass` at [cursor.com/dashboard](https://cursor.com/dashboard) → Integrations / Bugbot (needs your Cursor login; no CLI key in this kitchen).
5. **Optional** — Grok Bot paste from `automations/grok-bot/PASTE-NOW.md`.

## First overnight (required before Autopilot)

Must be **Control-Glass** (not Flashpeek, not kitchen-only). Cloud Agent preferred; **local worktree / Cursor Models Agent counts** if Other Models or On-Demand is empty — say so in the Keep line and still plate + hand-merge in the morning.

```text
/brooklyn-mode /poteto-mode going to bed. <one small Control-Glass task>.
Done means <checkable predicate via control-glass or CI>; draft PR only.
Keep decision log rows in ~/Projects/dark-factory/audit/decisions.tsv.
Commit without asking. If stuck, stop and write why.
Cursor Models only if Other Models empty. No Autopilot. No merge.
/loop until done.
```

Morning: `/show-me-your-work` — Attention list before re-reading the night. **You** merge or kill. Author agent does not certify itself.

Flashpeek overnight / API-key waits do **not** green this gate.

## Still off until Slack is real

Benny — fix tracker YAML only after a real channel; fail closed without credentials.

## Autopilot

Only after one overnight with evidence you would merge by hand. Then limited Autopilot-full on independent items. Never author-agent merges on its own verdict.

See: [match-ceiling.md](match-ceiling.md) · [SETUP-STATUS.md](SETUP-STATUS.md) · [overnight.mdc](../.cursor/rules/overnight.mdc)
