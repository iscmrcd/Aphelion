import { AutomatedFlowChat } from "@/components/servicios/AutomatedFlowDemo";
import { FLOW_OPTIONS } from "@/lib/whatsapp-flow-data";
import { useT, useLang } from "@/lib/i18n";

/**
 * Dedicated section for the "Automatizado" tier, mirroring the width and
 * padding of the #demo section so both tiers read as equally substantial.
 *
 * Sits between the comparison cards and the AI demo: the visitor sees what a
 * scripted flow looks like before meeting the agents that aren't scripted.
 */
export function AutomatedFlowSection() {
  const t = useT();

  return (
    <section
      id="flujo-automatizado"
      className="scroll-mt-20 border-t border-neutral-200 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("Automated", "Automatizado")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            {t("This is what a fixed flow looks like.", "Así se ve un flujo automatizado.")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-500">
            {t(
              "A decision tree with preset answers. Try it below — then compare it to the AI agents further down.",
              "Un árbol de decisiones con respuestas predefinidas. Pruébalo aquí abajo, y luego compáralo con los agentes de IA más adelante.",
            )}
          </p>
        </div>

        {/* Side by side from lg up, where each column still clears ~496px. */}
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <FlowDiagram />
          <AutomatedFlowChat />
        </div>
      </div>
    </section>
  );
}

/** Static two-level branch diagram: one question, three branches, one of which opens further. */
function FlowDiagram() {
  const t = useT();
  const { lang } = useLang();
  const es = lang === "es";

  const branchNote = t("fixed answer", "respuesta fija");

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 lg:p-8 xl:p-10">
      {/* Level 0 */}
      <div className="flex justify-center">
        <span className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white">
          {t("Incoming message", "Mensaje entrante")}
        </span>
      </div>

      {/* Trunk + rail + three drops */}
      <svg
        viewBox="0 0 300 44"
        className="mx-auto h-11 w-full max-w-[560px]"
        aria-hidden
        preserveAspectRatio="none"
      >
        <path
          d="M150 0 V18 M50 18 H250 M50 18 V44 M150 18 V44 M250 18 V44"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-neutral-300"
        />
      </svg>

      {/* Level 1 */}
      <div className="mx-auto grid max-w-[560px] grid-cols-3 gap-3">
        {FLOW_OPTIONS.map((o) => {
          const hasChildren = Boolean(o.followUps?.length);
          return (
            <div key={o.id} className="text-center">
              <div
                className={`rounded-xl border px-3 py-3 text-sm font-medium leading-tight ${
                  hasChildren
                    ? "border-neutral-950 bg-neutral-50 text-neutral-950"
                    : "border-neutral-200 bg-white text-neutral-800"
                }`}
              >
                {es ? o.labelEs : o.label}
              </div>
              <p className="mt-2 text-xs leading-tight text-neutral-500">
                {hasChildren
                  ? t("opens a second level", "abre un segundo nivel")
                  : `→ ${branchNote}`}
              </p>
            </div>
          );
        })}
      </div>

      {/* Level 2, under the branch that has children */}
      <SecondLevel />

      <p className="mx-auto mt-10 max-w-2xl border-t border-neutral-200 pt-6 text-center text-sm leading-relaxed text-neutral-500">
        {t(
          "Fixed flows can have several levels, but every branch is still a preset answer — it doesn't understand variations of the question.",
          "Los flujos fijos pueden tener varios niveles, pero cada rama sigue siendo una respuesta predefinida: no entiende variaciones de la pregunta.",
        )}
      </p>
    </div>
  );
}

/** Renders the children of whichever level-1 branch has them (Pricing). */
function SecondLevel() {
  const t = useT();
  const { lang } = useLang();
  const es = lang === "es";

  const parent = FLOW_OPTIONS.find((o) => o.followUps?.length);
  if (!parent?.followUps) return null;

  const fixed = t("fixed answer", "respuesta fija");

  /*
    One layout at every width, kept side by side so this still reads as a
    branch of the tree rather than a detached list.

    It fits because the children span columns 2-3 instead of squeezing inside
    the third column alone: at 375px that leaves each node ~70px of inner
    width, enough for "Residencial" on a single line at 11px. The connector
    coordinates below are in the same 0-300 space the level-1 rail uses, so
    the trunk drops from the "Precios" node (x=250) and the two children sit
    at x=148 and x=252.
  */
  return (
    <div className="mx-auto max-w-[560px]">
      <svg viewBox="0 0 300 30" className="h-7 w-full" aria-hidden preserveAspectRatio="none">
        <path
          d="M250 0 V12 M148 12 H252 M148 12 V30 M252 12 V30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-neutral-300"
        />
      </svg>

      <div className="grid grid-cols-3">
        <div />
        <div className="col-span-2 grid grid-cols-2 gap-2">
          {parent.followUps.map((f) => (
            <div key={f.id} className="min-w-0 text-center">
              <div className="rounded-lg border border-neutral-200 bg-white px-2 py-2 text-[11px] font-medium leading-tight text-neutral-800 sm:text-xs">
                {es ? f.labelEs : f.label}
              </div>
              <p className="mt-1.5 text-[10px] leading-tight text-neutral-500 sm:text-[11px]">
                → {fixed}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
