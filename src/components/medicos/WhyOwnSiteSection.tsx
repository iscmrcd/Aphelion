import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Database,
  FileText,
  Layers,
  TrendingUp,
} from "lucide-react";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { clinicalPalette } from "@/lib/clinical-theme";

/**
 * Reasons to own the site, written as verifiable specifics rather than
 * adjectives. Two of them cite Mexican regulation the clinic is already
 * subject to, which is more persuasive than any benefit statement because the
 * doctor can check it.
 */
type Reason = {
  icon: React.ReactNode;
  title: string;
  titleEs: string;
  body: string;
  bodyEs: string;
  href?: string;
};

const REASONS: Reason[] = [
  {
    icon: <TrendingUp className="h-4 w-4" />,
    title: "It accumulates. A subscription does not.",
    titleEs: "Se acumula. Una suscripción no.",
    body: "A year of paying a directory buys a year of visibility, and it stops the month you stop. A year of publishing on your own page leaves articles, treatment pages and rankings that keep working whether or not you paid this month.",
    bodyEs:
      "Un año pagando un directorio compra un año de visibilidad, y se detiene el mes que dejas de pagar. Un año publicando en tu propia página deja artículos, páginas de tratamiento y posiciones que siguen trabajando hayas pagado este mes o no.",
  },
  {
    icon: <Layers className="h-4 w-4" />,
    title: "A page per treatment, because that is how people search",
    titleEs: "Una página por tratamiento, porque así se busca",
    body: "Patients search by procedure, and each procedure carries different worries: pain, recovery, cost, how many visits. A profile gives you one description for everything you do. One page cannot rank for twenty different questions.",
    bodyEs:
      "Los pacientes buscan por procedimiento, y cada procedimiento carga preocupaciones distintas: dolor, recuperación, costo, cuántas visitas. Un perfil te da una sola descripción para todo lo que haces. Una página no puede posicionar para veinte preguntas distintas.",
    href: "/blog/sitio-web-para-clinicas",
  },
  {
    icon: <BadgeCheck className="h-4 w-4" />,
    title: "Your credential, which the law already requires you to publish",
    titleEs: "Tu credencial, que la ley ya te obliga a publicar",
    body: "Article 19 of Mexico's health advertising regulation requires stating the institution that issued your title and, where applicable, your professional licence number, in whatever advertising medium you use. On your own site you control how prominently that appears. It is an obligation and a conversion element at the same time.",
    bodyEs:
      "El artículo 19 del reglamento mexicano de publicidad sanitaria exige expresar la institución que expidió tu título y, en su caso, tu número de cédula profesional, cualquiera que sea el medio publicitario. En tu propio sitio tú decides qué tan visible aparece. Es obligación y elemento de conversión a la vez.",
    href: "/blog/eeat-contenido-medico",
  },
  {
    icon: <CalendarClock className="h-4 w-4" />,
    title: "Booking that triggers your process, not theirs",
    titleEs: "Agenda que dispara tu proceso, no el de ellos",
    body: "On your own system a booking sets off the chain you decide: confirmation, reminders on the channel the patient actually reads, notice to the practice, calendar sync, follow-up if they cancel. Recovering a booked appointment costs far less than buying a new patient.",
    bodyEs:
      "En tu propio sistema una cita dispara la cadena que tú decides: confirmación, recordatorios por el canal que el paciente sí lee, aviso al consultorio, sincronización de calendario, seguimiento si cancela. Recuperar una cita agendada cuesta mucho menos que comprar un paciente nuevo.",
    href: "/blog/whatsapp-para-clinicas",
  },
  {
    icon: <Database className="h-4 w-4" />,
    title: "Data you can actually use, and are responsible for",
    titleEs: "Datos que sí puedes usar, y de los que eres responsable",
    body: "Knowing that a patient came from Instagram, asked about implants and did not book is what makes the next campaign smarter. It also comes with duties: health data is sensitive personal data in Mexico, and your privacy notice has to reflect the law in force since March 2025, not the old one.",
    bodyEs:
      "Saber que un paciente llegó de Instagram, preguntó por implantes y no agendó es lo que vuelve más inteligente la siguiente campaña. También trae deberes: los datos de salud son datos personales sensibles en México, y tu aviso de privacidad tiene que reflejar la ley vigente desde marzo de 2025, no la anterior.",
  },
  {
    icon: <FileText className="h-4 w-4" />,
    title: "A source about you that machines can read",
    titleEs: "Una fuente sobre ti que las máquinas puedan leer",
    body: "Services, specialists, credentials, locations, frequently asked questions and structured data, all published by you and kept current. We will not promise that an AI assistant will recommend you, because nobody can. What you can do is make sure the official version of your practice exists and is legible.",
    bodyEs:
      "Servicios, especialistas, credenciales, ubicaciones, preguntas frecuentes y datos estructurados, publicados por ti y mantenidos al día. No te vamos a prometer que un asistente de IA te va a recomendar, porque nadie puede. Lo que sí puedes es asegurarte de que la versión oficial de tu consultorio exista y sea legible.",
  },
];

export function WhyOwnSiteSection() {
  const t = useT();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);

  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2
          className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
          style={{ color: C.deep }}
        >
          {t(
            "Six things that only exist if the page is yours",
            "Seis cosas que solo existen si la página es tuya",
          )}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {t(
            "Not because a directory is bad. Because these six things only exist on something you control.",
            "No porque un directorio sea malo. Porque estas seis cosas solo existen sobre algo que tú controlas.",
          )}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border p-6"
              style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
            >
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: `${C.soft}33`, color: C.mid }}
              >
                {r.icon}
              </span>
              <p className="mt-3.5 text-base font-medium" style={{ color: C.deep }}>
                {t(r.title, r.titleEs)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {t(r.body, r.bodyEs)}
              </p>
              {r.href && (
                <Link
                  to={r.href}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-neutral-300 underline-offset-4 transition hover:decoration-current"
                  style={{ color: C.mid }}
                >
                  {t("Read more", "Leer más")}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="mt-7 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t(
            "None of this argues for leaving the directories. Take the free profile, take Google, take Instagram. Use them to send people somewhere that is yours.",
            "Nada de esto argumenta que te salgas de los directorios. Toma el perfil gratuito, toma Google, toma Instagram. Úsalos para mandar gente a un lugar que sea tuyo.",
          )}
        </p>
      </div>
    </section>
  );
}
