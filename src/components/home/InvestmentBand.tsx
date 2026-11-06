import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useT } from "@/lib/i18n";

/**
 * Entry prices only. The full packages live on each service page and on
 * /precios; here the visitor just needs to know whether the budget fits.
 */
export function InvestmentBand() {
  const t = useT();

  const ROWS = [
    {
      area: t("Websites", "Sitios web"),
      price: "$9,900",
      unit: t("MXN one-time", "MXN pago inicial"),
      note: t(
        "+ required upkeep from $190 / month",
        "+ mantenimiento obligatorio desde $190 al mes",
      ),
      to: "/servicios/websites" as const,
    },
    {
      area: t("Marketing & content", "Marketing y contenido"),
      price: "$6,450",
      unit: t("MXN / month + VAT", "MXN al mes + IVA"),
      note: t(
        "3-month minimum · ad spend not included",
        "Plazo mínimo de 3 meses · pauta no incluida",
      ),
      to: "/servicios/marketing" as const,
    },
    {
      area: t("Automation & systems", "Automatización y sistemas"),
      price: "$59,500",
      unit: t("MXN one-time", "MXN pago inicial"),
      note: t(
        "+ $890 / month · AI agent quoted by volume",
        "+ $890 al mes · agente IA según volumen",
      ),
      to: "/servicios/automatizacion" as const,
    },
  ];

  return (
    <section className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              {t("Investment", "Inversión")}
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.025em] text-neutral-950 sm:text-5xl">
              {t("Prices published before you call.", "Precios publicados antes de que llames.")}
            </h2>
            <p className="mt-4 text-base text-neutral-500 sm:text-lg">
              {t(
                "These are starting points. The final figure comes from a short, free review and is fixed in writing.",
                "Son puntos de partida. La cifra final sale de una evaluación corta y gratuita, y queda fija por escrito.",
              )}
            </p>
          </div>
          <Link
            to="/precios"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            {t("See all prices", "Ver todos los precios")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="divide-y divide-neutral-200 overflow-hidden rounded-3xl border border-neutral-200 bg-white">
          {ROWS.map((r) => (
            <Link
              key={r.area}
              to={r.to}
              className="group grid gap-2 px-6 py-6 transition hover:bg-neutral-50 sm:grid-cols-[1.2fr_1fr_1.4fr_auto] sm:items-center sm:gap-6 sm:px-8"
            >
              <span className="text-base font-medium text-neutral-950">{r.area}</span>
              <span className="flex items-baseline gap-1.5">
                <span className="text-xs text-neutral-500">{t("from", "desde")}</span>
                <span className="text-2xl font-medium tabular-nums tracking-[-0.02em] text-neutral-950">
                  {r.price}
                </span>
                <span className="text-xs text-neutral-500">{r.unit}</span>
              </span>
              <span className="text-sm text-neutral-500">{r.note}</span>
              <ArrowUpRight className="hidden h-4 w-4 text-neutral-400 transition group-hover:text-neutral-950 sm:block" />
            </Link>
          ))}
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          {t(
            "Prices in MXN before VAT. Ad spend on Meta, Google or TikTok is paid by you directly to each platform.",
            "Precios en MXN antes de IVA. La inversión en anuncios de Meta, Google o TikTok la pagas tú directo a cada plataforma.",
          )}
        </p>
      </div>
    </section>
  );
}
