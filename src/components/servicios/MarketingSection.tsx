import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";
import { useMarketingData } from "@/lib/content";
import { useLang, useT } from "@/lib/i18n";
import { Reveal } from "./Motion";
import { IncludedList, ProjectScope } from "./ServiceExperience";

export function MarketingSection() {
  const t = useT();
  const { lang } = useLang();
  const { MARKETING_PACKAGES } = useMarketingData();
  const money = (value: number) => `$${value.toLocaleString(lang === "es" ? "es-MX" : "en-US")}`;
  const summaries = [
    t(
      "For a consistent, professional presence in your customers' feeds.",
      "Para mantener una presencia profesional y constante en las redes de tus clientes.",
    ),
    t(
      "For businesses ready to pair original content with Meta ad campaigns.",
      "Para negocios listos para combinar contenido propio con campañas en Meta.",
    ),
    t(
      "For a coordinated strategy across content, campaigns and your website.",
      "Para coordinar contenido, campañas y sitio web en una misma estrategia.",
    ),
  ];
  const highlights = [
    t(
      [
        "9 monthly posts",
        "3 monthly reels",
        "1 photo session per month",
        "Planning and publishing",
      ],
      [
        "9 publicaciones al mes",
        "3 reels al mes",
        "1 sesión de foto al mes",
        "Planeación y publicación",
      ],
    ),
    t(
      [
        "12 monthly posts",
        "5 monthly reels",
        "2 photo/video sessions per month",
        "Meta Ads management",
      ],
      [
        "12 publicaciones al mes",
        "5 reels al mes",
        "2 sesiones de foto/video al mes",
        "Administración de Meta Ads",
      ],
    ),
    t(
      [
        "16 monthly posts",
        "8 monthly reels",
        "Meta and Google Ads management",
        "Website and campaign landing pages",
      ],
      [
        "16 publicaciones al mes",
        "8 reels al mes",
        "Administración de Meta y Google Ads",
        "Sitio web y páginas para campañas",
      ],
    ),
  ];
  return (
    <section id="planes" className="scroll-mt-24 border-t border-neutral-200 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="studio-eyebrow">{t("Monthly plans", "Planes mensuales")}</p>
            <h2 className="studio-heading mt-4">
              {t("A clear plan\nfor your brand.", "Un plan claro\npara tu marca.")}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
            {t(
              "Choose the support your business needs. We confirm deliverables and the production calendar in your proposal.",
              "Elige el acompañamiento que necesita tu negocio. Los entregables y el calendario de producción se confirman en tu propuesta.",
            )}
          </p>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-3">
          {MARKETING_PACKAGES.filter((pkg) => pkg.id <= 3).map((pkg, index) => (
            <Reveal key={pkg.id} delay={index * 65} className="h-full">
              <article
                id={pkg.slug}
                className={`flex h-full scroll-mt-24 flex-col rounded-3xl border bg-white p-7 ${pkg.id === 2 ? "border-neutral-950" : "border-neutral-200"}`}
              >
                <div className="mb-7 flex items-center justify-between gap-3">
                  <span className="studio-eyebrow">
                    {t("Ongoing support", "Acompañamiento continuo")}
                  </span>
                  {pkg.id === 2 && (
                    <span className="rounded-full bg-neutral-950 px-3 py-1 text-[10px] font-medium text-white">
                      {t("Content + campaigns", "Contenido + campañas")}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-medium tracking-tight">{pkg.name}</h3>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-neutral-500">
                  {summaries[index]}
                </p>
                <div className="mt-6 border-y border-neutral-200 py-6">
                  <p className="text-xs text-neutral-500">
                    {t("Monthly investment", "Inversión mensual")}
                  </p>
                  <p className="mt-2 text-3xl font-medium tracking-tight">
                    {money(pkg.monthly)}
                    <span className="ml-2 text-xs font-normal text-neutral-500">
                      MXN{t("/month", "/mes")}
                    </span>
                  </p>
                  <p className="mt-2 text-xs text-neutral-500">
                    {t("+ VAT", "+ IVA")} ·{" "}
                    {t(
                      `Minimum term: ${pkg.contractMonths} months`,
                      `Plazo mínimo: ${pkg.contractMonths} meses`,
                    )}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    {t("Ad spend billed separately", "Inversión publicitaria por separado")}
                  </p>
                </div>
                <div className="my-7">
                  <IncludedList items={highlights[index]} />
                </div>
                <Link
                  to="/contacto"
                  search={{ servicio: "marketing", ref: pkg.slug }}
                  className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  {t("Let's talk about your project", "Hablemos de tu proyecto")}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
                <details className="plan-details mt-5 border-t border-neutral-200">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 py-4 text-sm font-medium">
                    {t("Full scope", "Ver alcance completo")}
                    <Plus
                      className="details-icon h-4 w-4 shrink-0 transition-transform"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="space-y-6 pb-3">
                    {pkg.deliverables.map((group) => (
                      <div key={group.group}>
                        <p className="studio-eyebrow mb-3">{group.group}</p>
                        <IncludedList items={group.items} />
                      </div>
                    ))}
                    {pkg.adSpend && (
                      <p className="rounded-xl bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-600">
                        {pkg.adSpend}
                      </p>
                    )}
                    {pkg.notIncluded.length > 0 && (
                      <div>
                        <p className="studio-eyebrow mb-2">{t("Not included", "No incluye")}</p>
                        <p className="text-xs leading-relaxed text-neutral-500">
                          {pkg.notIncluded.join(" · ")}
                        </p>
                      </div>
                    )}
                  </div>
                </details>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-neutral-500">
          {t(
            "Prices in MXN + VAT, billed monthly. Ad spend goes directly to the platforms. For US clients, request a proposal in USD with agreed payment terms.",
            "Precios en MXN + IVA, con facturación mensual. La inversión publicitaria se paga directo a las plataformas. Para clientes de EE. UU., cotizamos en USD con condiciones de pago acordadas.",
          )}
        </p>
        <div id="produccion-premium" className="scroll-mt-24">
          <ProjectScope
            title={t(
              "Planning a brand film or a dedicated production?",
              "¿Planeas un comercial o una producción especial?",
            )}
            description={t(
              "Photo, video and aerial production can also be scoped as an individual project, with their own production brief and delivery schedule.",
              "La fotografía, el video y la producción aérea también se trabajan como proyectos individuales, con su propio plan de producción y entregables.",
            )}
            to="/servicios/produccion"
            label={t("Explore production", "Explorar producción")}
          />
        </div>
      </div>
    </section>
  );
}
