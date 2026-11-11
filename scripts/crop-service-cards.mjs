import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const crops = [
  { src: "3.png", out: "servicios-card-obra-civil.png", topFrac: 0.14, heightFrac: 0.42 },
  { src: "3.png", out: "servicios-card-electrico.png", topFrac: 0.48, heightFrac: 0.38 },
  { src: "4.png", out: "servicios-card-consultoria.png", topFrac: 0.14, heightFrac: 0.55 },
];

for (const { src, out, topFrac, heightFrac } of crops) {
  const input = path.join(publicDir, src);
  const meta = await sharp(input).metadata();
  const { width, height } = meta;
  if (!width || !height) throw new Error(`No size for ${src}`);

  const top = Math.round(height * topFrac);
  const h = Math.round(height * heightFrac);
  const left = Math.round(width * 0.22);
  const w = width - left - Math.round(width * 0.04);

  await sharp(input)
    .extract({ left, top, width: w, height: h })
    .png()
    .toFile(path.join(publicDir, out));
  console.log("Wrote", out);
}
