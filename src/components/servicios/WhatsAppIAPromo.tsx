import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { GradientBorderFrame } from "@/components/servicios/GradientBorderFrame";
import { AiGradientDefs } from "@/components/servicios/AiGradientDefs";
import { AI_GRADIENT_TEXT, aiIconGradientStyle } from "@/lib/whatsapp-ia-data";
import { useT } from "@/lib/i18n";

/**
 * Homepage promo for the WhatsApp IA product.
 *
 * Copy echoes that page's hero on purpose, so someone arriving from here
 * doesn't feel handed off to a different product. The CTA points straight at
 * the live demo rather than the top of the page — the demo is the argument.
 */
export function WhatsAppIAPromo() {
  const t = useT();

  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
      <AiGradientDefs />
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em]">
          <Sparkles className="h-3.5 w-3.5" style={aiIconGradientStyle} aria-hidden />
          <span className={AI_GRADIENT_TEXT}>{t("WhatsApp AI", "WhatsApp IA")}</span>
        </p>

        <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-neutral-950 sm:text-4xl">
          {t(
            "Your WhatsApp, answering like your best salesperson.",
            "Tu WhatsApp, respondiendo como tu mejor vendedor.",
          )}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-500">
          {t(
            "Automated flows for the questions that repeat, or an AI agent that understands, qualifies and books. You can talk to three live agents right now — no signup, no demo call.",
            "Flujos automatizados para las preguntas que se repiten, o un agente de IA que entiende, califica y agenda. Puedes platicar con tres agentes en vivo ahora mismo, sin registro ni llamada de demo.",
          )}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {/* Same outline treatment as that page's hero CTA. */}
          <GradientBorderFrame>
            <Link
              to="/servicios/whatsapp-ia"
              hash="demo"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium transition hover:bg-neutral-100"
            >
              <span className={AI_GRADIENT_TEXT}>{t("Try it yourself", "Pruébalo tú mismo")}</span>
            </Link>
          </GradientBorderFrame>

          <Link
            to="/servicios/whatsapp-ia"
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-950 transition hover:border-neutral-950"
          >
            {t("See how it works", "Ver cómo funciona")}
          </Link>
        </div>
      </div>
    </section>
  );
}
