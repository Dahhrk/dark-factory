# Devin outer loop

The Devin-side equivalent of `automations/grok-bot/`. Grok Bot = character
profiles + scheduled routines over xAI. Devin's equivalent primitives:

| Grok Bot | Devin |
|---|---|
| Bot profile (YAML via grokbot-fleet) | Playbook = a routine file in `routines/` + subagent profiles (`pstack:poteto-agent` = engineering persona, `pstack:panelist-*` = review board) |
| Routine (scheduled YAML) | Scheduled session in app.devin.ai, or a manual session pasting the routine file |
| Event listeners (GitHub/Slack/webhook wakes) | **No equivalent on this plan** - sessions API is gated; nearest is GitHub Actions + local scheduled tasks |
| SendToAgent / channels / group chats | Repo artifacts as the message bus: `audit/smells.tsv`, `audit/decisions.tsv`, `intake/QUEUE.md`, `local/` briefings |
| Memory tiers (agent/user/project) | `AGENTS.md`+`PRIVATE.md` per repo / `~/Projects/registry.md` + Feature Maps / `~/.devin/rules` + always-on plugin rules |
| Auto Review (risk gate) | `gh` approvals + repo gates (attribution, visibility) + draft-PR contract |
| Context farm / standup / sweep | The routines below |

## Cost note

Scheduled Devin sessions spend ACUs like any session. Deterministic sweeps
(needs-you, harvest, plugin sync) run as free local scheduled tasks - a
session only earns its keep on judgment work (encode, triage, review).

## How to run a routine

**Scheduled (if the plan allows):** app.devin.ai -> new session on the target
repo -> Schedule -> daily/weekly -> paste the routine file as the session
prompt. The session wakes on the cron and runs it with `gh` auth.

**Manual:** open a Devin session on `Dahhrk/dark-factory` and paste the
routine file, or reference it: "run `automations/devin/routines/<name>.md`".

**Local, no LLM:** deterministic routines also exist as scripts +
Windows scheduled tasks (needs-you sweep, ledger harvest, plugin sync).
Those cover mornings even when no session is running.

## The fleet (our own Grok Bot layer)

`fleet/` is the bot roster + scheduler + message bus:

- `fleet/profiles/*.yaml` - bot profiles (name, role, routine schedule).
  Same roster shape as grokbot-fleet; YAML lives here since there is no MCP.
- `fleetd.mjs` - the scheduler. A Windows task (`DarkFactoryFleet`, every
  15 min) fires it. `kind: script` routines execute locally (free, no LLM);
  `kind: session` routines append a job row to `fleet/inbox/<bot>.jsonl`.
- `fleet/inbox/*.jsonl` - the SendToAgent/channel equivalent: queued session
  jobs. Tracked in git so cloud sessions can see them.
- `fleet/log.tsv` - every fire/drain lands here.
- `routines/drain-inbox.md` - the pickup playbook: any Devin session on this
  repo drains the inbox, runs each job's routine file, logs, opens draft PRs.

On a plan with scheduled sessions, schedule `drain-inbox` daily - that is
the full loop with zero human steps. Without it, the deterministic half
still runs and the inbox waits for the next session.

## Routines

| Routine | Grok analog | Cadence | File |
|---|---|---|---|
| Morning briefing | Harvey standup | daily 9:00 | `routines/morning-briefing.md` |
| Needs-you sweep | Harvey sweep | morning + mid-afternoon | `routines/needs-you-sweep.md` |
| Weekly encode | Ted Friday ops | Friday | `routines/weekly-encode.md` |
| Context farm | Harvey/Ted farm | daily 8:00 | `routines/context-farm.md` |
| Drain inbox | SendToAgent pickup | on demand / scheduled | `routines/drain-inbox.md` |

## Contract (same as the rest of the factory)

- Draft PRs only; humans plate. Autopilot stays off.
- Sessions read `~/Projects/registry.md` (or `Dahhrk/dark-factory` docs) for
  the fleet; do not hardcode repo lists in routine bodies.
- One verifiable unit per PR; Done means + Keep in every handoff.
- A routine that finds nothing says so; it does not invent work.
