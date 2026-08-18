import type { Lang } from "./i18n";

export const SITE_URL = "https://aphelion.mx";
export const SITE_NAME = "Aphelion";

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
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const url = (path: string, lang?: Lang) => {
  const base = `${SITE_URL}${path === "/" ? "" : path}` || SITE_URL;
  return lang === "es" ? `${base || SITE_URL}?lang=es` : base || SITE_URL;
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
  jsonLd,
}: BuildHeadArgs) {
  const copy = lang === "es" ? es : en;
  const self = url(path, lang === "es" ? "es" : undefined);

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
    { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: copy.ogTitle ?? copy.title },
    { name: "twitter:description", content: copy.ogDescription ?? copy.description },
  ];

  if (image) {
    // Same preview image for every language variant of the URL (?lang=es included).
    meta.push({ property: "og:image", content: image });
    meta.push({ property: "og:image:secure_url", content: image });
    meta.push({ property: "og:image:width", content: String(imageWidth ?? 1200) });
    meta.push({ property: "og:image:height", content: String(imageHeight ?? 630) });
    meta.push({ property: "og:image:alt", content: copy.ogTitle ?? copy.title });
    meta.push({ name: "twitter:image", content: image });
    meta.push({ name: "twitter:image:alt", content: copy.ogTitle ?? copy.title });
  }

  const links = [
    { rel: "canonical", href: self },
    { rel: "alternate", hrefLang: "en", href: url(path) },
    { rel: "alternate", hrefLang: "es-MX", href: url(path, "es") },
    { rel: "alternate", hrefLang: "es", href: url(path, "es") },
    { rel: "alternate", hrefLang: "x-default", href: url(path) },
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

/** Shared Organization node used across routes. */
export const ORGANIZATION_JSONLD = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Digital infrastructure agency: websites, marketing, content, video and custom SaaS.",
  areaServed: ["MX", "US"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ensenada",
    addressRegion: "Baja California",
    addressCountry: "MX",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+52-646-129-3352",
      availableLanguage: ["en", "es"],
    },
  ],
};

/** Search-param validator shared by every route so ?lang=es is typed. */
export function validateLangSearch(search: Record<string, unknown>): { lang?: Lang } {
  const raw = search.lang;
  return raw === "es" || raw === "en" ? { lang: raw } : {};
}
