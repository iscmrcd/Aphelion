import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { MarketingSection } from "@/components/servicios/MarketingSection";
import { ProblemGrid } from "@/components/servicios/ProblemGrid";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { HowWeWork } from "@/components/home/HowWeWork";
import { ContactCTA } from "@/components/home/ContactCTA";
import { BlogTeaserSection } from "@/components/blog/BlogTeaserSection";
import { useMarketingData } from "@/lib/content";
import { useT, useLang } from "@/lib/i18n";
import { buildHead } from "@/lib/seo";
import { FAQ_MARKETING } from "@/lib/marketing-data";
import { FAQ_MARKETING_EN } from "@/lib/marketing-data.en";
import banner from "@/assets/banners/gradient-3.png.asset.json";
import premiumBg from "@/assets/banners/produccion-premium-bg-v3.jpg.asset.json";

export const Route = createFileRoute("/servicios/marketing")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/servicios/marketing",
      lang: loaderData?.lang ?? "es",
      en: {
        title: "Social Media Management & Ad Campaigns | Aphelion",
        description:
          "Social media, content and Meta and Google ad campaigns with in-house photo, video and drone. Three monthly plans with published prices.",
        ogTitle: "Social media management and ad campaigns",
        ogDescription:
          "Real content, managed campaigns and video production. Three monthly plans with published prices.",
      },
      es: {
        title: "Manejo de Redes Sociales y Campañas | Aphelion",
        description:
          "Manejo de redes, contenido y campañas en Meta y Google con foto, video y dron propios. Tres planes mensuales con precio publicado.",
        ogTitle: "Manejo de redes sociales y campañas para tu negocio",
        ogDescription:
          "Contenido real, campañas administradas y producción de video. Tres planes mensuales con precio publicado.",
      },
      jsonLd: [
        {
          "@type": "Service",
          serviceType: "Digital marketing and content production",
          provider: { "@type": "Organization", name: "Aphelion", url: "https://aphelion.mx" },
          areaServed: ["MX", "US"],
          name: "Marketing & Content",
        },
        {
          "@type": "FAQPage",
          mainEntity: (loaderData?.lang === "en" ? FAQ_MARKETING_EN : FAQ_MARKETING).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }),
  component: MarketingPage,
});

/*
 * Problem first, proof second, plans third. Three plans with a monthly price;
 * Producción Premium sits under them as a project with its own scope.
 */
function MarketingPage() {
  const t = useT();
  const { lang } = useLang();

  const PROBLEMS = [
    {
      problem: t(
        "My social media looks abandoned, or like everyone else's.",
        "Mis redes se ven abandonadas o como las de cualquiera.",
      ),
      solution: t(
        "A monthly calendar, a photo and video session and steady posting in your own style.",
        "Calendario mensual, sesión de foto y video, y publicación constante con tu estilo.",
      ),
    },
    {
      problem: t("I pay for ads and clients don't come.", "Pago anuncios y no llegan clientes."),
      solution: t(
        "Meta and Google campaigns with creatives made for your brand, and tracking for every lead.",
        "Campañas en Meta y Google con creativos hechos para tu marca, y medición de cada prospecto.",
      ),
    },
    {
      problem: t("I don't have the time or the team.", "No tengo tiempo ni equipo para hacerlo."),
      solution: t(
        "One team replaces the community manager, photographer, editor and ads specialist.",
        "Un solo equipo reemplaza al community manager, al fotógrafo, al editor y al especialista en anuncios.",
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <section className="on-dark relative flex min-h-[460px] items-center overflow-hidden bg-neutral-950 px-5 pt-20 pb-24 sm:min-h-[620px] sm:pt-28 sm:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            backgroundImage: `url(${banner.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/10 to-neutral-950"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            {t("Marketing & content", "Marketing y contenido")}
          </p>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
            {t(
              "Real content and campaigns that bring clients, not just likes.",
              "Contenido real y campañas que traen clientes, no solo likes.",
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t(
              "We shoot the photo, video and reels with our own team and use them in Meta, Google and TikTok campaigns we measure every month. From $6,450 MXN a month.",
              "Producimos la foto, el video y los reels con nuestro equipo, y los usamos en campañas de Meta, Google y TikTok que medimos cada mes. Desde $6,450 MXN al mes.",
            )}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contacto"
              search={{ servicio: "marketing" }}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              {t("Tell us about your project", "Cuéntanos tu proyecto")}
            </Link>
            <a
              href="#marketing"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
            >
              {t("See plans", "Ver planes")}
            </a>
          </div>
        </div>
      </section>

      <FeaturedWork
        area="marketing"
        bordered={false}
        eyebrow={t("Work", "Trabajo")}
        title={t("Brands we already work with.", "Marcas con las que ya trabajamos.")}
      />

      <ProblemGrid
        title={t(
          "What changes when marketing is done right.",
          "Lo que cambia cuando el marketing se hace bien.",
        )}
        items={PROBLEMS}
      />

      <MarketingSection
        packageIds={[1, 2, 3]}
        featuredId={2}
        eyebrow={t("Plans", "Planes")}
        title={t("Three plans. You set the pace.", "Tres planes. Tú eliges el ritmo.")}
        subtitle={t(
          "Monthly price plus VAT, with a minimum term. Ad spend is paid by you directly to each platform. Open a plan to see everything it includes.",
          "Precio mensual más IVA, con plazo mínimo. La inversión en anuncios la pagas directo a cada plataforma. Abre un plan para ver todo lo que incluye.",
        )}
        footer={<PremiumProduction />}
      />

      <HowWeWork />
      <MarketingFAQ />
      <BlogTeaserSection
        categories={["SEO", "Publicidad", "Estrategia de Marketing"]}
        lang={lang}
      />
      <ContactCTA service="marketing" />
    </main>
  );
}

/** Cinematic production is sold by project, so it sits apart from the plans. */
function PremiumProduction() {
  const t = useT();
  return (
    <div className="on-dark relative mt-4 overflow-hidden rounded-2xl border border-neutral-950 bg-neutral-950 px-5 py-6 text-white sm:px-7 sm:py-7">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${premiumBg.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-md">
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
            {t("By project · Limited spots", "Por proyecto · Cupo limitado")}
          </p>
          <h3 className="mt-1 text-xl font-medium tracking-[-0.02em] sm:text-2xl">
            {t("Premium Production", "Producción Premium")}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {t(
              "Cinematic production for developments, hotels and luxury brands selling to the binational MX / SoCal market. Reference: $32,500 MXN a month on a 12-month term.",
              "Producción cinematográfica para desarrollos, hoteles y marcas de lujo que venden al mercado binacional MX / SoCal. Referencia: $32,500 MXN al mes con plazo de 12 meses.",
            )}
          </p>
        </div>
        <Link
          to="/contacto"
          search={{ servicio: "marketing" }}
          className="inline-flex w-fit flex-shrink-0 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
        >
          {t("Talk about your project", "Platicar del proyecto")}
        </Link>
      </div>
    </div>
  );
}

function MarketingFAQ() {
  const t = useT();
  const { FAQ_MARKETING } = useMarketingData();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("Frequently asked questions", "Preguntas frecuentes")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            {t("How we work.", "Cómo trabajamos.")}
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQ_MARKETING.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-neutral-950">{f.q}</span>
                  <Plus
                    className={`h-4 w-4 flex-shrink-0 text-neutral-500 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pr-8 text-sm leading-relaxed text-neutral-500">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
