import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLang, useT } from "@/lib/i18n";
import { buildHead, ORGANIZATION_JSONLD, SITE_URL, validateLangSearch } from "@/lib/seo";
import { VERTICALES } from "@/lib/diagnostico-data";
import { ENTRY_KEY, langSearch } from "@/lib/diagnostico-links";
import { trackCustom } from "@/lib/pixel";

/**
 * Industry selector for the diagnostic.
 *
 * Each card links to /recursos/diagnostico/<giro>, the same URL an ad can
 * point to directly. Picking a card fires IndustrySelected with the vertical
 * slug, which is what lets Ads Manager build one audience per industry.
 */
export const Route = createFileRoute("/recursos/diagnostico/")({
  validateSearch: validateLangSearch,
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) => {
    const lang = loaderData?.lang ?? "en";
    const path = "/recursos/diagnostico";
    return buildHead({
      path,
      lang,
      en: {
        title: "Free digital diagnostic for your business | Aphelion",
        description:
          "Pick your industry and answer a few quick questions about your online presence, response and follow-up. Instant, prioritised result. No email required.",
      },
      es: {
        title: "Diagnóstico digital gratuito para tu negocio | Aphelion",
        description:
          "Elige tu giro y responde unas preguntas rápidas sobre tu presencia en internet, atención y seguimiento. Resultado al momento y con prioridades. Sin pedir correo.",
      },
      jsonLd: [
        ORGANIZATION_JSONLD,
        {
          "@type": "CollectionPage",
          name: lang === "es" ? "Diagnóstico digital por giro" : "Digital diagnostic by industry",
          url: `${SITE_URL}${path}`,
          hasPart: VERTICALES.map((v) => ({
            "@type": "WebApplication",
            name: lang === "es" ? v.title : v.titleEn,
            url: `${SITE_URL}${path}/${v.slug}`,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "MXN" },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Aphelion", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: lang === "es" ? "Diagnóstico" : "Diagnostic",
              item: `${SITE_URL}${path}`,
            },
          ],
        },
      ],
    });
  },
  component: SelectorPage,
});

function markSelected(slug: string) {
  try {
    window.sessionStorage.setItem(ENTRY_KEY, JSON.stringify({ s: slug, t: Date.now() }));
  } catch {
    // Storage blocked: the diagnostic just counts as a direct visit.
  }
  trackCustom("IndustrySelected", { industry: slug });
}

function SelectorPage() {
  const t = useT();
  const { lang } = useLang();

  const steps = [
    {
      n: "1",
      title: t("Pick your industry", "Elige tu giro"),
      body: t(
        "Each industry gets questions about how it actually works.",
        "Cada giro tiene preguntas sobre cómo trabaja de verdad.",
      ),
    },
    {
      n: "2",
      title: t("Answer in about three minutes", "Responde en unos tres minutos"),
      body: t(
        'If you do not know an answer, pick "Not sure". It does not lower your score.',
        'Si no sabes una respuesta, elige "No lo sé". No te baja el puntaje.',
      ),
    },
    {
      n: "3",
      title: t("Get your priorities", "Recibe tus prioridades"),
      body: t(
        "Your result appears instantly, with what to fix first and what already works.",
        "Tu resultado aparece al momento, con qué atender primero y qué ya funciona.",
      ),
    },
  ];

  return (
    <main className="min-h-screen px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase">
            {t("Free diagnostic", "Diagnóstico gratuito")}
          </p>
          <h1 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-neutral-950 sm:text-5xl">
            {t(
              "How ready is your business to grow online?",
              "¿Qué tan preparado está tu negocio para crecer en internet?",
            )}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-600">
            {t(
              "Pick your industry to get questions made for it. You see your result right away, and we never ask for your email to show it.",
              "Elige tu giro para recibir preguntas hechas para él. Ves tu resultado al momento, y nunca pedimos tu correo para mostrártelo.",
            )}
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {VERTICALES.map((v) => {
            const Icon = v.icon;
            return (
              <li key={v.slug}>
                <Link
                  to="/recursos/diagnostico/$industria"
                  params={{ industria: v.slug }}
                  search={langSearch(lang)}
                  onClick={() => markSelected(v.slug)}
                  className="group flex h-full items-start gap-4 rounded-2xl border-[0.5px] border-neutral-200 bg-white p-5 transition hover:border-neutral-950"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-[0.5px] border-neutral-200 text-neutral-950">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-base font-medium tracking-[-0.01em] text-neutral-950">
                        {t(v.labelEn, v.label)}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:text-neutral-950" />
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-neutral-500">
                      {t(v.includesEn, v.includes)}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <ol className="mt-16 grid gap-6 border-t border-neutral-200 pt-10 sm:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n}>
              <p className="text-xs font-medium tracking-[0.16em] text-neutral-400 uppercase">
                {s.n}
              </p>
              <p className="mt-2 text-base font-medium text-neutral-950">{s.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-xl text-center text-xs leading-relaxed text-neutral-500">
          {t(
            "We store answers without personal data to improve this tool. Your name and phone only reach us if you ask for a call.",
            "Guardamos las respuestas sin datos personales para mejorar esta herramienta. Tu nombre y teléfono solo nos llegan si pides una llamada.",
          )}{" "}
          <Link
            to="/privacidad"
            search={langSearch(lang)}
            className="underline decoration-neutral-300 underline-offset-4 hover:text-neutral-800"
          >
            {t("Privacy notice", "Aviso de privacidad")}
          </Link>
        </p>
      </div>
    </main>
  );
}
