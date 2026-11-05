import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Hero } from "@/components/servicios/Hero";
import { TrustedLogos } from "@/components/servicios/TrustedLogos";
import { CategoryBento } from "@/components/servicios/CategoryBento";
import { WebsitesOverview } from "@/components/servicios/WebsitesOverview";
import { MarketingOverview } from "@/components/servicios/MarketingOverview";
import { CategoryPlaceholders } from "@/components/servicios/CategoryPlaceholders";
import { AgentIAPromo } from "@/components/servicios/AgentIAPromo";
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
        title: "Digital Marketing Agency in Baja California | Aphelion",
        description:
          "Websites, SEO, Google Ads, Meta Ads, social media, drone video and AI agents for businesses in Tijuana, Ensenada and across Baja California.",
        ogTitle: "Aphelion — Digital Marketing Agency in Tijuana & Ensenada",
        ogDescription:
          "Websites, Google and Meta ads, social media, drone video and AI agents. One bilingual team for your whole online presence.",
      },
      es: {
        title: "Agencia de Marketing Digital en Baja California | Aphelion",
        description:
          "Páginas web, SEO, Google Ads, Meta Ads, redes sociales, video con dron y agentes de IA para negocios en Tijuana, Ensenada y todo Baja California.",
        ogTitle: "Aphelion — Agencia de marketing digital en Tijuana y Ensenada",
        ogDescription:
          "Páginas web, anuncios en Google y Meta, redes sociales, video con dron y agentes de IA. Un solo equipo bilingüe para todo tu negocio en línea.",
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
            "AI Agent",
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
      <AgentIAPromo />
      <WebsitesOverview />
      <MarketingOverview />
      <CategoryPlaceholders />
      <CTAFooter />
    </main>
  );
}
