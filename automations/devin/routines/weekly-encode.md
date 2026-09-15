# Routine: weekly encode (Friday ops)

Ted equivalent — turn repeated smells into structure.

1. In the kitchen: `node scripts/close-loop.mjs harvest` to pull every
   repo's `audit/smells.tsv` into the kitchen ledger.
2. `node scripts/close-loop.mjs status` — list every smell at REPEAT.
3. For each REPEAT, pick the structural fix:
   - recurring review comment -> lint / CI check / hook
   - repeated manual step -> script / generator / skill
   - repeated wrong default -> config / template change
4. Implement each fix as its own verifiable unit. Open **one draft PR per
   smell** — never batch encodes. Body carries Why / Scope / Verification +
   Done means + Keep.
5. Mark each encoded smell: `node scripts/close-loop.mjs encode
   --workspace <slug> --smell <slug> --evidence <what changed>` and commit
   the ledger row with the fix.
6. If no REPEATs: `weekly-encode: clean` and stop. Do not invent smells.

Keep: draft PRs only, humans plate, no taste/spend/merge-rights encodes.
