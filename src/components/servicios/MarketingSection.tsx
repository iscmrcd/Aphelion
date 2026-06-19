import { useState } from "react";
import { Check, ChevronDown, Minus } from "lucide-react";
import { MARKETING_PACKAGES, MARKETING_REPLACES, type MarketingPackage } from "@/lib/marketing-data";
import cardBg from "@/assets/banners/brand-partner-bg.jpg.asset.json";
import premiumBg from "@/assets/banners/produccion-premium-bg-v2.jpg.asset.json";

const fmt = (n: number) => "$" + n.toLocaleString("es-MX");

const BADGE_TONE: Record<number, "popular" | "limited" | undefined> = {
  3: "popular",
  4: "limited",
};

export function MarketingSection() {
  const [openId, setOpenId] = useState<number>(3); // Brand Partner default

  return (
    <section
      id="marketing"
      className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            Selecciona tu volumen
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            Cuatro paquetes. Tú eliges la velocidad.
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Toca cualquier tarjeta para ver lo que incluye.
          </p>
        </div>

        <div className="space-y-3">
          {MARKETING_PACKAGES.map((p) => (
            <PackageCard
              key={p.id}
              pkg={p}
              open={openId === p.id}
              onToggle={() => setOpenId(openId === p.id ? -1 : p.id)}
              tone={BADGE_TONE[p.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({
  pkg,
  open,
  onToggle,
  tone,
}: {
  pkg: MarketingPackage;
  open: boolean;
  onToggle: () => void;
  tone?: "popular" | "limited";
}) {
  const isPopular = tone === "popular";
  const isLimited = tone === "limited";
  const dark = isPopular || isLimited;

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition ${
        dark ? "border-neutral-950" : "border-neutral-200"
      } ${open ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]" : ""} bg-white`}
    >
      <button
        onClick={onToggle}
        className={`relative grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6 ${
          dark ? "text-white" : "text-neutral-950"
        }`}
        style={
          dark
            ? {
                backgroundColor: "#0a0a0a",
                backgroundImage: `url(${isLimited ? premiumBg.url : cardBg.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        {dark && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/55 to-neutral-950/30"
          />
        )}
        <div className="relative min-w-0">

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`text-[10px] font-medium uppercase tracking-[0.16em] ${
                dark ? "text-white/60" : "text-neutral-500"
              }`}
            >
              {pkg.vol}
            </span>
            {pkg.badge && (
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                  isPopular
                    ? "bg-white text-neutral-950"
                    : isLimited
                      ? "bg-amber-300 text-neutral-950"
                      : "border border-neutral-300 bg-neutral-50 text-neutral-700"
                }`}
              >
                {pkg.badge}
              </span>
            )}
          </div>
          <h3
            className={`mt-1 truncate text-xl font-medium tracking-[-0.02em] sm:text-2xl ${
              dark ? "text-white" : "text-neutral-950"
            }`}
          >
            {pkg.name}
          </h3>
          <p
            className={`mt-1 line-clamp-1 text-sm ${
              dark ? "text-white/70" : "text-neutral-500"
            }`}
          >
            {pkg.tagline}
          </p>
        </div>

        <div className="relative flex shrink-0 items-center gap-3 sm:gap-5">
          <div className="text-right">
            <div
              className={`text-lg font-medium tabular-nums tracking-[-0.02em] sm:text-2xl ${
                dark ? "text-white" : "text-neutral-950"
              }`}
            >
              {fmt(pkg.weekly)}
            </div>
            <div
              className={`text-[10px] uppercase tracking-[0.12em] ${
                dark ? "text-white/60" : "text-neutral-500"
              }`}
            >
              /semana
            </div>
          </div>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""} ${
              dark ? "text-white/70" : "text-neutral-400"
            }`}
            strokeWidth={2}
          />
        </div>
      </button>

      {open && ((dark: boolean) => (
        <div
          className={`border-t px-5 pb-7 pt-6 sm:px-7 ${
            dark ? "border-white/10" : "border-neutral-200"
          }`}
        >
          {/* Pricing */}
          <div className="mb-7">
            <div className="flex flex-wrap items-baseline gap-2">
              <span
                className={`text-4xl font-medium tracking-[-0.03em] tabular-nums sm:text-5xl ${
                  dark ? "text-white" : "text-neutral-950"
                }`}
              >
                {fmt(pkg.weekly)}
              </span>
              <span className={`text-xs ${dark ? "text-white/60" : "text-neutral-500"}`}>
                MXN / semana + IVA
              </span>
            </div>
            <p
              className={`mt-2 text-xs leading-relaxed ${
                dark ? "text-white/60" : "text-neutral-500"
              }`}
            >
              ~{fmt(pkg.monthly)} MXN / mes · Contrato mínimo: {pkg.contractMonths} meses
            </p>
          </div>

          {/* Two-col content */}
          <div className="grid gap-7 sm:grid-cols-2">
            <div className="space-y-6">
              <div>
                <p
                  className={`mb-2 text-xs font-medium uppercase tracking-[0.14em] ${
                    dark ? "text-white/60" : "text-neutral-500"
                  }`}
                >
                  Para quién es
                </p>
                <p className={`text-sm leading-relaxed ${dark ? "text-white/80" : "text-neutral-700"}`}>
                  {pkg.forWho}
                </p>
              </div>

              <div>
                <p
                  className={`mb-3 text-xs font-medium uppercase tracking-[0.14em] ${
                    dark ? "text-white/60" : "text-neutral-500"
                  }`}
                >
                  Ideal para
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {pkg.ideal.map((i) => (
                    <span
                      key={i}
                      className={`rounded-full px-2.5 py-1 text-xs ${
                        dark
                          ? "border border-white/20 text-white/80"
                          : "border border-neutral-200 text-neutral-700"
                      }`}
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className={`mb-3 text-xs font-medium uppercase tracking-[0.14em] ${
                    dark ? "text-white/60" : "text-neutral-500"
                  }`}
                >
                  Qué lograrás
                </p>
                <ul className="space-y-2">
                  {pkg.outcomes.map((o) => (
                    <li
                      key={o}
                      className={`flex items-start gap-2.5 text-sm ${
                        dark ? "text-white/90" : "text-neutral-800"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          dark ? "text-white" : "text-neutral-950"
                        }`}
                        strokeWidth={2.5}
                      />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {pkg.deliverables.map((d) => (
                <div key={d.group}>
                  <p
                    className={`mb-3 text-xs font-medium uppercase tracking-[0.14em] ${
                      dark ? "text-white/60" : "text-neutral-500"
                    }`}
                  >
                    {d.group}
                  </p>
                  <ul className="space-y-1.5">
                    {d.items.map((i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2.5 text-sm ${
                          dark ? "text-white/80" : "text-neutral-700"
                        }`}
                      >
                        <span
                          className={`mt-2 h-1 w-1 flex-shrink-0 rounded-full ${
                            dark ? "bg-white/40" : "bg-neutral-400"
                          }`}
                        />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <p
                  className={`mb-3 text-xs font-medium uppercase tracking-[0.14em] ${
                    dark ? "text-white/60" : "text-neutral-500"
                  }`}
                >
                  Equipo de producción
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {pkg.equipment.map((e) => (
                    <span
                      key={e}
                      className={`rounded-full px-2.5 py-1 text-xs ${
                        dark
                          ? "bg-white/10 text-white/80"
                          : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {pkg.adSpend && (
                <div
                  className={`rounded-xl border border-dashed p-3.5 ${
                    dark
                      ? "border-white/20 bg-white/5"
                      : "border-neutral-300 bg-neutral-50"
                  }`}
                >
                  <p
                    className={`mb-1 text-[10px] font-medium uppercase tracking-[0.14em] ${
                      dark ? "text-white/60" : "text-neutral-500"
                    }`}
                  >
                    Pauta publicitaria
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${
                      dark ? "text-white/80" : "text-neutral-700"
                    }`}
                  >
                    {pkg.adSpend}
                  </p>
                </div>
              )}

              {pkg.notIncluded.length > 0 && (
                <div>
                  <p
                    className={`mb-3 text-xs font-medium uppercase tracking-[0.14em] ${
                      dark ? "text-white/60" : "text-neutral-500"
                    }`}
                  >
                    No incluye
                  </p>
                  <ul className="space-y-1.5">
                    {pkg.notIncluded.map((i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-xs ${
                          dark ? "text-white/50" : "text-neutral-400"
                        }`}
                      >
                        <Minus className="mt-1 h-3 w-3 flex-shrink-0" strokeWidth={2.5} />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Replaces table — only Brand Partner / Premium */}
          {(pkg.id === 3 || pkg.id === 4) && (
            <div
              className={`mt-7 overflow-hidden rounded-xl border ${
                dark ? "border-white/15" : "border-neutral-200"
              }`}
            >
              <div
                className={`px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.14em] ${
                  dark ? "bg-white/5 text-white/60" : "bg-neutral-50 text-neutral-500"
                }`}
              >
                Vs. contratar el equipo por separado
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {MARKETING_REPLACES.map((r) => (
                    <tr
                      key={r.role}
                      className={`border-t border-dashed ${
                        dark ? "border-white/10" : "border-neutral-200"
                      }`}
                    >
                      <td
                        className={`px-4 py-2.5 ${dark ? "text-white/80" : "text-neutral-800"}`}
                      >
                        {r.role}
                      </td>
                      <td
                        className={`px-4 py-2.5 text-right tabular-nums ${
                          dark ? "text-white/70" : "text-neutral-600"
                        }`}
                      >
                        {r.cost}/mes
                      </td>
                    </tr>
                  ))}
                  <tr
                    className={`border-t ${
                      dark ? "border-white/20 bg-white/5" : "border-neutral-300 bg-neutral-50"
                    }`}
                  >
                    <td
                      className={`px-4 py-2.5 font-medium ${
                        dark ? "text-white" : "text-neutral-950"
                      }`}
                    >
                      Costo equivalente
                    </td>
                    <td
                      className={`px-4 py-2.5 text-right font-medium tabular-nums ${
                        dark ? "text-emerald-300" : "text-emerald-700"
                      }`}
                    >
                      $36,000–$56,000/mes
                    </td>
                  </tr>
                  <tr
                    className={`border-t ${
                      dark ? "border-white/20" : "border-neutral-300 bg-neutral-950"
                    }`}
                  >
                    <td
                      className={`px-4 py-2.5 font-medium ${
                        dark ? "text-white/70" : "text-white"
                      }`}
                    >
                      {pkg.name} Aphelion
                    </td>
                    <td
                      className={`px-4 py-2.5 text-right font-medium tabular-nums ${
                        dark ? "text-white" : "text-white"
                      }`}
                    >
                      ~{fmt(pkg.monthly)}/mes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href="/contacto"
              className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${
                dark
                  ? "bg-white text-neutral-950 hover:bg-white/90"
                  : "bg-neutral-950 text-white hover:bg-neutral-800"
              }`}
            >
              Reservar este nivel
            </a>
            <a
              href="/contacto"
              className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                dark
                  ? "border-white/30 text-white hover:border-white"
                  : "border-neutral-200 text-neutral-950 hover:border-neutral-950"
              }`}
            >
              Hablar con estrategia
            </a>
          </div>
        </div>
      ))(false)}
    </div>
  );
}
