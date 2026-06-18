import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { WEB_LEVELS } from "@/lib/websites-data";
import grainWave from "@/assets/banners/grain-wave-2.avif.asset.json";

// Featured tier — gets the gradient image background (ElevenLabs "Popular" treatment).
const FEATURED_SLUG = "captacion";

const fmt = (n: number | null) =>
  n === null ? "Cotización" : "$" + n.toLocaleString("es-MX");

export function WebsitesOverview() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              Websites · 6 niveles
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.025em] text-neutral-950 sm:text-5xl">
              De presencia profesional a SaaS.
            </h2>
            <p className="mt-5 text-base text-neutral-500 sm:text-lg">
              Cada nivel es un escalón: empiezas donde tu marca está hoy y subes cuando el
              negocio lo pide. Sin reconstruir desde cero.
            </p>
          </div>
          <Link
            to="/servicios/websites"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Ver paquetes y comparar
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WEB_LEVELS.map((l) => {
            const featured = l.slug === FEATURED_SLUG;
            return (
              <Link
                key={l.id}
                to="/servicios/websites"
                hash={l.slug}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-950"
              >
                {featured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundImage: `url(${grainWave.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                )}
                <div className="relative mb-6 flex items-center justify-between">
                  <span
                    className={
                      featured
                        ? "inline-flex items-center rounded-full border border-neutral-950 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-950"
                        : "text-xs font-medium uppercase tracking-[0.14em] text-neutral-500"
                    }
                  >
                    {featured ? "Popular" : `Nivel 0${l.id}`}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400 transition group-hover:text-neutral-950" />
                </div>
                <h3 className="relative text-xl font-medium tracking-[-0.01em] text-neutral-950">
                  {l.name}
                </h3>
                <p className="relative mt-2 text-sm text-neutral-600">{l.tagline}</p>

                <div className="relative mt-6 flex items-baseline gap-1.5">
                  <span className="text-2xl font-medium tabular-nums text-neutral-950">
                    {fmt(l.setup)}
                  </span>
                  {l.setup !== null && <span className="text-xs text-neutral-500">setup</span>}
                </div>
                {l.men !== null && (
                  <p className="relative mt-1 text-xs text-neutral-600">
                    + {fmt(l.men)}{" "}
                    <span className="text-neutral-500">/ mes mantenimiento</span>
                  </p>
                )}

                <ul className="relative mt-6 space-y-1.5 border-t border-dashed border-neutral-300 pt-5">
                  {l.includes.slice(0, 3).map((i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-800">
                      <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-neutral-950" strokeWidth={2.5} />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
