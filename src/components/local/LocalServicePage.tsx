import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Plus, MapPin } from "lucide-react";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { BlogTeaserSection } from "@/components/blog/BlogTeaserSection";
import { useT, useLang } from "@/lib/i18n";
import { getLocalPage, type LocalPage } from "@/lib/local-data";

/**
 * Shared shell for the Tijuana city pages. The layout is shared; the copy is
 * not. Each page in local-data.ts carries its own sections and FAQ, because
 * city pages built by swapping a city name into one template are doorway
 * pages and Google treats them as spam.
 */
export function LocalServicePage({
  page,
  blogCategories = [],
}: {
  page: LocalPage;
  /** Blog categories to surface at the bottom, for internal linking. */
  blogCategories?: string[];
}) {
  const t = useT();
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const related = page.related.map(getLocalPage).filter((p): p is LocalPage => Boolean(p));

  return (
    <main>
      <section className="on-dark relative overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-950 px-5 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 text-xs font-medium tracking-[0.08em] text-white/70 uppercase">
            <MapPin className="h-3 w-3" />
            {t(page.kicker, page.kickerEs)}
          </p>
          <h1 className="mt-6 text-4xl font-medium tracking-[-0.03em] sm:text-6xl">
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
            <a
              href="https://wa.me/526461293352?text=Hola%20Aphelion%2C%20escribo%20desde%20Tijuana."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <article className="px-5 py-20 sm:py-28">
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

      <section className="border-t border-neutral-200 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
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

      {page.parentPath && (
        <section className="border-t border-neutral-200 px-5 py-14">
          <div className="mx-auto max-w-3xl">
            <Link
              to={page.parentPath}
              className="group flex items-center justify-between gap-6 rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-950"
            >
              <div>
                <p className="text-xs font-medium tracking-[0.08em] text-neutral-500 uppercase">
                  {t("The service", "El servicio")}
                </p>
                <p className="mt-2 text-lg font-medium text-neutral-950">
                  {t(page.parentLabel ?? "", page.parentLabelEs ?? "")}
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                  {t(
                    "What we deliver, how we start and how it is priced.",
                    "Qué entregamos, cómo arrancamos y cómo se cotiza.",
                  )}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-950" />
            </Link>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="border-t border-neutral-200 px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-2xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-3xl">
              {t("More in Tijuana", "Más en Tijuana")}
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.path}
                  to={r.path}
                  className="group rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-950"
                >
                  <p className="text-xs font-medium tracking-[0.08em] text-neutral-500 uppercase">
                    Tijuana
                  </p>
                  <p className="mt-2 text-lg font-medium text-neutral-950">
                    {t(r.service, r.serviceEs)}
                  </p>
                  <ArrowRight className="mt-4 h-4 w-4 text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-950" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <BlogTeaserSection
        categories={blogCategories}
        count={2}
        lang={lang}
        title="Related reading"
        titleEs="Lecturas relacionadas"
      />

      <CTAFooter />
    </main>
  );
}
