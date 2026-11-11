import { Award, BadgeEuro, Clock, FileCheck } from 'lucide-react';

// Company facts. Values marked TODO must be confirmed by the client
// (see QUESTIONS.md).

export const company = {
  name: 'Les Serruriers Franciliens',
  tagline: 'Serrurerie & blindage en Île-de-France',
  phone: '01 70 07 20 00',
  phoneHref: 'tel:+33170072000',
  phoneE164: '+33170072000',
  email: 'serruriersfranciliens@gmail.com',
  // Number used by the WhatsApp button of the current site.
  whatsappHref: 'https://wa.me/33630935288',
  hours: '7 jours sur 7, de 8h à 22h',
  hoursShort: '7j/7 · 8h–22h',
  zone: 'Toute l’Île-de-France',
  departments: [
    { code: '75', name: 'Paris' },
    { code: '77', name: 'Seine-et-Marne' },
    { code: '78', name: 'Yvelines' },
    { code: '91', name: 'Essonne' },
    { code: '92', name: 'Hauts-de-Seine' },
    { code: '93', name: 'Seine-Saint-Denis' },
    { code: '94', name: 'Val-de-Marne' },
    { code: '95', name: 'Val-d’Oise' },
  ],
  // TODO: legal information for the "mentions légales" page.
  legal: {
    legalName: '[Raison sociale à compléter]',
    legalForm: '[Forme juridique et capital à compléter]',
    address: '[Adresse du siège à compléter]',
    siret: '[SIRET à compléter]',
    vat: '[N° TVA intracommunautaire à compléter]',
    director: '[Directeur de la publication à compléter]',
    insurance: '[Assureur RC Pro / décennale à compléter]',
  },
} as const;

export const commitments = [
  {
    icon: FileCheck,
    title: 'Devis gratuit',
    text: 'Gratuit et sans engagement, détaillé avant toute intervention.',
  },
  {
    icon: Award,
    title: 'Artisans qualifiés',
    text: 'Des serruriers confirmés, formés aux équipements de sécurité certifiés.',
  },
  {
    icon: Clock,
    title: 'Intervention 7j/7',
    text: 'De 8h à 22h, pour vos urgences comme pour vos travaux planifiés.',
  },
  {
    icon: BadgeEuro,
    title: 'Tarifs clairs',
    text: 'Des prix garantis et compétitifs, annoncés avant le début des travaux.',
  },
];

export const processSteps = [
  {
    title: 'Votre demande',
    text: 'Par téléphone, formulaire ou WhatsApp. Joignez des photos de la porte ou de la serrure : nous gagnons un temps précieux.',
  },
  {
    title: 'Diagnostic & devis gratuit',
    text: 'Nous qualifions le besoin et vous adressons un devis détaillé, ou nous intervenons directement en cas d’urgence.',
  },
  {
    title: 'Validation',
    text: 'Vous validez le devis ou le bon de commande. Aucun travail n’est engagé sans votre accord.',
  },
  {
    title: 'Intervention',
    text: 'Un artisan qualifié intervient avec le matériel adapté, dans le respect des lieux et des occupants.',
  },
  {
    title: 'Compte-rendu',
    text: 'Attestation de fin de travaux, photos avant/après et remise des clés : tout est tracé pour votre dossier.',
  },
] as const;

export const charter = [
  {
    title: 'Transparence',
    text: 'Un devis écrit et détaillé avant tout engagement. Pas de surprise sur la facture.',
  },
  {
    title: 'Réactivité',
    text: 'Une réponse rapide à chaque demande et des délais annoncés, puis respectés.',
  },
  {
    title: 'Matériel certifié',
    text: 'Des cylindres, serrures et blindages sélectionnés, conformes aux normes en vigueur.',
  },
  {
    title: 'Travail soigné',
    text: 'Interventions propres, sans dégât inutile, dans le respect des parties communes et des occupants.',
  },
  {
    title: 'Conseil',
    text: 'Une solution adaptée au bien, à l’usage et au budget, pas la plus chère.',
  },
] as const;
