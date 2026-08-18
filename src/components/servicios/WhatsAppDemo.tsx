import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Send, RotateCcw, Lock, ArrowUpRight } from "lucide-react";
import {
  AGENT_ORDER,
  AI_GRADIENT,
  AI_GRADIENT_ON,
  AI_ON_GRADIENT_SHADOW,
  aiIconGradientStyle,
  DEMO_AGENTS,
  type AgentType,
} from "@/lib/whatsapp-ia-data";
import { sendDemoMessage, type ChatTurn } from "@/lib/whatsapp-ia-server";
import { useT, useLang } from "@/lib/i18n";

const MAX_MESSAGES = 20;

type Thread = { turns: ChatTurn[]; started: boolean };

function emptyThreads(): Record<AgentType, Thread> {
  return {
    "real-estate": { turns: [], started: false },
    health: { turns: [], started: false },
    professional: { turns: [], started: false },
  };
}

function newSessionId(): string {
  try {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  } catch {
    /* fall through */
  }
  return `s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function WhatsAppDemo() {
  const t = useT();
  const { lang } = useLang();

  const [agentType, setAgentType] = useState<AgentType>("real-estate");
  // One session id for the whole demo: switching agents must NOT reset the
  // shared 20-message budget, so the id is deliberately created only once.
  const [sessionId, setSessionId] = useState(newSessionId);
  const [threads, setThreads] = useState<Record<AgentType, Thread>>(emptyThreads);
  const [messageCount, setMessageCount] = useState(0);
  const [limitReached, setLimitReached] = useState(false);
  const [pending, setPending] = useState(false);
  const [input, setInput] = useState("");

  const agent = DEMO_AGENTS[agentType];
  const thread = threads[agentType];
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const focusedRef = useRef(false);
  const syncRef = useRef<() => void>(() => {});

  /**
   * Visible slice of the viewport while the soft keyboard is up, or null.
   * Driving the card off these numbers is the only reliable way to know where
   * the keyboard actually starts: layout units (100vh, innerHeight) don't
   * shrink for it on iOS Safari.
   */
  const [kbView, setKbView] = useState<{ top: number; height: number } | null>(null);
  /** Height the card occupied before it was pinned, so the page doesn't jump. */
  const [placeholder, setPlaceholder] = useState<number | null>(null);

  const greeting = lang === "es" ? agent.greetingEs : agent.greeting;
  const starters = lang === "es" ? agent.startersEs : agent.starters;

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [thread.turns, pending, agentType, kbView]);

  /**
   * The card is ~550px tall (header + 420px of messages + composer) while an
   * iPhone leaves roughly 300-350px above the keyboard. It can't fit, so
   * Safari's scroll-into-view drops the composer somewhere in the middle.
   *
   * While the keyboard is up we pin the card to the visual viewport instead:
   * top at visualViewport.offsetTop, height at visualViewport.height. The
   * composer is the last child of a flex column, so it lands exactly on the
   * bottom edge of the visible area — the keyboard's top edge.
   */
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    // Below this, a resize is browser chrome (URL bar) rather than a keyboard.
    const KEYBOARD_MIN_SHRINK = 120;

    const sync = () => {
      const shrink = window.innerHeight - vv.height;
      if (focusedRef.current && shrink > KEYBOARD_MIN_SHRINK) {
        setPlaceholder((h) => h ?? cardRef.current?.offsetHeight ?? null);
        setKbView({ top: vv.offsetTop, height: vv.height });
      } else {
        setKbView(null);
        setPlaceholder(null);
      }
    };

    syncRef.current = sync;
    vv.addEventListener("resize", sync);
    vv.addEventListener("scroll", sync);
    return () => {
      vv.removeEventListener("resize", sync);
      vv.removeEventListener("scroll", sync);
    };
  }, []);

  const handleInputFocus = useCallback(() => {
    focusedRef.current = true;
    // iOS reports the new viewport a beat after focus, so re-read shortly after.
    window.setTimeout(() => syncRef.current(), 100);
    window.setTimeout(() => syncRef.current(), 350);
  }, []);

  const handleInputBlur = useCallback(() => {
    focusedRef.current = false;
    setKbView(null);
    setPlaceholder(null);
    // Bring the whole card back into view once the keyboard is gone.
    window.setTimeout(() => {
      cardRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }, 60);
  }, []);

  const send = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text || pending || limitReached) return;

      const history = threads[agentType].turns;
      setInput("");
      setPending(true);
      setThreads((prev) => ({
        ...prev,
        [agentType]: {
          turns: [...prev[agentType].turns, { role: "user", content: text }],
          started: true,
        },
      }));

      try {
        const result = await sendDemoMessage({
          data: { sessionId, agentType, message: text, history, lang },
        });

        setThreads((prev) => ({
          ...prev,
          [agentType]: {
            turns: [...prev[agentType].turns, { role: "assistant", content: result.reply }],
            started: true,
          },
        }));
        setMessageCount(result.messageCount);
        if (result.limitReached) setLimitReached(true);
      } catch {
        setThreads((prev) => ({
          ...prev,
          [agentType]: {
            turns: [
              ...prev[agentType].turns,
              {
                role: "assistant",
                content: t(
                  "Connection dropped for a second. Try again?",
                  "Se cayó la conexión un segundo. ¿Lo intentas de nuevo?",
                ),
              },
            ],
            started: true,
          },
        }));
      } finally {
        setPending(false);
      }
    },
    [agentType, threads, sessionId, lang, pending, limitReached, t],
  );

  /** Suggestions prefill the composer rather than sending, so they read as
      prompts to riff on instead of fixed options to pick. */
  const suggest = useCallback((text: string) => {
    setInput(text);
    inputRef.current?.focus();
  }, []);

  const restart = useCallback(() => {
    setSessionId(newSessionId());
    setThreads(emptyThreads());
    setMessageCount(0);
    setLimitReached(false);
    setInput("");
  }, []);

  const remaining = Math.max(0, MAX_MESSAGES - messageCount);
  const showStarters = !thread.started && !pending && !limitReached;

  const counterLabel = useMemo(() => {
    if (limitReached) return t("Demo finished", "Demo terminada");
    return t(`${remaining} messages left`, `${remaining} mensajes restantes`);
  }, [limitReached, remaining, t]);

  return (
    <div className="mx-auto max-w-2xl">
      {/* Industry selector */}
      <div className="mb-6 grid grid-cols-3 gap-2 sm:gap-2.5">
        {AGENT_ORDER.map((id) => {
          const a = DEMO_AGENTS[id];
          const active = id === agentType;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setAgentType(id)}
              aria-pressed={active}
              style={active ? AI_ON_GRADIENT_SHADOW : undefined}
              className={`min-w-0 rounded-2xl border px-2 py-3 text-center transition sm:px-4 sm:py-3.5 sm:text-left ${
                active
                  ? `border-transparent ${AI_GRADIENT_ON} ${AI_GRADIENT}`
                  : "border-neutral-200 bg-white text-neutral-950 hover:border-neutral-950"
              }`}
            >
              <span
                className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full transition sm:mx-0 ${
                  active ? "bg-white" : "bg-neutral-950 text-white"
                }`}
              >
                <a.Icon
                  className="h-4 w-4"
                  style={active ? aiIconGradientStyle : undefined}
                  aria-hidden
                  strokeWidth={2}
                />
              </span>
              <span className="mt-2 block text-xs font-medium leading-tight sm:text-sm">
                {lang === "es" ? a.industryEs : a.industry}
              </span>
              {/* Subtitle is dropped on mobile: at 375px each tab has ~90px of
                  usable width, not enough for it without wrapping to 2 lines. */}
              <span
                className={`mt-0.5 hidden text-xs leading-tight sm:block ${
                  active ? "text-white/80" : "text-neutral-500"
                }`}
              >
                {lang === "es" ? a.roleEs : a.role}
              </span>
            </button>
          );
        })}
      </div>

      {/* Chat window. Wrapper holds the card's height while it's pinned. */}
      <div style={placeholder ? { height: placeholder } : undefined}>
        <div
          ref={cardRef}
          style={
            kbView
              ? {
                  position: "fixed",
                  top: kbView.top,
                  left: 0,
                  right: 0,
                  height: kbView.height,
                  zIndex: 60,
                }
              : undefined
          }
          className={`flex flex-col overflow-hidden border-neutral-200 bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)] ${
            kbView ? "border-y" : "rounded-3xl border"
          }`}
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-neutral-950 px-5 py-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-medium text-white">
              {agent.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">{agent.businessName}</p>
              <p className="flex items-center gap-1.5 text-xs text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                {pending ? t("typing…", "escribiendo…") : t("online", "en línea")}
              </p>
            </div>
            <span className="flex-shrink-0 rounded-full border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white/50">
              Demo
            </span>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className={`space-y-3 overflow-y-auto bg-neutral-50 px-4 py-5 sm:px-5 ${
              kbView ? "min-h-0 flex-1" : "h-[420px]"
            }`}
          >
            <Bubble from="agent">{greeting}</Bubble>

            {thread.turns.map((turn, i) => (
              <Bubble key={i} from={turn.role === "user" ? "user" : "agent"}>
                {turn.content}
              </Bubble>
            ))}

            {pending && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-neutral-200 bg-white px-4 py-3">
                  <span className="flex gap-1" aria-label={t("typing", "escribiendo")}>
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </span>
                </div>
              </div>
            )}

            {/* Plain text, deliberately not buttons: the automated flow's chat uses
              bordered pills, and these must not read as the same "pick one of
              these" affordance. */}
            {showStarters && (
              <div className="pt-2">
                <p className="text-xs italic text-neutral-400">
                  {t(
                    "Put it to the test — ask it anything",
                    "Ponlo a prueba — pregúntale lo que quieras",
                  )}
                </p>
                <ul className="mt-2.5 space-y-2">
                  {starters.map((s) => (
                    <li key={s}>
                      <button
                        type="button"
                        onClick={() => suggest(s)}
                        className="inline-flex items-start gap-1.5 text-left text-xs text-neutral-500 underline decoration-neutral-300 decoration-dotted underline-offset-4 transition hover:text-neutral-900 hover:decoration-neutral-500"
                      >
                        <ArrowUpRight
                          className="mt-px h-3 w-3 flex-shrink-0 opacity-70"
                          aria-hidden
                          strokeWidth={2}
                        />
                        <span>{s}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Composer */}
          <div className="border-t border-neutral-200 bg-white px-4 py-3.5 sm:px-5">
            {limitReached ? (
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-xs text-neutral-500">
                  <Lock className="h-3.5 w-3.5" aria-hidden />
                  {t(
                    "Demo limit reached for this session.",
                    "Llegaste al límite de esta sesión de demo.",
                  )}
                </p>
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3.5 py-1.5 text-xs font-medium text-neutral-950 transition hover:border-neutral-950"
                >
                  <RotateCcw className="h-3 w-3" aria-hidden />
                  {t("Start over", "Empezar de nuevo")}
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void send(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  maxLength={1000}
                  disabled={pending}
                  placeholder={t("Type a message", "Escribe un mensaje")}
                  aria-label={t("Type a message", "Escribe un mensaje")}
                  // text-base (16px) is deliberate: iOS Safari auto-zooms any focused input
                  // whose computed font-size is under 16px. Fixing it here keeps the
                  // page-wide pinch-zoom intact, unlike a maximum-scale viewport hack.
                  className="min-w-0 flex-1 rounded-full border-[0.5px] border-neutral-300 bg-neutral-50 px-4 py-2.5 text-base text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={pending || !input.trim()}
                  aria-label={t("Send", "Enviar")}
                  className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition hover:bg-neutral-800 disabled:opacity-30"
                >
                  <Send className="h-4 w-4" aria-hidden />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Session meta */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1">
        <p className="text-xs text-neutral-500">
          {t(
            "Fictional businesses. Real AI, running live.",
            "Negocios ficticios. IA real, corriendo en vivo.",
          )}
        </p>
        <p className="text-xs tabular-nums text-neutral-400">{counterLabel}</p>
      </div>
    </div>
  );
}

function Bubble({ from, children }: { from: "user" | "agent"; children: React.ReactNode }) {
  const isUser = from === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[82%] whitespace-pre-wrap px-4 py-2.5 text-sm leading-relaxed ${
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
