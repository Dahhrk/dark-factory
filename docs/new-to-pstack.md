# If you are new to pstack

Public newcomer post, in order. Official page: [01-setup.md](https://github.com/cursor/plugins/blob/main/pstack/docs/guide/01-setup.md). Models section: [Pick your models](https://github.com/cursor/plugins/blob/main/pstack/docs/guide/01-setup.md#pick-your-models). What a finished skill looks like: [poteto/verification-skill-example](https://github.com/poteto/verification-skill-example). Longer recipe: [pstack-guide-pt1.md](pstack-guide-pt1.md).

This kitchen already has a model map at `~/.cursor/rules/pstack-models.mdc`. You still have to install the plugins in a Cursor chat. `/create-verification-skill` belongs on a **product** repo, not here.

## The three commands for newcomers

```text
/add-plugin pstack
/setup-pstack
/create-verification-skill
```

Then, every day, without you in the chair:

```text
/maintain-verification-skill
```

That last one is a **Grok Bot routine or a Cursor automation**, not a sticky note. The same post says so. [Dr Eggbot](https://x.ai/bot/93gOz3op1UQdBdbekQFLK) will create the engineer bot that owns create + daily maintain if you want a packaged version.

Also install `/add-plugin cursor-team-kit` (`/deslop`, `control-ui`, `control-cli`; pstack does not bundle them).

Start a **new chat** after `/setup-pstack`. The model rule only applies to new sessions.

## What each command is for

| Command | Job |
|---------|-----|
| `/setup-pstack` | Detects models you can use. Asks which role gets which model (code delegates, judgment, review panels, swarm workers). Writes `~/.cursor/rules/pstack-models.mdc`. Roles you skip keep the skill default. `inherit-parent` / `auto` means inherit the parent chat — **not** a model slug. At the end it looks for a `verify-*` skill or harness; if neither exists it **offers once** to run `/create-verification-skill`. |
| `/create-verification-skill` | “The most important part of creating an agent loop you can trust.” Interviews the **repo**, not you. Writes `.cursor/skills/verify-<app>/` with Launch, Doctor, Drive, Evidence, Cleanup, plus a Feature Map. Proves the skill once end to end before handing it over. A skill that was never executed is a draft. |
| `/maintain-verification-skill` | Apps change; maps rot. Parallel source readers, then a live drive of every mapped feature. Ends `clean` / `changed` (one PR, verify dir only) / `blocked`. Never edits product code. If the live pass finds a product bug, it **reports** it — it does not paper over it in docs. |

## What the example actually is

[verification-skill-example](https://github.com/poteto/verification-skill-example) is labeled **private reference**, heavily fictionalized. Atlas / Harbor Labs / `control-atlas` are made up. The shape is what to copy.

```text
.cursor/skills/verify-atlas/
  SKILL.md                          # launch, doctor, drive, prove, clean up
  # control-atlas.mjs               # CLI omitted on purpose; usage only in SKILL.md
  references/features/
    README.md                       # index, conventions, sweep order
    *.md                            # ~30 feature files
```

The CLI source is missing on purpose. Pt. 1 still says **Build the Lever**: a real `control-<app>` agents can run (`--help`, `--dry-run`, JSON). Copy the skill + map shape from the example; let `/create-verification-skill` emit the driver, or write it. Markdown-only verify is not a trusted loop.

Why not a wiki (from the public post):

- **Scoped.** One feature file for the change, not the whole corpus.
- **Actionable.** Same four questions every file.
- **Sweepable.** `features/README.md` is top-to-bottom regression order.
- **Maintained as code.** Drift dies in the same PR as the UI change, or in a maintain pass.

Four H2s per feature file: `Sub-features`, `How to get to it (user POV)`, `Driving it with <cli>`, `Gotchas`. Live Glass worked example (sidebar + Driving conventions): [feature-maps.md](feature-maps.md).

The example CLI surface (documented, not shipped): inspection (`info`, `snapshot`, `screenshot`), navigation (`new-session`, `select-project`), interaction (`send`, `press`, `aria-click`), perf (`trace`, `wait-settle`), streaming (`console`, `network-log`), health (`doctor`, `cleanup`), plus `--checkout` so an isolated tree does not fight your main session.

Proof bar from the example SKILL: exercise the real user path; `eval` only **after** that path ran, never as the proof; `doctor` first (stale bundle is not evidence); every entry point the feature file lists; side effects, not just pixels.

## First task after setup

Official first prompt, once the product verify skill exists:

```text
/poteto-mode add a --json flag to this command. text output stays byte-identical. verify both.
```

Watch the todo list. First item is always “read the Principles section.” The rest are the matched playbook, copied in. Skipped steps stay visible with `skip:`.

On **this** kitchen, do not generate a product verify skill. The first `/poteto-mode` here is a read of the operating manual. The product target is still the first `inbox` row in `intake/QUEUE.md`.

Full recreate path (account → Autopilot): [setup-everything.md](setup-everything.md). What you can never download: [match-ceiling.md](match-ceiling.md). Skill list: [public-inventory.md](public-inventory.md).
