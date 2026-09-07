# Grok Bot Fleet

Bot profiles are managed through [grokbot-fleet](https://github.com/Dahhrk/grokbot-fleet). Profiles live as private YAML files synced via grokbot-fleet MCP. Do not paste profiles manually.

## Roster

| Bot | Character | Role |
|-----|-----------|------|
| Harvey Specter | Suits | Chief of Staff — intake, routing, standup |
| Tony Stark | Marvel | Engineering Lead — spawns Cloud Agents, validates |
| Walter White | Breaking Bad | Frontend Authority — design direction, purity |
| Stewie Griffin | Family Guy | Tooling & Infrastructure — CI, gates, harness |
| The Riddler | Batman | QA & Verification — proof before Gordon |
| Gordon Ramsay | Hell's Kitchen | Code Reviewer — BUGBOT.md, every PR |
| Ted | Ted (2012) | Friday Ops — encode-lessons from `audit/smells.tsv`, prune, bug farmer |
| Dr Strange | Marvel | Bot Factory & Fleet Operator — creates bots, registry, MCP |

## How to update bots

1. Edit YAML in `~/Documents/dev-projects/grokbot-fleet/profiles/`
2. Run `sync_profiles` via grokbot-fleet MCP (or tell Dr Strange: "sync profiles")
3. Done

## How to add a new bot

Use `CreateAgent` via grokbot-fleet (or ask Dr Strange: "I need a bot for X"). Write the YAML profile and sync.

## Project registry

All bots read `~/projects/registry.md` for project-specific details. Updated via grokbot-fleet / Dr Strange. No bot profiles need re-pasting when a new project is added.

## Two loops

| Loop | Tool | What it does |
|------|------|-------------|
| **Outer** | Grok Bot (Harvey + routines) | Farms context — GitHub issues, bug reports, social signals. Feeds *what to work on next* |
| **Inner** | Cursor + pstack | Rigorous engineering — `/poteto-mode` routes to playbooks, agents verify and ship |

Harvey owns the outer loop. Tony owns the inner loop. They don't cross.

**Fleet board:** Working → Watching (CLEAN ladder) → Ready for review ≠ merge. Recipe: [docs/fleet-board.md](../../docs/fleet-board.md). Do **not** import marketplace Engineer Bot as CoS (Tony+Harvey fused) — keep Riddler → Gordon → human land.

**Triage shape:** subscribe → keyword → agent with `/brooklyn-mode`/`/poteto-mode` + `control-*` → still broken on main? Encode: [docs/triage-subscribe.md](../../docs/triage-subscribe.md). Fail closed without Slack. Do not enable Autopilot from this alone.

### Multi-model tools

- `/interrogate` — adversarial multi-model review (Tony pre-screens, Gordon final-reviews)
- `/arena` — N parallel attempts for design decisions (Tony uses for ambiguous tasks)
- `/automate-me` — mines transcripts, creates custom `-mode` skill

## Routines

Routine YAML files live in `~/Documents/dev-projects/grokbot-fleet/routines/`. Synced via `sync_routines`.

| Routine | Bot | Trigger | Purpose |
|---------|-----|---------|---------|
| Context Farm GitHub | Harvey | 8:00 AM daily | Outer loop — farm GitHub signals |
| Context Farm Social | Ted | 8:30 AM daily | Outer loop — scan web + X for signals |
| Needs-you sweep | Harvey | Morning (+ optional mid-afternoon) | Attention list — human blockers only ([outer-loop.md](../../docs/outer-loop.md)) |
| Daily Standup / morning briefing | Harvey | 9:00 AM daily | Team status + overnight digest |
| Dispatch | Harvey | When messaged | Route tasks to specialists |
| Bot Health Check | Harvey | Every 6 hours | Fleet health monitoring |
| Daily Verification | Tony | 7:00 AM daily | Run all project gates |
| Evening PR shepherd | Tony / Harvey | Evening local | Draft PR CI + evidence check; spawn Cloud Agents; never merge |
| PR Proof | The Riddler | After Tony / before Gordon | QA proof loop before Gordon reviews |
| PR Review Trigger | Gordon | PR opened | Auto-review on new PRs |
| Friday Ops | Ted | Friday 10:00 AM | Encode-lessons from `audit/smells.tsv`, prune, bug farm |
| Auto-update Fleet | Dr Strange / grokbot-fleet | 6:00 AM daily | Pull latest fleet server code |
| Weekly Profile Backup | Dr Strange / grokbot-fleet | Sunday 3:00 AM | Snapshot bot profiles |

Draft shapes for needs-you / evening shepherd / morning briefing: [docs/outer-loop.md](../../docs/outer-loop.md). Wire YAML in grokbot-fleet only when you want them live.

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

Task → Harvey routes → Tony spawns Cloud Agent with `/poteto-mode` + `/loop until done` → Riddler proof → Gordon → human merges.

Overnight: Harvey queues tasks, Tony runs them in isolated worktrees with decision logs.

## Already elsewhere (not Grok bots)

| Name | Where |
|------|--------|
| maintain-verify-glass | Cursor Automations |
| Bugbot | Cursor dashboard on Control-Glass |
