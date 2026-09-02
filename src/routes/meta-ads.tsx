import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/servicios/ServiceLandingPage";
import { buildHead, SITE_URL, ORGANIZATION_JSONLD, AREAS_SERVED } from "@/lib/seo";
import { META_ADS_SERVICE } from "@/lib/servicios-data";

const page = META_ADS_SERVICE;

export const Route = createFileRoute("/meta-ads")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) => {
    const lang = loaderData?.lang ?? "en";
    return buildHead({
      path: "/meta-ads",
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
          url: `${SITE_URL}/meta-ads`,
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
              item: `${SITE_URL}/meta-ads`,
            },
          ],
        },
      ],
    });
  },
  component: () => <ServiceLandingPage page={page} />,
});
