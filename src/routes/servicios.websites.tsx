import { createFileRoute } from "@tanstack/react-router";
import { WebsitesSection } from "@/components/servicios/WebsitesSection";
import { FAQ } from "@/components/servicios/FAQ";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { ScrollDrivenBanner } from "@/components/servicios/ScrollDrivenBanner";
import { PortfolioSection } from "@/components/servicios/PortfolioSection";
import {
  ServiceHeroContent,
  ServiceBenefits,
  ServiceTimeline,
} from "@/components/servicios/ServiceExperience";
import { useT } from "@/lib/i18n";
import { buildHead, SITE_URL } from "@/lib/seo";
import { FAQ_WEB } from "@/lib/websites-data";
import { FAQ_WEB_EN } from "@/lib/websites-data.en";

export const Route = createFileRoute("/servicios/websites")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/servicios/websites",
      lang: loaderData?.lang ?? "es",
      en: {
        title: "Website Design for Businesses in Baja California | Aphelion",
        description:
          "Professional websites and landing pages for businesses in Tijuana and Ensenada. See real work, three clear packages, maintenance and delivery times.",
      },
      es: {
        title: "Diseño de Páginas Web en Baja California | Aphelion",
        description:
          "Páginas web y landing pages para negocios en Tijuana y Ensenada. Conoce proyectos reales, tres paquetes claros, mantenimiento y tiempos de entrega.",
      },
      jsonLd: [
        {
          "@type": "Service",
          serviceType: "Web design and development",
          provider: { "@type": "Organization", name: "Aphelion", url: SITE_URL },
          areaServed: ["MX", "US"],
          name: "Websites",
        },
        {
          "@type": "FAQPage",
          mainEntity: (loaderData?.lang === "en" ? FAQ_WEB_EN : FAQ_WEB).map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        },
      ],
    }),
  component: WebsitesPage,
});

function WebsitesPage() {
  const t = useT();
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased">
      <ScrollDrivenBanner ariaLabel={t("Website design", "Diseño web")}>
        <ServiceHeroContent
          eyebrow={t("Websites", "Sitios web")}
          title={t(
            "A website that makes your business easy to choose.",
            "Un sitio que ayuda a elegir tu negocio.",
          )}
          description={t(
            "Show what you do with clarity, give your work the space it deserves and make it easy for customers to get in touch.",
            "Presenta lo que haces con claridad, dale espacio a tu trabajo y facilita que tus clientes te contacten.",
          )}
        />
      </ScrollDrivenBanner>
      <ServiceBenefits
        title={t(
          "Your next customer\nneeds to understand you.",
          "Tu próximo cliente\nnecesita entenderte.",
        )}
        items={[
          {
            title: t("For an established business", "Para un negocio establecido"),
            description: t(
              "Communicate your services, your work and what customers can expect before they contact you.",
              "Comunica tus servicios, tu trabajo y lo que puede esperar un cliente antes de contactarte.",
            ),
          },
          {
            title: t("For a new launch", "Para un nuevo proyecto"),
            description: t(
              "Start with a professional site that works well on mobile and makes enquiries straightforward.",
              "Empieza con un sitio profesional que funcione en celular y facilite las consultas.",
            ),
          },
          {
            title: t("For your campaigns", "Para tus campañas"),
            description: t(
              "Connect ads to a focused landing page, qualification forms and conversion tracking.",
              "Conecta tus anuncios con una página enfocada, formularios de calificación y medición.",
            ),
          },
        ]}
      />
      <WebsitesSection />
      <PortfolioSection />
      <ServiceTimeline
        steps={[
          {
            title: t("A defined scope", "Alcance definido"),
            description: t(
              "We agree on pages, content, features, deliverables and investment. Website payments: 50% to start and 50% on delivery.",
              "Acordamos páginas, contenido, funciones, entregables e inversión. En sitios web: 50% al iniciar y 50% contra entrega.",
            ),
          },
          {
            title: t("Design and development", "Diseño y desarrollo"),
            description: t(
              "Presence: 7–10 days. Professional: 2–3 weeks. Lead generation: 3–4 weeks. We confirm the schedule after reviewing your content.",
              "Presencial: 7–10 días. Profesional: 2–3 semanas. Captación: 3–4 semanas. Confirmamos el calendario al revisar tu contenido.",
            ),
          },
          {
            title: t("Launch and handover", "Publicación y entrega"),
            description: t(
              "We review mobile layouts, contact paths and the agreed tracking. You receive the code, domain and access to your accounts.",
              "Revisamos la versión móvil, el contacto y la medición acordada. Recibes el código, el dominio y acceso a tus cuentas.",
            ),
          },
        ]}
      />
      <FAQ />
      <CTAFooter />
    </main>
  );
}
