import { Check } from "lucide-react";
import { useDroneData } from "@/lib/content";
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
  const { lang } = useLang();
  const { DRONE_PACKAGES, DRONE_EXTRAS, DRONE_ZONES, DRONE_POLICY } = useDroneData();
  const fmt = (n: number) => "$" + n.toLocaleString(lang === "es" ? "es-MX" : "en-US") + " MXN";

  return (
    <>
      {/* Paquetes */}
      <section
        id="paquetes"
        className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("Packages", "Paquetes")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            {t("Three ways to work in the air.", "Tres formas de trabajar en el aire.")}
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
          {DRONE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7"
            >
              <h3 className="text-xl font-medium tracking-[-0.02em] text-neutral-950">
                {pkg.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{pkg.tagline}</p>

              <div className="mt-5 border-t border-dashed border-neutral-200 pt-5">
                <div className="text-3xl font-medium tracking-[-0.03em] tabular-nums text-neutral-950">
                  {fmt(pkg.price)}
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-neutral-500">
                  {pkg.duration}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-2.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <Check
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-950"
                      strokeWidth={2.5}
                    />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(t, pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                {t("Book by WhatsApp", "Cotizar por WhatsApp")}
              </a>
            </div>
          ))}
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

      {/* Política */}
      <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("Policy", "Política")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            {t("Good to know before booking.", "Bueno saberlo antes de reservar.")}
          </h2>

          <ul className="mt-8 space-y-3">
            {DRONE_POLICY.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
