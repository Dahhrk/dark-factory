# Grok Bot Fleet

Bot profiles are managed through [grokbot-fleet](https://github.com/Dahhrk/grokbot-fleet). Profiles live as private YAML files on Dr Strange's computer. Do not paste profiles manually.

## Roster

| Bot | Character | Role |
|-----|-----------|------|
| Harvey Specter | Suits | Chief of Staff — intake, routing, standup |
| Tony Stark | Marvel | Engineering Lead — spawns Cloud Agents, validates |
| Walter White | Breaking Bad | Frontend Authority — design direction, purity |
| Stewie Griffin | Family Guy | Tooling & Infrastructure — CI, gates, harness |
| Gordon Ramsay | Hell's Kitchen | Code Reviewer — BUGBOT.md, every PR |
| Ted | Ted (2012) | Friday Ops — encode-lessons, prune, bug farmer |
| Dr Strange | Marvel | Bot Factory & Fleet Operator — creates bots, registry, MCP |

## How to update bots

1. Edit YAML in `~/grokbot-fleet/profiles/`
2. Tell Dr Strange: "sync profiles"
3. Done

## How to add a new bot

Tell Dr Strange: "I need a bot for X". He asks 2-3 questions, builds it with CreateAgent, writes the YAML, and syncs.

## Project registry

All bots read `~/projects/registry.md` for project-specific details. Dr Strange maintains it. No bot profiles need re-pasting when a new project is added.

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
| Auto-update Fleet | Dr Strange | 6:00 AM daily |
| Weekly Profile Backup | Dr Strange | Sunday 3:00 AM |

## Guardrails

grokbot-fleet enforces at the MCP level:
- No push to main/master
- No secrets in prompts
- No destructive production actions
- Fork before upstream

## Already elsewhere (not Grok bots)

| Name | Where |
|------|--------|
| maintain-verify-glass | Cursor Automations |
| Bugbot | Cursor dashboard on Control-Glass |
