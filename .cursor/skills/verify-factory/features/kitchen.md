# Kitchen health

## How a user reaches it

Open this repo in Cursor. Ask an agent to `/poteto-mode` verify the factory or invoke `verify-factory`.

## How an agent drives it

Follow `.cursor/skills/verify-factory/SKILL.md` Launch → Doctor → Drive → Evidence.

## Observable proof

Doctor paths exist. Smell ledger (`audit/smells.tsv`) passes `node scripts/close-loop.mjs doctor`. Queue sections parse. Decision log keeps its header. Plugin install is reported as yes, no, or inconclusive — never guessed.

## Cleanup

None.
