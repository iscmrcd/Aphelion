import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { WebsitesSection } from "@/components/servicios/WebsitesSection";
import { FAQ } from "@/components/servicios/FAQ";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { ScrollDrivenBanner } from "@/components/servicios/ScrollDrivenBanner";
import { useT } from "@/lib/i18n";
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
        title: "Websites — Six Tiers, One Standard | Aphelion",
        description:
          "Six website tiers, from a professional presence site to multi-tenant SaaS platforms. Setup, maintenance and a side-by-side comparison.",
        ogTitle: "Websites — Aphelion",
        ogDescription:
          "Software that sells for you: Presence, Professional, Lead-Gen, Automated, Commercial System and SaaS.",
      },
      es: {
        title: "Websites — Seis niveles, un estándar | Aphelion",
        description:
          "Seis niveles de páginas web: de presencia profesional a plataformas SaaS multiusuario. Setup, mantenimiento y comparativa lado a lado.",
        ogTitle: "Websites — Aphelion",
        ogDescription:
          "Software que vende por ti. Web Presencial, Profesional, Captación, Automatizada, Sistema Comercial y SaaS.",
      },
      jsonLd: [{
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
      }],
    }),
  component: WebsitesPage,
});

function WebsitesPage() {
  const t = useT();
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
              "Elige el escalón que necesitas hoy. Sube cuando el negocio lo pida — sin reconstruir, sin romper lo que ya funciona."
            )}
          </p>
        </div>
      </ScrollDrivenBanner>

      <WebsitesSection />
      <FAQ />
      <CTAFooter />
    </main>
  );
}
