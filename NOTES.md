# Notes: what is left to do

Things only you can do, in rough priority order. Open questions are in [QUESTIONS.md](QUESTIONS.md).

## Before going live
- [ ] Answer the legal questions in QUESTIONS.md, then fill `company.legal` in
      `src/content/company.ts` (shown on `/mentions-legales`).
- [ ] Add the head office `address` to the LocalBusiness JSON-LD in `src/content/seo.ts`
      (search for `TODO`).
- [ ] Create a Web3Forms key (https://web3forms.com, with serruriersfranciliens@gmail.com):
  - [ ] locally: `.env` → `VITE_WEB3FORMS_KEY=...`
  - [ ] GitHub: Settings → Secrets and variables → Actions → `VITE_WEB3FORMS_KEY`
  - [ ] send a test message from `/contact`.
- [ ] Replace the placeholders:
  - [ ] key figures `XX` on `/entreprise` (`src/pages/Entreprise.tsx`);
  - [ ] the 6 example cases in `src/content/realisations.ts`, then remove the
        "Exemples illustratifs" notice in `src/pages/Realisations.tsx`.
- [ ] Images: generate or shoot them (prompts in `build_docs/images-prompts.md`), put them in
      `public/images/`, set `src` in `src/content/images.ts`. Use real photos for
      réalisations and the team.
- [ ] Proofread all texts in `src/content/` and the pages (especially FAQ legal statements).

## Deployment (GitHub Pages)
- [ ] Create the GitHub repository and push `main`.
- [ ] Settings → Pages → Source: **GitHub Actions**.
- [ ] Settings → Pages → Custom domain: `www.lesserruriersfranciliens.com`, enable HTTPS.
- [ ] DNS at the registrar:
  - `www` → CNAME → `<github-user>.github.io`
  - apex → A records 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- [ ] Switch the domain off Squarespace only once the new site is live.

## SEO after launch
- [ ] Google Search Console: add the domain, submit `https://www.lesserruriersfranciliens.com/sitemap.xml`.
- [ ] Bing Webmaster Tools: import from Search Console.
- [ ] Google Business Profile: create/claim it (service-area business, Île-de-France), same
      name / phone / hours as the site, link to the site. Biggest lever for local search.
- [ ] Ask satisfied clients (syndics, bailleurs) for Google reviews.
- [ ] Test structured data: https://search.google.com/test/rich-results
- [ ] Old URLs `/depannage`, `/installation`, `/contacts` redirect to the new pages
      (meta refresh). Check them once live.
- [ ] Optional: a blog / advice section (topics listed in `build_docs/recherche-*.md`).

## Maintenance
- Texts: `src/content/*.ts`. Page titles/descriptions for SEO: `src/content/seo.ts`.
- New page: add the route in `src/App.tsx` **and** its entry in `pages` (`src/content/seo.ts`),
  otherwise it is not prerendered nor in the sitemap.
- `npm audit` reports moderate issues in dependencies of the `shadcn` CLI (deepmerge,
  minimatch): build-time only, not shipped to visitors.
