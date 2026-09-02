#!/usr/bin/env node
/**
 * Mechanical gate: fail CI when UI sources reintroduce AI-template tropes.
 *
 * Bans (document here; keep in sync with .cursor/rules/anti-ai-ui.mdc):
 * 1. Primary font stacks / Google Fonts links for Inter, Roboto, Open Sans,
 *    Arial, Helvetica Neue (and family=Inter|Roboto|… URL forms).
 * 2. Generic system stacks as the primary face: system-ui, -apple-system
 *    as the first family in font-family.
 * 3. Common purple / indigo AI tokens:
 *    #7c3aed, #8b5cf6, #a78bfa, #6366f1, #818cf8, #4f46e5, #9333ea
 *    plus purple→indigo gradient wording (violet/purple/indigo stops).
 * 4. Nightglass cliché pieces (dark “AI tool” night mode):
 *    - Film grain / noise overlays via SVG feTurbulence / fractalNoise
 *      (or class/id names like *-grain used with those).
 *    - Neon mint / cyan accent hexes common to that look:
 *      #5dffb0, #7dffc0, #00ffc6, #00ffaa, #22d3ee, #67e8f9, #2dd4bf
 *
 * Soft companions (cream+terracotta+serif, 3-card hero grids) live in the
 * Cursor rule + Feature Map Looks section — extend this script when they
 * appear a second time in review.
 *
 * Scans: src/**, index.html, and other UI entry HTML at repo root.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SCAN_ROOTS = [path.join(ROOT, "src"), path.join(ROOT, "index.html")];
const UI_EXT = /\.(css|scss|sass|less|tsx|ts|jsx|js|html|svg)$/i;

const violations = [];

const BANNED_FONT_NAME =
  /\b(Inter|Roboto|Open\s*Sans|Arial|Helvetica\s*Neue)\b/i;
const BANNED_GOOGLE_FAMILY =
  /fonts\.googleapis\.com\/css[^"' )\n]*family=(Inter|Roboto|Open\+Sans|OpenSans|Arial|Helvetica\+Neue)/i;
const BANNED_SYSTEM_PRIMARY =
  /font-family\s*:\s*(['"]?)(-apple-system|BlinkMacSystemFont|system-ui)\b/i;

const BANNED_PURPLE_HEX =
  /#(?:7c3aed|8b5cf6|a78bfa|6366f1|818cf8|4f46e5|9333ea)\b/i;
const BANNED_PURPLE_GRADIENT =
  /(linear|radial)-gradient\([^)]*\b(purple|violet|indigo)\b[^)]*\b(purple|violet|indigo)\b[^)]*\)/i;

const BANNED_GRAIN =
  /\b(feTurbulence|fractalNoise)\b/;
const BANNED_NEON_MINT_CYAN =
  /#(?:5dffb0|7dffc0|00ffc6|00ffaa|22d3ee|67e8f9|2dd4bf)\b/i;

function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  const st = statSync(dir);
  if (st.isFile()) {
    if (UI_EXT.test(dir)) files.push(dir);
    return files;
  }
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === "dist" || name === ".git") continue;
    walk(path.join(dir, name), files);
  }
  return files;
}

function lineOf(text, index) {
  return text.slice(0, index).split(/\r?\n/).length;
}

function pushHit(rel, line, rule, snippet) {
  const clean = snippet.replace(/\s+/g, " ").trim().slice(0, 120);
  violations.push(`${rel}:${line}: ${rule} — ${clean}`);
}

function scanFile(abs) {
  const rel = path.relative(ROOT, abs).replace(/\\/g, "/");
  const text = readFileSync(abs, "utf8");
  const checks = [
    [BANNED_GOOGLE_FAMILY, "banned Google font family"],
    [BANNED_SYSTEM_PRIMARY, "banned system-ui primary font-family"],
    [BANNED_PURPLE_HEX, "banned purple/indigo AI token"],
    [BANNED_PURPLE_GRADIENT, "banned purple/indigo gradient trope"],
    [BANNED_GRAIN, "banned film-grain / noise (nightglass)"],
    [BANNED_NEON_MINT_CYAN, "banned neon mint/cyan (nightglass)"],
  ];

  for (const [re, rule] of checks) {
    re.lastIndex = 0;
    let m;
    const flags = re.flags.includes("g") ? re.flags : `${re.flags}g`;
    const global = new RegExp(re.source, flags);
    while ((m = global.exec(text)) !== null) {
      pushHit(rel, lineOf(text, m.index), rule, m[0]);
    }
  }

  // Font names in font-family or family= only (avoid false hits in prose comments
  // that say "do not use Inter" — still flag CSS/HTML usage and Google links).
  const fontFamilyBlocks =
    /font-family\s*:\s*[^;{}]+|family=([A-Za-z0-9+|:,%]+)|&family=([A-Za-z0-9+|:,%]+)/gi;
  let fm;
  while ((fm = fontFamilyBlocks.exec(text)) !== null) {
    if (BANNED_FONT_NAME.test(fm[0])) {
      pushHit(rel, lineOf(text, fm.index), "banned AI-default font family", fm[0]);
    }
  }
}

const files = [];
for (const root of SCAN_ROOTS) walk(root, files);

for (const f of files) scanFile(f);

if (violations.length) {
  console.error("anti-ai-ui: banned UI tropes found:\n");
  for (const v of violations) console.error(`  ${v}`);
  console.error(
    `\n${violations.length} hit(s). See scripts/check-anti-ai-ui.mjs header and .cursor/rules/anti-ai-ui.mdc.`,
  );
  process.exit(1);
}

console.log(`anti-ai-ui: ok (${files.length} files scanned)`);
