# Operating manual

Inspired by public pstack / Cursor agent-factory talks. PR counts are speaker claims.

**Essays (read in order):** [deepcoding](deepcoding.md) â†’ [Coding is Dead](coding-is-dead.md) â†’ [How I Use Cursor](how-i-use-cursor.md) â†’ [Loops You Can Trust](loops-you-can-trust.md) â†’ [organic architecture](organic-architecture.md) â†’ [workshop](workshop-grok-bot.md) â†’ [feature maps](feature-maps.md) â†’ [four loops](four-loops.md) â†’ [pstack guide Pt. 1](pstack-guide-pt1.md) â†’ [thousand gardens](thousand-gardens.md) â†’ [three virtues](three-virtues.md) â†’ [new-to-pstack](new-to-pstack.md).

**Full OS distill (after essays):** [system-map](system-map.md) Â· [evidence-standard](evidence-standard.md) Â· [nine-layers](nine-layers.md) Â· [storage-layout](storage-layout.md) Â· [timeline](timeline.md) â†’ [prompting-model](prompting-model.md) â†’ [global-vs-private](global-vs-private.md) â†’ [pstack-inventory](pstack-inventory.md) â†’ [principles](principles.md) â†’ [orchestration](orchestration.md) â†’ [pr-workflow](pr-workflow.md) â†’ [evals](evals.md) â†’ [atlas-control](atlas-control.md) Â· [feature-maps](feature-maps.md) â†’ [quality-ladder](quality-ladder.md) Â· [SELF-IMPROVE](SELF-IMPROVE.md) Â· [why-throughput](why-throughput.md) â†’ [make-bot-ui](make-bot-ui.md) â†’ [automate-me](automate-me.md) â†’ [spend-and-cloud](spend-and-cloud.md) â†’ [visual-parity](visual-parity.md) Â· [design-notes](design-notes.md) Â· [adjacent-taste](adjacent-taste.md) â†’ [dune-method](dune-method.md) Â· [benny-line](benny-line.md) Â· [outer-loop](outer-loop.md) â†’ **install:** [setup-everything](setup-everything.md) Â· [SETUP-STATUS](SETUP-STATUS.md) Â· [STILL-YOU](STILL-YOU.md) Â· [match-ceiling](match-ceiling.md) Â· [source-register](source-register.md).

## The four loops

Named in the [19 Aug post](four-loops.md). The rest of this manual is how to run them without starting at Autopilot.

1. **Outer loop (you + Grok Bot).** Routines farm Slack, X, GitHub, ideas into `intake/QUEUE.md`. You choose the next target.
2. **Inner loop (pstack).** `/poteto-mode` picks a playbook, copies steps into the todo list, calls skills as needed, demands runtime evidence.
3. **Overnight loop.** `/loop` until a predicate. Decision log in `audit/decisions.tsv`.
4. **Cloud runtime.** Cursor Cloud Agents and/or Grok Bot's cloud computer. Laptop can be closed.

Plugins: `/add-plugin pstack` and `/add-plugin cursor-team-kit` (for `/deslop`, `control-ui`, `control-cli`). Then `/setup-pstack` ([pick your models](https://github.com/cursor/plugins/blob/main/pstack/docs/guide/01-setup.md#pick-your-models)). Newcomer sequence: [new-to-pstack.md](new-to-pstack.md). Public GitHub sources: [github-sources.md](github-sources.md).

## Daily rhythm

| When | You do | Command |
|------|--------|---------|
| Morning | Audit decisions, not every line | `/show-me-your-work catch me up on last night` |
| Intake | Read `intake/QUEUE.md`, promote one `ready` row | Edit the queue. Do not start coding yet. |
| Point | One goal, one done-means. Local: worktree. Scale: spawn a cloud agent | `/poteto-mode â€¦` (Opt+Enter pins Custom Mode) |
| Maintain | Keep the product verify skill honest | `/maintain-verification-skill` (daily) |
| Expensive design | Settle shape first | `/architect with checkpoint` then `/interrogate` |
| Independent chores | One owner per PR, fresh verifier | `/poteto-mode full autopilot on this queue` |
| Coupled work | Verified stack, you land it | `/poteto-mode â€¦ stack them, don't ship` |
| Leave | Overnight contract | See README |

## Playbook cheat sheet

| If | Playbook `/poteto-mode` will pick |
|----|-----------------------------------|
| How / why / are we sure | Investigation |
| Defect | Bug fix (repro first) |
| New behavior | Feature |
| Structure only | Refactoring |
| Measured slowness | Perf / hillclimb |
| Drive a PR green | Babysit (does not merge) |
| Land a green stack | Shipping |
| One long task | Autonomous run |
| Independent PR queue | Autopilot-full |
| Coupled stack | Autopilot-stack |
| Multi-day program | Orchestrate |

Steer mid-run with principle names ([principles.md](principles.md)): `prove it works`, `subtract before you add`, `laziness protocol` (shrink the diff), `separate before serializing shared state`, `encode lessons in structure`. Attitude layer ([three-virtues.md](three-virtues.md)): `how can a bot do this instead of me?` (Wall-laziness), ship a flag instead of a meeting (impatience), own the outcome you did not type (hubris).

## Sequence (do not skip)

Full checklist with Done means: [setup-everything.md](setup-everything.md).

1. Account: cloud agents + spend cap + Bugbot ([match-ceiling.md](match-ceiling.md)).
2. `/add-plugin pstack` + `cursor-team-kit` + `/setup-pstack` â†’ new chat. Inventory: [pstack-inventory.md](pstack-inventory.md) Â· [public-inventory.md](public-inventory.md). Spend/Bugbot: [spend-and-cloud.md](spend-and-cloud.md).
3. One product repo: `/create-verification-skill` â†’ a **CLI** (`control-<app>`), not just markdown, plus a Feature Map (four H2s + driving conventions). See [feature-maps.md](feature-maps.md) and Pt. 1.
4. Daily `/maintain-verification-skill`. Treat it like oncall infra. Skill changes: [evals.md](evals.md).
5. Dune contract on that repo: conventional path is cheaper than a shortcut; forbidden imports fail CI; one writer per durable value; new work is isolated files; exceptions are architecture PRs. See [dune-method.md](dune-method.md). Optional: [adjacent-taste.md](adjacent-taste.md).
6. Pin `/poteto-mode` as a Custom Mode. Bots coordinate; **cloud agents** do the work. PR ops: [pr-workflow.md](pr-workflow.md).
7. Cloud environment snapshot that can run the app and record video. Do not scale with local worktree farms.
8. Outer-loop routines (Slack â†’ repro). Optional [make-bot-ui.md](make-bot-ui.md). Auto-fix only after verify is trustworthy.
9. One overnight with a predicate, then limited Autopilot.
10. Optional UI craft: [design-notes.md](design-notes.md) Â· [visual-parity.md](visual-parity.md). Then [automate-me.md](automate-me.md).

## Token rule

pstack can spawn several frontier agents per task. Use it when a plausible diff is not enough. Mechanical swarm work uses the fast code model in `pstack-models.mdc`.
