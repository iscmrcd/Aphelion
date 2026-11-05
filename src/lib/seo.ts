import type { Lang } from "./i18n";

export const SITE_URL = "https://aphelion.mx";
export const SITE_NAME = "Aphelion";

/**
 * Share preview for every page that does not set its own image: the Aphelion
 * wordmark centred on black. Without it, Lovable fell back to a screenshot of
 * the home page, which looked broken in WhatsApp and social previews.
 */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/aphelion-og.jpg`;

export type SeoCopy = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
};

type BuildHeadArgs = {
  /** Route path starting with "/" (no trailing slash except root). */
  path: string;
  lang: Lang;
  en: SeoCopy;
  es: SeoCopy;
  ogType?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const url = (path: string, lang?: Lang) => {
  const base = `${SITE_URL}${path === "/" ? "" : path}` || SITE_URL;
  // Spanish is the main language: it owns the bare URL and English adds ?lang=en.
  return lang === "en" ? `${base || SITE_URL}?lang=en` : base || SITE_URL;
};

/**
 * Builds fully localized head metadata: title/description/OG/Twitter in the
 * active language plus hreflang alternates for en / es-MX / x-default.
 */
export function buildHead({
  path,
  lang,
  en,
  es,
  ogType = "website",
  image,
  imageWidth,
  imageHeight,
  jsonLd,
}: BuildHeadArgs) {
  const copy = lang === "es" ? es : en;
  const self = url(path, lang);
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  const meta: Array<Record<string, string>> = [
    { title: copy.title },
    { name: "description", content: copy.description },
    { name: "language", content: lang === "es" ? "es-MX" : "en-US" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: copy.ogTitle ?? copy.title },
    { property: "og:description", content: copy.ogDescription ?? copy.description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: self },
    { property: "og:locale", content: lang === "es" ? "es_MX" : "en_US" },
    { property: "og:locale:alternate", content: lang === "es" ? "en_US" : "es_MX" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: copy.ogTitle ?? copy.title },
    { name: "twitter:description", content: copy.ogDescription ?? copy.description },
  ];

  // Same preview image for every language variant of the URL (?lang=en included).
  meta.push({ property: "og:image", content: ogImage });
  meta.push({ property: "og:image:secure_url", content: ogImage });
  meta.push({
    property: "og:image:type",
    content: ogImage.endsWith(".png") ? "image/png" : "image/jpeg",
  });
  meta.push({ property: "og:image:width", content: String(image ? (imageWidth ?? 1200) : 1200) });
  meta.push({ property: "og:image:height", content: String(image ? (imageHeight ?? 630) : 630) });
  meta.push({ property: "og:image:alt", content: copy.ogTitle ?? copy.title });
  meta.push({ name: "twitter:image", content: ogImage });
  meta.push({ name: "twitter:image:alt", content: copy.ogTitle ?? copy.title });

  const links = [
    { rel: "canonical", href: self },
    { rel: "alternate", hrefLang: "es-MX", href: url(path, "es") },
    { rel: "alternate", hrefLang: "es", href: url(path, "es") },
    { rel: "alternate", hrefLang: "en", href: url(path, "en") },
    { rel: "alternate", hrefLang: "x-default", href: url(path, "es") },
  ];

  const graphs = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const scripts = graphs.map((g) => ({
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      inLanguage: lang === "es" ? "es-MX" : "en-US",
      ...g,
    }),
  }));

  return { meta, links, scripts };
}

/**
 * Shared business node used across routes.
 *
 * Modelled as a service-area business: Aphelion serves Tijuana and the rest of
 * Baja California but has no public street address in Tijuana, so no street
 * address is published here. Claiming an address the business does not occupy
 * is a Google Business Profile violation and risks profile suspension, and it
 * would misrepresent the entity in structured data. areaServed carries the
 * local signal instead, which is what the service-area model is for.
 */
export const PRIMARY_CITY = "Tijuana";

export const AREAS_SERVED = [
  "Tijuana",
  "Rosarito",
  "Tecate",
  "Mexicali",
  "Ensenada",
  "Baja California",
] as const;

export const ORGANIZATION_JSONLD = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Agencia de marketing digital y desarrollo web en Tijuana: sitios web, SEO, Google Ads, Meta Ads, video con dron y automatización con IA.",
  slogan: "Digital infrastructure for brands that refuse to settle.",
  priceRange: "$$",
  areaServed: AREAS_SERVED.map((name) => ({
    "@type": "City",
    name,
  })),
  address: {
    // Region-level only: no street address is published for a service-area business.
    "@type": "PostalAddress",
    addressRegion: "Baja California",
    addressCountry: "MX",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+52-646-129-3352",
      areaServed: "MX",
      availableLanguage: ["es", "en"],
    },
  ],
  knowsLanguage: ["es-MX", "en-US"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

/**
 * Search-param validator shared by every route so ?lang=en|es is typed.
 * `servicio` and `ref` ride along so a service page or the diagnostic can hand
 * the contact form the context the visitor arrived with.
 */
export function validateLangSearch(search: Record<string, unknown>): {
  lang?: Lang;
  servicio?: string;
  ref?: string;
} {
  const out: { lang?: Lang; servicio?: string; ref?: string } = {};
  const raw = search.lang;
  if (raw === "es" || raw === "en") out.lang = raw;
  if (typeof search.servicio === "string" && search.servicio)
    out.servicio = search.servicio.slice(0, 40);
  if (typeof search.ref === "string" && search.ref) out.ref = search.ref.slice(0, 40);
  return out;
}
