import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { GradientBorderFrame } from "@/components/servicios/GradientBorderFrame";
import { AiGradientDefs } from "@/components/servicios/AiGradientDefs";
import { AI_GRADIENT_TEXT, aiIconGradientStyle } from "@/lib/agente-ia-data";
import { useT } from "@/lib/i18n";
import { Reveal } from "./Motion";

/**
 * Explain the studio's combined offer in the existing demo section, with
 * working projects and a live AI demo as evidence.
 */
export function AgentIAPromo() {
  const t = useT();

  return (
    <section
      id="por-que-aphelion"
      className="scroll-mt-24 border-t border-neutral-200 px-5 py-20 sm:py-28"
    >
      <AiGradientDefs />
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em]">
          <Sparkles className="h-3.5 w-3.5" style={aiIconGradientStyle} aria-hidden />
          <span className={AI_GRADIENT_TEXT}>{t("Why Aphelion", "Por qué Aphelion")}</span>
        </p>

        <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-neutral-950 sm:text-4xl">
          {t(
            "Design, production and technology. One creative direction.",
            "Diseño, producción y tecnología. Con una misma dirección.",
          )}
        </h2>

        <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
          {[
            {
              title: t("Original production", "Producción propia"),
              description: t(
                "Photo, video and drone footage planned around your business and your brand.",
                "Fotografía, video y dron planeados alrededor de tu negocio y tu marca.",
              ),
            },
            {
              title: t("Systems already in operation", "Sistemas en operación"),
              description: t(
                "Real projects such as HAIMA's connected inventory, appointments and customer assistance.",
                "Proyectos reales como el inventario, la agenda y la atención conectados de HAIMA.",
              ),
            },
            {
              title: t("AI you can try", "IA que puedes probar"),
              description: t(
                "Live demos for real estate, healthcare and professional services, available before you enquire.",
                "Demos en vivo de inmobiliaria, salud y servicios profesionales, antes de contratar.",
              ),
            },
          ].map((point) => (
            <div key={point.title} className="border-t border-neutral-200 pt-4">
              <h3 className="text-sm font-medium text-neutral-950">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {/* Same outline treatment as that page's hero CTA. */}
          <GradientBorderFrame>
            <Link
              to="/servicios/agente-ia"
              hash="demo"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium transition hover:bg-neutral-100"
            >
              <span className={AI_GRADIENT_TEXT}>
                {t("Try the live demo", "Probar demo en vivo")}
              </span>
            </Link>
          </GradientBorderFrame>

          <Link
            to="/servicios/agente-ia"
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-950 transition hover:border-neutral-950"
          >
            {t("See how it works", "Ver cómo funciona")}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
