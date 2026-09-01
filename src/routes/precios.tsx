import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Plus, Check } from "lucide-react";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { useT, useLang } from "@/lib/i18n";
import { buildHead, SITE_URL, ORGANIZATION_JSONLD, AREAS_SERVED } from "@/lib/seo";
import { PRICE_BLOCKS, PRECIOS_FAQ, LOWEST_WEB_SETUP, type PriceBlock } from "@/lib/precios-data";

export const Route = createFileRoute("/precios")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) => {
    const lang = loaderData?.lang ?? "en";
    return buildHead({
      path: "/precios",
      lang,
      en: {
        title: "Pricing | Aphelion",
        description:
          "Website, marketing and drone packages with real figures in MXN. Serving Tijuana and Baja California. Final quote follows a short evaluation.",
      },
      es: {
        title: "Precios | Aphelion",
        description:
          "Paquetes de sitios web, marketing y dron con cifras reales en MXN. Atendemos Tijuana y Baja California. La cotización final sale de una evaluación corta.",
      },
      jsonLd: [
        ORGANIZATION_JSONLD,
        {
          "@type": "FAQPage",
          mainEntity: PRECIOS_FAQ.map((f) => ({
            "@type": "Question",
            name: lang === "es" ? f.qEs : f.q,
            acceptedAnswer: { "@type": "Answer", text: lang === "es" ? f.aEs : f.a },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Aphelion", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: lang === "es" ? "Precios" : "Pricing",
              item: `${SITE_URL}/precios`,
            },
          ],
        },
      ],
    });
  },
  component: Precios,
});

const fmt = (n: number) => `$${n.toLocaleString("es-MX")}`;

function Precios() {
  const t = useT();

  return (
    <main>
      <section className="on-dark bg-gradient-to-br from-neutral-800 to-neutral-950 px-5 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium tracking-[0.16em] text-white/50 uppercase">
            {t("Pricing", "Precios")}
          </p>
          <h1 className="mt-5 text-4xl font-medium tracking-[-0.03em] sm:text-6xl">
            {t("What it costs, before you call.", "Cuánto cuesta, antes de que llames.")}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t(
              `Real figures in Mexican pesos, from ${fmt(LOWEST_WEB_SETUP)} for a website. Every project still goes through a short evaluation, because the accurate number depends on what you already have and where the bottleneck actually is.`,
              `Cifras reales en pesos, desde ${fmt(LOWEST_WEB_SETUP)} para un sitio web. Todo proyecto pasa igual por una evaluación corta, porque el número exacto depende de qué ya tienes y de dónde está realmente el cuello de botella.`,
            )}
          </p>
          <p className="mt-4 text-sm text-white/50">
            {t(
              "Prices in MXN, before tax. Same rates across Tijuana, Rosarito, Tecate, Mexicali and Ensenada.",
              "Precios en MXN, antes de impuestos. Las mismas tarifas en Tijuana, Rosarito, Tecate, Mexicali y Ensenada.",
            )}
          </p>
        </div>
      </section>

      <div className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-20">
          {PRICE_BLOCKS.map((b) => (
            <Block key={b.id} block={b} />
          ))}
        </div>
      </div>

      <HowWeQuote />
      <PreciosFAQ />
      <CTAFooter />
    </main>
  );
}

function Block({ block }: { block: PriceBlock }) {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id={block.id} className="scroll-mt-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-3xl">
            {t(block.title, block.titleEs)}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
            {t(block.blurb, block.blurbEs)}
          </p>
        </div>
        <Link
          to={block.href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
        >
          {t("See details", "Ver detalles")}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {block.quotedOnly ? (
        <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 p-8 text-center">
          <p className="text-sm text-neutral-600">
            {t("Scoped after a call.", "Se define después de una llamada.")}
          </p>
          <Link
            to="/contacto"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            {t("Request a quote", "Pedir cotización")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      ) : (
        <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-50 text-xs uppercase tracking-[0.08em] text-neutral-500">
              <tr>
                <th className="px-5 py-3 font-medium">{t("Package", "Paquete")}</th>
                <th className="px-5 py-3 font-medium">{t("One-off", "Único")}</th>
                <th className="px-5 py-3 font-medium">{t("Monthly", "Mensual")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {block.rows.map((r) => (
                <tr key={r.name}>
                  <td className="px-5 py-4">
                    <p className="font-medium text-neutral-950">{r.name}</p>
                    <p className="mt-1 text-xs text-neutral-500">
                      {lang === "es" ? r.taglineEs : r.tagline}
                    </p>
                    {r.note && (
                      <p className="mt-1 text-xs text-neutral-400">
                        {lang === "es" ? r.noteEs : r.note}
                      </p>
                    )}
                  </td>
                  <td className="px-5 py-4 align-top whitespace-nowrap text-neutral-800">
                    {r.setup === null ? (
                      <span className="text-neutral-400">{t("On request", "A cotizar")}</span>
                    ) : (
                      fmt(r.setup)
                    )}
                  </td>
                  <td className="px-5 py-4 align-top whitespace-nowrap text-neutral-800">
                    {r.monthly === null ? (
                      <span className="text-neutral-400">—</span>
                    ) : (
                      fmt(r.monthly)
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function HowWeQuote() {
  const t = useT();
  const steps: [string, string][] = [
    [
      "We look at what you already have: site, accounts, tracking, and what is actually generating customers today.",
      "Revisamos qué ya tienes: sitio, cuentas, medición, y qué está generando clientes hoy.",
    ],
    [
      "We identify the bottleneck. It is often not the thing you came in asking about, and sometimes it costs less to fix.",
      "Identificamos el cuello de botella. Muchas veces no es aquello por lo que llegaste preguntando, y a veces cuesta menos arreglarlo.",
    ],
    [
      "You get a written scope with a fixed figure and what would change it, so there are no surprises mid-project.",
      "Recibes un alcance por escrito con una cifra fija y qué la modificaría, para que no haya sorpresas a medio proyecto.",
    ],
  ];
  return (
    <section className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-3xl">
          {t("How we get to the final number", "Cómo llegamos al número final")}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {t(
            "The packages above are starting points. The quote comes from a short evaluation, and it is free.",
            "Los paquetes de arriba son puntos de partida. La cotización sale de una evaluación corta, y es gratis.",
          )}
        </p>
        <ul className="mt-8 space-y-4">
          {steps.map(([en, es], i) => (
            <li key={i} className="flex gap-3">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-neutral-950" />
              <span className="text-sm leading-relaxed text-neutral-700">{t(en, es)}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/contacto"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          {t("Book the evaluation", "Agendar la evaluación")}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}

function PreciosFAQ() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-2xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-3xl">
          {t("Questions about pricing", "Preguntas sobre precios")}
        </h2>
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {PRECIOS_FAQ.map((f, i) => {
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
  );
}
