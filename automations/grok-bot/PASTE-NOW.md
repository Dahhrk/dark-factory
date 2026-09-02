# Grok Bot — paste these now

You said Grok Bot is installed. Paste each routine into Grok Bot (one-off test first, then schedule).

Kitchen queue path for intake: `~/Projects/dark-factory/intake/QUEUE.md`  
Private product: `~/Projects/Control-Glass`

## 1. Daily maintain-verify (engineer bot)

**When:** Daily schedule (pick a quiet hour). Prefer Cloud Agent for the heavy work.

**Prompt:**

```text
Open the private product at ~/Projects/Control-Glass (or spawn a Cloud Agent on that repo).
Run /maintain-verification-skill
Done means every feature under .cursor/skills/verify-glass/features has clean, changed, or blocked; at most one correction PR; do not paper over product bugs by editing the Feature Map.
Keep: use control-glass for live passes; do not Autopilot; do not merge; draft PRs only.
If doctor fails, stop and report — do not invent evidence.
```

## 2. Slack bug farmer (optional — needs Slack connected)

**When:** New top-level message in your bug channel with screenshot/video or repro/broken/regression.

**Prompt:** use `automations/grok-bot/slack-bug-farmer.md` in dark-factory. Fail closed without Slack credentials. Do not reply in channel until you configure Benny properly.

## 3. Weekly prune

**When:** Friday afternoon.

**Prompt:** use `automations/cursor/weekly-prune.md` (can be Cursor Automation or Grok Bot).

## Coordinator rule

Bots **coordinate**. Spawn Cloud Agents for code/verify. Do not burn Grok Bot context on long coding sessions.
