import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useT } from "@/lib/i18n";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import { Reveal } from "./Motion";

export function PortfolioSection({
  projectIds,
  showHeading = true,
}: {
  projectIds?: string[];
  showHeading?: boolean;
}) {
  const t = useT();
  const projects = PORTFOLIO_PROJECTS.filter(
    (project) => !projectIds || projectIds.includes(project.id),
  );
  return (
    <section
      id="proyectos"
      aria-label={t("Selected projects", "Proyectos seleccionados")}
      className="scroll-mt-24 border-t border-neutral-200 bg-white px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {showHeading && (
          <Reveal className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="studio-eyebrow">{t("Selected work", "Trabajo seleccionado")}</p>
              <h2 className="studio-heading mt-4">
                {t("Ideas made real.", "Ideas que ya funcionan.")}
              </h2>
            </div>
            <Link
              to="/trabajo"
              className="inline-flex w-fit items-center gap-2 border-b border-neutral-300 pb-1 text-sm font-medium"
            >
              {t("Explore our work", "Conoce nuestro trabajo")}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        )}
        <div className={`grid gap-8 ${projects.length > 1 ? "lg:grid-cols-2" : "max-w-3xl"}`}>
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PORTFOLIO_PROJECTS)[number] }) {
  const t = useT();
  const brief =
    project.id === "haima-banco-de-sangre"
      ? t(
          "A website, appointment booking and AI assistance connected to one blood bank's operation.",
          "Sitio web, agenda y atención con IA conectados a la operación de un banco de sangre.",
        )
      : t(
          "A new digital presentation for a shipyard's yacht refit and repair services.",
          "Una nueva presentación digital para los servicios de reparación y refit de un astillero.",
        );
  return (
    <Dialog>
      <article>
        <DialogTrigger asChild>
          <button
            type="button"
            className="group relative block aspect-[16/11] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 text-left"
            aria-label={t(`Explore ${project.name}`, `Conocer ${project.name}`)}
          >
            <img
              src={project.cover}
              alt={t(`${project.name} website`, `Sitio web de ${project.name}`)}
              loading="lazy"
              width={960}
              height={660}
              className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.035]"
            />
            <span className="on-dark absolute right-5 bottom-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-neutral-950/80 text-white backdrop-blur-sm transition group-hover:bg-neutral-950">
              <Plus aria-hidden="true" className="h-5 w-5" />
            </span>
          </button>
        </DialogTrigger>
        <div className="mt-5 flex items-start justify-between gap-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-neutral-500">
              {project.location} · {t(project.typeEn, project.type)}
            </p>
            <h3 className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">{project.name}</h3>
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full border border-neutral-200 p-2.5 transition hover:border-neutral-950"
              aria-label={t(`Visit ${project.name}`, `Visitar ${project.name}`)}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-neutral-500">{brief}</p>
      </article>
      <DialogContent
        closeLabel={t("Close", "Cerrar")}
        className="z-[80] max-h-[88dvh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 text-neutral-950 sm:p-9"
      >
        <div className="pr-7">
          <p className="studio-eyebrow">
            {project.location} · {t(project.typeEn, project.type)}
          </p>
          <DialogTitle className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
            {project.name}
          </DialogTitle>
          <DialogDescription className="mt-4 text-sm leading-relaxed text-neutral-600">
            {brief}
          </DialogDescription>
        </div>
        <div className="grid gap-6 border-y border-neutral-200 py-6 sm:grid-cols-2">
          <div>
            <h4 className="studio-eyebrow">{t("The challenge", "El reto")}</h4>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {t(project.diagnosisEn ?? project.diagnosis, project.diagnosis)}
            </p>
          </div>
          <div>
            <h4 className="studio-eyebrow">{t("The solution", "La solución")}</h4>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {t(project.solutionEn ?? project.solution, project.solution)}
            </p>
          </div>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white"
          >
            {t("Visit the website", "Visitar el sitio")}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        )}
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {[project.cover, ...project.photos]
            .filter((src): src is string => Boolean(src))
            .map((src, index) => (
              <img
                key={src}
                src={src}
                alt={t(
                  `${project.name}, project view ${index + 1}`,
                  `${project.name}, vista del proyecto ${index + 1}`,
                )}
                loading="lazy"
                className="h-auto w-full rounded-xl border border-neutral-200"
              />
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
