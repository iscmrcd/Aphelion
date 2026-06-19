import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { MARKETING_PACKAGES, MARKETING_REPLACES } from "@/lib/marketing-data";

const fmt = (n: number) => "$" + n.toLocaleString("es-MX");

export function MarketingSection() {
  const [active, setActive] = useState(2); // Crecimiento default
  const pkg = MARKETING_PACKAGES.find((p) => p.id === active)!;

  return (
    <section
      id="marketing"
      className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Tabs */}
        <div className="mb-8 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div className="flex min-w-max gap-2 sm:justify-center">
            {MARKETING_PACKAGES.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
                  active === p.id
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                }`}
              >
                {p.vol} · {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Package card */}
        <div
          id={pkg.slug}
          className="rounded-[28px] border border-neutral-200 bg-white p-6 sm:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Left */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                  {pkg.vol}
                </p>
                {pkg.badge && (
                  <span className="inline-flex items-center rounded-full border border-neutral-950 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-950">
                    {pkg.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
                {pkg.name}
              </h3>
              <p className="mt-3 text-base text-neutral-500">{pkg.tagline}</p>

              <div className="mt-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-medium tracking-[-0.03em] text-neutral-950 tabular-nums">
                    {fmt(pkg.weekly)}
                  </span>
                  <span className="text-sm text-neutral-500">MXN / semana + IVA</span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  ~{fmt(pkg.monthly)} MXN / mes · Contrato mínimo: {pkg.contractMonths} meses
                </p>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                  Para quién es
                </p>
                <p className="text-sm leading-relaxed text-neutral-700">{pkg.forWho}</p>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                  Ideal para
                </p>
                <div className="flex flex-wrap gap-2">
                  {pkg.ideal.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                  Objetivo principal
                </p>
                <p className="text-sm leading-relaxed text-neutral-700">{pkg.objective}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  Reservar este nivel
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:border-neutral-950"
                >
                  Hablar con estrategia
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="lg:w-1/2 lg:border-l lg:border-neutral-200 lg:pl-12">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                  Qué lograrás
                </p>
                <ul className="space-y-2.5">
                  {pkg.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-sm text-neutral-800">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-950"
                        strokeWidth={2.5}
                      />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-6">
                {pkg.deliverables.map((d) => (
                  <div key={d.group}>
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                      {d.group}
                    </p>
                    <ul className="space-y-2">
                      {d.items.map((i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-neutral-700"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                  Equipo de producción
                </p>
                <div className="flex flex-wrap gap-2">
                  {pkg.equipment.map((e) => (
                    <span
                      key={e}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {pkg.adSpend && (
                <div className="mt-6 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-4">
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                    Pauta publicitaria
                  </p>
                  <p className="text-xs leading-relaxed text-neutral-700">{pkg.adSpend}</p>
                </div>
              )}

              {pkg.notIncluded.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                    No incluye
                  </p>
                  <ul className="space-y-1.5">
                    {pkg.notIncluded.map((i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-neutral-400"
                      >
                        <Minus
                          className="mt-1 h-3 w-3 flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Brand Partner equivalence — only shown when relevant */}
        {(pkg.id === 3 || pkg.id === 4) && (
          <div className="mt-10 rounded-[28px] border border-neutral-200 bg-white p-6 sm:p-10">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                  Equivalencia
                </p>
                <h4 className="mt-1 text-2xl font-medium tracking-[-0.02em] text-neutral-950">
                  Lo que esto reemplaza
                </h4>
              </div>
              <p className="text-sm text-neutral-500">
                Un equipo completo, una sola facturación.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
                      Rol
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
                      Costo mensual estimado
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MARKETING_REPLACES.map((r) => (
                    <tr
                      key={r.role}
                      className="border-t border-dashed border-neutral-200"
                    >
                      <td className="px-4 py-3 text-neutral-800">{r.role}</td>
                      <td className="px-4 py-3 text-right tabular-nums text-neutral-700">
                        {r.cost} MXN
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t border-neutral-300 bg-neutral-50">
                    <td className="px-4 py-3 font-medium text-neutral-950">
                      Total equivalente
                    </td>
                    <td className="px-4 py-3 text-right font-medium tabular-nums text-neutral-950">
                      $36,000 – $56,000 MXN / mes
                    </td>
                  </tr>
                  <tr className="border-t border-neutral-300 bg-neutral-950">
                    <td className="px-4 py-3 font-medium text-white">
                      Brand Partner Aphelion
                    </td>
                    <td className="px-4 py-3 text-right font-medium tabular-nums text-white">
                      ~$23,770 MXN / mes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
