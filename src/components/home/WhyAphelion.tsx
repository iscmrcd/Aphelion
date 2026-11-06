import { Link } from "@tanstack/react-router";
import { Aperture, Cpu, Sparkles } from "lucide-react";
import { useT } from "@/lib/i18n";
import { GradientBorderFrame } from "@/components/servicios/GradientBorderFrame";
import { AiGradientDefs } from "@/components/servicios/AiGradientDefs";
import { AI_GRADIENT_TEXT } from "@/lib/agente-ia-data";
import bg from "@/assets/banners/brand-partner-bg-v3.jpg.asset.json";

/**
 * What a local competitor cannot copy quickly: in-house production, real
 * software already running businesses, and AI the visitor can try right now.
 * Stays dark in both themes (`on-dark`), like the CTA band.
 */
export function WhyAphelion() {
  const t = useT();

  const POINTS = [
    {
      icon: Aperture,
      title: t("In-house production", "Producción propia"),
      body: t(
        "Photo, video and drone with professional gear and our own art direction. No stock photos, no outsourcing.",
        "Fotografía, video y dron con equipo profesional y nuestra propia dirección de arte. Sin fotos de banco ni subcontratar.",
      ),
    },
    {
      icon: Cpu,
      title: t("Real software, not templates", "Software real, no plantillas"),
      body: t(
        "We build systems that already run real businesses, like HAIMA's live inventory and 24/7 booking.",
        "Construimos sistemas que ya operan negocios reales, como el inventario en vivo y la agenda 24/7 de HAIMA.",
      ),
    },
    {
      icon: Sparkles,
      title: t("AI you can try now", "IA que puedes probar ahora"),
      body: t(
        "Talk to our live agents before you decide. No signup and no demo call.",
        "Platica con nuestros agentes en vivo antes de decidir. Sin registro ni llamada de demo.",
      ),
    },
  ];

  return (
    <section className="on-dark relative isolate overflow-hidden bg-neutral-950 px-5 py-20 text-white sm:py-28">
      <AiGradientDefs />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${bg.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/70 via-neutral-950/80 to-neutral-950"
      />

      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-white/60">
            {t("Why Aphelion", "Por qué Aphelion")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-5xl">
            {t(
              "One team that shoots, codes and sells.",
              "Un equipo que produce, programa y vende.",
            )}
          </h2>
          <p className="mt-5 text-base text-white/65 sm:text-lg">
            {t(
              "Most agencies do one of these and outsource the rest. We do all three under the same creative direction, so the site, the content and the ads tell the same story.",
              "La mayoría de las agencias hace una de estas cosas y subcontrata el resto. Nosotros hacemos las tres con la misma dirección creativa, para que tu sitio, tu contenido y tus anuncios cuenten la misma historia.",
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3 md:gap-4">
          {POINTS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.07] sm:p-7"
              >
                <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <GradientBorderFrame>
            <Link
              to="/servicios/agente-ia"
              hash="demo"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium transition hover:bg-neutral-100"
            >
              <span className={AI_GRADIENT_TEXT}>
                {t("Try the AI agent", "Prueba el agente IA")}
              </span>
            </Link>
          </GradientBorderFrame>
          <span className="text-sm text-white/55">
            {t(
              "Three live demos: real estate, health and services.",
              "Tres demos en vivo: inmobiliaria, salud y servicios.",
            )}
          </span>
        </div>
      </div>
    </section>
  );
}
