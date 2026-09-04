#!/usr/bin/env node
/**
 * Kitchen encodings on top of a Glass gate copy.
 * Idempotent. Re-run after sync-bootstrap-gates.ps1.
 *
 * Glass already owns cream hexes, terracotta hexes, and 3-card hero grids.
 * Kitchen adds near-cream paper distance and terracotta utility classes,
 * and replaces Glass-coupled a11y with a generic launcher.
 */
import { copyFileSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dest = process.argv[2];
if (!dest) {
  console.error("usage: node adapt-bootstrap-gates.mjs <gates-dir>");
  process.exit(1);
}

const here = path.dirname(fileURLToPath(import.meta.url));
const kitchen = path.resolve(here, "..");

function nlOf(text) {
  return text.includes("\r\n") ? "\r\n" : "\n";
}

function adaptAntiAi(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`missing ${filePath}`);
  }
  let src = readFileSync(filePath, "utf8");
  if (src.includes("KITCHEN_NEAR_CREAM")) {
    console.log("adapt: check-anti-ai-ui.mjs already has kitchen near-cream");
    return;
  }
  if (!src.includes("BANNED_CREAM_PAPER") || !src.includes("scanThreeCardHero")) {
    throw new Error(
      "adapt: Glass check-anti-ai-ui.mjs no longer has cream/3-card blocks. Re-apply kitchen encodings by hand.",
    );
  }

  const nl = nlOf(src);

  const creamLine = " * 5. Cream paper hexes: #F4F1EA, #F5F0E8, #FAF7F2.";
  if (!src.includes(creamLine)) {
    throw new Error("adapt: cream header line not found");
  }
  src = src.replace(
    creamLine,
    ` * 5. Cream paper hexes: #F4F1EA, #F5F0E8, #FAF7F2, plus near-cream paper${nl} *    (high luminance, warm, close to #F4F1EA).`,
  );

  const terraLine = " * 6. Terracotta accent hexes: #C2410C, #B45309, #EA580C, #D97706.";
  if (!src.includes(terraLine)) {
    throw new Error("adapt: terracotta header line not found");
  }
  src = src.replace(
    terraLine,
    ` * 6. Terracotta accent hexes: #C2410C, #B45309, #EA580C, #D97706, plus${nl} *    orange-600 / orange-700 / amber-700 utility class pattern.`,
  );

  const terraConst = "const BANNED_TERRACOTTA = /#(?:c2410c|b45309|ea580c|d97706)\\b/i;";
  if (!src.includes(terraConst)) {
    throw new Error("adapt: BANNED_TERRACOTTA const not found");
  }
  const extraConsts = [
    terraConst,
    "",
    "const KITCHEN_NEAR_CREAM = true;",
    "const CREAM_HEX = { r: 0xf4, g: 0xf1, b: 0xea };",
    "const CREAM_MAX_DIST = 18;",
    "const CREAM_MIN_LUM = 220;",
    "const CREAM_MIN_WARM = 6;",
    "const BANNED_TERRACOTTA_CLASS =",
    "  /(?:text|bg|border|from|to|via|ring|outline|accent|decoration|fill|stroke|caret|divide|shadow)-(?:orange-600|orange-700|amber-700)\\b/;",
  ].join(nl);
  src = src.replace(terraConst, extraConsts);

  const terraCheck = '[BANNED_TERRACOTTA, "banned terracotta accent"],';
  if (!src.includes(terraCheck)) {
    throw new Error("adapt: terracotta checks row not found");
  }
  src = src.replace(
    terraCheck,
    `${terraCheck}${nl}    [BANNED_TERRACOTTA_CLASS, "banned terracotta accent class"],`,
  );

  const helpers = [
    "function parseHexRgb(hex) {",
    "  const h = hex.slice(1);",
    "  if (h.length === 3) {",
    "    return {",
    "      r: parseInt(h[0] + h[0], 16),",
    "      g: parseInt(h[1] + h[1], 16),",
    "      b: parseInt(h[2] + h[2], 16),",
    "    };",
    "  }",
    "  if (h.length === 6 || h.length === 8) {",
    "    return {",
    "      r: parseInt(h.slice(0, 2), 16),",
    "      g: parseInt(h.slice(2, 4), 16),",
    "      b: parseInt(h.slice(4, 6), 16),",
    "    };",
    "  }",
    "  return null;",
    "}",
    "",
    "function isNearCreamPaper(rgb) {",
    "  if (!rgb) return false;",
    "  const dr = rgb.r - CREAM_HEX.r;",
    "  const dg = rgb.g - CREAM_HEX.g;",
    "  const db = rgb.b - CREAM_HEX.b;",
    "  const dist = Math.sqrt(dr * dr + dg * dg + db * db);",
    "  const lum = (rgb.r + rgb.g + rgb.b) / 3;",
    "  return dist <= CREAM_MAX_DIST && lum >= CREAM_MIN_LUM && rgb.r >= rgb.b + CREAM_MIN_WARM;",
    "}",
    "",
    "function scanCreamPaper(text, rel) {",
    "  const hexRe = /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b/g;",
    "  let m;",
    "  while ((m = hexRe.exec(text)) !== null) {",
    "    if (BANNED_CREAM_PAPER.test(m[0])) continue;",
    "    if (isNearCreamPaper(parseHexRgb(m[0]))) {",
    "      pushHit(rel, lineOf(text, m.index), \"banned cream / near-cream paper\", m[0]);",
    "    }",
    "  }",
    "  const rgbRe = /rgba?\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})/g;",
    "  while ((m = rgbRe.exec(text)) !== null) {",
    "    const rgb = { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]) };",
    "    if (isNearCreamPaper(rgb)) {",
    "      pushHit(rel, lineOf(text, m.index), \"banned cream / near-cream paper\", m[0]);",
    "    }",
    "  }",
    "}",
    "",
    "",
  ].join(nl);

  const threeFn = "function scanThreeCardHero(rel, text) {";
  if (!src.includes(threeFn)) {
    throw new Error("adapt: scanThreeCardHero not found");
  }
  src = src.replace(threeFn, helpers + threeFn);

  const call = "  scanThreeCardHero(rel, text);";
  if (!src.includes(call)) {
    throw new Error("adapt: scanThreeCardHero call not found");
  }
  src = src.replace(call, `  scanCreamPaper(text, rel);${nl}  scanThreeCardHero(rel, text);`);

  writeFileSync(filePath, src);
  console.log("adapt: injected near-cream + terracotta class into check-anti-ai-ui.mjs");
}

function adaptA11y(filePath) {
  const overlay = path.join(
    kitchen,
    "templates",
    "product-bootstrap",
    "generic-check-a11y.mjs",
  );
  if (!existsSync(overlay)) {
    throw new Error(`missing generic a11y overlay: ${overlay}`);
  }
  if (existsSync(filePath)) {
    const src = readFileSync(filePath, "utf8");
    if (src.includes("PRODUCT_GENERIC_A11Y")) {
      console.log("adapt: check-a11y.mjs already generic");
      return;
    }
  }
  copyFileSync(overlay, filePath);
  console.log("adapt: wrote generic check-a11y.mjs");
}

adaptAntiAi(path.join(dest, "check-anti-ai-ui.mjs"));
adaptA11y(path.join(dest, "check-a11y.mjs"));
console.log("adapt-bootstrap-gates: ok");
