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

  const parent = FLOW_OPTIONS.find((o) => o.followUps?.length);

  /*
    Connectors are derived from the grid instead of drawn on a fixed viewBox.
    The previous SVG hard-coded drops at x=50/150/250, but with gap-3 the real
    column centres land at 46/150/254 — a ~4px jog where the trunk met the
    rail. These rails inset by exactly half a column, so they stay locked to
    the node centres at any width:
      3 columns -> half a column = (100% - 2*gap) / 6
      2 columns -> half a column = (100% - gap) / 4
  */
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 lg:p-8 xl:p-10">
      {/* Level 0 */}
      <div className="flex justify-center">
        <span className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white">
          {t("Incoming message", "Mensaje entrante")}
        </span>
      </div>

      <div className="mx-auto max-w-[560px]">
        {/* trunk out of level 0 */}
        <div className="mx-auto h-5 w-px bg-neutral-300" />

        {/* rail + drops into the three branches */}
        <div className="relative h-5">
          <span className="absolute left-[calc((100%-24px)/6)] right-[calc((100%-24px)/6)] top-0 h-px bg-neutral-300" />
          <div className="grid h-full grid-cols-3 gap-3">
            {FLOW_OPTIONS.map((o) => (
              <span key={o.id} className="mx-auto h-full w-px bg-neutral-300" />
            ))}
          </div>
        </div>

        {/* Level 1 */}
        <div className="grid grid-cols-3 gap-3">
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
                {/* Terminal branches label themselves. The one that opens a second
                    level says so by actually opening one, and a caption there would
                    interrupt the trunk running down to its children. */}
                {!hasChildren && (
                  <p className="mt-2 text-xs leading-tight text-neutral-500">
                    → {t("fixed answer", "respuesta fija")}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {parent?.followUps ? <SecondLevel /> : null}
      </div>

      <p className="mx-auto mt-10 max-w-2xl border-t border-neutral-200 pt-6 text-center text-sm leading-relaxed text-neutral-500">
        {t(
          "Fixed flows can have several levels, but every branch is still a preset answer — it doesn't understand variations of the question.",
          "Los flujos fijos pueden tener varios niveles, pero cada rama sigue siendo una respuesta predefinida: no entiende variaciones de la pregunta.",
        )}
      </p>
    </div>
  );
}

/** Children of the branch that opens further (Pricing). */
function SecondLevel() {
  const t = useT();
  const { lang } = useLang();
  const es = lang === "es";

  const parent = FLOW_OPTIONS.find((o) => o.followUps?.length);
  if (!parent?.followUps) return null;

  /*
    The children sit in columns 2-3 of the same 3-column grid, so with equal
    gaps each child cell is exactly one outer column wide. That means child 2
    shares its centre with the parent above it, and the trunk drops straight
    down with no offset.
  */
  return (
    <div className="grid grid-cols-3 gap-3">
      <div />
      <div className="col-span-2">
        {/* trunk out of the parent: aligned to the right child's centre */}
        <div className="relative h-5">
          <span className="absolute right-[calc((100%-12px)/4)] top-0 h-full w-px bg-neutral-300" />
        </div>

        {/* rail + drops into the two children */}
        <div className="relative h-5">
          <span className="absolute left-[calc((100%-12px)/4)] right-[calc((100%-12px)/4)] top-0 h-px bg-neutral-300" />
          <div className="grid h-full grid-cols-2 gap-3">
            {parent.followUps.map((f) => (
              <span key={f.id} className="mx-auto h-full w-px bg-neutral-300" />
            ))}
          </div>
        </div>

        {/* Level 2 */}
        <div className="grid grid-cols-2 gap-3">
          {parent.followUps.map((f) => (
            <div key={f.id} className="min-w-0 text-center">
              <div className="rounded-xl border border-neutral-200 bg-white px-3 py-3 text-sm font-medium leading-tight text-neutral-800">
                {es ? f.labelEs : f.label}
              </div>
              <p className="mt-2 text-xs leading-tight text-neutral-500">
                → {t("fixed answer", "respuesta fija")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
