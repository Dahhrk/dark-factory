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
| Dr Strange | Marvel | Bot Factory & Fleet Operator — creates bots, registry, MCP |

## How to update bots

1. Edit YAML in `~/grokbot-fleet/profiles/`
2. Run `sync_profiles` via grokbot-fleet MCP (or tell Dr Strange: "sync profiles")
3. Done

## How to add a new bot

Use `CreateAgent` via grokbot-fleet (or ask Dr Strange: "I need a bot for X"). Write the YAML profile and sync.

## Project registry

All bots read `~/projects/registry.md` for project-specific details. Updated via grokbot-fleet / Dr Strange. No bot profiles need re-pasting when a new project is added.

## Two loops (Lauren pattern)

| Loop | Tool | What it does |
|------|------|-------------|
| **Outer** | Grok Bot (Harvey + routines) | Farms context — GitHub issues, bug reports, social signals. Feeds *what to work on next* |
| **Inner** | Cursor + pstack | Rigorous engineering — `/poteto-mode` routes to playbooks, agents verify and ship |

Harvey owns the outer loop. Tony owns the inner loop. They don't cross.

### Full Autopilot

Task → Harvey routes → Tony spawns Cloud Agent with `/poteto-mode` + `/loop until done` → agent verifies against project's verify skill → PR to Gordon → human merges.

Overnight: Harvey queues tasks, Tony runs them in isolated worktrees with decision logs.

### Multi-model tools

- `/interrogate` — adversarial multi-model review (Tony pre-screens, Gordon final-reviews)
- `/arena` — N parallel attempts for design decisions (Tony uses for ambiguous tasks)
- `/automate-me` — mines transcripts, creates custom `-mode` skill

## Routines

Routine YAML files live in `~/grokbot-fleet/routines/`. Synced via `sync_routines`.

| Routine | Bot | Trigger | Purpose |
|---------|-----|---------|---------|
| Context Farm GitHub | Harvey | 8:00 AM daily | Outer loop — farm GitHub signals |
| Context Farm Social | Ted | 8:30 AM daily | Outer loop — scan web + X for signals |
| Daily Standup | Harvey | 9:00 AM daily | Team status digest |
| Dispatch | Harvey | When messaged | Route tasks to specialists |
| Bot Health Check | Harvey | Every 6 hours | Fleet health monitoring |
| Daily Verification | Tony | 7:00 AM daily | Run all project gates |
| PR Review Trigger | Gordon | PR opened | Auto-review on new PRs |
| Friday Ops | Ted | Friday 10:00 AM | Encode-lessons, prune, bug farm |
| Auto-update Fleet | Dr Strange / grokbot-fleet | 6:00 AM daily | Pull latest fleet server code |
| Weekly Profile Backup | Dr Strange / grokbot-fleet | Sunday 3:00 AM | Snapshot bot profiles |

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
