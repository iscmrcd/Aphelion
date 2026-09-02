import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Plus, Check, MapPin } from "lucide-react";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { useT, useLang } from "@/lib/i18n";
import { type ServicePage } from "@/lib/servicios-data";

/**
 * Shell for the standalone service pages. Layout is shared, copy is not.
 * Sections marked pending in servicios-data render an honest "scoped on
 * request" block rather than a placeholder list of invented deliverables.
 */
export function ServiceLandingPage({ page }: { page: ServicePage }) {
  const t = useT();
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const deliverables = lang === "es" ? page.deliverablesEs : page.deliverables;

  return (
    <main>
      <section className="on-dark bg-gradient-to-br from-neutral-800 to-neutral-950 px-5 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium tracking-[0.16em] text-white/50 uppercase">
            {t(page.kicker, page.kickerEs)}
          </p>
          <h1 className="mt-5 text-4xl font-medium tracking-[-0.03em] sm:text-6xl">
            {t(page.h1, page.h1Es)}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t(page.intro, page.introEs)}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              {t("Book a diagnostic call", "Agendar llamada de diagnóstico")}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/precios"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
            >
              {t("See pricing", "Ver precios")}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-3xl">
              {t("What you get", "Qué recibes")}
            </h2>
            {page.deliverablesPending ? (
              <p className="mt-5 rounded-2xl border border-dashed border-neutral-300 p-6 text-sm leading-relaxed text-neutral-600">
                {t(
                  "Scope is defined per project. Tell us what you have and what you need, and we put it in writing before anything starts.",
                  "El alcance se define por proyecto. Cuéntanos qué tienes y qué necesitas, y lo dejamos por escrito antes de empezar.",
                )}
              </p>
            ) : (
              <ul className="mt-6 space-y-3">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-neutral-950" />
                    <span className="text-sm leading-relaxed text-neutral-700">{d}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-3xl">
              {t("How it is priced", "Cómo se cotiza")}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-neutral-700">
              {page.pricingPending
                ? t(
                    "No published figure yet for this service. It is quoted after a short evaluation, because the honest number depends on scope we have not seen.",
                    "Todavía sin cifra publicada para este servicio. Se cotiza después de una evaluación corta, porque el número honesto depende de un alcance que no hemos visto.",
                  )
                : t(page.pricing, page.pricingEs)}
            </p>
            <Link
              to="/precios"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
            >
              {t("All prices", "Todos los precios")}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <article className="border-t border-neutral-200 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-14">
          {page.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-2xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-3xl">
                {t(s.heading, s.headingEs)}
              </h2>
              <div className="mt-4 space-y-4">
                {(lang === "es" ? s.bodyEs : s.body).map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-neutral-700">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      {(page.localPath || page.guidePath) && (
        <section className="border-t border-neutral-200 px-5 py-16 sm:py-20">
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {page.localPath && (
              <Link
                to={page.localPath}
                className="group rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-950"
              >
                <p className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.08em] text-neutral-500 uppercase">
                  <MapPin className="h-3 w-3" />
                  Tijuana
                </p>
                <p className="mt-2 text-lg font-medium text-neutral-950">
                  {t(`${page.name} in Tijuana`, `${page.nameEs} en Tijuana`)}
                </p>
                <ArrowRight className="mt-4 h-4 w-4 text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-950" />
              </Link>
            )}
            {page.guidePath && (
              <Link
                to={page.guidePath}
                className="group rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-950"
              >
                <p className="text-xs font-medium tracking-[0.08em] text-neutral-500 uppercase">
                  {t("Guide", "Guía")}
                </p>
                <p className="mt-2 text-lg font-medium text-neutral-950">
                  {t(`How ${page.name} works`, `Cómo funciona ${page.nameEs}`)}
                </p>
                <ArrowRight className="mt-4 h-4 w-4 text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-950" />
              </Link>
            )}
          </div>
        </section>
      )}

      <section className="border-t border-neutral-200 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-2xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-3xl">
            {t("Frequently asked questions", "Preguntas frecuentes")}
          </h2>
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {page.faq.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-neutral-950">{t(f.q, f.qEs)}</span>
                    <Plus
                      className={`mt-0.5 h-4 w-4 shrink-0 text-neutral-500 transition-transform ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm leading-relaxed text-neutral-600">{t(f.a, f.aEs)}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}
