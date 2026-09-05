# Benny — the self-starting maintenance line

From [Loops You Can Trust](loops-you-can-trust.md). Official pack: [pstack/automations/benny](https://github.com/cursor/plugins/tree/main/pstack/automations/benny).

This kitchen does **not** run Benny. Benny lives in a **product** repo that already has a control CLI + Feature Map. Point Cursor at `FOR_AGENTS.md` only after that exists. Draft PRs only. Do not merge. Do not enable automations until you explicitly ask.

## The two automations

1. **Triage** — new top-level Slack report. Freeze source thread coordinates. Read root, replies, images, video, logs, links. Read-only workers for narrow analysis. Trace ownership/history. Separate facts from hypotheses. Classify bug / perf / feature / feedback / reroute. Deduplicate tracker. Ticket only when defect is clear and new. Exactly one concise verdict in the original thread (`[benny:bug]`, `[benny:performance]`, or `[benny:other]`). Never a root-channel post. Fail closed on uncertain credentials, config, source identity, or compensation. **Only the coordinator** writes the external channel — workers do not get write credentials.
2. **Reproduce and fix** — same trigger, then **wait** for the trusted triage marker. Stop if a human already owns the fix. If an existing PR may fix it, verify that PR instead of competing. Require complete control adapter + Feature Map. Drive real UI; reproduce discriminating symptom **twice**; recording + screenshot; separate media reviewer confirms evidence. Fix only after root-cause evidence; same path twice on patched build; nearby blast-radius checks. **Draft PR only** after before/after proof. Never merge or deploy. Clean temporary app state/processes.

Every stage can stop the line. Those stops are successes. Pattern applies to Slack, Discord, X, email, or issue forms — inputs are untrusted.

## Live Slack frame (workshop)

Thread in `#glass-oncall-assistant`. Benny (app, golden-retriever avatar) at 10:53, linking `#issues-glass thread` and `[view cloud agent]`. Overlay on the recording: **runs Cursor in** (the cloud).

Status line:

> 🐸 Reproduced but already fixed on main

Evidence, two bullets:

- reproduced on the prior commit, gone on the fix
- focusing another conversation leaves Apps closed

Quoted report (tyson, `#issues-glass`, 10:34) plus a 0:13 screen recording:

> Changing panel focus keeps opening the apps sidebar (blank) even when I explicitly close it. Of note that it will not open the sidebar if you focus the text input.

This is the essay example made visible. Benny **did not open a competing PR**. It hit the broken state on the parent commit, confirmed gone on the fix, and stopped. An hour of sitting with an agent, gone. She frames it as a **team** level-up.

Kitchen: fail closed if the control adapter or Feature Map is missing. Draft PRs only when before/after proof says a change is still needed. “Already on main” is a passing station, not a miss.

## Setup contract (from FOR_AGENTS.md)

1. Ask which product repo will run it.
2. Copy the pack to `<repo>/.cursor/automations/benny/`.
3. Keep user config, feature maps, routing maps, secrets **outside** the pack (e.g. `.cursor/benny/`) so refreshes cannot overwrite them.
4. Enable pstack in that repo’s committed `.cursor/settings.json` for shared skills (`how`, `why`, `tdd`, `unslop`, principles).
5. Live automation prompts read the **committed** `SKILL.md` files. No plugin-cache paths, no pasted excerpts.
6. Fail closed if channel coords, tracker, control adapter, or feature map are missing.
7. Commit `.cursor/settings.json`, the pack, and secret-free config **before** enabling anything.
8. First-time: `/automate` once for triage, finish that handoff, then `/automate` once for repro-and-fix. Do not create duplicates.

Subagents may help. They cannot post to Slack or hold Slack credentials.
