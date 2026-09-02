# Grok Bot — Slack bug farmer (paste into routine)

**When:** New message in bug/feedback channel with screenshot, video, or words `repro` / `broken` / `regression`.

**Do:**
1. Freeze source link + quote + attachments.
2. Classify `bug` vs `unclear`. Do not public-reply.
3. Append one `inbox` row to kitchen `intake/QUEUE.md` (or Linear if configured).
4. If credentials missing → fail closed; report failure.

**Never:** Edit product code from this routine. Spawn cloud agent only after human promotes row and verify exists.

See kitchen `docs/outer-loop.md`.
