# pstack full inventory

Source: [pstack README](https://github.com/cursor/plugins/tree/main/pstack) (counts drift — plugin tree wins). Install: `/add-plugin pstack` + `/add-plugin cursor-team-kit`.

Companion: [public-inventory.md](public-inventory.md) (short), [new-to-pstack.md](new-to-pstack.md), [pr-workflow.md](pr-workflow.md).

## Entry

1. `/setup-pstack` → `~/.cursor/rules/pstack-models.mdc`  
2. `/poteto-mode` for any non-trivial task (sticky; say `new task` to change subject)  

Default model split (overridable): judgment/vague → Fable; mechanical → Grok; panels mix Fable/Sol/Grok/Opus.

## 22 playbooks (`/poteto-mode` picks)

| Playbook | For |
|----------|-----|
| investigation | Read-only how/why/are we sure |
| bug fix | Repro → root cause → runtime evidence |
| perf | Measured slowness vs baseline |
| hillclimb | Sustained metric climb; one commit per win |
| runtime forensics | Live leak / idle-cpu / glitch |
| trace forensics | Captured profile / spindump / heap |
| feature | New behavior from a named data shape |
| refactoring | Behavior-preserving structure |
| prototype | Throwaway sketch / empirical fork |
| visual parity | Pixel-exact match ([visual-parity.md](visual-parity.md)) |
| authoring a skill | Writing SKILL.md |
| eval | Blinded skill/prompt experiment ([evals.md](evals.md)) |
| babysit | PR/stack to merge-ready; never merges ([pr-workflow.md](pr-workflow.md)) |
| shipping | Foreign verify then land bottom-up |
| autonomous run | Long task without stopping |
| orchestrate | Multi-day coordinator; many stacked PRs |
| autopilot-full | Independent PRs; one owner each; root swarm-verify |
| autopilot-stack | Linear stack for operator to land |
| session pickup | Resume in-flight work |
| pause safely | Suspend cleanly |
| multi-phase plan | Phases / stacked PRs |
| worktree cleanup | Prune merged/abandoned trees |

## Skills you type directly

| Skill | When |
|-------|------|
| `/poteto-mode` | Default entry |
| `/how` | Walkthrough of a subsystem |
| `/why` | Parallel evidence across MCPs |
| `/teach` | how + why → plain explanation |
| `/recall` | Rebuild context from chat + repo |
| `/blast-radius` | What else breaks; prove with running code |
| `/architect` | Types/module shape before crossing boundaries |
| `/arena` | N parallel attempts; graft best |
| `/swarm` | N workers on slices; one report |
| `/interrogate` | Multi-model adversarial review |
| `/automate-me` | Your `-mode` ([automate-me.md](automate-me.md)) |
| `/make-bot-ui` | Webhook UI ([make-bot-ui.md](make-bot-ui.md)) |
| `/setup-pstack` | Model map |
| `/reflect` | Capture recipe as skill edit |
| `/tdd` | Failing test first |
| `/no-comments` | Strip comments; Comment Sicko |
| `/typescript-best-practices` | TS discipline |
| `/figure-it-out` | Invent a playbook when none fits |
| `/show-me-your-work` | Decision TSV |
| `/create-verification-skill` | Project verify + Feature Map |
| `/maintain-verification-skill` | Daily map hygiene |
| `/unslop` | AI writing tells |
| `/bro` | Restate last message plain |
| `/technical-writing` | Docs/PR/commit style |

## 21 principles (indexed at poteto-mode start)

**Full one-liners:** [principles.md](principles.md).

**Core:** laziness-protocol, foundational-thinking, redesign-from-first-principles, subtract-before-you-add, minimize-reader-load, outcome-oriented-execution, experience-first, exhaust-the-design-space, build-the-lever  

**Architecture:** model-the-domain, boundary-discipline, type-system-discipline, make-operations-idempotent, migrate-callers-then-delete-legacy-apis, separate-before-serializing-shared-state  

**Verification:** prove-it-works, fix-root-causes, sequence-verifiable-units  

**Delegation:** guard-the-context-window, never-block-on-the-human  

**Meta:** encode-lessons-in-structure  

Steer mid-run by **name**: `prove it works`, `laziness protocol`, `encode lessons in structure`, …

## Subagents

| Agent | Role |
|-------|------|
| `poteto-agent` | Full poteto style (must read poteto-mode first; `generalPurpose` drifts) |
| Comment Sicko | Read-only comment deletion reviewer (`/no-comments`) |

## Not in pstack (install team-kit)

`/deslop`, `control-ui`, `control-cli`. Built-in `/babysit` superseded by pstack babysit playbook inside poteto-mode. Built-in `/create-skill` used by automate-me.

## Automations

[Benny](benny-line.md) — dormant pack; `FOR_AGENTS.md`.

## Why no planning skills?

She doesn’t believe in planning as default: **best spec is code**. Cursor Plan mode works with pstack if you want it; prototype playbook preferred.

## Related

- [operating-manual.md](operating-manual.md) cheat sheet  
- [evals.md](evals.md) · [pr-workflow.md](pr-workflow.md) · [automate-me.md](automate-me.md) · [make-bot-ui.md](make-bot-ui.md)  
