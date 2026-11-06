import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { WebsitesSection } from "@/components/servicios/WebsitesSection";
import { FAQ } from "@/components/servicios/FAQ";
import { ScrollDrivenBanner } from "@/components/servicios/ScrollDrivenBanner";
import { ProblemGrid } from "@/components/servicios/ProblemGrid";
import { BlogTeaserSection } from "@/components/blog/BlogTeaserSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { HowWeWork } from "@/components/home/HowWeWork";
import { ContactCTA } from "@/components/home/ContactCTA";
import { useT, useLang } from "@/lib/i18n";
import { buildHead } from "@/lib/seo";
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
        title: "Website Packages for Businesses | Aphelion",
        description:
          "Business websites, landing pages and online stores built to turn visits into messages. Three packages with published prices, upkeep included and real projects.",
        ogTitle: "Website packages for businesses",
        ogDescription:
          "Websites built to turn visits into messages. Three packages with published prices and real projects.",
      },
      es: {
        title: "Paquetes de Páginas Web para Negocios | Aphelion",
        description:
          "Páginas empresariales, landing pages y tiendas en línea hechas para convertir visitas en mensajes. Tres paquetes con precio publicado, mantenimiento incluido y proyectos reales.",
        ogTitle: "Paquetes de páginas web para negocios",
        ogDescription:
          "Páginas web hechas para convertir visitas en mensajes. Tres paquetes con precio publicado y proyectos reales.",
      },
      jsonLd: [
        {
          "@type": "Service",
          serviceType: "Web design and development",
          provider: { "@type": "Organization", name: "Aphelion", url: "https://aphelion.mx" },
          areaServed: ["MX", "US"],
          name: "Websites",
        },
        {
          "@type": "FAQPage",
          mainEntity: (loaderData?.lang === "en" ? FAQ_WEB_EN : FAQ_WEB).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }),
  component: WebsitesPage,
});

/*
 * Problem first, proof second, packages third. The tiers that need booking,
 * CRM or logins (Automatizada, Sistema Comercial, SaaS) now live on
 * /servicios/automatizacion; this page sells the three website tiers.
 */
function WebsitesPage() {
  const t = useT();
  const { lang } = useLang();

  const PROBLEMS = [
    {
      problem: t(
        "People look for me and either can't find me or find something that doesn't represent me.",
        "Me buscan y no me encuentran, o encuentran algo que no me representa.",
      ),
      solution: t(
        "A fast site that reads well on a phone, with basic SEO, so you show up and make a good first impression.",
        "Un sitio rápido, claro en celular y con SEO básico, para que aparezcas y causes buena impresión.",
      ),
    },
    {
      problem: t("They visit, but they don't write to me.", "Me visitan, pero no me escriben."),
      solution: t(
        "Sales copy, clear buttons and WhatsApp or a form on every page, so the next step is always one tap away.",
        "Textos de venta, botones claros y WhatsApp o formulario en cada página, para que el siguiente paso esté a un toque.",
      ),
    },
    {
      problem: t(
        "I pay for ads and don't know what worked.",
        "Pago anuncios y no sé qué funcionó.",
      ),
      solution: t(
        "Meta Pixel, Google Tag Manager and conversions set up from launch, so every lead has a source.",
        "Pixel de Meta, Google Tag Manager y conversiones listas desde el lanzamiento, para saber de dónde llega cada cliente.",
      ),
    },
  ];

  return (
    <main className="relative min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <ScrollDrivenBanner>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            {t("Websites", "Sitios web")}
          </p>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
            {t(
              "A website that sells for you, not just a business card.",
              "Una página que vende por ti, no solo una tarjeta de presentación.",
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t(
              "Design, copy and tracking made so the people who find you write to you. From $9,900 MXN, price published.",
              "Diseño, textos y medición pensados para que quien te encuentre te escriba. Desde $9,900 MXN, con precio publicado.",
            )}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contacto"
              search={{ servicio: "websites" }}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              {t("Tell us about your project", "Cuéntanos tu proyecto")}
            </Link>
            <a
              href="#websites"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
            >
              {t("See packages", "Ver paquetes")}
            </a>
          </div>
        </div>
      </ScrollDrivenBanner>

      <FeaturedWork
        area="web"
        bordered={false}
        eyebrow={t("Portfolio", "Portafolio")}
        title={t("Finished websites.", "Páginas web terminadas.")}
        intro={t(
          "Real projects, live and working. Open one to see the challenge and what we did.",
          "Proyectos reales, en línea y funcionando. Abre uno para ver el reto y lo que hicimos.",
        )}
      />

      <ProblemGrid
        title={t("Three things a good website fixes.", "Tres cosas que una buena página resuelve.")}
        items={PROBLEMS}
      />

      <WebsitesSection
        levelIds={[1, 2, 3]}
        featuredId={3}
        eyebrow={t("Packages", "Paquetes")}
        title={t(
          "Three packages. Start where you are today.",
          "Tres paquetes. Empieza donde estás hoy.",
        )}
        subtitle={t(
          "One-time price plus monthly upkeep, which covers hosting, domain, monitoring and support. Open a package to see everything it includes.",
          "Pago inicial más mantenimiento mensual, que cubre hosting, dominio, monitoreo y soporte. Abre un paquete para ver todo lo que incluye.",
        )}
        collapseCompare
        footer={
          <Link
            to="/servicios/automatizacion"
            className="group mt-4 flex items-center justify-between gap-4 rounded-2xl border border-dashed border-neutral-300 bg-white px-5 py-5 transition hover:border-neutral-950 sm:px-7"
          >
            <span>
              <span className="block text-sm font-medium text-neutral-950">
                {t(
                  "Need booking, a CRM or a client portal?",
                  "¿Necesitas agenda, CRM o un portal para tus clientes?",
                )}
              </span>
              <span className="mt-1 block text-sm text-neutral-500">
                {t(
                  "Automated websites from $59,500 and custom systems from $94,900 live in Automation & systems.",
                  "La Web Automatizada desde $59,500 y los sistemas a medida desde $94,900 están en Automatización y sistemas.",
                )}
              </span>
            </span>
            <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-neutral-400 transition group-hover:text-neutral-950" />
          </Link>
        }
      />

      <HowWeWork />
      <FAQ />
      <BlogTeaserSection categories={["Diseño Web"]} lang={lang} />
      <ContactCTA service="websites" />
    </main>
  );
}
