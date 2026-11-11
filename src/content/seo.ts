import { company } from './company';
import { generalFaq } from './faq';
import { proFaq } from './professionals';
import { services } from './services';
import { zones } from './zones';

// Canonical origin. Must match public/CNAME.
export const siteUrl = 'https://www.lesserruriersfranciliens.com';

export type PageMeta = {
  path: string;
  /** Full <title>. */
  title: string;
  description: string;
  /** Breadcrumb label. */
  label: string;
  /** Sitemap priority; pages without it are excluded from the sitemap. */
  priority?: number;
  noindex?: boolean;
  faq?: { question: string; answer: string }[];
};

const suffix = ` | ${company.name}`;

export const pages: PageMeta[] = [
  {
    path: '/',
    title: `Serrurier à Paris et en Île-de-France${suffix}`,
    description:
      'Serrurier pour syndics, bailleurs et particuliers à Paris et en Île-de-France : dépannage, ouverture de porte, changement de serrure, blindage. Devis gratuit, 7j/7.',
    label: 'Accueil',
    priority: 1,
    faq: generalFaq,
  },
  {
    path: '/entreprise',
    title: `Notre entreprise de serrurerie en Île-de-France${suffix}`,
    description:
      'Les Serruriers Franciliens : des artisans serruriers qualifiés au service des syndics, bailleurs, gestionnaires et particuliers. Notre charte et nos garanties.',
    label: 'L’entreprise',
    priority: 0.7,
  },
  {
    path: '/competences',
    title: `Dépannage, changement de serrure et blindage de porte${suffix}`,
    description:
      'Ouverture de porte sans dégât, clé cassée, mise en sécurité après effraction, cylindres et serrures A2P, blindage de porte : nos compétences en Île-de-France.',
    label: 'Compétences',
    priority: 0.9,
  },
  {
    path: '/professionnels',
    title: `Serrurier pour syndics de copropriété et bailleurs${suffix}`,
    description:
      'Serrurier partenaire des syndics et bailleurs en Île-de-France : parties communes, changement de cylindres entre locataires, logements vacants, compte-rendu photo.',
    label: 'Professionnels',
    priority: 0.9,
    faq: proFaq,
  },
  {
    path: '/realisations',
    title: `Nos réalisations en serrurerie et blindage${suffix}`,
    description:
      'Portes de hall, caves, cylindres entre locataires, blindage de portes palières : exemples d’interventions pour syndics, bailleurs et particuliers en Île-de-France.',
    label: 'Réalisations',
    priority: 0.6,
  },
  {
    path: '/zones-intervention',
    title: `Serrurier à Paris, 92, 93, 94 et toute l’Île-de-France${suffix}`,
    description:
      'Nos serruriers interviennent 7j/7 à Paris et dans les Hauts-de-Seine, la Seine-Saint-Denis, le Val-de-Marne, les Yvelines, l’Essonne, le Val-d’Oise et la Seine-et-Marne.',
    label: 'Zones d’intervention',
    priority: 0.8,
  },
  {
    path: '/contact',
    title: `Contact et devis gratuit${suffix}`,
    description:
      'Demandez un devis gratuit à votre serrurier en Île-de-France : téléphone, e-mail, WhatsApp ou formulaire. Intervention 7j/7 de 8h à 22h.',
    label: 'Contact',
    priority: 0.8,
  },
  {
    path: '/mentions-legales',
    title: `Mentions légales${suffix}`,
    description: `Mentions légales et politique de confidentialité du site ${company.name}.`,
    label: 'Mentions légales',
    noindex: true,
  },
];

export const notFoundMeta: PageMeta = {
  path: '/404',
  title: `Page introuvable${suffix}`,
  description: 'Cette page n’existe pas ou a été déplacée.',
  label: 'Page introuvable',
  noindex: true,
};

// Legacy URLs of the previous site, redirected to their new equivalent.
export const legacyRedirects: Record<string, string> = {
  '/depannage': '/competences#depannage',
  '/installation': '/competences#blindage',
  '/contacts': '/contact',
};

export function getPageMeta(pathname: string): PageMeta {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return pages.find((p) => p.path === normalized) ?? notFoundMeta;
}

export const absoluteUrl = (path: string) => (path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`);

// ---------- Structured data (schema.org JSON-LD) ----------

const businessId = `${siteUrl}/#business`;

function localBusiness() {
  return {
    '@type': 'Locksmith',
    '@id': businessId,
    name: company.name,
    url: absoluteUrl('/'),
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.png`,
    telephone: company.phoneE164,
    email: company.email,
    description:
      'Serrurerie, dépannage et blindage de portes pour les syndics de copropriété, bailleurs, gestionnaires de biens et particuliers en Île-de-France.',
    // TODO: add "address" (PostalAddress) once the head office address is confirmed.
    areaServed: [
      { '@type': 'State', name: 'Île-de-France' },
      ...zones.map((z) => ({ '@type': 'AdministrativeArea', name: `${z.name} (${z.code})` })),
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '22:00',
      },
    ],
    knowsLanguage: 'fr',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Prestations de serrurerie',
      itemListElement: services.flatMap((s) =>
        s.items.map((item) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: item.title, description: item.text },
        })),
      ),
    },
  };
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: absoluteUrl('/'),
    name: company.name,
    inLanguage: 'fr-FR',
    publisher: { '@id': businessId },
  };
}

function breadcrumb(meta: PageMeta) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: meta.label, item: absoluteUrl(meta.path) },
    ],
  };
}

function faqPage(meta: PageMeta) {
  return {
    '@type': 'FAQPage',
    mainEntity: (meta.faq ?? []).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function buildJsonLd(meta: PageMeta) {
  if (meta.noindex) return null;
  const graph: object[] = [localBusiness()];
  if (meta.path === '/') graph.push(website());
  else graph.push(breadcrumb(meta));
  if (meta.faq?.length) graph.push(faqPage(meta));
  return { '@context': 'https://schema.org', '@graph': graph };
}

// ---------- Head tags (used by the prerender script) ----------

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function renderHeadTags(meta: PageMeta): string {
  const url = absoluteUrl(meta.path);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const jsonLd = buildJsonLd(meta);
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
    meta.noindex ? '' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    jsonLd
      ? `<script type="application/ld+json" id="ld-json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`
      : '',
  ]
    .filter(Boolean)
    .join('\n    ');
}
