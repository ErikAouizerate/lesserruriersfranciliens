// Image slots. Each slot's image is public/images/<id>.webp.
// Set `src` to undefined on a slot to show the labelled placeholder instead.
// Prompts for each slot: build_docs/images-prompts.md

export type ImageSlot = {
  id: string;
  alt: string;
  ratio: string; // CSS aspect-ratio
  hint: string; // shown inside the placeholder
  src?: string;
};

const slot = (id: string, ratio: string, alt: string, hint: string): ImageSlot => ({
  id,
  ratio,
  alt,
  hint,
  src: `/images/${id}.webp`,
});

export const images = {
  hero: slot('hero', '4 / 3', 'Serrurier posant une serrure multipoints sur une porte d’immeuble parisien', 'Artisan au travail sur une porte d’immeuble haussmannien'),
  parcoursPro: slot('parcours-pro', '4 / 3', 'Hall d’entrée d’un immeuble parisien', 'Hall d’immeuble / porte d’entrée de copropriété'),
  parcoursParticulier: slot('parcours-particulier', '4 / 3', 'Porte palière d’appartement', 'Porte palière d’appartement'),
  depannage: slot('competence-depannage', '4 / 3', 'Ouverture de porte sans dégât', 'Ouverture de porte, outils de crochetage'),
  serrures: slot('competence-serrures', '4 / 3', 'Cylindre de haute sécurité et serrure multipoints', 'Gros plan cylindre / serrure multipoints'),
  blindage: slot('competence-blindage', '4 / 3', 'Porte blindée installée dans un appartement', 'Porte blindée posée, finition soignée'),
  syndics: slot('pro-syndics', '4 / 3', 'Porte d’entrée et boîtes aux lettres d’une copropriété', 'Parties communes : porte d’immeuble, boîtes aux lettres'),
  bailleurs: slot('pro-bailleurs', '4 / 3', 'Trousseau de clés étiquetées pour la gestion locative', 'Trousseau de clés étiquetées / logement vacant'),
  entreprise: slot('entreprise-atelier', '16 / 9', 'Établi de serrurier avec cylindres et outillage', 'Atelier / outillage (idéalement vraie photo de l’équipe)'),
  realisation1: slot('realisation-1', '4 / 3', 'Porte de hall d’immeuble après remplacement de la serrure', 'Réalisation : porte de hall'),
  realisation2: slot('realisation-2', '4 / 3', 'Cylindres neufs prêts à être posés', 'Réalisation : cylindres entre locataires'),
  realisation3: slot('realisation-3', '4 / 3', 'Porte palière blindée', 'Réalisation : blindage porte palière'),
  realisation4: slot('realisation-4', '4 / 3', 'Couloir de caves en sous-sol avec portes sécurisées', 'Réalisation : caves / locaux techniques'),
  realisation5: slot('realisation-5', '4 / 3', 'Porte d’entrée renforcée après effraction', 'Réalisation : mise en sécurité après effraction'),
  realisation6: slot('realisation-6', '4 / 3', 'Logement vacant sécurisé', 'Réalisation : sécurisation logement vacant'),
} satisfies Record<string, ImageSlot>;
