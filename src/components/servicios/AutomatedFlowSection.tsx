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

        <FlowDiagram />

        <div className="mt-12">
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
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12">
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

  return (
    <div className="mx-auto max-w-[560px]">
      {/* Drop + split, aligned under the third column */}
      <div className="grid grid-cols-3">
        <div />
        <div />
        <svg viewBox="0 0 100 40" className="h-10 w-full" aria-hidden preserveAspectRatio="none">
          <path
            d="M50 0 V16 M22 16 H78 M22 16 V40 M78 16 V40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-neutral-300"
          />
        </svg>
      </div>

      <div className="grid grid-cols-3">
        <div />
        <div />
        <div className="grid grid-cols-2 gap-2">
          {parent.followUps.map((f) => (
            <div key={f.id} className="text-center">
              <div className="rounded-lg border border-neutral-200 bg-white px-2 py-2 text-xs font-medium leading-tight text-neutral-800">
                {es ? f.labelEs : f.label}
              </div>
              <p className="mt-1.5 text-[11px] leading-tight text-neutral-500">
                → {t("fixed answer", "respuesta fija")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
