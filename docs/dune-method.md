# Dune method (for product repos)

Dune is the Grok Bot Electron architecture method from public talks. You do not install it here. You apply the **contract** on each product repo the factory points at.

Live source: 12 Aug 2026 [workshop](workshop-grok-bot.md) screen-share of the internal **Dune / Agent-friendly architecture** page (tldraw + docs). Spoken layers match. Written thesis a month earlier: [organic architecture](organic-architecture.md).

## Contributor context model

Dune assumes many contributors arrive with a **narrow prompt**, a **few nearby files**, and **no complete model** of the system. Agents are the extreme case of that. Humans under time pressure are the mild case.

The job of the architecture:

> Make the locally obvious change the globally correct change.

Unsafe shortcuts fail with an error that **names the supported owner** (or the blessed path). The page exists so repeated local edits do not couple the system by accident.

That is [deepcoding](deepcoding.md) encoded as directories: if the nearest pattern is house style, the next tokens copy house style.

## Contract — what an agent actually does

These are **predictable inputs** to the framework, not moral failings. Design for them.

A coding agent usually optimizes for what fits in its context:

- copy the nearest working pattern
- edit the file already open
- choose the shortest path that compiles
- avoid deleting code whose callers are not visible
- follow the requested implementation even when it conflicts with a system invariant

If your repo rewards those five, you get organic architecture. If your repo makes the first four land on the house path and makes the fifth **fail the build**, you get Dune.

## Five rules

| # | Rule | What it blocks |
|---|------|----------------|
| 1 | **The conventional path requires fewer decisions than a shortcut.** | Invented layouts, extra wrappers, “just this once” forks. |
| 2 | **Forbidden dependencies fail mechanically.** | Soft `AGENTS.md` “please don’t import X.” The compiler / cruiser / lint stops the line. |
| 3 | **Every durable value has one obvious writer.** | Two features writing the same store, flag, or cache. Agents will both “fix” it. |
| 4 | **New product work adds isolated files rather than branches in shared roots.** | God files, shared switch statements, central registries that every feature edits. |
| 5 | **Exceptions are narrow, explicit, and reviewed as architecture changes.** | A comment, a one-off `any`, a silent allowlist. Exceptions are PRs to the trellis, not to the feature. |

Workshop comment ban sits under rule 5: agents fossilize “this PR is bad” into “never do this.” Context dies; the fragment stays. So comments are not a place exceptions live.

Gardening ([thousand-gardens.md](thousand-gardens.md)): every weed you pull becomes a rule so it cannot grow back. That is rule 5 firing.

## Five public nouns (Glass worked example — do not copy the names)

How *their* app carries the five rules. Your product needs the same jobs, not these nouns.

| Noun | What it does | Rule it carries |
|------|----------------|-----------------|
| **Feature** | Creates an **owned folder** (types, UI, state colocated). | 1, 4 |
| **Entrypoints** and **Transcript cards** | **Reserved files**, discovered by convention. Not registered in a shared inventory every feature must edit. | 4 |
| **Client** | Durable **laptop state** has one writer, behind named hooks / commands. | 3 |
| **Host** | Behavior stays **in the box** behind **one typed contract**. | 2, 3 |
| **Package boundary** | Same lesson at the top of the tree. | 2 |

Layout from the workshop:

- Framework: `sand/dune`
- Application: `sand/src`
- **Dune never imports application code.** One-way dependency. The framework cannot grow tentacles into features.

Portable translation (the old four moves, now aligned):

1. **Feature colocation** — owned folder. Rule 4.
2. **Layer boundaries** — forbidden imports fail CI (`dependency-cruiser`, `eslint-plugin-boundaries`). Rule 2. Framework does not import app.
3. **One writer** — durable state / flags / caches have a named owner. Rule 3.
4. **Ban the local footgun** — `any`, comments-as-policy, god services, banned React APIs. Compile or lint. Rules 2 and 5.
5. **Blessed scaffold** — generator so the lazy completion is house style. Rule 1.

Change stacks for driveability (CDP, simulator) when the current stack cannot be driven. A mean compiler is cheaper than another skill.

## Atomic history, on the recording

Same talk, **Pretext Virt** project view (workshop chrome: Overview / Notes / **Agents** / **PRs 16** / Context). One theme split across many PRs — TanStack / Solid virtualization collapsed onto a **React plane contract**:

| Status | Example titles (workshop numbers) |
|--------|------------------------------|
| CI failing (2) | `composer: remove the composer_pretext_virtualization flag definition` · `rules: rewrite composer virtualization-ownership onto the React plane contract` |
| Merged (13) | `recital: settle the standalone-root scroll-stability sample before asserting (PRE-7)` · `composer: remove the @tanstack/solid-virtual dependency` · `composer: delete the dead TanStack virtualization source` · `composer: collapse the transcript virtualization fork to the React plane` · `recital: delete the gate-off and TanStack-only test suites` |
| Closed (1) | `fix(composer): restore-gate walk survives unloaded bubble holes` |

Read the titles as Dune, not as flex:

- Area prefix (`composer:`, `recital:`, `rules:`) = owned folder, not a shared root.
- Delete the flag, then the dependency, then the dead source, then the fork, then the old tests. Isolated files. Rule 4.
- “React plane **contract**” = Host / one typed contract. Rule 3.
- Ticket in the title (`PRE-7`). Not a 40k-line merge.
- Two red, one closed. The line stops. That is success ([Benny](benny-line.md)).

PR policy from the talk: no fixed line cap. Ask agents to **split**. History must stay a tool. A 40,000-line PR that merges is still a failure.

## Four layers of force

Hardest first. Handwritten on the tldraw next to the five rules: codebase → static analysis (lint / compiler / CI) → rules / bugbot → (skills…). Human review is the worst place to keep a convention.

| Layer | What | Hardness |
|-------|------|----------|
| 1 | Codebase structure | Hardest — you cannot violate it |
| 2 | CI / lint / compiler | Hard — the build stops |
| 3 | Rules, skills, style guides, AI review (Bugbot) | Soft — forgotten |
| 4 | A human saying “please don’t” on the PR | **Worst** |

If you only have layer 3, junk is a matter of time. Style-guide-plus-review is obsolete at agent volume.

## Trigger

If you typed the same review comment twice, stop commenting. Encode it as a lint, type, test, generator, or directory that makes the other path not exist. That is `encode lessons in structure`. That is rule 5.

## Verification on the product repo

Architecture without eyes is still a human conveyor belt. Eyes: [feature-maps.md](feature-maps.md).

```text
/create-verification-skill
```

That must produce a **CLI** (`control-<app>`) plus `references/features/` — not markdown instructions alone. Public twin: [pstack-guide-pt1.md](pstack-guide-pt1.md) and [poteto/verification-skill-example](https://github.com/poteto/verification-skill-example).

`/maintain-verification-skill` at least daily. This kitchen's `verify-factory` skill only proves the kitchen, not the product.

## Adjacent gardener tools (not Dune)

She pointed at [dmmulroy/anti-slop](https://github.com/dmmulroy/anti-slop) for opinionated TS containment. Install on the product:

```bash
npx skills add dmmulroy/anti-slop --skill install-anti-slop
```

Community “Dune method” packs (e.g. korallis scaffolding, Factory `no-use-effect`) approximate rules 1–2. They are **not** Dune source. Ordered install: [setup-everything.md](setup-everything.md).
