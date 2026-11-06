import { Link } from "@tanstack/react-router";
import { Check, Minus, Plus, ArrowUpRight } from "lucide-react";
import { useWebsitesData } from "@/lib/content";
import type { WebLevel } from "@/lib/websites-data";
import { useT, useLang } from "@/lib/i18n";
import { Reveal } from "./Motion";
import { IncludedList, ProjectScope } from "./ServiceExperience";

export function WebsitesSection({ systems = false }: { systems?: boolean }) {
  const { WEB_LEVELS } = useWebsitesData();
  const t = useT();
  const plans = WEB_LEVELS.filter((level) => (systems ? level.id > 3 : level.id <= 3));
  return (
    <section id="planes" className="scroll-mt-24 border-t border-neutral-200 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="studio-eyebrow">{t("Scope & investment", "Alcance e inversión")}</p>
            <h2 className="studio-heading mt-4">
              {systems
                ? t("Built around\nyour operation.", "A la medida\nde tu operación.")
                : t("A website for\nyour next step.", "Un sitio para\ntu siguiente paso.")}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
            {t(
              "These are starting points. We help you choose the right scope before work begins.",
              "Estos son puntos de partida. Te ayudamos a definir el alcance adecuado antes de comenzar.",
            )}
          </p>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((level, index) => (
            <Reveal key={level.id} delay={index * 65} className="h-full">
              <WebPlan level={level} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-neutral-500">
          {t(
            "Prices in MXN + VAT. Initial development is a one-time payment. Maintenance begins at launch. Third-party services and additional integrations are quoted separately.",
            "Precios en MXN + IVA. El desarrollo inicial es un pago único. El mantenimiento inicia al publicar. Los servicios de terceros y las integraciones adicionales se cotizan por separado.",
          )}
        </p>
        <PlanComparison ids={plans.map((level) => level.id)} />
        {!systems && (
          <div id="automatizada" className="scroll-mt-24">
            <span id="comercial" className="scroll-mt-24" />
            <span id="saas" className="scroll-mt-24" />
            <ProjectScope
              title={t(
                "Need scheduling, a client portal or your own platform?",
                "¿Necesitas agenda, un portal de clientes o una plataforma propia?",
              )}
              description={t(
                "Explore automation and custom systems. They have their own scope, integrations and support plan.",
                "Conoce las opciones de automatización y sistemas a medida, con su propio alcance, integraciones y plan de soporte.",
              )}
              to="/servicios/automatizacion"
              label={t("Explore systems", "Explorar sistemas")}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function WebPlan({ level }: { level: WebLevel }) {
  const t = useT();
  const { lang } = useLang();
  const money = (value: number) => `$${value.toLocaleString(lang === "es" ? "es-MX" : "en-US")}`;
  const descriptions: Record<number, string> = {
    1: t(
      "A first professional site with the essentials for customers to find and contact you.",
      "Tu primer sitio profesional, con lo esencial para encontrarte y contactarte.",
    ),
    2: t(
      "A clear presentation of your services, work and business in up to five pages.",
      "Presenta tus servicios, trabajo y negocio con claridad en hasta cinco páginas.",
    ),
    3: t(
      "For businesses running campaigns that need to capture and measure enquiries.",
      "Para negocios que hacen campañas y necesitan captar y medir consultas.",
    ),
    4: t(
      "Bring enquiries, appointments and follow-up into a connected workflow.",
      "Conecta las consultas, las citas y el seguimiento en un mismo flujo.",
    ),
    5: t(
      "A central workspace for your team, clients, documents and operation.",
      "Un espacio central para tu equipo, clientes, documentos y operación.",
    ),
    6: t(
      "A platform designed around multiple businesses, teams or branches.",
      "Una plataforma diseñada para varias empresas, equipos o sucursales.",
    ),
  };
  const shortlists: Record<number, string[]> = {
    1: [level.includes[0], level.includes[1], level.includes[2], level.includes[5]],
    2: [
      t("Everything in Presence", "Todo lo de Presencial"),
      level.includes[1],
      level.includes[2],
      level.includes[6],
    ],
    3: [
      t("Everything in Professional", "Todo lo de Profesional"),
      level.includes[5],
      level.includes[7],
      t("Campaign tracking", "Medición de campañas"),
    ],
    4: [level.includes[1], level.includes[2], level.includes[3], level.includes[5]],
    5: [level.includes[1], level.includes[2], level.includes[3], level.includes[5]],
    6: [level.includes[1], level.includes[2], level.includes[3], level.includes[4]],
  };
  return (
    <article
      id={level.slug}
      className={`flex h-full scroll-mt-24 flex-col rounded-3xl border bg-white p-7 ${level.id === 2 ? "border-neutral-950" : "border-neutral-200"}`}
    >
      <div className="mb-7 flex items-center justify-between gap-3">
        <span className="studio-eyebrow">
          {level.id <= 3
            ? t("Website", "Sitio web")
            : t("Custom development", "Desarrollo a medida")}
        </span>
        {level.id === 2 && (
          <span className="rounded-full bg-neutral-950 px-3 py-1 text-[10px] font-medium text-white">
            {t("For established businesses", "Para negocios establecidos")}
          </span>
        )}
      </div>
      <h3 className="text-2xl font-medium tracking-[-0.025em]">{level.name}</h3>
      <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-neutral-500">
        {descriptions[level.id]}
      </p>
      <div className="mt-6 border-y border-neutral-200 py-6">
        <p className="text-xs text-neutral-500">{t("Initial investment", "Inversión inicial")}</p>
        <p className="mt-2 text-3xl font-medium tracking-tight">
          {level.setup === null ? t("Custom quote", "A cotizar") : money(level.setup)}
          {level.setup !== null && (
            <span className="ml-2 text-xs font-normal text-neutral-500">MXN</span>
          )}
        </p>
        <p className="mt-2 text-xs text-neutral-500">
          {level.men === null
            ? t("Maintenance quoted by scope", "Mantenimiento según alcance")
            : `+ ${money(level.men)} MXN${t("/month maintenance", "/mes de mantenimiento")}`}
        </p>
        <p className="mt-1 text-xs text-neutral-500">{t("+ VAT", "+ IVA")}</p>
      </div>
      <div className="my-7">
        <IncludedList items={shortlists[level.id]} />
      </div>
      <div className="mt-auto">
        <Link
          to="/contacto"
          search={{ servicio: level.id > 3 ? "saas" : "websites", ref: level.slug }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          {t("Let's talk about your project", "Hablemos de tu proyecto")}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <details className="plan-details mt-5 border-t border-neutral-200">
        <summary className="flex cursor-pointer items-center justify-between gap-3 py-4 text-sm font-medium">
          {t("Full scope", "Ver alcance completo")}
          <Plus className="details-icon h-4 w-4 shrink-0 transition-transform" aria-hidden="true" />
        </summary>
        <div className="space-y-5 pb-3">
          <div>
            <p className="studio-eyebrow mb-3">{t("Includes", "Incluye")}</p>
            <IncludedList items={level.includes} />
          </div>
          {level.canAdd.length > 0 && (
            <div>
              <p className="studio-eyebrow mb-2">
                {t("Optional, quoted separately", "Opcional, se cotiza aparte")}
              </p>
              <p className="text-xs leading-relaxed text-neutral-500">{level.canAdd.join(" · ")}</p>
            </div>
          )}
          {level.notInc.length > 0 && (
            <div>
              <p className="studio-eyebrow mb-2">{t("Not included", "No incluye")}</p>
              <p className="text-xs leading-relaxed text-neutral-500">{level.notInc.join(" · ")}</p>
            </div>
          )}
        </div>
      </details>
    </article>
  );
}

function PlanComparison({ ids }: { ids: number[] }) {
  const { WEB_LEVELS, COMPARE_GROUPS } = useWebsitesData();
  const t = useT();
  return (
    <details
      id="comparar"
      className="plan-details mt-10 scroll-mt-24 rounded-2xl border border-neutral-200 bg-white"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-medium">
        {t("Compare features", "Ver comparativa de funciones")}
        <Plus aria-hidden="true" className="details-icon h-4 w-4 shrink-0 transition-transform" />
      </summary>
      <div className="overflow-x-auto border-t border-neutral-200">
        <table className="w-full min-w-[560px] text-left text-xs">
          <caption className="sr-only">
            {t("Website package comparison", "Comparativa de paquetes web")}
          </caption>
          <thead>
            <tr>
              <th scope="col" className="p-4 font-medium">
                {t("Feature", "Función")}
              </th>
              {WEB_LEVELS.filter((level) => ids.includes(level.id)).map((level) => (
                <th scope="col" key={level.id} className="p-4 text-center font-medium">
                  {level.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE_GROUPS.flatMap((group) => group.rows).map((row) => (
              <tr key={row.label} className="border-t border-neutral-200">
                <th scope="row" className="px-4 py-3 font-normal text-neutral-600">
                  {row.label}
                </th>
                {ids.map((id) => {
                  const value = row.vals[id - 1];
                  return (
                    <td key={id} className="px-4 py-3 text-center">
                      {value === "yes" ? (
                        <Check className="mx-auto h-4 w-4" aria-label={t("Included", "Incluido")} />
                      ) : value === "no" ? (
                        <Minus
                          className="mx-auto h-3.5 w-3.5 text-neutral-400"
                          aria-label={t("Not included", "No incluido")}
                        />
                      ) : value === "addon" ? (
                        t("Optional", "Opcional")
                      ) : (
                        t("Quote", "A cotizar")
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}
