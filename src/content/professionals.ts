import { Building2, KeySquare, type LucideIcon } from 'lucide-react';
import { images, type ImageSlot } from './images';

export type Audience = {
  id: string;
  icon: LucideIcon;
  title: string;
  lead: string;
  items: string[];
  image: ImageSlot;
};

export const audiences: Audience[] = [
  {
    id: 'syndics',
    icon: Building2,
    title: 'Syndics & copropriétés',
    lead: 'Les parties communes demandent un partenaire fiable et réactif. Nous intervenons sur ordre de service, avec un compte-rendu systématique.',
    items: [
      'Portes de hall et portes d’entrée d’immeuble',
      'Serrures de caves, locaux techniques, locaux vélos et poubelles',
      'Remplacement de serrures de boîtes aux lettres',
      'Organigrammes de clés et clés protégées',
      'Mise en sécurité après effraction ou vandalisme',
      'Contrat d’entretien et d’intervention prioritaire',
    ],
    image: images.syndics,
  },
  {
    id: 'bailleurs',
    icon: KeySquare,
    title: 'Bailleurs & gestionnaires',
    lead: 'Rotation des locataires, logements vacants, parc réparti sur plusieurs communes : nous simplifions la gestion des accès de votre patrimoine.',
    items: [
      'Changement de cylindre entre deux locataires',
      'Gestion et étiquetage des trousseaux de clés',
      'Sécurisation des logements vacants',
      'Ouverture de porte pour état des lieux ou intervention technique',
      'Blindage et mise à niveau des portes palières',
      'Interventions coordonnées sur plusieurs sites',
    ],
    image: images.bailleurs,
  },
];

export const proTerms = [
  {
    title: 'Un interlocuteur unique',
    text: 'Un contact dédié qui connaît vos immeubles, vos accès et vos procédures.',
  },
  {
    title: 'Devis détaillés HT / TTC',
    text: 'Main-d’œuvre et fournitures séparées, prêts à être présentés en conseil syndical ou à votre propriétaire.',
  },
  {
    title: 'Compte-rendu photo',
    text: 'Photos avant/après et attestation de fin de travaux jointes à chaque intervention.',
  },
  {
    title: 'Facturation adaptée',
    text: 'Facture par immeuble ou par lot, référence de votre ordre de service, facturation groupée sur demande.',
  },
];

export const proFaq = [
  {
    question: 'Intervenez-vous sur simple ordre de service ?',
    answer:
      'Oui. Envoyez-nous votre ordre de service par e-mail avec l’adresse, l’accès et le contact sur place. Nous confirmons la prise en charge et le créneau d’intervention.',
  },
  {
    question: 'Pouvez-vous gérer plusieurs immeubles ou logements ?',
    answer:
      'Oui, nous intervenons sur toute l’Île-de-France et pouvons regrouper plusieurs interventions sur une même tournée pour réduire les délais et les frais.',
  },
  {
    question: 'Comment récupérer les clés après un changement de cylindre ?',
    answer:
      'Les clés sont remises en main propre, déposées à votre agence ou au gardien, selon votre procédure. Le nombre de clés remises figure sur l’attestation.',
  },
  {
    question: 'Proposez-vous un contrat annuel ?',
    answer:
      'Oui, un contrat d’intervention prioritaire peut être établi selon la taille de votre parc. Contactez-nous pour en définir les modalités.',
  },
];
