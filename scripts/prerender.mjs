// Static prerender for GitHub Pages.
//
// TanStack Start is SSR-first: `vite build` emits a client bundle (dist/client)
// plus a server fetch handler (dist/server/server.js) but no static HTML. We
// render every page to static HTML by running the built server handler
// in-process and crawling internal links starting from the base path, plus a
// few raw server routes (e.g. sitemap.xml). Output is written into dist/client
// so it can be published as-is to GitHub Pages.
//
// Note: server functions (e.g. the contact form's sendContact) are NOT executed
// at runtime on a static host — only the rendered HTML is published.

import { writeFile, cp, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = resolve(import.meta.dirname, "..");
const OUT_DIR = join(ROOT, "dist", "client");
const SERVER_ENTRY = join(ROOT, "dist", "server", "server.js");
const ORIGIN = "http://localhost";

// Base path the site is served from. CI sets BASE_PATH=/jm-biz-boost/.
// Normalize to always start and end with a single slash.
const BASE = `/${(process.env.BASE_PATH || "/").replace(/^\/+|\/+$/g, "")}/`.replace("//", "/");

if (!existsSync(SERVER_ENTRY)) {
  console.error(`✗ Missing ${SERVER_ENTRY}. Run \`vite build\` first.`);
  process.exit(1);
}

const { default: server } = await import(pathToFileURL(SERVER_ENTRY).href);

// Strip the base prefix to map a URL path to a route-relative output path.
const toRelative = (urlPath) => urlPath.slice(BASE.length).replace(/^\/+|\/+$/g, "");

// Internal page links only: same base, no file extension, no hash/query.
const isPageLink = (href) => {
  if (!href.startsWith(BASE)) return false;
  const rest = href.slice(BASE.length);
  if (rest.includes("#") || rest.includes("?")) return false;
  const last = rest.split("/").filter(Boolean).pop() ?? "";
  return !last.includes("."); // skip /assets/*.js, *.css, images, etc.
};

const extractLinks = (html) => [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);

const seen = new Set();
const queue = [BASE];
const rendered = [];

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  seen.add(path);

  const res = await server.fetch(new Request(ORIGIN + path));
  if (res.status !== 200) {
    console.warn(`! ${res.status} ${path} (skipped)`);
    continue;
  }

  const html = await res.text();
  const rel = toRelative(path);
  const file = join(OUT_DIR, rel, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
  rendered.push(rel === "" ? "/" : `/${rel}`);

  for (const href of extractLinks(html)) {
    const clean = href.replace(/[#?].*$/, "");
    if (isPageLink(clean) && !seen.has(clean)) queue.push(clean);
  }
}

// Raw server routes that return non-HTML (e.g. sitemap.xml): render each to a
// literal file so it's published as a static asset.
const RAW_ROUTES = ["sitemap.xml"];
for (const name of RAW_ROUTES) {
  const res = await server.fetch(new Request(ORIGIN + BASE + name));
  if (res.status !== 200) {
    console.warn(`! ${res.status} ${BASE}${name} (skipped)`);
    continue;
  }
  await writeFile(join(OUT_DIR, name), await res.text());
  rendered.push(`/${name}`);
}

// SPA fallback: GitHub Pages serves 404.html for unknown paths; the home shell
// boots the client router, which then renders the requested route.
await cp(join(OUT_DIR, "index.html"), join(OUT_DIR, "404.html"));

// Disable Jekyll so files/folders starting with "_" are published verbatim.
await writeFile(join(OUT_DIR, ".nojekyll"), "");

console.log(`✓ Prerendered ${rendered.length} pages (base "${BASE}"):`);
for (const p of rendered.sort()) console.log(`    ${p}`);
