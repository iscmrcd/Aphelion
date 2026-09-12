import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Clock, CreditCard, MessageCircle } from "lucide-react";
import { AgentDemo } from "@/components/servicios/AgentDemo";
import { AiGradientDefs } from "@/components/servicios/AiGradientDefs";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { clinicalPalette, rampProgress } from "@/lib/clinical-theme";

/**
 * The half of the flow the page was missing.
 *
 * The appointment panel demo below starts at "the patient books from your
 * site" and never shows how they got there. This is that step: the
 * conversation that produces the booking. Put together they read as one story
 * rather than two separate attractions.
 *
 * The demo runs with the health agent preselected and the industry picker
 * hidden, so a doctor talks to a dental clinic's receptionist instead of
 * browsing a product tour. The agent's data is fictional and it says so.
 */
export function ReceptionSection() {
  const t = useT();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);

  const does: [React.ReactNode, string, string][] = [
    [
      <Clock key="c" className="h-4 w-4" />,
      "Answers at 11pm and on Sunday",
      "Contesta a las 11 de la noche y en domingo",
    ],
    [
      <MessageCircle key="m" className="h-4 w-4" />,
      "Prices, hours, address, what to bring",
      "Precios, horarios, dirección, qué llevar",
    ],
    [
      <CalendarCheck key="k" className="h-4 w-4" />,
      "Takes the booking and confirms it",
      "Toma la cita y la confirma",
    ],
    [
      <CreditCard key="p" className="h-4 w-4" />,
      "Can collect a deposit before the visit",
      "Puede cobrar un anticipo antes de la visita",
    ],
  ];

  return (
    <section className="px-5 py-16 sm:py-20">
      <AiGradientDefs />
      <div className="mx-auto max-w-3xl">
        <span
          aria-hidden
          className="mb-5 block h-[3px] w-16 rounded-full"
          style={{ backgroundImage: rampProgress(C) }}
        />
        <h2
          className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
          style={{ color: C.deep }}
        >
          {t("And who answers at eleven at night?", "¿Y quién contesta a las once de la noche?")}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {t(
            "An assistant answers questions and takes appointment requests outside clinic hours too. A patient comparing three practices tends to book with whoever answered first.",
            "Un asistente responde dudas y recibe solicitudes de cita también fuera del horario. El paciente que compara tres clínicas suele agendar con quien le contestó primero.",
          )}
        </p>

        <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
          {does.map(([icon, en, es]) => (
            <li
              key={en}
              className="flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm"
              style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
            >
              <span className="mt-0.5 shrink-0" style={{ color: C.mid }}>
                {icon}
              </span>
              <span className="text-neutral-700 dark:text-neutral-200">{t(en, es)}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 mb-4 text-sm" style={{ color: C.mid }}>
          {t(
            "Try the assistant of a sample dental clinic. The data is fictional.",
            "Prueba el asistente de una clínica dental de ejemplo. Los datos son ficticios.",
          )}
        </p>

        <AgentDemo initialAgent="health" hideSelector />

        <div
          className="mt-7 rounded-2xl border p-5"
          style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
        >
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t(
              "An automated assistant handles hours, prices, requirements and booking. It should never interpret a symptom or suggest a treatment, and anything that sounds urgent goes to a person immediately.",
              "Un asistente automatizado atiende horarios, precios, requisitos y agendado. Nunca debe interpretar un síntoma ni sugerir un tratamiento, y todo lo que suene urgente pasa a una persona de inmediato.",
            )}
          </p>
          <Link
            to="/servicios/agente-ia"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-neutral-300 underline-offset-4 transition hover:decoration-current"
            style={{ color: C.mid }}
          >
            {t("How the agent is built", "Cómo se construye el agente")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
