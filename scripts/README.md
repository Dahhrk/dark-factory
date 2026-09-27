# New private product (match storage layout)

Creates `~/Projects/<Name>` with Vite React-TS scaffold + product bootstrap.
Does **not** invent a Feature Map — open that folder and run `/create-verification-skill`.

```powershell
.\scripts\new-product.ps1 -Name my-app
.\scripts\new-product.ps1 -Name my-app -WithDesignSkills -WithAntiSlop
```

`-WithDesignSkills` still works. The bootstrap also copies the gate pack (`templates/product-bootstrap/gates/`) into the new app's `scripts/` and wires `package.json`.

Refresh that pack from Control-Glass (source of truth):

```powershell
.\scripts\sync-bootstrap-gates.ps1
```

Fails if `~/Projects/Control-Glass` (or `-GlassRepo`) is missing. Kitchen then applies near-cream + terracotta class encodings.

Layout contract: [docs/storage-layout.md](../docs/storage-layout.md)

## Verify a merge actually landed the tip

GitHub freezes `headRefOid` at merge time — a commit pushed to the PR
branch *after* the squash never lands and the PR record stays
self-consistent. Run this while the branch still exists (it diffs the
live branch tip against the merge):

```bash
node scripts/verify-merged.mjs --pr <n>            # inside the repo checkout
node scripts/verify-merged.mjs --pr <n> --repo Dahhrk/<repo>
```

Exit 1 = commits never landed (it names them; re-ship on a fresh PR).
Exits 0 for clean merges and for unmerged PRs. Deleted branch = only the
merge-time head is verifiable, it says so.
