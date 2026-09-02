# deepcoding

Source: [x.com/poteto/status/2014257661035094246](https://x.com/poteto/status/2014257661035094246) — article dated **22 Jan 2026** (article id `2014236287847575552`). This is the earliest first-party essay in the stack. The next day she published [Coding is Dead, Long Live Engineering](coding-is-dead.md) and linked here as the how behind “context engineer.”

She had not joined Cursor yet. The vehicle is still Claude Code + Plan mode. The move survived: **frontload high-signal context before the agent writes a line.**

## Vibecoding, as she uses the word

No formal definition she knows. Her classification: a style where you have a **rough end-state** and little or no mention of implementation or the middle bits. Those details arrive later, as course correction. The only prerequisite is a sketch of the end-state.

That is how many people — including experienced senior engineers — prompt when they later say AI code quality is bad.

Vibecoding is the right tool for **quick prototypes** and **serendipitous exploration**. Vibecoding your way to **production** is how you meet the **Agony Pyramid™**: start cheerful with a short prompt, finish annoyed at the agent, and start believing AI coding is hype.

With enough course correction and taste you can still land a good result. There is a better way on a large, noisy codebase.

## Invert the pyramid

She does not know a common name. She calls it **deepcoding**.

Deepcoding inverts the flow. **Context and guidance first**, then code. Frontload what the agent needs to execute the task the way it should, instead of supplying it after the mess exists. Almost like importing the knowledge at the top of the file, then telling the agent to use it.

Why it works: LLMs generate tokens from what is already in the window. Frontload the right context and the conversation stays high-signal. The agent stops picking up noise.

This is why **Planning mode** (January, Claude Code / Cursor Plan) works: it frontloads context and lets you review the plan before anyone writes code.

Frontloading also **cuts greps**. Every search pulls files into the window. Those files can be tech debt and bad patterns. React example she already uses here: if the agent reads a pile of components that abuse `useEffect`, the new code will abuse `useEffect`. That sentence is proto-Dune. By summer she does not hope the agent avoids those files — she **bans the pattern in CI** so the shortest path cannot copy the slop. See [dune-method.md](dune-method.md).

> Managing this context window and knowing where and how to provide just the right amount of high signal context … is one of the most underrated yet important skills.

## Isn’t this still painful?

Yes. Prompting this way feels unnatural. It requires **strong opinions** on how code should be written.

She had already written a **Claude Code plugin** that interactively builds a spec (or just optimizes a prompt) full of high-signal context, so you do not have to plain-prompt in this style every time. Custom subagents **isolate context** while they search — internal docs, posts, diffs — so the main thread does not eat the grep residue. Heavy use of AskUserQuestion and TodoWrite. She wanted it to feel like a built-in skill. She offered to try to open-source it if people wanted it.

That plugin is the seed. By May she is building Cursor with Cursor and shipping **pstack** instead of another CC wrapper. The later line “running multiple CLIs in a GUI was missing the point” is this instinct grown up: do not make the human re-frontload every turn. Encode the frontload.

Many spec-driven plugins exist. Plan mode exists. The invitation is the inversion, not her particular UX:

> Start by pulling out that signal into context first, whether it's supplied by you or found by the model.

This style, she says, works extremely well for experienced engineers who have taste.

## How later essays cash this

| Date | Essay | What it adds |
|------|--------|----------------|
| 22 Jan 2026 | **This** | Name the failure (Agony Pyramid) and the move (frontload). CC plugin as the first harness. |
| 23 Jan 2026 | Coding is Dead | Perspective: context engineering is the job; factory must grow. Links here. |
| 25 May 2026 | How I Use Cursor | Harness becomes pstack. Trust > orchestration. Plan mode is no longer her default — playbooks and skills carry the frontload. |
| 24 Jun 2026 | Loops You Can Trust | Failure modes become skills. Worktrees isolate writers the way her plugin isolated search. |
| 12 Aug 2026 | [Feature maps](feature-maps.md) | Frontload on disk: four H2s, attributes as the API, `wait-settle` ≠ turn-done |
| 31 Aug 2026 | pstack guide Pt. 1 | Durable frontload: Feature Map + `control-<app>` CLI. Agents run the lever instead of grepping the slop. |

January says Planning mode is effective because it frontloads. Later she says **the best spec is code** and she does not treat Plan as the default. Those are not a contradiction if you keep the move and change the vehicle. A fresh plan every task is still vibecoding’s cousin if the real context lives only in chat. pstack playbooks, Feature Maps, and hard CI are deepcoding you do not have to retype.

## What this essay is not

- Not a PR-count post.
- Not a Cursor product essay.
- Not a verification recipe. “High-signal context” here is still a spec, a plan, or a plugin prompt.
- The CC plugin was not published from this article. pstack is the public descendant.

## Workspace implications from *this* essay

- Do not vibecode to production. Prototype that way; ship the other way.
- Before an agent writes, put the blessed path in the window: Feature Map, playbook, control CLI, the one good example — not a grep tour of the debt.
- Isolate search (subagents) so tech debt does not become the next token.
- Ban the pattern the agent would copy (`useEffect`, comments, whatever your footgun is). That is deepcoding encoded as CI.
- `/poteto-mode` is the later “feels like a built-in skill” version of the January plugin. Do not rebuild the CC wrapper.
