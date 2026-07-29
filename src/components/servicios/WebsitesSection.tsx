import { forwardRef, useState } from "react";
import { Check, ChevronDown, Minus, Plus, Settings } from "lucide-react";
import type { CompareCell, WebLevel } from "@/lib/websites-data";
import { useWebsitesData } from "@/lib/content";
import { useT, useLang } from "@/lib/i18n";

const BADGES: Record<number, { label: [string, string]; tone: "popular" | "custom" } | undefined> = {
  2: { label: ["Most popular", "Más elegido"], tone: "popular" },
  6: { label: ["Custom", "A medida"], tone: "custom" },
};

export const WebsitesSection = forwardRef<HTMLDivElement>((_props, ref) => {
  const [openId, setOpenId] = useState<number>(2);
  const { WEB_LEVELS } = useWebsitesData();
  const t = useT();

  return (
    <section ref={ref} id="websites" className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("Select your tier", "Selecciona tu nivel")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            {t("Six tiers. You choose where to start.", "Seis escalones. Tú eliges dónde empezar.")}
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            {t("Tap any card to see what's included.", "Toca cualquier tarjeta para ver lo que incluye.")}
          </p>
        </div>

        <div className="space-y-3">
          {WEB_LEVELS.map((l) => (
            <LevelCard
              key={l.id}
              level={l}
              open={openId === l.id}
              onToggle={() => setOpenId(openId === l.id ? -1 : l.id)}
              badge={BADGES[l.id]}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <ComparePlans />
      </div>
    </section>
  );
});
WebsitesSection.displayName = "WebsitesSection";

function LevelCard({
  level,
  open,
  onToggle,
  badge,
}: {
  level: WebLevel;
  open: boolean;
  onToggle: () => void;
  badge?: { label: [string, string]; tone: "popular" | "custom" };
}) {
  const [billing, setBilling] = useState<"setup" | "mensual">("setup");
  const isPopular = badge?.tone === "popular";
  const isCustom = badge?.tone === "custom";
  const t = useT();
  const { lang } = useLang();
  const fmt = (n: number | null) =>
    n === null ? t("Quote", "Cotización") : "$" + n.toLocaleString(lang === "es" ? "es-MX" : "en-US");

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition ${
        isPopular
          ? "border-neutral-950 bg-neutral-950 text-white"
          : "border-neutral-200 bg-white text-neutral-950"
      } ${open ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]" : ""}`}
    >
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              className={`text-[10px] font-medium uppercase tracking-[0.16em] ${
                isPopular ? "text-white/60" : "text-neutral-500"
              }`}
            >
              {t("Tier 0", "Nivel 0")}{level.id}
            </span>
            {badge && (
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                  isPopular
                    ? "bg-white text-neutral-950"
                    : "border border-neutral-300 bg-neutral-50 text-neutral-700"
                }`}
              >
                {t(badge.label[0], badge.label[1])}
              </span>
            )}
          </div>
          <h3
            className={`mt-1 truncate text-xl font-medium tracking-[-0.02em] sm:text-2xl ${
              isPopular ? "text-white" : "text-neutral-950"
            }`}
          >
            {level.name}
          </h3>
          <p
            className={`mt-1 line-clamp-1 text-sm ${
              isPopular ? "text-white/70" : "text-neutral-500"
            }`}
          >
            {level.tagline}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <div className="text-right">
            {isCustom ? (
              <div
                className={`text-base font-medium tracking-[-0.01em] ${
                  isPopular ? "text-white" : "text-neutral-950"
                }`}
              >
                {t("Custom", "A medida")}
              </div>
            ) : (
              <>
                <div
                  className={`text-lg font-medium tabular-nums tracking-[-0.02em] sm:text-2xl ${
                    isPopular ? "text-white" : "text-neutral-950"
                  }`}
                >
                  {fmt(level.setup)}
                </div>
                <div
                  className={`text-[10px] uppercase tracking-[0.12em] ${
                    isPopular ? "text-white/60" : "text-neutral-500"
                  }`}
                >
                  {t("setup", "setup")}
                </div>
              </>
            )}
          </div>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""} ${
              isPopular ? "text-white/70" : "text-neutral-400"
            }`}
            strokeWidth={2}
          />
        </div>
      </button>

      {/* Body — expanded */}
      {open && (
        <div
          className={`border-t px-5 pb-7 pt-6 sm:px-7 ${
            isPopular ? "border-white/10" : "border-neutral-200"
          }`}
        >
          {/* Pricing detail */}
          {level.setup !== null ? (
            <div className="mb-7">
              <div
                className={`inline-flex rounded-full p-1 ${
                  isPopular ? "bg-white/10" : "border border-neutral-200 bg-neutral-50"
                }`}
              >
                <button
                  onClick={() => setBilling("setup")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                    billing === "setup"
                      ? isPopular
                        ? "bg-white text-neutral-950"
                        : "bg-white text-neutral-950 shadow-sm"
                      : isPopular
                        ? "text-white/70"
                        : "text-neutral-500"
                  }`}
                >
                  {t("One-time setup", "Setup único")}
                </button>
                <button
                  onClick={() => setBilling("mensual")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                    billing === "mensual"
                      ? isPopular
                        ? "bg-white text-neutral-950"
                        : "bg-white text-neutral-950 shadow-sm"
                      : isPopular
                        ? "text-white/70"
                        : "text-neutral-500"
                  }`}
                >
                  {t("Maintenance", "Mantenimiento")}
                </button>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span
                  className={`text-4xl font-medium tracking-[-0.03em] tabular-nums sm:text-5xl ${
                    isPopular ? "text-white" : "text-neutral-950"
                  }`}
                >
                  {fmt(billing === "setup" ? level.setup : level.men)}
                </span>
                <span className={`text-xs ${isPopular ? "text-white/60" : "text-neutral-500"}`}>
                  {billing === "setup" ? t("USD, one-time", "MXN, una sola vez") : t("USD / month", "MXN / mes")}
                </span>
              </div>
              <p
                className={`mt-2 text-xs leading-relaxed ${
                  isPopular ? "text-white/60" : "text-neutral-500"
                }`}
              >
                {billing === "setup"
                  ? t("Initial investment: design, development, and launch.", "Inversión inicial: diseño, desarrollo y puesta en marcha.")
                  : t("Hosting, domain, monitoring, backups, security, and ongoing support.", "Hosting, dominio, monitoreo, backups, seguridad y soporte continuo.")}
              </p>
            </div>
          ) : (
            <p
              className={`mb-7 text-sm ${
                isPopular ? "text-white/70" : "text-neutral-500"
              }`}
            >
              {t("Scope, users, and infrastructure define the cost.", "Alcance, usuarios e infraestructura definen el costo.")}
            </p>
          )}

          {/* Two-col content */}
          <div className="grid gap-7 sm:grid-cols-2">
            <div>
              <p
                className={`mb-3 text-xs font-medium uppercase tracking-[0.14em] ${
                  isPopular ? "text-white/60" : "text-neutral-500"
                }`}
              >
                {t("Includes", "Incluye")}
              </p>
              <ul className="space-y-2">
                {level.includes.map((i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2.5 text-sm ${
                      isPopular ? "text-white/90" : "text-neutral-800"
                    }`}
                  >
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        isPopular ? "text-white" : "text-neutral-950"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div>
                <p
                  className={`mb-3 text-xs font-medium uppercase tracking-[0.14em] ${
                    isPopular ? "text-white/60" : "text-neutral-500"
                  }`}
                >
                  {t("Ideal for", "Ideal para")}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {level.ideal.map((i) => (
                    <span
                      key={i}
                      className={`rounded-full px-2.5 py-1 text-xs ${
                        isPopular
                          ? "border border-white/20 text-white/80"
                          : "border border-neutral-200 text-neutral-700"
                      }`}
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              {level.canAdd.length > 0 && (
                <div>
                  <p
                    className={`mb-3 text-xs font-medium uppercase tracking-[0.14em] ${
                      isPopular ? "text-white/60" : "text-neutral-500"
                    }`}
                  >
                    {t("Optional modules", "Módulos opcionales")}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {level.canAdd.map((i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1 rounded-full border border-dashed px-2.5 py-1 text-xs ${
                          isPopular
                            ? "border-white/30 text-white/70"
                            : "border-neutral-300 text-neutral-600"
                        }`}
                      >
                        <Plus className="h-3 w-3" strokeWidth={2.5} />
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {level.notInc.length > 0 && (
                <div>
                  <p
                    className={`mb-3 text-xs font-medium uppercase tracking-[0.14em] ${
                      isPopular ? "text-white/60" : "text-neutral-500"
                    }`}
                  >
                    {t("Not included", "No incluye")}
                  </p>
                  <ul className="space-y-1.5">
                    {level.notInc.map((i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-xs ${
                          isPopular ? "text-white/50" : "text-neutral-400"
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

          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href="/contacto"
              className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${
                isPopular
                  ? "bg-white text-neutral-950 hover:bg-white/90"
                  : "bg-neutral-950 text-white hover:bg-neutral-800"
              }`}
            >
              {t("Choose this tier", "Elegir este nivel")}
            </a>
            <a
              href="#comparar"
              className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                isPopular
                  ? "border-white/30 text-white hover:border-white"
                  : "border-neutral-200 text-neutral-950 hover:border-neutral-950"
              }`}
            >
              {t("Compare all", "Comparar todos")}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function CellIcon({ v }: { v: CompareCell }) {
  if (v === "yes") return <Check className="mx-auto h-4 w-4 text-neutral-950" strokeWidth={2.5} />;
  if (v === "addon") return <Plus className="mx-auto h-4 w-4 text-neutral-500" strokeWidth={2.5} />;
  if (v === "custom") return <Settings className="mx-auto h-3.5 w-3.5 text-neutral-400" strokeWidth={2} />;
  return <Minus className="mx-auto h-3 w-3 text-neutral-300" strokeWidth={2.5} />;
}

function useCellLabel() {
  const t = useT();
  const CELL_LABEL: Record<CompareCell, string> = {
    yes: t("Included", "Incluido"),
    addon: t("Optional module", "Módulo opcional"),
    no: t("Not available", "No disponible"),
    custom: t("Quote", "Cotización"),
  };
  return CELL_LABEL;
}

function MobileCellIcon({ v }: { v: CompareCell }) {
  if (v === "yes")
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
        <Check className="h-3.5 w-3.5 text-emerald-600" strokeWidth={3} />
      </span>
    );
  if (v === "addon")
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-blue-50">
        <Plus className="h-3.5 w-3.5 text-blue-600" strokeWidth={3} />
      </span>
    );
  if (v === "custom")
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-amber-50">
        <Settings className="h-3 w-3 text-amber-600" strokeWidth={2.5} />
      </span>
    );
  return (
    <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100">
      <Minus className="h-3 w-3 text-neutral-400" strokeWidth={3} />
    </span>
  );
}

function PlanSelector({
  val,
  set,
  label,
  accent,
}: {
  val: number;
  set: (n: number) => void;
  label: string;
  accent: "neutral" | "dark";
}) {
  const { WEB_LEVELS, COMPARE_HEADERS } = useWebsitesData();
  const { lang } = useLang();
  const fmt = (n: number | null) =>
    n === null ? (lang === "es" ? "Cotización" : "Quote") : "$" + n.toLocaleString(lang === "es" ? "es-MX" : "en-US");
  const t = useT();
  const lvl = WEB_LEVELS[val];
  const isDark = accent === "dark";
  return (
    <label className="relative block">
      <span
        className={`mb-1.5 block px-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
          isDark ? "text-neutral-950" : "text-neutral-500"
        }`}
      >
        {label}
      </span>
      <div
        className={`relative rounded-2xl border-2 transition ${
          isDark ? "border-neutral-950 bg-neutral-950 text-white" : "border-neutral-200 bg-white text-neutral-950"
        }`}
      >
        <select
          value={val}
          onChange={(e) => set(Number(e.target.value))}
          className="w-full cursor-pointer appearance-none bg-transparent px-3.5 pb-2 pt-3 pr-8 text-[13px] font-semibold focus:outline-none"
        >
          {COMPARE_HEADERS.map((h, i) => (
            <option key={h} value={i} className="text-neutral-950">
              {h}
            </option>
          ))}
        </select>
        <ChevronDown
          className={`pointer-events-none absolute right-2.5 top-3.5 h-4 w-4 ${isDark ? "text-white/70" : "text-neutral-500"}`}
        />
        <div
          className={`flex items-baseline gap-1 px-3.5 pb-3 pt-0.5 text-[11px] ${
            isDark ? "text-white/70" : "text-neutral-500"
          }`}
        >
          <span className={`text-base font-semibold ${isDark ? "text-white" : "text-neutral-950"}`}>
            {fmt(lvl.setup)}
          </span>
          {lvl.men !== null && <span>· {fmt(lvl.men)}{t("/mo", "/mes")}</span>}
        </div>
      </div>
    </label>
  );
}

function MobileCompare() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const { WEB_LEVELS, COMPARE_GROUPS } = useWebsitesData();
  const t = useT();
  const { lang } = useLang();
  const fmt = (n: number | null) =>
    n === null ? t("Quote", "Cotización") : "$" + n.toLocaleString(lang === "es" ? "es-MX" : "en-US");
  const CELL_LABEL = useCellLabel();
  const planA = WEB_LEVELS[a];
  const planB = WEB_LEVELS[b];

  return (
    <div className="md:hidden">
      {/* Plan selector with prices + vs badge */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-3">
          <PlanSelector val={a} set={setA} label={t("Plan A", "Plan A")} accent="neutral" />
          <PlanSelector val={b} set={setB} label={t("Plan B", "Plan B")} accent="dark" />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-[10px] font-bold uppercase tracking-wider text-neutral-700 shadow-sm">
            {t("vs", "vs")}
          </span>
        </div>
      </div>

      {/* Comparison list */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        {COMPARE_GROUPS.map((g) => (
          <div key={g.group}>
            <div className="bg-neutral-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
              {g.group}
            </div>
            {g.rows.map((r) => (
              <div
                key={r.label}
                className="grid grid-cols-[minmax(0,1fr)_56px_56px] items-center gap-2 border-t border-dashed border-neutral-200 px-4 py-3"
              >
                <span className="text-[13px] leading-snug text-neutral-800">{r.label}</span>
                <span className="flex justify-center" aria-label={CELL_LABEL[r.vals[a]]}>
                  <MobileCellIcon v={r.vals[a]} />
                </span>
                <span className="flex justify-center" aria-label={CELL_LABEL[r.vals[b]]}>
                  <MobileCellIcon v={r.vals[b]} />
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Summary cards with CTA */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {[{ p: planA, dark: false }, { p: planB, dark: true }].map(({ p, dark }) => (
          <div
            key={p.id}
            className={`flex flex-col rounded-2xl border p-4 ${
              dark ? "border-neutral-950 bg-neutral-950 text-white" : "border-neutral-200 bg-white text-neutral-950"
            }`}
          >
            <span className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${dark ? "text-white/60" : "text-neutral-500"}`}>
              {t("Tier 0", "Nivel 0")}{p.id}
            </span>
            <span className="mt-0.5 text-[13px] font-semibold leading-tight">{p.name}</span>
            <div className="mt-3">
              <div className="text-xl font-semibold tracking-tight">{fmt(p.setup)}</div>
              {p.men !== null && (
                <div className={`text-[11px] ${dark ? "text-white/60" : "text-neutral-500"}`}>
                  + {fmt(p.men)}{t("/mo", "/mes")}
                </div>
              )}
            </div>
            <a
              href="#contacto"
              className={`mt-4 inline-flex items-center justify-center rounded-full px-3 py-2 text-[12px] font-semibold transition ${
                dark
                  ? "bg-white text-neutral-950 hover:bg-neutral-200"
                  : "bg-neutral-950 text-white hover:bg-neutral-800"
              }`}
            >
              {t("Choose", "Elegir")}
            </a>
          </div>
        ))}
      </div>

      {/* Mobile legend */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] text-neutral-600">
        <span className="inline-flex items-center gap-1"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50"><Check className="h-2.5 w-2.5 text-emerald-600" strokeWidth={3} /></span>{t("Included", "Incluido")}</span>
        <span className="inline-flex items-center gap-1"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-50"><Plus className="h-2.5 w-2.5 text-blue-600" strokeWidth={3} /></span>{t("Optional", "Opcional")}</span>
        <span className="inline-flex items-center gap-1"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-50"><Settings className="h-2 w-2 text-amber-600" strokeWidth={2.5} /></span>{t("Quote", "Cotización")}</span>
        <span className="inline-flex items-center gap-1"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-100"><Minus className="h-2 w-2 text-neutral-400" strokeWidth={3} /></span>{t("No", "No")}</span>
      </div>
    </div>
  );
}

function ComparePlans() {
  const { COMPARE_HEADERS, COMPARE_GROUPS } = useWebsitesData();
  const t = useT();
  return (
    <div id="comparar">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
          {t("Compare plans", "Compare plans")}
        </p>
        <h3 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
          {t("Everything, side by side.", "Todo, lado a lado.")}
        </h3>
      </div>

      {/* Mobile: A vs B */}
      <MobileCompare />

      {/* Desktop: full table */}
      <div className="hidden overflow-x-auto rounded-2xl border border-neutral-200 bg-white md:block">
        <table className="w-full min-w-[840px] border-collapse text-sm">
          <thead className="sticky top-0 bg-white">
            <tr className="border-b border-neutral-200">
              <th className="sticky left-0 z-10 bg-white p-4 text-left font-medium text-neutral-500"></th>
              {COMPARE_HEADERS.map((h) => (
                <th
                  key={h}
                  className="px-3 py-4 text-center text-xs font-medium text-neutral-950"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE_GROUPS.flatMap((g) => [
              <tr key={`g-${g.group}`} className="bg-neutral-50">
                <td
                  colSpan={COMPARE_HEADERS.length + 1}
                  className="px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-neutral-500"
                >
                  {g.group}
                </td>
              </tr>,
              ...g.rows.map((r) => (
                <tr
                  key={`r-${g.group}-${r.label}`}
                  className="border-t border-dashed border-neutral-200"
                >
                  <td className="sticky left-0 z-[1] bg-white px-4 py-3 text-left text-neutral-800">
                    {r.label}
                  </td>
                  {r.vals.map((v, i) => (
                    <td key={i} className="px-3 py-3 text-center">
                      <CellIcon v={v} />
                    </td>
                  ))}
                </tr>
              )),
            ])}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-neutral-500">
        <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-neutral-950" strokeWidth={2.5} /> {t("Included", "Incluido")}</span>
        <span className="inline-flex items-center gap-1.5"><Plus className="h-3.5 w-3.5" strokeWidth={2.5} /> {t("Optional module", "Módulo opcional")}</span>
        <span className="inline-flex items-center gap-1.5"><Minus className="h-3 w-3" strokeWidth={2.5} /> {t("Not available", "No disponible")}</span>
        <span className="inline-flex items-center gap-1.5"><Settings className="h-3 w-3" strokeWidth={2} /> {t("Quote", "Cotización")}</span>
      </div>
    </div>
  );
}
