import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Check,
  Mail,
  MessageSquare,
  Monitor,
  Pause,
  Play,
  RotateCcw,
  Smartphone,
  Stethoscope,
  User,
} from "lucide-react";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { clinicalPalette } from "@/lib/clinical-theme";

/**
 * Interactive illustration of an appointment flow.
 *
 * Labelled as an illustration rather than dressed up as a product screenshot,
 * because presenting a mockup as a real dashboard with real patient data would
 * misrepresent it. The names and times below are obviously fictional.
 *
 * Honours prefers-reduced-motion: the sequence does not auto-play for visitors
 * who asked the OS to reduce motion, and they get the finished state plus a
 * manual replay instead.
 */
const STEP_MS = 1400;
const TOTAL_STEPS = 5;

export function AppointmentPanelDemo() {
  const t = useT();
  const { theme } = useTheme();
  const C = clinicalPalette(theme);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = mq.matches;
    if (mq.matches) setStep(TOTAL_STEPS);
    else setPlaying(true);
  }, []);

  useEffect(() => {
    if (!playing) return;
    if (step >= TOTAL_STEPS) {
      setPlaying(false);
      return;
    }
    const id = window.setTimeout(() => setStep((s) => s + 1), STEP_MS);
    return () => window.clearTimeout(id);
  }, [playing, step]);

  const on = (n: number) => step >= n;

  function replay() {
    setStep(0);
    setPlaying(true);
  }

  const steps: { label: string; labelEn: string }[] = [
    { label: "El paciente agenda desde tu sitio", labelEn: "The patient books from your site" },
    { label: "La cita entra a tu panel", labelEn: "The appointment lands in your panel" },
    { label: "Se avisa al paciente", labelEn: "The patient is notified" },
    { label: "Se avisa al consultorio", labelEn: "The practice is notified" },
    {
      label: "Se sincroniza y se programa el recordatorio",
      labelEn: "It syncs and the reminder is scheduled",
    },
  ];

  return (
    <div
      className="rounded-[28px] border p-5 shadow-[0_20px_60px_-30px_rgba(18,65,79,0.4)] backdrop-blur-xl sm:p-8"
      style={{ borderColor: C.glassBorder, backgroundColor: C.glass }}
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-[0.14em] uppercase" style={{ color: C.mid }}>
            {t("Interactive illustration", "Ilustración interactiva")}
          </p>
          <h3
            className="mt-1.5 text-lg font-medium tracking-[-0.02em] sm:text-xl"
            style={{ color: C.deep }}
          >
            {t("What happens after a patient books", "Qué pasa cuando un paciente agenda")}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => (step >= TOTAL_STEPS ? replay() : setPlaying(!playing))}
            aria-label={
              step >= TOTAL_STEPS
                ? t("Replay", "Repetir")
                : playing
                  ? t("Pause", "Pausar")
                  : t("Play", "Reproducir")
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition hover:brightness-[1.05]"
            style={{ borderColor: `${C.soft}66`, backgroundColor: C.card, color: C.deep }}
          >
            {step >= TOTAL_STEPS ? (
              <RotateCcw className="h-4 w-4" />
            ) : playing ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* current step caption */}
      <p className="mb-5 text-sm" style={{ color: C.mid }}>
        {step === 0
          ? t("Ready.", "Listo.")
          : t(
              steps[Math.min(step, TOTAL_STEPS) - 1].labelEn,
              steps[Math.min(step, TOTAL_STEPS) - 1].label,
            )}
      </p>

      <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr]">
        {/* panel */}
        <div
          className="rounded-2xl border p-4"
          style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
        >
          <div className="mb-3 flex items-center gap-2">
            <Monitor className="h-3.5 w-3.5" style={{ color: C.mid }} />
            <span className="text-xs font-medium" style={{ color: C.deep }}>
              {t("Your panel", "Tu panel")}
            </span>
            <span className="ml-auto text-[11px] text-neutral-500 dark:text-neutral-400">
              {t("Today", "Hoy")}
            </span>
          </div>

          <ul className="space-y-2">
            <PanelRow C={C} time="09:00" name="Laura M." reason={t("Check-up", "Revisión")} muted />
            <PanelRow
              C={C}
              time="10:30"
              name="Ricardo T."
              reason={t("Cleaning", "Limpieza")}
              muted
            />
            <li
              className={`overflow-hidden rounded-xl border transition-all duration-500 ${
                on(2) ? "max-h-24 opacity-100" : "max-h-0 border-transparent opacity-0"
              }`}
              style={{
                borderColor: on(2) ? C.mid : "transparent",
                backgroundColor: on(2) ? `${C.soft}26` : "transparent",
              }}
            >
              <div className="flex items-center gap-3 p-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: C.deep, color: C.onDeep }}
                >
                  <User className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium" style={{ color: C.deep }}>
                    12:00 · Ana G.
                  </p>
                  <p className="truncate text-xs text-neutral-600 dark:text-neutral-300">
                    {t("New patient · Consultation", "Paciente nuevo · Consulta")}
                  </p>
                </div>
                <span
                  className="ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium"
                  style={{ backgroundColor: C.deep, color: C.onDeep }}
                >
                  {t("New", "Nueva")}
                </span>
              </div>
            </li>
          </ul>

          <div
            className={`mt-3 flex items-center gap-2 rounded-xl px-3 py-2 transition-opacity duration-500 ${
              on(1) ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundColor: `${C.soft}1f` }}
          >
            <CalendarDays className="h-3.5 w-3.5 shrink-0" style={{ color: C.mid }} />
            <span className="text-[11px] text-neutral-700 dark:text-neutral-200">
              {t(
                "Booked from your website, not a directory.",
                "Agendada desde tu sitio, no desde un directorio.",
              )}
            </span>
          </div>
        </div>

        {/* notifications + sync */}
        <div className="space-y-3">
          <Group
            C={C}
            title={t("To the patient", "Al paciente")}
            icon={<User className="h-3.5 w-3.5" />}
          >
            <Chip C={C} on={on(3)} icon={<MessageSquare className="h-3 w-3" />} label="WhatsApp" />
            <Chip C={C} on={on(3)} icon={<Smartphone className="h-3 w-3" />} label="SMS" />
            <Chip
              C={C}
              on={on(3)}
              icon={<Mail className="h-3 w-3" />}
              label={t("Email", "Correo")}
            />
          </Group>

          <Group
            C={C}
            title={t("To the practice", "Al consultorio")}
            icon={<Stethoscope className="h-3.5 w-3.5" />}
          >
            <Chip C={C} on={on(4)} icon={<MessageSquare className="h-3 w-3" />} label="WhatsApp" />
            <Chip
              C={C}
              on={on(4)}
              icon={<Mail className="h-3 w-3" />}
              label={t("Email", "Correo")}
            />
          </Group>

          <Group
            C={C}
            title={t("Calendar sync", "Sincronización")}
            icon={<CalendarDays className="h-3.5 w-3.5" />}
          >
            <Chip C={C} on={on(5)} label="Google Calendar" />
            <Chip C={C} on={on(5)} label="Apple Calendar" />
          </Group>

          <div
            className={`rounded-xl border p-3 transition-all duration-500 ${
              on(5) ? "opacity-100" : "opacity-40"
            }`}
            style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
          >
            <p className="flex items-center gap-2 text-xs" style={{ color: C.deep }}>
              <Check className="h-3.5 w-3.5" style={{ color: on(5) ? C.mid : "transparent" }} />
              {t(
                "Reminder scheduled 24 h before, with confirm and cancel.",
                "Recordatorio programado 24 h antes, con confirmar y cancelar.",
              )}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
        {t(
          "Illustration with fictional data. Which channels and integrations apply is defined per project.",
          "Ilustración con datos ficticios. Qué canales e integraciones aplican se define por proyecto.",
        )}
      </p>
    </div>
  );
}

function PanelRow({
  C,
  time,
  name,
  reason,
  muted,
}: {
  C: ReturnType<typeof clinicalPalette>;
  time: string;
  name: string;
  reason: string;
  muted?: boolean;
}) {
  return (
    <li
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${muted ? "opacity-60" : ""}`}
      style={{ backgroundColor: `${C.soft}14` }}
    >
      <span className="text-xs tabular-nums" style={{ color: C.mid }}>
        {time}
      </span>
      <span className="text-sm text-neutral-700 dark:text-neutral-200">{name}</span>
      <span className="ml-auto text-[11px] text-neutral-500 dark:text-neutral-400">{reason}</span>
    </li>
  );
}

function Group({
  C,
  title,
  icon,
  children,
}: {
  C: ReturnType<typeof clinicalPalette>;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl border p-3.5"
      style={{ borderColor: `${C.soft}59`, backgroundColor: C.card }}
    >
      <p className="mb-2.5 flex items-center gap-1.5 text-xs font-medium" style={{ color: C.deep }}>
        <span style={{ color: C.mid }}>{icon}</span>
        {title}
      </p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({
  C,
  on,
  icon,
  label,
}: {
  C: ReturnType<typeof clinicalPalette>;
  on: boolean;
  icon?: React.ReactNode;
  label: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all duration-500"
      style={{
        borderColor: on ? C.mid : `${C.soft}40`,
        backgroundColor: on ? `${C.soft}33` : "transparent",
        color: on ? C.deep : C.soft,
      }}
    >
      {icon}
      {label}
      {on && <Check className="h-2.5 w-2.5" />}
    </span>
  );
}
