import { a2pLevels, lockPoints, services } from '@/content/services';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CtaBand } from '@/components/CtaBand';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { PageHeader } from '@/components/PageHeader';
import { IconBadge, Section, SectionHeading } from '@/components/Section';
import { cn } from '@/lib/utils';

const subnavLink =
  'inline-flex shrink-0 items-center gap-2 rounded-full bg-muted px-3.5 py-2 text-sm font-medium transition-colors hover:bg-cream hover:text-brand-ink';

export default function Competences() {
  return (
    <>
      <PageHeader eyebrow="Compétences" title="Dépannage, serrures & blindage">
        Du simple changement de cylindre à la porte blindée, tous vos travaux d’ouverture, de
        remplacement, de réparation et de blindage, à Paris et en Île-de-France.
      </PageHeader>

      <nav aria-label="Compétences" className="sticky top-19 z-40 border-b bg-background">
        <div className="container-site flex gap-2 overflow-x-auto py-2.5 [scrollbar-width:none]">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={subnavLink}>
              <s.icon className="size-4" aria-hidden />
              {s.title}
            </a>
          ))}
          <a href="#bien-choisir" className={subnavLink}>
            Bien choisir sa serrure
          </a>
        </div>
      </nav>

      {services.map((service, i) => (
        <Section key={service.id} id={service.id} tone={i % 2 ? 'paper' : 'default'}>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className={cn(i % 2 && 'lg:order-2')}>
              <IconBadge>
                <service.icon className="size-6" aria-hidden />
              </IconBadge>
              <h2 className="mb-4 text-4xl md:text-5xl">{service.title}</h2>
              <p className="text-lg text-muted-foreground">{service.intro}</p>
            </div>
            <ImagePlaceholder slot={service.image} />
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {service.items.map((item) => (
              <div key={item.title} className="border-t-2 pt-6">
                <h3 className="mb-2 text-3xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <Section tone="dark" id="bien-choisir">
        <SectionHeading
          eyebrow="Bien choisir"
          title="Comprendre la certification A2P"
          lead="Délivrée après des tests de résistance à l’effraction, la certification A2P classe serrures et cylindres en trois niveaux. Elle est souvent exigée par les assureurs : nous vous aidons à choisir le niveau adapté."
        />
        <Table className="min-w-xl text-base">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-xs tracking-widest text-muted-foreground uppercase">Niveau</TableHead>
              <TableHead className="text-xs tracking-widest text-muted-foreground uppercase">
                Résistance à l’effraction
              </TableHead>
              <TableHead className="text-xs tracking-widest text-muted-foreground uppercase">
                Usage conseillé
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {a2pLevels.map((row) => (
              <TableRow key={row.level} className="hover:bg-transparent">
                <TableHead scope="row" className="py-4 font-heading text-3xl text-brand">
                  {row.level}
                </TableHead>
                <TableCell className="py-4">{row.resistance}</TableCell>
                <TableCell className="py-4 whitespace-normal">{row.usage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="mt-6 text-sm text-muted-foreground">
          Les blocs-portes blindés sont, eux, classés de BP1 à BP3 selon le même principe. Vérifiez
          toujours les exigences de votre contrat d’assurance.
        </p>

        <h2 className="mt-16 mb-6 text-4xl md:text-5xl">3, 5 ou 7 points : quelle serrure multipoints ?</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {lockPoints.map((p) => (
            <div key={p.points} className="rounded-lg border bg-card p-6">
              <strong className="mb-1 block font-heading text-5xl leading-none text-brand">{p.points}</strong>
              <h3 className="mb-2 text-2xl">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Besoin d’un conseil ?" />
    </>
  );
}
