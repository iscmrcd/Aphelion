import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { MarketingSection } from "@/components/servicios/MarketingSection";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { useMarketingData } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { buildHead } from "@/lib/seo";
import { FAQ_MARKETING } from "@/lib/marketing-data";
import { FAQ_MARKETING_EN } from "@/lib/marketing-data.en";
import banner from "@/assets/banners/gradient-3.png.asset.json";

export const Route = createFileRoute("/servicios/marketing")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/servicios/marketing",
      lang: loaderData?.lang ?? "en",
      en: {
        title: "Marketing & Content — Four Volumes | Aphelion",
        description:
          "Four marketing and content tiers: Presence, Growth, Brand Partner and Premium Production. One brand per category and market.",
        ogTitle: "Marketing & Content — Aphelion",
        ogDescription:
          "Real content, managed campaigns and cinematic production. One brand per category and competitive zone.",
      },
      es: {
        title: "Marketing y Contenido — Cuatro volúmenes | Aphelion",
        description:
          "Cuatro niveles de marketing y contenido: presencia, crecimiento, brand partner y producción premium. Exclusividad por rubro.",
        ogTitle: "Marketing & Contenido — Aphelion",
        ogDescription:
          "Contenido real, campañas administradas y producción cinematográfica. Una sola marca por categoría y zona.",
      },
      jsonLd: [
        {
          "@type": "Service",
          serviceType: "Digital marketing and content production",
          provider: { "@type": "Organization", name: "Aphelion", url: "https://aphelion.mx" },
          areaServed: ["MX", "US"],
          name: "Marketing & Content",
        },
        {
          "@type": "FAQPage",
          mainEntity: (loaderData?.lang === "es" ? FAQ_MARKETING : FAQ_MARKETING_EN).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }),
  component: MarketingPage,
});

function MarketingPage() {
  const t = useT();
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <section className="on-dark relative flex min-h-[460px] items-center overflow-hidden bg-neutral-950 px-5 pt-20 pb-24 sm:min-h-[620px] sm:pt-28 sm:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            backgroundImage: `url(${banner.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/10 to-neutral-950"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            {t("Marketing & Content", "Marketing & Contenido")}
          </p>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
            {t(
              "Four volumes. One brand per category.",
              "Cuatro volúmenes. Una sola marca por rubro.",
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t(
              "From an active presence to binational cinematic production. We work with a single company per category and competitive zone.",
              "De presencia activa a producción cinematográfica binacional. Trabajamos con una sola empresa por categoría y zona competitiva.",
            )}
          </p>
          <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {t("Category exclusivity · Limited spots", "Exclusividad por rubro · Cupo limitado")}
          </div>
        </div>
      </section>

      <MarketingSection />
      <MarketingFAQ />
      <CTAFooter />
    </main>
  );
}

function MarketingFAQ() {
  const t = useT();
  const { FAQ_MARKETING } = useMarketingData();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("Frequently asked questions", "Preguntas frecuentes")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            {t("How we work.", "Cómo trabajamos.")}
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQ_MARKETING.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-neutral-950">{f.q}</span>
                  <Plus
                    className={`h-4 w-4 flex-shrink-0 text-neutral-500 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pr-8 text-sm leading-relaxed text-neutral-500">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
