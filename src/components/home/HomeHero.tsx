import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { useT } from "@/lib/i18n";
import { HeroWaves } from "@/components/servicios/HeroWaves";

/**
 * Homepage hero. Keeps the scroll-responsive wave field and states, in this
 * order: what we do, who it is for, and the next step. The logo is not
 * repeated here because the header already shows it.
 */
export function HomeHero() {
  const t = useT();

  const proof = [
    t("10+ years in creative direction", "Más de 10 años en dirección creativa"),
    t("In-house video, photo and drone", "Producción y dron propios"),
    t("Published prices", "Precios publicados"),
  ];

  return (
    <section className="home-hero relative isolate overflow-hidden px-5 pt-20 pb-20 sm:pt-28 sm:pb-28">
      <HeroWaves />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-background/70 px-3.5 py-1.5 text-xs font-medium text-neutral-500 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
          {t("Ensenada · Valle de Guadalupe · Tijuana", "Ensenada · Valle de Guadalupe · Tijuana")}
        </p>

        <h1 className="mx-auto max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.03] tracking-[-0.035em] text-neutral-950">
          {t(
            "Your website, your marketing and your systems. One team.",
            "Tu página web, tu marketing y tus sistemas. Con un solo equipo.",
          )}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
          {t(
            "For Baja California businesses that want to look professional and win more clients. We design the site, produce the content, run the ads and automate the follow-up.",
            "Para negocios de Baja California que quieren verse profesionales y conseguir más clientes. Diseñamos el sitio, producimos el contenido, corremos los anuncios y automatizamos el seguimiento.",
          )}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            {t("Tell us about your project", "Cuéntanos tu proyecto")}
          </Link>
          <a
            href="#trabajo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-background/75 px-6 py-3 text-sm font-medium text-neutral-950 backdrop-blur transition hover:border-neutral-950"
          >
            {t("See our work", "Ver trabajos")}
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-500 sm:text-sm">
          {proof.map((p) => (
            <li key={p} className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-neutral-400" aria-hidden />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
