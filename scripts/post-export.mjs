import { copyFile, writeFile, rm, readdir } from "node:fs/promises";
// Keep legacy .html URLs directly usable without host rewrites.
for (const route of ["impressum", "datenschutz"])
  await copyFile(`out/${route}/index.html`, `out/${route}.html`);
await writeFile("out/.nojekyll", "");
// Retain sources in the repository, but exclude originals from deployment.
for (const dir of await readdir("out/images"))
  if (dir !== "optimized") await rm(`out/images/${dir}`, { recursive: true });

for (const file of ["next.svg", "vercel.svg"])
  await rm(`out/${file}`, { force: true });
