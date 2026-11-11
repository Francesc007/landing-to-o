import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcDir = path.join(root, "public", "Clientes");
const outDir = path.join(srcDir, "logos");

const sources = [
  { file: "T&T Carta.png", slug: "new-era" },
  { file: "T&T Carta (1).png", slug: "sypris" },
  { file: "T&T Carta (2).png", slug: "genomma-lab" },
  { file: "T&T Carta (3).png", slug: "city-junior" },
  { file: "T&T Carta (4).png", slug: "sct" },
  { file: "T&T Carta (5).png", slug: "grimann" },
  { file: "T&T Carta (6).png", slug: "bomanite" },
  { file: "T&T Carta (7).png", slug: "tianguistenco" },
  { file: "T&T Carta (8).png", slug: "ocuilan" },
  { file: "T&T Carta (9).png", slug: "san-mateo-atenco" },
  { file: "T&T Carta (10).png", slug: "capulhuac" },
  { file: "T&T Carta (11).png", slug: "toluca" },
  { file: "T&T Carta (12).png", slug: "gtm" },
];

const PAD = 16;

await mkdir(outDir, { recursive: true });

for (const { file, slug } of sources) {
  const input = path.join(srcDir, file);
  const trimmed = await sharp(input).trim({ threshold: 12 }).png().toBuffer();
  const meta = await sharp(trimmed).metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;
  if (!width || !height) throw new Error(`Sin tamaño: ${file}`);

  const out = path.join(outDir, `${slug}.png`);
  await sharp({
    create: {
      width: width + PAD * 2,
      height: height + PAD * 2,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite([{ input: trimmed, left: PAD, top: PAD }])
    .png({ compressionLevel: 9 })
    .toFile(out);

  console.log("Wrote", slug, width, "x", height);
}
