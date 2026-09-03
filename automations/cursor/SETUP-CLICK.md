# Automations — click-through setup

Agent cannot save/enable on your account. Use this with the forms opened in Cursor / [cursor.com/automations](https://cursor.com/automations).

**Enable these three.** Skip Benny / Autopilot.

---

## 1. maintain-verify-glass (daily) — ENABLE

| Field | Value |
|-------|--------|
| Name | `maintain-verify-glass` |
| Repo / workspace | **`Dahhrk/Control-Glass`** (not kitchen) |
| Schedule | Daily · quiet hour (e.g. 08:00 Europe/London) |
| Enabled | **ON** |

**Prompt:**

```text
/maintain-verification-skill
Done means every feature under .cursor/skills/verify-glass/features has a clean, changed, or blocked outcome; at most one correction PR; product bugs reported not papered over in the map.
Keep: do not Autopilot; do not merge; use control-glass for live passes; Cloud Agent preferred for the heavy pass.
```

Save → Enable.

---

## 2. encode-lessons-weekly (Friday) — ENABLE

| Field | Value |
|-------|--------|
| Name | `encode-lessons-weekly` |
| Repo | Prefer **Control-Glass**; kitchen queue paths are in the prompt |
| Schedule | Weekly · Friday (e.g. 16:00 Europe/London) |
| Enabled | **ON** |

**Prompt:**

```text
You are the gardener for Control-Glass + dark-factory.
Read: recent merged PRs on Dahhrk/Control-Glass, Bugbot comments, BUGBOT.md, .cursor/dune.md, intake/QUEUE.md, audit/decisions.tsv.
Done means:
1) List smells that appeared more than once (imports, any, suppressions, missing proof, AI-template UI / nightglass, map drift, visual-parity baseline cheats).
2) For each repeat: open at most one draft PR that encodes it as lint, CI (`anti-ai-ui` / `visual-parity` / boundaries), Feature Map, skill, or BUGBOT hard preference — not more prose.
3) Append rows to ~/Projects/dark-factory/audit/decisions.tsv (ts phase decision why evidence result).
Keep: do not Autopilot fleet; do not merge; do not invent smells; if nothing repeated, write "clean week" and stop.
```

---

## 3. morning-catchup (weekdays) — ENABLE

| Field | Value |
|-------|--------|
| Name | `morning-catchup` |
| Repo | **`Dahhrk/dark-factory`** |
| Schedule | Weekdays · morning (e.g. 09:00 Europe/London) |
| Enabled | **ON** |

**Prompt:**

```text
/show-me-your-work catch me up on last night
Read audit/decisions.tsv and intake/QUEUE.md Attention.
Done means a short Attention list: what landed, what blocked, what needs a human product call.
Keep: do not start new Autopilot; do not edit product repos unless a ready queue row names them.
```

---

## 4. weekly-prune (optional)

| Field | Value |
|-------|--------|
| Name | `weekly-prune` |
| Repo | **`Dahhrk/dark-factory`** |
| Schedule | Friday afternoon |
| Enabled | Optional |

**Prompt:** see `automations/cursor/weekly-prune.md`.

---

## Do NOT create / enable

- Benny / Slack-wired Autopilot  
- Fleet Autopilot / Orchestrate  
- Duplicate Grok Engineer daily (you already paused it — Cursor maintain owns that)

## Done means

Three automations listed, **Enabled**, correct repos, next run time visible on [cursor.com/automations](https://cursor.com/automations).
