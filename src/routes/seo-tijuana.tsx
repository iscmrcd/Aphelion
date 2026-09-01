import { createFileRoute } from "@tanstack/react-router";
import { LocalServicePage } from "@/components/local/LocalServicePage";
import { buildHead, SITE_URL, ORGANIZATION_JSONLD, AREAS_SERVED } from "@/lib/seo";
import { SEO_TIJUANA } from "@/lib/local-data";

const page = SEO_TIJUANA;

export const Route = createFileRoute("/seo-tijuana")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) => {
    const lang = loaderData?.lang ?? "en";
    return buildHead({
      path: "/seo-tijuana",
      lang,
      en: { title: page.seoTitle, description: page.seoDescription },
      es: { title: page.seoTitleEs, description: page.seoDescriptionEs },
      jsonLd: [
        ORGANIZATION_JSONLD,
        {
          "@type": "Service",
          name: lang === "es" ? page.h1Es : page.h1,
          serviceType: page.serviceType,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name })),
          url: `${SITE_URL}/seo-tijuana`,
        },
        {
          "@type": "FAQPage",
          mainEntity: page.faq.map((f) => ({
            "@type": "Question",
            name: lang === "es" ? f.qEs : f.q,
            acceptedAnswer: { "@type": "Answer", text: lang === "es" ? f.aEs : f.a },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Aphelion", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: lang === "es" ? page.h1Es : page.h1,
              item: `${SITE_URL}/seo-tijuana`,
            },
          ],
        },
      ],
    });
  },
  component: Page,
});

function Page() {
  return <LocalServicePage page={page} blogCategories={["SEO"]} />;
}
