import { useT } from "@/lib/i18n";
import { Reveal } from "./Motion";

export function StudioProcess() {
  const t = useT();
  const steps = [
    [
      t("We listen", "Entendemos"),
      t(
        "We review your business, what you already have and what you want to improve.",
        "Revisamos tu negocio, lo que ya tienes y lo que quieres mejorar.",
      ),
    ],
    [
      t("We define", "Definimos"),
      t(
        "You receive a proposal with scope, deliverables, timelines and investment.",
        "Recibes una propuesta con alcance, entregables, tiempos e inversión.",
      ),
    ],
    [
      t("We create", "Creamos"),
      t(
        "We design, produce and develop, with agreed review points along the way.",
        "Diseñamos, producimos y desarrollamos con revisiones acordadas contigo.",
      ),
    ],
    [
      t("We follow through", "Acompañamos"),
      t(
        "We launch, measure and follow up according to your project's support plan.",
        "Lanzamos, medimos y damos seguimiento según el plan de tu proyecto.",
      ),
    ],
  ];
  return (
    <section
      id="proceso"
      className="scroll-mt-24 border-t border-neutral-200 bg-white px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="studio-eyebrow">{t("How we work", "Cómo trabajamos")}</p>
            <h2 className="studio-heading mt-4">
              {t("Clear from the start.", "Claridad desde el principio.")}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
            {t(
              "You don't need to arrive with a technical brief. Start by telling us what your business needs.",
              "No necesitas llegar con un documento técnico. Empieza por contarnos qué necesita tu negocio.",
            )}
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, description], index) => (
            <Reveal key={title} delay={index * 70}>
              <div className="border-t border-neutral-300 pt-5">
                <span className="font-mono text-xs text-neutral-400">0{index + 1}</span>
                <h3 className="mt-8 text-xl font-medium tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
