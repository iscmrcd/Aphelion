import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { MarketingSection } from "@/components/servicios/MarketingSection";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { FAQ_MARKETING } from "@/lib/marketing-data";
import banner from "@/assets/banners/gradient-3.png.asset.json";

export const Route = createFileRoute("/servicios/marketing")({
  head: () => ({
    meta: [
      { title: "Marketing & Contenido — Aphelion" },
      {
        name: "description",
        content:
          "Cuatro niveles de marketing y contenido: presencia, crecimiento, brand partner y producción premium. Exclusividad por rubro.",
      },
      { property: "og:title", content: "Marketing & Contenido — Aphelion" },
      {
        property: "og:description",
        content:
          "Contenido real, campañas administradas y producción cinematográfica. Una sola marca por categoría y zona.",
      },
    ],
  }),
  component: MarketingPage,
});

function MarketingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <div className="border-b border-neutral-200 px-5 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 transition hover:text-neutral-950"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Servicios
          </Link>
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            Marketing & Contenido
          </span>
        </div>
      </div>

      <section className="relative overflow-hidden bg-neutral-950 px-5 pt-20 pb-24 sm:pt-28 sm:pb-32">
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
            Marketing & Contenido
          </p>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
            Cuatro volúmenes. Una sola marca por rubro.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            De presencia activa a producción cinematográfica binacional.
            Trabajamos con una sola empresa por categoría y zona competitiva.
          </p>
          <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Exclusividad por rubro · Cupo limitado
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
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            Cómo trabajamos.
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
