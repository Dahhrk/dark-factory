# Devin outer loop

The Devin-side equivalent of `automations/grok-bot/`. Grok Bot = character
profiles + scheduled routines over xAI. Devin's equivalent primitives:

| Grok Bot | Devin |
|---|---|
| Bot profile (YAML via grokbot-fleet) | Playbook = a routine file in `routines/` + subagent profiles (`pstack:poteto-agent` = engineering persona, `pstack:panelist-*` = review board) |
| Routine (scheduled YAML) | `acp-run.mjs` - spawns a real session over ACP stdio on the installed `devin.exe`; or a manual session pasting the routine file |
| Event listeners (GitHub/Slack/webhook wakes) | Poll flavor only - `fleetd` polls `gh api .../events` on the 15-min task (no Devin GitHub App on this plan) |
| SendToAgent / channels / group chats | Repo artifacts as the message bus: `audit/smells.tsv`, `audit/decisions.tsv`, `intake/QUEUE.md`, `local/` briefings |
| Memory tiers (agent/user/project) | `AGENTS.md`+`PRIVATE.md` per repo / `~/Projects/registry.md` + Feature Maps / `~/.devin/rules` + always-on plugin rules |
| Auto Review (risk gate) | `gh` approvals + repo gates (attribution, visibility) + draft-PR contract |
| Context farm / standup / sweep | The routines below |

## Cost note

Scheduled Devin sessions spend ACUs like any session. Deterministic sweeps
(needs-you, harvest, plugin sync) run as free local scheduled tasks - a
session only earns its keep on judgment work (encode, triage, review).

## How to run a routine

**Automatic:** `fleetd` fires `kind: session` routines through
`acp-run.mjs`, which spawns a real Devin session over ACP (Agent Client
Protocol, JSON-RPC stdio on `devin.exe acp`). Requires a fresh
`devin auth login` (browser PKCE); `node acp-run.mjs --check` verifies the
credential. If the spawn fails, the job falls back to `fleet/inbox/`.

**acp-run surface:**

```
node acp-run.mjs --check                        # credential alive?
node acp-run.mjs --list                         # sessions in the local db
node acp-run.mjs --prompt "..." [--cwd ..] [--model swe-2-max] [--timeout ms]
node acp-run.mjs --resume <sessionId> --prompt "..."   # continue a session
```

Sessions persist in the local session db across ACP processes
(`--list`/`--resume`). Caveat: a client killed mid-turn can leave the
session un-loadable - the driver stays alive until the prompt resolves, and
`fleetd` logs `spawned <sessionId>` the moment `session/new` returns so an
orphan is always identifiable.

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
  `kind: session` routines spawn a Devin session via `acp-run.mjs`, falling
  back to `fleet/inbox/<bot>.jsonl` if the spawn fails. `FLEET_SESSIONS=off`
  forces queue-only; `DEVIN_ACP_BIN` overrides the binary path.
- `fleet/profiles/*.yaml` - optional `model:` (profile or per-routine) pins
  the session model, e.g. `swe-2-max`; routine `timeout:` is in minutes
  (default 20).
- `fleet/inbox/*.jsonl` - the SendToAgent/channel equivalent: queued session
  jobs plus `<bot>.out.jsonl` session replies. Tracked in git so cloud
  sessions can see them.
- `fleet/log.tsv` - every fire/spawn/drain lands here.
- `routines/drain-inbox.md` - the pickup playbook: any Devin session on this
  repo drains the inbox, runs each job's routine file, logs, opens draft PRs.

The loop is closed today: the 15-min task fires `fleetd`, which spawns real
sessions on Devin's models. The inbox remains the buffer for jobs queued by
the event poller between routine runs.

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
