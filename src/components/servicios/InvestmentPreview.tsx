import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { WEB_LEVELS } from "@/lib/websites-data";
import { MARKETING_PACKAGES } from "@/lib/marketing-data";
import { useT, useLang } from "@/lib/i18n";
import { Reveal } from "./Motion";

export function InvestmentPreview() {
  const t = useT();
  const { lang } = useLang();
  const money = (value: number) => `$${value.toLocaleString(lang === "es" ? "es-MX" : "en-US")}`;
  const web = WEB_LEVELS[0];
  const marketing = MARKETING_PACKAGES[0];
  const system = WEB_LEVELS.find((level) => level.id === 4)!;
  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
      <Reveal className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <p className="studio-eyebrow">{t("Investment", "Inversión")}</p>
          <h2 className="studio-heading mt-4">
            {t(
              "A starting point.\nA clear proposal.",
              "Un punto de partida.\nUna propuesta clara.",
            )}
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-500">
            {t(
              "Published starting prices help you plan. We confirm the right scope and total before work begins.",
              "Los precios de entrada te ayudan a planear. El alcance y la inversión total se confirman antes de comenzar.",
            )}
          </p>
          <Link
            to="/precios"
            className="mt-7 inline-flex items-center gap-2 border-b border-neutral-400 pb-1 text-sm font-medium"
          >
            {t("See pricing and what's included", "Ver precios y qué incluyen")}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          <div className="flex flex-wrap justify-between gap-3 py-6">
            <span className="text-sm font-medium">{t("Websites", "Sitios web")}</span>
            <div className="text-right">
              <p className="text-lg font-medium">
                {t("From", "Desde")} {money(web.setup!)}{" "}
                <span className="text-xs font-normal text-neutral-500">MXN</span>
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                {t("Optional maintenance: ", "Mantenimiento opcional: ")}
                {money(web.men!)} MXN{t("/month", "/mes")}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3 py-6">
            <span className="text-sm font-medium">
              {t("Marketing & content", "Marketing y contenido")}
            </span>
            <div className="text-right">
              <p className="text-lg font-medium">
                {t("From", "Desde")} {money(marketing.monthly)}{" "}
                <span className="text-xs font-normal text-neutral-500">
                  MXN{t("/month", "/mes")}
                </span>
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                {t(
                  `Minimum term: ${marketing.contractMonths} months`,
                  `Plazo mínimo: ${marketing.contractMonths} meses`,
                )}
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                {t("Weekly billing available", "Pago semanal disponible")}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3 py-6">
            <span className="text-sm font-medium">
              {t("Automated websites & systems", "Webs automatizadas y sistemas")}
            </span>
            <div className="text-right">
              <p className="text-lg font-medium">
                {t("From", "Desde")} {money(system.setup!)}{" "}
                <span className="text-xs font-normal text-neutral-500">MXN</span>
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                {t("Optional maintenance: ", "Mantenimiento opcional: ")}
                {money(system.men!)} MXN{t("/month", "/mes")}
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                {t("AI agents quoted by scope", "Agentes IA: cotización según alcance")}
              </p>
            </div>
          </div>
          <p className="py-4 text-xs leading-relaxed text-neutral-500">
            {t(
              "Prices in MXN + VAT. Ad spend is separate. USD proposals available for US clients.",
              "Precios en MXN + IVA. La inversión publicitaria se paga por separado. Cotización en USD disponible para clientes de EE. UU.",
            )}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
