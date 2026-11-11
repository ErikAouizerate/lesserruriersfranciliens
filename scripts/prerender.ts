// Prerenders every route to static HTML after `vite build` (client) and
// `vite build --ssr` (server). Also writes 404.html, legacy redirects, sitemap.xml
// and robots.txt. Run with Node >= 23 (native TypeScript type stripping).
import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

type PageMeta = { path: string; priority?: number; noindex?: boolean };
type ServerEntry = {
  render: (url: string) => string;
  pages: PageMeta[];
  notFoundMeta: PageMeta;
  legacyRedirects: Record<string, string>;
  renderHeadTags: (meta: PageMeta) => string;
  siteUrl: string;
  absoluteUrl: (path: string) => string;
};

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const serverDir = path.join(root, 'dist-server');

const entry = (await import(
  pathToFileURL(path.join(serverDir, 'entry-server.js')).href
)) as ServerEntry;
const template = await readFile(path.join(dist, 'index.html'), 'utf8');

const fileFor = (route: string) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

function page(meta: PageMeta, url: string) {
  return template
    .replace('<!--app-head-->', entry.renderHeadTags(meta))
    .replace('<!--app-html-->', entry.render(url));
}

for (const meta of entry.pages) {
  await writeFile(path.join(dist, fileFor(meta.path)), page(meta, meta.path));
  console.log(`prerendered ${meta.path}`);
}

// GitHub Pages serves 404.html for unknown URLs.
await writeFile(path.join(dist, '404.html'), page(entry.notFoundMeta, '/404'));

// GitHub Pages cannot send 301s: meta refresh + canonical is the closest equivalent.
for (const [from, to] of Object.entries(entry.legacyRedirects)) {
  const target = entry.absoluteUrl(to);
  await writeFile(
    path.join(dist, fileFor(from)),
    `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Redirection</title>` +
      `<link rel="canonical" href="${target}"><meta name="robots" content="noindex">` +
      `<meta http-equiv="refresh" content="0; url=${to}"></head>` +
      `<body><a href="${to}">Cette page a été déplacée.</a></body></html>`,
  );
  console.log(`redirect ${from} -> ${to}`);
}

const today = new Date().toISOString().slice(0, 10);
const urls = entry.pages
  .filter((p) => !p.noindex && p.priority !== undefined)
  .map(
    (p) =>
      `  <url><loc>${entry.absoluteUrl(p.path)}</loc><lastmod>${today}</lastmod><priority>${p.priority!.toFixed(1)}</priority></url>`,
  );
await writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
);
await writeFile(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${entry.siteUrl}/sitemap.xml\n`,
);

await rm(serverDir, { recursive: true, force: true });
console.log('sitemap.xml, robots.txt, 404.html written');
