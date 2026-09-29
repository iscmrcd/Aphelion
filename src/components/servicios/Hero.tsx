import { Link } from "@tanstack/react-router";
import { AphelionLogo } from "@/components/Brand";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import lightHero from "@/assets/home-hero-light.jpg";
import darkHero from "@/assets/home-hero-dark.jpg";

export function Hero({ onCta }: { onCta: () => void }) {
  const t = useT();
  return (
    <section className="home-hero relative isolate overflow-hidden px-5 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <img src={lightHero} width={1536} height={1024} fetchPriority="high" alt="" className="home-hero-image home-hero-light absolute inset-0 h-full w-full object-cover" />
        <img src={darkHero} width={1536} height={1024} alt="" className="home-hero-image home-hero-dark absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-10 inline-flex items-center justify-center">
          <AphelionLogo className="h-8 w-auto sm:h-9" />
        </div>
        <h1 className="mx-auto max-w-3xl text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.035em] text-neutral-950">
          {t(
            "Your website, your campaigns and your system. In one place.",
            "Tu página web, tus campañas y tu sistema. En un solo lugar.",
          )}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
          {t(
            "We build the site, connect booking, payments and follow-up, and run the ads. Our prices are published: you can check them before you talk to us.",
            "Construimos el sitio, conectamos agenda, pagos y seguimiento, y operamos los anuncios. Los precios están publicados: puedes verlos antes de hablar con nosotros.",
          )}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild className="h-auto rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90">
            <Link to="/contacto">{t("Tell us what you need", "Cuéntanos qué necesitas")}</Link>
          </Button>
          <Button
            variant="outline"
            onClick={onCta}
            className="h-auto rounded-full border-border bg-background/75 px-6 py-3 text-foreground hover:bg-background"
          >
            {t("See prices and packages →", "Ver precios y paquetes →")}
          </Button>
        </div>
      </div>
    </section>
  );
}
