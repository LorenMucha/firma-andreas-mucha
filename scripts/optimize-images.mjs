import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
const photos = {
  heizung: "heizung/therme.png",
  bad: "bad/badewanne.png",
  dach: "dach/kupfer.png",
};
await mkdir("public/images/optimized", { recursive: true });
for (const [name, source] of Object.entries(photos)) {
  console.log(source, (await stat(`public/images/${source}`)).size);
  for (const width of [480, 960]) {
    const output = `public/images/optimized/${name}-${width}.webp`;
    await sharp(`public/images/${source}`)
      .rotate()
      .resize(width, Math.round(width * 0.75), { fit: "cover" })
      .webp({ quality: 78 })
      .toFile(output);
    console.log(output, (await stat(output)).size);
  }
}
