import { useEffect, useState } from "react";
import { ArrowUpRight, X, MapPin, Building2, Stethoscope, Wrench } from "lucide-react";
import { useT, useLang } from "@/lib/i18n";
import { PORTFOLIO_PROJECTS, type PortfolioProject } from "@/lib/portfolio-data";

/**
 * Portfolio strip for /servicios/websites. Infinite marquee of 3:4 cards;
 * clicking a card opens a lightbox with the rest of that project's photos.
 * With few projects the list is repeated so the loop never shows a gap.
 */
export function PortfolioSection() {
  const t = useT();
  const [selected, setSelected] = useState<PortfolioProject | null>(null);

  // Repeat the projects enough times that one marquee half always fills the
  // viewport; the CSS animation translates exactly -50% for a seamless loop.
  const COPIES = 4;
  const loop = Array.from({ length: COPIES }, () => PORTFOLIO_PROJECTS).flat();

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="overflow-hidden border-t border-neutral-200 py-20 sm:py-28">
      <div className="mx-auto mb-12 max-w-4xl px-5 text-center">
        <p className="mb-3 text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase">
          {t("Portfolio", "Portafolio")}
        </p>
        <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
          {t("Finished websites.", "Páginas web terminadas.")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
          {t(
            "Real projects, live and working. Tap any card to see more.",
            "Proyectos reales, en línea y funcionando. Toca una tarjeta para ver más.",
          )}
        </p>
      </div>

      <div
        className="group relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="animate-marquee flex w-max gap-4 px-2 group-hover:[animation-play-state:paused] sm:gap-6">
          {[0, 1].map((half) => (
            <div key={half} className="flex gap-4 sm:gap-6" aria-hidden={half === 1}>
              {loop.map((p, i) => (
                <button
                  key={`${p.id}-${i}`}
                  type="button"
                  onClick={() => setSelected(p)}
                  className="group/card relative w-44 shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 text-left transition hover:border-neutral-950 sm:w-60"
                  tabIndex={half === 1 ? -1 : 0}
                >
                  <div className="aspect-[3/4] w-full">
                    {p.cover ? (
                      <img
                        src={p.cover}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover/card:scale-[1.03]"
                      />
                    ) : (
                      <PlaceholderCover name={p.name} />
                    )}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                    <p className="text-sm font-medium text-white">{p.name}</p>
                    <p className="text-xs text-white/70">{t(p.type, p.typeEn)}</p>
                  </div>
                  <ArrowUpRight className="absolute top-3 right-3 h-4 w-4 text-white opacity-0 transition group-hover/card:opacity-100" />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
        >
          <div
            className="relative max-h-full w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-5 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label={t("Close", "Cerrar")}
              className="absolute top-4 right-4 rounded-full border border-neutral-200 p-2 text-neutral-500 transition hover:border-neutral-950 hover:text-neutral-950"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase">
              {t(selected.type, selected.typeEn)}
            </p>
            <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-3xl">
              {selected.name}
            </h3>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {selected.client && (
                <div className="rounded-xl border border-neutral-200 p-4">
                  <dt className="flex items-center gap-1.5 text-xs font-medium tracking-[0.08em] text-neutral-500 uppercase">
                    <Building2 className="h-3.5 w-3.5" />
                    {t("Client", "Cliente")}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-neutral-950">{selected.client}</dd>
                </div>
              )}
              {selected.location && (
                <div className="rounded-xl border border-neutral-200 p-4">
                  <dt className="flex items-center gap-1.5 text-xs font-medium tracking-[0.08em] text-neutral-500 uppercase">
                    <MapPin className="h-3.5 w-3.5" />
                    {t("Location", "Ubicación")}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-neutral-950">{selected.location}</dd>
                </div>
              )}
              {selected.diagnosis && (
                <div className="rounded-xl border border-neutral-200 p-4 sm:col-span-2">
                  <dt className="flex items-center gap-1.5 text-xs font-medium tracking-[0.08em] text-neutral-500 uppercase">
                    <Stethoscope className="h-3.5 w-3.5" />
                    {t("Diagnosis", "Diagnóstico")}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-neutral-700">{selected.diagnosis}</dd>
                </div>
              )}
              {selected.solution && (
                <div className="rounded-xl border border-neutral-200 p-4 sm:col-span-2">
                  <dt className="flex items-center gap-1.5 text-xs font-medium tracking-[0.08em] text-neutral-500 uppercase">
                    <Wrench className="h-3.5 w-3.5" />
                    {t("Solution", "Solución")}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-neutral-700">{selected.solution}</dd>
                </div>
              )}
            </dl>

            {selected.url && (
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                {t("Visit live site", "Visitar sitio en vivo")}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {(selected.cover ? [selected.cover, ...selected.photos] : selected.photos).map(
                (src, i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100"
                  >
                    <img
                      src={src}
                      alt={`${selected.name} — ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ),
              )}
              {!selected.cover && selected.photos.length === 0 && (
                <div className="col-span-full rounded-xl border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-500">
                  {t(
                    "Project photos coming soon.",
                    "Fotos del proyecto próximamente.",
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function PlaceholderCover({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full flex-col bg-neutral-900">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        <p className="text-center text-sm font-medium tracking-wide text-white/60">{name}</p>
      </div>
    </div>
  );
}
