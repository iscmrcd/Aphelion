import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import type { DronePackage } from "@/lib/dron-data";
import { useDroneData } from "@/lib/content";
import { FAQ } from "@/components/servicios/FAQ";
import { useT, useLang } from "@/lib/i18n";

const WHATSAPP_NUMBER = "526461293352";

function waLink(t: (en: string, es: string) => string, packageName: string) {
  const text = t(
    `Hi Aphelion, I'd like to book the ${packageName} drone package.`,
    `Hola Aphelion, me gustaría cotizar el paquete ${packageName} de dron.`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function DroneSection() {
  const t = useT();
  const { DRONE_PACKAGES, DRONE_EXTRAS, DRONE_ZONES, FAQ_DRONE } = useDroneData();
  const [openId, setOpenId] = useState<number>(1);

  return (
    <>
      {/* Paquetes */}
      <section
        id="paquetes"
        className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              {t("Packages", "Paquetes")}
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
              {t("Three ways to work in the air.", "Tres formas de trabajar en el aire.")}
            </h2>
            <p className="mt-3 text-sm text-neutral-500">
              {t(
                "Tap any card to see what's included.",
                "Toca cualquier tarjeta para ver lo que incluye.",
              )}
            </p>
          </div>

          <div className="space-y-3">
            {DRONE_PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                open={openId === pkg.id}
                onToggle={() => setOpenId(openId === pkg.id ? -1 : pkg.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("Extras", "Extras")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            {t("Add-ons for specific needs.", "Adicionales para necesidades puntuales.")}
          </h2>

          <ul className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
            {DRONE_EXTRAS.map((e) => (
              <li
                key={e}
                className="flex items-start gap-3 py-4 text-sm leading-relaxed text-neutral-700"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Traslado */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("Travel", "Traslado")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            {t("Coverage by zone.", "Cobertura por zona.")}
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <table className="w-full text-sm">
              <tbody>
                {DRONE_ZONES.map((z) => (
                  <tr
                    key={z.zone}
                    className="border-t border-dashed border-neutral-200 first:border-t-0"
                  >
                    <td className="px-5 py-3.5 text-neutral-800">{z.zone}</td>
                    <td className="px-5 py-3.5 text-right font-medium tabular-nums text-neutral-950">
                      {z.charge}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={FAQ_DRONE} />
    </>
  );
}

function PackageCard({
  pkg,
  open,
  onToggle,
}: {
  pkg: DronePackage;
  open: boolean;
  onToggle: () => void;
}) {
  const t = useT();
  const { lang } = useLang();
  const fmt = (n: number) => "$" + n.toLocaleString(lang === "es" ? "es-MX" : "en-US");

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-neutral-200 bg-white transition ${
        open ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-left text-neutral-950 sm:px-7 sm:py-6"
      >
        <div className="min-w-0">
          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500">
            {pkg.duration}
          </span>
          <h3 className="mt-1 truncate text-xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-2xl">
            {pkg.name}
          </h3>
          <p className="mt-1 line-clamp-1 text-sm text-neutral-500">{pkg.tagline}</p>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <div className="text-right">
            <div className="text-lg font-medium tabular-nums tracking-[-0.02em] text-neutral-950 sm:text-2xl">
              {fmt(pkg.price)}
            </div>
            <div className="text-[10px] uppercase tracking-[0.12em] text-neutral-500">MXN</div>
          </div>
          <ChevronDown
            className={`h-5 w-5 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`}
            strokeWidth={2}
          />
        </div>
      </button>

      {open && (
        <div className="border-t border-neutral-200 px-5 pb-7 pt-6 sm:px-7">
          <div className="mb-7">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-4xl font-medium tracking-[-0.03em] tabular-nums text-neutral-950 sm:text-5xl">
                {fmt(pkg.price)}
              </span>
              <span className="text-xs text-neutral-500">MXN</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-neutral-500">{pkg.duration}</p>
          </div>

          <div className="mb-7">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
              {t("Ideal for", "Ideal para")}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {pkg.ideal.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-700"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
              {t("What's included", "Qué incluye")}
            </p>
            <ul className="space-y-2.5">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-800">
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-950"
                    strokeWidth={2.5}
                  />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href={waLink(t, pkg.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              {t("Book by WhatsApp", "Cotizar por WhatsApp")}
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:border-neutral-950"
            >
              {t("Talk to strategy", "Hablar con estrategia")}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
