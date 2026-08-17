import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, MessageSquare, Plus, Sparkles } from "lucide-react";
import { WhatsAppDemo } from "@/components/servicios/WhatsAppDemo";
import { AutomatedFlowSection } from "@/components/servicios/AutomatedFlowSection";
import { IntegrationsSection } from "@/components/servicios/IntegrationsSection";
import { AiGradientDefs } from "@/components/servicios/AiGradientDefs";
import { GradientBorderFrame } from "@/components/servicios/GradientBorderFrame";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { BlogTeaserSection } from "@/components/blog/BlogTeaserSection";
import {
  AI_ACCENT,
  AI_GRADIENT,
  AI_GRADIENT_ON,
  AI_ON_GRADIENT_SHADOW,
  AI_GRADIENT_TEXT,
  aiIconGradientStyle,
  WHATSAPP_IA_FAQ,
} from "@/lib/whatsapp-ia-data";
import { useT, useLang } from "@/lib/i18n";
import { buildHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/servicios/whatsapp-ia")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/servicios/whatsapp-ia",
      lang: loaderData?.lang ?? "en",
      en: {
        title: "WhatsApp AI for Business | Aphelion",
        description:
          "Automated and AI-powered WhatsApp agents that answer, qualify leads and book appointments. Try three live agents on the page before you decide.",
        ogTitle: "WhatsApp AI — Aphelion",
        ogDescription:
          "Automated flows or a real conversational AI agent on WhatsApp. Try it live on the page, no signup.",
      },
      es: {
        title: "WhatsApp con IA para Negocios | Aphelion",
        description:
          "Agentes de WhatsApp automatizados y con IA que responden, califican leads y agendan citas. Prueba tres agentes en vivo antes de decidir.",
        ogTitle: "WhatsApp con IA — Aphelion",
        ogDescription:
          "Flujos automatizados o un agente de IA conversacional real en WhatsApp. Pruébalo en vivo en la página, sin registro.",
      },
      jsonLd: [
        {
          "@type": "Service",
          serviceType: "WhatsApp automation and conversational AI agents",
          provider: { "@type": "Organization", name: "Aphelion", url: SITE_URL },
          areaServed: ["MX", "US"],
          name: "WhatsApp IA",
        },
        {
          "@type": "FAQPage",
          mainEntity: WHATSAPP_IA_FAQ.map((f) => ({
            "@type": "Question",
            name: loaderData?.lang === "es" ? f.q : f.qEn,
            acceptedAnswer: {
              "@type": "Answer",
              text: loaderData?.lang === "es" ? f.a : f.aEn,
            },
          })),
        },
      ],
    }),
  component: WhatsAppIAPage,
});

function WhatsAppIAPage() {
  const t = useT();
  const { lang } = useLang();

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <AiGradientDefs />
      {/* Hero */}
      <section className="on-dark relative flex min-h-[460px] items-center overflow-hidden bg-neutral-950 px-5 pt-20 pb-24 sm:min-h-[560px] sm:pt-28 sm:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            {t("WhatsApp AI", "WhatsApp con IA")}
          </p>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
            {t(
              "Your WhatsApp, answering like your best salesperson.",
              "Tu WhatsApp, respondiendo como tu mejor vendedor.",
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t(
              "Automated flows for the predictable questions, or a real AI agent that understands, qualifies and books. This isn't a mockup — scroll down and talk to three live agents yourself.",
              "Flujos automatizados para las preguntas predecibles, o un agente de IA real que entiende, califica y agenda. Esto no es un mockup: baja y platica tú mismo con tres agentes en vivo.",
            )}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {/* Represents both tiers, so it takes the ramp as an outline only. */}
            <GradientBorderFrame>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                {t("Try it yourself", "Pruébalo tú mismo")}
              </a>
            </GradientBorderFrame>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
            >
              {t("Request a quote", "Solicitar cotización")}
            </Link>
          </div>
        </div>
      </section>

      {/* Package comparison — no prices here, only what each one is */}
      <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              {t("Two ways to do it", "Dos formas de hacerlo")}
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
              {t(
                "Not every business needs conversational AI.",
                "No todo negocio necesita IA conversacional.",
              )}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-500">
              {t(
                "If your questions repeat, automation solves it cheaper. If the conversation changes with every customer, that's where AI earns its cost.",
                "Si tus preguntas se repiten, la automatización lo resuelve más barato. Si la conversación cambia con cada cliente, ahí es donde la IA justifica su costo.",
              )}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <TierCard
              icon={<MessageSquare className="h-4 w-4" aria-hidden />}
              eyebrow={t("Automated", "Automatizado")}
              title={t("Preloaded flows", "Flujos precargados")}
              description={t(
                "A menu-style flow of questions and preset answers. Predictable by design.",
                "Un flujo tipo menú de preguntas y respuestas predefinidas. Predecible por diseño.",
              )}
              features={[
                t(
                  "Menu-style flow: the customer picks from preset options",
                  "Flujo tipo menú: el cliente elige entre opciones predefinidas",
                ),
                t(
                  "Answers are identical every time, nothing improvised",
                  "Las respuestas son idénticas siempre, nada improvisado",
                ),
                t(
                  "No AI: it answers what's in the tree and hands off the rest",
                  "Sin IA: responde lo que está en el árbol y lo demás lo pasa a una persona",
                ),
                t(
                  "Fast to set up, with no per-message model cost",
                  "Rápido de implementar, sin costo de modelo por mensaje",
                ),
              ]}
              idealLabel={t("Ideal for", "Ideal para")}
              ideal={[
                t("Hours", "Horarios"),
                t("FAQs", "Preguntas frecuentes"),
                t("Basic catalog", "Catálogo básico"),
                t("Location", "Ubicación"),
              ]}
              ctaHref="#flujo-automatizado"
            />

            <TierCard
              featured
              accent
              icon={<Sparkles className="h-4 w-4" style={aiIconGradientStyle} aria-hidden />}
              eyebrow={t("Conversational AI", "IA Conversacional")}
              title={t("A real agent", "Un agente real")}
              description={t(
                "Runs on Claude. Understands natural language and holds context through the whole conversation.",
                "Corre con Claude. Entiende lenguaje natural y mantiene el contexto durante toda la conversación.",
              )}
              features={[
                t(
                  "Claude engine: understands natural language, keeps context",
                  "Motor con Claude: entiende lenguaje natural, mantiene contexto",
                ),
                t(
                  "Qualifies leads, books appointments, drafts preliminary quotes",
                  "Califica leads, agenda citas, genera cotizaciones preliminares",
                ),
                t(
                  "Adapts to your business: real estate, health, services, whatever it is",
                  "Se adapta a tu negocio: real estate, salud, servicios, lo que sea",
                ),
                t("Escalates to a human when it should", "Escala a una persona cuando corresponde"),
              ]}
              idealLabel={t("Ideal for", "Ideal para")}
              ideal={[
                t(
                  "Businesses where the conversation varies and the sale depends on understanding the customer",
                  "Negocios donde la conversación varía y la venta depende de entender al cliente",
                ),
              ]}
              ctaHref="#demo"
            />
          </div>
        </div>
      </section>

      <AutomatedFlowSection />

      {/* Demo */}
      <section
        id="demo"
        className="scroll-mt-20 border-t border-neutral-200 bg-neutral-100 px-5 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              <span className={AI_GRADIENT_TEXT}>
                {t("Conversational AI", "IA Conversacional")}
              </span>
              <span aria-hidden> · </span>
              {t("Live demo", "Demo en vivo")}
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
              {t("Try it yourself.", "Pruébalo tú mismo.")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-500">
              {t(
                "Three agents, same engine, different context. Pick an industry and talk to it like a customer would — ask about prices, availability, whatever you want.",
                "Tres agentes, mismo motor, distinto contexto. Elige una industria y háblale como lo haría un cliente: pregunta precios, disponibilidad, lo que quieras.",
              )}
            </p>
          </div>

          <WhatsAppDemo />
        </div>
      </section>

      <IntegrationsSection />

      {/* Pricing */}
      <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              {t("Pricing", "Precios")}
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
              {t("Every implementation is different.", "Cada implementación es distinta.")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-500">
              {t(
                "The price depends on message volume, the integrations you need (CRM, calendar, catalog) and how far the agent gets customized to your business. We quote after understanding those three.",
                "El precio depende del volumen de mensajes, las integraciones que necesites (CRM, calendario, catálogo) y qué tanto se personaliza el agente a tu negocio. Cotizamos después de entender esos tres puntos.",
              )}
            </p>
          </div>

          {/* PENDIENTE: agregar precios cuando Isaac los defina */}
          <div className="grid gap-5 sm:grid-cols-2">
            <QuoteCard
              eyebrow={t("Automated", "Automatizado")}
              note={t(
                "Scoped by number of flows and integrations.",
                "Se define por número de flujos e integraciones.",
              )}
              label={t("Custom quote", "Cotización personalizada")}
              cta={t("Request your quote", "Solicita tu cotización")}
            />
            <QuoteCard
              accent
              eyebrow={t("Conversational AI", "IA Conversacional")}
              note={t(
                "Scoped by message volume, integrations and level of customization.",
                "Se define por volumen de mensajes, integraciones y nivel de personalización.",
              )}
              label={t("Custom quote", "Cotización personalizada")}
              cta={t("Request your quote", "Solicita tu cotización")}
            />
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Renders nothing until posts in this category exist. */}
      <BlogTeaserSection categories={["Automation", "Automatización"]} lang={lang} />

      <CTAFooter />
    </main>
  );
}

function FAQSection() {
  const t = useT();
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-neutral-200 bg-neutral-100 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            FAQ
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            {t("Before you decide.", "Antes de decidir.")}
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {WHATSAPP_IA_FAQ.map((f, i) => {
            const isOpen = open === i;
            const question = lang === "es" ? f.q : f.qEn;
            const answer = lang === "es" ? f.a : f.aEn;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-neutral-950">{question}</span>
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
                    <p className="pr-8 text-sm leading-relaxed text-neutral-500">{answer}</p>
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

function TierCard({
  icon,
  eyebrow,
  title,
  description,
  features,
  idealLabel,
  ideal,
  ctaHref,
  accent = false,
  featured = false,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  idealLabel: string;
  ideal: string[];
  /** Anchor the "See how it works" button scrolls to. */
  ctaHref: string;
  /** Applies the AI gradient to the eyebrow and CTA. Conversational AI only. */
  accent?: boolean;
  featured?: boolean;
}) {
  const t = useT();
  return (
    <div
      className={`flex flex-col rounded-2xl border p-7 transition sm:p-8 ${
        featured
          ? "border-neutral-950 bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]"
          : "border-neutral-200 bg-white"
      }`}
    >
      <div className="mb-5 flex items-center gap-2">
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${
            accent ? "border border-neutral-200 bg-white" : "bg-neutral-950 text-white"
          }`}
        >
          {icon}
        </span>
        <span
          className={`text-xs font-medium uppercase tracking-[0.14em] ${
            accent ? AI_GRADIENT_TEXT : "text-neutral-500"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      <h3 className="text-2xl font-medium tracking-[-0.02em] text-neutral-950">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-neutral-500">{description}</p>

      <ul className="mt-7 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-800">
            <Check
              className="mt-0.5 h-4 w-4 flex-shrink-0"
              style={accent ? { color: AI_ACCENT } : undefined}
              strokeWidth={2.5}
              color={accent ? undefined : "#0a0a0a"}
            />
            <span className="leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex-1">
        <p className="mb-2.5 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
          {idealLabel}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {ideal.map((i) => (
            <span
              key={i}
              className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs leading-relaxed text-neutral-700"
            >
              {i}
            </span>
          ))}
        </div>
      </div>

      <a
        href={ctaHref}
        style={accent ? AI_ON_GRADIENT_SHADOW : undefined}
        className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${
          accent
            ? `border border-transparent ${AI_GRADIENT_ON} ${AI_GRADIENT} hover:opacity-90`
            : "border border-neutral-200 text-neutral-950 hover:border-neutral-950"
        }`}
      >
        {t("See how it works", "Ver cómo funciona")}
      </a>
    </div>
  );
}

function QuoteCard({
  eyebrow,
  note,
  label,
  cta,
  accent = false,
}: {
  eyebrow: string;
  note: string;
  label: string;
  cta: string;
  /** Gradient CTA. Conversational AI only — the Automated card stays neutral. */
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 sm:p-8">
      <span className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
        {eyebrow}
      </span>
      {/* PENDIENTE: agregar precios cuando Isaac los defina */}
      <p className="mt-4 text-2xl font-medium tracking-[-0.02em] text-neutral-950">{label}</p>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-neutral-500">{note}</p>
      <Link
        to="/contacto"
        style={accent ? AI_ON_GRADIENT_SHADOW : undefined}
        className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${
          accent
            ? `${AI_GRADIENT_ON} ${AI_GRADIENT} hover:opacity-90`
            : "bg-neutral-950 text-white hover:bg-neutral-800"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
