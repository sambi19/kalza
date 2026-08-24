/* ==========================================================================
   Kalza — generador de archivos de marca
   Uso:  node tools/generar-logo.js
   Crea los SVG y PNG del logo en assets/brand/. No necesita dependencias.
   ========================================================================== */

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const OUT = path.join(__dirname, "..", "assets", "brand");
fs.mkdirSync(OUT, { recursive: true });

/* ---------- Paleta de marca ---------- */
const INK = [17, 17, 16];
const PAPER = [250, 248, 244];
const ACCENT = [232, 71, 31];

/* ---------- Geometría del monograma K (en una grilla de 24×24) ----------
   Tres formas macizas: el asta vertical, el brazo superior en cuña y el
   brazo inferior en diagonal. Las mismas coordenadas que usa el sitio. */
const K_SHAPES = [
  [[4.5, 3.4], [8.6, 3.4], [8.6, 20.6], [4.5, 20.6]],
  [[20.0, 3.4], [14.6, 3.4], [8.6, 10.5], [8.6, 15.5]],
  [[11.6, 11.3], [20.4, 20.6], [15.0, 20.6], [8.6, 13.8]]
];

/* ==========================================================================
   SVG
   ========================================================================== */
const rgb = c => `rgb(${c[0]},${c[1]},${c[2]})`;
const kPaths = fill =>
  K_SHAPES.map(pts =>
    `<path fill="${fill}" d="M${pts.map(p => p.join(" ")).join("L")}Z"/>`
  ).join("");

function svgTile(bg, fg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect width="24" height="24" rx="6.5" fill="${rgb(bg)}"/>
  ${kPaths(rgb(fg))}
</svg>
`;
}

function svgMarkOnly(fg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  ${kPaths(rgb(fg))}
</svg>
`;
}

/* Lockup horizontal: monograma + palabra KALZA */
function svgLockup(bg, fg, transparent) {
  const bgRect = transparent ? "" : `<rect width="200" height="52" fill="${rgb(bg)}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 52" width="200" height="52">
  ${bgRect}
  <g transform="translate(0 5) scale(1.75)">
    <rect width="24" height="24" rx="6.5" fill="${rgb(fg)}"/>
    ${kPaths(rgb(transparent ? bg : bg))}
  </g>
  <text x="56" y="34" font-family="Archivo, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        font-size="27" font-weight="900" letter-spacing="3" fill="${rgb(fg)}">KALZA</text>
</svg>
`;
}

fs.writeFileSync(path.join(OUT, "kalza-mark.svg"), svgTile(INK, PAPER));
fs.writeFileSync(path.join(OUT, "kalza-mark-accent.svg"), svgTile(ACCENT, PAPER));
fs.writeFileSync(path.join(OUT, "kalza-mark-invertido.svg"), svgTile(PAPER, INK));
fs.writeFileSync(path.join(OUT, "kalza-k-sola.svg"), svgMarkOnly(INK));
fs.writeFileSync(path.join(OUT, "kalza-logo-horizontal.svg"), svgLockup(PAPER, INK, false));
fs.writeFileSync(path.join(OUT, "kalza-logo-horizontal-oscuro.svg"), svgLockup(INK, PAPER, false));

/* ==========================================================================
   PNG — rasterizador propio con antialiasing por supermuestreo
   ========================================================================== */

/** ¿El punto cae dentro del polígono? (regla par-impar) */
function inPolygon(px, py, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i], [xj, yj] = pts[j];
    if ((yi > py) !== (yj > py) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

/** ¿El punto cae dentro del rectángulo redondeado? */
function inRoundRect(px, py, w, h, r) {
  if (px < 0 || py < 0 || px > w || py > h) return false;
  const cx = Math.min(Math.max(px, r), w - r);
  const cy = Math.min(Math.max(py, r), h - r);
  const dx = px - cx, dy = py - cy;
  return dx * dx + dy * dy <= r * r;
}

/**
 * Dibuja el logo en un búfer RGBA.
 * @param {number} size  lado en píxeles
 * @param {object} opt   { tile: bool, bg, fg, radius (0-1), pad (0-1) }
 */
function renderPNG(size, opt) {
  const SS = 4;                       // 4×4 muestras por píxel
  const buf = Buffer.alloc(size * size * 4, 0);
  const scale = size / 24;
  const r = (opt.radius ?? 0.27) * size;
  const pad = (opt.pad ?? 0) * size;
  const inner = size - pad * 2;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let covTile = 0, covK = 0;

      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const px = x + (sx + 0.5) / SS;
          const py = y + (sy + 0.5) / SS;

          if (opt.tile && inRoundRect(px - pad, py - pad, inner, inner, r)) covTile++;

          // Coordenadas del monograma dentro del área útil
          const kx = ((px - pad) / inner) * 24;
          const ky = ((py - pad) / inner) * 24;
          if (K_SHAPES.some(s => inPolygon(kx, ky, s))) covK++;
        }
      }

      const total = SS * SS;
      const aTile = covTile / total;
      const aK = covK / total;
      const i = (y * size + x) * 4;

      if (opt.tile) {
        // Fondo del azulejo y encima la K
        const a = aTile;
        const kOver = Math.min(aK, aTile);
        for (let c = 0; c < 3; c++) {
          buf[i + c] = Math.round(opt.bg[c] * (1 - kOver / (a || 1)) + opt.fg[c] * (kOver / (a || 1)));
        }
        buf[i + 3] = Math.round(a * 255);
      } else {
        // Solo la K, fondo transparente
        for (let c = 0; c < 3; c++) buf[i + c] = opt.fg[c];
        buf[i + 3] = Math.round(aK * 255);
      }
    }
  }
  return buf;
}

/* ---------- Codificador PNG mínimo ---------- */
const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function encodePNG(rgba, size) {
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;                       // filtro None
    rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;    // bits por canal
  ihdr[9] = 6;    // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ]);
}

const png = (file, size, opt) => {
  fs.writeFileSync(path.join(OUT, file), encodePNG(renderPNG(size, opt), size));
  console.log("  " + file + "  (" + size + "×" + size + ")");
};

console.log("SVG y PNG de Kalza en assets/brand/:");

// Avatar para redes sociales: azulejo negro, K crema, con aire alrededor
png("kalza-avatar-1024.png", 1024, { tile: true, bg: INK, fg: PAPER, radius: 0.22, pad: 0.06 });
png("kalza-avatar-512.png",   512, { tile: true, bg: INK, fg: PAPER, radius: 0.22, pad: 0.06 });
// Versión con el naranja de marca
png("kalza-avatar-accent-1024.png", 1024, { tile: true, bg: ACCENT, fg: PAPER, radius: 0.22, pad: 0.06 });
// Azulejo claro para fondos oscuros
png("kalza-avatar-claro-1024.png", 1024, { tile: true, bg: PAPER, fg: INK, radius: 0.22, pad: 0.06 });
// Monograma suelto con fondo transparente
png("kalza-k-negra-1024.png", 1024, { tile: false, fg: INK, pad: 0.08 });
png("kalza-k-crema-1024.png", 1024, { tile: false, fg: PAPER, pad: 0.08 });
// Favicon
png("kalza-favicon-256.png", 256, { tile: true, bg: INK, fg: PAPER, radius: 0.27, pad: 0 });

console.log("\nListo.");
