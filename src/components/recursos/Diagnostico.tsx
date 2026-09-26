import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, HelpCircle, LayoutGrid, RotateCcw } from "lucide-react";
import { useT, useLang, type Lang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { rampButton, rampProgress } from "@/lib/clinical-theme";
import { diagnosticoPalette, type DiagnosticoPalette } from "@/lib/diagnostico-theme";
import { BlogTeaserSection } from "@/components/blog/BlogTeaserSection";
import {
  bandaFor,
  scoreDiagnostic,
  scoredQuestions,
  type Answers,
  type DiagnosticResult,
  type DiagnosticoVertical,
} from "@/lib/diagnostico-data";
import { submitLead } from "@/lib/notify-server";
import { saveDiagnostic } from "@/lib/diagnostico-server";
import { describeAttribution, readAttribution } from "@/lib/attribution";
import { trackCustom, trackStandard } from "@/lib/pixel";
import { ENTRY_KEY, langSearch } from "@/lib/diagnostico-links";

/**
 * Diagnostic runner, shared by every industry.
 *
 * The result is computed in the browser, so it is instant and the visitor
 * never has to leave details to see it. When it finishes, the answers (no
 * personal data) are stored in the background for Aphelion's own analysis;
 * name and phone only travel if the visitor asks for a call.
 *
 * The palette comes from the vertical: clinical blues for health, the site's
 * neutral black and white for everything else.
 */

const ENTRY_TTL_MS = 5 * 60 * 1000;

function readEntry(slug: string): "selector" | "direct" {
  try {
    const raw = window.sessionStorage.getItem(ENTRY_KEY);
    if (!raw) return "direct";
    const { s, t } = JSON.parse(raw) as { s?: string; t?: number };
    return s === slug && typeof t === "number" && Date.now() - t < ENTRY_TTL_MS
      ? "selector"
      : "direct";
  } catch {
    return "direct";
  }
}

function newAttemptId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    // Older browsers: RFC 4122 v4 from getRandomValues.
    const b = crypto.getRandomValues(new Uint8Array(16));
    b[6] = (b[6] & 0x0f) | 0x40;
    b[8] = (b[8] & 0x3f) | 0x80;
    const h = Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
    return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
  }
}

export function Diagnostico({ vertical }: { vertical: DiagnosticoVertical }) {
  const t = useT();
  const { lang } = useLang();
  const { theme } = useTheme();
  const C = diagnosticoPalette(vertical.palette, theme);
  const Icon = vertical.icon;
  const total = vertical.questions.length;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);
  const [capture, setCapture] = useState(false);

  const attemptRef = useRef<string | null>(null);
  const entryRef = useRef<"selector" | "direct">("direct");
  const startedRef = useRef(false);

  useEffect(() => {
    entryRef.current = readEntry(vertical.slug);
  }, [vertical.slug]);

  // The result and the form are shorter than a long result page, so without
  // this a phone is left looking at the footer after tapping "Agendar".
  const cardRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [done, capture]);

  const q = vertical.questions[step];
  const answered = Object.keys(answers).length;
  const progress = done ? 100 : Math.round((answered / total) * 100);

  const result = useMemo(() => scoreDiagnostic(vertical, answers), [vertical, answers]);

  const pixelParams = () => ({ industry: vertical.slug, entry_type: entryRef.current });

  function choose(index: number) {
    if (!attemptRef.current) attemptRef.current = newAttemptId();
    if (!startedRef.current) {
      startedRef.current = true;
      trackCustom("BusinessAssessmentStarted", pixelParams());
    }
    const next = { ...answers, [q.id]: index };
    setAnswers(next);
    if (step + 1 < total) {
      setStep(step + 1);
      return;
    }
    setDone(true);
    trackCustom("BusinessAssessmentCompleted", pixelParams());
    // Background, fire and forget: the visitor already has their result.
    void saveDiagnostic({
      data: {
        attemptId: attemptRef.current,
        vertical: vertical.slug,
        lang,
        entry: entryRef.current,
        answers: next,
        attribution: readAttribution(),
      },
    }).catch(() => {});
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setDone(false);
    setCapture(false);
    attemptRef.current = null;
    startedRef.current = false;
  }

  return (
    <main className="min-h-screen px-5 py-16 sm:py-24" style={{ background: C.bg }}>
      <div className="mx-auto max-w-2xl">
        <header className="mb-10 text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-[0.08em] uppercase"
            style={{ borderColor: `${C.soft}80`, backgroundColor: C.glass, color: C.deep }}
          >
            <Icon className="h-3.5 w-3.5" />
            {t("Free diagnostic", "Diagnóstico gratuito")} · {t(vertical.labelEn, vertical.label)}
          </span>
          <h1
            className="mt-6 text-3xl font-medium tracking-[-0.03em] sm:text-4xl"
            style={{ color: C.deep }}
          >
            {t(vertical.titleEn, vertical.title)}
          </h1>
          {!done && (
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              {t(vertical.introEn, vertical.intro)}
            </p>
          )}
        </header>

        <div
          ref={cardRef}
          className="scroll-mt-24 rounded-[28px] border p-6 backdrop-blur-xl sm:p-9"
          style={{ borderColor: C.glassBorder, backgroundColor: C.glass, boxShadow: C.shadow }}
        >
          <div className="mb-8">
            <div className="mb-2.5 flex items-center justify-between text-xs font-medium text-neutral-500 dark:text-neutral-400">
              <span>
                {done
                  ? t("Complete", "Completo")
                  : `${step + 1} / ${total} · ${t(q.topicEn, q.topic)}`}
              </span>
              <span>{progress}%</span>
            </div>
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, background: rampProgress(C) }}
              />
            </div>
          </div>

          {capture ? (
            <PlanForm
              C={C}
              lang={lang}
              onBack={() => setCapture(false)}
              transcript={buildSummary({ vertical, answers, result, lang })}
              vertical={vertical}
              attemptId={attemptRef.current}
            />
          ) : done ? (
            <Resultado
              result={result}
              lang={lang}
              onRestart={restart}
              onRequestPlan={() => setCapture(true)}
              vertical={vertical}
              C={C}
            />
          ) : (
            <>
              <h2
                className="text-xl leading-snug font-medium tracking-[-0.02em] sm:text-2xl"
                style={{ color: C.deep }}
              >
                {t(q.questionEn, q.question)}
              </h2>
              {q.hint && (
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {t(q.hintEn ?? q.hint, q.hint)}
                </p>
              )}
              <div className="mt-7 space-y-3">
                {q.options.map((o, i) => {
                  const selected = answers[q.id] === i;
                  const soft = o.value === null;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => choose(i)}
                      aria-pressed={selected}
                      className="group flex w-full items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition hover:brightness-[1.03]"
                      style={{
                        borderColor: selected ? C.mid : `${C.soft}66`,
                        backgroundColor: C.card,
                        boxShadow: selected ? `inset 0 0 0 1px ${C.mid}` : undefined,
                      }}
                    >
                      <span
                        className={`text-sm font-medium sm:text-base ${
                          soft
                            ? "text-neutral-500 dark:text-neutral-400"
                            : "text-neutral-800 dark:text-neutral-100"
                        }`}
                      >
                        {t(o.labelEn, o.label)}
                      </span>
                      {selected ? (
                        <Check className="h-4 w-4 shrink-0" style={{ color: C.mid }} />
                      ) : (
                        <ArrowRight
                          className="h-4 w-4 shrink-0 transition group-hover:translate-x-1"
                          style={{ color: C.mid }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 flex items-center justify-between gap-4">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    {t("Back", "Atrás")}
                  </button>
                ) : (
                  <Link
                    to="/recursos/diagnostico"
                    search={langSearch(lang)}
                    className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    <LayoutGrid className="h-3.5 w-3.5" />
                    {t("Change industry", "Cambiar de giro")}
                  </Link>
                )}
              </div>
            </>
          )}
        </div>

        {!done && (
          <p className="mt-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
            {t(
              "No email required to see your result. We store answers without personal data to improve this tool.",
              "No pedimos correo para ver tu resultado. Guardamos las respuestas sin datos personales para mejorar esta herramienta.",
            )}
          </p>
        )}
      </div>
    </main>
  );
}

function Resultado({
  result,
  lang,
  onRestart,
  onRequestPlan,
  vertical,
  C,
}: {
  result: DiagnosticResult;
  lang: Lang;
  onRestart: () => void;
  onRequestPlan: () => void;
  vertical: DiagnosticoVertical;
  C: DiagnosticoPalette;
}) {
  const t = useT();
  const { score, gaps, wins, unknown, partial } = result;
  const banda = score !== null ? bandaFor(score, vertical) : null;
  const top = gaps.slice(0, 3);
  const rest = gaps.slice(3);
  const es = lang === "es";

  return (
    <div>
      {banda && score !== null ? (
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.14em] text-neutral-500 uppercase dark:text-neutral-400">
            {t("Your score", "Tu puntaje")}
          </p>
          <p
            className="mt-2 text-6xl font-medium tracking-[-0.04em] tabular-nums sm:text-7xl"
            style={{ color: C.deep }}
          >
            {score}
            <span className="text-2xl text-neutral-400 dark:text-neutral-500">/100</span>
          </p>
          <p className="mt-3 text-lg font-medium" style={{ color: C.mid }}>
            {t(banda.labelEn, banda.label)}
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            {t(banda.blurbEn, banda.blurb)}
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.14em] text-neutral-500 uppercase dark:text-neutral-400">
            {t("Partial result", "Resultado parcial")}
          </p>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-700 dark:text-neutral-200">
            {t(
              `You answered "Not sure" to ${unknown.length} questions, so a single number would not be honest. Below is what we could read from your answers, and what is worth confirming.`,
              `Respondiste "No lo sé" en ${unknown.length} preguntas, así que un solo número no sería honesto. Abajo está lo que sí pudimos leer de tus respuestas y lo que conviene confirmar.`,
            )}
          </p>
        </div>
      )}

      {top.length > 0 && (
        <div className="mt-10">
          <h3 className="text-sm font-medium tracking-[0.08em] text-neutral-500 uppercase dark:text-neutral-400">
            {t("Priorities, in order", "Prioridades, en orden")}
          </h3>
          <ol className="mt-4 space-y-3">
            {top.map((g, i) =>
              g.gap ? (
                <li
                  key={g.id}
                  className="rounded-2xl border p-5"
                  style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium"
                      style={{ backgroundImage: rampButton(C), color: C.onDeep }}
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-medium" style={{ color: C.deep }}>
                        {es ? g.gap.title : g.gap.titleEn}
                      </p>
                      {g.gap.free && (
                        <span
                          className="mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium"
                          style={{ backgroundColor: `${C.soft}40`, color: C.deep }}
                        >
                          <Check className="h-3 w-3" />
                          {t(
                            "Free tool — included in our setup service",
                            "Herramienta gratuita — incluida en el servicio de configuración",
                          )}
                        </span>
                      )}
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {es ? g.gap.why : g.gap.whyEn}
                      </p>
                      {g.gap.href && (
                        <Link
                          to={g.gap.href}
                          search={langSearch(lang)}
                          className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-neutral-300 underline-offset-4 transition hover:decoration-current"
                          style={{ color: C.mid }}
                        >
                          {t("How to fix it", "Cómo se arregla")}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
              ) : null,
            )}
          </ol>
        </div>
      )}

      {rest.length > 0 && (
        <div className="mt-7">
          <h3 className="text-sm font-medium tracking-[0.08em] text-neutral-500 uppercase dark:text-neutral-400">
            {t("Next steps", "Siguientes pasos")}
          </h3>
          <ul className="mt-3 space-y-1.5">
            {rest.map((g) => (
              <li key={g.id} className="text-sm text-neutral-600 dark:text-neutral-300">
                · {g.gap ? (es ? g.gap.title : g.gap.titleEn) : t(g.topicEn, g.topic)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {unknown.length > 0 && (
        <div
          className="mt-7 rounded-2xl border p-5"
          style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
        >
          <h3 className="flex items-center gap-2 text-sm font-medium" style={{ color: C.deep }}>
            <HelpCircle className="h-4 w-4" style={{ color: C.mid }} />
            {t("Worth confirming", "Por confirmar")}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            {t(
              "These did not count for or against you. Knowing them is the first step, and we can check them together on a call.",
              "Estas no te sumaron ni te restaron. Saberlas es el primer paso, y las podemos revisar juntos en una llamada.",
            )}
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {unknown.map((u) => (
              <li key={u.id} className="text-sm text-neutral-700 dark:text-neutral-200">
                · {t(u.topicEn, u.topic)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {wins.length > 0 && (
        <div className="mt-7 rounded-2xl p-5" style={{ backgroundColor: `${C.soft}26` }}>
          <h3 className="text-sm font-medium" style={{ color: C.deep }}>
            {t("What is already working", "Lo que ya funciona")}
          </h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {wins.map((w) => (
              <li
                key={w.id}
                className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-200"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: C.mid }} />
                {t(w.topicEn, w.topic)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Nothing to sell when there are no gaps, so content is the honest offer. */}
      {gaps.length === 0 && !partial && (
        <>
          <div className="mt-8">
            <BlogTeaserSection
              categories={vertical.blogCategories}
              count={2}
              lang={lang}
              title="Worth reading anyway"
              titleEs="Vale la pena leer de todos modos"
            />
          </div>
          <p
            className="mt-8 rounded-2xl p-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200"
            style={{ backgroundColor: C.card }}
          >
            {t(
              "Nothing on this list is missing. That is rare, and it means the next gains come from optimisation rather than construction. A call would be about measurement and margin, not about building.",
              "No te falta nada de esta lista. Es poco común, y significa que las siguientes ganancias vienen de optimizar y no de construir. Una llamada sería sobre medición y margen, no sobre construir.",
            )}
          </p>
        </>
      )}

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onRequestPlan}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition hover:opacity-90"
          style={{ backgroundImage: rampButton(C), color: C.onDeep }}
        >
          {t("Schedule a review call", "Agendar una llamada de revisión")}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-medium text-neutral-700 transition hover:brightness-[1.03] dark:text-neutral-200"
          style={{ borderColor: `${C.soft}66`, backgroundColor: C.card }}
        >
          <RotateCcw className="h-3.5 w-3.5" />
          {t("Retake diagnostic", "Volver a hacer el diagnóstico")}
        </button>
      </div>

      <p className="mt-5 text-center text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        {t(
          `Scored across ${scoredQuestions(vertical).length} weighted factors. This result is based on your answers and Aphelion's own criteria; it is not a technical audit or an industry benchmark.`,
          `Puntuación sobre ${scoredQuestions(vertical).length} factores ponderados. Este resultado se basa en tus respuestas y en criterios de Aphelion; no es una auditoría técnica ni un estándar de la industria.`,
        )}
      </p>
      <p className="mt-2 text-center text-xs">
        <Link
          to="/recursos/diagnostico"
          search={langSearch(lang)}
          className="text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          {t("Take it for another industry", "Hacerlo para otro giro")}
        </Link>
      </p>
    </div>
  );
}

/**
 * The plain-text summary that lands in the inbox and in leads.transcript. It
 * has to be readable without opening the site: industry, score, ordered gaps,
 * what to confirm, every answer, and where the visit came from.
 */
function buildSummary({
  vertical,
  answers,
  result,
  lang,
}: {
  vertical: DiagnosticoVertical;
  answers: Answers;
  result: DiagnosticResult;
  lang: Lang;
}): string {
  const r = result;
  const banda = bandaFor(r.rawScore, vertical);
  const scoreLine =
    r.score !== null
      ? `${r.score}/100 — ${banda.label}`
      : `Parcial (${r.rawScore}/100 sobre lo contestado, cobertura ${Math.round(r.coverage * 100)}%)`;
  const lines: string[] = [
    `Giro: ${vertical.label} (${vertical.slug}, v${vertical.version})`,
    `Respondió en: ${lang === "es" ? "español" : "inglés"}`,
    `Puntaje: ${scoreLine}`,
    `Origen de la visita: ${describeAttribution(readAttribution())}`,
    "",
    "Prioridades, en orden:",
    ...(r.gaps.length
      ? r.gaps.map((g, i) => `${i + 1}. ${g.gap?.title ?? g.topic}`)
      : ["— Ninguna"]),
    "",
    "Por confirmar (respondió «No lo sé»):",
    ...(r.unknown.length ? r.unknown.map((u) => `· ${u.topic}`) : ["— Nada"]),
    "",
    "Lo que ya tiene bien:",
    ...(r.wins.length ? r.wins.map((w) => `· ${w.topic}`) : ["— Nada por ahora"]),
    "",
    "Respuestas:",
    ...vertical.questions.map((q) => {
      const o = q.options[answers[q.id]];
      return `· ${q.topic}: ${o ? o.label : "—"}`;
    }),
  ];
  return lines.join("\n");
}

function PlanForm({
  C,
  lang,
  onBack,
  transcript,
  vertical,
  attemptId,
}: {
  C: DiagnosticoPalette;
  lang: Lang;
  onBack: () => void;
  transcript: string;
  vertical: DiagnosticoVertical;
  attemptId: string | null;
}) {
  const t = useT();
  const [form, setForm] = useState({ name: "", company: "", city: "", phone: "", email: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || (!form.phone.trim() && !form.email.trim())) return;
    setState("sending");
    try {
      const res = await submitLead({
        data: {
          source: "diagnostic",
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: `Diagnóstico · ${vertical.label}`,
          message: [
            `Solicita una llamada de revisión de su diagnóstico (${vertical.label}).`,
            form.city.trim() ? `Ciudad: ${form.city.trim()}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
          transcript,
          path:
            typeof window !== "undefined" ? window.location.pathname + window.location.search : "",
          sessionId: attemptId ?? undefined,
        },
      });
      if (res?.ok) {
        setState("sent");
        // Only after the lead is really stored or emailed, never on click.
        trackStandard(
          "Lead",
          { content_category: vertical.slug, content_name: "diagnostico" },
          attemptId ?? undefined,
        );
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="py-6 text-center">
        <span
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full"
          style={{ backgroundImage: rampButton(C), color: C.onDeep }}
        >
          <Check className="h-5 w-5" />
        </span>
        <h2 className="mt-5 text-xl font-medium" style={{ color: C.deep }}>
          {t("Request received", "Solicitud recibida")}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {t(
            "We received your diagnostic. Our team will contact you to schedule a no-commitment review call and prepare a tailored proposal.",
            "Recibimos tu diagnóstico. Nuestro equipo se pondrá en contacto para agendar una llamada sin compromiso y preparar una propuesta a la medida.",
          )}
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-2xl border px-4 py-3 text-base outline-none transition focus:brightness-[1.03] sm:text-sm";
  const fieldStyle = { borderColor: `${C.soft}66`, backgroundColor: C.card };

  return (
    <form onSubmit={submit}>
      <h2
        className="text-xl leading-snug font-medium tracking-[-0.02em] sm:text-2xl"
        style={{ color: C.deep }}
      >
        {t("Schedule your diagnostic review", "Agenda la revisión de tu diagnóstico")}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        {t(
          "Leave your details and our team will contact you to schedule a no-commitment call. We will prepare a tailored proposal based on the gaps identified in your diagnostic.",
          "Déjanos tus datos y nuestro equipo se pondrá en contacto para agendar una llamada sin compromiso. Prepararemos una propuesta a la medida a partir de los puntos detectados en tu diagnóstico.",
        )}
      </p>

      <div className="mt-6 space-y-3">
        <input
          className={field}
          style={fieldStyle}
          placeholder={t("Name", "Nombre")}
          value={form.name}
          onChange={set("name")}
          required
          maxLength={120}
          autoComplete="name"
        />
        <input
          className={field}
          style={fieldStyle}
          placeholder={
            vertical.palette === "clinical"
              ? t("Clinic or practice", "Clínica o consultorio")
              : t("Business name", "Nombre del negocio")
          }
          value={form.company}
          onChange={set("company")}
          maxLength={120}
          autoComplete="organization"
        />
        <input
          className={field}
          style={fieldStyle}
          placeholder={t("City (optional)", "Ciudad (opcional)")}
          value={form.city}
          onChange={set("city")}
          maxLength={80}
          autoComplete="address-level2"
        />
        <input
          className={field}
          style={fieldStyle}
          placeholder={t("Phone or WhatsApp", "Teléfono o WhatsApp")}
          value={form.phone}
          onChange={set("phone")}
          inputMode="tel"
          maxLength={40}
          autoComplete="tel"
        />
        <input
          className={field}
          style={fieldStyle}
          placeholder={t("Email", "Correo")}
          value={form.email}
          onChange={set("email")}
          type="email"
          maxLength={160}
          autoComplete="email"
        />
      </div>

      <p className="mt-3 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        {t(
          "We use your details only to contact you about this diagnostic.",
          "Usamos tus datos solo para contactarte sobre este diagnóstico.",
        )}{" "}
        <Link
          to="/privacidad"
          search={langSearch(lang)}
          className="underline decoration-neutral-300 underline-offset-4 hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          {t("Privacy notice", "Aviso de privacidad")}
        </Link>
      </p>

      {state === "error" && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400">
          {t(
            "We could not send it. Try again in a moment.",
            "No pudimos enviarlo. Inténtalo de nuevo en un momento.",
          )}
        </p>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition hover:opacity-90 disabled:opacity-60"
          style={{ backgroundImage: rampButton(C), color: C.onDeep }}
        >
          {state === "sending" ? t("Sending…", "Enviando…") : t("Send", "Enviar")}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-medium text-neutral-700 transition hover:brightness-[1.03] dark:text-neutral-200"
          style={fieldStyle}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t("Back to my result", "Volver a mi resultado")}
        </button>
      </div>
    </form>
  );
}
