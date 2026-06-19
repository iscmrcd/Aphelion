import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { MARKETING_PACKAGES } from "@/lib/marketing-data";
import grad1 from "@/assets/banners/gradient-1.jpg.asset.json";
import grad2 from "@/assets/banners/gradient-2.jpg.asset.json";
import grad5 from "@/assets/banners/gradient-5.avif.asset.json";
import grad6 from "@/assets/banners/gradient-6.avif.asset.json";

const GRADIENTS = [grad1.url, grad2.url, grad5.url, grad6.url];

const fmt = (n: number) => "$" + n.toLocaleString("es-MX");

export function MarketingOverview() {
  return (
    <section className="border-t border-neutral-200 bg-white px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              Marketing & Contenido · 4 niveles
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.025em] text-neutral-950 sm:text-5xl">
              De presencia activa a producción cinematográfica.
            </h2>
            <p className="mt-5 text-base text-neutral-500 sm:text-lg">
              Contenido real, campañas administradas y producción que justifica el ticket.
              Exclusividad por rubro: una sola marca por categoría y zona.
            </p>
          </div>
          <Link
            to="/servicios/marketing"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Ver paquetes completos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MARKETING_PACKAGES.map((p, idx) => {
            const gradient = GRADIENTS[idx % GRADIENTS.length];
            return (
              <Link
                key={p.id}
                to="/servicios/marketing"
                hash={p.slug}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-950"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    backgroundImage: `url(${gradient})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="relative mb-6 flex items-center justify-between">
                  <span
                    className={
                      p.badge
                        ? "inline-flex items-center rounded-full border border-neutral-950 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-950 transition group-hover:border-white group-hover:text-white"
                        : "text-xs font-medium uppercase tracking-[0.14em] text-neutral-500 transition group-hover:text-white"
                    }
                  >
                    {p.badge ?? p.vol}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400 transition group-hover:text-white" />
                </div>

                <h3 className="relative text-xl font-medium tracking-[-0.01em] text-neutral-950 transition group-hover:text-white">
                  {p.name}
                </h3>
                <p className="relative mt-2 text-sm text-neutral-600 transition group-hover:text-white/80">
                  {p.tagline}
                </p>

                <div className="relative mt-6 flex items-baseline gap-1.5">
                  <span className="text-2xl font-medium tabular-nums text-neutral-950 transition group-hover:text-white">
                    {fmt(p.weekly)}
                  </span>
                  <span className="text-xs text-neutral-500 transition group-hover:text-white/70">
                    /sem + IVA
                  </span>
                </div>
                <p className="relative mt-1 text-xs text-neutral-600 transition group-hover:text-white/80">
                  ~{fmt(p.monthly)}{" "}
                  <span className="text-neutral-500 transition group-hover:text-white/60">
                    /mes · contrato {p.contractMonths} m
                  </span>
                </p>

                <ul className="relative mt-6 space-y-1.5 border-t border-dashed border-neutral-300 pt-5 transition group-hover:border-white/30">
                  {p.outcomes.slice(0, 3).map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-2 text-xs text-neutral-800 transition group-hover:text-white/90"
                    >
                      <Check
                        className="mt-0.5 h-3 w-3 flex-shrink-0 text-neutral-950 transition group-hover:text-white"
                        strokeWidth={2.5}
                      />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-neutral-500">
          Pauta publicitaria (Meta · Google · TikTok) corre directo del cliente a la plataforma — nosotros la administramos.
        </p>
      </div>
    </section>
  );
}
