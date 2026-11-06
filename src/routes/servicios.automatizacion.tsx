import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollDrivenBanner } from "@/components/servicios/ScrollDrivenBanner";
import { ProblemGrid } from "@/components/servicios/ProblemGrid";
import { AgentIAPromo } from "@/components/servicios/AgentIAPromo";
import { WebsitesSection } from "@/components/servicios/WebsitesSection";
import { GradientBorderFrame } from "@/components/servicios/GradientBorderFrame";
import { BlogTeaserSection } from "@/components/blog/BlogTeaserSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { HowWeWork } from "@/components/home/HowWeWork";
import { SimpleFAQ } from "@/components/home/SimpleFAQ";
import { ContactCTA } from "@/components/home/ContactCTA";
import { AI_GRADIENT_TEXT } from "@/lib/agente-ia-data";
import { useT, useLang, pick } from "@/lib/i18n";
import { buildHead } from "@/lib/seo";

type Faq = { q: string; a: string };

const FAQ_ES: Faq[] = [
  {
    q: "¿Necesito IA o me basta con automatizar?",
    a: "Si las preguntas de tus clientes se repiten, un flujo automatizado lo resuelve más barato. Si cada conversación es distinta y la venta depende de entender al cliente, ahí la IA justifica su costo.",
  },
  {
    q: "¿Se conecta con lo que ya uso?",
    a: "Sí. Google Calendar, Calendly, Stripe, WhatsApp, tu CRM o tu sitio actual. Las integraciones que necesites son parte de lo que define el precio.",
  },
  {
    q: "¿Cuánto tarda?",
    a: "Un flujo sencillo puede operar en días. Un agente de IA o un sistema toma semanas, porque lo que más tiempo lleva es reunir tu información real y afinarlo hasta que funcione como tu negocio.",
  },
  {
    q: "¿Qué pasa con mis datos y los de mis clientes?",
    a: "Las conversaciones y los datos quedan en la infraestructura que definimos contigo, y las llaves de los servicios viven solo del lado del servidor. Si manejas datos sensibles, como en salud, lo diseñamos así desde el inicio.",
  },
];

const FAQ_EN: Faq[] = [
  {
    q: "Do I need AI, or is automation enough?",
    a: "If your clients ask the same questions, an automated flow handles it for less. If every conversation is different and the sale depends on understanding the client, that's where AI earns its cost.",
  },
  {
    q: "Does it connect to what I already use?",
    a: "Yes. Google Calendar, Calendly, Stripe, WhatsApp, your CRM or your current site. The integrations you need are part of what sets the price.",
  },
  {
    q: "How long does it take?",
    a: "A simple flow can be live in days. An AI agent or a system takes weeks, because most of the time goes into gathering your real information and tuning it until it works the way your business does.",
  },
  {
    q: "What happens to my data and my clients' data?",
    a: "Conversations and data stay on the infrastructure we define with you, and service keys live only on the server. If you handle sensitive data, as in health, we design for that from the start.",
  },
];

export const Route = createFileRoute("/servicios/automatizacion")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/servicios/automatizacion",
      lang: loaderData?.lang ?? "es",
      en: {
        title: "Automation, AI Agents & Custom Systems | Aphelion",
        description:
          "AI agents that answer and book, online booking, CRM and custom systems for businesses in Baja California. Try the live demo and see published starting prices.",
        ogTitle: "Automation, AI agents and custom systems",
        ogDescription:
          "So your business answers, books and follows up even when you're not there. Live AI demo and published starting prices.",
      },
      es: {
        title: "Automatización, Agentes de IA y Sistemas a Medida | Aphelion",
        description:
          "Agentes de IA que responden y agendan, agenda en línea, CRM y sistemas a medida para negocios en Baja California. Prueba el demo en vivo y consulta los precios de entrada.",
        ogTitle: "Automatización, agentes de IA y sistemas a medida",
        ogDescription:
          "Que tu negocio responda, agende y dé seguimiento aunque no estés. Demo de IA en vivo y precios de entrada publicados.",
      },
      jsonLd: [
        {
          "@type": "Service",
          serviceType: "Business automation, AI agents and custom software",
          provider: { "@type": "Organization", name: "Aphelion", url: "https://aphelion.mx" },
          areaServed: ["MX", "US"],
          name: "Automation & Systems",
        },
        {
          "@type": "FAQPage",
          mainEntity: (loaderData?.lang === "en" ? FAQ_EN : FAQ_ES).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }),
  component: AutomatizacionPage,
});

/*
 * One page for everything that answers, books and organises: the AI agent,
 * the automated website tier and the custom systems (Sistema Comercial and
 * SaaS), which used to sit at the end of the websites ladder.
 */
function AutomatizacionPage() {
  const t = useT();
  const { lang } = useLang();

  const PROBLEMS = [
    {
      problem: t(
        "Messages come in at night and nobody answers.",
        "Los mensajes llegan de noche y nadie contesta.",
      ),
      solution: t(
        "An AI agent on your site that answers, qualifies and books 24 hours a day, and hands over to a person when it should.",
        "Un agente de IA en tu sitio que responde, califica y agenda las 24 horas, y pasa a una persona cuando hace falta.",
      ),
    },
    {
      problem: t(
        "My calendar lives in WhatsApp and appointments overlap.",
        "Mi agenda vive en WhatsApp y se me cruzan las citas.",
      ),
      solution: t(
        "Online booking with reminders by email, SMS or WhatsApp, so fewer clients forget to show up.",
        "Agenda en línea con recordatorios por correo, SMS o WhatsApp, para que menos clientes falten.",
      ),
    },
    {
      problem: t(
        "My operation lives in spreadsheets and in someone's head.",
        "Mi operación vive en Excel y en la cabeza de alguien.",
      ),
      solution: t(
        "A panel with your clients, documents and processes, with role-based access for your team.",
        "Un panel con tus clientes, documentos y procesos, con acceso por roles para tu equipo.",
      ),
    },
  ];

  return (
    <main className="relative min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <ScrollDrivenBanner variant="whatsapp" ariaLabel={t("Automation", "Automatización")}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            {t("Automation & systems", "Automatización y sistemas")}
          </p>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
            {t(
              "So your business answers, books and follows up even when you're not there.",
              "Que tu negocio responda, agende y dé seguimiento aunque no estés.",
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t(
              "AI agents, booking, CRM and custom systems, connected to your website and WhatsApp. Systems from $59,500 MXN; the AI agent is quoted by message volume.",
              "Agentes de IA, agenda, CRM y sistemas a medida, conectados a tu página y a WhatsApp. Sistemas desde $59,500 MXN; el agente IA se cotiza según el volumen de mensajes.",
            )}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contacto"
              search={{ servicio: "automatizacion" }}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              {t("Tell us about your project", "Cuéntanos tu proyecto")}
            </Link>
            <GradientBorderFrame>
              <Link
                to="/servicios/agente-ia"
                hash="demo"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium transition hover:bg-neutral-900"
              >
                <span className={AI_GRADIENT_TEXT}>
                  {t("Try the AI agent", "Prueba el agente IA")}
                </span>
              </Link>
            </GradientBorderFrame>
          </div>
        </div>
      </ScrollDrivenBanner>

      <FeaturedWork
        area="automatizacion"
        bordered={false}
        eyebrow={t("Case", "Caso")}
        title={t(
          "A system already running a real business.",
          "Un sistema que ya opera un negocio real.",
        )}
      />

      <ProblemGrid
        title={t(
          "What stops slipping through the cracks.",
          "Lo que deja de perderse en el camino.",
        )}
        items={PROBLEMS}
      />

      <AgentIAPromo />

      <WebsitesSection
        levelIds={[4, 5, 6]}
        featuredId={4}
        contactService="automatizacion"
        eyebrow={t("Systems", "Sistemas")}
        title={t("Booking, CRM and custom systems.", "Agenda, CRM y sistemas a medida.")}
        subtitle={t(
          "One-time price plus upkeep. Larger systems are quoted by users and integrations. Open a tier to see everything it includes.",
          "Pago inicial más mantenimiento. Los sistemas grandes se cotizan según usuarios e integraciones. Abre un nivel para ver todo lo que incluye.",
        )}
        collapseCompare
      />

      <HowWeWork />
      <SimpleFAQ
        items={pick(lang, FAQ_EN, FAQ_ES)}
        title={t("Before you decide.", "Antes de decidir.")}
      />
      <BlogTeaserSection categories={["Automatización", "IA y Tecnología"]} lang={lang} />
      <ContactCTA service="automatizacion" />
    </main>
  );
}
