# Les Serruriers Franciliens – site vitrine

Static showcase site: Vite + React + TypeScript, Tailwind CSS v4 + shadcn/ui (Base UI),
React Router. Every route is prerendered to static HTML at build time for SEO, then hydrated.
Deployed to GitHub Pages on `www.lesserruriersfranciliens.fr`.

See [NOTES.md](NOTES.md) (what is left to do) and [QUESTIONS.md](QUESTIONS.md).

## Development

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check, client + SSR build, prerender (needs Node >= 23)
npx serve dist    # preview with clean URLs, like GitHub Pages
```

## Structure

- `src/content/` – all texts and data (company, services, pros, FAQ, zones, case studies, SEO).
- `src/content/seo.ts` – per-page title/description, JSON-LD, legacy redirects.
- `src/components/ui/` – shadcn/ui components (`npx shadcn@latest add <name>`).
- `src/entry-server.tsx` + `scripts/prerender.ts` – prerendering, `404.html`, `sitemap.xml`,
  `robots.txt`, redirects of the old site's URLs.
- `src/content/images.ts` – image slots: drop a file in `public/images/` and set `src`.

## Contact form

Uses [Web3Forms](https://web3forms.com). Set `VITE_WEB3FORMS_KEY` in `.env` locally and as a
repository secret for the deploy workflow. Without a key the form falls back to `mailto:`.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.
