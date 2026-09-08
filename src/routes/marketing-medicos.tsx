import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Minus, Plus, Stethoscope } from "lucide-react";
import { AppointmentPanelDemo } from "@/components/medicos/AppointmentPanelDemo";
import { PatientJourney } from "@/components/medicos/PatientJourney";
import { RealMarketingSection } from "@/components/medicos/RealMarketingSection";
import { WhyOwnSiteSection } from "@/components/medicos/WhyOwnSiteSection";
import { BlogTeaserSection } from "@/components/blog/BlogTeaserSection";
import { CTAFooter } from "@/components/servicios/CTAFooter";
import { useT, useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { clinicalPalette, rampButton, rampRule } from "@/lib/clinical-theme";
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
      {/*
        HERO. The coat photograph is here for a structural reason, not only a
        decorative one: the frosted cards elsewhere on this page float over a
        flat gradient, so the blur has nothing to blur and the glass effect
        barely reads. Over a photograph it actually works.

        Text sits on a dark scrim rather than directly on the image, because
        white copy over a photo is the classic glassmorphism accessibility
        failure. The scrim is opaque enough to hold contrast wherever the image
        happens to be light.
      */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "#080D10" }} />
        <picture>
          <source media="(max-width: 767px)" srcSet="/img/bata-aphelion-sm.webp" />
          <img
            src="/img/bata-aphelion.webp"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="pointer-events-none absolute top-0 right-0 h-full w-auto object-cover object-right opacity-60 md:opacity-100"
          />
        </picture>
        {/*
          Two scrims, one per breakpoint, because the text block does not sit in
          the same place at every width. Below md the copy spans nearly the full
          viewport, so a directional gradient would leave the last lines over the
          bright part of the coat; above md the copy ends around 57% and the
          gradient can open up and let the photograph show.

          Both were checked against the brightest pixel in the image: white text
          needs the scrim at 0.60 or more to clear 4.5:1, and white/85 needs 0.65.
          Mobile sits at 0.78, desktop is still 0.83 where the text ends.
        */}
        <div
          aria-hidden
          className="absolute inset-0 md:hidden"
          style={{ backgroundColor: "rgba(8,13,16,0.78)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(100deg, #080D10 0%, #080D10 46%, rgba(8,13,16,0.83) 62%, rgba(8,13,16,0.30) 80%, rgba(8,13,16,0) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-[0.08em] text-white uppercase backdrop-blur-md"
              style={{
                borderColor: "rgba(255,255,255,0.22)",
                backgroundColor: "rgba(255,255,255,0.10)",
              }}
            >
              <Stethoscope className="h-3.5 w-3.5" />
              {t("Doctors and clinics", "Médicos y clínicas")}
            </span>
            <h1 className="mt-6 text-4xl font-medium tracking-[-0.03em] text-white sm:text-5xl">
              {t(
                "Doctoralia can help patients find you. It should not be where you build your practice.",
                "Doctoralia puede ayudarte a que te encuentren. No debería ser donde construyes tu consultorio.",
              )}
            </h1>
            <div
              className="mt-7 rounded-2xl border p-5 backdrop-blur-xl sm:p-6"
              style={{
                borderColor: "rgba(255,255,255,0.16)",
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-base leading-relaxed text-white/85 sm:text-lg">
                {t(
                  "We register our own clients on Doctoralia, and we would tell you to take the free profile. The problem is not being there. The problem is that being there is all you have.",
                  "Nosotros damos de alta a nuestros clientes en Doctoralia, y te diríamos que tomes el perfil gratuito. El problema no es estar ahí. El problema es que estar ahí sea todo lo que tienes.",
                )}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/recursos/diagnostico/$industria"
                params={{ industria: "clinicas" }}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
                style={{ backgroundImage: "linear-gradient(120deg, #2A7488 0%, #12414F 100%)" }}
              >
                {t("Diagnose your practice, 2 min", "Diagnostica tu consultorio, 2 min")}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://wa.me/526461293352?text=Hola%20Aphelion%2C%20soy%20de%20una%20cl%C3%ADnica."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:border-white"
                style={{
                  borderColor: "rgba(255,255,255,0.28)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <PatientJourney />
      <TwoAuctions />
      <Contrast />

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

function TwoAuctions() {
  const t = useT();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2
          className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
          style={{ color: C.deep }}
        >
          {t(
            "Two auctions, and you own neither court",
            "Dos subastas, y no eres dueño de ninguna cancha",
          )}
        </h2>
        <div className="mt-8 space-y-4">
          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
          >
            <p className="text-xs font-medium tracking-[0.1em] uppercase" style={{ color: C.mid }}>
              {t("Auction 1 · on Google", "Subasta 1 · en Google")}
            </p>
            <p className="mt-2.5 text-base leading-relaxed text-neutral-700 dark:text-neutral-200">
              {t(
                "The directory's website competes against yours. It usually wins, because a national directory carries weight with Google that a single practice cannot. You are not competing there. You are watching.",
                "La página del directorio compite contra la tuya. Normalmente gana, porque un directorio nacional pesa ante Google lo que un consultorio solo no pesa. Ahí no estás compitiendo. Estás viendo.",
              )}
            </p>
          </div>
          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: C.mid, backgroundColor: `${C.soft}1f` }}
          >
            <p className="text-xs font-medium tracking-[0.1em] uppercase" style={{ color: C.mid }}>
              {t("Auction 2 · inside the directory", "Subasta 2 · dentro del directorio")}
            </p>
            <p className="mt-2.5 text-base leading-relaxed text-neutral-700 dark:text-neutral-200">
              {t(
                "The patient is in. Now you compete against every other doctor in your specialty in your city. And here is the part worth reading slowly, because Doctoralia publishes it on its own site: paid profiles appear higher in Doctoralia's search results than free ones.",
                "El paciente entró. Ahora compites contra todos los demás médicos de tu especialidad en tu ciudad. Y aquí está la parte que conviene leer despacio, porque Doctoralia lo publica en su propio sitio: los perfiles de pago aparecen más arriba en los resultados de Doctoralia que los gratuitos.",
              )}
            </p>
            <p className="mt-4 text-base leading-relaxed font-medium" style={{ color: C.deep }}>
              {t(
                "So you pay to compete better against your colleagues, inside a platform that is not yours, in an auction whose rules can change without you.",
                "O sea: pagas para competir mejor contra tus colegas, dentro de una plataforma que no es tuya, en una subasta cuyas reglas pueden cambiar sin ti.",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contrast() {
  const t = useT();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);
  const others = [
    "Dr. García ★ 4.9",
    "Dr. López ★ 5.0",
    "Clínica Norte ★ 4.8",
    "Dr. Ramírez ★ 4.9",
  ];
  const yours = [
    ["Your specialists", "Tus especialistas"],
    ["Your treatments, one page each", "Tus tratamientos, una página cada uno"],
    ["Your cases and credentials", "Tus casos y credenciales"],
    ["Your booking and your data", "Tu agenda y tus datos"],
  ];
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
        <div
          className="rounded-2xl border p-6"
          style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
        >
          <p className="text-sm font-medium" style={{ color: C.deep }}>
            {t(
              "On a directory, they find you and ten more",
              "En un directorio, te encuentran a ti y a diez más",
            )}
          </p>
          <div
            className="mt-4 rounded-xl p-3"
            style={{ backgroundColor: `${C.soft}26`, border: `1px solid ${C.mid}` }}
          >
            <p className="text-sm font-medium" style={{ color: C.deep }}>
              {t("Your profile ★ 4.9", "Tu perfil ★ 4.9")}
            </p>
          </div>
          <p className="mt-3 text-[11px] tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
            {t("You may also like", "También te puede interesar")}
          </p>
          <ul className="mt-2 space-y-1.5">
            {others.map((o) => (
              <li
                key={o}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-600 dark:text-neutral-300"
                style={{ backgroundColor: `${C.soft}14` }}
              >
                <Minus className="h-3 w-3 shrink-0" style={{ color: C.soft }} />
                {o}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="rounded-2xl border p-6"
          style={{ borderColor: C.mid, backgroundColor: C.card }}
        >
          <p className="text-sm font-medium" style={{ color: C.deep }}>
            {t("On your own page, they find you", "En tu propia página, te encuentran a ti")}
          </p>
          <ul className="mt-4 space-y-2.5">
            {yours.map(([en, es]) => (
              <li
                key={en}
                className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-200"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: C.mid }} />
                {t(en, es)}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            {t("No competitors on the same screen.", "Sin competencia en la misma pantalla.")}
          </p>
        </div>
      </div>
    </section>
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
