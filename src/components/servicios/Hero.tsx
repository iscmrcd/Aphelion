export function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative px-5 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-8 inline-flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 100 100" fill="none" aria-hidden>
            <path
              d="M28 12 L42 12 L66 82 L50 82 L45 64 L25 64 L20 82 L4 82 Z M29 50 L41 50 L35 28 Z"
              fill="currentColor"
            />
            <circle cx="80" cy="24" r="13" fill="currentColor" />
          </svg>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
            Aphelion
          </span>
        </div>
        <h1 className="mx-auto max-w-3xl text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.035em] text-neutral-950">
          Infraestructura digital para marcas que no se conforman.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
          Diseño, código y operación al nivel que tu marca merece. Sin atajos, sin
          plantillas, sin compromisos a medias.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Agendar llamada
          </a>
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
