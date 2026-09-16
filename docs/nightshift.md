# Nightshift — the fleet's own agent computer

Our Grok-Bot-shaped system: a roster of named bots with persistent personas,
each able to think (Devin sessions) and act (a shared Linux box) on hardware we
own. Devin supplies the brain and the session rails; the home cluster supplies
the computer; our app supplies the roster, chat, and approvals.

Working name: **nightshift**. Product repo: `nightshift` (private — gets
`.devin/` blueprint + factory-init when created). Everything below is verified
or marked open.

## Verified evidence ledger

| Claim | Evidence |
|-------|----------|
| Devin CLI runs on Linux | `x86_64-unknown-linux` + `aarch64-unknown-linux` are first-class targets in `cli.devin.ai/install.sh`; installed v3000.10.27 in a cluster pod |
| Login credential works on Linux | `credentials.toml` copied to `~/.local/share/devin/` → `auth status` reports logged in |
| Full ACP loop inside k8s | Pod on worker-02: `initialize` → `session/new` → prompt → reply; no `authenticate` call required when the CLI credential file is present |
| Concurrent sessions on one node | Two parallel `devin acp` children in one pod both completed prompts |
| Per-session token metering | `session/prompt` response carries `usage{inputTokens,outputTokens,cachedReadTokens}`; `session/update` emits `usage_update{used,size}` (262k context) — the spend-ledger primitive |
| Modes + commands stream over ACP | `config_option_update` carries mode select (`accept-edits`/`smart`/`ask`/`plan`/`bypass`); `available_commands_update` lists slash commands |
| Org has Outposts | Interactive `devin worker start` created outpost `nightshift` (`outpost_env-…`) and the worker began serving; `GET /opbeta/outposts` lists it with `queue_depth`/`active_claims` |
| Fleet API reachable | `api.devin.ai/opbeta/outposts/*` answers with the worker token: list outposts, list/watch `devins` queue (SSE, list-then-watch, at-least-once), claim/release CAS, `operator-message` banner |
| v3 session→outpost routing | v3 OpenAPI `platform` field accepts an outpost name (BYOB pool); `inherit` propagates a parent's placement to children; bad names 400 with the available labels |
| v3 session controls | `devin_mode` (normal/fast/lite/ultra/fusion), `max_acu_limit` (native per-session spend cap), `resumable` (VM state preserved = hibernate), `repos`, `tags`, `playbook_id` |
| Devin MCP server | `mcp.devin.ai/mcp` (streamable HTTP, `cog_` key): `session_create/interact/events/gather/search`, `schedule_manage` (native cron), `playbook_manage`, `knowledge_manage`, `list_integrations` |
| `/handoff` | CLI command creates a cloud session carrying repo + branch + diff context |
| Desktop-in-pod | Xvfb + Chromium + x11vnc + websockify live; RFB banner `003.008`; noVNC `vnc.html` 200 through port-forward |
| PVC persistence | local-path PVC: pod-1 wrote a file, deleted, pod-2 read it back — the durable-disk story works |
| Workers are VMs | Nodes report QEMU Q35 — the 39 GB figure is VM allocation, not the physical ceiling; workers can be resized |

## Architecture

```
our app (Next.js, roster + chat + approvals + computer panel)
        │  our broker: sessions via v3 API, monitor via Devin MCP,
        │  events via Fleet API watch, ledgers on PVC
        ▼
POST /v3/sessions { prompt, platform:"nightshift", devin_mode,
                    max_acu_limit, tags:[bot-slug], playbook_id }
        ▼
Devin queue ──► outpost worker (pod on worker-02, already serving)
                claims → devin-remote → session executes on our node
                repos under <workdir>/repos/, Chrome via DEVIN_CHROME_PATH
        ▼
fleet-box pod: per-bot screens (Xvfb :N) + Chromium + noVNC/Neko + PVC
               /workspace shared, /home/bot/<slug> per-bot state
```

Two session paths, both real:

- **Outpost (preferred)** — cloud session, `platform:"nightshift"`, shows in
  app.devin.ai natively, claims land on our worker. Devin's own UI is a second
  inspector. Requires the org feature (verified present) + a `cog_` API key.
- **Local ACP** — `devin acp` child per session, tools run wherever the process
  lives (pod or PC). No API key needed; verified end-to-end in-cluster.

## The roster model (Grok parity)

- Bots are contacts, not jobs: profile YAML → persona files on PVC →
  `[first run]` prompt on create, thread = its Devin session history.
- Wake doors: message (app), routine (`devin_schedule_manage` or CronJob),
  inbox signal, GitHub event poll. Routines stay silent unless meaningful;
  the spend guard is `devin_mode:"lite"` + `max_acu_limit` + silence rules.
- Per-bot screen on the shared box; computer panel = noVNC iframe; takeover =
  open the frame and drive. Neko (WebRTC, control handoff) is the upgrade over
  raw noVNC if latency matters.
- Channels group bots per context; responder rules decide who speaks.

## Reference landscape (what we studied, what we take)

| Source | Take |
|--------|------|
| OpenMausBot (Apache-2.0) | Component patterns: roster rail, approval cards, activity chips, computer panel, team-packages-from-markdown. Its `customAcp` driver proves `devin acp` needs no adapter — read it, don't ship it |
| OpenClaw / NanoClaw | Channel connector patterns (Telegram/Slack = free mobile clients); NanoClaw's container-isolated agents |
| Agent Zero | Dockerized-desktop + per-project memory reference |
| Zo Computer | The commercial shape we clone on owned hardware |
| agents-chat | ACP-native multi-agent UI patterns (no license — read only) |
| mem0 / letta / zep | Memory layer candidates if files-on-PVC outgrow plain text |

## Mobile story

- Sessions are normal Devin sessions → visible in app.devin.ai mobile web and
  the unofficial DevinX iOS client (supports cloud + local-ACP via connector).
- Talk-to-bots on phone = channel connectors (Telegram/Slack), not an app.
- No mobile client to build.

## Build phases — each a draft PR, each with a falsifiable Done means

1. **API key + last hop** *(user step + verify)* — create a `cog_`/`apk_user_`
   key at app.devin.ai/settings/api-keys. Done means: `POST /v3/sessions` with
   `platform:"nightshift"` queues an entry our worker claims; file written by
   the session is readable in the pod.
2. **`nightshift` namespace + PVC + worker Deployment** — official
   `devin-cli` image, token as k8s Secret, pinned to worker-02. Done means:
   pod restarts rejoin the queue; outpost `active_claims` reflects it.
3. **fleet-box image** — Xvfb/Chromium/noVNC(+box-agent) + PVC mounts.
   Done means: noVNC serves the desktop in a browser; a file written via the
   desktop survives pod reschedule.
4. **Broker** — session create/interact via v3+MCP, roster registry, inbox
   JSONL on PVC, GitHub event poll, `usage_update` → spend ledger. Done means:
   `POST /wake/harvey "morning briefing"` produces a named session on the
   outpost and a ledger row with token counts.
5. **App skeleton** — Next.js + assistant-ui + shadcn: roster rail, thread
   stream from session events, approval cards from `request_permission`,
   computer panel iframe. Done means: message Harvey in the UI, watch the
   reply stream, open the computer frame.
6. **Personas + routines** — profiles on PVC, `[first run]`, schedules via
   `schedule_manage`, silence rules. Done means: a scheduled routine posts to
   its channel and logs tokens, silently on no-op.
7. **Connectors** — Telegram/Slack channel for mobile talk; optional Grok
   bridge later. Done means: message a bot from a phone, get its reply.

## Open items / human gates

- API key creation (user, ~30s, settings page).
- Whether session→outpost requires anything beyond `platform` — resolved by
  phase 1's live call; 400 errors list valid labels, self-healing.
- Credential TTL — JWT has no `exp`; empirically alive for days; refresh path
  is re-running `devin auth login`.
- Which worker node is physically the Ryzen — pin the box there.
- Bot GitHub identity — user account vs a service account for PR authorship.

## Keep (invariants)

- Draft PRs only; humans plate. No Autopilot.
- No secrets, tokens, org IDs, or product internals in the public kitchen.
- Routines silent-unless-meaningful; spend visible in the ledger per turn.
- Smallest correct diff; thin shims over platform features — Outposts, MCP,
  and schedules are platform features, we do not rebuild them.
