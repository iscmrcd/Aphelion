import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useT } from "@/lib/i18n";
import { PORTFOLIO_PROJECTS, type PortfolioProject } from "@/lib/portfolio-data";
import { ProjectLightbox } from "@/components/servicios/ProjectLightbox";
import { useTouchActive } from "@/hooks/use-touch-active";

type Area = PortfolioProject["areas"][number];

/**
 * Large case cards. Shown near the top of the homepage and of each service
 * page so a visitor sees real work before being asked to pick a package.
 * Pass `area` to show only the projects that prove that service.
 */
export function FeaturedWork({
  id = "trabajo",
  area,
  eyebrow,
  title,
  intro,
  bordered = true,
}: {
  id?: string;
  area?: Area;
  eyebrow?: string;
  title?: string;
  intro?: string;
  bordered?: boolean;
}) {
  const t = useT();
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  const projects = area
    ? PORTFOLIO_PROJECTS.filter((p) => p.areas.includes(area))
    : PORTFOLIO_PROJECTS;

  if (projects.length === 0) return null;

  return (
    <section
      id={id}
      className={`scroll-mt-20 px-5 py-20 sm:py-28 ${bordered ? "border-t border-neutral-200" : ""}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              {eyebrow ?? t("Selected work", "Trabajo seleccionado")}
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.025em] text-neutral-950 sm:text-5xl">
              {title ??
                t("Real projects, live and working.", "Proyectos reales, en línea y funcionando.")}
            </h2>
            {intro && <p className="mt-4 text-base text-neutral-500 sm:text-lg">{intro}</p>}
          </div>
        </div>

        <div
          className={`grid grid-cols-1 gap-4 sm:gap-5 ${
            projects.length >= 3 ? "lg:grid-cols-3" : projects.length === 2 ? "md:grid-cols-2" : ""
          }`}
        >
          {projects.map((p) => (
            <CaseCard
              key={p.id}
              project={p}
              onOpen={() => setSelected(p)}
              layout={projects.length === 1 ? "wide" : projects.length === 2 ? "large" : "compact"}
            />
          ))}
        </div>
      </div>

      <ProjectLightbox project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function CaseCard({
  project: p,
  onOpen,
  layout,
}: {
  project: PortfolioProject;
  onOpen: () => void;
  /** wide: image beside text, for a page with a single case. */
  layout: "wide" | "large" | "compact";
}) {
  const wide = layout === "wide";
  const t = useT();
  const { ref, active } = useTouchActive<HTMLButtonElement>();
  const summary = t(p.summaryEn ?? p.summary, p.summary);
  const result = t(p.resultEn ?? p.result, p.result);

  return (
    <button
      ref={ref}
      type="button"
      onClick={onOpen}
      data-active={active ? "true" : "false"}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white text-left transition hover:border-neutral-950 data-[active=true]:border-neutral-950 ${
        wide ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative w-full overflow-hidden bg-neutral-100 ${
          wide
            ? "aspect-[4/3] md:aspect-auto md:min-h-[380px] md:w-3/5"
            : layout === "large"
              ? "aspect-[16/10]"
              : "aspect-[4/3]"
        }`}
      >
        {p.cover && (
          <img
            src={p.cover}
            alt={p.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-data-[active=true]:scale-[1.04]"
          />
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="on-dark absolute top-4 left-4 inline-flex items-center rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur">
          {t(p.typeEn, p.type)}
        </span>
        <span className="on-dark absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-950 opacity-0 transition group-hover:opacity-100 group-data-[active=true]:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${wide ? "md:justify-center md:p-10" : ""}`}>
        <div className="flex items-center gap-1.5 text-xs text-neutral-500">
          <MapPin className="h-3.5 w-3.5" />
          {p.location}
        </div>
        <h3 className="mt-2 text-xl font-medium tracking-[-0.015em] text-neutral-950 sm:text-2xl">
          {p.name}
        </h3>
        {summary && (
          <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-base">{summary}</p>
        )}
        {result && (
          <p className="mt-4 inline-flex w-fit rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-950">
            {result}
          </p>
        )}
        <span className="mt-6 text-sm font-medium text-neutral-950 underline-offset-4 group-hover:underline">
          {t("See the project →", "Ver el proyecto →")}
        </span>
      </div>
    </button>
  );
}
