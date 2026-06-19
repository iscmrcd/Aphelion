import { Link } from "@tanstack/react-router";
import { AphelionLogo } from "@/components/Brand";

export function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative px-5 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-10 inline-flex items-center justify-center">
          <AphelionLogo className="h-8 w-auto sm:h-9" />
        </div>
        <h1 className="mx-auto max-w-3xl text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.035em] text-neutral-950">
          Infraestructura digital para marcas que no se conforman.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
          Diseño, código y operación al nivel que tu marca merece. Sin atajos, sin
          plantillas, sin compromisos a medias.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Agendar llamada
          </Link>
          <button
            onClick={onCta}
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:border-neutral-950"
          >
            Ver paquetes web →
          </button>
        </div>
      </div>
    </section>
  );
}
