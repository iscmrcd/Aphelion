import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { FLOW_OPTIONS, type FlowOption } from "@/lib/agente-flow-data";
import { useT, useLang } from "@/lib/i18n";

/**
 * Closed-flow chat widget for the "Automatizado" tier.
 *
 * Everything here is hardcoded — no API call, no model. The absence of a
 * free-text composer is the point: it shows at a glance that this tier answers
 * a fixed set of questions and nothing else, which is the distinction the
 * comparison cards above it are making.
 *
 * Business data is fictional demo content.
 */

/**
 * The chat widget on its own. Sized to match AgentDemo so both demos read
 * as equally substantial on the page.
 */
export function AutomatedFlowChat() {
  const t = useT();
  const { lang } = useLang();
  const es = lang === "es";

  const [selected, setSelected] = useState<FlowOption | null>(null);
  const [followUp, setFollowUp] = useState<string | null>(null);

  const reset = () => {
    setSelected(null);
    setFollowUp(null);
  };

  const activeFollowUp = selected?.followUps?.find((f) => f.id === followUp) ?? null;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]">
        {/* Header: intentionally has no "online" dot or typing indicator — this
            is a script, not an agent, and the header should not imply otherwise. */}
        <div className="flex items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-50 px-5 py-3.5">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
            {t("Fixed flow", "Flujo fijo")}
          </p>
          {selected && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex flex-shrink-0 items-center gap-1.5 text-xs font-medium text-neutral-950 transition hover:opacity-60"
            >
              <RotateCcw className="h-3 w-3" aria-hidden />
              {t("Restart", "Reiniciar")}
            </button>
          )}
        </div>

        {/* Messages */}
        <div className="h-[420px] space-y-3 overflow-y-auto bg-neutral-50 px-4 py-5 sm:px-5">
          <FlowBubble>{t("Hi! What can I help you with?", "¡Hola! ¿En qué te ayudo?")}</FlowBubble>

          {!selected && (
            <div className="flex flex-wrap gap-2 pt-1">
              {FLOW_OPTIONS.map((o) => (
                <FlowButton key={o.id} onClick={() => setSelected(o)}>
                  {es ? o.labelEs : o.label}
                </FlowButton>
              ))}
            </div>
          )}

          {selected && (
            <>
              <FlowBubble from="user">{es ? selected.labelEs : selected.label}</FlowBubble>
              <FlowBubble>{es ? selected.answerEs : selected.answer}</FlowBubble>

              {selected.followUps && !activeFollowUp && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {selected.followUps.map((f) => (
                    <FlowButton key={f.id} onClick={() => setFollowUp(f.id)}>
                      {es ? f.labelEs : f.label}
                    </FlowButton>
                  ))}
                </div>
              )}

              {activeFollowUp && (
                <>
                  <FlowBubble from="user">
                    {es ? activeFollowUp.labelEs : activeFollowUp.label}
                  </FlowBubble>
                  <FlowBubble>{es ? activeFollowUp.answerEs : activeFollowUp.answer}</FlowBubble>
                </>
              )}
            </>
          )}
        </div>

        {/* Where a composer would live — replaced with an explanation on purpose */}
        <div className="border-t border-dashed border-neutral-200 bg-white px-4 py-3.5 sm:px-5">
          <p className="text-xs leading-relaxed text-neutral-500">
            {t(
              "Preset options only — there's no text field, by design.",
              "Solo opciones predefinidas: no hay campo de texto, a propósito.",
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function FlowBubble({
  from = "bot",
  children,
}: {
  from?: "bot" | "user";
  children: React.ReactNode;
}) {
  const isUser = from === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[82%] px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-2xl rounded-br-md bg-neutral-950 text-white"
            : "rounded-2xl rounded-bl-md border border-neutral-200 bg-white text-neutral-800"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function FlowButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950"
    >
      {children}
    </button>
  );
}
