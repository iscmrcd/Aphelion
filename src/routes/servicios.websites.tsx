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
import { WEBSITE_DELIVERY } from "@/lib/website-delivery";

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
            "Your business, clearly presented. Easy to contact.",
            "Tu negocio, bien presentado. El contacto, fácil.",
          )}
          description={t(
            "Show what you do with clarity, give your work the space it deserves and make it easy for customers to get in touch.",
            "Presenta lo que haces con claridad, dale espacio a tu trabajo y facilita que tus clientes te contacten.",
          )}
        />
      </ScrollDrivenBanner>
      <PortfolioSection />
      <ServiceBenefits
        eyebrow={t("What we help solve", "Lo que ayudamos a resolver")}
        title={t(
          "Your next customer\nneeds to understand you.",
          "Tu próximo cliente\nnecesita entenderte.",
        )}
        items={[
          {
            title: t(
              "Your website no longer reflects your business",
              "Tu sitio ya no representa tu negocio",
            ),
            description: t(
              "We organise your services, images and copy so your website reflects what you do today.",
              "Reordenamos tus servicios, imágenes y textos para que tu sitio refleje lo que haces hoy.",
            ),
          },
          {
            title: t("People visit but rarely enquire", "Recibes visitas, pero pocas consultas"),
            description: t(
              "Clear buttons, WhatsApp and contact forms make it easier for interested visitors to reach you.",
              "Facilitamos el contacto con botones claros, WhatsApp y formularios para quienes se interesan en tu negocio.",
            ),
          },
          {
            title: t(
              "You invest in ads without measuring enquiries",
              "Inviertes en anuncios sin medir",
            ),
            description: t(
              "The Lead-Gen package connects campaign landing pages, forms and conversion tracking to help review where enquiries come from.",
              "La opción de Captación conecta páginas para campañas, formularios y medición para revisar de dónde llegan las consultas.",
            ),
          },
        ]}
      />
      <WebsitesSection />
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
              `${WEBSITE_DELIVERY.en.websites} ${WEBSITE_DELIVERY.en.conditions}`,
              `${WEBSITE_DELIVERY.es.websites} ${WEBSITE_DELIVERY.es.conditions}`,
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
