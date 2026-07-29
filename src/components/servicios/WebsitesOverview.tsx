import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { WebLevel } from "@/lib/websites-data";
import { useWebsitesData } from "@/lib/content";
import { useT, useLang } from "@/lib/i18n";
import grad1 from "@/assets/banners/gradient-1.jpg.asset.json";
import grad2 from "@/assets/banners/gradient-2.jpg.asset.json";
import grad3 from "@/assets/banners/gradient-3.png.asset.json";
import grad4 from "@/assets/banners/gradient-4.png.asset.json";
import grad5 from "@/assets/banners/gradient-5.avif.asset.json";
import grad6 from "@/assets/banners/gradient-6.avif.asset.json";

const GRADIENTS = [grad1.url, grad2.url, grad3.url, grad4.url, grad5.url, grad6.url];

const FEATURED_SLUG = "captacion";

export function WebsitesOverview() {
  const { WEB_LEVELS } = useWebsitesData();
  const t = useT();
  const { lang } = useLang();
  const fmt = (n: number | null) =>
    n === null ? t("Quote", "Cotización") : "$" + n.toLocaleString(lang === "es" ? "es-MX" : "en-US");
  return (
    <section className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              {t("Websites · 6 tiers", "Websites · 6 niveles")}
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.025em] text-neutral-950 sm:text-5xl">
              {t("From professional presence to SaaS.", "De presencia profesional a SaaS.")}
            </h2>
            <p className="mt-5 text-base text-neutral-500 sm:text-lg">
              {t(
                "Each tier is a step: start where your brand is today and level up as the business demands it. No rebuilding from scratch.",
                "Cada nivel es un escalón: empiezas donde tu marca está hoy y subes cuando el negocio lo pide. Sin reconstruir desde cero.",
              )}
            </p>
          </div>
          <Link
            to="/servicios/websites"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            {t("See packages & compare", "Ver paquetes y comparar")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WEB_LEVELS.map((l, idx) => (
            <WebCard
              key={l.id}
              level={l}
              gradient={GRADIENTS[idx % GRADIENTS.length]}
              featured={l.slug === FEATURED_SLUG}
              fmt={fmt}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WebCard({
  level: l,
  gradient,
  featured,
  fmt,
  t,
}: {
  level: WebLevel;
  gradient: string;
  featured: boolean;
  fmt: (n: number | null) => string;
  t: ReturnType<typeof useT>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const noHover = window.matchMedia("(hover: none)").matches;
    if (!noHover || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setActive(e.isIntersecting)),
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      to="/servicios/websites"
      hash={l.slug}
      data-active={active ? "true" : "false"}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-950 data-[active=true]:border-neutral-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100"
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mb-6 flex items-center justify-between">
        <span
          className={
            featured
              ? "inline-flex items-center rounded-full border border-neutral-950 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-950 transition group-hover:border-white group-hover:text-white group-data-[active=true]:border-white group-data-[active=true]:text-white"
              : "text-xs font-medium uppercase tracking-[0.14em] text-neutral-500 transition group-hover:text-white group-data-[active=true]:text-white"
          }
        >
          {featured ? t("Popular", "Popular") : t(`Tier 0${l.id}`, `Nivel 0${l.id}`)}
        </span>
        <ArrowUpRight className="h-4 w-4 text-neutral-400 transition group-hover:text-white group-data-[active=true]:text-white" />
      </div>
      <h3 className="relative text-xl font-medium tracking-[-0.01em] text-neutral-950 transition group-hover:text-white group-data-[active=true]:text-white">
        {l.name}
      </h3>
      <p className="relative mt-2 text-sm text-neutral-600 transition group-hover:text-white/80 group-data-[active=true]:text-white/80">
        {l.tagline}
      </p>

      <div className="relative mt-6 flex items-baseline gap-1.5">
        <span className="text-2xl font-medium tabular-nums text-neutral-950 transition group-hover:text-white group-data-[active=true]:text-white">
          {fmt(l.setup)}
        </span>
        {l.setup !== null && (
          <span className="text-xs text-neutral-500 transition group-hover:text-white/70 group-data-[active=true]:text-white/70">
            {t("setup", "setup")}
          </span>
        )}
      </div>
      {l.men !== null && (
        <p className="relative mt-1 text-xs text-neutral-600 transition group-hover:text-white/80 group-data-[active=true]:text-white/80">
          + {fmt(l.men)}{" "}
          <span className="text-neutral-500 transition group-hover:text-white/60 group-data-[active=true]:text-white/60">
            {t("/mo maintenance", "/ mes mantenimiento")}
          </span>
        </p>
      )}

      <ul className="relative mt-6 space-y-1.5 border-t border-dashed border-neutral-300 pt-5 transition group-hover:border-white/30 group-data-[active=true]:border-white/30">
        {l.includes.slice(0, 3).map((i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-neutral-800 transition group-hover:text-white/90 group-data-[active=true]:text-white/90">
            <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-neutral-950 transition group-hover:text-white group-data-[active=true]:text-white" strokeWidth={2.5} />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}
