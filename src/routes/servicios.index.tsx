import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { ServiceDirectory, ServiceSpecialties } from "@/components/servicios/ServiceDirectory";
import { StudioProcess } from "@/components/servicios/StudioProcess";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { HeroWaves } from "@/components/servicios/HeroWaves";
import { buildHead } from "@/lib/seo";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/servicios/")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/servicios",
      lang: loaderData?.lang ?? "es",
      en: {
        title: "Web Design, Marketing & Automation Services | Aphelion",
        description:
          "Explore Aphelion's web design, content, advertising, AI and custom systems services for businesses in Baja California.",
      },
      es: {
        title: "Servicios de Diseño Web, Marketing y Automatización | Aphelion",
        description:
          "Conoce los servicios de sitios web, contenido, publicidad, agentes IA y sistemas a medida de Aphelion para negocios de Baja California.",
      },
    }),
  component: ServicesPage,
});

function ServicesPage() {
  const t = useT();
  return (
    <main className="bg-neutral-50 text-neutral-950">
      <section className="home-hero relative isolate overflow-hidden px-5 py-20 sm:py-28">
        <HeroWaves />
        <div className="mx-auto max-w-6xl">
          <p className="studio-eyebrow">{t("Our services", "Nuestros servicios")}</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.045em]">
            {t("What your business needs. Connected.", "Lo que tu negocio necesita. Conectado.")}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            {t(
              "Start with a website, a content plan or a process to improve. We help you decide what comes first.",
              "Empieza con un sitio, un plan de contenido o un proceso que quieras mejorar. Te ayudamos a decidir qué va primero.",
            )}
          </p>
          <a href="#servicios" className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
            {t("Explore services", "Explorar servicios")}
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
      <ServiceDirectory showHeading={false} />
      <ServiceSpecialties />
      <StudioProcess />
      <CTAFooter />
    </main>
  );
}
