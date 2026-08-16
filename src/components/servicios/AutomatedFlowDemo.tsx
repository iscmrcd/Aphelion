import { useState } from "react";
import { CornerDownRight, RotateCcw } from "lucide-react";
import { useT, useLang } from "@/lib/i18n";

/**
 * Compact demo of the "Automatizado" tier: a fixed decision tree, not AI.
 *
 * Everything here is hardcoded on purpose — no API call, no model. The absence
 * of a free-text composer is the point: it shows at a glance that this tier
 * answers a closed set of questions and nothing else, which is exactly the
 * distinction the pricing comparison above it is trying to make.
 *
 * Business data is fictional demo content.
 */

type Option = {
  id: string;
  label: string;
  labelEs: string;
  answer: string;
  answerEs: string;
  /** Optional second-level branch shown after the answer. */
  followUps?: Array<{
    id: string;
    label: string;
    labelEs: string;
    answer: string;
    answerEs: string;
  }>;
};

const OPTIONS: Option[] = [
  {
    id: "horarios",
    label: "Hours",
    labelEs: "Horarios",
    answer:
      "We're open Monday to Friday, 9:00 to 19:00, and Saturdays 9:00 to 14:00. Closed Sundays.",
    answerEs:
      "Abrimos de lunes a viernes de 9:00 a 19:00, y sábados de 9:00 a 14:00. Domingos cerrado.",
    followUps: [
      {
        id: "festivos",
        label: "Are you open on holidays?",
        labelEs: "¿Abren en días festivos?",
        answer: "On official holidays we work a reduced schedule, 10:00 to 14:00.",
        answerEs: "En días festivos oficiales trabajamos horario reducido, de 10:00 a 14:00.",
      },
      {
        id: "cita",
        label: "Do I need an appointment?",
        labelEs: "¿Necesito cita?",
        answer: "An appointment isn't required, but with one you won't wait.",
        answerEs: "No es necesaria, pero con cita no haces fila.",
      },
    ],
  },
  {
    id: "ubicacion",
    label: "Location",
    labelEs: "Ubicación",
    answer: "We're at Av. Reforma 1120, Zona Centro, Ensenada. There's parking on site.",
    answerEs:
      "Estamos en Av. Reforma 1120, Zona Centro, Ensenada. Hay estacionamiento en el lugar.",
    followUps: [
      {
        id: "mapa",
        label: "Send me the map link",
        labelEs: "Mándame el mapa",
        answer: "Here's the location: maps.app.goo.gl/ejemplo",
        answerEs: "Aquí está la ubicación: maps.app.goo.gl/ejemplo",
      },
    ],
  },
  {
    id: "precios",
    label: "Pricing",
    labelEs: "Precios",
    answer:
      "Our starting consultation is $500 MXN. The final price depends on the service — I can connect you with an advisor for an exact quote.",
    answerEs:
      "Nuestra consulta inicial es de $500 MXN. El precio final depende del servicio. Te puedo conectar con un asesor para una cotización exacta.",
    followUps: [
      {
        id: "asesor",
        label: "Yes, connect me",
        labelEs: "Sí, conéctame",
        answer: "Perfect, an advisor will reach out shortly. 👋",
        answerEs: "Perfecto, en un momento te contacta un asesor. 👋",
      },
    ],
  },
];

export function AutomatedFlowDemo() {
  const t = useT();
  const { lang } = useLang();
  const es = lang === "es";

  const [selected, setSelected] = useState<Option | null>(null);
  const [followUp, setFollowUp] = useState<string | null>(null);

  const reset = () => {
    setSelected(null);
    setFollowUp(null);
  };

  const activeFollowUp = selected?.followUps?.find((f) => f.id === followUp) ?? null;

  return (
    <div className="mt-7 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
      <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-500">
        {t("How a fixed flow works", "Cómo funciona un flujo fijo")}
      </p>

      {/* Decision-tree diagram */}
      <FlowDiagram />

      {/* Closed-flow widget: buttons only, no free-text input by design */}
      <div className="mt-5 overflow-hidden rounded-xl border border-neutral-200 bg-white">
        <div className="space-y-2.5 px-4 py-4">
          <FlowBubble>{t("Hi! What can I help you with?", "¡Hola! ¿En qué te ayudo?")}</FlowBubble>

          {!selected && (
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {OPTIONS.map((o) => (
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
                <div className="flex flex-wrap gap-1.5 pt-0.5">
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

        {/* Where a composer would be — deliberately replaced with an explanation */}
        <div className="flex items-center justify-between gap-3 border-t border-dashed border-neutral-200 bg-neutral-50 px-4 py-2.5">
          <p className="text-[11px] leading-relaxed text-neutral-500">
            {t(
              "Preset options only — no free typing.",
              "Solo opciones predefinidas, sin escritura libre.",
            )}
          </p>
          {selected && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex flex-shrink-0 items-center gap-1.5 text-[11px] font-medium text-neutral-950 transition hover:opacity-60"
            >
              <RotateCcw className="h-3 w-3" aria-hidden />
              {t("Restart", "Reiniciar")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/** Static branch diagram: one question, three fixed answers. */
function FlowDiagram() {
  const t = useT();
  const { lang } = useLang();
  const es = lang === "es";

  return (
    <div>
      <div className="flex justify-center">
        <span className="rounded-full bg-neutral-950 px-3 py-1.5 text-[11px] font-medium text-white">
          {t("Incoming message", "Mensaje entrante")}
        </span>
      </div>

      {/* Connector: trunk + horizontal rail + three drops */}
      <svg
        viewBox="0 0 300 34"
        className="mx-auto h-[34px] w-full max-w-[300px]"
        aria-hidden
        preserveAspectRatio="none"
      >
        <path
          d="M150 0 V12 M50 12 H250 M50 12 V34 M150 12 V34 M250 12 V34"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-neutral-300"
        />
      </svg>

      <div className="grid grid-cols-3 gap-1.5">
        {OPTIONS.map((o) => (
          <div
            key={o.id}
            className="rounded-lg border border-neutral-200 bg-white px-2 py-2 text-center text-[11px] font-medium leading-tight text-neutral-800"
          >
            {es ? o.labelEs : o.label}
          </div>
        ))}
      </div>

      <p className="mt-3 flex items-start gap-1.5 text-[11px] leading-relaxed text-neutral-500">
        <CornerDownRight className="mt-0.5 h-3 w-3 flex-shrink-0" aria-hidden />
        {t(
          "Each branch returns a fixed answer. Anything outside these options goes to a human.",
          "Cada rama devuelve una respuesta fija. Lo que salga de estas opciones pasa a una persona.",
        )}
      </p>
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
        className={`max-w-[85%] px-3 py-2 text-xs leading-relaxed ${
          isUser
            ? "rounded-xl rounded-br-sm bg-neutral-950 text-white"
            : "rounded-xl rounded-bl-sm border border-neutral-200 bg-neutral-50 text-neutral-800"
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
      className="rounded-full border border-neutral-300 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950"
    >
      {children}
    </button>
  );
}
