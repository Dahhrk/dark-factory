# Devin factory plugins

The Devin coding lane runs the same factory contract as the Cursor lane,
delivered through one private plugin marketplace instead of the Cursor
marketplace. Cursor plugins do not load in Devin, so the marketplace ships
**inspired-by conversions**: repackaged SKILL.md trees, MIT licenses retained,
not a live Cursor integration.

## Marketplace repo

`Dahhrk/devin-factory-plugins` (private). One meta-plugin, three plugins:

| Plugin | Carries |
|--------|---------|
| `dark-factory-pack` (root) | Meta-plugin. Installing or requiring it pulls the three below. |
| `factory-baseline` | Draft-PR-only checklist, Done means + Keep handoff, no-secrets screen. |
| `pstack` | Conversion of the public MIT pstack plugin: `/poteto-mode`, principle-*, verification authoring, review workflows. |
| `cursor-team-kit` | Conversion of the public MIT cursor-team-kit plugin: `deslop`, `verify-this`, `control-cli`, `control-ui`, PR/CI helpers. |

Skills resolve as `/<plugin>:<skill>` — e.g. `/factory-baseline:draft-pr-only`,
`/pstack:poteto-mode`, `/cursor-team-kit:verify-this`.

## Install

Personal (Devin Desktop / CLI on your own machine):

```powershell
devin plugins install -y Dahhrk/devin-factory-plugins
devin plugins list                          # four rows: pack + three requireds
devin plugins info dark-factory-pack        # shows the required list
```

Org (cloud sessions) — an admin adds one entry under
**Settings → Resources → Plugins** (managed manifest):

```json
{ "requiredPlugins": [ { "source": "github", "repo": "Dahhrk/devin-factory-plugins" } ] }
```

Required plugins resolve recursively, so the one line brings all four. The
lockfile shows the require as a managed requirement at account scope; a
personal install adds the user id on top of the same account scope.

## Private-repo caveat

The marketplace repo is private. Org installs fetch through the Devin GitHub
connection — that connection must have access to `Dahhrk/devin-factory-plugins`
or the required entry stays declared but resolves nothing. Personal installs
work through local git/gh auth and are the source of truth until org require
is proven on the account. Sanity check: the plugin lockfile
(`%APPDATA%/devin/cli/plugins/lock.json`) lists both an account-scope and a
user-scope managed requirement resolving all four plugins at the same sha.

## Playbook macros

`!factory` in a Devin prompt expands the house contract: draft PR only, Done
means + Keep in the PR body, proof before plate. Pair non-trivial work with
the poteto-shaped align → build → verify loop via `/pstack:poteto-mode`.
Macros are org playbooks, not repo files — the lane still works if a macro is
missing.

## Usage discipline

Org prefs are locked for cost: Lite model defaults, `@Devin` mention required
to spawn, batch size 3, message limit 10, manual review on, auto-approve off,
training off, env auto-snapshots off, review on-demand cap 1. Do not route
work around these — a spend or quota wall is a stop condition, not a puzzle.

## Plate path

Devin drafts; humans plate. Riddler proof → Gordon review → human merge. The
author agent never merges on its own verdict, same rule as the Cursor lane.
Autopilot and overnight fleet stay off.

## Product wiring

In a private product repo, do **not** copy plugin skill bodies. Add one thin
pointer skill under `.agents/skills/` (Devin discovers it natively) that names
the lane and the `/<plugin>:<skill>` handles, plus a short AGENTS.md section.
Product Feature Maps and secrets never leave the product repo — this kitchen
gets recipes only ([VISIBILITY.md](../VISIBILITY.md)).

Devin Cloud supports rules, skills, hooks (except `session_start` /
`session_end`), and MCP servers from plugins. Subagent (`agents/`) trees are
CLI/Desktop-only today — do not design cloud work that depends on them.

## Cloud lane

The Cursor-lane cloud setup ports to three repo-committed artifacts plus the
org require:

- `.devin/blueprint.yaml` at the repo root — the git-backed environment
  blueprint. Devin discovers it automatically; `maintenance` mirrors
  `.cursor/environment.json`'s install (`npm ci` + Playwright), and
  `knowledge` entries hand the agent the repo's test / lint / build / drive
  commands and factory rules. `initialize` is for runtimes and system
  packages; `maintenance` for dependency installs.
- `.devin/config.json` — committed project config; use it to pre-approve the
  everyday commands (`npm`, `npx`, `node`, `git`, `gh`, reads) so cloud
  sessions do not stall on permission prompts.
- Org required plugins (above) carry the skill pack into every cloud session;
  `@Devin` on a GitHub issue or PR is the spawn path.
- The factory operating contract itself travels the same way:
  `factory-baseline/rules/` holds the Devin port of the lane's always-on
  rules (entry contract, evidence bar, close-loop, human authorship).
  Anything that lives only in `~/.cursor/rules/` on your machine is
  invisible to cloud sessions — if a rule must apply in the cloud, it
  belongs in a plugin or the repo.

### Authorship

Everything the lane ships appears under the human's GitHub account:

- Local sessions inherit `~/.gitconfig` and open PRs with the human's `gh`
  token — already human-authored end to end.
- Cloud sandboxes default to the agent's git identity; the blueprint's
  `maintenance` seeds `git config user.name` / `user.email` (use the GitHub
  noreply address — it attributes to the account without publishing a real
  email). Commits the session makes carry the human's author from then on.
- The PR *opener* in cloud is the platform's GitHub App
  (`devin-ai-integration[bot]`) — that actor is fixed. What shows as
  "authored by" on each commit inside the PR is the seeded human identity.
- `factory-baseline/rules/human-authorship.md` is the always-on contract:
  no `Co-Authored-By` bot trailers, no "Generated with" footers, no AI
  references in commit messages / PR bodies / file headers.

`devin cloud drs` also exists for editor-managed blueprints, sandbox test
sessions, snapshot builds, and org secrets — it needs `devin.org_id` in
`~/.config/devin/config.json` (`%APPDATA%\devin\config.json` on Windows) as a
nested `"devin": { "org_id": "..." }` object. On a Devin Pro account the DRS
API answers "Organization not found" for the Codeium team id, so the
git-backed `blueprint.yaml` is the working path — keep the org-side blueprint
API for if/when an Enterprise org id is known.

## Proof

- `devin plugins list` → four plugins (requires a Devin login; offline
  proof is the resolved set in `cli/plugins/lock.json`). Agent-spawned shells
  carry `ACP_BACKEND` and the CLI deliberately hides the account login from
  them — `auth status` reports "Not logged in" there while a normal terminal
  is fine. For a read-only check inside an agent shell,
  `Remove-Item Env:ACP_BACKEND` then rerun; leave account-mutating verbs in a
  real terminal.
- `devin plugins info dark-factory-pack` → requireds listed
- `node scripts/validate-plugins.mjs` in the marketplace repo → green; CI runs
  the same script on every PR
