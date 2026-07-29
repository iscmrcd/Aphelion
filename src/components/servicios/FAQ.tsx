import { useState } from "react";
import { Plus } from "lucide-react";
import { useWebsitesData } from "@/lib/content";
import { useT } from "@/lib/i18n";

export function FAQ() {
  const { FAQ_WEB } = useWebsitesData();
  const [open, setOpen] = useState<number | null>(0);
  const t = useT();
  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("Frequently asked questions", "Preguntas frecuentes")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            {t("What people ask us.", "Lo que la gente nos pregunta.")}
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQ_WEB.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-neutral-950">{f.q}</span>
                  <Plus
                    className={`h-4 w-4 flex-shrink-0 text-neutral-500 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pr-8 text-sm leading-relaxed text-neutral-500">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
