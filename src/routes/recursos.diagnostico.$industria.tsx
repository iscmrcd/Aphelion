import { createFileRoute, notFound } from "@tanstack/react-router";
import { Diagnostico } from "@/components/recursos/Diagnostico";
import { buildHead, SITE_URL, ORGANIZATION_JSONLD } from "@/lib/seo";
import { getVertical } from "@/lib/diagnostico-data";

/**
 * One route serves every vertical. Adding an industry means appending a block
 * to diagnostico-data.ts, not touching this file, the same way blog.$slug.tsx
 * serves 63 posts.
 */
export const Route = createFileRoute("/recursos/diagnostico/$industria")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps, params }) => {
    if (!getVertical(params.industria)) throw notFound();
    return deps;
  },
  head: ({ loaderData, params }) => {
    const v = getVertical(params.industria);
    if (!v) return {};
    const lang = loaderData?.lang ?? "en";
    const path = `/recursos/diagnostico/${v.slug}`;
    return buildHead({
      path,
      lang,
      en: { title: v.seoTitle, description: v.seoDescription },
      es: { title: v.seoTitleEs, description: v.seoDescriptionEs },
      jsonLd: [
        ORGANIZATION_JSONLD,
        {
          "@type": "WebApplication",
          name: lang === "es" ? v.title : v.titleEn,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: `${SITE_URL}${path}`,
          offers: { "@type": "Offer", price: "0", priceCurrency: "MXN" },
          provider: { "@id": `${SITE_URL}/#business` },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Aphelion", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: lang === "es" ? "Recursos" : "Resources",
              item: `${SITE_URL}/recursos`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: lang === "es" ? v.title : v.titleEn,
              item: `${SITE_URL}${path}`,
            },
          ],
        },
      ],
    });
  },
  component: Page,
});

function Page() {
  const { industria } = Route.useParams();
  const vertical = getVertical(industria);
  if (!vertical) return null;
  return <Diagnostico vertical={vertical} />;
}
