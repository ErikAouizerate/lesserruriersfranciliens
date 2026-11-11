import { Link } from 'react-router';
import { buttonVariants } from '@/components/ui/button';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="Erreur 404" title="Page introuvable">
        La page que vous cherchez n’existe pas ou a été déplacée.
      </PageHeader>
      <Section>
        <div className="flex flex-wrap gap-3">
          <Link to="/" className={buttonVariants({ size: 'xl' })}>
            Retour à l’accueil
          </Link>
          <Link to="/contact" className={buttonVariants({ size: 'xl', variant: 'outline' })}>
            Nous contacter
          </Link>
        </div>
      </Section>
    </>
  );
}
