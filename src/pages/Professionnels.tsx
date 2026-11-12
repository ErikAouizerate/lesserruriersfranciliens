import { Link } from 'react-router';
import { audiences, proFaq, proTerms } from '@/content/professionals';
import { buttonVariants } from '@/components/ui/button';
import { CtaBand } from '@/components/CtaBand';
import { Faq } from '@/components/Faq';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { PageHeader } from '@/components/PageHeader';
import { ProcessSteps } from '@/components/ProcessSteps';
import { CheckList, IconBadge, Section, SectionHeading } from '@/components/Section';
import { cn } from '@/lib/utils';

const subnavLink =
  'inline-flex shrink-0 items-center gap-2 rounded-full bg-muted px-3.5 py-2 text-sm font-medium transition-colors hover:bg-cream hover:text-brand-ink';

export default function Professionnels() {
  return (
    <>
      <PageHeader eyebrow="Professionnels" title="Serrurier partenaire des syndics et bailleurs">
        Syndics de copropriété, bailleurs, administrateurs de biens : nous connaissons vos
        contraintes et vos procédures. Une offre conçue pour simplifier la gestion des accès de
        votre patrimoine en Île-de-France.
      </PageHeader>

      <nav aria-label="Publics" className="sticky top-19 z-40 border-b bg-background">
        <div className="container-site flex gap-2 overflow-x-auto py-2.5 [scrollbar-width:none]">
          {audiences.map((a) => (
            <a key={a.id} href={`#${a.id}`} className={subnavLink}>
              <a.icon className="size-4" aria-hidden />
              {a.title}
            </a>
          ))}
          <a href="#modalites" className={subnavLink}>
            Modalités
          </a>
          <a href="#faq" className={subnavLink}>
            Questions fréquentes
          </a>
        </div>
      </nav>

      {audiences.map((a, i) => (
        <Section key={a.id} id={a.id} tone={i % 2 ? 'paper' : 'default'}>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div data-reveal="up" className={cn(i % 2 && 'lg:order-2')}>
              <IconBadge>
                <a.icon className="size-6" aria-hidden />
              </IconBadge>
              <h2 className="mb-4 text-4xl md:text-5xl">{a.title}</h2>
              <p className="mb-6 text-lg text-muted-foreground">{a.lead}</p>
              <CheckList items={a.items} />
              <Link to="/contact" className={buttonVariants({ size: 'xl' })}>
                Demander un devis
              </Link>
            </div>
            <ImagePlaceholder slot={a.image} />
          </div>
        </Section>
      ))}

      <Section tone="dark" id="modalites">
        <SectionHeading eyebrow="Modalités" title="Pensé pour les gestionnaires" />
        <div data-reveal="stagger" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proTerms.map((t) => (
            <div key={t.title} className="border-t-[3px] border-brand pt-5">
              <h3 className="mb-2 text-2xl">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.text}</p>
            </div>
          ))}
        </div>
        <h3 data-reveal="up" className="mt-16 mb-7 text-3xl">Le déroulé d’un ordre de service</h3>
        <ProcessSteps />
      </Section>

      <Section tone="paper" id="faq">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes des professionnels" />
        <Faq items={proFaq} />
      </Section>

      <CtaBand
        title="Parlons de votre parc"
        text="Présentez-nous vos immeubles ou vos logements : nous vous proposons une organisation et des conditions adaptées."
      />
    </>
  );
}
