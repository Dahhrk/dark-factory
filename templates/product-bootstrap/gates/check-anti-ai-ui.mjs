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
 * 5. Cream paper hexes: #F4F1EA, #F5F0E8, #FAF7F2, plus near-cream paper
 *    (high luminance, warm, close to #F4F1EA).
 * 6. Terracotta accent hexes: #C2410C, #B45309, #EA580C, #D97706, plus
 *    orange-600 / orange-700 / amber-700 utility class pattern.
 * 7. AI-default display serifs in font-family / Google family=:
 *    Playfair Display, Libre Baskerville.
 * 8. 3-card hero grids: tokens (three-card, cards-3, hero-cards),
 *    grid-cols-3 with card, or equal 3-column 1fr grids in a hero+card file.
 *
 * Default scan: src/**, index.html, other UI entry HTML at repo root.
 * Extra roots: node scripts/check-anti-ai-ui.mjs <path>… (used by fixtures).
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const extraRoots = process.argv.slice(2).map((p) => path.resolve(ROOT, p));
const SCAN_ROOTS = extraRoots.length
  ? extraRoots
  : [path.join(ROOT, "src"), path.join(ROOT, "index.html")];
const UI_EXT = /\.(css|scss|sass|less|tsx|ts|jsx|js|html|svg)$/i;

const violations = [];

const BANNED_FONT_NAME =
  /\b(Inter|Roboto|Open\s*Sans|Arial|Helvetica\s*Neue|Playfair\s*Display|Libre\s*Baskerville)\b/i;
const BANNED_GOOGLE_FAMILY =
  /fonts\.googleapis\.com\/css[^"' )\n]*family=(Inter|Roboto|Open\+Sans|OpenSans|Arial|Helvetica\+Neue|Playfair(\+Display)?|Libre(\+Baskerville)?)/i;
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

const BANNED_CREAM_PAPER = /#(?:f4f1ea|f5f0e8|faf7f2)\b/i;
const BANNED_TERRACOTTA = /#(?:c2410c|b45309|ea580c|d97706)\b/i;

const KITCHEN_NEAR_CREAM = true;
const CREAM_HEX = { r: 0xf4, g: 0xf1, b: 0xea };
const CREAM_MAX_DIST = 18;
const CREAM_MIN_LUM = 220;
const CREAM_MIN_WARM = 6;
const BANNED_TERRACOTTA_CLASS =
  /(?:text|bg|border|from|to|via|ring|outline|accent|decoration|fill|stroke|caret|divide|shadow)-(?:orange-600|orange-700|amber-700)\b/;

const THREE_CARD_TOKEN =
  /\b(three-?cards?|threecards?|cards?-3|card-grid-3|three-card-grid|hero-cards)\b/i;
const GRID_COLS_3 = /\bgrid-cols-3\b/i;
const THREE_EQUAL_FR =
  /grid-template-columns\s*:\s*(repeat\(\s*3\s*,\s*1fr\s*\)|(?:1fr\s+){2}1fr)/i;

function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  const st = statSync(dir);
  if (st.isFile()) {
    if (UI_EXT.test(dir)) files.push(dir);
    return files;
  }
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === "dist" || name === ".git") continue;
    if (name === "README.md") continue;
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

function eachMatch(re, text, onHit) {
  re.lastIndex = 0;
  const flags = re.flags.includes("g") ? re.flags : `${re.flags}g`;
  const global = new RegExp(re.source, flags);
  let m;
  while ((m = global.exec(text)) !== null) {
    onHit(m);
  }
}

function parseHexRgb(hex) {
  const h = hex.slice(1);
  if (h.length === 3) {
    return {
      r: parseInt(h[0] + h[0], 16),
      g: parseInt(h[1] + h[1], 16),
      b: parseInt(h[2] + h[2], 16),
    };
  }
  if (h.length === 6 || h.length === 8) {
    return {
      r: parseInt(h.slice(0, 2), 16),
      g: parseInt(h.slice(2, 4), 16),
      b: parseInt(h.slice(4, 6), 16),
    };
  }
  return null;
}

function isNearCreamPaper(rgb) {
  if (!rgb) return false;
  const dr = rgb.r - CREAM_HEX.r;
  const dg = rgb.g - CREAM_HEX.g;
  const db = rgb.b - CREAM_HEX.b;
  const dist = Math.sqrt(dr * dr + dg * dg + db * db);
  const lum = (rgb.r + rgb.g + rgb.b) / 3;
  return dist <= CREAM_MAX_DIST && lum >= CREAM_MIN_LUM && rgb.r >= rgb.b + CREAM_MIN_WARM;
}

function scanCreamPaper(text, rel) {
  const hexRe = /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;
  let m;
  while ((m = hexRe.exec(text)) !== null) {
    if (BANNED_CREAM_PAPER.test(m[0])) continue;
    if (isNearCreamPaper(parseHexRgb(m[0]))) {
      pushHit(rel, lineOf(text, m.index), "banned cream / near-cream paper", m[0]);
    }
  }
  const rgbRe = /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/g;
  while ((m = rgbRe.exec(text)) !== null) {
    const rgb = { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]) };
    if (isNearCreamPaper(rgb)) {
      pushHit(rel, lineOf(text, m.index), "banned cream / near-cream paper", m[0]);
    }
  }
}

function scanThreeCardHero(rel, text) {
  eachMatch(THREE_CARD_TOKEN, text, (m) => {
    pushHit(rel, lineOf(text, m.index), "banned 3-card hero grid", m[0]);
  });

  if (/\bcard/i.test(text)) {
    eachMatch(GRID_COLS_3, text, (m) => {
      pushHit(rel, lineOf(text, m.index), "banned 3-card hero grid", m[0]);
    });
  }

  if (/\bhero\b/i.test(text) && /\bcard/i.test(text)) {
    eachMatch(THREE_EQUAL_FR, text, (m) => {
      pushHit(rel, lineOf(text, m.index), "banned 3-card hero grid", m[0]);
    });
  }
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
    [BANNED_CREAM_PAPER, "banned cream paper"],
    [BANNED_TERRACOTTA, "banned terracotta accent"],
    [BANNED_TERRACOTTA_CLASS, "banned terracotta accent class"],
  ];

  for (const [re, rule] of checks) {
    eachMatch(re, text, (m) => {
      pushHit(rel, lineOf(text, m.index), rule, m[0]);
    });
  }

  const fontFamilyBlocks =
    /font-family\s*:\s*[^;{}]+|family=([A-Za-z0-9+|:,%]+)|&family=([A-Za-z0-9+|:,%]+)/gi;
  let fm;
  while ((fm = fontFamilyBlocks.exec(text)) !== null) {
    if (BANNED_FONT_NAME.test(fm[0])) {
      const rule = /Playfair|Libre\s*Baskerville/i.test(fm[0])
        ? "banned AI-default display serif"
        : "banned AI-default font family";
      pushHit(rel, lineOf(text, fm.index), rule, fm[0]);
    }
  }

  scanCreamPaper(text, rel);
  scanThreeCardHero(rel, text);
}

const files = [];
for (const root of SCAN_ROOTS) walk(root, files);

if (!files.length) {
  console.error("anti-ai-ui: no UI files scanned");
  process.exit(2);
}

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
