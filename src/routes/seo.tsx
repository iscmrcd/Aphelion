import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/servicios/ServiceLandingPage";
import { buildHead, SITE_URL, ORGANIZATION_JSONLD, AREAS_SERVED } from "@/lib/seo";
import { SEO_SERVICE } from "@/lib/servicios-data";

const page = SEO_SERVICE;

export const Route = createFileRoute("/seo")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) => {
    const lang = loaderData?.lang ?? "en";
    return buildHead({
      path: "/seo",
      lang,
      en: { title: page.seoTitle, description: page.seoDescription },
      es: { title: page.seoTitleEs, description: page.seoDescriptionEs },
      jsonLd: [
        ORGANIZATION_JSONLD,
        {
          "@type": "Service",
          name: lang === "es" ? page.nameEs : page.name,
          serviceType: page.serviceType,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name })),
          url: `${SITE_URL}/seo`,
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
              name: lang === "es" ? page.nameEs : page.name,
              item: `${SITE_URL}/seo`,
            },
          ],
        },
      ],
    });
  },
  component: () => <ServiceLandingPage page={page} />,
});
