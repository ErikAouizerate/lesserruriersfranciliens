import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { charter, commitments } from '@/content/company';
import { images } from '@/content/images';
import { Card, CardContent } from '@/components/ui/card';
import { CtaBand } from '@/components/CtaBand';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { PageHeader } from '@/components/PageHeader';
import { CheckList, Eyebrow, IconBadge, Section, SectionHeading } from '@/components/Section';

// TODO: replace placeholder figures with real ones (see QUESTIONS.md).
const figures = [
  { value: 'XX', label: 'années d’expérience' },
  { value: 'XX', label: 'immeubles suivis' },
  { value: 'XXX', label: 'interventions par an' },
  { value: '8', label: 'départements couverts' },
];

export default function Entreprise() {
  return (
    <>
      <PageHeader eyebrow="L’entreprise" title="Des artisans serruriers engagés à votre service">
        Une équipe de professionnels spécialisée dans le dépannage d’urgence et les travaux de
        serrurerie, au service des acteurs de l’immobilier francilien.
      </PageHeader>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal="up">
            <Eyebrow>Qui sommes-nous</Eyebrow>
            <h2 className="mb-5 text-4xl md:text-5xl">Un service qualifié, un accompagnement complet</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les Serruriers Franciliens interviennent pour tous types de travaux de serrurerie et
                de blindage. Nous traitons vos demandes d’intervention en urgence dans les plus
                brefs délais, et vos projets d’installation ou de rénovation avec la plus grande
                attention.
              </p>
              <p>
                Notre clientèle est majoritairement composée de professionnels de l’immobilier :
                syndics de copropriété, bailleurs, administrateurs de biens. Leurs exigences
                (réactivité, traçabilité, devis détaillés) font notre méthode, et en font aussi
                profiter nos clients particuliers.
              </p>
            </div>
            <blockquote className="mt-7 rounded-r-lg border-l-4 border-brand bg-cream px-6 py-5 font-heading text-3xl leading-tight">
              « Un service qualifié, des produits sélectionnés, un accompagnement complet, adapté et
              des tarifs garantis. »
            </blockquote>
          </div>
          <ImagePlaceholder slot={images.entreprise} />
        </div>
      </Section>

      <Section tone="dark">
        <h2 className="sr-only">Chiffres clés</h2>
        <ul data-reveal="stagger" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {figures.map((f) => (
            <li key={f.label} className="flex flex-col">
              <strong className="font-heading text-7xl leading-none text-brand">{f.value}</strong>
              <span className="text-muted-foreground">{f.label}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground/70 italic">Chiffres à compléter.</p>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Notre charte" title="Cinq engagements, à chaque intervention" />
        <ol data-reveal="stagger" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {charter.map((item, i) => (
            <li key={item.title}>
              <Card className="h-full border-t-4 border-t-brand p-2">
                <CardContent>
                  <span className="mb-2 block font-heading text-4xl leading-none text-brand-ink">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mb-2 text-2xl">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal="up">
            <Eyebrow>Garanties</Eyebrow>
            <h2 className="mb-5 text-4xl md:text-5xl">Travailler avec nous en toute sérénité</h2>
            <CheckList
              items={[
                'Devis gratuit, écrit et détaillé avant tout engagement',
                'Attestation de fin de travaux signée à chaque intervention',
                'Matériel garanti par le fabricant, pose garantie',
                'Assurance responsabilité civile professionnelle',
              ]}
            />
            <Link
              to="/professionnels"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-ink hover:underline"
            >
              Nos conditions pour les professionnels <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div data-reveal="stagger" className="grid gap-5 sm:grid-cols-2">
            {commitments.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="p-2">
                <CardContent>
                  <IconBadge>
                    <Icon className="size-6" aria-hidden />
                  </IconBadge>
                  <h3 className="mb-2 text-2xl">{title}</h3>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
