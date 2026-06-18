import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { WebsitesSection } from "@/components/servicios/WebsitesSection";
import { FAQ } from "@/components/servicios/FAQ";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import banner from "@/assets/banners/gradient-fondo.png.asset.json";


export const Route = createFileRoute("/servicios/websites")({
  head: () => ({
    meta: [
      { title: "Websites — Aphelion" },
      {
        name: "description",
        content:
          "Seis niveles de páginas web: de presencia profesional a plataformas SaaS multiusuario. Setup, mantenimiento y comparativa lado a lado.",
      },
      { property: "og:title", content: "Websites — Aphelion" },
      {
        property: "og:description",
        content:
          "Software que vende por ti. Web Presencial, Profesional, Captación, Automatizada, Sistema Comercial y SaaS.",
      },
    ],
  }),
  component: WebsitesPage,
});

function WebsitesPage() {
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
            Websites
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
            Websites
          </p>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
            Seis niveles. Una sola filosofía.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Elige el escalón que necesitas hoy. Sube cuando el negocio lo pida — sin
            reconstruir, sin romper lo que ya funciona.
          </p>
        </div>
      </section>


      <WebsitesSection />
      <FAQ />
      <CTAFooter />
    </main>
  );
}
