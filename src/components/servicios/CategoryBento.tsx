import { Code2, Megaphone, Camera, Video, Boxes, Sparkles, ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  { key: "web", title: "Websites", desc: "Seis niveles, de presencia a SaaS.", icon: Code2, status: "active" as const },
  { key: "marketing", title: "Marketing Digital", desc: "Meta · Google · TikTok.", icon: Megaphone, status: "soon" as const },
  { key: "contenido", title: "Contenido", desc: "Redes, reels y editorial.", icon: Camera, status: "soon" as const },
  { key: "video", title: "Video & Drone", desc: "Comerciales y tomas aéreas.", icon: Video, status: "soon" as const },
  { key: "saas", title: "SaaS a Medida", desc: "Plataformas multiusuario.", icon: Boxes, status: "soon" as const },
  { key: "branding", title: "Branding", desc: "Identidad y sistema visual.", icon: Sparkles, status: "soon" as const },
];

export function CategoryBento({ onWebsites }: { onWebsites: () => void }) {
  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            Servicios
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            Una agencia. Toda tu infraestructura.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            const isActive = c.status === "active";
            return (
              <button
                key={c.key}
                onClick={isActive ? onWebsites : () => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex flex-col rounded-3xl border border-neutral-200 bg-white p-6 text-left transition hover:border-neutral-950"
              >
                <div className="mb-8 flex items-center justify-between">
                  <Icon className="h-5 w-5 text-neutral-950" strokeWidth={1.5} />
                  <ArrowUpRight className="h-4 w-4 text-neutral-400 transition group-hover:text-neutral-950" />
                </div>
                <div className="mt-auto">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium text-neutral-950">{c.title}</h3>
                    {!isActive && (
                      <span className="rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                        Cotización
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-neutral-500">{c.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
