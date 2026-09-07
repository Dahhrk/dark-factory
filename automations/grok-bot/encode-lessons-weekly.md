# Encode lessons — Grok Bot (Chief or Engineer)

Same job as `automations/cursor/encode-lessons-weekly.md`.

From kitchen root (`~/Projects/dark-factory`): first step is `node scripts/close-loop.mjs status`. Encode each REPEAT. Append a `audit/decisions.tsv` row only when a gate lands. Clean week if status is empty.

Schedule Friday. Prefer Chief of Staff to run the review, then spawn a Cloud Agent on Control-Glass for any lint/CI PR.
