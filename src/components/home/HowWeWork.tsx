import { useT } from "@/lib/i18n";

/**
 * Four steps from first message to follow-up. Shared by the homepage and the
 * service pages so the promise is worded the same everywhere.
 */
export function HowWeWork({ bordered = true }: { bordered?: boolean }) {
  const t = useT();

  const STEPS = [
    {
      title: t("We understand your business", "Entendemos tu negocio"),
      body: t(
        "A 30-minute call to see what you already have, what brings you clients today and where it gets stuck.",
        "Una llamada de 30 minutos para ver qué tienes, qué te trae clientes hoy y dónde se atora.",
      ),
    },
    {
      title: t("We define scope and investment", "Definimos alcance e inversión"),
      body: t(
        "You get a written proposal with a fixed price and what would change it. No surprises halfway through.",
        "Recibes una propuesta por escrito con precio fijo y lo que lo haría cambiar. Sin sorpresas a medio proyecto.",
      ),
    },
    {
      title: t("We produce and launch", "Producimos y lanzamos"),
      body: t(
        "Design, content and development with clear dates. Projects are paid 50% to start and 50% on delivery.",
        "Diseño, contenido y desarrollo con fechas claras. Los proyectos se pagan 50% al arrancar y 50% al entregar.",
      ),
    },
    {
      title: t("We follow up", "Damos seguimiento"),
      body: t(
        "Support, reports and improvements based on data, so the next step is decided with numbers.",
        "Soporte, reportes y mejoras con base en datos, para decidir el siguiente paso con números.",
      ),
    },
  ];

  return (
    <section className={`px-5 py-20 sm:py-28 ${bordered ? "border-t border-neutral-200" : ""}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("How we work", "Cómo trabajamos")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.025em] text-neutral-950 sm:text-5xl">
            {t("Four steps, no surprises.", "Cuatro pasos, sin sorpresas.")}
          </h2>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="group relative flex flex-col bg-white p-6 transition hover:bg-neutral-50 sm:p-7"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium tabular-nums text-neutral-950 transition group-hover:border-neutral-950">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg sm:mt-8 font-medium tracking-[-0.01em] text-neutral-950">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
