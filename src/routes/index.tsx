import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aphelion — Agencia digital para marcas high-ticket" },
      {
        name: "description",
        content:
          "Diseño, código y operación digital para marcas que no se conforman. Websites, marketing, contenido, video y SaaS.",
      },
      { property: "og:title", content: "Aphelion — Agencia digital" },
      {
        property: "og:description",
        content: "Infraestructura digital para marcas que no se conforman.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-5">
      <div className="max-w-xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 text-neutral-950">
          <svg width="22" height="22" viewBox="0 0 100 100" fill="none" aria-hidden>
            <path
              d="M28 12 L42 12 L66 82 L50 82 L45 64 L25 64 L20 82 L4 82 Z M29 50 L41 50 L35 28 Z"
              fill="currentColor"
            />
            <circle cx="80" cy="24" r="13" fill="currentColor" />
          </svg>
          <span className="text-xs font-medium uppercase tracking-[0.18em]">Aphelion</span>
        </div>
        <h1 className="text-[clamp(2.25rem,6vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.035em] text-neutral-950">
          Infraestructura digital para marcas que no se conforman.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base text-neutral-500">
          Websites, marketing, contenido, video y SaaS — operados con criterio editorial.
        </p>
        <div className="mt-10">
          <Link
            to="/servicios"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Ver servicios →
          </Link>
        </div>
      </div>
    </main>
  );
}
