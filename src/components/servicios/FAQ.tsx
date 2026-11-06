import { Plus } from "lucide-react";
import { useWebsitesData } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { Reveal } from "./Motion";

export function FAQ({ items }: { items?: { q: string; a: string }[] }) {
  const { FAQ_WEB } = useWebsitesData();
  const t = useT();
  const faqs = items ?? FAQ_WEB;
  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-10">
          <p className="studio-eyebrow">
            {t("Frequently asked questions", "Preguntas frecuentes")}
          </p>
          <h2 className="studio-heading mt-4">{t("Before we begin.", "Antes de empezar.")}</h2>
        </Reveal>
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((item) => (
            <details key={item.q} className="plan-details">
              <summary className="flex cursor-pointer items-start justify-between gap-5 py-5 text-base font-medium">
                <span>{item.q}</span>
                <Plus
                  aria-hidden="true"
                  className="details-icon mt-1 h-4 w-4 shrink-0 text-neutral-500 transition-transform"
                />
              </summary>
              <p className="pb-6 pr-8 text-sm leading-relaxed text-neutral-500">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
