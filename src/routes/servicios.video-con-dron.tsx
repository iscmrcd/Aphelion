import { createFileRoute } from "@tanstack/react-router";
import { DroneSection } from "@/components/servicios/DroneSection";
import { ParallaxBanner } from "@/components/servicios/ParallaxBanner";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { useT } from "@/lib/i18n";
import { buildHead, SITE_URL } from "@/lib/seo";
import { FAQ_DRONE } from "@/lib/dron-data";
import { FAQ_DRONE_EN } from "@/lib/dron-data.en";

export const Route = createFileRoute("/servicios/video-con-dron")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/servicios/video-con-dron",
      lang: loaderData?.lang ?? "es",
      // Share preview uses the page's own drone banner instead of the generic logo card.
      image: `${SITE_URL}/images/og/video-con-dron-og.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      en: {
        title: "Drone Video in Ensenada | Aphelion",
        description:
          "Aerial drone content production for businesses, events, and projects in Ensenada and Valle de Guadalupe. Get a quote in minutes.",
        ogTitle: "Drone video and photography in Ensenada and Valle de Guadalupe",
        ogDescription:
          "Aerial production integrated into the same team that runs your brand. Not a freelance pilot — content built to sell.",
      },
      es: {
        title: "Video con Dron en Ensenada | Aphelion",
        description:
          "Producción de contenido aéreo con dron para negocios, eventos y proyectos en Ensenada y Valle de Guadalupe. Cotiza en minutos.",
        ogTitle: "Video y foto con dron en Ensenada y Valle de Guadalupe",
        ogDescription:
          "Producción aérea integrada al mismo equipo que maneja tu marca. No es un piloto suelto: es contenido pensado para vender.",
      },
      jsonLd: [
        {
          "@type": "Service",
          serviceType: "Aerial drone video and photography production",
          provider: { "@type": "Organization", name: "Aphelion", url: SITE_URL },
          areaServed: [
            "Ensenada",
            "Valle de Guadalupe",
            "Rosarito",
            "Tecate",
            "Tijuana",
            "San Quintín",
            "Mexicali",
          ],
          name: "Video y Fotografía Aérea con Dron",
        },
        {
          "@type": "FAQPage",
          mainEntity: (loaderData?.lang === "en" ? FAQ_DRONE_EN : FAQ_DRONE).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }),
  component: DronePage,
});

function DronePage() {
  const t = useT();
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <ParallaxBanner image="/images/video-dron-banner.webp">
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            {t("Aerial Production", "Producción Aérea")}
          </p>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
            {t("Aerial Video & Drone Photography", "Video y Fotografía Aérea con Dron")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t(
              "Show your spaces, properties and events from another perspective. Aerial photography and edited video with a defined scope, formats and delivery date.",
              "Muestra tus espacios, propiedades y eventos desde otra perspectiva. Fotografía aérea y video editado con alcance, formatos y fecha de entrega definidos.",
            )}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#paquetes"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              {t("See packages", "Ver paquetes")}
            </a>
            <a
              href="https://wa.me/526461293352?text=Hola%20Aphelion%2C%20me%20gustar%C3%ADa%20cotizar%20un%20video%20con%20dron."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </ParallaxBanner>

      <DroneSection />
      <CTAFooter />
    </main>
  );
}
