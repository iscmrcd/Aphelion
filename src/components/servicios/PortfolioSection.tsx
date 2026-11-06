import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useT, useLang } from "@/lib/i18n";
import { PORTFOLIO_PROJECTS, type PortfolioProject } from "@/lib/portfolio-data";
import { ProjectLightbox } from "./ProjectLightbox";

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
                    <p className="text-xs text-white/70">{t(p.typeEn, p.type)}</p>
                  </div>
                  <ArrowUpRight className="absolute top-3 right-3 h-4 w-4 text-white opacity-0 transition group-hover/card:opacity-100" />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <ProjectLightbox project={selected} onClose={() => setSelected(null)} />
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
