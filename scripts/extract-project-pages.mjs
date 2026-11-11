import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pdf } from "pdf-to-img";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pdfPath = path.join(root, "public", "T&T Carta.pdf");
const outDir = path.join(root, "public", "proyectos-fuente");
const wanted = new Set([6, 7, 8, 10, 11]);

await mkdir(outDir, { recursive: true });

const doc = await pdf(pdfPath, { scale: 1.5 });
let pageNum = 0;
for await (const image of doc) {
  pageNum += 1;
  if (wanted.has(pageNum)) {
    const outPath = path.join(outDir, `pagina-${pageNum}.png`);
    await writeFile(outPath, image);
    console.log("Wrote", outPath);
  }
  if (pageNum >= 11 && wanted.size === 0) break;
  if (pageNum >= 11) break;
}
