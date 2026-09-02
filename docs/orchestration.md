# Orchestration (multi-day programs)

**VERIFIED PUBLIC IMPLEMENTATION:** pstack playbook [`orchestrate`](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/playbooks/orchestrate.md).

Route here when work **outlives any single agent**: multi-day, many stacked PRs, dozens–hundreds of subagents, human checking in twice a day. One task to a predicate → Autonomous run. One ambitious bespoke run → `/figure-it-out`. Cheap work one agent finishes inside the budget is **not** a program — ceremony can lose to a plain agent.

Kitchen overnight contract (`audit/decisions.tsv`) is the **lite** cousin. Full orchestrate lives in a **product** chat with Cloud Agents.

## Roles

| Role | Placement | Job |
|------|-----------|-----|
| **Coordinator** | Local | Owns the **program**, never production code. Briefs, drains, gates, report. Landing verified units may be bookkeeping on cheap repos. |
| **Sub-coordinator** | Local, one per track | Only past one-drain capacity. Authors worker briefs; rolls up aggregates; never forwards raw child dumps. |
| **Worker / verifier** | Cloud by default | Exclusive branch/VM. Verifier on a **different model family** than worker when judgment/expensive. |

Depth: coordinator → track → worker. Completions are **queue events**, not interrupts. Every spawn/resume carries standing orders verbatim. **The brief is the product.**

## Worker brief fields

```text
GOAL         one sentence; stranger with no chat can execute
SCOPE        writable / forbidden paths; exclusive worktree or branch
CONTEXT      file/PR pointers; paste upstream reports (siblings are invisible)
ACCEPTANCE   checkable criteria, one per line
VERIFY       exact commands or control-skill path + gotchas
TIMEBOX      on expiry return partial findings and stop
FORBIDDEN    no rebase/force-push/out-of-scope fixes (+ unit bans)
REPORT       status, branch, head SHA, PRs, verdict, what ran, deviations
STANDING     preferences.md pasted verbatim (cloud + every resume)
```

Missing fields → refuse to spawn. Vague brief fails quietly — worker cannot ask you.

## Durable store (`orchestrate/<project-slug>/`)

One writer per file/row family. Prefer `orch` CLI bookkeeping; TSV/JSON stay human-readable.

| File | Job |
|------|-----|
| `preferences.md` | Standing orders (one constraint per line) — paste into every spawn |
| `overview.md` | Durable PR/issue DB (append) |
| `units.tsv` | id, track, state, branch, PR, head SHA, brief path |
| `frontier.json` | Computed merge frontier (never narrative) |
| `ledger.tsv` | Verification verdicts keyed by PR + head SHA |
| `inbox/` | Completion pointers |
| `gates.md` | Parked human questions (completion floods must not wipe them) |
| `decisions.tsv` | Trail (`/show-me-your-work`) |
| `status.md` | **Derived** from units + ledger each drain — never hand-narrated |

## Pilot before scale

One unit through: brief → worker → verification → stack → ledger → merge. Falsifies brief template, verify recipe, and unit size while cost is one agent. Near-identical cheap units: first unit *is* the pilot; fan-out starts when it lands.

## Rolling concurrency

Rolling window, not blocking batches (batches pay the slowest child every wave). Cap in-flight ≈ what one drain can process (~10). By ~**70% of wall budget**, stop spawning and land verified work — finished-but-unlanded counts as **zero**.

## Verification ledger

Verdict examples: `live-ui-verified` | `unit-test-verified` | `type-check-only` | `verifier-blocked` | `verifier-failed`.

- CI green is an **input**, not a verdict. Behavioural work needs better than `type-check-only`.
- New head SHA voids the row → re-verify after restack.
- Worker may self-report; verifier **overrides** on the same key.
- Externalize immediately (push branch, write ledger). Work that dies only on a VM was never done.

## Stack safety (condensed)

- One stacker per stack; workers never rebase / never run `gt`.
- Babysit reports conflicts to the stacker ([pr-workflow.md](pr-workflow.md)).
- Landing is continuous from the first verified unit.
- Note: opening-a-PR playbook says **never require** Graphite for forge; orchestrate’s frontier tooling may use `gt` where the stacker has it — do not make `gt` a kitchen requirement ([spend-and-cloud.md](spend-and-cloud.md)).

## Liveness

Never resume an agent just to “check.” Probe ledger, `units.tsv`, `gh`, pushed branches, cloud dashboard. Transcript mtime ≠ liveness. Zombies that return late reconcile against current frontier before accept.

## Related

- [nine-layers.md](nine-layers.md) · [pr-workflow.md](pr-workflow.md) · [prompting-model.md](prompting-model.md)  
- Kitchen lite: overnight rows in `audit/decisions.tsv`  
