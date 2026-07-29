import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Hero } from "@/components/servicios/Hero";
import { TrustedLogos } from "@/components/servicios/TrustedLogos";
import { CategoryBento } from "@/components/servicios/CategoryBento";
import { WebsitesOverview } from "@/components/servicios/WebsitesOverview";
import { MarketingOverview } from "@/components/servicios/MarketingOverview";
import { CategoryPlaceholders } from "@/components/servicios/CategoryPlaceholders";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { buildHead, ORGANIZATION_JSONLD } from "@/lib/seo";

export const Route = createFileRoute("/servicios/")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/servicios",
      lang: loaderData?.lang ?? "en",
      en: {
        title: "Services — Websites, Marketing & SaaS | Aphelion",
        description:
          "Websites, marketing, content, video and custom SaaS for high-ticket brands. One agency for your entire digital infrastructure.",
        ogTitle: "Services — Aphelion",
        ogDescription:
          "Digital infrastructure for brands that refuse to settle. Six website tiers plus marketing and content.",
      },
      es: {
        title: "Servicios — Websites, Marketing y SaaS | Aphelion",
        description:
          "Websites, marketing, contenido, video y SaaS para marcas high-ticket. Una sola agencia para toda tu infraestructura digital.",
        ogTitle: "Servicios — Aphelion",
        ogDescription:
          "Infraestructura digital para marcas que no se conforman. Seis niveles de web más marketing y contenido.",
      },
      jsonLd: [
        ORGANIZATION_JSONLD,
        {
          "@type": "ItemList",
          name: "Aphelion services",
          itemListElement: [
            "Websites",
            "Marketing & Content",
            "Content Production",
            "Video & Drone",
            "Custom SaaS",
            "Branding",
          ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
        },
      ],
    }),
  component: ServiciosPage,
});

function ServiciosPage() {
  const navigate = useNavigate();
  const goWebsites = () => navigate({ to: "/servicios/websites" });

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <Hero onCta={goWebsites} />
      <TrustedLogos />
      <CategoryBento onWebsites={goWebsites} />
      <WebsitesOverview />
      <MarketingOverview />
      <CategoryPlaceholders />
      <CTAFooter />
    </main>
  );
}
