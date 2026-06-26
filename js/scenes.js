/* ============================================================
   EVENT ILLUSTRATIONS  (FFScene)  — Kingdom Hearts
   FFScene(key) -> inner SVG markup for a 0 0 200 100 banner.
   Flat, atmospheric vector scenes; no gradient <defs>.
   ============================================================ */

function FFScene(key) {
  const sky = (a, b) =>
    `<rect width="200" height="100" fill="${a}"/>` +
    `<rect width="200" height="60" fill="${b}" opacity="0.6"/>`;
  const stars = (n, c) => {
    let s = "";
    const xs = [12,28,47,63,80,96,112,131,148,166,182,193,38,72,121,158];
    const ys = [14,30,9,22,12,28,18,8,24,14,30,12,40,6,34,20];
    for (let i = 0; i < n; i++) s += `<circle cx="${xs[i%xs.length]}" cy="${ys[i%ys.length]}" r="${i%3?0.7:1.1}" fill="${c||'#cfe'}" opacity="0.6"/>`;
    return s;
  };
  const ground = (c, y) => `<path d="M0 ${y} L200 ${y} L200 100 L0 100 Z" fill="${c}"/>`;

  switch (key) {
    case "bookofprophecies":
      return sky("#0a0e1c", "#161232") + stars(8, "#e8d9a0")
        + `<g transform="translate(100,62)"><path d="M-32 -2 Q0 -12 0 -2 L0 20 Q-30 12 -32 20 Z" fill="#15203a" stroke="#caa84a" stroke-width="1"/><path d="M32 -2 Q0 -12 0 -2 L0 20 Q30 12 32 20 Z" fill="#1a2742" stroke="#caa84a" stroke-width="1"/><line x1="0" y1="-7" x2="0" y2="20" stroke="#caa84a" stroke-width="1.2"/></g>`
        + `<ellipse cx="100" cy="56" rx="30" ry="14" fill="#f0c44e" opacity="0.12"/>`
        + kb(100, 22, 24, "#f0e0a0");

    case "keybladewar":
      return sky("#1a0e0a", "#2a140e") + heart(150, 32, 18, "#3a1a1a")
        + `<path d="M150 14 A18 18 0 0 1 150 50" stroke="#e2576b" stroke-width="1" fill="none" opacity="0.6"/>`
        + ground("#160c08", 66)
        + kb(36, 50, 30, "#9aa0ac") + kb(60, 58, 26, "#8a8f9a") + kb(96, 46, 34, "#aab0bc")
        + kb(128, 56, 28, "#8a8f9a") + kb(160, 52, 30, "#9aa0ac") + kb(80, 62, 22, "#7a808a")
        + `<ellipse cx="100" cy="20" rx="90" ry="14" fill="#2a140e" opacity="0.5"/>`;

    case "dandelions":
      return sky("#0c1228", "#1c2548") + stars(6, "#cfe")
        + `<circle cx="150" cy="34" r="4" fill="#f0e0a0"/><circle cx="150" cy="34" r="11" fill="#f0e0a0" opacity="0.16"/>`
        + dandelion(40, 60) + dandelion(70, 46) + dandelion(104, 64) + dandelion(126, 50) + dandelion(86, 78)
        + ground("#101a2e", 84);

    case "twomasters":
      return sky("#0e0c1a", "#1a1630") + stars(5, "#cdb")
        + `<g transform="rotate(24 100 56)">` + kb(100, 26, 56, "#f0c44e") + `</g>`
        + `<g transform="rotate(-24 100 56)">` + kb(100, 26, 56, "#b15cff") + `</g>`
        + `<circle cx="100" cy="56" r="6" fill="#fff" opacity="0.5"/>`;

    case "vanitascreation":
      return sky("#0e0c18", "#1a1228")
        + heart(100, 50, 26, "#1a1422")
        + `<path d="M100 28 C 81 38, 81 56, 100 72 L100 28 Z" fill="#e8eef2"/>`
        + `<path d="M100 28 C 119 38, 119 56, 100 72 L100 28 Z" fill="#15121c"/>`
        + `<path d="M100 24 L96 40 L102 52 L97 70" stroke="#b15cff" stroke-width="1.4" fill="none" opacity="0.85"/>`
        + `<circle cx="100" cy="50" r="30" fill="#b15cff" opacity="0.08"/>`;

    case "bbstrio":
      return sky("#0c1424", "#172642") + stars(6, "#cfe")
        + `<g stroke="#5a6a8a" stroke-width="1" opacity="0.6"><line x1="60" y1="56" x2="100" y2="40"/><line x1="100" y1="40" x2="140" y2="56"/><line x1="60" y1="56" x2="140" y2="56"/></g>`
        + star(60, 56, 1.3, "#5ad6a0") + star(100, 40, 1.5, "#f0a84a") + star(140, 56, 1.3, "#5aa6ff");

    case "graveyardclash":
      return sky("#171008", "#241608") + ground("#140c06", 64)
        + `<path d="M0 64 Q60 56 120 64 Q170 60 200 64 L200 100 L0 100 Z" fill="#1a1108"/>`
        + kb(30, 50, 30, "#8a8270") + kb(54, 58, 26, "#7a7466") + kb(150, 52, 30, "#8a8270")
        + kb(172, 60, 24, "#7a7466") + kb(120, 54, 28, "#9a9078") + kb(90, 60, 22, "#7a7466")
        + `<ellipse cx="100" cy="18" rx="92" ry="16" fill="#2a1808" opacity="0.6"/>`
        + `<g stroke="#5a4a2a" stroke-width="0.8" opacity="0.4"><line x1="0" y1="78" x2="200" y2="74"/></g>`;

    case "realmofdarkness":
      return `<rect width="200" height="100" fill="#070a14"/><rect width="200" height="60" fill="#0c1326" opacity="0.7"/>`
        + `<circle cx="150" cy="30" r="10" fill="#2a3a5a" opacity="0.5"/>`
        + `<rect x="0" y="74" width="200" height="26" fill="#0a0f1e"/>`
        + `<g stroke="#1c2a44" stroke-width="0.8" opacity="0.6"><path d="M10 84 Q40 80 70 84"/><path d="M120 90 Q150 86 190 90"/></g>`
        + `<path d="M96 74 Q95 62 100 58 Q105 62 104 74 Z" fill="#2a3550"/><circle cx="100" cy="54" r="3.5" fill="#3a4a6a"/>`
        + `<ellipse cx="100" cy="74" rx="22" ry="4" fill="#0c1326"/>`;

    case "heartlessfall":
      return sky("#120a14", "#20102a") + ground("#0c0810", 66)
        + `<g fill="#160e1c"><rect x="26" y="40" width="20" height="26"/><rect x="52" y="30" width="24" height="36"/><rect x="150" y="36" width="22" height="30"/></g>`
        + `<g transform="translate(108,42)"><path d="M0 12 C -14 -3, -8 -14, 0 -6 C 8 -14, 14 -3, 0 12 Z" fill="#1a0e1c" stroke="#e2576b" stroke-width="1.5"/><path d="M-4 -2 L0 4 L4 -2 M0 -8 L0 8" stroke="#e2576b" stroke-width="1" opacity="0.7"/></g>`
        + `<circle cx="108" cy="42" r="20" fill="#e2576b" opacity="0.12"/>`
        + `<g fill="#b15cff" opacity="0.6"><path d="M70 70 q-3 -5 0 -8 q3 3 0 8" /><path d="M134 64 q-3 -5 0 -8 q3 3 0 8"/></g>`;

    case "destinyislands":
      return `<rect width="200" height="100" fill="#f0a85a"/><rect width="200" height="58" fill="#f0c46a" opacity="0.7"/>`
        + `<circle cx="150" cy="30" r="13" fill="#fff3c0" opacity="0.85"/>`
        + `<rect x="0" y="66" width="200" height="34" fill="#3a6a9a"/>`
        + `<g stroke="#5a8ab0" stroke-width="1" opacity="0.6"><line x1="20" y1="76" x2="70" y2="76"/><line x1="120" y1="86" x2="180" y2="86"/></g>`
        + `<path d="M30 66 Q40 64 60 66 Z" fill="#caa06a"/>`
        + `<path d="M44 66 Q40 50 52 44 Q44 52 48 66 Z" fill="#3a2a1a"/>`
        + `<g transform="translate(54,42)"><path d="M0 0 L2.35 6.76 L9.51 6.91 L3.8 11.24 L5.88 18.09 L0 14 L-5.88 18.09 L-3.8 11.24 L-9.51 6.91 L-2.35 6.76 Z" fill="#f0d84a" transform="scale(0.9)"/></g>`;

    case "keyblade":
      return sky("#0c1424", "#1a2848") + stars(6, "#cfe") + ground("#101826", 78)
        + `<path d="M86 0 L114 0 L106 100 L94 100 Z" fill="#fff7d0" opacity="0.12"/>`
        + kb(100, 14, 64, "#e8e2c0")
        + `<circle cx="100" cy="78" r="16" fill="#f0c44e" opacity="0.14"/>`;

    case "maleficentcouncil":
      return sky("#0a120c", "#0e1f12") + ground("#0a140d", 72)
        + `<g transform="translate(100,52)"><circle r="20" fill="none" stroke="#2a3a2a" stroke-width="2"/><g stroke="#3a5a3a" stroke-width="1.5"><line x1="0" y1="-20" x2="0" y2="20"/><line x1="-20" y1="0" x2="20" y2="0"/><line x1="-14" y1="-14" x2="14" y2="14"/><line x1="-14" y1="14" x2="14" y2="-14"/></g><circle r="3" fill="#3a5a3a"/></g>`
        + flame(40, 60, "#3adf6a") + flame(160, 58, "#3adf6a") + flame(60, 66, "#5aef8a")
        + `<ellipse cx="100" cy="52" rx="34" ry="22" fill="#3adf6a" opacity="0.1"/>`;

    case "doortodarkness":
      return sky("#0c0e16", "#161826")
        + `<rect x="58" y="20" width="84" height="74" rx="4" fill="#1a1e2c" stroke="#3a4258" stroke-width="1.5"/>`
        + `<rect x="62" y="24" width="38" height="66" fill="#e8eef6" opacity="0.85"/>`
        + `<rect x="100" y="24" width="38" height="66" fill="#0a0a12"/>`
        + `<line x1="100" y1="22" x2="100" y2="92" stroke="#3a4258" stroke-width="2"/>`
        + `<circle cx="100" cy="57" r="8" fill="#caa84a" opacity="0.5"/><circle cx="100" cy="57" r="16" fill="#f0c44e" opacity="0.12"/>`;

    case "castleoblivion":
      return sky("#0e1424", "#1c2742") + stars(5, "#cfe")
        + `<g fill="#dfe6f2" opacity="0.92"><path d="M70 84 L70 50 L80 40 L80 84 Z"/><path d="M120 84 L120 50 L130 40 L130 84 Z"/><path d="M88 84 L88 34 L100 22 L112 34 L112 84 Z"/></g>`
        + `<rect x="0" y="84" width="200" height="16" fill="#101a2e"/>`
        + `<g fill="#cfe" opacity="0.55"><rect x="40" y="40" width="9" height="12" rx="1" transform="rotate(-12 44 46)"/><rect x="150" y="46" width="9" height="12" rx="1" transform="rotate(14 154 52)"/><rect x="56" y="62" width="8" height="11" rx="1" transform="rotate(8 60 68)"/></g>`;

    case "roxasxion":
      return `<rect width="200" height="100" fill="#e88a4a"/><rect width="200" height="60" fill="#f0b05a" opacity="0.7"/>`
        + `<circle cx="40" cy="30" r="14" fill="#fff0c0" opacity="0.8"/>`
        + `<rect x="120" y="0" width="60" height="100" fill="#7a4a3a"/>`
        + `<circle cx="150" cy="34" r="16" fill="#e8d6a0" stroke="#7a4a3a" stroke-width="2"/><g stroke="#7a4a3a" stroke-width="1.5"><line x1="150" y1="34" x2="150" y2="22"/><line x1="150" y1="34" x2="160" y2="38"/></g>`
        + `<rect x="0" y="74" width="120" height="6" fill="#5a3a2a"/>`
        + `<g><circle cx="40" cy="68" r="4" fill="#1a120c"/><circle cx="54" cy="68" r="4" fill="#1a120c"/><circle cx="68" cy="68" r="4" fill="#1a120c"/></g>`
        + `<g fill="#5ad6ff"><rect x="38" y="58" width="3" height="9" rx="1"/><rect x="52" y="58" width="3" height="9" rx="1"/><rect x="66" y="58" width="3" height="9" rx="1"/></g>`;

    case "faketwilight":
      return `<rect width="200" height="100" fill="#0a1410"/><rect width="200" height="60" fill="#0e2014" opacity="0.7"/>`
        + `<g stroke="#1c3a24" stroke-width="0.8" opacity="0.7">`
        + `<line x1="0" y1="40" x2="200" y2="40"/><line x1="0" y1="56" x2="200" y2="56"/><line x1="0" y1="72" x2="200" y2="72"/><line x1="0" y1="88" x2="200" y2="88"/>`
        + `<line x1="40" y1="30" x2="40" y2="100"/><line x1="90" y1="30" x2="90" y2="100"/><line x1="140" y1="30" x2="140" y2="100"/></g>`
        + `<g fill="#7adf6a" opacity="0.7"><rect x="60" y="44" width="20" height="26"/><rect x="110" y="50" width="16" height="20"/></g>`
        + `<g fill="#cfeacc" opacity="0.6"><rect x="36" y="38" width="3" height="3"/><rect x="138" y="54" width="3" height="3"/><rect x="92" y="70" width="3" height="3"/></g>`;

    case "orgkingdomhearts":
      return sky("#0c0e1a", "#161830")
        + heart(100, 34, 22, "#f0d86a")
        + `<circle cx="100" cy="34" r="30" fill="#f0d86a" opacity="0.12"/>`
        + ground("#0a0c16", 70)
        + `<g fill="#14162a"><rect x="40" y="44" width="16" height="26"/><rect x="70" y="36" width="20" height="34"/><rect x="110" y="40" width="18" height="30"/><rect x="146" y="48" width="14" height="22"/></g>`;

    case "journal":
      return sky("#0c1220", "#18223a") + stars(5, "#cfe")
        + `<g transform="translate(100,58)"><rect x="-26" y="-18" width="52" height="36" rx="3" fill="#2a6a3a" stroke="#caa84a" stroke-width="1.5"/><rect x="-26" y="-18" width="8" height="36" fill="#1f5230"/><rect x="14" y="-22" width="6" height="20" fill="#e2576b"/></g>`
        + `<ellipse cx="100" cy="58" rx="34" ry="16" fill="#7adf6a" opacity="0.1"/>`
        + `<text x="100" y="60" font-family="monospace" font-size="9" fill="#cfeacc" text-anchor="middle" opacity="0.8">✶</text>`;

    case "timetravel":
      return sky("#100c1e", "#1c1636") + stars(5, "#cdb")
        + `<g transform="translate(82,52)"><circle r="22" fill="#15182c" stroke="#b06aff" stroke-width="1.5"/><g stroke="#b06aff" stroke-width="1.2"><line x1="0" y1="0" x2="0" y2="-15"/><line x1="0" y1="0" x2="11" y2="6"/></g><circle r="2" fill="#b06aff"/></g>`
        + `<g stroke="#6a5a8a" stroke-width="1" opacity="0.6" fill="none"><circle cx="120" cy="64" r="8"/><circle cx="134" cy="52" r="5"/></g>`
        + kb(150, 28, 30, "#d8c4f0");

    case "guardians":
      return sky("#0e0c1c", "#1a1636") + stars(6, "#cfe")
        + `<g>` + lightOrb(46, 60) + lightOrb(66, 50) + lightOrb(86, 44) + lightOrb(106, 42) + lightOrb(126, 44) + lightOrb(146, 50) + lightOrb(166, 60) + `</g>`
        + `<path d="M46 60 Q106 30 166 60" stroke="#f0c44e" stroke-width="1" fill="none" opacity="0.4"/>`;

    case "finalkeyblade":
      return sky("#161024", "#241640") + heart(100, 26, 16, "#3a2a4a")
        + `<circle cx="100" cy="26" r="22" fill="#f0d86a" opacity="0.12"/>`
        + ground("#0e0a1a", 70)
        + `<g transform="rotate(28 80 60)">` + kb(80, 36, 40, "#f0c44e") + `</g>`
        + `<g transform="rotate(-28 120 60)">` + kb(120, 36, 40, "#b15cff") + `</g>`
        + `<g fill="#fff" opacity="0.8"><circle cx="100" cy="58" r="2"/><circle cx="92" cy="50" r="1.2"/><circle cx="110" cy="52" r="1.2"/></g>`
        + kb(40, 52, 28, "#8a8f9a") + kb(160, 52, 28, "#8a8f9a");

    case "theprice":
      return sky("#0e1426", "#1c2848") + stars(7, "#cfe")
        + `<path d="M92 92 Q90 66 100 56 Q110 66 108 92 Z" fill="#1a2740" opacity="0.7"/>`
        + `<ellipse cx="100" cy="48" rx="7" ry="9" fill="#2a3a58" opacity="0.7"/>`
        + `<g fill="#cfe4ff">`
        + `<circle cx="100" cy="40" r="2" opacity="0.9"/><circle cx="94" cy="32" r="1.6" opacity="0.8"/><circle cx="108" cy="30" r="1.6" opacity="0.8"/><circle cx="100" cy="22" r="1.3" opacity="0.7"/><circle cx="90" cy="20" r="1.1" opacity="0.6"/><circle cx="112" cy="18" r="1.1" opacity="0.6"/><circle cx="100" cy="12" r="1" opacity="0.5"/>`
        + `</g>`
        + `<circle cx="100" cy="50" r="16" fill="#5ad6ff" opacity="0.1"/>`;

    case "quadratum":
      return `<rect width="200" height="100" fill="#0a0e1c"/><rect width="200" height="56" fill="#10182e" opacity="0.8"/>`
        + `<g fill="#cfe" opacity="0.4">` + stars(6, "#cfe") + `</g>`
        + ground("#0c1120", 66)
        + `<g fill="#141c30" stroke="#1c2840" stroke-width="0.8"><rect x="20" y="34" width="18" height="32"/><rect x="44" y="22" width="22" height="44"/><rect x="72" y="40" width="16" height="26"/><rect x="120" y="28" width="20" height="38"/><rect x="146" y="38" width="18" height="28"/><rect x="168" y="20" width="16" height="46"/></g>`
        + `<g fill="#5ad6ff" opacity="0.85"><rect x="48" y="28" width="14" height="3"/><rect x="124" y="34" width="12" height="3"/><rect x="171" y="26" width="10" height="3"/></g>`
        + `<g fill="#ff5a9a" opacity="0.7"><rect x="26" y="40" width="8" height="2"/><rect x="150" y="44" width="9" height="2"/></g>`
        + `<path d="M96 14 L98 8 L100 14 L106 14 L101 18 L103 24 L98 20 L93 24 L95 18 L90 14 Z" fill="#5ad6ff" opacity="0.6" transform="rotate(180 98 16)"/>`;

    default:
      return sky("#0c1020", "#16203a")
        + `<circle cx="100" cy="46" r="10" fill="#f0c44e" opacity="0.3"/><circle cx="100" cy="46" r="20" fill="#f0c44e" opacity="0.1"/>`;
  }

  // ---- helpers ----
  function kb(cx, top, len, col) {
    const bot = top + len;
    return `<g stroke="${col}" stroke-width="2.4" stroke-linecap="round" fill="none"><line x1="${cx}" y1="${top + 5}" x2="${cx}" y2="${bot - 6}"/></g>`
      + `<rect x="${cx - 1.5}" y="${top}" width="7" height="3" fill="${col}"/>`
      + `<rect x="${cx - 6}" y="${top + 5}" width="12" height="3" rx="1" fill="${col}"/>`
      + `<circle cx="${cx}" cy="${bot - 3}" r="4.5" fill="none" stroke="${col}" stroke-width="2.4"/>`;
  }
  function heart(cx, cy, r, fill) {
    return `<path d="M${cx} ${cy + r * 0.85} C ${cx - r * 1.3} ${cy - r * 0.1}, ${cx - r * 0.55} ${cy - r * 1.05}, ${cx} ${cy - r * 0.35} C ${cx + r * 0.55} ${cy - r * 1.05}, ${cx + r * 1.3} ${cy - r * 0.1}, ${cx} ${cy + r * 0.85} Z" fill="${fill}"/>`;
  }
  function star(cx, cy, sc, fill) {
    return `<g transform="translate(${cx},${cy}) scale(${sc})"><path d="M0 -10 L2.35 -3.24 L9.51 -3.09 L3.8 1.24 L5.88 8.09 L0 4 L-5.88 8.09 L-3.8 1.24 L-9.51 -3.09 L-2.35 -3.24 Z" fill="${fill}"/></g>`;
  }
  function dandelion(x, y) {
    let s = `<g transform="translate(${x},${y})">`;
    s += `<circle r="2.2" fill="#f0ecd0" opacity="0.5"/>`;
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      s += `<line x1="0" y1="0" x2="${(Math.cos(a) * 5).toFixed(1)}" y2="${(Math.sin(a) * 5).toFixed(1)}" stroke="#e8e4c8" stroke-width="0.7" opacity="0.7"/>`;
    }
    s += `</g>`;
    return s;
  }
  function flame(x, y, c) {
    return `<g transform="translate(${x},${y})"><path d="M0 0 q-7 -10 0 -22 q3 8 4 4 q5 -8 2 -16 q10 12 4 28 q-2 8 -10 6 Z" fill="${c}" opacity="0.85"/></g>`;
  }
  function lightOrb(x, y) {
    return `<g transform="translate(${x},${y})"><circle r="9" fill="#f0c44e" opacity="0.16"/><circle r="3.4" fill="#f7e6a8"/><circle r="3.4" fill="none" stroke="#f0c44e" stroke-width="1"/></g>`;
  }
}
