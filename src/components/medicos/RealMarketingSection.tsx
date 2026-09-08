import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, Check, X } from "lucide-react";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { clinicalPalette } from "@/lib/clinical-theme";
import { GoogleBusinessIcon } from "./GoogleBusinessIcon";

/**
 * "Are you actually doing marketing?" section.
 *
 * The claim here is deliberately narrower than the one it is tempting to make.
 * You *can* run ads without a website: Meta lead ads and click-to-WhatsApp
 * work fine, and that is exactly what a doctor will say back if the page
 * overstates. What you cannot do is close the loop, because the tag that
 * measures what happened after the click has to live on a site you control,
 * and a directory profile does not let you add code to it.
 *
 * The Google point is stronger and verifiable from their own policy: the
 * domain of your display URL has to match the domain of your final URL, so a
 * profile on someone else's domain cannot be advertised as your address.
 */
const BRANDS = [
  { slug: "googleads", label: "Google Ads" },
  { slug: "meta", label: "Meta" },
  { slug: "googleanalytics", label: "Google Analytics" },
  { slug: "google-business", label: "Google Business", inline: true },
  { slug: "whatsapp", label: "WhatsApp" },
];

export function RealMarketingSection() {
  const t = useT();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);

  const withSite: [string, string][] = [
    ["Install your own tag and measure conversions", "Instalar tu propio tag y medir conversiones"],
    [
      "Send each ad to the treatment page it promised",
      "Mandar cada anuncio a la página del tratamiento que prometió",
    ],
    [
      "Tell the platform which clicks became patients",
      "Decirle a la plataforma qué clics se volvieron pacientes",
    ],
    ["Show your own web address on the ad", "Mostrar tu propia dirección web en el anuncio"],
    ["Build audiences from your own visitors", "Construir públicos con tus propios visitantes"],
  ];

  const withoutSite: [string, string][] = [
    ["Run lead ads and click-to-WhatsApp", "Correr anuncios de leads y clic a WhatsApp"],
    ["Pay for clicks and reach", "Pagar por clics y alcance"],
    ["See how many people wrote to you", "Ver cuánta gente te escribió"],
  ];

  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2
          className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
          style={{ color: C.deep }}
        >
          {t(
            "Are you doing marketing, or paying for visibility?",
            "¿Estás haciendo marketing, o pagando visibilidad?",
          )}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {t(
            "These platforms are where your patients are. Connecting to them properly needs a place you control, because the code that measures what happens after the click has to live somewhere, and a directory profile is not somewhere you can put code.",
            "En estas plataformas están tus pacientes. Conectarte bien a ellas necesita un lugar que controles, porque el código que mide lo que pasa después del clic tiene que vivir en algún lado, y un perfil de directorio no es un lado donde puedas poner código.",
          )}
        </p>

        {/* logos */}
        <div
          className="mt-8 grid grid-cols-3 items-start gap-x-4 gap-y-6 rounded-2xl border px-4 py-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-9 sm:px-6 sm:py-7"
          style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
        >
          {BRANDS.map((b) => (
            <div key={b.label} className="flex min-w-0 flex-col items-center gap-2">
              {b.inline ? (
                <GoogleBusinessIcon className="h-7 w-7 shrink-0" />
              ) : (
                <img
                  src={`https://cdn.simpleicons.org/${b.slug}`}
                  alt={`${b.label} logo`}
                  loading="lazy"
                  className="h-7 w-7 shrink-0"
                />
              )}
              <span className="text-center text-[11px] leading-tight text-neutral-600 dark:text-neutral-400">
                {b.label}
              </span>
            </div>
          ))}
        </div>

        {/* what you can and cannot do */}
        <div className="mt-4 grid gap-4 sm:mt-6 md:grid-cols-2">
          <div
            className="rounded-2xl border p-5 sm:p-6"
            style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
          >
            <p className="text-sm font-medium" style={{ color: C.deep }}>
              {t("Only profiles: what still works", "Solo perfiles: qué sí funciona")}
            </p>
            <ul className="mt-4 space-y-2.5">
              {withoutSite.map(([en, es]) => (
                <li
                  key={en}
                  className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: C.soft }} />
                  {t(en, es)}
                </li>
              ))}
            </ul>
            <p
              className="mt-4 flex items-start gap-2 text-sm leading-relaxed"
              style={{ color: C.mid }}
            >
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              {t(
                "You can advertise. You just cannot tell which of it worked.",
                "Sí puedes anunciarte. Lo que no puedes es saber qué parte funcionó.",
              )}
            </p>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: C.mid, backgroundColor: `${C.soft}1f` }}
          >
            <p className="text-sm font-medium" style={{ color: C.deep }}>
              {t("With your own site: what opens up", "Con sitio propio: qué se abre")}
            </p>
            <ul className="mt-4 space-y-2.5">
              {withSite.map(([en, es]) => (
                <li
                  key={en}
                  className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-200"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: C.mid }} />
                  {t(en, es)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* the policy detail */}
        <div
          className="mt-4 rounded-2xl border p-6"
          style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
        >
          <p className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            <X className="mt-0.5 h-4 w-4 shrink-0" style={{ color: C.mid }} />
            <span>
              {t(
                "One detail most people never hit until they try. In a Google ad, the web address the reader sees has to be the same one the ad leads to. A directory profile lives at their address, not yours, so you cannot put it up as your practice's address in the ad.",
                "Un detalle con el que casi nadie se topa hasta que lo intenta. En un anuncio de Google, la dirección web que se ve tiene que ser la misma a la que el anuncio lleva. Un perfil de directorio vive en la dirección de ellos, no en la tuya, así que no puedes ponerlo como la dirección de tu consultorio en el anuncio.",
              )}
            </span>
          </p>
        </div>

        <Link
          to="/google-ads"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-neutral-300 underline-offset-4 transition hover:decoration-current"
          style={{ color: C.mid }}
        >
          {t("How we run campaigns", "Cómo operamos campañas")}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
