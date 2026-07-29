import { createFileRoute, Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { buildHead, ORGANIZATION_JSONLD, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/",
      lang: loaderData?.lang ?? "en",
      en: {
        title: "Aphelion — Digital Infrastructure for High-Ticket Brands",
        description:
          "Design, code and digital operations for brands that refuse to settle. Websites, marketing, content, video and custom SaaS.",
        ogTitle: "Aphelion — Digital Infrastructure Agency",
        ogDescription: "Digital infrastructure for brands that refuse to settle.",
      },
      es: {
        title: "Aphelion — Agencia digital para marcas high-ticket",
        description:
          "Diseño, código y operación digital para marcas que no se conforman. Websites, marketing, contenido, video y SaaS.",
        ogTitle: "Aphelion — Agencia digital",
        ogDescription: "Infraestructura digital para marcas que no se conforman.",
      },
      jsonLd: [
        ORGANIZATION_JSONLD,
        {
          "@type": "WebSite",
          name: "Aphelion",
          url: SITE_URL,
          inLanguage: ["en-US", "es-MX"],
        },
      ],
    }),
  component: Index,
});

function Index() {
  const t = useT();
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
          {t(
            "Digital infrastructure for brands that refuse to settle.",
            "Infraestructura digital para marcas que no se conforman."
          )}
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base text-neutral-500">
          {t(
            "Websites, marketing, content, video and SaaS — run with editorial standards.",
            "Websites, marketing, contenido, video y SaaS — operados con criterio editorial."
          )}
        </p>
        <div className="mt-10">
          <Link
            to="/servicios"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            {t("View services →", "Ver servicios →")}
          </Link>
        </div>
      </div>
    </main>
  );
}
