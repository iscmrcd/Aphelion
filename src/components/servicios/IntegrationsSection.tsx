import type { ReactNode } from "react";
import { Calendar, CreditCard, Images } from "lucide-react";
import { useT } from "@/lib/i18n";

/**
 * Integrations available to BOTH tiers.
 *
 * The framing matters: what can be connected is the same either way. What
 * changes between tiers is how the agent decides when to use it — a fixed
 * button versus reading the customer's intent. Presenting these as an
 * AI-only capability would misrepresent the automated tier.
 */

type Integration = {
  id: string;
  Icon: typeof Calendar;
  title: string;
  titleEs: string;
  /** Named services shown as badges. Empty when the category isn't brand-specific. */
  brands: string[];
  /** Fallback label when there are no brands to name. */
  genericBadge?: string;
  genericBadgeEs?: string;
  body: string;
  bodyEs: string;
};

const INTEGRATIONS: Integration[] = [
  {
    id: "calendars",
    Icon: Calendar,
    title: "Calendars",
    titleEs: "Calendarios",
    brands: ["Google Calendar", "Calendly"],
    body: "Book appointments straight from the conversation.",
    bodyEs: "Agenda citas directo desde la conversación.",
  },
  {
    id: "payments",
    Icon: CreditCard,
    title: "Payments",
    titleEs: "Pagos",
    brands: ["Stripe"],
    body: "Share a payment link without leaving the chat.",
    bodyEs: "Comparte un link de cobro sin salir del chat.",
  },
  {
    id: "content",
    Icon: Images,
    title: "Content",
    titleEs: "Contenido",
    brands: [],
    genericBadge: "Catalogs · Photos · Spec sheets",
    genericBadgeEs: "Catálogos · Fotos · Fichas técnicas",
    body: "Send catalogs, photos or spec sheets instantly.",
    bodyEs: "Envía catálogos, fotos o fichas técnicas al instante.",
  },
];

export function IntegrationsSection() {
  const t = useT();

  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("Integrations", "Integraciones")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            {t("It connects to what you already use.", "Se conecta con lo que ya usas.")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500">
            {t(
              "Both tiers connect to the same tools. What separates them isn't what can be shared — it's how smart the agent is about deciding when to share it.",
              "Los dos niveles se conectan a las mismas herramientas. Lo que los separa no es qué se puede compartir, sino qué tan inteligente es el agente decidiendo cuándo compartirlo.",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {INTEGRATIONS.map((it) => (
            <div
              key={it.id}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-7"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white">
                <it.Icon className="h-4 w-4" aria-hidden strokeWidth={2} />
              </span>

              <h3 className="mt-4 text-lg font-medium tracking-[-0.01em] text-neutral-950">
                {t(it.title, it.titleEs)}
              </h3>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {it.brands.length > 0
                  ? it.brands.map((b) => <IntegrationBadge key={b} name={b} />)
                  : it.genericBadge && (
                      <IntegrationBadge name={t(it.genericBadge, it.genericBadgeEs ?? "")} />
                    )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                {t(it.body, it.bodyEs)}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-5 text-center text-sm leading-relaxed text-neutral-600">
          {t(
            "In the automated flow, each of these fires from a fixed button. With Conversational AI, the agent decides which one to send based on what the customer asks — and checks real availability, not a simulated schedule.",
            "En el flujo automatizado, cada uno de estos se activa por botón fijo. En IA Conversacional, el agente decide cuál enviar según lo que pregunte el cliente, y revisa disponibilidad real, no un horario simulado.",
          )}
        </p>
      </div>
    </section>
  );
}

/**
 * Text badge for a named integration.
 *
 * Deliberately text-only for now. `logo` is here so real brand marks can be
 * dropped in later without touching call sites — third-party logos carry
 * trademark usage terms, so they shouldn't ship until they're cleared.
 */
export function IntegrationBadge({ name, logo }: { name: string; logo?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-700">
      {logo ? (
        <span className="flex h-3.5 w-3.5 items-center justify-center" aria-hidden>
          {logo}
        </span>
      ) : null}
      {name}
    </span>
  );
}
