import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "public", "Clientes", "cartera-p12-full.png");
const outDir = path.join(root, "public", "Clientes");

const names = [
  "new-era",
  "genomma-lab",
  "city-express-junior",
  "sct",
  "sypris-tech",
  "grimann",
  "gtm-inmobiliaria",
  "bomanite",
  "grupo-cosei",
  "ayto-ocuilan",
  "ayto-capulhuac",
  "ayto-santiago-tianguistenco",
  "ayto-donato-guerra",
  "ayto-temoaya",
  "ayto-toluca",
  "ayto-san-mateo-atenco",
];

const meta = await sharp(src).metadata();
const { width, height } = meta;
if (!width || !height) throw new Error("No image dimensions");

// Grid on right side of slide (PDF page 12 @ scale 2)
const gridLeft = Math.round(width * 0.368);
const gridTop = Math.round(height * 0.152);
const gridWidth = width - gridLeft - Math.round(width * 0.03);
const gridHeight = height - gridTop - Math.round(height * 0.05);

const cols = 4;
const rows = 4;
const cellW = Math.floor(gridWidth / cols);
const cellH = Math.floor(gridHeight / rows);
const padX = Math.round(cellW * 0.07);
const logoBoxHeight = Math.round(cellH * 0.28);
const logoTopInset = 0;

for (let i = 0; i < names.length; i++) {
  const col = i % cols;
  const row = Math.floor(i / cols);
  const left = gridLeft + col * cellW + padX;
  const top = gridTop + row * cellH + logoTopInset;
  const w = cellW - padX * 2;
  const h = logoBoxHeight;

  const out = path.join(outDir, `${names[i]}.png`);
  await sharp(src)
    .extract({ left, top, width: w, height: h })
    .png()
    .toFile(out);
  console.log("Wrote", out);
}
