import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { MarketingSection } from "@/components/servicios/MarketingSection";
import { ParallaxBanner } from "@/components/servicios/ParallaxBanner";
import {
  ServiceHeroContent,
  ServiceBenefits,
  ServiceTimeline,
} from "@/components/servicios/ServiceExperience";
import { FAQ } from "@/components/servicios/FAQ";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { Reveal } from "@/components/servicios/Motion";
import { useMarketingData } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { buildHead, SITE_URL } from "@/lib/seo";
import { FAQ_MARKETING } from "@/lib/marketing-data";
import { FAQ_MARKETING_EN } from "@/lib/marketing-data.en";
import banner from "@/assets/banners/gradient-3.png.asset.json";

export const Route = createFileRoute("/servicios/marketing")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/servicios/marketing",
      lang: loaderData?.lang ?? "es",
      en: {
        title: "Social Media, Content & Ad Campaigns | Aphelion",
        description:
          "Original photo and video, social media management and Meta and Google ad campaigns for businesses in Baja California. Three monthly plans in MXN.",
      },
      es: {
        title: "Redes Sociales, Contenido y Campañas | Aphelion",
        description:
          "Fotografía y video propios, manejo de redes sociales y campañas en Meta y Google para negocios de Baja California. Tres planes mensuales en MXN.",
      },
      jsonLd: [
        {
          "@type": "Service",
          serviceType: "Digital marketing and content production",
          provider: { "@type": "Organization", name: "Aphelion", url: SITE_URL },
          areaServed: ["MX", "US"],
          name: "Marketing & Content",
        },
        {
          "@type": "FAQPage",
          mainEntity: (loaderData?.lang === "en" ? FAQ_MARKETING_EN : FAQ_MARKETING).map(
            (item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            }),
          ),
        },
      ],
    }),
  component: MarketingPage,
});

function MarketingPage() {
  const t = useT();
  const { FAQ_MARKETING } = useMarketingData();
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased">
      <ParallaxBanner image={banner.url}>
        <ServiceHeroContent
          eyebrow={t("Marketing & content", "Marketing y contenido")}
          title={t(
            "A brand that shows up. With something to say.",
            "Una marca presente. Con algo que decir.",
          )}
          description={t(
            "Original content, a consistent direction and campaigns with follow-up. We look after your digital presence while you run your business.",
            "Contenido propio, una dirección coherente y campañas con seguimiento. Cuidamos tu presencia digital mientras tú operas tu negocio.",
          )}
        />
      </ParallaxBanner>
      <ServiceBenefits
        title={t(
          "Content and campaigns.\nWith the same direction.",
          "Contenido y campañas.\nCon la misma dirección.",
        )}
        items={[
          {
            title: t("Your business, on camera", "Tu negocio, frente a la cámara"),
            description: t(
              "Planned photo and video sessions to show your spaces, products, people and experience.",
              "Sesiones de foto y video planeadas para mostrar tus espacios, productos, personas y experiencia.",
            ),
          },
          {
            title: t("A consistent presence", "Una presencia constante"),
            description: t(
              "An editorial calendar, copy, design and publishing that keep your channels active and aligned.",
              "Calendario editorial, textos, diseño y publicación para mantener tus canales activos y alineados.",
            ),
          },
          {
            title: t("Campaigns with follow-up", "Campañas con seguimiento"),
            description: t(
              "On plans with advertising, we manage audiences, creative and results. You pay ad spend directly to the platforms.",
              "En planes con publicidad, administramos públicos, creatividades y resultados. Tú pagas la inversión directo a las plataformas.",
            ),
          },
        ]}
      />
      <MarketingSection />
      <section className="border-t border-neutral-200 px-5 py-16">
        <Reveal className="mx-auto flex max-w-6xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <p className="studio-eyebrow">
              {t("A focused engagement", "Un acompañamiento enfocado")}
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight">
              {t("Already have an in-house team?", "¿Ya tienes un equipo interno?")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              {t(
                "We can join you for production, strategy or ad management. We define the work around the support you actually need.",
                "Podemos integrarnos en producción, estrategia o administración de campañas. Definimos el trabajo alrededor del apoyo que necesitas.",
              )}
            </p>
          </div>
          <Link
            to="/contacto"
            search={{ servicio: "marketing" }}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium"
          >
            {t("Let's talk about your project", "Hablemos de tu proyecto")}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
      <ServiceTimeline
        steps={[
          {
            title: t("Direction and objectives", "Dirección y objetivos"),
            description: t(
              "We review your business, audience and existing channels. We define priorities and the plan's scope together.",
              "Revisamos tu negocio, público y canales actuales. Definimos juntos las prioridades y el alcance del plan.",
            ),
          },
          {
            title: t("Monthly planning and production", "Planeación y producción mensual"),
            description: t(
              "We agree on the calendar, coordinate sessions and prepare content for your review before publishing.",
              "Acordamos el calendario, coordinamos las sesiones y preparamos el contenido para tu revisión antes de publicar.",
            ),
          },
          {
            title: t("Publishing and review", "Publicación y revisión"),
            description: t(
              "We publish, manage the campaigns included in your plan and review results to plan the following month.",
              "Publicamos, administramos las campañas incluidas en tu plan y revisamos los resultados para planear el mes siguiente.",
            ),
          },
        ]}
      />
      <FAQ items={FAQ_MARKETING} />
      <CTAFooter />
    </main>
  );
}
