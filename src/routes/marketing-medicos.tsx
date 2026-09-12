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
          "Websites for practices, connected to online booking, WhatsApp and automatic reminders. Patients find you, get to know you and book. Tijuana and Baja California.",
      },
      es: {
        title: "Marketing para Médicos y Clínicas | Aphelion",
        description:
          "Páginas web para consultorios, conectadas a agenda en línea, WhatsApp y recordatorios automáticos. Que te encuentren, te conozcan y agenden. Tijuana y Baja California.",
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

      <ReceptionSection />

      {/* DEMO */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2
            className="mb-3 text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
            style={{ color: C.deep }}
          >
            {t(
              "Every appointment, confirmed and remembered without anyone doing it by hand",
              "Cada cita, confirmada y recordada sin que nadie lo haga a mano",
            )}
          </h2>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t(
              "On a directory, the booking is theirs and you get a notification. On your own site it lands in your panel, the patient gets a confirmation and the reminder is scheduled on its own.",
              "En un directorio, la cita es de ellos y a ti te llega un aviso. En tu propia página entra a tu panel, el paciente recibe confirmación y el recordatorio queda programado solo.",
            )}
          </p>
          <AppointmentPanelDemo />
        </div>
      </section>

      <PatientJourney />
      <SelfCheck />

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
      "Website",
      "Página web",
      "Your treatments, credentials, location and contact, on an address of your own.",
      "Tus tratamientos, credenciales, ubicación y contacto, en una dirección tuya.",
    ],
    [
      "Website with booking",
      "Página con agenda",
      "Adds a page per treatment, local SEO, online booking and measurement of what arrives.",
      "Agrega una página por tratamiento, SEO local, agenda en línea y medición de lo que llega.",
    ],
    [
      "Website with automation",
      "Página con automatización",
      "Adds the assistant, reminders, your appointment panel, payments and connected campaigns.",
      "Agrega el asistente, recordatorios, tu panel de citas, pagos y campañas conectadas.",
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
            "Pick what your practice actually needs",
            "Elige lo que necesita tu consultorio",
          )}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {t(
            "Three levels. You can start at one and add the next later.",
            "Tres niveles. Puedes empezar en uno y agregar el siguiente después.",
          )}
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
