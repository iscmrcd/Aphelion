import { ArrowDown, Building2, Search, Users } from "lucide-react";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { clinicalPalette, rampButton, rampRule } from "@/lib/clinical-theme";

/**
 * The same argument as the two-auction section, told as what happens to one
 * patient, with no marketing vocabulary in it.
 *
 * That section stays: it is the explanation for a reader who wants the
 * mechanics. This one comes first, because the audience is a doctor who does
 * not have to know what a domain or an auction is to see the problem.
 */
export function PatientJourney() {
  const t = useT();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);

  const steps = [
    {
      icon: <Search className="h-4 w-4" />,
      title: "Your patient looks for a doctor on Google",
      titleEs: "Tu paciente busca un médico en Google",
      body: "They type something like “dentist near me” or “orthodontist in Tijuana”. Nobody types your name, because they do not know it yet.",
      bodyEs:
        "Escribe algo como “dentista cerca de mí” u “ortodoncista en Tijuana”. Nadie escribe tu nombre, porque todavía no te conoce.",
    },
    {
      icon: <Building2 className="h-4 w-4" />,
      title: "Google shows doctors with their own page, and shows Doctoralia",
      titleEs: "Google le muestra médicos con página propia, y le muestra Doctoralia",
      body: "If you have your own page, you can be one of those results. If you only have a profile, the result that appears is Doctoralia's, not yours.",
      bodyEs:
        "Si tienes tu propia página, puedes ser uno de esos resultados. Si solo tienes perfil, el resultado que aparece es el de Doctoralia, no el tuyo.",
      highlight: true,
    },
    {
      icon: <Users className="h-4 w-4" />,
      title: "Your patient clicks Doctoralia and lands on a list",
      titleEs: "Tu paciente entra a Doctoralia y cae en una lista",
      body: "They did not land on you. They landed on a page showing you and every colleague in your specialty in your city, side by side, with stars and prices.",
      bodyEs:
        "No cayó contigo. Cayó en una página que los muestra a ti y a todos tus colegas de la especialidad en tu ciudad, uno junto al otro, con estrellas y precios.",
    },
    {
      icon: <Users className="h-4 w-4" />,
      title: "And there you compete all over again",
      titleEs: "Y ahí vuelves a competir",
      body: "You already lost the first round on Google. Now you are in the second one, inside a list you do not control, where profiles that pay appear above profiles that do not. Doctoralia says so on its own site.",
      bodyEs:
        "La primera ronda ya la perdiste en Google. Ahora estás en la segunda, dentro de una lista que no controlas, donde los perfiles que pagan aparecen arriba de los que no. Doctoralia lo dice en su propio sitio.",
      highlight: true,
    },
  ];

  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <span
          aria-hidden
          className="mb-5 block h-[3px] w-16 rounded-full"
          style={{ backgroundImage: rampRule(C) }}
        />
        <h2
          className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
          style={{ color: C.deep }}
        >
          {t(
            "What actually happens when someone looks for you",
            "Qué pasa realmente cuando alguien te busca",
          )}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {t(
            "Four steps, no marketing words. Follow one patient.",
            "Cuatro pasos, sin palabras de marketing. Sigue a un paciente.",
          )}
        </p>

        <ol className="mt-9 space-y-0">
          {steps.map((s, i) => (
            <li key={s.title}>
              <div
                className="rounded-2xl border p-5 sm:p-6"
                style={{
                  borderColor: s.highlight ? C.mid : `${C.soft}59`,
                  backgroundColor: s.highlight ? `${C.soft}1f` : C.card,
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium"
                    style={{ backgroundImage: rampButton(C), color: C.onDeep }}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p
                      className="flex items-center gap-2 text-base font-medium"
                      style={{ color: C.deep }}
                    >
                      <span style={{ color: C.mid }}>{s.icon}</span>
                      {t(s.title, s.titleEs)}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {t(s.body, s.bodyEs)}
                    </p>
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-2" aria-hidden>
                  <ArrowDown className="h-4 w-4" style={{ color: C.soft }} />
                </div>
              )}
            </li>
          ))}
        </ol>

        <p
          className="mt-8 rounded-2xl border p-5 text-base leading-relaxed"
          style={{ borderColor: C.mid, backgroundColor: `${C.soft}1f`, color: C.deep }}
        >
          {t(
            "With your own page, that patient can land on you: your treatments, your credentials, your booking. Nobody else on the screen.",
            "Con tu propia página, ese paciente puede caer contigo: tus tratamientos, tus credenciales, tu agenda. Nadie más en la pantalla.",
          )}
        </p>
      </div>
    </section>
  );
}
