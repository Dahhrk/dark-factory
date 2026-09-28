# Agents — dark-factory

You are working in the kitchen repo. Product code lives elsewhere unless the user says otherwise.

1. Default: every non-trivial ask is a one-shot task. Vague → `/poteto-prompt` → `/poteto-mode`. Structured → `/poteto-mode` (or `subagent_type: "poteto-agent"`) with Done means + Keep. Until-X on Cursor → autonomous-run + built-in `/loop`. Agents start here automatically; do not wait for `/one-shot-task`. Do not invent a skill shopping list. See [docs/one-shot-task.md](docs/one-shot-task.md).
2. Prose: every docs, PR, commit, chat report, and landing line runs through [orwell-prose](docs/orwell-prose.md) (rules 1-12) before delivery. Positive writing rules, not a ban list. `unslop` and no-em-dash stay secondary. Project `AGENTS.md` / `CLAUDE.md` may override voice. Agents apply automatically; `/orwell-prose` names the contract.
3. Done means a checkable artifact. Builds and self-reports are not evidence.
4. One verifiable unit per commit. Isolate writers (worktree locally, or a cloud agent). Prefer Cloud Agents for scale — not a 20-worktree farm.
5. Product repos need a **control CLI** (`/create-verification-skill`), not markdown-only verify. Maintain it daily.
6. Intake goes in `intake/QUEUE.md`. Do not silently start Autopilot on the whole queue.
7. Overnight runs append to `audit/decisions.tsv`. Columns: time, phase, decision, reason, evidence, result.
8. Repeated review comments become lint/CI/skills, not more prose.
9. Trivial edits do not get the full factory. Bots coordinate; cloud agents do the work. Optional heavy QC: [docs/sureforge.md](docs/sureforge.md) — invoke explicitly; not always-on.
10. **Storage:** public kitchen vs private products — [docs/storage-layout.md](docs/storage-layout.md). Never put real Feature Maps or secrets in this repo. New apps: `scripts/new-product.ps1`.

This kitchen is inspired by public pstack / agent-factory materials; it is not affiliated with third-party private factories.
