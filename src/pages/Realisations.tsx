import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { clientTypes, realisations, type ClientType } from '@/content/realisations';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { CtaBand } from '@/components/CtaBand';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';

type Filter = ClientType | 'Tous';
const filters: Filter[] = ['Tous', ...clientTypes];

export default function Realisations() {
  const [filter, setFilter] = useState<Filter>('Tous');
  const shown = filter === 'Tous' ? realisations : realisations.filter((r) => r.client === filter);

  return (
    <>
      <PageHeader eyebrow="Réalisations" title="Nos interventions en images">
        Portes d’immeuble, caves, logements locatifs, portes palières : quelques exemples de
        chantiers menés pour nos clients en Île-de-France.
      </PageHeader>

      <Section>
        <ToggleGroup
          aria-label="Filtrer par type de client"
          className="mb-3 flex-wrap"
          value={[filter]}
          onValueChange={(value) => setFilter((value[0] as Filter | undefined) ?? 'Tous')}
        >
          {filters.map((type) => (
            <ToggleGroupItem
              key={type}
              value={type}
              className="h-10 rounded-full border px-4.5 data-pressed:border-ink data-pressed:bg-ink data-pressed:text-white"
            >
              {type}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        {/* TODO: remove once the example cases are replaced by real projects. */}
        <p className="mb-8 text-sm text-muted-foreground italic">
          Exemples illustratifs, à remplacer par de vrais chantiers.
        </p>

        <div data-reveal="stagger" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((r) => (
            <Card key={r.id} className="gap-0 py-0">
              <ImagePlaceholder slot={r.image} className="rounded-none" sizes="(min-width: 1184px) 365px, (min-width: 1024px) calc(33vw - 30px), (min-width: 768px) calc(50vw - 32px), calc(100vw - 40px)" />
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
                  <Badge variant="secondary" className="h-6 px-2.5 uppercase">
                    {r.client}
                  </Badge>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3.5" aria-hidden /> {r.location}
                  </span>
                </div>
                <h2 className="my-4 text-3xl">{r.title}</h2>
                <dl className="text-sm">
                  {[
                    ['Contexte', r.context],
                    ['Intervention', r.work],
                    ['Résultat', r.result],
                  ].map(([term, text]) => (
                    <div key={term} className="mb-3">
                      <dt className="text-xs font-semibold tracking-wider text-brand-ink uppercase">{term}</dt>
                      <dd className="mt-0.5 text-muted-foreground">{text}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand title="Un chantier similaire ?" />
    </>
  );
}
