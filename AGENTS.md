# Agents — dark-factory

You are working in the kitchen repo. Product code lives elsewhere unless the user says otherwise.

1. Default: every non-trivial ask is a one-shot task. Vague → `/poteto-prompt` → `/poteto-mode`. Structured → `/poteto-mode` (or `subagent_type: "poteto-agent"`) with Done means + Keep. Until-X on Cursor → autonomous-run + built-in `/loop`. Agents start here automatically; do not wait for `/one-shot-task`. Do not invent a skill shopping list. See [docs/one-shot-task.md](docs/one-shot-task.md).
2. Default: every prose surface is [orwell-prose](docs/orwell-prose.md) (docs, PRs, commits, chat reports, landing copy; rules 1-12). Agents apply before delivery; do not wait to be asked. `/orwell-prose` names the contract (same shape as one-shot-task). `unslop` and no-em-dash stay secondary. Project `AGENTS.md` / `CLAUDE.md` may override voice.
3. Default: every `ui:yes` / Figma ask starts from the existing design system plus one approved keyframe, expands the full flow in Figma, proves visual parity, gets a frontend look, then encodes. Fail closed without system, keyframe, or Figma access. See [docs/figma-from-system.md](docs/figma-from-system.md).
4. Default: every new product idea opens a temporary product/design/engineering debate room (plain product name), captures requirements and the decision in writing, then closes the room before encode. See [docs/product-debate.md](docs/product-debate.md).
5. Default: before any non-trivial ask, restate Goal / Constraints / Done means / Keep in plain words, then act. See [docs/outcome-repeat-back.md](docs/outcome-repeat-back.md).
6. Default: exit with a mergeable artifact (PR, brief, scorecard, verified claim). Never end with a "you should…" homework list. See [docs/results-not-homework.md](docs/results-not-homework.md).
7. Default: when an ask spans multiple workstreams, run parent + specialists with clear ownership, an ordered plate with merge holds, and parent waits on children. Verify before merge. Plain workstream names only. See [docs/fleet-orchestrate.md](docs/fleet-orchestrate.md).
8. Default: after a pass, if the same manual flow recurred twice, offer skill-authoring / learn-from-demonstration once; drop if declined. See [docs/teach-to-skill.md](docs/teach-to-skill.md).
9. Default: EXIT + on-demand reclaim. Kill orphaned local agent children (node/chromium/playwright/watchers/Electron helpers) before you stop; cap parallel local agents; prefer remote for heavy verify. See [docs/leave-machine-clean.md](docs/leave-machine-clean.md).
10. Default: falsifiable "done" claims and substance merge claims need fresh `verify-this` evidence before ship. Recap is not evidence. Builds and self-reports are not evidence.
11. One verifiable unit per commit. Isolate writers (worktree locally, or a cloud agent). Prefer Cloud Agents for scale — not a 20-worktree farm.
12. Product repos need a **control CLI** (`/create-verification-skill`), not markdown-only verify. Maintain it daily.
13. Intake goes in `intake/QUEUE.md`. Do not silently start Autopilot on the whole queue.
14. Overnight runs append to `audit/decisions.tsv`. Columns: time, phase, decision, reason, evidence, result.
15. Repeated review comments become lint/CI/skills, not more prose.
16. Trivial edits do not get the full factory. Bots coordinate; cloud agents do the work. Optional heavy QC: [docs/sureforge.md](docs/sureforge.md) — invoke explicitly; not always-on.
17. **Storage:** public kitchen vs private products — [docs/storage-layout.md](docs/storage-layout.md). Never put real Feature Maps or secrets in this repo. New apps: `scripts/new-product.ps1`.

This kitchen is inspired by public pstack / agent-factory materials; it is not affiliated with third-party private factories.
