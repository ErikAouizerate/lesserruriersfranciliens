import { DoorOpen, KeyRound, ShieldCheck, type LucideIcon } from 'lucide-react';
import { images, type ImageSlot } from './images';

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  intro: string;
  items: { title: string; text: string }[];
  image: ImageSlot;
};

export const services: Service[] = [
  {
    id: 'depannage',
    icon: DoorOpen,
    title: 'Dépannage & ouverture',
    summary: 'Porte claquée, clé cassée, serrure bloquée ou effraction : nous intervenons vite et proprement.',
    intro:
      'Une porte qui ne s’ouvre plus bloque un logement, un local ou tout un immeuble. Nous intervenons rapidement pour rétablir l’accès et sécuriser les lieux, en privilégiant toujours les techniques sans dégât.',
    items: [
      {
        title: 'Ouverture de porte',
        text: 'Porte claquée ou fermée à clé, simple ou blindée : ouverture par des techniques non destructives chaque fois que c’est possible.',
      },
      {
        title: 'Clé cassée ou perdue',
        text: 'Extraction du morceau de clé, remise en service de la serrure et, si nécessaire, remplacement du cylindre pour éviter tout risque.',
      },
      {
        title: 'Serrure bloquée ou grippée',
        text: 'Diagnostic, dégrippage, réglage des gâches ou remplacement des pièces usées.',
      },
      {
        title: 'Mise en sécurité après effraction',
        text: 'Fermeture provisoire le jour même, puis remise en état définitive : cylindre, serrure, renfort du bâti. Documents utiles pour votre déclaration d’assurance.',
      },
    ],
    image: images.depannage,
  },
  {
    id: 'serrures',
    icon: KeyRound,
    title: 'Serrures & cylindres',
    summary: 'Remplacement de cylindres, serrures multipoints certifiées A2P, organigrammes de clés.',
    intro:
      'Du simple changement de cylindre à la serrure multipoints certifiée, nous choisissons avec vous le niveau de sécurité adapté à l’usage : logement, porte d’immeuble, cave ou local technique.',
    items: [
      {
        title: 'Remplacement de cylindre',
        text: 'Changement de barillet après un déménagement, une perte de clés ou entre deux locataires. Cylindres de haute sécurité, anti-perçage et anti-casse.',
      },
      {
        title: 'Serrures multipoints',
        text: '3, 5 ou 7 points de fermeture selon la porte et l’exposition. Pose en applique ou à larder, avec ou sans tringles.',
      },
      {
        title: 'Serrures certifiées A2P',
        text: 'Serrures et cylindres certifiés A2P, souvent demandés par les assureurs. Nous vous conseillons le niveau adapté.',
      },
      {
        title: 'Clés protégées & organigrammes',
        text: 'Clés sur carte de propriété, impossibles à reproduire sans autorisation. Organigrammes pour gérer les accès de plusieurs portes avec un nombre limité de clés.',
      },
    ],
    image: images.serrures,
  },
  {
    id: 'blindage',
    icon: ShieldCheck,
    title: 'Blindage de porte',
    summary: 'Blindage de porte existante ou bloc-porte blindé, posés et réglés dans les règles de l’art.',
    intro:
      'Le blindage est la protection la plus efficace contre l’effraction. Selon la porte, le budget et le règlement de copropriété, nous proposons de renforcer la porte existante ou de la remplacer par un bloc-porte complet.',
    items: [
      {
        title: 'Blindage de porte existante',
        text: 'Plaque d’acier, cornières anti-pince et serrure multipoints posées sur votre porte. Une solution économique qui conserve l’aspect côté palier.',
      },
      {
        title: 'Bloc-porte blindé',
        text: 'Porte et huisserie remplacées ensemble pour un niveau de résistance maximal, avec isolation phonique et thermique renforcée.',
      },
      {
        title: 'Portes de caves & locaux techniques',
        text: 'Portes métalliques et serrures robustes pour caves, locaux poubelles, locaux vélos et chaufferies.',
      },
      {
        title: 'Finitions sur mesure',
        text: 'Habillages, moulures et coloris pour respecter l’esthétique de l’immeuble et les exigences de la copropriété.',
      },
    ],
    image: images.blindage,
  },
];

// A2P levels. TODO: verify durations against official CNPP sources before publishing.
export const a2pLevels = [
  { level: 'A2P ★', resistance: '5 minutes minimum', usage: 'Logement standard, porte intérieure de copropriété' },
  { level: 'A2P ★★', resistance: '10 minutes minimum', usage: 'Porte palière exposée, rez-de-chaussée, local professionnel' },
  { level: 'A2P ★★★', resistance: '15 minutes minimum', usage: 'Haute sécurité, biens de valeur, locaux sensibles' },
];

// Multipoint lock guidance (general advice, adapt to each door).
export const lockPoints = [
  {
    points: '3 points',
    title: 'Appartement en étage',
    text: 'Le standard pour une porte palière en étage : bon niveau de sécurité pour un budget maîtrisé.',
  },
  {
    points: '5 points',
    title: 'Rez-de-chaussée & maison',
    text: 'Pour une porte plus exposée : rez-de-chaussée, dernier étage, maison individuelle ou local professionnel.',
  },
  {
    points: '7 points et +',
    title: 'Porte blindée',
    text: 'Réservé aux blocs-portes blindés : la résistance de la serrure doit être cohérente avec celle de la porte et du bâti.',
  },
];
