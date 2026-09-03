# Grok Bot Fleet

Bot profiles are managed through [grokbot-fleet](https://github.com/Dahhrk/grokbot-fleet). Profiles live as private YAML files synced via grokbot-fleet MCP. Do not paste profiles manually.

## Roster

| Bot | Character | Role |
|-----|-----------|------|
| Harvey Specter | Suits | Chief of Staff — intake, routing, standup |
| Tony Stark | Marvel | Engineering Lead — spawns Cloud Agents, validates |
| Walter White | Breaking Bad | Frontend Authority — design direction, purity |
| Stewie Griffin | Family Guy | Tooling & Infrastructure — CI, gates, harness |
| Gordon Ramsay | Hell's Kitchen | Code Reviewer — BUGBOT.md, every PR |
| Ted | Ted (2012) | Friday Ops — encode-lessons, prune, bug farmer |

## How to update bots

1. Edit YAML in `~/grokbot-fleet/profiles/`
2. Run `sync_profiles` via grokbot-fleet MCP
3. Done

## How to add a new bot

Use `CreateAgent` via grokbot-fleet, write the YAML profile, and sync.

## Project registry

All bots read `~/projects/registry.md` for project-specific details. Updated via grokbot-fleet. No bot profiles need re-pasting when a new project is added.

## Routines

Routine YAML files live in `~/grokbot-fleet/routines/`. Synced via `sync_routines`.

| Routine | Bot | Trigger |
|---------|-----|---------|
| Daily Standup | Harvey | 9:00 AM daily |
| Dispatch | Harvey | When messaged |
| Bot Health Check | Harvey | Every 6 hours |
| Daily Verification | Tony | 7:00 AM daily |
| PR Review Trigger | Gordon | PR opened |
| Friday Ops | Ted | Friday 10:00 AM |
| Auto-update Fleet | grokbot-fleet | 6:00 AM daily |
| Weekly Profile Backup | grokbot-fleet | Sunday 3:00 AM |

## Guardrails

grokbot-fleet enforces at the MCP level:
- No push to main/master
- No secrets in prompts
- No destructive production actions
- Fork before upstream

## Full Autopilot (target state)

> **NOT ENABLED — gate: [docs/TRUST-NEXT.md](../../docs/TRUST-NEXT.md)**
>
> How-to only. Do not Autopilot-full / overnight fleet until that gate is green. Board: [SETUP-STATUS.md](../../docs/SETUP-STATUS.md) · [GAP-MATRIX.md](../../docs/GAP-MATRIX.md).

Task → Harvey routes → Tony spawns Cloud Agent with `/poteto-mode` + `/loop until done` → agent verifies against the project's verify skill → PR to Gordon → human merges.

Overnight: Harvey queues tasks, Tony runs them in isolated worktrees with decision logs.

## Already elsewhere (not Grok bots)

| Name | Where |
|------|--------|
| maintain-verify-glass | Cursor Automations |
| Bugbot | Cursor dashboard on Control-Glass |
