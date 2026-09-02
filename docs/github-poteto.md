# poteto on GitHub

Account: [github.com/poteto](https://github.com/poteto) — lauren, `@xai-org` + React compiler, blog [no.lol](https://no.lol). 86 public repos. Most of the star count is old Ember/Elixir/talk notes. The **factory-relevant** set is small. pstack itself lives in [cursor/plugins/pstack](https://github.com/cursor/plugins/tree/main/pstack), not under her user.

## Use these

| Repo | What it is | Kitchen use |
|------|------------|-------------|
| [poteto/verification-skill-example](https://github.com/poteto/verification-skill-example) | Fictional Atlas / Harbor Labs `verify-atlas` + ~30-file Feature Map. CLI **omitted**; command surface documented. | The shape `/create-verification-skill` should emit. Live Glass twin: [feature-maps.md](feature-maps.md). |
| [cursor/plugins pstack](https://github.com/cursor/plugins/tree/main/pstack) | Official plugin: `/poteto-mode`, playbooks, verify generators, Benny pack. | Install this. Not a fork. |
| [cursor/plugins cursor-team-kit](https://github.com/cursor/plugins/tree/main/cursor-team-kit) | `/deslop`, `control-ui`, `control-cli`. | Install next to pstack. |
| [poteto/how](https://github.com/poteto/how) | Standalone Cursor plugin for `/how` (explain + critique, parallel explorers). | Already inside pstack. Use the plugin copy; this repo is the extract. |
| [poteto/brainmaxxing](https://github.com/poteto/brainmaxxing) | Claude Code markdown/Obsidian vault. `/reflect` `/ruminate` `/meditate` `/plan` `/review`. 16 starter principles. | CC-era memory. pstack’s `/reflect` + Feature Map + `audit/decisions.tsv` are the Cursor descendants. Do not install this into the kitchen unless you are still on CC. |
| [poteto/noodle](https://github.com/poteto/noodle) | Go “skill-based agent orchestration.” Docs: [noodle-run.github.io/noodle](https://noodle-run.github.io/noodle/). Also ships design skills. | Orchestrator = **historical** ([How I Use Cursor](how-i-use-cursor.md)). Do not rebuild it. Cherry-pick only: `frontend-design`, `make-interfaces-feel-better`, `interaction-design` on a product UI repo — [lauren-design.md](lauren-design.md). |
| [poteto/benny-avatars](https://github.com/poteto/benny-avatars) | Five Slack icons for orchestrate: kickoff (“Lauren’s guy”), planner, subplanner, worker, verifier. | Confirms the Benny / orchestrate role split. No product code. |

## Do not treat as factory source

| Repo | Why it is here |
|------|----------------|
| [hiring-without-whiteboards](https://github.com/poteto/hiring-without-whiteboards) | 50k stars. Hiring list. Not agent OS. |
| [poteto/plugins](https://github.com/poteto/plugins) | June 2026 snapshot that *lists* pstack + team-kit + orchestrate. Canonical tree is [cursor/plugins](https://github.com/cursor/plugins). |
| [no.lol](https://github.com/poteto/no.lol) | Personal site source. |
| ember-*, elixirconf-*, rustconf-*, terraform, monkers, stylex, react forks | Career archive / forks. StyleX the **essay** is [Loops You Can Trust](loops-you-can-trust.md), not this fork. |

## What the example teaches that Pt. 1 summarizes

Atlas is a stand-in for a large Electron workspace (it reads like Cursor/Grok Bot). Agents:

1. Match the change to one or more feature files.
2. `doctor` first.
3. Drive every reachable entry point in that file (success / cancel / error / empty / persistence).
4. Capture evidence (screenshot, DOM, clipboard, network, reload).
5. Broad sweep: walk `features/README.md` top to bottom, finish `multi-surface-journeys.md`.

Isolation: `test -f .git` means a worktree/checkout (`.git` is a file). Those runs **must** pass `--checkout` so port and user-data-dir do not collide with the human’s main session. That is the control-glass scar from [Loops You Can Trust](loops-you-can-trust.md).

Selectors: ARIA, `data-component`, `data-action-id`. Class names are fallbacks. `wait-settle` instead of sleeps — and only for **short renderer transitions**, not a full turn ([feature-maps.md](feature-maps.md)). Do not `eval` internal handlers as the proof.

Start a real product map at **3–5** features. The example is ~30 so you can see a large-app index stay navigable. Split a file when a section needs its own preconditions.

## Noodle vs pstack (so you do not rebuild the pickaxe)

[How I Use Cursor](how-i-use-cursor.md): she paid for Claude Code, started an orchestrator on top of it, then decided “running multiple CLIs in a GUI was missing the point.” Trust is the point. Noodle (Mar 2026) is that orchestrator, public. pstack (May) is what she shipped after converting. If you find yourself wrapping more CLIs, stop and run `/create-verification-skill` on the product instead.
