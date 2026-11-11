import { images, type ImageSlot } from './images';

// Example case studies. TODO: replace with real projects and real photos.

export type ClientType = 'Syndic' | 'Bailleur' | 'Particulier';

export type Realisation = {
  id: string;
  client: ClientType;
  title: string;
  location: string;
  context: string;
  work: string;
  result: string;
  image: ImageSlot;
};

export const clientTypes: ClientType[] = ['Syndic', 'Bailleur', 'Particulier'];

export const realisations: Realisation[] = [
  {
    id: 'hall-immeuble',
    client: 'Syndic',
    title: 'Porte de hall d’une copropriété de 40 lots',
    location: 'Paris 17e',
    context: 'Serrure de la porte de hall usée, fermeture aléatoire et accès non maîtrisé.',
    work: 'Remplacement de la serrure par une serrure électromécanique compatible avec la platine existante, réglage du ferme-porte et des gâches.',
    result: 'Porte fiable, fermeture garantie, compte-rendu photo transmis au syndic le jour même.',
    image: images.realisation1,
  },
  {
    id: 'cylindres-rotation',
    client: 'Bailleur',
    title: 'Changement de cylindres entre locataires',
    location: 'Boulogne-Billancourt (92)',
    context: 'Bailleur gérant une trentaine de logements avec une forte rotation de locataires.',
    work: 'Remplacement des cylindres à chaque sortie de locataire, clés protégées sur carte de propriété, étiquetage des trousseaux.',
    result: 'Plus aucun double en circulation, traçabilité complète des clés remises.',
    image: images.realisation2,
  },
  {
    id: 'blindage-palier',
    client: 'Particulier',
    title: 'Blindage d’une porte palière',
    location: 'Vincennes (94)',
    context: 'Appartement au rez-de-chaussée, porte bois d’origine, demande de l’assureur.',
    work: 'Blindage de la porte existante, cornières anti-pince et serrure 5 points certifiée A2P.',
    result: 'Porte sécurisée conforme aux exigences de l’assurance, aspect d’origine conservé côté palier.',
    image: images.realisation3,
  },
  {
    id: 'caves',
    client: 'Syndic',
    title: 'Sécurisation des caves après intrusions',
    location: 'Saint-Denis (93)',
    context: 'Intrusions répétées dans le couloir des caves d’une résidence.',
    work: 'Remplacement de la porte d’accès par une porte métallique, serrure de sûreté et organigramme de clés pour les résidents.',
    result: 'Accès réservé aux résidents, fin des intrusions signalées.',
    image: images.realisation4,
  },
  {
    id: 'effraction',
    client: 'Particulier',
    title: 'Mise en sécurité après cambriolage',
    location: 'Versailles (78)',
    context: 'Porte d’entrée forcée, cylindre arraché, logement ouvert.',
    work: 'Fermeture provisoire le soir même, puis pose d’un cylindre haute sécurité et renfort du bâti.',
    result: 'Logement sécurisé en quelques heures, documents remis pour la déclaration d’assurance.',
    image: images.realisation5,
  },
  {
    id: 'logements-vacants',
    client: 'Bailleur',
    title: 'Sécurisation de logements vacants',
    location: 'Argenteuil (95)',
    context: 'Plusieurs logements vides entre deux locations, risque de squat.',
    work: 'Pose de serrures de sécurité provisoires et contrôle des accès jusqu’à la relocation.',
    result: 'Logements protégés, clés centralisées chez le gestionnaire.',
    image: images.realisation6,
  },
];
