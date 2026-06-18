import { ArrowUpRight } from "lucide-react";
import { OTHER_CATEGORIES } from "@/lib/websites-data";

export function CategoryPlaceholders() {
  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            Otros servicios
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            ¿Necesitas algo más?
          </h2>
          <p className="mt-4 text-base text-neutral-500">
            Marketing, contenido, video y SaaS — cada proyecto se cotiza por alcance.
            Cuéntanos qué necesitas y armamos una propuesta a medida.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {OTHER_CATEGORIES.map((c) => (
            <a
              key={c.name}
              href="#contacto"
              className="group flex items-start justify-between gap-4 rounded-3xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-950"
            >
              <div>
                <h3 className="text-lg font-medium text-neutral-950">{c.name}</h3>
                <p className="mt-1 text-sm text-neutral-500">{c.desc}</p>
                <span className="mt-4 inline-block text-xs font-medium text-neutral-500 group-hover:text-neutral-950">
                  Solicitar cotización →
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-neutral-400 transition group-hover:text-neutral-950" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
