# Haunt — host your own ghost bots

A self-hosted roster of named agents — **ghost bots** — each able to think
(a session through a pluggable brain) and act (a shared Linux box) on
hardware we own. Grok Bot is the shape we clone; the difference is the
ghosts are ours, the shelf is a marketplace, and the brain is swappable.

Working name: **haunt**. Product repo: `Dahhrk/haunt` (private).
Marketplace: `Dahhrk/haunt-packs` (public registry). The old working name
`nightshift` is retired — renamed before Phase 1 while the outpost label
was still free to move.

## Vocabulary

| Concept | Name |
|---------|------|
| The product | **haunt** — where the specters live |
| A bot | **specter** / ghost bot — ghosts in the machine; Harvey Specter lineage |
| A session / thread | **séance** — summon a specter and converse |
| The driver | **medium** — devin-outpost, devin-acp, grok, any ACP CLI |
| The roster registry | **grimoire** — book of true names + how to summon each |
| The marketplace | **the graveyard** — where specters come from |
| Install a bot | **raise** | Create a bot | **conjure** | Publish | **pass on** |
| A bot pack | a **summoning** — true name + persona + how to call it |
| Wake | **summon** | Running session | **manifestation** |
| Acting on the box | **possession** | Kill a session | **banish** |
| Channels | channels — already correct: you channel spirits |

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
| Worker auth surface | `devin worker start --outpost <name>`; token via `DEVIN_OUTPOSTS_TOKEN` (outposts-machine-scope PAT) else saved worker token else CLI-login bootstrap; `--acceptor-id` + `--cache-dir` persist under `~/.devin` |

Note: the probe's outpost was created as `nightshift` before the rename —
cosmetic only. The Deployment bootstraps `haunt` as a fresh outpost; the old
one can be retired via the Fleet API when convenient.

## Architecture

```
our app (Next.js — grimoire rail, séances, approvals, computer panel)
        │  our broker: séances via v3 API, monitor via Devin MCP,
        │  events via Fleet API watch, ledgers on PVC
        ▼
POST /v3/sessions { prompt, platform:"haunt", devin_mode,
                    max_acu_limit, tags:[specter-slug], playbook_id }
        ▼
Devin queue ──► outpost worker (Deployment on worker-02)
                claims → devin-remote → session executes on our node
                repos under <workdir>/repos/, Chrome via DEVIN_CHROME_PATH
        ▼
fleet-box pod: per-specter screens (Xvfb :N) + Chromium + noVNC/Neko + PVC
               /workspace shared, /home/specter/<slug> per-specter state
```

## Mediums (the plugin layer)

A specter's brain is a `medium` field in the grimoire — one driver per
backend, registered once, any specter can use it:

| Medium | What it is | Status |
|--------|-----------|--------|
| `devin-outpost` | Cloud session, `platform:"haunt"`, claimed by our worker; shows in app.devin.ai natively | verified end-to-end modulo the `cog_` key |
| `devin-acp` | `devin acp` child per séance; tools run wherever the process lives | verified in-pod |
| `grok` | xAI API, or a bridge into grokbot-fleet profiles — our existing personas become raisable specters | open |
| `acp-*` | Any CLI that speaks ACP (claude-code et al.) via the OpenMausBot `customAcp` pattern | open |

New mediums are plugins: a directory under `broker/mediums/` implementing
`summon / reply / events / banish`. The graveyard can ship medium packs too —
a pack can carry a medium plugin plus the specters that use it.

## The graveyard (marketplace)

Grok-companion / GPT-store shape, git-backed like Homebrew taps and
skills.sh — no service to build:

- A **summoning** (pack) is a folder: `pack.yaml` (name, author, version,
  medium, defaults: `devin_mode`, `max_acu_limit`, silence rules, routine
  templates, channel templates) + persona markdown + optional medium plugin.
- `haunt-packs` repo holds `index.json` + one dir per pack. Raise =
  `haunt add author/pack` → pack lands on the roster PVC; publish = a PR to
  the registry repo.
- **Conjure** wizard in the app: name, medium, persona, wake doors → writes
  a pack to the grimoire; "pass on" opens the registry PR.
- Our own specters start empty — no Harvey import. The grokbot-fleet
  profiles stay theirs; a `grok` medium can *channel* them, but the
  graveyard's specters are conjured fresh or raised from packs.

## The roster model (Grok parity)

- Specters are contacts, not jobs: pack → persona files on PVC →
  `[first manifestation]` prompt on raise; thread = its séance history.
- Wake doors: message (app), routine (`schedule_manage` or CronJob),
  inbox signal, GitHub event poll. Routines stay silent unless meaningful;
  the spend guard is `devin_mode:"lite"` + `max_acu_limit` + silence rules.
- Per-specter screen on the shared box; computer panel = noVNC iframe;
  takeover = open the frame and drive. Neko (WebRTC, control handoff) is
  the upgrade over raw noVNC if latency matters.
- Channels group specters per context; responder rules decide who speaks.

## Reference landscape (what we studied, what we take)

| Source | Take |
|--------|------|
| OpenMausBot (Apache-2.0) | Component patterns: roster rail, approval cards, activity chips, computer panel, team-packages-from-markdown (the pack format ancestor). Its `customAcp` driver proves `devin acp` needs no adapter — read it, don't ship it |
| OpenClaw / NanoClaw | Channel connector patterns (Telegram/Slack = free mobile clients); NanoClaw's container-isolated agents |
| Agent Zero | Dockerized-desktop + per-project memory reference |
| Zo Computer | The commercial shape we clone on owned hardware |
| agents-chat | ACP-native multi-agent UI patterns (no license — read only) |
| mem0 / letta / zep | Memory layer candidates if files-on-PVC outgrow plain text |
| skills.sh / Homebrew taps | Registry-of-folders shape for the graveyard |

## Mobile story

- Séances are normal Devin sessions → visible in app.devin.ai mobile web and
  the unofficial DevinX iOS client (supports cloud + local-ACP via connector).
- Talk-to-specters on phone = channel connectors (Telegram/Slack), not an app.
- No mobile client to build.

## Build phases — each a draft PR, each with a falsifiable Done means

1. **API key + last hop** *(user step + verify)* — create a `cog_`/`apk_user_`
   key at app.devin.ai/settings/api-keys. Done means: `POST /v3/sessions` with
   `platform:"haunt"` queues an entry our worker claims; file written by the
   session is readable in the pod.
2. **`haunt` namespace + PVC + worker Deployment** — debian:12 + install.sh
   (probe-verified), token as k8s Secret, pinned to worker-02. Done means:
   pod restarts rejoin the queue; outpost `active_claims` reflects it.
   *(drafted: haunt PR #2)*
3. **fleet-box image** — Xvfb/Chromium/noVNC(+box-agent) + PVC mounts.
   Done means: noVNC serves the desktop in a browser; a file written via the
   desktop survives pod reschedule.
4. **Broker** — séance create/interact via v3+MCP, grimoire registry, inbox
   JSONL on PVC, GitHub event poll, `usage_update` → spend ledger. Medium
   interface (`summon/reply/events/banish`) with `devin-outpost` first.
   Done means: `POST /summon/riddler "morning briefing"` produces a named
   session on the outpost and a ledger row with token counts.
5. **App skeleton** — Next.js + assistant-ui + shadcn: grimoire rail, séance
   stream from session events, approval cards from `request_permission`,
   computer panel iframe. Done means: message a specter in the UI, watch the
   reply stream, open the computer frame.
6. **Personas + routines** — packs on PVC, `[first manifestation]`,
   schedules via `schedule_manage`, silence rules. Done means: a scheduled
   routine posts to its channel and logs tokens, silently on no-op.
7. **Connectors** — Telegram/Slack channel for mobile talk; optional Grok
   bridge later. Done means: message a specter from a phone, get its reply.
8. **Graveyard + conjure** — `haunt-packs` registry repo (index.json +
   pack schema), `haunt add`, conjure wizard, pass-on publish flow, `grok`
   medium for grokbot-fleet profiles. Done means: raise a pack from the
   public registry into the roster and séance it; conjure a new specter in
   the app and pass it on as a registry PR.

## Open items / human gates

- API key creation (user, ~30s, settings page).
- Whether session→outpost requires anything beyond `platform` — resolved by
  phase 1's live call; 400 errors list valid labels, self-healing.
- Credential TTL — JWT has no `exp`; empirically alive for days; refresh path
  is re-running `devin auth login`.
- Which worker node is physically the Ryzen — pin the box there
  (deploy/ pins `k8s-worker-02`; confirm that IS the Ryzen).
- Retire the legacy `nightshift` outpost once `haunt` is live.
- Pack schema freeze — first conjure defines `pack.yaml` for real.
- Bot GitHub identity — user account vs a service account for PR authorship.

## Keep (invariants)

- Draft PRs only; humans plate. No Autopilot.
- No secrets, tokens, org IDs, or product internals in the public kitchen
  or the public `haunt-packs` registry — packs carry personas, never creds.
- Routines silent-unless-meaningful; spend visible in the ledger per turn.
- Smallest correct diff; thin shims over platform features — Outposts, MCP,
  and schedules are platform features, we do not rebuild them.
- Human authorship on everything that ships: commits land under Dark, no
  AI attribution or tool names in commits/PRs/comments, no em dash in
  commit messages — carried in `haunt` AGENTS.md + blueprint knowledge so
  cloud sessions see it too.
