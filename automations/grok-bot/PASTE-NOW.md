# Grok Bot — paste these now

Full bot list + charters: **[BOTS.md](./BOTS.md)** (create Chief of Staff + Engineer on Get started).

Kitchen queue: `~/Projects/dark-factory/intake/QUEUE.md`  
Private product: `~/Projects/Control-Glass`

## 1. Daily maintain-verify (Engineer bot)

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

**Prompt:** use `automations/grok-bot/weekly-prune.md` (or Cursor Automation).

## Coordinator rule

Bots **coordinate**. Spawn Cloud Agents for code/verify. Do not burn Grok Bot context on long coding sessions.
