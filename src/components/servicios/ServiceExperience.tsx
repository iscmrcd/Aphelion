import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { useT } from "@/lib/i18n";
import { Reveal } from "./Motion";

export function ServiceHeroContent({
  eyebrow,
  title,
  description,
  anchor = "planes",
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  anchor?: string;
  action?: string;
}) {
  const t = useT();
  return (
    <div className="mx-auto max-w-6xl">
      <Link
        to="/servicios"
        className="mb-10 inline-flex items-center gap-2 text-xs text-white/60 transition hover:text-white"
      >
        {t("Services", "Servicios")}
        <span aria-hidden="true">/</span>
        {eyebrow}
      </Link>
      <h1 className="max-w-4xl text-[clamp(2.6rem,6.6vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-white">
        {title}
      </h1>
      <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
        {description}
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <Link
          to="/contacto"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
        >
          {t("Let's talk about your project", "Hablemos de tu proyecto")}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
        <a
          href={`#${anchor}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm text-white transition hover:border-white"
        >
          {action ?? t("Explore options", "Explorar opciones")}
          <ArrowDown aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export function ServiceBenefits({
  eyebrow,
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: { title: string; description: string }[];
}) {
  const t = useT();
  return (
    <section className="border-t border-neutral-200 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="studio-eyebrow">
            {eyebrow ?? t("Designed for your business", "Pensado para tu negocio")}
          </p>
          <h2 className="studio-heading mt-4 max-w-3xl">{title}</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="border-t border-neutral-200 pt-5">
                <span className="font-mono text-xs text-neutral-400">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceTimeline({ steps }: { steps: { title: string; description: string }[] }) {
  const t = useT();
  return (
    <section className="border-t border-neutral-200 bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="studio-eyebrow">{t("The process", "El proceso")}</p>
          <h2 className="studio-heading mt-4">
            {t("From the first idea\nto the launch.", "De la primera idea\na la puesta en marcha.")}
          </h2>
        </Reveal>
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {steps.map((step, index) => (
            <Reveal key={step.title}>
              <div className="flex gap-5 py-6">
                <span className="mt-1 font-mono text-xs text-neutral-400">0{index + 1}</span>
                <div>
                  <h3 className="text-base font-medium">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectScope({
  title,
  description,
  to,
  label,
}: {
  title: string;
  description: string;
  to: "/servicios/automatizacion" | "/servicios/produccion" | "/servicios/agente-ia";
  label: string;
}) {
  return (
    <Reveal className="mt-10">
      <div className="flex flex-col justify-between gap-6 rounded-2xl border border-neutral-200 bg-white p-7 sm:flex-row sm:items-center">
        <div className="max-w-2xl">
          <h3 className="text-lg font-medium tracking-tight">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">{description}</p>
        </div>
        <Link to={to} className="inline-flex shrink-0 items-center gap-2 text-sm font-medium">
          {label}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </Reveal>
  );
}

export function IncludedList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
          <Check aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0" strokeWidth={1.7} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
