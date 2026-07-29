import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MARKETING_PACKAGES, type MarketingPackage } from "@/lib/marketing-data";
import { useT, useLang } from "@/lib/i18n";
import grad1 from "@/assets/banners/gradient-1.jpg.asset.json";
import grad2 from "@/assets/banners/gradient-2.jpg.asset.json";
import grad5 from "@/assets/banners/gradient-5.avif.asset.json";
import grad6 from "@/assets/banners/gradient-6.avif.asset.json";

const GRADIENTS = [grad1.url, grad2.url, grad5.url, grad6.url];

export function MarketingOverview() {
  const t = useT();
  const { lang } = useLang();
  const fmt = (n: number) => "$" + n.toLocaleString(lang === "es" ? "es-MX" : "en-US");
  return (
    <section className="border-t border-neutral-200 bg-white px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              {t("Marketing & Content · 4 tiers", "Marketing & Contenido · 4 niveles")}
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.025em] text-neutral-950 sm:text-5xl">
              {t(
                "From active presence to cinematic production.",
                "De presencia activa a producción cinematográfica.",
              )}
            </h2>
            <p className="mt-5 text-base text-neutral-500 sm:text-lg">
              {t(
                "Real content, managed campaigns, and production that justifies the price tag. Category exclusivity: one brand per niche and zone.",
                "Contenido real, campañas administradas y producción que justifica el ticket. Exclusividad por rubro: una sola marca por categoría y zona.",
              )}
            </p>
          </div>
          <Link
            to="/servicios/marketing"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            {t("See full packages", "Ver paquetes completos")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MARKETING_PACKAGES.map((p, idx) => (
            <OverviewCard key={p.id} pkg={p} gradient={GRADIENTS[idx % GRADIENTS.length]} fmt={fmt} t={t} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-neutral-500">
          {t(
            "Ad spend (Meta · Google · TikTok) runs directly from the client to the platform — we manage it.",
            "Pauta publicitaria (Meta · Google · TikTok) corre directo del cliente a la plataforma — nosotros la administramos.",
          )}
        </p>
      </div>
    </section>
  );
}

function OverviewCard({
  pkg: p,
  gradient,
  fmt,
  t,
}: {
  pkg: MarketingPackage;
  gradient: string;
  fmt: (n: number) => string;
  t: ReturnType<typeof useT>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Only activate scroll-trigger on devices without hover (touch)
    const noHover = window.matchMedia("(hover: none)").matches;
    if (!noHover || !ref.current) return;

    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setActive(e.isIntersecting));
      },
      {
        // central band of the viewport (~30% height)
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      to="/servicios/marketing"
      hash={p.slug}
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
            p.badge
              ? "inline-flex items-center rounded-full border border-neutral-950 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-950 transition group-hover:border-white group-hover:text-white group-data-[active=true]:border-white group-data-[active=true]:text-white"
              : "text-xs font-medium uppercase tracking-[0.14em] text-neutral-500 transition group-hover:text-white group-data-[active=true]:text-white"
          }
        >
          {p.badge ?? p.vol}
        </span>
        <ArrowUpRight className="h-4 w-4 text-neutral-400 transition group-hover:text-white group-data-[active=true]:text-white" />
      </div>

      <h3 className="relative text-xl font-medium tracking-[-0.01em] text-neutral-950 transition group-hover:text-white group-data-[active=true]:text-white">
        {p.name}
      </h3>
      <p className="relative mt-2 text-sm text-neutral-600 transition group-hover:text-white/80 group-data-[active=true]:text-white/80">
        {p.tagline}
      </p>

      <div className="relative mt-6 flex items-baseline gap-1.5">
        <span className="text-2xl font-medium tabular-nums text-neutral-950 transition group-hover:text-white group-data-[active=true]:text-white">
          {fmt(p.weekly)}
        </span>
        <span className="text-xs text-neutral-500 transition group-hover:text-white/70 group-data-[active=true]:text-white/70">
          {t("/wk + tax", "/sem + IVA")}
        </span>
      </div>
      <p className="relative mt-1 text-xs text-neutral-600 transition group-hover:text-white/80 group-data-[active=true]:text-white/80">
        ~{fmt(p.monthly)}{" "}
        <span className="text-neutral-500 transition group-hover:text-white/60 group-data-[active=true]:text-white/60">
          {t(`/mo · ${p.contractMonths}mo contract`, `/mes · contrato ${p.contractMonths} m`)}
        </span>
      </p>

      <ul className="relative mt-6 space-y-1.5 border-t border-dashed border-neutral-300 pt-5 transition group-hover:border-white/30 group-data-[active=true]:border-white/30">
        {p.outcomes.slice(0, 3).map((o) => (
          <li
            key={o}
            className="flex items-start gap-2 text-xs text-neutral-800 transition group-hover:text-white/90 group-data-[active=true]:text-white/90"
          >
            <Check
              className="mt-0.5 h-3 w-3 flex-shrink-0 text-neutral-950 transition group-hover:text-white group-data-[active=true]:text-white"
              strokeWidth={2.5}
            />
            <span>{o}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}
