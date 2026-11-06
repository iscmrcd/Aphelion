import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ScrollDrivenBanner } from "@/components/servicios/ScrollDrivenBanner";
import {
  ServiceHeroContent,
  ServiceBenefits,
  ServiceTimeline,
} from "@/components/servicios/ServiceExperience";
import { WebsitesSection } from "@/components/servicios/WebsitesSection";
import { PortfolioSection } from "@/components/servicios/PortfolioSection";
import { FAQ } from "@/components/servicios/FAQ";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { Reveal } from "@/components/servicios/Motion";
import { useT } from "@/lib/i18n";
import { buildHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/servicios/automatizacion")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) =>
    buildHead({
      path: "/servicios/automatizacion",
      lang: loaderData?.lang ?? "es",
      en: {
        title: "Business Automation, AI & Custom Systems | Aphelion",
        description:
          "Connect enquiries, scheduling and follow-up. AI agents, client portals and custom business platforms for companies in Baja California.",
      },
      es: {
        title: "Automatización, IA y Sistemas a Medida | Aphelion",
        description:
          "Conecta consultas, agenda y seguimiento. Agentes IA, portales de clientes y plataformas a medida para empresas en Baja California.",
      },
      jsonLd: {
        "@type": "Service",
        name: "Business automation and custom systems",
        provider: { "@type": "Organization", name: "Aphelion", url: SITE_URL },
        areaServed: ["MX", "US"],
      },
    }),
  component: AutomationPage,
});

function AutomationPage() {
  const t = useT();
  return (
    <main className="bg-neutral-50 text-neutral-950">
      <ScrollDrivenBanner
        variant="whatsapp"
        ariaLabel={t("Business automation", "Automatización para negocios")}
      >
        <ServiceHeroContent
          eyebrow={t("Automation & systems", "Automatización y sistemas")}
          title={t(
            "Enquiries answered.\nAppointments and follow-up in order.",
            "Consultas atendidas.\nCitas y seguimiento en orden.",
          )}
          description={t(
            "Organise what you currently handle across WhatsApp, phone calls and spreadsheets. We connect customer enquiries, scheduling and records around your operation.",
            "Organiza lo que hoy resuelves entre WhatsApp, llamadas y hojas de cálculo. Conectamos atención, agenda y datos según tu operación.",
          )}
        />
      </ScrollDrivenBanner>
      <PortfolioSection
        projectIds={["haima-banco-de-sangre"]}
        title={t("Automation already in operation.", "Automatización en operación.")}
      />
      <ServiceBenefits
        eyebrow={t("What we help solve", "Lo que ayudamos a resolver")}
        title={t("Built around\nthe way you work.", "Diseñado alrededor\nde cómo trabajas.")}
        items={[
          {
            title: t("After-hours enquiries", "Consultas fuera de horario"),
            description: t(
              "An assistant that answers frequent questions, collects information and routes the conversation to your team.",
              "Un asistente que responde preguntas frecuentes, recopila información y pasa la conversación a tu equipo.",
            ),
          },
          {
            title: t("Booking spread across messages", "Citas y seguimiento entre mensajes"),
            description: t(
              "Connect booking, reminders and prospect records so every enquiry has a next step.",
              "Conecta citas, recordatorios y registro de prospectos para que cada consulta tenga un siguiente paso.",
            ),
          },
          {
            title: t(
              "Scattered records and manual processes",
              "Datos repartidos y procesos manuales",
            ),
            description: t(
              "Client portals, team permissions, documents and reporting in a system designed for your business.",
              "Portales de clientes, permisos de equipo, documentos y reportes en un sistema diseñado para tu negocio.",
            ),
          },
        ]}
      />
      <section className="border-t border-neutral-200 px-5 py-12">
        <Reveal className="mx-auto flex max-w-6xl flex-col justify-between gap-6 rounded-3xl border border-neutral-200 bg-white p-7 sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-xl">
            <p className="studio-eyebrow">{t("Try it first", "Pruébalo primero")}</p>
            <h2 className="mt-4 text-2xl font-medium tracking-tight">
              {t("See an AI agent in action.", "Conoce un agente de IA en acción.")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              {t(
                "Three live industry demos. Ask questions and explore a conversation before planning your own implementation.",
                "Tres demos por industria, en vivo. Haz preguntas y explora una conversación antes de planear tu implementación.",
              )}
            </p>
          </div>
          <Link
            to="/servicios/agente-ia"
            hash="demo"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white"
          >
            {t("Try the live demo", "Probar demo en vivo")}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
      <WebsitesSection systems />
      <ServiceTimeline
        steps={[
          {
            title: t("Map the process", "Entender el proceso"),
            description: t(
              "We review the work, tools and information involved. We define the first useful version and its limits.",
              "Revisamos el trabajo, las herramientas y la información involucrada. Definimos una primera versión útil y sus límites.",
            ),
          },
          {
            title: t("Build and test", "Construir y probar"),
            description: t(
              "We agree on integrations, access and test scenarios. An Automated Website is estimated at 5–10 weeks from the agreed start, with content approved and scope confirmed. Commercial systems and SaaS have their own schedule.",
              "Acordamos integraciones, accesos y pruebas. Una Web Automatizada se estima en 5–10 semanas desde el inicio acordado, con contenido aprobado y alcance confirmado. Los sistemas comerciales y SaaS tienen su propio calendario.",
            ),
          },
          {
            title: t("Handover and support", "Entrega y soporte"),
            description: t(
              "You receive the code, domain and access to your accounts. Hosting, third-party charges and support are defined in your proposal.",
              "Recibes el código, el dominio y acceso a tus cuentas. El alojamiento, los cargos de terceros y el soporte se definen en tu propuesta.",
            ),
          },
        ]}
      />
      <FAQ
        items={[
          {
            q: t("Is maintenance required?", "¿El mantenimiento es obligatorio?"),
            a: t(
              "No. Development, optional maintenance and usage charges are identified separately. You can operate the system in your own accounts and pay the providers directly; support without a maintenance plan is quoted separately.",
              "No. El desarrollo, el mantenimiento opcional y los cargos por uso se detallan por separado. Puedes operar el sistema en tus propias cuentas y pagar directo a los proveedores; el soporte sin mantenimiento contratado se cotiza aparte.",
            ),
          },
          {
            q: t("How do you hand over the project?", "¿Cómo entregan el proyecto?"),
            a: t(
              "You control the code repository, domain and service accounts. For a Lovable project, we agree on transfer to your workspace or deployment elsewhere. We review the database, integrations and access as part of the handover; your subscriptions and usage charges are identified in the proposal.",
              "Recibes el repositorio de código, el dominio y el control de tus cuentas. Si se desarrolla en Lovable, acordamos la transferencia a tu espacio de trabajo o el despliegue en otro alojamiento. Revisamos base de datos, integraciones y accesos como parte de la entrega; tus suscripciones y consumos se identifican en la propuesta.",
            ),
          },
          {
            q: t(
              "Can this connect to my current tools?",
              "¿Se conecta con las herramientas que ya uso?",
            ),
            a: t(
              "We review the available integrations before quoting. Compatibility, permissions and any third-party costs are confirmed in the scope.",
              "Revisamos las integraciones disponibles antes de cotizar. La compatibilidad, los permisos y cualquier costo de terceros se confirman en el alcance.",
            ),
          },
          {
            q: t("Do I need to replace my website?", "¿Necesito reemplazar mi sitio?"),
            a: t(
              "It depends on the project. An AI chat widget can be installed on an existing website; a custom operation platform needs its own technical review.",
              "Depende del proyecto. Un chat de IA puede instalarse en un sitio existente; una plataforma de operación requiere su propia revisión técnica.",
            ),
          },
          {
            q: t("How much does an AI agent cost?", "¿Cuánto cuesta un agente de IA?"),
            a: t(
              "We quote it after reviewing message volume, integrations and customisation. Implementation, ongoing support and usage charges are identified separately.",
              "Se cotiza al revisar volumen de mensajes, integraciones y personalización. La implementación, el soporte y los cargos por uso se identifican por separado.",
            ),
          },
        ]}
      />
      <CTAFooter />
    </main>
  );
}
