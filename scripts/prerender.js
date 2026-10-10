/**
 * Turns the built SPA into static HTML pages so search engines and social
 * previews (WhatsApp, Facebook, X) see real content and per-page meta tags.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle):
 *   dist/index.html, dist/about.html, ... , dist/404.html, dist/sitemap.xml
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const SITE_URL = "https://olambolainternational.com";

const { render, routes } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

// React 19 emits <title>, <meta> and <link> tags at the start of the markup;
// move them into <head> where they belong.
const HEAD_TAG =
  /^(?:<title>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>)/;

function renderPage(url) {
  let html = render(url);
  let head = "";
  let match;
  while ((match = html.match(HEAD_TAG))) {
    head += match[0];
    html = html.slice(match[0].length);
  }
  if (!head.includes("<title>")) {
    throw new Error(`No <title> rendered for ${url}`);
  }
  return template
    .replace("</head>", `${head}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

function write(file, contents) {
  const target = path.join(distDir, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents);
  console.log(`  ✓ ${file}`);
}

console.log("Prerendering pages...");
for (const { path: route } of routes) {
  // about.html is served at /about (Vercel `cleanUrls`, see vercel.json)
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  write(file, renderPage(route));
}
write("404.html", renderPage("/404"));

const today = new Date().toISOString().split("T")[0];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
write("sitemap.xml", sitemap);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log("Done.");
