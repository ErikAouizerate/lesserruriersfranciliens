import { Link } from 'react-router';
import { Clock, MapPin } from 'lucide-react';
import { company } from '@/content/company';
import { zones } from '@/content/zones';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CtaBand } from '@/components/CtaBand';
import { PageHeader } from '@/components/PageHeader';
import { Section, SectionHeading } from '@/components/Section';

export default function Zones() {
  return (
    <>
      <PageHeader eyebrow="Zones d’intervention" title="Serrurier à Paris et dans toute l’Île-de-France">
        Nos serruriers interviennent 7 jours sur 7, de 8h à 22h, à Paris et dans les sept
        départements franciliens, pour les syndics, les bailleurs et les particuliers.
      </PageHeader>

      <Section>
        <div data-reveal="stagger" className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4 text-muted-foreground">
            <p>
              Que vous gériez une copropriété à Paris, un parc locatif dans les Hauts-de-Seine ou
              en Seine-Saint-Denis, ou que vous ayez besoin d’un serrurier pour votre logement dans
              le Val-de-Marne, les Yvelines, l’Essonne, le Val-d’Oise ou la Seine-et-Marne, nous
              organisons l’intervention au plus vite.
            </p>
            <p>
              Les délais dépendent de la distance et de la nature de la demande : les urgences
              (porte claquée, effraction) sont traitées en priorité, les travaux planifiés sont
              programmés avec vous selon vos disponibilités et celles des occupants.
            </p>
          </div>
          <Card className="bg-cream ring-0">
            <CardContent className="grid gap-3">
              <p className="flex items-center gap-3 font-medium">
                <Clock className="size-5 text-brand-ink" aria-hidden /> {company.hours}
              </p>
              <p className="flex items-center gap-3 font-medium">
                <MapPin className="size-5 text-brand-ink" aria-hidden /> 75, 77, 78, 91, 92, 93, 94, 95
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <a href={company.phoneHref} className={buttonVariants({ size: 'xl' })}>
                  {company.phone}
                </a>
                <Link to="/contact" className={buttonVariants({ size: 'xl', variant: 'outline' })}>
                  Devis gratuit
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <SectionHeading eyebrow="Départements & villes" title="Où intervenons-nous ?" />
        <div data-reveal="stagger" className="grid gap-6 md:grid-cols-2">
          {zones.map((zone) => (
            <Card key={zone.code} className="p-2">
              <CardContent>
                <h3 className="mb-2 flex items-baseline gap-3 text-3xl">
                  <span className="font-heading text-5xl leading-none text-brand">{zone.code}</span>
                  Serrurier {zone.locative}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">{zone.intro}</p>
                <ul className="flex flex-wrap gap-1.5" aria-label={`Villes desservies : ${zone.name}`}>
                  {zone.cities.map((city) => (
                    <li key={city} className="rounded-full bg-muted px-2.5 py-1 text-xs">
                      {city}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Votre commune n’apparaît pas ? Nous intervenons dans toute l’Île-de-France :{' '}
          <Link to="/contact" className="font-semibold text-brand-ink hover:underline">
            contactez-nous
          </Link>
          .
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
