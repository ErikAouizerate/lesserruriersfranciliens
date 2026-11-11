# Notes: what is left to do

Things only you can do, in rough priority order. Open questions are in [QUESTIONS.md](QUESTIONS.md).

## Before going live
- [ ] **Validate the contact number +33 7 88 80 46 56** (calls and WhatsApp), now used
      everywhere on the site (`src/content/company.ts`) and in `public/og-image.png`.
- [ ] Fill the two remaining legal fields in `company.legal` (`src/content/company.ts`):
      publication director and insurer. Company identity, address, SIRET and VAT are done.
- [ ] Create a Web3Forms key (https://web3forms.com, with serruriersfranciliens@gmail.com):
  - [ ] locally: `.env` → `VITE_WEB3FORMS_KEY=...`
  - [ ] GitHub: Settings → Secrets and variables → Actions → `VITE_WEB3FORMS_KEY`
  - [ ] send a test message from `/contact`.
- [ ] Replace the placeholders:
  - [ ] key figures `XX` on `/entreprise` (`src/pages/Entreprise.tsx`);
  - [ ] the 6 example cases in `src/content/realisations.ts`, then remove the
        "Exemples illustratifs" notice in `src/pages/Realisations.tsx`.
- [x] Images: all 15 slots generated with fal (Nano Banana 2.1, prompts in
      `build_docs/images-prompts.md`), in `public/images/<slot-id>.webp`.
- [ ] Replace the AI images of réalisations (`realisation-*.webp`) and the workshop
      (`entreprise-atelier.webp`) with real photos.
- [ ] Proofread all texts in `src/content/` and the pages (especially FAQ legal statements).

## Deployment (GitHub Pages)
- [x] Create the GitHub repository and push `main`.
- [ ] Settings → Pages → Source: **GitHub Actions**.
- [ ] Settings → Pages → Custom domain: `www.lesserruriersfranciliens.fr`, enable HTTPS.
- [ ] OVH → domain `lesserruriersfranciliens.fr` → **DNS zone** (the zone already exists, do
      not order a new one). Check the **DNS servers** tab uses OVH servers, then:
  - delete the existing `A` / `AAAA` / `CNAME` records of the apex and `www` (keep MX/TXT);
  - apex → 4 `A` records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - `www` → `CNAME` → `erikaouizerate.github.io.`
- [ ] If you still own `lesserruriersfranciliens.com` (old Squarespace site): redirect it to
      `https://www.lesserruriersfranciliens.fr` once the new site is live, so its search
      ranking carries over.
- [ ] **OVH**: update the contact information (phone +33 7 88 80 46 56, e-mail, address
      60 rue François Ier, 75008 Paris) on the OVH account / domain contacts.

## SEO after launch
- [ ] Google Search Console: add the domain, submit `https://www.lesserruriersfranciliens.fr/sitemap.xml`.
- [ ] Bing Webmaster Tools: import from Search Console.
- [ ] Google Business Profile: create/claim it, same name / phone / hours as the site, link to
      the site. Biggest lever for local search. If 60 rue François Ier is a domiciliation
      address (no premises receiving clients), declare a **service-area business** and hide the
      address: Google suspends profiles showing a domiciliation address.
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
