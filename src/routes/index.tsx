import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Hero } from "@/components/servicios/Hero";
import { TrustedLogos } from "@/components/servicios/TrustedLogos";
import { CategoryBento } from "@/components/servicios/CategoryBento";
import { WebsitesOverview } from "@/components/servicios/WebsitesOverview";
import { MarketingOverview } from "@/components/servicios/MarketingOverview";
import { CategoryPlaceholders } from "@/components/servicios/CategoryPlaceholders";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { buildHead, ORGANIZATION_JSONLD, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/",
      lang: loaderData?.lang ?? "en",
      en: {
        title: "Aphelion — Digital Infrastructure for High-Ticket Brands",
        description:
          "Websites, marketing, content, video and custom SaaS for brands that refuse to settle. One agency for your entire digital infrastructure.",
        ogTitle: "Aphelion — Digital Infrastructure Agency",
        ogDescription:
          "Digital infrastructure for brands that refuse to settle. Six website tiers plus marketing and content.",
      },
      es: {
        title: "Aphelion — Websites, Marketing y SaaS para marcas high-ticket",
        description:
          "Websites, marketing, contenido, video y SaaS para marcas que no se conforman. Una sola agencia para toda tu infraestructura digital.",
        ogTitle: "Aphelion — Agencia digital",
        ogDescription:
          "Infraestructura digital para marcas que no se conforman. Seis niveles de web más marketing y contenido.",
      },
      jsonLd: [
        ORGANIZATION_JSONLD,
        {
          "@type": "WebSite",
          name: "Aphelion",
          url: SITE_URL,
          inLanguage: ["en-US", "es-MX"],
        },
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
  component: Index,
});

function Index() {
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
