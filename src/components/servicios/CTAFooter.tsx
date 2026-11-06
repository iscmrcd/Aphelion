import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";

export function CTAFooter() {
  const t = useT();
  return (
    <section
      id="contacto"
      className="on-dark border-t border-white/10 bg-neutral-950 px-5 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
          {t(
            "Tell us where you are. Let's plan what comes next.",
            "Cuéntanos dónde estás. Veamos qué sigue.",
          )}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base text-white/60">
          {t(
            "Tell us about your business and what you want to improve. We'll help you define the next step, with a clear scope and budget. We reply within 24 hours.",
            "Cuéntanos de tu negocio y qué quieres mejorar. Te ayudamos a definir el siguiente paso con alcance y presupuesto claros. Te respondemos en menos de 24 horas.",
          )}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
          >
            {t("Let's talk about your project", "Hablemos de tu proyecto")}
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
      </div>
    </section>
  );
}
