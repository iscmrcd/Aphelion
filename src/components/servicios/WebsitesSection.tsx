import { forwardRef, useState } from "react";
import { Check, Minus, Plus, Settings } from "lucide-react";
import { WEB_LEVELS, COMPARE_GROUPS, COMPARE_HEADERS, type CompareCell } from "@/lib/websites-data";

const fmt = (n: number | null) =>
  n === null ? "Cotización" : "$" + n.toLocaleString("es-MX");

export const WebsitesSection = forwardRef<HTMLDivElement>((_props, ref) => {
  const [active, setActive] = useState(2); // Profesional default
  const [billing, setBilling] = useState<"setup" | "mensual">("setup");
  const level = WEB_LEVELS.find((l) => l.id === active)!;

  return (
    <section ref={ref} id="websites" className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">

        {/* Tabs */}
        <div className="mb-8 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div className="flex min-w-max gap-2 sm:justify-center">
            {WEB_LEVELS.map((l) => (
              <button
                key={l.id}
                onClick={() => setActive(l.id)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
                  active === l.id
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                }`}
              >
                {l.name}
              </button>
            ))}
          </div>
        </div>

        {/* Level Card */}
        <div className="rounded-[28px] border border-neutral-200 bg-white p-6 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Left: meta */}
            <div className="lg:w-1/2">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                Nivel 0{level.id}
              </p>
              <h3 className="mt-2 text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
                {level.name}
              </h3>
              <p className="mt-3 text-base text-neutral-500">{level.tagline}</p>

              {/* Price + toggle */}
              <div className="mt-8">
                {level.setup !== null ? (
                  <>
                    <div className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 p-1">
                      <button
                        onClick={() => setBilling("setup")}
                        className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                          billing === "setup" ? "bg-white text-neutral-950 shadow-sm" : "text-neutral-500"
                        }`}
                      >
                        Setup único
                      </button>
                      <button
                        onClick={() => setBilling("mensual")}
                        className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                          billing === "mensual" ? "bg-white text-neutral-950 shadow-sm" : "text-neutral-500"
                        }`}
                      >
                        Mantenimiento
                      </button>
                    </div>
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="text-5xl font-medium tracking-[-0.03em] text-neutral-950 tabular-nums">
                        {fmt(billing === "setup" ? level.setup : level.men)}
                      </span>
                      <span className="text-sm text-neutral-500">
                        {billing === "setup" ? "MXN, una sola vez" : "MXN / mes"}
                      </span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-neutral-500">
                      {billing === "setup"
                        ? "Inversión inicial: diseño, desarrollo y puesta en marcha."
                        : "Mantenimiento mensual: hosting, dominio, monitoreo, backups, seguridad y soporte continuo."}
                    </p>
                  </>
                ) : (
                  <div>
                    <div className="text-5xl font-medium tracking-[-0.03em] text-neutral-950">
                      A medida
                    </div>
                    <p className="mt-2 text-sm text-neutral-500">
                      Alcance, usuarios e infraestructura definen el costo.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                  Ideal para
                </p>
                <div className="flex flex-wrap gap-2">
                  {level.ideal.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  Elegir este nivel
                </a>
                <a
                  href="#comparar"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:border-neutral-950"
                >
                  Comparar todos
                </a>
              </div>
            </div>

            {/* Right: includes */}
            <div className="lg:w-1/2 lg:border-l lg:border-neutral-200 lg:pl-12">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                  Incluye
                </p>
                <ul className="space-y-2.5">
                  {level.includes.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-800">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-950" strokeWidth={2.5} />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {level.notInc.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                    No incluye
                  </p>
                  <ul className="space-y-2">
                    {level.notInc.map((i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-400">
                        <Minus className="mt-1 h-3 w-3 flex-shrink-0" strokeWidth={2.5} />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {level.canAdd.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                    Módulos opcionales
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {level.canAdd.map((i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-neutral-300 px-3 py-1 text-xs text-neutral-600"
                      >
                        <Plus className="h-3 w-3" strokeWidth={2.5} />
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Compare table */}
        <ComparePlans />
      </div>
    </section>
  );
});
WebsitesSection.displayName = "WebsitesSection";

function CellIcon({ v }: { v: CompareCell }) {
  if (v === "yes") return <Check className="mx-auto h-4 w-4 text-neutral-950" strokeWidth={2.5} />;
  if (v === "addon") return <Plus className="mx-auto h-4 w-4 text-neutral-500" strokeWidth={2.5} />;
  if (v === "custom") return <Settings className="mx-auto h-3.5 w-3.5 text-neutral-400" strokeWidth={2} />;
  return <Minus className="mx-auto h-3 w-3 text-neutral-300" strokeWidth={2.5} />;
}

function ComparePlans() {
  return (
    <div id="comparar" className="mt-20">
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
