import { useEffect, type ReactNode } from "react";
import { ArrowUpRight, X, MapPin, Building2, Stethoscope, Wrench, TrendingUp } from "lucide-react";
import { useT } from "@/lib/i18n";
import type { PortfolioProject } from "@/lib/portfolio-data";

/**
 * Project detail dialog shared by the portfolio marquee (/servicios/websites)
 * and the featured work grid on the homepage. Closes on Escape, on the
 * backdrop and on the close button, and locks page scroll while open.
 */
export function ProjectLightbox({
  project,
  onClose,
}: {
  project: PortfolioProject | null;
  onClose: () => void;
}) {
  const t = useT();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;
  const p = project;
  const diagnosis = t(p.diagnosisEn ?? p.diagnosis, p.diagnosis);
  const solution = t(p.solutionEn ?? p.solution, p.solution);
  const result = t(p.resultEn ?? p.result, p.result);

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={p.name}
    >
      <div
        className="relative max-h-full w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t("Close", "Cerrar")}
          className="absolute top-4 right-4 rounded-full border border-neutral-200 p-2 text-neutral-500 transition hover:border-neutral-950 hover:text-neutral-950"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase">
          {t(p.typeEn, p.type)}
        </p>
        <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-3xl">
          {p.name}
        </h3>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {p.client && (
            <Field icon={Building2} label={t("Client", "Cliente")}>
              <span className="font-medium text-neutral-950">{p.client}</span>
            </Field>
          )}
          {p.location && (
            <Field icon={MapPin} label={t("Location", "Ubicación")}>
              <span className="font-medium text-neutral-950">{p.location}</span>
            </Field>
          )}
          {diagnosis && (
            <Field icon={Stethoscope} label={t("The challenge", "El reto")} wide>
              {diagnosis}
            </Field>
          )}
          {solution && (
            <Field icon={Wrench} label={t("What we did", "Qué hicimos")} wide>
              {solution}
            </Field>
          )}
          {result && (
            <Field icon={TrendingUp} label={t("Result", "Resultado")} wide>
              {result}
            </Field>
          )}
        </dl>

        {p.url && (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            {t("Visit live site", "Visitar sitio en vivo")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {(p.cover ? [p.cover, ...p.photos] : p.photos).map((src, i) => (
            <div
              key={i}
              className="aspect-[3/4] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100"
            >
              <img
                src={src}
                alt={`${p.name} — ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          {!p.cover && p.photos.length === 0 && (
            <div className="col-span-full rounded-xl border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-500">
              {t("Project photos coming soon.", "Fotos del proyecto próximamente.")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  wide,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`rounded-xl border border-neutral-200 p-4 ${wide ? "sm:col-span-2" : ""}`}>
      <dt className="flex items-center gap-1.5 text-xs font-medium tracking-[0.08em] text-neutral-500 uppercase">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-relaxed text-neutral-700">{children}</dd>
    </div>
  );
}
