# The Complete Guide to pstack, Pt. 1

Source: [x.com/poteto/status/2094457600259842065](https://x.com/poteto/status/2094457600259842065) → [X article](https://x.com/i/article/2094151284949688320) · [grokbot.sh mirror](https://www.grokbot.sh/blog/the-complete-guide-to-pstack-pt-1) (31 Aug / 1 Sep 2026). Speaker claims, not an audited ledger. Labels: [evidence-standard.md](evidence-standard.md). Control twin: [atlas-control.md](atlas-control.md).

Related: [deepcoding](deepcoding.md) (Jan 22 — frontload) → [Coding is Dead](coding-is-dead.md) (Jan 23 — factory must grow) → [How I Use Cursor](how-i-use-cursor.md) (May) → [Loops You Can Trust](https://x.com/poteto/status/2069824386283319343) (Grove / breakfast-factory origin of control-glass) → [workshop](workshop-grok-bot.md) (12 Aug live) → [feature maps](feature-maps.md) (files she scrolled). Example skill: [poteto/verification-skill-example](https://github.com/poteto/verification-skill-example). Newcomer commands: [new-to-pstack.md](new-to-pstack.md). Her other public repos: [github-poteto.md](github-poteto.md).

## What she added that earlier posts did not

- Throughput claim is now **2,000 PRs/month** to production, with quality held while Grok Bot lands hundreds of PRs a day from engineers and non-engineers.
- Her job title for herself: **gardener / maintainer**. Refactor foundations while the building is occupied. The public metaphor: [thousand-gardens.md](thousand-gardens.md). The invest order: [organic-architecture.md](organic-architecture.md) — refactor and a mean compiler beat `AGENTS.md`.
- Thesis of Part 1: **verification is all you need.** A good verification skill is critical infrastructure. Done well she claims **100–1000x** team output, including non-engineers.
- **Build the Lever** means a **CLI**, not more markdown. Agents run `control-<app>` instead of writing throwaway click scripts.
- **Do not scale with local worktrees.** They eat disk; ~10 agents is the local ceiling. Parallelism is **Cursor Cloud Agents**. She says a later post will cover hundreds of cloud subagents.
- **Grok Bots are coordinators.** They spawn cloud agents so the bot's context and computer stay free. Cursor gets the full model panel.
- **Dr Eggbot** ships with pstack. It creates engineer bots that run `/create-verification-skill` and a daily `/maintain-verification-skill` routine.
- Pin `/poteto-mode` as a **Custom Mode** (Opt+Enter on autocomplete) so every turn reminds the agent.
- Treat the verify skill like **oncall infra**. Maintain at least daily.

## Part 1 — Verification is all you need

Verification = the agent can close its own loop. You are no longer the human conveyor belt (screenshot → paste error → wait).

```text
/add-plugin pstack
/create-verification-skill
```

Optional: add [Dr Eggbot](https://x.ai/bot/93gOz3op1UQdBdbekQFLK), ask it to create an engineer bot that owns verify + daily maintain.

`/create-verification-skill` is a meta-skill distilled from Cursor + Grok Bot. It writes a project-local `/control-<app>` skill, a CLI, and a Feature Map.

### Choose a stack agents can see

She would unironically **change tech stacks** to get a rich runtime: CDP for Electron/web, iOS simulator, or a sidecar (lldb, custom package). The harder the app is to drive, the less productive agents are.

### Make it reproducible — the CLI

Principle: [Build the Lever](https://github.com/cursor/plugins/blob/main/pstack/skills/principle-build-the-lever/SKILL.md). Markdown is not enough.

Hypothetical Electron CLI (`control-atlas.mjs`):

```shell
node .cursor/skills/verify-atlas/control-atlas.mjs doctor
node .cursor/skills/verify-atlas/control-atlas.mjs new-session
node .cursor/skills/verify-atlas/control-atlas.mjs send "list open tasks"
node .cursor/skills/verify-atlas/control-atlas.mjs press "Meta+KeyN"
node .cursor/skills/verify-atlas/control-atlas.mjs snapshot
node .cursor/skills/verify-atlas/control-atlas.mjs screenshot /tmp/proof.png
node .cursor/skills/verify-atlas/control-atlas.mjs wait-settle
node .cursor/skills/verify-atlas/control-atlas.mjs feature-flag rooms_v2 on
```

Command families she lists:

| Family | Examples |
|--------|----------|
| Inspection | `info`, `snapshot`, `screenshot`, `components` |
| Navigation | `home`, `new-session`, `select-project`, `select-runtime`, `scroll` |
| Interaction | `send`, `click`, `click-xy`, `aria-click`, `type`, `press`, `eval`, `upload-image`, `add-context`, `feature-flag` |
| Performance | `trace`, `profile`, `record`, `perf-metrics`, `wait-settle` |
| Streaming | `console`, `network-log`, `network-summary` |
| Health | `doctor`, `cleanup`, `watch --restart` |

Also invest in: seed a dev DB, test users / staging auth, one-command env bring-up.

Agent-friendly CLI properties:

- Composable API (Ousterhout deep modules)
- `--dry-run` on anything destructive
- Subcommands, not one giant flag set
- Errors that say what to do instead
- Rich `--help`
- Machine-readable output (JSON)

Get the CLI correct before anything fancier.

### Parallelism: cloud, not worktrees

Worktrees isolate writers on one laptop. She used them early for control-glass (shared ports/userdata collided). For scale she now says: **don't**. Use [Cloud Agents](https://cursor.com/docs/cloud-agent) with a snapshotted environment that can install deps, run the app, and record video. First build is slow; later runs start from the snapshot.

Local worktrees stay useful for one-laptop isolation. They are not the 1000-PR factory.

### Feature maps = materialized memory

`/create-verification-skill` writes `references/features/README.md` plus one file per area. Four H2s per file:

1. Sub-features
2. How to get to it (user POV)
3. Driving it with `control-<app>`
4. Gotchas

The codebase is the real memory. The map is the compact, token-cheap projection. Everyone who contributes inherits it.

Run `/maintain-verification-skill` **at least daily**. Agents will also patch the map as they work; maintain catches drift.

Canonical public shape: [verification-skill-example](https://github.com/poteto/verification-skill-example) (~30 feature files, Atlas / Harbor Labs, fictional). The live Glass files she scrolled in the workshop, including Driving conventions and `wait-settle` ≠ turn-done: [feature-maps.md](feature-maps.md).

## How she types it

Pin `/poteto-mode` (Opt+Enter → Custom Mode). In Grok Bot, install [pstack plugin](https://x.ai/bot/plugin/9717366) then `/poteto-mode`.

**Feature**

```text
/poteto-mode build. use /control-app to verify your changes and show me a video and screenshots as proof
```

Grok Bot variant — bot supervises, cloud agent works:

```text
spawn a cloud agent to use /poteto-mode to build. use /control-app to verify your changes and show me a video and screenshots as proof
```

**Perf**

```text
spawn a cloud agent to use /poteto-mode to improve the initial loading time of our app.
first use /control-app to take a trace of the status quo, and identify opportunities.
then do a targeted fix and use /control-app + a /swarm to confirm the win
```

`/swarm` + the verify CLI = sample-size perf checks and fuzz/regression coverage.

**User reports**

Put the verify skill inside Grok Bot routines or [Cursor Automations](https://cursor.com/docs/cloud-agent/automations). Slack feedback → cloud agent tries to repro via Feature Map. Auto-fix only after the skill is good enough.

## Invest like infra

Keep the CLI sharp. Daily maintain. She says you may want an **oncall rotation** on the verification skill. This is the foundation the rest of the pstack guide will compose with. Part 2 not published yet in this capture.
