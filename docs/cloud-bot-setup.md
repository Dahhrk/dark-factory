# Cloud + bot setup (implement checklist)

What agents can stage vs what only you can enable. Board: [SETUP-STATUS.md](SETUP-STATUS.md).

## Cursor Cloud Agents (YOU)

1. Cursor Settings ΓåÆ Cloud Agents ΓåÆ **ON**
2. Set an on-demand **spend cap** (do not copy lab spend)
3. Prefer cloud workers for Autopilot; bots coordinate, cloud works
4. Snapshot env that can `npm i`, run app, record proof (on `Control-Glass` once verify works)

## Grok Bot (YOU)

1. Install pstack: `grokbot://app/v1/plugin/add?id=9717366` (or marketplace)
2. Optional: [Dr Eggbot](https://x.ai/bot/93gOz3op1UQdBdbekQFLK) ΓåÆ engineer bot owns verify + daily maintain
3. Paste routines from [outer-loop.md](outer-loop.md) and `automations/grok-bot/*.md`
4. Connect Slack / X / GitHub only as needed; fail closed without credentials

## Cursor Automations (staged)

Paste-ready workflows live in `automations/cursor/`. Open Automations UI and create:

| Automation | Trigger | Action |
|------------|---------|--------|
| maintain-verify-glass | Daily schedule | Open `Control-Glass`, run `/maintain-verification-skill` |
| kitchen-intake-prune | Friday | Prune `intake/QUEUE.md` per outer-loop weekly prune |
| overnight-catchup | Morning | `/show-me-your-work` on last nightΓÇÖs `audit/decisions.tsv` |

Do **not** enable Benny until Slack + verify are real. Pack pointer: `Control-Glass/.cursor/automations/benny/README.md`.

## Pin Custom Mode (YOU)

Opt+Enter on `/poteto-mode` autocomplete so every turn reminds the agent.

## Done means (this doc)

- [ ] Cloud Agents ON + spend cap  
- [ ] At least one Cursor automation saved (maintain-verify)  
- [ ] Grok Bot pstack installed OR deferred with reason  
- [ ] `/poteto-mode` pinned  
- [ ] Control-Glass: `/create-verification-skill` hardened once  
