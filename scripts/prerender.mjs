// Escribe dist/<ruta>/index.html para cada página con el HTML ya armado y su <head> propio (react-helmet-async).
// dist/spa.html queda como plantilla vacía para las rutas sin prerender (vercel.json la usa de respaldo).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const DIST = resolve("dist");
const SITE = "https://sabinebistro.com";
const { render, rutasPrerender } = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href);

const plantilla = readFileSync(join(DIST, "index.html"), "utf-8");

// Etiquetas fijas de la plantilla (todas del inicio) que cada página reemplaza por las suyas.
const quitar = [
  /\s*<title>[\s\S]*?<\/title>/,
  /\s*<meta name="description"[^>]*>/,
  /\s*<link rel="canonical"[^>]*>/,
  /\s*<meta property="og:(type|locale|title|description|url|image)"[^>]*>/g,
  /\s*<meta name="twitter:(card|title|description|image)"[^>]*>/g,
];

// Respaldo para rutas sin prerender (p. ej. una URL que no existe): con noindex, para que Google
// no tome URLs basura como copias del inicio. La SPA arma la página que corresponda.
writeFileSync(
  join(DIST, "spa.html"),
  plantilla.replace(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, follow" />'),
);

const errores = [];
for (const ruta of rutasPrerender) {
  const { html, head, lang } = render(ruta);
  let out = plantilla;
  for (const re of quitar) out = out.replace(re, "");
  out = out
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root" data-ruta="${ruta}">${html}</div>`);

  const canonical = (out.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/) || out.match(/<link[^>]*href="([^"]+)"[^>]*rel="canonical"/) || [])[1];
  if (canonical !== SITE + ruta) errores.push(`${ruta}: canonical ${canonical} ≠ ${SITE + ruta}`);
  if ((out.match(/rel="canonical"/g) || []).length !== 1) errores.push(`${ruta}: no hay exactamente un canonical`);
  if ((out.match(/<title/g) || []).length !== 1) errores.push(`${ruta}: no hay exactamente un title`);
  if (html.length < 1500) errores.push(`${ruta}: contenido casi vacío (${html.length} caracteres)`);

  const archivo = ruta === "/" ? join(DIST, "index.html") : join(DIST, ruta.replace(/^\/|\/$/g, ""), "index.html");
  mkdirSync(dirname(archivo), { recursive: true });
  writeFileSync(archivo, out);
  console.log(`prerender ${ruta.padEnd(20)} → ${archivo.replace(DIST, "dist")} (${Math.round(out.length / 1024)} KB, ${lang})`);
}

if (errores.length) {
  console.error("\nPrerender con errores:\n- " + errores.join("\n- "));
  process.exit(1);
}
console.log(`\n${rutasPrerender.length} páginas prerenderizadas.`);
