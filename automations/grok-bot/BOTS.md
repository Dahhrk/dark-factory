# Grok Bot Fleet

Bot profiles are managed through [grokbot-fleet](https://github.com/Dahhrk/grokbot-fleet). Profiles live as private YAML files synced via grokbot-fleet MCP. Do not paste profiles manually.

## Roster

| Bot | Character | Role |
|-----|-----------|------|
| Harvey Specter | Suits | Chief of Staff — intake, routing, overnight catch-up |
| Tony Stark | Marvel | Engineering Lead — spawns Cloud Agents, Feature Maps |
| Walter White | Breaking Bad | Frontend Authority — design direction, purity (`ui: yes`) |
| Stewie Griffin | Family Guy | Tooling & Infrastructure — CI, gates, harness |
| The Riddler | Batman | QA & Verification — proof loop before Gordon |
| Gordon Ramsay | Hell's Kitchen | Code Reviewer — BUGBOT.md; never merges |
| Ted | Ted (2012) | Friday Ops — encode-lessons, prune, social farm |
| Dr Strange | Marvel | Bot factory, registry owner, fleet sync |

## How to update bots

1. Edit YAML in `~/Documents/dev-projects/grokbot-fleet/profiles/` (Windows); if docs say `~/grokbot-fleet`, use the path that exists
2. Run `sync_profiles` via grokbot-fleet MCP with that `repo_root`
3. Done — kitchen `BOTS.md` roster stays in sync; never paste full profiles here

## How to add a new bot

Use `CreateAgent` via grokbot-fleet, write the YAML profile, and sync.

## Project registry

All bots read `~/projects/registry.md` for project-specific details. Updated via grokbot-fleet. No bot profiles need re-pasting when a new project is added.

## Routines

Routine YAML files live next to profiles under the same fleet root. Synced via `sync_routines`.

| Routine | Bot | Trigger |
|---------|-----|---------|
| Daily Standup | Harvey | 9:00 AM daily |
| Dispatch | Harvey | When messaged |
| Bot Health Check | Harvey | Every 6 hours |
| Daily Verification | Tony | 7:00 AM daily (skip if Cursor Automation already owns maintain) |
| PR Proof | The Riddler | After Tony agents finish / before Gordon |
| PR Review Trigger | Gordon | PR opened (after Riddler evidence) |
| Friday Ops | Ted | Friday 10:00 AM |
| Auto-update Fleet | Dr Strange / grokbot-fleet | 6:00 AM daily |
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

Task → Harvey routes → Tony spawns Cloud Agent with `/poteto-mode` + `/loop until done` → agent verifies against the project's verify skill → Riddler proof → Gordon review → human merges.

Overnight: Harvey queues tasks, Tony runs them in isolated worktrees with decision logs.

## Already elsewhere (not Grok bots)

| Name | Where |
|------|--------|
| maintain-verify-glass | Cursor Automations |
| Bugbot | Cursor dashboard on Control-Glass |
