import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";

/**
 * Closing band for the homepage and service pages. It says what happens
 * after the visitor writes, because "contact us" alone asks for trust the
 * page has not earned yet.
 */
export function ContactCTA({ service }: { service?: string }) {
  const t = useT();

  const NEXT = [
    t("We reply within 24 hours.", "Te respondemos en menos de 24 horas."),
    t(
      "If it fits, a 30-minute call with no commitment.",
      "Si encaja, una llamada de 30 minutos sin compromiso.",
    ),
    t("A written proposal with a fixed price.", "Una propuesta por escrito con precio fijo."),
  ];

  return (
    <section
      id="contacto"
      className="on-dark border-t border-white/10 bg-neutral-950 px-5 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-medium tracking-[-0.03em] sm:text-6xl">
          {t("Tell us about your project.", "Cuéntanos tu proyecto.")}
        </h2>

        <ol className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
          {NEXT.map((n, i) => (
            <li
              key={n}
              className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/25 text-[11px] tabular-nums text-white/80">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-white/75">{n}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/contacto"
            search={service ? { servicio: service } : undefined}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
          >
            {t("Tell us about your project", "Cuéntanos tu proyecto")}
          </Link>
          <a
            href="https://wa.me/526461293352?text=Hola%20Aphelion%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
          >
            WhatsApp
          </a>
        </div>
        <p className="mt-6 text-xs text-white/45">hola@aphelion.mx · +52 646 129 3352</p>
      </div>
    </section>
  );
}
