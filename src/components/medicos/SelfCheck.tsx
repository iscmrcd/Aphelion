import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Search, Smartphone } from "lucide-react";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { clinicalPalette, rampButton } from "@/lib/clinical-theme";

/**
 * Replaces the two-auction section, which the four-step journey already covers.
 *
 * This asks the doctor to verify the argument on their own phone instead of
 * taking the page's word for it. It is the strongest thing a comparative page
 * can do: everything above is a claim, and this makes it something they saw
 * themselves thirty seconds ago.
 *
 * Each check states what they will probably see and what each outcome means,
 * including the outcomes that are good news for them. A self-check rigged so
 * every result is a problem stops being a check.
 */
type Check = {
  icon: React.ReactNode;
  step: string;
  stepEs: string;
  how: string;
  howEs: string;
  outcomes: { label: string; labelEs: string; means: string; meansEs: string; good?: boolean }[];
};

const CHECKS: Check[] = [
  {
    icon: <Search className="h-4 w-4" />,
    step: "Search what a patient would search",
    stepEs: "Busca lo que buscaría un paciente",
    how: "Open Google on your phone and type your specialty + city. Not your name. A stranger cannot type your name.",
    howEs:
      "Abre Google en tu teléfono y escribe tu especialidad + ciudad. No tu nombre. Alguien que no te conoce no puede escribir tu nombre.",
    outcomes: [
      {
        label: "You do not appear on the first screen",
        labelEs: "No apareces en la primera pantalla",
        means: "This is the usual result, and it is what the rest of this page is about.",
        meansEs: "Es el resultado habitual, y es de lo que trata el resto de esta página.",
      },
      {
        label: "A directory appears and you are inside it",
        labelEs: "Aparece un directorio y tú estás adentro",
        means: "You are visible, and you are visible next to your competitors.",
        meansEs: "Eres visible, y eres visible junto a tus competidores.",
      },
      {
        label: "Your own page appears",
        labelEs: "Aparece tu propia página",
        means: "Good. Check whether it appears for your treatments too, not only for your name.",
        meansEs: "Bien. Revisa si también aparece para tus tratamientos, no solo para tu nombre.",
        good: true,
      },
    ],
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    step: "Look at the map block, above the normal results",
    stepEs: "Mira el bloque de mapa, arriba de los resultados normales",
    how: "The map block is where most local searches end. It is fed by Google Business Profiles.",
    howEs:
      "El bloque del mapa es donde termina la mayoría de las búsquedas locales. Se alimenta del Perfil de Empresa de Google.",
    outcomes: [
      {
        label: "You are not in it",
        labelEs: "No estás ahí",
        means:
          "This is the cheapest thing on the whole list to fix, and it is free. It is also the one we do not charge for.",
        meansEs:
          "Es lo más barato de arreglar de toda la lista, y es gratis. Es también lo que no te cobramos.",
      },
      {
        label: "You are in it with no photos or old hours",
        labelEs: "Estás con pocas fotos u horarios viejos",
        means: "Half done. A neglected profile ranks below a maintained one in the same block.",
        meansEs:
          "A medias. Un perfil abandonado aparece debajo de uno mantenido en el mismo bloque.",
      },
      {
        label: "You are in it, complete, with recent reviews",
        labelEs: "Estás completo y con reseñas recientes",
        means: "You already have the highest-return asset. The rest is building on top of it.",
        meansEs: "Ya tienes el activo de mayor retorno. Lo demás es construir encima.",
        good: true,
      },
    ],
  },
  {
    icon: <Smartphone className="h-4 w-4" />,
    step: "Try to book with yourself, as a stranger would",
    stepEs: "Intenta agendar contigo mismo, como lo haría un desconocido",
    how: "From whatever came up, try to book without using anything you know as the owner. Time it.",
    howEs:
      "Desde lo que salga, intenta agendar sin usar lo que sabes como dueño. Tómale el tiempo.",
    outcomes: [
      {
        label: "There is no way to book, only a phone number",
        labelEs: "No hay forma de agendar, solo un teléfono",
        means:
          "Then everything depends on somebody answering. Count your missed calls this week before deciding that is fine.",
        meansEs:
          "Entonces todo depende de que alguien conteste. Cuenta tus llamadas perdidas de esta semana antes de decidir que está bien.",
      },
      {
        label: "You can write, but nobody replies for hours",
        labelEs: "Puedes escribir, pero nadie contesta en horas",
        means:
          "A patient comparing three clinics books with whoever answered first, not with whoever is best.",
        meansEs:
          "Un paciente que compara tres clínicas agenda con quien contestó primero, no con quien es mejor.",
      },
      {
        label: "You booked, and it was confirmed",
        labelEs: "Agendaste, y te llegó confirmación",
        means: "Then your problem is not conversion. It is how many people get this far.",
        meansEs: "Entonces tu problema no es la conversión. Es cuánta gente llega hasta aquí.",
        good: true,
      },
    ],
  },
];

export function SelfCheck() {
  const t = useT();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);

  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-3 text-center sm:text-left">
          <h2
            className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
            style={{ color: C.deep }}
          >
            {t("Try it on your phone", "Haz la prueba en tu teléfono")}
          </h2>
          <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t(
              "Search your specialty + city like a new patient would. Three quick, real checks.",
              "Busca tu especialidad + ciudad como lo haría un paciente nuevo. Tres comprobaciones rápidas y reales.",
            )}
          </p>
        </div>

        <div className="relative mt-9 space-y-5">
          {/* Vertical connector line behind the numbered circles */}
          <span
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-[19px] w-0.5 sm:left-[23px]"
            style={{ backgroundColor: `${C.soft}66` }}
          />

          {CHECKS.map((c, i) => (
            <div key={c.step} className="relative flex items-start gap-4">
              <span
                className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-4 sm:h-12 sm:w-12"
                style={{
                  backgroundImage: rampButton(C),
                  color: C.onDeep,
                  // ring colour matches the section backdrop so the line
                  // appears to pass behind the circles
                  ["--tw-ring-color" as string]: theme === "dark" ? "#0E1A1F" : "#F2F8FB",
                }}
              >
                {i + 1}
              </span>
              <div
                className="min-w-0 flex-1 rounded-2xl border p-4 shadow-sm sm:p-6"
                style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
              >
                <p
                  className="flex items-start gap-2 text-[15px] leading-snug font-semibold text-balance sm:text-base"
                  style={{ color: C.deep }}
                >
                  <span className="mt-0.5 shrink-0" style={{ color: C.mid }}>
                    {c.icon}
                  </span>
                  {t(c.step, c.stepEs)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {t(c.how, c.howEs)}
                </p>

                {i === 0 && <PatientSearchForm C={C} />}

                <p
                  className="mt-4 text-xs font-medium tracking-[0.1em] uppercase"
                  style={{ color: C.mid }}
                >
                  {t("What you might see", "Qué puedes encontrar")}
                </p>
                <ul className="mt-2.5 space-y-2.5">
                  {c.outcomes.map((o) => (
                    <li
                      key={o.label}
                      className="rounded-xl px-3 py-2.5 sm:px-3.5 sm:py-3"
                      style={{
                        backgroundColor: o.good ? `${C.soft}2e` : `${C.soft}14`,
                        border: o.good ? `1px solid ${C.mid}` : "1px solid transparent",
                      }}
                    >
                      <p className="text-sm font-medium" style={{ color: C.deep }}>
                        {t(o.label, o.labelEs)}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {t(o.means, o.meansEs)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-8 rounded-2xl border p-5 sm:p-6"
          style={{ borderColor: C.mid, backgroundColor: `${C.soft}1f` }}
        >
          <p className="text-base leading-relaxed" style={{ color: C.deep }}>
            {t(
              "If all three came out well, you do not need us for this and we will say so on the call. If any of them stung, the diagnostic turns what you just saw into a list in order of what it is costing you.",
              "Si las tres salieron bien, no nos necesitas para esto y te lo vamos a decir en la llamada. Si alguna incomodó, el diagnóstico convierte lo que acabas de ver en una lista ordenada por lo que te está costando.",
            )}
          </p>
          <Link
            to="/recursos/diagnostico/$industria"
            params={{ industria: "clinicas" }}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium transition hover:opacity-90 sm:w-auto"
            style={{ backgroundImage: rampButton(C), color: C.onDeep }}
          >
            {t("Turn this into a plan, 2 min", "Convertirlo en un plan, 2 min")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * Real search bar inside step 1: typing a specialty + city and submitting
 * opens that Google search in a new tab, so the check starts from the page
 * itself instead of asking the doctor to imagine it.
 */
function PatientSearchForm({ C }: { C: ReturnType<typeof clinicalPalette> }) {
  const t = useT();
  const { theme } = useTheme();
  return (
    <form
      action="https://www.google.com/search"
      method="GET"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative mt-3"
    >
      <input
        type="text"
        name="q"
        placeholder={t("dentist in tijuana", "dentista en tijuana")}
        className="w-full rounded-xl border py-3 pr-11 pl-3.5 text-sm shadow-inner transition focus:outline-none"
        style={{
          borderColor: `${C.soft}80`,
          backgroundColor: theme === "dark" ? "rgba(255,255,255,0.04)" : "#F4F9FB",
          color: C.deep,
        }}
      />
      <button
        type="submit"
        aria-label={t("Search on Google", "Buscar en Google")}
        className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-lg p-2 transition"
        style={{ color: C.mid }}
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
}

