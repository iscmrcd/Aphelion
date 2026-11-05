import { createFileRoute, Link } from "@tanstack/react-router";
import { WebsitesSection } from "@/components/servicios/WebsitesSection";
import { FAQ } from "@/components/servicios/FAQ";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { ScrollDrivenBanner } from "@/components/servicios/ScrollDrivenBanner";
import { BlogTeaserSection } from "@/components/blog/BlogTeaserSection";
import { PortfolioSection } from "@/components/servicios/PortfolioSection";
import { useT, useLang } from "@/lib/i18n";
import { buildHead } from "@/lib/seo";
import { FAQ_WEB } from "@/lib/websites-data";
import { FAQ_WEB_EN } from "@/lib/websites-data.en";

export const Route = createFileRoute("/servicios/websites")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/servicios/websites",
      lang: loaderData?.lang ?? "en",
      en: {
        title: "Website Packages for Businesses | Aphelion",
        description:
          "Six website packages, from a professional presence site to automated websites and SaaS platforms. What each includes, upkeep and a side-by-side comparison.",
        ogTitle: "Website packages for businesses",
        ogDescription:
          "Six packages, from a professional site to automated websites and SaaS. Compare what each includes and pick the one your business needs.",
      },
      es: {
        title: "Paquetes de Páginas Web para Negocios | Aphelion",
        description:
          "Seis paquetes de página web, del sitio de presencia a la web automatizada y plataformas SaaS. Qué incluye cada uno, mantenimiento y comparativa lado a lado.",
        ogTitle: "Paquetes de páginas web para negocios",
        ogDescription:
          "Seis paquetes, del sitio profesional a la web automatizada y SaaS. Compara qué incluye cada uno y elige el que necesita tu negocio.",
      },
      jsonLd: [
        {
          "@type": "Service",
          serviceType: "Web design and development",
          provider: { "@type": "Organization", name: "Aphelion", url: "https://aphelion.mx" },
          areaServed: ["MX", "US"],
          name: "Websites",
        },
        {
          "@type": "FAQPage",
          mainEntity: (loaderData?.lang === "es" ? FAQ_WEB : FAQ_WEB_EN).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }),
  component: WebsitesPage,
});

function WebsitesPage() {
  const t = useT();
  const { lang } = useLang();
  return (
    <main className="relative min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <ScrollDrivenBanner>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            Websites
          </p>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
            {t("Six tiers. One philosophy.", "Seis niveles. Una sola filosofía.")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t(
              "Pick the tier you need today. Move up when the business asks for it — no rebuild, nothing broken along the way.",
              "Elige el escalón que necesitas hoy. Sube cuando el negocio lo pida — sin reconstruir, sin romper lo que ya funciona.",
            )}
          </p>
        </div>
      </ScrollDrivenBanner>

      <WebsitesSection />
      <FAQ />
      <PortfolioSection />
      <BlogTeaserSection categories={["Diseño Web"]} lang={lang} />
      <CTAFooter />
    </main>
  );
}
