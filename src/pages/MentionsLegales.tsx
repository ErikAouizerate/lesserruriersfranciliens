import { company } from '@/content/company';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';

const h2 = 'mt-10 mb-3 text-3xl first:mt-0';

export default function MentionsLegales() {
  const { legal } = company;
  return (
    <>
      <PageHeader eyebrow="Informations" title="Mentions légales" />

      <Section>
        <div className="max-w-3xl space-y-4">
          <h2 className={h2}>Éditeur du site</h2>
          <p>
            {legal.legalName}
            <br />
            {legal.legalForm}
            <br />
            {legal.address}
            <br />
            SIRET : {legal.siret}
            <br />
            TVA : {legal.vat}
            <br />
            Téléphone : {company.phone} · E-mail : {company.email}
          </p>
          <p>Directeur de la publication : {legal.director}</p>

          <h2 className={h2}>Hébergement</h2>
          <p>
            GitHub Pages – GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107,
            États-Unis.
          </p>

          <h2 className={h2}>Assurance professionnelle</h2>
          <p>{legal.insurance}</p>

          <h2 className={h2}>Données personnelles</h2>
          <p>
            Les informations transmises via le formulaire de contact (nom, coordonnées, message)
            sont utilisées uniquement pour répondre à votre demande et établir un devis. Elles sont
            transmises par e-mail via le service Web3Forms, conservées le temps nécessaire au
            traitement de la demande et à la relation commerciale, et ne sont jamais cédées à des
            tiers.
          </p>
          <p>
            Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’opposition
            et de suppression de vos données, en écrivant à {company.email}. Vous pouvez également
            introduire une réclamation auprès de la CNIL.
          </p>

          <h2 className={h2}>Cookies</h2>
          <p>
            Ce site n’utilise aucun cookie de suivi ni de mesure d’audience. Les polices de
            caractères sont hébergées sur le site lui-même.
          </p>

          <h2 className={h2}>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus de ce site (textes, logo, images) est la propriété de{' '}
            {company.name}. Toute reproduction sans autorisation est interdite.
          </p>
        </div>
      </Section>
    </>
  );
}
