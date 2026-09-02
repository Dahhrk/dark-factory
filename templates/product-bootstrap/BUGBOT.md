# Bugbot / agent review bans

Aligned with LaurenΓÇÖs gardener + Dune contract. Soft layer ΓÇö promote repeats into hard CI.

## Hard preferences (ask for CI if missing)

- Forbidden cross-layer / cross-feature imports must fail the build, not only a comment.
- Durable state has one obvious writer.
- New work adds isolated files; avoid editing shared god registries.
- Exceptions are architecture PRs, not silent `any` / suppressions.

## Ban / flag

- Comments that invent policy (ΓÇ£never do XΓÇ¥) from a one-off review note
- `any` without a named escape hatch
- Lint suppressions added without a ticket / architecture note
- Hand-rolled UI primitives when the design system already has one
- ΓÇ£FixedΓÇ¥ with no runtime evidence (screenshot, test, control CLI, trace)
- Expanding a Feature Map to paper over a product bug (report the bug instead)

## PR shape

- One verifiable unit per PR
- Author agent does not merge on its own verdict
- Draft until before/after proof exists

See product `dune.md` and kitchen `docs/dune-method.md`.
