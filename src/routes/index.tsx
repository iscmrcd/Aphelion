import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "@/components/home/HomeHero";
import { ClientsStrip } from "@/components/home/ClientsStrip";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { WhyAphelion } from "@/components/home/WhyAphelion";
import { HowWeWork } from "@/components/home/HowWeWork";
import { InvestmentBand } from "@/components/home/InvestmentBand";
import { SimpleFAQ } from "@/components/home/SimpleFAQ";
import { ContactCTA } from "@/components/home/ContactCTA";
import { buildHead, ORGANIZATION_JSONLD, SITE_URL } from "@/lib/seo";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/",
      lang: loaderData?.lang ?? "es",
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
          itemListElement: ["Websites", "Marketing & Content", "Automation & Systems"].map(
            (name, i) => ({ "@type": "ListItem", position: i + 1, name }),
          ),
        },
      ],
    }),
  component: Index,
});

/*
 * Order of the page, top to bottom: what we do, proof, the three areas, why
 * us, how we work, entry prices, questions, and what happens when you write.
 * Proof comes before packages on purpose: the visitor should see real work
 * before being asked to compare prices.
 */
function Index() {
  const t = useT();

  const FAQ = [
    {
      q: t("How much does it cost?", "¿Cuánto cuesta?"),
      a: t(
        "Websites start at $9,900 MXN and marketing at $6,450 MXN a month, plus VAT. Every price is on the pricing page; the final figure comes from a short, free review.",
        "Los sitios arrancan en $9,900 MXN y el marketing en $6,450 MXN al mes, más IVA. Todos los precios están en la página de precios; la cifra final sale de una evaluación corta y gratuita.",
      ),
    },
    {
      q: t("How long does it take?", "¿Cuánto tarda?"),
      a: t(
        "A simple site takes days and a system takes weeks. You get the exact date in writing with the proposal.",
        "Una página sencilla toma días y un sistema, semanas. Te damos la fecha exacta por escrito en la propuesta.",
      ),
    },
    {
      q: t("Who owns what you build?", "¿De quién es lo que construyen?"),
      a: t(
        "Your brand, your content and your clients' data are yours. If you decide to move, we hand over your content and your data exported.",
        "Tu marca, tu contenido y los datos de tus clientes son tuyos. Si decides migrar, te entregamos tu contenido y tus datos exportados.",
      ),
    },
    {
      q: t("Do you work outside Ensenada?", "¿Trabajan fuera de Ensenada?"),
      a: t(
        "Yes. Tijuana, Rosarito, Tecate, Mexicali and Ensenada at the same rates, and clients in California. Meetings by video or in person.",
        "Sí. Tijuana, Rosarito, Tecate, Mexicali y Ensenada con las mismas tarifas, y clientes en California. Las reuniones son por video o en persona.",
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <HomeHero />
      <ClientsStrip />
      <FeaturedWork />
      <ServiceAreas />
      <WhyAphelion />
      <HowWeWork bordered={false} />
      <InvestmentBand />
      <SimpleFAQ items={FAQ} />
      <ContactCTA />
    </main>
  );
}
