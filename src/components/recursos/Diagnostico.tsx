import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Gift, RotateCcw, Stethoscope } from "lucide-react";
import { useT, useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import {
  clinicalPalette,
  rampButton,
  rampProgress,
  type ClinicalPalette,
} from "@/lib/clinical-theme";
import { BlogTeaserSection } from "@/components/blog/BlogTeaserSection";
import { bandaFor, totalWeight, type DiagnosticoVertical } from "@/lib/diagnostico-data";

/**
 * Diagnostic runner.
 *
 * Scoring happens entirely in the browser so the result is instant and no
 * personal data leaves the page unless the visitor asks for the plan by email.
 *
 * Palette note: the clinical blues below are local to this component. The rest
 * of the site is deliberately neutral, and the colour ramp with a gradient is
 * reserved for Conversational AI, so these are plain hex values scoped here
 * rather than new global tokens.
 */

export function Diagnostico({ vertical }: { vertical: DiagnosticoVertical }) {
  const t = useT();
  const { lang } = useLang();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);
  const total = totalWeight(vertical);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);

  const q = vertical.questions[step];
  const answered = Object.keys(answers).length;
  const progress = done ? 100 : Math.round((answered / vertical.questions.length) * 100);

  const score = useMemo(() => {
    const raw = vertical.questions.reduce(
      (a, question) => a + (answers[question.id] ?? 0) * question.weight,
      0,
    );
    return Math.round((raw / total) * 100);
  }, [answers, vertical.questions, total]);

  /** Gaps ordered by how much they cost, which is the question weight. */
  const gaps = useMemo(
    () =>
      vertical.questions
        .filter((question) => (answers[question.id] ?? 0) < 0.6)
        .sort((a, b) => b.weight - a.weight),
    [answers, vertical.questions],
  );

  const wins = useMemo(
    () => vertical.questions.filter((question) => (answers[question.id] ?? 0) >= 0.6),
    [answers, vertical.questions],
  );

  function choose(value: number) {
    const next = { ...answers, [q.id]: value };
    setAnswers(next);
    if (step + 1 < vertical.questions.length) setStep(step + 1);
    else setDone(true);
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setDone(false);
  }

  return (
    <main className="min-h-screen px-5 py-16 sm:py-24" style={{ background: C.bg }}>
      <div className="mx-auto max-w-2xl">
        <header className="mb-10 text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-[0.08em] uppercase"
            style={{ borderColor: `${C.soft}80`, backgroundColor: C.glass, color: C.deep }}
          >
            <Stethoscope className="h-3.5 w-3.5" />
            {t("Free diagnostic", "Diagnóstico gratuito")}
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
          className="rounded-[28px] border p-6 shadow-[0_20px_60px_-30px_rgba(18,65,79,0.45)] backdrop-blur-xl sm:p-9"
          style={{ borderColor: C.glassBorder, backgroundColor: C.glass }}
        >
          <div className="mb-8">
            <div className="mb-2.5 flex items-center justify-between text-xs font-medium text-neutral-500 dark:text-neutral-400">
              <span>
                {done
                  ? t("Complete", "Completo")
                  : `${step + 1} / ${vertical.questions.length} · ${t(q.topicEn, q.topic)}`}
              </span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: rampProgress(C),
                }}
              />
            </div>
          </div>

          {done ? (
            <Resultado
              score={score}
              gaps={gaps}
              wins={wins}
              lang={lang}
              onRestart={restart}
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
              <div className="mt-7 space-y-3">
                {q.options.map((o) => (
                  <button
                    key={o.label}
                    type="button"
                    onClick={() => choose(o.value)}
                    className="group flex w-full items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition hover:brightness-[1.03]"
                    style={{ borderColor: `${C.soft}66`, backgroundColor: C.card }}
                  >
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100 sm:text-base">
                      {t(o.labelEn, o.label)}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 transition group-hover:translate-x-1"
                      style={{ color: C.mid }}
                    />
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="mt-7 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  {t("Back", "Atrás")}
                </button>
              )}
            </>
          )}
        </div>

        {!done && (
          <p className="mt-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
            {t("No email required to see your result.", "No pedimos correo para ver tu resultado.")}
          </p>
        )}
      </div>
    </main>
  );
}

function Resultado({
  score,
  gaps,
  wins,
  lang,
  onRestart,
  vertical,
  C,
}: {
  score: number;
  gaps: DiagnosticoVertical["questions"];
  wins: DiagnosticoVertical["questions"];
  lang: "en" | "es";
  onRestart: () => void;
  vertical: DiagnosticoVertical;
  C: ClinicalPalette;
}) {
  const t = useT();
  const banda = bandaFor(score);
  const top = gaps.slice(0, 3);
  const rest = gaps.slice(3);

  return (
    <div>
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

      {top.length > 0 && (
        <div className="mt-10">
          <h3 className="text-sm font-medium tracking-[0.08em] text-neutral-500 uppercase dark:text-neutral-400">
            {t("Fix these first, in this order", "Arregla esto primero, en este orden")}
          </h3>
          <ol className="mt-4 space-y-3">
            {top.map((g, i) => (
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
                      {lang === "es" ? g.gap.title : g.gap.titleEn}
                    </p>
                    {g.gap.free && (
                      <span
                        className="mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium"
                        style={{ backgroundColor: `${C.soft}40`, color: C.deep }}
                      >
                        <Gift className="h-3 w-3" />
                        {t("Free, and we do not sell it", "Gratis, y no te lo vendemos")}
                      </span>
                    )}
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {lang === "es" ? g.gap.why : g.gap.whyEn}
                    </p>
                    {g.gap.href && (
                      <Link
                        to={g.gap.href}
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
            ))}
          </ol>
        </div>
      )}

      {rest.length > 0 && (
        <div className="mt-7">
          <h3 className="text-sm font-medium tracking-[0.08em] text-neutral-500 uppercase dark:text-neutral-400">
            {t("Then these", "Después estos")}
          </h3>
          <ul className="mt-3 space-y-1.5">
            {rest.map((g) => (
              <li key={g.id} className="text-sm text-neutral-600 dark:text-neutral-300">
                · {lang === "es" ? g.gap.title : g.gap.titleEn}
              </li>
            ))}
          </ul>
        </div>
      )}

      {wins.length > 0 && (
        <div className="mt-7 rounded-2xl p-5" style={{ backgroundColor: `${C.soft}26` }}>
          <h3 className="text-sm font-medium" style={{ color: C.deep }}>
            {t("What you already have right", "Lo que ya tienes bien")}
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
      {gaps.length === 0 && (
        <div className="mt-8">
          <BlogTeaserSection
            categories={["Medical Marketing", "Marketing Médico"]}
            count={2}
            lang={lang}
            title="Worth reading anyway"
            titleEs="Vale la pena leer de todos modos"
          />
        </div>
      )}

      {gaps.length === 0 && (
        <p
          className="mt-8 rounded-2xl p-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200"
          style={{ backgroundColor: C.card }}
        >
          {t(
            "Nothing on this list is missing. That is rare, and it means the next gains come from optimisation rather than construction. A call would be about measurement and margin, not about building.",
            "No te falta nada de esta lista. Es poco común, y significa que las siguientes ganancias vienen de optimizar y no de construir. Una llamada sería sobre medición y margen, no sobre construir.",
          )}
        </p>
      )}

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/contacto"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition hover:opacity-90"
          style={{ backgroundImage: rampButton(C), color: C.onDeep }}
        >
          {t("Talk through the plan", "Revisar el plan en una llamada")}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-medium text-neutral-700 transition hover:brightness-[1.03] dark:text-neutral-200"
          style={{ borderColor: `${C.soft}66`, backgroundColor: C.card }}
        >
          <RotateCcw className="h-3.5 w-3.5" />
          {t("Start over", "Empezar de nuevo")}
        </button>
      </div>

      <p className="mt-5 text-center text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        {t(
          `Scored across ${vertical.questions.length} factors weighted by how much each one typically costs a practice.`,
          `Calculado sobre ${vertical.questions.length} factores, ponderados por lo que cada uno suele costarle a un consultorio.`,
        )}
      </p>
    </div>
  );
}
