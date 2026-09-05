# Agents — dark-factory

You are working in the kitchen repo. Product code lives elsewhere unless the user says otherwise.

1. Non-trivial work starts with `/poteto-mode` or `subagent_type: "poteto-agent"`. Do not invent a skill shopping list.
2. Done means a checkable artifact. Builds and self-reports are not evidence.
3. One verifiable unit per commit. Isolate writers (worktree locally, or a cloud agent). Prefer Cloud Agents for scale — not a 20-worktree farm.
4. Product repos need a **control CLI** (`/create-verification-skill`), not markdown-only verify. Maintain it daily.
5. Intake goes in `intake/QUEUE.md`. Do not silently start Autopilot on the whole queue.
6. Overnight runs append to `audit/decisions.tsv`. Columns: time, phase, decision, reason, evidence, result.
7. Repeated review comments become lint/CI/skills, not more prose.
8. Trivial edits do not get the full factory. Bots coordinate; cloud agents do the work.
9. **Storage:** public kitchen vs private products — [docs/storage-layout.md](docs/storage-layout.md). Never put real Feature Maps or secrets in this repo. New apps: `scripts/new-product.ps1`.

This kitchen is inspired by public pstack / agent-factory materials; it is not affiliated with third-party private factories.
