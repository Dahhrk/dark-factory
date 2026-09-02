# Feature maps (the live control-glass example)

Source: 12 Aug 2026 [workshop](workshop-grok-bot.md) screen-share of

`GrokBot-team / workshops / client / control-glass / references / features/`

Tabs open on the recording: `SKILL.md lauren-mode`, `SKILL.md control-glass`, `README.md`, `sidebar.md`. Same talk as the handwritten slide **“how do i trust my agents more?”**

Pt. 1 [names](pstack-guide-pt1.md) the four H2s. The public twin is the fictional [Atlas map](https://github.com/poteto/verification-skill-example/tree/main/.cursor/skills/verify-atlas/references/features) — command surface distilled in [atlas-control.md](atlas-control.md). This page is what she actually scrolled: Driving conventions, the Glass index, and `sidebar.md` as the worked example.

Glass = Cursor’s agent window. `control-glass` is the first skill she wrote ([Loops You Can Trust](loops-you-can-trust.md)). The map is how an agent that can *click* learns what the product *is*.

## How do I trust my agents more?

Workshop slide, her three answers. Evals sit on the first two. Architecture splits greenfield vs brownfield.

| Lever | What she wrote | Kitchen translation |
|-------|----------------|---------------------|
| **Verification** | The agent closes its own loop on the real app | `control-<app>` + this map. Not a screenshot pasted back to you. |
| **High-quality skills** | Teach agents to work like real software engineers. Example: **pstack** | `/poteto-mode`, playbooks, principles. Soft unless the CLI exists. |
| **Agent-friendly architecture** | Refactor / rewrite so the shortest path is correct. **(greenfield vs brownfield)** | [Dune](dune-method.md): five rules, one writer, isolated files. Brownfield with rails is often safer than vibe-coded greenfield ([organic architecture](organic-architecture.md)). |
| **evals!** (annotation) | Unit tests for skills | Blinded subagents, cross-model judge, loop to a 10. How [maintain](new-to-pstack.md) stays honest. |

Verification without architecture is a fleet that ships weeds. Architecture without verification is a nice repo you still have to click. Skills without either are layer 3 — forgotten.

## The four H2s (sidebar as the worked example)

Every feature file uses the same contract. She walked `sidebar.md` top to bottom.

### 1. Sub-features

Behavior-level inventory. Kebab-case IDs. Selectors and flags live here, not in a wiki.

From the live file: the left sidebar is Glass’s primary navigation — agents grouped into sections, start a new agent, hide / resize / group / filter / paginate / reorder / bulk-manage. Shell: `[data-component="workspace-sidebar"]`.

| ID | What it is |
|----|------------|
| `sidebar-toggle` | Hide/show. `Cmd/Ctrl+B` |
| `sidebar-resize` | Drag the right edge; double-click resets |
| `hidden-sidebar-preview` | Hover “Show Sidebar” while hidden → pinned / unread |
| `sidebar-grouping` | Workspace, Repository, Updated, Status, Environment |
| `sidebar-ordering` | Updated or Status; manual reorder in some group modes |
| `sidebar-show-filters` | Status, PR, Environment, Source, recency, Archived |
| `sidebar-archive-toggle` | Behind `glass_sidebar_archive_toggle` |
| `sidebar-section-pagination` | Budgeted rows; “More” appends in place |
| `sidebar-section-context-menu` | Right-click: Mark All as Read, Archive All, Remove from Sidebar, Open in IDE |
| `sidebar-section-reorder` | Drag section headers |
| `sidebar-new-agent` | Header button; analytics `source="sidebar"` |
| `sidebar-customization-menu` | Bulk actions + list filtering |
| `onboarding-checklist` | Experiment “Getting Started” card above the account footer |

Atlas’s [left-rail.md](https://github.com/poteto/verification-skill-example/blob/main/.cursor/skills/verify-atlas/references/features/left-rail.md) is this list with the names filed off. Same IDs (`sidebar-toggle`, `onboarding-checklist`). Fewer rows. That is the fictionalization, not a different idea.

### 2. How to get to it (user POV)

The human path. Chords, hovercards, conflicts. An agent that only knows DOM will miss “the editor stole `Cmd+Alt+F`.”

Live notes from this H2:

- Toggle `Cmd/Ctrl+B`. Hidden: agent-panel top bar still has Show Sidebar, Search, and New Agent during an active chat.
- Resize: drag the right edge, or double-click to default width.
- Hidden preview hovercard: **pinned**, **Working** with unread activity, **Done** updated in the last **72 hours**.
- Customize Sidebar button, or `Cmd/Ctrl+Alt+F`. If a text editor is focused, that chord may fire Find/Replace instead.
- Group by Workspace / Repository / Updated / Status / Environment. Order Updated / Status / Manual. **Pinned stay at the top.**
- Show menu toggles per-row metadata: Updated time, Environment, PR, Workspace, Branch, Machine, Source.
- Archive visibility: `glass_sidebar_archive_toggle`.
- “More” grows a section in place.
- Right-click a section header for bulk actions.
- Dragging a section header switches group order to Manual if it was Updated.
- New agent: header button or `Cmd/Ctrl+N`.
- Getting Started checklist on new individual accounts.

This is the Slack-screenshot decoder. “Left sidebar jank” plus `???` becomes: toggle, hovercard, filter, or resize — each a named sub-feature with a user path.

### 3. Driving it with control-glass

The machine path. Same behaviors, now as CLI + attributes. Overlay on the recording: **“like the attributes.”** The map’s API is ARIA and `data-*`, not CSS classes.

Preconditions she wrote on this file:

- Signed-in **dev build**, sidebar **visible**, **at least one local agent**.
- Drive a **worktree instance** (`--worktree` / `--checkout` in the Atlas twin). Do not fight the human’s main session ([control-glass scar](loops-you-can-trust.md)).
- `press` for registered chords. `glass.*` IDs are **documentation pointing at the handler**, not something you call.
- `snapshot` for the accessibility tree. `eval` **reads** DOM / clipboard / attributes. **Never** invoke `glass.*` through `eval`.

| Move | How the agent drives it |
|------|-------------------------|
| Toggle | `press "Meta+KeyB"` (macOS) / `"Control+KeyB"` (Win/Linux). Docked chrome: `[data-component="switcher"]`. Inner shell: `[data-component="workspace-sidebar"]`. Labels: “Show Sidebar”, “Search”, “New Agent”. Docs IDs: `glass.toggleSidebar`, `glass.toggleSidebarFromKeyboard`. |
| Resize | Handle `hr[aria-label="Resize sidebar"]` / `[data-position="right"]`. Drag with pointer events. **`aria-click` is not a reset** — double-click is. |
| Hidden preview | Hover `[aria-label="Show Sidebar"]`; assert the hovercard groups. |
| Customize | `Meta+Alt+KeyF` / `Control+Alt+KeyF`, or click `aria-label="Customize Sidebar"`. Docs ID: `glass.openSidebarFilterMenu`. Menu: `[aria-label="Sidebar filters"]`. |
| Grouping | Menu `aria-label="Grouping"`. Gate: `glass_sidebar_group_ordering`. |

Atlas’s driving block is the same idea with `control-atlas.mjs press "Meta+KeyB"` and `[data-component="left-rail"]`. Copy the **shape**. Do not copy Glass selectors into a product that is not Glass.

### 4. Gotchas

The fourth H2. Atlas’s left-rail lists: narrow layouts collapse to an icon rail; bulk-manage changes hit targets; the onboarding card can be absent without being a bug; native drag is **manual** unless the driver grows first-class pointer support.

Live conventions (next section) are the shared gotcha list so every file does not repeat “don’t eval the command service.”

## Driving conventions (features/README.md)

Shared rules. The parent `SKILL.md` still owns the full command surface, the DOM selector table, and worktree vs main-checkout setup.

**Selectors**

- Prefer ARIA labels, `data-component`, `data-action-id`, `data-message-*`, `data-tool-*`.
- Class selectors are fallbacks.
- `data-testid` only where a feature file **names** it.

**Environment**

- Keep developer overlays **off**: FPS meter, lag radar, Solid debug, RPC tracer, leak panel.
- Leave unrelated feature-flag overrides untouched.
- Use `feature-flag` for gated paths; they usually update live.

**Streaming is non-deterministic**

- Poll **observable end states**: status labels, button enablement, `data-tool-status`.
- `wait-settle` waits for **short renderer transitions only**. It does **not** wait for a full turn or tool completion. This is the sharpest line on the page. Sleeping, or treating settle as “the agent finished,” is a false green.

**How to act**

- Prefer `press` with registered chords over coordinate clicks. That exercises the power-user path.
- Treat `glass.*` command IDs as docs → handler.
- The command service is **not** on `window`.
- `eval` reads DOM, clipboard, attributes. **Never** to invoke `glass.*`.
- Run `console` during flows. Expect **zero** console errors.

**Manual unless the driver has first-class support**

- OS file drops, browser-tab drags, native context menus, external browser opens, provider auth dialogs.
- Real OAuth opens the OS browser to `cursor.com`. `control-glass` cannot complete it.
- Full VNC pointer / keyboard / clipboard checks need a live cloud desktop and OS permissions. Missing entitlements → mark **manual**, do not fake it with `eval`.

**Proof bar** (Atlas README, same contract): exercise the real user path; `eval` only *after* that path ran, never as the proof; `doctor` first (stale bundle is not evidence); every entry point the file lists; side effects, not just pixels. Unreachable paths: name the block (account / OS / entitlement / native driver) and cover the closest real path.

## Index of Glass (live names)

`features/README.md` is also the **top-to-bottom sweep order**. Atlas fictionalizes the nouns. The live index is the product she ships.

| Live file | What she listed | Atlas stand-in |
|-----------|-----------------|----------------|
| `sidebar` | Hide/show, resize, group, filter, reorder, bulk-manage, onboarding | `left-rail` |
| `agent-list-and-rows` | One row: metadata tooltips; pin, rename, fork, archive, move, navigate | `session-rows` |
| `agent-creation` | Empty-state composer: quickstarts, project/instance, local vs cloud, **Claude Code import** | `new-session` |
| `named-agents` | Shared **Team Named Agents** | `shared-sessions` |
| `project-agents` | **Local Projects**: persistent local parent, interactive children, tabs/panes | `workspace-groups` |
| `composer-and-prompt` | Mode/model pills, mentions, editable git-action slash commands, Run Everything, attachments, history, voice | `prompt-box` |
| `streaming-and-tool-calls` | Assistant text, thinking bubble, inline tool-call cards, edit/terminal review, abort | `live-replies` |
| `queue-and-multitask` | Follow-up queue + **subagent tray** | `follow-ups` |
| `conversation-view` | Sticky-bottom scroll, outline, in-chat find, **cloud stream recovery** | `transcript` |
| `chat-actions` | Ellipsis: fork, copy, share, export, archive, pin, rename | `session-menu` |
| `composer-trays` | Stack above the prompt: active **goal**, status, mode switch, billing, **branch mismatch** | `prompt-banners` |
| `fsd` (full self driving) | Launch a run that **babysits the branch’s PR**; review findings in the agent tray; PR’s Self-Driving view | `unattended-runs` |

`fsd` is the in-app twin of pstack’s **babysit** playbook: own the PR, do not pretend a merge happened because a card went green. Composer-trays carrying an **active goal** is `/goal` made visible in Glass.

Start a product map at **3–5** files. Hers is large because Glass is large. Split a file when a section needs its own preconditions.

## Why a wiki is the wrong shape

Her words, via the [example README](https://github.com/poteto/verification-skill-example/blob/main/.cursor/skills/verify-atlas/references/features/README.md) and [newcomer post](new-to-pstack.md):

- **Scoped.** One file for the change, not the whole corpus.
- **Actionable.** Same four questions every time.
- **Sweepable.** `README.md` is regression order.
- **Maintained as code.** Drift dies in the same PR as the UI change, or in daily `/maintain-verification-skill`.

The codebase is the real memory. The map is the compact, token-cheap projection. Everyone who contributes inherits it. That is [deepcoding](deepcoding.md) you do not retype: frontload the blessed path instead of grepping the slop.

This kitchen’s `verify-factory/features/kitchen.md` is a **health check**, not this contract. Do not grow it into a fake product map. The first real `references/features/` belongs on the product repo in `intake/QUEUE.md`.

## How this sits on the stack

| Piece | Relation |
|-------|----------|
| [Loops You Can Trust](loops-you-can-trust.md) | Why eyes exist. control-glass origin. Benny fails closed if the map is missing. |
| [workshop](workshop-grok-bot.md) | She scrolled these files. Trust slide. “???” Slack screenshot. |
| [pstack guide Pt. 1](pstack-guide-pt1.md) | Four H2s named. CLI families. Cloud, not worktree farms. |
| [new-to-pstack.md](new-to-pstack.md) | `/create-verification-skill` emits this. Daily maintain. |
| [github-poteto.md](github-poteto.md) | Atlas example is the public copy with the serial numbers filed off. |
| [dune-method.md](dune-method.md) | Attributes + structure are layer 1–2. The map is layer 3 unless the CLI is real. |
| [four-loops.md](four-loops.md) | Autopilot without this page is the 600-PR cleanup bill. |

## Workspace implications from *this* capture

- Four H2s are the unit. A bullet list of screens is not a Feature Map.
- Put stable ARIA / `data-component` / `data-action-id` on the product **as you build**. That is the agent API. Classnames and mystery `data-testid`s are how maps rot.
- `wait-settle` ≠ turn finished. Poll `data-tool-status`, labels, enabled buttons.
- `eval` is a voltmeter, not a steering wheel. If the proof is an internal function call, it is not proof.
- Mark native / OAuth / VNC paths **manual**. Do not paper them over.
- Isolate checkouts (`--worktree` / `--checkout`). Two agents on one userdata dir was the original collision.
- `fsd` / babysit is a mapped feature, not a vibe. If the product has no “watch this PR” surface, the playbook still needs a Feature Map row for whatever *is* the watch surface.
- Trust is three levers. Shipping only pstack, or only a rewrite, or only a click script, is one-third of the slide.
