import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { AppointmentPanelDemo } from "@/components/medicos/AppointmentPanelDemo";
import { MedicosHero } from "@/components/medicos/MedicosHero";
import { PatientJourney } from "@/components/medicos/PatientJourney";
import { ReceptionSection } from "@/components/medicos/ReceptionSection";
import { SelfCheck } from "@/components/medicos/SelfCheck";
import { RealMarketingSection } from "@/components/medicos/RealMarketingSection";
import { WhyOwnSiteSection } from "@/components/medicos/WhyOwnSiteSection";
import { BlogTeaserSection } from "@/components/blog/BlogTeaserSection";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { useT, useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { clinicalPalette } from "@/lib/clinical-theme";
import { buildHead, SITE_URL, ORGANIZATION_JSONLD, AREAS_SERVED } from "@/lib/seo";
import { MEDICOS_FAQ } from "@/lib/medicos-data";

export const Route = createFileRoute("/marketing-medicos")({
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) => {
    const lang = loaderData?.lang ?? "en";
    return buildHead({
      path: "/marketing-medicos",
      lang,
      en: {
        title: "Marketing for Doctors and Clinics | Aphelion",
        description:
          "Be on Doctoralia. Just do not build your practice inside it. Websites, AI booking, reminders and measurement your clinic owns. Tijuana and Baja California.",
      },
      es: {
        title: "Marketing para Médicos y Clínicas | Aphelion",
        description:
          "Está en Doctoralia. Solo no construyas tu consultorio adentro. Sitio, agenda con IA, recordatorios y medición que son tuyos. Tijuana y Baja California.",
      },
      jsonLd: [
        ORGANIZATION_JSONLD,
        {
          "@type": "Service",
          name:
            lang === "es"
              ? "Marketing para médicos y clínicas"
              : "Marketing for doctors and clinics",
          serviceType: "Medical practice digital marketing",
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name })),
          url: `${SITE_URL}/marketing-medicos`,
        },
        {
          "@type": "FAQPage",
          mainEntity: MEDICOS_FAQ.map((f) => ({
            "@type": "Question",
            name: lang === "es" ? f.qEs : f.q,
            acceptedAnswer: { "@type": "Answer", text: lang === "es" ? f.aEs : f.a },
          })),
        },
      ],
    });
  },
  component: Page,
});

function Page() {
  const t = useT();
  const { lang } = useLang();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);

  return (
    <main style={{ background: C.bg }}>
      <MedicosHero />

      <PatientJourney />
      <SelfCheck />

      <ReceptionSection />

      {/* DEMO */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2
            className="mb-3 text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
            style={{ color: C.deep }}
          >
            {t(
              "What a patient booking on your own site sets off",
              "Lo que dispara una cita agendada en tu propio sitio",
            )}
          </h2>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t(
              "On a directory, the booking is theirs and you get a notification. On your own system, the booking triggers a chain you control end to end.",
              "En un directorio, la cita es de ellos y a ti te llega un aviso. En tu propio sistema, la cita dispara una cadena que controlas de principio a fin.",
            )}
          </p>
          <AppointmentPanelDemo />
        </div>
      </section>

      <RealMarketingSection />
      <WhyOwnSiteSection />
      <Ladder />

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <MedicosFAQ />
        </div>
      </section>

      <BlogTeaserSection
        categories={["Medical Marketing", "Marketing Médico"]}
        count={2}
        lang={lang}
        title="Written for clinics"
        titleEs="Escrito para clínicas"
      />

      <CTAFooter />
    </main>
  );
}

function Ladder() {
  const t = useT();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);
  const levels: [string, string, string, string][] = [
    [
      "Presence",
      "Presencia",
      "Exist online: a site, your information, contact and WhatsApp.",
      "Existir en internet: sitio, tu información, contacto y WhatsApp.",
    ],
    [
      "Acquisition",
      "Captación",
      "The site works: a page per treatment, local SEO, booking, measurement.",
      "El sitio trabaja: una página por tratamiento, SEO local, agenda, medición.",
    ],
    [
      "Ecosystem",
      "Ecosistema",
      "Infrastructure you own: panel, AI, reminders, payments, CRM, campaigns connected.",
      "Infraestructura tuya: panel, IA, recordatorios, pagos, CRM y campañas conectadas.",
    ],
  ];
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2
          className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
          style={{ color: C.deep }}
        >
          {t(
            "The question is not what a website costs",
            "La pregunta no es cuánto cuesta una página",
          )}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {t("It is what you are building.", "Es qué estás construyendo.")}
        </p>
        <div className="mt-8 space-y-3">
          {levels.map(([en, es, den, des], i) => (
            <div
              key={en}
              className="rounded-2xl border p-5"
              style={{
                borderColor: i === 2 ? C.mid : `${C.soft}59`,
                backgroundColor: i === 2 ? `${C.soft}1f` : C.card,
              }}
            >
              <p className="text-base font-medium" style={{ color: C.deep }}>
                {t(en, es)}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {t(den, des)}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {t(
            "Published prices are reference points, not a menu. Every practice asks for something specific, so the real number comes out of a short evaluation.",
            "Los precios publicados son referencias, no un menú. Cada consultorio pide algo específico, así que el número real sale de una evaluación corta.",
          )}
        </p>
        <Link
          to="/precios"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-neutral-300 underline-offset-4 transition hover:decoration-current"
          style={{ color: C.mid }}
        >
          {t("See the reference prices", "Ver los precios de referencia")}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}

function MedicosFAQ() {
  const t = useT();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <h2
        className="mb-8 text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
        style={{ color: C.deep }}
      >
        {t("The questions this raises", "Las dudas que esto levanta")}
      </h2>
      <div className="divide-y" style={{ borderColor: `${C.soft}59` }}>
        {MEDICOS_FAQ.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderTop: i === 0 ? `1px solid ${C.soft}59` : undefined }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span className="text-base font-medium" style={{ color: C.deep }}>
                  {t(f.q, f.qEs)}
                </span>
                <Plus
                  className={`mt-0.5 h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  style={{ color: C.mid }}
                />
              </button>
              {isOpen && (
                <p className="pb-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {t(f.a, f.aEs)}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
