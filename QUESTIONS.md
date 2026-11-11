# Questions

Decisions already taken, and questions still waiting for an answer.
When you answer an open question, move it to "Answered" with the answer.

## Open

### Legal (blocking: required by law before going live)
- [ ] Legal name, legal form and share capital?
- [ ] Head office address? (also needed for Google Business Profile and the `address` of the
      LocalBusiness structured data)
- [ ] SIRET and intra-EU VAT number?
- [ ] Publication director (name)?
- [ ] RC Pro / décennale insurer (name, policy number)? The "Garanties" block on `/entreprise`
      states "Assurance responsabilité civile professionnelle": confirm or remove.

### Contact
- [ ] WhatsApp number: the old site uses **06 30 93 52 88** for its button but
      **07 88 80 46 56** in its settings. Which one? (currently 06 30 93 52 88)
- [ ] Domain: canonical URLs use **www.lesserruriersfranciliens.com** (like the old site).
      OK, or should it be the bare domain?

### Company (`/entreprise`)
- [ ] Key figures: years of experience, buildings served, interventions per year?
- [ ] Short history: founding year, founders, team size?

### Skills (`/competences`)
- [ ] Brands installed (Fichet, Vachette, Bricard, Picard, Mul-T-Lock, Héraclès…)?
- [ ] Certifications held (installer approvals, Qualibat…)?
- [ ] A2P table (5 / 10 / 15 minutes): validated against CNPP sources?

### Professionals (`/professionnels`)
- [ ] Is an annual priority-intervention contract really offered? Under what terms?
- [ ] A committed response time to advertise (e.g. quote within 48 h)?
- [ ] Client references (syndics, bailleurs) that can be quoted, with their consent?

### Content
- [ ] FAQ legal statements (tenant vs landlord, insurer deadline): reviewed by someone qualified?
- [ ] A CGV page: needed if your quotes refer to it?

## Answered

| Question | Answer |
|---|---|
| Hosting | GitHub Pages, custom domain `lesserruriersfranciliens.com` |
| Contact form | Web3Forms (key to create), `mailto:` fallback without a key |
| Show prices? | No: free quote and guaranteed prices only |
| B2B targets | Syndics / copropriétés and bailleurs / gestionnaires |
| Skills scope | Locksmithing and armoring only (alarms, video, glass breakage removed) |
| Réalisations | 6 example cases for now, to be replaced by real projects |
| Service area | All of Île-de-France (75, 77, 78, 91, 92, 93, 94, 95) |
| Design stack | Tailwind CSS + shadcn/ui |
