# Devin outer loop

The Devin-side equivalent of `automations/grok-bot/`. Grok Bot = character
profiles + scheduled routines over xAI. Devin's equivalent primitives:

| Grok Bot | Devin |
|---|---|
| Bot profile (YAML via grokbot-fleet) | Playbook = a routine file in `routines/` (Devin has no bot entity; the routine carries the role contract) |
| Routine (scheduled YAML) | Scheduled session in app.devin.ai, or a manual session pasting the routine file |
| Context farm / standup / sweep | The routines below |

## How to run a routine

**Scheduled (if the plan allows):** app.devin.ai -> new session on the target
repo -> Schedule -> daily/weekly -> paste the routine file as the session
prompt. The session wakes on the cron and runs it with `gh` auth.

**Manual:** open a Devin session on `Dahhrk/dark-factory` and paste the
routine file, or reference it: "run `automations/devin/routines/<name>.md`".

**Local, no LLM:** deterministic routines also exist as scripts +
Windows scheduled tasks (needs-you sweep, ledger harvest, plugin sync).
Those cover mornings even when no session is running.

## Routines

| Routine | Grok analog | Cadence | File |
|---|---|---|---|
| Morning briefing | Harvey standup | daily 9:00 | `routines/morning-briefing.md` |
| Needs-you sweep | Harvey sweep | morning + mid-afternoon | `routines/needs-you-sweep.md` |
| Weekly encode | Ted Friday ops | Friday | `routines/weekly-encode.md` |
| Context farm | Harvey/Ted farm | daily 8:00 | `routines/context-farm.md` |

## Contract (same as the rest of the factory)

- Draft PRs only; humans plate. Autopilot stays off.
- Sessions read `~/Projects/registry.md` (or `Dahhrk/dark-factory` docs) for
  the fleet; do not hardcode repo lists in routine bodies.
- One verifiable unit per PR; Done means + Keep in every handoff.
- A routine that finds nothing says so; it does not invent work.
