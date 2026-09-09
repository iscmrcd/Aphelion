import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import { useT } from "@/lib/i18n";
import { chatWithAphelion, type ChatTurn } from "@/lib/aphelion-agent-server";
import { AphelionOrb } from "./AphelionOrb";

/**
 * Aphelion's own assistant, replacing the button that used to jump straight to
 * wa.me.
 *
 * WhatsApp did not go away: it is a visible row inside the panel. The old
 * button served only the visitor who had already decided to write; this serves
 * the one who is still deciding, without getting in the way of the one who has.
 *
 * The lead is registered server-side the moment a phone number appears in the
 * conversation, not when the chat is closed, because most people close the tab
 * instead of saying goodbye.
 */
const WA_HREF =
  "https://wa.me/526461293352?text=" +
  encodeURIComponent("Hola Aphelion, me gustaría más información.");

const newSessionId = () =>
  `aph-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

type Msg = { role: "user" | "assistant"; content: string };

function renderMarkdown(text: string): ReactNode {
  const safe = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const lines = safe.split("\n");
  return lines.map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
    return (
      <span key={i}>
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          if (part.startsWith("*") && part.endsWith("*")) {
            return <em key={j}>{part.slice(1, -1)}</em>;
          }
          return <span key={j}>{part}</span>;
        })}
        {i < lines.length - 1 && <br />}
      </span>
    );
  });
}


export function AphelionChatWidget() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [sessionId] = useState(newSessionId);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [limitReached, setLimitReached] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const greeting = t(
    "Hi 👋 I'm Aphelion's assistant. What are you working on?",
    "Hola 👋 Soy la asistente de Aphelion. ¿En qué andas trabajando?",
  );

  useEffect(() => {
    if (open && msgs.length === 0) {
      setMsgs([{ role: "assistant", content: greeting }]);
      // Deliberately not autofocusing: on mobile that yanks the keyboard up
      // before the visitor has read anything.
    }
  }, [open, msgs.length, greeting]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, pending]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || pending || limitReached) return;
    setInput("");
    const history: ChatTurn[] = msgs
      .filter((m) => m.content !== greeting)
      .map((m) => ({ role: m.role, content: m.content }));
    setMsgs((m) => [...m, { role: "user", content: text }]);
    setPending(true);
    try {
      const res = await chatWithAphelion({
        data: {
          sessionId,
          message: text,
          history,
          path: typeof window !== "undefined" ? window.location.pathname : "",
        },
      });
      setMsgs((m) => [...m, { role: "assistant", content: res.reply }]);
      if (res.limitReached) setLimitReached(true);
    } catch {
      setMsgs((m) => [
        ...m,
        {
          role: "assistant",
          content: t(
            "Something broke on my end. WhatsApp is right below and we answer there.",
            "Algo falló de mi lado. Abajo está el WhatsApp y por ahí sí contestamos.",
          ),
        },
      ]);
    } finally {
      setPending(false);
    }
  }, [input, pending, limitReached, msgs, greeting, sessionId, t]);

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? t("Close chat", "Cerrar chat") : t("Open chat", "Abrir chat")}
        aria-expanded={open}
        className="fixed right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white shadow-lg shadow-black/20 ring-1 ring-white/10 transition hover:scale-105 hover:bg-neutral-800 sm:right-6"
        style={{
          // Same iOS handling as the button this replaces: Safari recalculates
          // the viewport as its bottom bar hides, so anchor to the safe area
          // and force a compositing layer.
          bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          willChange: "transform",
        }}
      >
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label={t("Chat with Aphelion", "Chat con Aphelion")}
          className="fixed right-3 left-3 z-50 flex flex-col overflow-hidden rounded-3xl border border-white/50 bg-white/45 shadow-2xl shadow-black/15 ring-1 ring-black/5 backdrop-blur-2xl backdrop-saturate-150 sm:right-6 sm:left-auto sm:w-[380px] dark:border-white/15 dark:bg-neutral-900/55 dark:ring-white/10"
          style={{
            bottom: "calc(5rem + env(safe-area-inset-bottom, 0px))",
            maxHeight: "min(70vh, 560px)",
          }}
        >
          <div className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3 dark:border-white/10">
            <AphelionOrb size={32} busy={pending} />
            <div className="min-w-0">
              <p className="text-sm font-medium text-neutral-950 dark:text-neutral-100">Aphelion</p>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                {t("Usually replies right away", "Normalmente responde al instante")}
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                    : "bg-neutral-100 text-neutral-800 dark:bg-white/10 dark:text-neutral-100"
                }`}
              >
                {renderMarkdown(m.content)}
              </div>
            ))}
            {pending && (
              <div className="w-16 rounded-2xl bg-neutral-100 px-3.5 py-3 dark:bg-white/10">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-400"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </span>
              </div>
            )}
          </div>

          <div className="border-t border-neutral-200 px-3 py-3 dark:border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void send();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={limitReached}
                placeholder={t("Write your question…", "Escribe tu duda…")}
                aria-label={t("Message", "Mensaje")}
                /* text-base keeps iOS Safari from zooming the page on focus. */
                className="min-w-0 flex-1 rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-base outline-none placeholder:text-neutral-400 focus:border-neutral-950 disabled:opacity-60 sm:text-sm dark:border-white/15 dark:bg-white/5 dark:text-neutral-100"
              />
              <button
                type="submit"
                disabled={pending || limitReached || !input.trim()}
                aria-label={t("Send", "Enviar")}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition disabled:opacity-40 dark:bg-white dark:text-neutral-950"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            {/* WhatsApp stays one tap away for whoever already decided. */}
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 flex items-center justify-center gap-2 rounded-full border border-[#25D366] bg-[#25D366]/5 py-2 text-xs font-medium text-[#25D366] transition hover:bg-[#25D366] hover:text-white dark:border-[#25D366] dark:text-[#25D366] dark:hover:bg-[#25D366] dark:hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44Zm-8.45 18.32h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9Z" />
              </svg>
              {t("Rather use WhatsApp", "Mejor por WhatsApp")}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
