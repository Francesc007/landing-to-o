import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pdf } from "pdf-to-img";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pdfPath = path.join(root, "public", "T&T Carta.pdf");
const outDir = path.join(root, "public", "Clientes");

await mkdir(outDir, { recursive: true });

const doc = await pdf(pdfPath, { scale: 2 });
let pageNum = 0;
for await (const image of doc) {
  pageNum += 1;
  if (pageNum === 12) {
  const outPath = path.join(outDir, "cartera-p12-full.png");
    await writeFile(outPath, image);
    console.log("Wrote", outPath);
    break;
  }
}

if (pageNum < 12) {
  console.error("PDF has only", pageNum, "pages; page 12 not found");
  process.exit(1);
}
