# Orwell prose (default writing system)

Default plain-writing system for every non-code prose surface across factory
lanes: docs, README, PR text, commit messages, chat reports, landing copy,
session notes.

Default behavior for every non-code prose surface. Do not wait for the
human to type `/orwell-prose`. Agents apply rules 1-12 before delivering
prose. The skill in `cursor-team-kit` names the contract. Same shape as
one-shot-task: agents start here automatically on every prose path.

Govern prose only. Never rewrite code or technical terms where precision
needs them. Prefer everyday English only where the meaning survives.

## Muscle, not a ban list

Voice is a muscle. These rules build it. Pattern catalogs (`unslop`) and
punctuation gates (no em dash) stay secondary. Do not treat a word ban as
the writing system.

Project `AGENTS.md` / `CLAUDE.md` may override voice when a product needs a
different register.

## Base rules (Orwell, 1946)

1. Never use a metaphor, simile, or other figure of speech which you are
   used to seeing in print.
2. Never use a long word where a short one will do.
3. If it is possible to cut a word out, always cut it out.
4. Never use the passive where you can use the active.
5. Never use a foreign phrase, a scientific word, or a jargon word if you
   can think of an everyday English equivalent.
6. Break any of these rules sooner than say anything outright barbarous.

## 2026 patch

7. Don't build a straw man to knock down. Use "not X, it's Y" once per
   piece, max.
8. Two examples are enough. Don't stretch to three.
9. Don't announce what you're about to say. Say it.
10. Don't end two paragraphs in a row with punchlines.
11. Vary the length and shape of neighboring sentences.
12. Break any of these rules sooner than write like a machine.

## Final pass

Even when the rules are already in context, check against them every
session before you send. Paste is not practice.

## Operational prompts

### Rewrite old text

List every violation (with rule number), then rewrite. Keep facts, numbers,
and names. Keep rejected drafts with the exact reason each failed.

### Commits and PRs

What changed and why. No achievement language. No "comprehensive" or
"robust". Reviewer knows in one read.

### Landing copy

One concrete claim per line. Swap test: paste a competitor name into the
line; if it still works, rewrite or delete.

### Session reports

Plain sentences: what changed, what failed, what is next. No emoji
checkmarks, no Successfully, no Perfect, no bullet walls. Three lines
first.

## Related

- [language-conventions.md](language-conventions.md) (names, work labels, no em dash)
- [one-shot-task.md](one-shot-task.md)
- [figma-from-system.md](figma-from-system.md)
- [product-debate.md](product-debate.md)
- plug-factory `cursor-team-kit/skills/orwell-prose/SKILL.md`
- pstack `unslop` (secondary pattern gate) and `technical-writing` (doc structure)
- [outcome-repeat-back.md](outcome-repeat-back.md)
- [results-not-homework.md](results-not-homework.md)
- [fleet-orchestrate.md](fleet-orchestrate.md)
- [teach-to-skill.md](teach-to-skill.md)
- [leave-machine-clean.md](leave-machine-clean.md)
- [routine-by-default.md](routine-by-default.md)
- [harness-not-training.md](harness-not-training.md)
- [software-factory-gates.md](software-factory-gates.md)
- [design-eng.md](design-eng.md)
- [design-control-loop.md](design-control-loop.md)
- [improve-agents-md.md](improve-agents-md.md)
