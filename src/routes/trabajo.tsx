import { createFileRoute } from "@tanstack/react-router";
import { PortfolioSection } from "@/components/servicios/PortfolioSection";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { useT } from "@/lib/i18n";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/trabajo")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/trabajo",
      lang: loaderData?.lang ?? "es",
      en: {
        title: "Selected Websites & Digital Projects | Aphelion",
        description:
          "Explore HAIMA and Velport: real websites, design and business systems created by Aphelion in Tijuana and Ensenada.",
      },
      es: {
        title: "Proyectos de Diseño Web y Sistemas | Aphelion",
        description:
          "Conoce HAIMA y Velport: sitios web, diseño y sistemas reales creados por Aphelion en Tijuana y Ensenada.",
      },
    }),
  component: WorkPage,
});

function WorkPage() {
  const t = useT();
  return (
    <main className="bg-neutral-50 text-neutral-950">
      <section className="px-5 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="studio-eyebrow">{t("Selected work", "Trabajo seleccionado")}</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.045em]">
            {t(
              "Different businesses.\nWork with purpose.",
              "Negocios distintos.\nTrabajo con intención.",
            )}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-neutral-500">
            {t(
              "A closer look at the challenges, decisions and solutions behind our projects. Explore each one and visit the live website.",
              "Conoce los retos, las decisiones y las soluciones detrás de nuestros proyectos. Abre cada caso y visita su sitio en funcionamiento.",
            )}
          </p>
        </div>
      </section>
      <PortfolioSection showHeading={false} />
      <CTAFooter />
    </main>
  );
}
