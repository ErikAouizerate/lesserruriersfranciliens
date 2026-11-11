import { Link } from 'react-router';
import { ArrowRight, Building2, Home as HomeIcon, MapPin, Phone } from 'lucide-react';
import { commitments, company } from '@/content/company';
import { generalFaq } from '@/content/faq';
import { images } from '@/content/images';
import { realisations } from '@/content/realisations';
import { services } from '@/content/services';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CtaBand } from '@/components/CtaBand';
import { Faq } from '@/components/Faq';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Eyebrow, IconBadge, Section, SectionHeading } from '@/components/Section';
import { cn } from '@/lib/utils';

const linkArrow = 'inline-flex items-center gap-1.5 font-semibold text-brand-ink hover:underline';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="dark relative overflow-hidden bg-background py-12 text-foreground md:py-26">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 left-[55%] bg-[linear-gradient(115deg,transparent_0_30%,--alpha(var(--color-brand)/7%)_30%_100%)]"
        />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Serrurerie & blindage · 7j/7</Eyebrow>
            <h1 className="mb-6 text-5xl md:text-6xl xl:text-[4.25rem]">
              Serrurier à Paris et en Île-de-France{' '}
              <span className="text-brand">au service des syndics et bailleurs</span>
            </h1>
            <p className="mb-7 max-w-xl text-lg text-muted-foreground">
              Syndics, bailleurs, gestionnaires et particuliers : une équipe d’artisans qualifiés
              pour vos dépannages d’urgence et vos travaux de serrurerie, avec des devis clairs et
              un compte-rendu à chaque intervention.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className={buttonVariants({ size: 'xl' })}>
                Demander un devis gratuit
              </Link>
              <a
                href={company.phoneHref}
                className={cn(
                  buttonVariants({ size: 'xl', variant: 'outline' }),
                  'border-2 border-white bg-transparent hover:border-brand hover:bg-transparent hover:text-brand',
                )}
              >
                <Phone aria-hidden />
                {company.phone}
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {[company.hoursShort, 'Devis gratuit', 'Paris & Île-de-France'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-2 rotate-45 bg-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ImagePlaceholder slot={images.hero} priority className="shadow-2xl shadow-black/35" />
        </div>
      </section>

      {/* Commitments */}
      <section aria-labelledby="engagements" className="border-b bg-background py-9">
        <h2 id="engagements" className="sr-only">
          Nos engagements
        </h2>
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <Icon className="size-7 shrink-0 text-brand-ink" aria-hidden />
              <div>
                <h3 className="mb-1 text-2xl">{title}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Two paths */}
      <Section>
        <SectionHeading eyebrow="À chacun sa solution" title="Professionnel ou particulier ?" center />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              slot: images.parcoursPro,
              icon: Building2,
              tag: 'Professionnels',
              title: 'Syndics, bailleurs & gestionnaires',
              text: 'Parties communes, rotation des locataires, logements vacants : un interlocuteur unique, des devis détaillés et un compte-rendu photo pour chaque ordre de service.',
              to: '/professionnels',
              cta: 'Découvrir l’offre professionnels',
            },
            {
              slot: images.parcoursParticulier,
              icon: HomeIcon,
              tag: 'Particuliers',
              title: 'Votre logement, en toute sécurité',
              text: 'Porte claquée, clé perdue, serrure à changer ou porte à blinder : nous intervenons rapidement, avec un prix annoncé avant les travaux.',
              to: '/competences',
              cta: 'Voir nos compétences',
            },
          ].map(({ slot, icon: Icon, tag, title, text, to, cta }) => (
            <Card key={tag} className="gap-0 py-0">
              <ImagePlaceholder slot={slot} className="rounded-none" />
              <CardContent className="p-7">
                <Badge variant="secondary" className="mb-4 h-6 px-2.5 uppercase">
                  <Icon aria-hidden />
                  {tag}
                </Badge>
                <h3 className="mb-3 text-3xl">{title}</h3>
                <p className="mb-4 text-[0.95rem]">{text}</p>
                <Link to={to} className={linkArrow}>
                  {cta} <ArrowRight className="size-4" aria-hidden />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Nos compétences"
          title="Du dépannage au blindage"
          lead="Nous intervenons en urgence comme sur vos projets planifiés, avec du matériel sélectionné et certifié."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ id, icon: Icon, title, summary }) => (
            <Card key={id} className="p-3">
              <CardContent>
                <IconBadge>
                  <Icon className="size-6" aria-hidden />
                </IconBadge>
                <h3 className="mb-3 text-3xl">{title}</h3>
                <p className="mb-4 text-[0.95rem]">{summary}</p>
                <Link to={`/competences#${id}`} className={linkArrow}>
                  En savoir plus <ArrowRight className="size-4" aria-hidden />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why us: SEO-rich introduction */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow>Pourquoi nous choisir</Eyebrow>
            <h2 className="mb-4 text-4xl md:text-5xl">
              Un serrurier de confiance pour les professionnels de l’immobilier
            </h2>
          </div>
          <div className="space-y-4 text-[0.98rem] text-muted-foreground">
            <p>
              Les Serruriers Franciliens accompagnent les <strong className="text-foreground">syndics de copropriété</strong>,
              les <strong className="text-foreground">bailleurs</strong> et les{' '}
              <strong className="text-foreground">administrateurs de biens</strong> dans la gestion
              quotidienne des accès de leurs immeubles : portes de hall, caves, locaux techniques,
              boîtes aux lettres, logements entre deux locataires.
            </p>
            <p>
              Nos serruriers interviennent à Paris et dans toute l’Île-de-France pour l’
              <strong className="text-foreground">ouverture de porte</strong> sans dégât, le{' '}
              <strong className="text-foreground">changement de serrure</strong> ou de cylindre, la
              pose de serrures multipoints certifiées A2P et le{' '}
              <strong className="text-foreground">blindage de porte</strong>. Chaque intervention
              fait l’objet d’un devis gratuit et détaillé, puis d’une attestation de fin de travaux
              avec photos.
            </p>
            <p>
              Les particuliers profitent de la même rigueur : prix annoncé avant les travaux,
              matériel de qualité et conseils adaptés à leur logement et à leur assurance.
            </p>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Notre méthode"
          title="Une intervention tracée de A à Z"
          lead="Une démarche simple et transparente, pensée pour les gestionnaires qui doivent rendre des comptes."
        />
        <ProcessSteps />
      </Section>

      {/* Realisations preview */}
      <Section>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-x-6">
          <SectionHeading eyebrow="Réalisations" title="Ils nous ont fait confiance" className="mb-0" />
          <Link to="/realisations" className={linkArrow}>
            Toutes nos réalisations <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {realisations.slice(0, 3).map((r) => (
            <article key={r.id}>
              <ImagePlaceholder slot={r.image} />
              <Badge variant="secondary" className="mt-4 h-6 px-2.5 uppercase">
                {r.client}
              </Badge>
              <h3 className="mt-2.5 mb-2 text-2xl">{r.title}</h3>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" aria-hidden /> {r.location}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Zone */}
      <Section tone="cream">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Zone d’intervention</Eyebrow>
            <h2 className="mb-4 text-4xl md:text-5xl">Partout en Île-de-France</h2>
            <p className="mb-5 text-lg text-muted-foreground">
              Nos artisans interviennent à Paris et dans les sept départements franciliens, du lundi
              au dimanche de 8h à 22h.
            </p>
            <Link to="/zones-intervention" className={linkArrow}>
              Voir les villes desservies <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {company.departments.map((d) => (
              <li key={d.code} className="flex flex-col rounded-lg border-l-4 border-brand bg-background p-4">
                <strong className="font-heading text-4xl leading-none">{d.code}</strong>
                <span className="text-sm text-muted-foreground">{d.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <SectionHeading eyebrow="Questions fréquentes" title="Vos questions, nos réponses" />
        <Faq items={generalFaq} />
      </Section>

      <CtaBand />
    </>
  );
}
