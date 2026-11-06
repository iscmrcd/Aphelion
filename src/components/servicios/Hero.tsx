import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useT } from "@/lib/i18n";
import { HeroWaves } from "./HeroWaves";

export function Hero() {
  const t = useT();
  return (
    <section className="home-hero relative isolate overflow-hidden px-5 pt-20 pb-10 sm:pt-28 sm:pb-12">
      <HeroWaves />
      <div className="relative mx-auto max-w-6xl">
        <p className="studio-eyebrow mb-8 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" aria-hidden="true" />
          {t("Aphelion · Baja California", "Aphelion · Baja California")}
        </p>
        <h1 className="max-w-5xl text-[clamp(2.8rem,7.5vw,6.5rem)] font-medium leading-[1.02] tracking-[-0.055em] text-neutral-950">
          {t("Web design, content and automation.", "Diseño web, contenido y automatización.")}
        </h1>
        <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <p className="max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            {t(
              "For businesses in Baja California. We design your website, produce content, manage campaigns and automate booking and follow-up.",
              "Para negocios de Baja California. Diseñamos tu sitio, producimos contenido, administramos campañas y automatizamos citas y seguimiento.",
            )}
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button
              asChild
              className="h-auto rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/contacto">
                {t("Let's talk about your project", "Hablemos de tu proyecto")}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="h-auto rounded-full border-border bg-background/75 px-6 py-3 text-foreground hover:bg-background"
            >
              <a href="#servicios">
                {t("Explore services", "Explorar servicios")}
                <ArrowDown aria-hidden="true" className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-500/20 pt-6 text-[11px] tracking-wide text-neutral-500 sm:mt-24">
          <p>Ensenada · Tijuana · Baja California</p>
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 transition hover:text-neutral-950"
          >
            {t("Discover our work", "Conoce nuestro trabajo")}
            <ArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
