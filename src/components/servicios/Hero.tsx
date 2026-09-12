import { Link } from "@tanstack/react-router";
import { AphelionLogo } from "@/components/Brand";
import { useT } from "@/lib/i18n";

export function Hero({ onCta }: { onCta: () => void }) {
  const t = useT();
  return (
    <section className="relative px-5 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-5xl text-center">
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
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            {t("Tell us what you need", "Cuéntanos qué necesitas")}
          </Link>
          <button
            onClick={onCta}
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:border-neutral-950"
          >
            {t("See prices and packages →", "Ver precios y paquetes →")}
          </button>
        </div>
      </div>
    </section>
  );
}
