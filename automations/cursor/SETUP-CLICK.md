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
Working directory: kitchen root (~/Projects/dark-factory).
Done means:
1) Run `node scripts/close-loop.mjs status`. Those REPEAT rows are the queue.
2) For each REPEAT: encode it as lint, CI, hook, or Feature Map — not more prose. Then `node scripts/close-loop.mjs encode --workspace <slug> --smell <slug> --evidence <what landed>`.
3) Append a row to audit/decisions.tsv only when a gate lands (ts phase decision why evidence result).
4) If status is empty: write "clean week" and stop.
Keep: do not Autopilot fleet; do not merge; do not invent smells.
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
