import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";
import { ParallaxBanner } from "@/components/servicios/ParallaxBanner";
import {
  ServiceHeroContent,
  ServiceBenefits,
  ServiceTimeline,
  IncludedList,
} from "@/components/servicios/ServiceExperience";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { useMarketingData } from "@/lib/content";
import { useLang, useT } from "@/lib/i18n";
import { buildHead, SITE_URL } from "@/lib/seo";
import banner from "@/assets/banners/produccion-premium-bg-v3.jpg.asset.json";

export const Route = createFileRoute("/servicios/produccion")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/servicios/produccion",
      lang: loaderData?.lang ?? "es",
      en: {
        title: "Photo & Video Production for Brands | Aphelion",
        description:
          "Brand photography, reels, commercials and aerial video in Baja California. Individual productions and ongoing premium production for the cross-border market.",
      },
      es: {
        title: "Producción de Foto y Video para Marcas | Aphelion",
        description:
          "Fotografía de marca, reels, comerciales y video aéreo en Baja California. Producciones por proyecto y producción premium continua para el mercado binacional.",
      },
      jsonLd: {
        "@type": "Service",
        name: "Brand photography and video production",
        provider: { "@type": "Organization", name: "Aphelion", url: SITE_URL },
        areaServed: ["MX", "US"],
      },
    }),
  component: ProductionPage,
});

function ProductionPage() {
  const t = useT();
  const { lang } = useLang();
  const { MARKETING_PACKAGES } = useMarketingData();
  const premium = MARKETING_PACKAGES.find((pkg) => pkg.id === 4)!;
  return (
    <main className="bg-neutral-50 text-neutral-950">
      <ParallaxBanner image={banner.url}>
        <ServiceHeroContent
          eyebrow={t("Photo & video production", "Producción de foto y video")}
          title={t(
            "Show what makes\nyour business yours.",
            "Muestra lo que hace\núnico a tu negocio.",
          )}
          description={t(
            "Photography, reels, brand films and aerial video with a clear creative direction. From the production brief to the final cut.",
            "Fotografía, reels, comerciales y video aéreo con una dirección creativa clara. Desde el plan de producción hasta la edición final.",
          )}
          anchor="produccion"
          action={t("Explore production", "Explorar producción")}
        />
      </ParallaxBanner>
      <ServiceBenefits
        title={t("Your spaces. Your people.\nYour story.", "Tus espacios. Tu gente.\nTu historia.")}
        items={[
          {
            title: t("Brand photography", "Fotografía de marca"),
            description: t(
              "Spaces, products and experiences photographed for your website, social channels and advertising.",
              "Espacios, productos y experiencias fotografiados para tu sitio, redes y publicidad.",
            ),
          },
          {
            title: t("Video with a purpose", "Video con intención"),
            description: t(
              "Reels, tours, brand films and campaign assets, planned for where people will watch them.",
              "Reels, recorridos, comerciales y piezas para campañas, planeados para donde se van a ver.",
            ),
          },
          {
            title: t("A broader perspective", "Otra perspectiva"),
            description: t(
              "Aerial footage to show a property, development, landscape or event in context.",
              "Tomas aéreas para mostrar una propiedad, desarrollo, paisaje o evento en su contexto.",
            ),
          },
        ]}
      />
      <section
        id="produccion"
        className="scroll-mt-24 border-t border-neutral-200 px-5 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="studio-eyebrow">{t("Ways to work together", "Formas de trabajar")}</p>
          <h2 className="studio-heading mt-4">
            {t(
              "One production.\nOr an ongoing direction.",
              "Una producción.\nO una dirección continua.",
            )}
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-neutral-200 bg-white p-7 sm:p-9">
              <p className="studio-eyebrow">{t("Individual project", "Proyecto individual")}</p>
              <h3 className="mt-5 text-2xl font-medium tracking-tight">
                {t(
                  "A production for your next launch.",
                  "Una producción para tu próximo lanzamiento.",
                )}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                {t(
                  "We define the concept, shoot, formats and final deliverables around your project. The quote includes the agreed production and editing scope.",
                  "Definimos el concepto, la sesión, los formatos y los entregables alrededor de tu proyecto. La cotización incluye el alcance de producción y edición acordado.",
                )}
              </p>
              <p className="mt-8 text-xl font-medium">
                {t("Quoted by scope", "Cotización según alcance")}
              </p>
              <Link
                to="/contacto"
                search={{ servicio: "contenido" }}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white"
              >
                {t("Let's talk about your project", "Hablemos de tu proyecto")}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <div className="mt-8 border-t border-neutral-200 pt-5">
                <Link
                  to="/servicios/video-con-dron"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                >
                  {t("Explore drone packages", "Ver opciones de video con dron")}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div
              id="produccion-premium"
              className="scroll-mt-24 rounded-3xl border border-neutral-950 bg-white p-7 sm:p-9"
            >
              <p className="studio-eyebrow">{t("Ongoing production", "Producción continua")}</p>
              <h3 className="mt-5 text-2xl font-medium tracking-tight">{premium.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                {t(
                  "For developments, hotels and brands with an ongoing content and campaign production calendar for Mexico and Southern California.",
                  "Para desarrollos, hoteles y marcas con un calendario continuo de producción y campañas para México y el sur de California.",
                )}
              </p>
              <p className="mt-8 text-3xl font-medium tracking-tight">
                ${premium.monthly.toLocaleString(lang === "es" ? "es-MX" : "en-US")}{" "}
                <span className="text-xs font-normal text-neutral-500">
                  MXN{t("/month + VAT", "/mes + IVA")}
                </span>
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                {t(
                  `Minimum term: ${premium.contractMonths} months. Ad spend separate.`,
                  `Plazo mínimo: ${premium.contractMonths} meses. Pauta por separado.`,
                )}
              </p>
              <Link
                to="/contacto"
                search={{ servicio: "contenido", ref: "produccion-premium" }}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white"
              >
                {t("Let's talk about your project", "Hablemos de tu proyecto")}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <details className="plan-details mt-8 border-t border-neutral-200">
                <summary className="flex cursor-pointer items-center justify-between gap-3 py-5 text-sm font-medium">
                  {t("Full scope", "Ver alcance completo")}
                  <Plus
                    aria-hidden="true"
                    className="details-icon h-4 w-4 shrink-0 transition-transform"
                  />
                </summary>
                <div className="space-y-6">
                  {premium.deliverables.map((group) => (
                    <div key={group.group}>
                      <p className="studio-eyebrow mb-3">{group.group}</p>
                      <IncludedList items={group.items} />
                    </div>
                  ))}
                  <p className="text-xs leading-relaxed text-neutral-500">{premium.adSpend}</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      <ServiceTimeline
        steps={[
          {
            title: t("Creative direction", "Dirección creativa"),
            description: t(
              "We agree on the objective, audience, references, locations and formats before the shoot.",
              "Acordamos objetivo, público, referencias, locaciones y formatos antes de la sesión.",
            ),
          },
          {
            title: t("Production", "Producción"),
            description: t(
              "We organise the shoot and the photo, video and aerial material included in the agreed brief.",
              "Organizamos la sesión y el material de foto, video y tomas aéreas incluido en el plan acordado.",
            ),
          },
          {
            title: t("Editing and delivery", "Edición y entrega"),
            description: t(
              "We confirm editing, review rounds, usage and the delivery date in writing, based on the number and format of the final assets.",
              "Confirmamos por escrito la edición, las revisiones, el uso del material y la fecha de entrega según la cantidad y el formato de las piezas finales.",
            ),
          },
        ]}
      />
      <CTAFooter />
    </main>
  );
}
