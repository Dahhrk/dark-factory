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
