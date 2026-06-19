import { forwardRef, useState } from "react";
import { Check, ChevronDown, Minus, Plus, Settings } from "lucide-react";
import { WEB_LEVELS, COMPARE_GROUPS, COMPARE_HEADERS, type CompareCell, type WebLevel } from "@/lib/websites-data";

const fmt = (n: number | null) =>
  n === null ? "Cotización" : "$" + n.toLocaleString("es-MX");

const BADGES: Record<number, { label: string; tone: "popular" | "custom" } | undefined> = {
  2: { label: "Más elegido", tone: "popular" },
  6: { label: "A medida", tone: "custom" },
};

export const WebsitesSection = forwardRef<HTMLDivElement>((_props, ref) => {
  const [openId, setOpenId] = useState<number>(2);

  return (
    <section ref={ref} id="websites" className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            Selecciona tu nivel
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            Seis escalones. Tú eliges dónde empezar.
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Toca cualquier tarjeta para ver lo que incluye.
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
  badge?: { label: string; tone: "popular" | "custom" };
}) {
  const [billing, setBilling] = useState<"setup" | "mensual">("setup");
  const isPopular = badge?.tone === "popular";
  const isCustom = badge?.tone === "custom";

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
              Nivel 0{level.id}
            </span>
            {badge && (
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                  isPopular
                    ? "bg-white text-neutral-950"
                    : "border border-neutral-300 bg-neutral-50 text-neutral-700"
                }`}
              >
                {badge.label}
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
                A medida
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
                  setup
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
                  Setup único
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
                  Mantenimiento
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
                  {billing === "setup" ? "MXN, una sola vez" : "MXN / mes"}
                </span>
              </div>
              <p
                className={`mt-2 text-xs leading-relaxed ${
                  isPopular ? "text-white/60" : "text-neutral-500"
                }`}
              >
                {billing === "setup"
                  ? "Inversión inicial: diseño, desarrollo y puesta en marcha."
                  : "Hosting, dominio, monitoreo, backups, seguridad y soporte continuo."}
              </p>
            </div>
          ) : (
            <p
              className={`mb-7 text-sm ${
                isPopular ? "text-white/70" : "text-neutral-500"
              }`}
            >
              Alcance, usuarios e infraestructura definen el costo.
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
                Incluye
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
                  Ideal para
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
                    Módulos opcionales
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
                    No incluye
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
              Elegir este nivel
            </a>
            <a
              href="#comparar"
              className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                isPopular
                  ? "border-white/30 text-white hover:border-white"
                  : "border-neutral-200 text-neutral-950 hover:border-neutral-950"
              }`}
            >
              Comparar todos
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

function ComparePlans() {
  return (
    <div id="comparar">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
          Compare plans
        </p>
        <h3 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
          Todo, lado a lado.
        </h3>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
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

      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500">
        <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-neutral-950" strokeWidth={2.5} /> Incluido</span>
        <span className="inline-flex items-center gap-1.5"><Plus className="h-3.5 w-3.5" strokeWidth={2.5} /> Módulo opcional</span>
        <span className="inline-flex items-center gap-1.5"><Minus className="h-3 w-3" strokeWidth={2.5} /> No disponible</span>
        <span className="inline-flex items-center gap-1.5"><Settings className="h-3 w-3" strokeWidth={2} /> Cotización</span>
      </div>
    </div>
  );
}
