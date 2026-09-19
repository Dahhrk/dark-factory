#!/usr/bin/env node
// Detect and repair UTF-8 text that was double-encoded through Windows
// CP1252: a char like an em dash (bytes E2 80 94) got re-read as three
// CP1252 chars (U+00E2 U+20AC U+201D = the visible "â€�" garbage).
//
//   node scripts/check-mojibake.mjs          # report, exit 1 on hits (CI)
//   node scripts/check-mojibake.mjs --fix    # repair files in place
//
// Repair: candidate runs (mojibake lead byte + tail alphabet) are mapped
// back to bytes via the CP1252 reverse table and re-decoded as UTF-8.
// A run is only rewritten when the decode is fatal-clean and yields
// fewer non-ASCII chars than it started with. Zero deps.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const FIX = process.argv.includes('--fix');

// CP1252 byte -> char for 0x80-0x9F (reversed here for char -> byte).
const CP1252 = {
  '€': 0x80, '‚': 0x82, 'ƒ': 0x83, '„': 0x84, '…': 0x85, '†': 0x86,
  '‡': 0x87, 'ˆ': 0x88, '‰': 0x89, 'Š': 0x8a, '‹': 0x8b, 'Œ': 0x8c,
  'Ž': 0x8e, '‘': 0x91, '’': 0x92, '“': 0x93, '”': 0x94, '•': 0x95,
  '–': 0x96, '—': 0x97, '˜': 0x98, '™': 0x99, 'š': 0x9a, '›': 0x9b,
  'œ': 0x9c, 'ž': 0x9e, 'Ÿ': 0x9f,
};
const toByte = (ch) => {
  const c = ch.codePointAt(0);
  if (c >= 0x80 && c <= 0xff) return c;
  if (CP1252[ch] !== undefined) return CP1252[ch];
  return null;
};

const LEAD = /[\u00c0-\u00ff]/; // C0-FF byte leads (Ã-ÿ family, incl. â)
const TAIL = /[\u0080-\u00bf\u00a0-\u00ff\u20ac\u201a\u0192\u201e\u2026\u2020\u2021\u02c6\u2030\u0160\u2039\u0152\u017d\u0178\u2018-\u201d\u2022\u02dc\u2122\u0161\u203a\u0153\u017e]/;
const CANDIDATE = new RegExp(`${LEAD.source}${TAIL.source}+`, 'g');

const nonAscii = (s) => (s.match(/[\u0080-\uffff]/g) || []).length;

// Lossy variant: the lead bytes were already replaced by U+FFFD but the
// UTF-8 continuation byte survived as a raw char. The tail byte alone
// identifies the original (E2 80 9D -> ”). Bare U+FFFD with no tail is
// unrecoverable and reported, not guessed.
const TAIL_CHARS = {
  '': '‘', '': '’', '': '“', '': '”',
  '': '–', '': '—', '': '•', '¦': '…',
  '': '…', ' ': ' ', '·': '·',
};
const LOSSY = /\ufffd+([\u0080-\u00bf])/g;

const repairLossy = (text) => {
  let out = '', last = 0, changed = false;
  for (const m of text.matchAll(LOSSY)) {
    const rep = TAIL_CHARS[m[1]];
    if (!rep) continue;
    out += text.slice(last, m.index) + rep;
    last = m.index + m[0].length;
    changed = true;
  }
  return changed ? out + text.slice(last) : null;
};

const repair = (text) => {
  let out = '', last = 0, changed = false;
  for (const m of text.matchAll(CANDIDATE)) {
    const run = m[0];
    const bytes = [...run].map(toByte);
    if (bytes.some((b) => b === null)) continue;
    let decoded;
    try {
      decoded = new TextDecoder('utf-8', { fatal: true }).decode(Uint8Array.from(bytes));
    } catch { continue; }
    if (decoded.includes('�') || nonAscii(decoded) >= nonAscii(run)) continue;
    out += text.slice(last, m.index) + decoded;
    last = m.index + run.length;
    changed = true;
  }
  return changed ? out + text.slice(last) : null;
};

const files = execSync('git ls-files', { encoding: 'utf8' })
  .split('\n')
  .filter((f) => /\.(md|mdc|txt|markdown|adoc)$/i.test(f));

const hits = [];
for (const f of files) {
  let text;
  try { text = readFileSync(f, 'utf8'); } catch { continue; }
  let cur = repairLossy(text) ?? text;
  cur = repair(cur) ?? cur;
  if (cur === text) continue;
  if (FIX) {
    writeFileSync(f, cur);
    hits.push(`${f} (repaired)`);
  } else {
    hits.push(f);
  }
}

if (hits.length) {
  console.log(`${FIX ? 'repaired' : 'mojibake found'} in ${hits.length} file(s):`);
  hits.forEach((h) => console.log(`  ${h}`));
  process.exit(FIX ? 0 : 1);
}
console.log(`mojibake: clean (${files.length} text files scanned)`);
