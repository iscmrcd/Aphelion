import { useCallback, useState } from "react";
import { MessageSquare, Send, Check, AlertCircle, Loader2 } from "lucide-react";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { clinicalPalette, rampButton } from "@/lib/clinical-theme";
import { sendDemoSms } from "@/lib/sms-server";

/**
 * The real half of the appointment illustration: the visitor types their own
 * number and actually receives the reminder SMS.
 *
 * Two things this deliberately does NOT do:
 *   - it does not promise delivery before the server has confirmed it
 *   - it does not pretend to have sent anything when the endpoint is not
 *     configured or the limit was hit; each refusal gets its own message,
 *     because "algo salió mal" teaches the visitor nothing.
 *
 * The exact text of the message is shown before sending. Someone typing a
 * number into a website deserves to know what will land on their phone.
 */

const newSessionId = () =>
  `sms-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

type Reason = "config" | "limit" | "phone" | "provider" | "network";

type State =
  { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; reason: Reason };

/**
 * Live sending is paused while the Twilio account is upgraded (trial accounts
 * hit a daily cap and can only text verified numbers). The panel still shows
 * exactly what the patient receives; it just does not call the endpoint.
 * Flip this back to true once TWILIO_FROM_NUMBER exists and the account is out
 * of trial.
 */
const LIVE_SMS_ENABLED = false;

export function SmsDemo() {
  const t = useT();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);
  const [sessionId] = useState(newSessionId);
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });

  const busy = state.kind === "sending";
  const done = state.kind === "sent";

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (busy || done || phone.trim().length < 10) return;
      setState({ kind: "sending" });
      try {
        const res = await sendDemoSms({ data: { sessionId, phone: phone.trim() } });
        setState(res.sent ? { kind: "sent" } : { kind: "error", reason: res.reason ?? "provider" });
      } catch {
        setState({ kind: "error", reason: "network" });
      }
    },
    [busy, done, phone, sessionId],
  );

  const errorText = (reason: Reason) => {
    switch (reason) {
      case "phone":
        return t(
          "We do not recognise that number. Use 10 digits for Mexico, or +1 for the United States.",
          "Ese número no lo reconocemos. Escríbelo a 10 dígitos para México, o con +1 para Estados Unidos.",
        );
      case "limit":
        return t(
          "One per visit. That limit is what keeps this a demo instead of a bulk sender.",
          "Uno por visita. Ese límite es lo que mantiene esto como demo y no como sistema de envíos.",
        );
      case "config":
        return t(
          "The demo is unavailable right now. Write to us on WhatsApp and we will show you live.",
          "La demo no está disponible en este momento. Escríbenos por WhatsApp y te lo mostramos en vivo.",
        );
      default:
        return t(
          "It could not be delivered. Some carriers block this kind of message; WhatsApp always gets through.",
          "No se pudo entregar. Algunas compañías bloquean este tipo de mensaje; por WhatsApp siempre llega.",
        );
    }
  };

  return (
    <div
      className="rounded-2xl border p-4 sm:p-5"
      style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
    >
      <p className="flex items-center gap-2 text-sm font-medium" style={{ color: C.deep }}>
        <MessageSquare className="h-4 w-4" style={{ color: C.mid }} />
        {t("Do not take our word for it", "No nos creas, compruébalo")}
      </p>
      <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-300">
        {t(
          "Enter your own number and we will send you the same reminder a patient would get. One per visit, and only to your own phone.",
          "Escribe tu propio número y te mandamos el mismo recordatorio que recibiría un paciente. Uno por visita, y solo a tu propio teléfono.",
        )}
      </p>

      {/* The visitor sees the exact text before it is sent. */}
      <div
        className="mt-3 rounded-xl px-3 py-2.5 text-[12px] leading-relaxed"
        style={{ backgroundColor: `${C.soft}1F`, color: C.deep }}
      >
        <span className="font-medium">{t("What arrives:", "Lo que llega:")}</span>{" "}
        {t(
          "“This is a DEMO SMS from Aphelion (aphelion.mx). This is how an appointment reminder would look. Not a real appointment, and we will not write again.”",
          "«Este es un SMS de DEMOSTRACIÓN de Aphelion (aphelion.mx). Así se vería el recordatorio de una cita. No es una cita real y no te volveremos a escribir.»",
        )}
      </div>

      {done ? (
        <p
          className="mt-4 flex items-start gap-2 text-sm font-medium"
          style={{ color: C.deep }}
          role="status"
        >
          <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: C.mid }} />
          {t(
            "Sent. It usually lands in a few seconds. That is the whole mechanism — no app for the patient to install.",
            "Enviado. Normalmente llega en unos segundos. Ese es todo el mecanismo: el paciente no instala nada.",
          )}
        </p>
      ) : (
        <form onSubmit={submit} className="mt-4 flex flex-col gap-2 sm:flex-row">
          <label className="sr-only" htmlFor="sms-demo-phone">
            {t("Your phone number", "Tu número de teléfono")}
          </label>
          <input
            id="sms-demo-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (state.kind === "error") setState({ kind: "idle" });
            }}
            placeholder={t("Your number, e.g. 664 123 4567", "Tu número, ej. 664 123 4567")}
            disabled={busy}
            className="min-w-0 flex-1 rounded-xl border bg-white px-3.5 py-2.5 text-base text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:ring-2 disabled:opacity-60 dark:bg-neutral-900 dark:text-neutral-100"
            style={{ borderColor: `${C.soft}80` }}
          />
          <button
            type="submit"
            disabled={busy || phone.trim().length < 10}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50"
            style={{ background: rampButton(C), color: C.onDeep }}
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {busy ? t("Sending…", "Enviando…") : t("Send it to me", "Mándamelo")}
          </button>
        </form>
      )}

      {state.kind === "error" && (
        <p
          className="mt-2.5 flex items-start gap-2 text-[13px] text-neutral-700 dark:text-neutral-300"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: C.mid }} />
          {errorText(state.reason)}
        </p>
      )}

      <p className="mt-3 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
        {t(
          "We use the number for this single message and to keep the limit. Mexico and the United States only.",
          "Usamos el número para ese único mensaje y para respetar el límite. Solo México y Estados Unidos.",
        )}
      </p>
    </div>
  );
}
