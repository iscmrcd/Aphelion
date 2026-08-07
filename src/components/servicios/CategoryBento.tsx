import { Code2, Megaphone, Camera, Boxes, Sparkles, ArrowUpRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";

function DroneIcon({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* rotors */}
      <path d="M2.5 5h5M2.5 5c0-.8.6-1.4 1.4-1.4S5.3 4.2 5.3 5M5 5c0-.8.6-1.4 1.4-1.4S7.8 4.2 7.8 5" />
      <path d="M16.5 5h5M16.5 5c0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4M19 5c0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4" />
      {/* arms */}
      <path d="M5 5.4 8.8 9.2M19 5.4 15.2 9.2" />
      {/* body */}
      <rect x="8.5" y="9" width="7" height="5" rx="1.6" />
      {/* gimbal camera */}
      <path d="M12 14v1.6" />
      <circle cx="12" cy="17.6" r="2" />
      {/* landing legs */}
      <path d="M8.8 14 6.6 18.5M15.2 14l2.2 4.5" />
    </svg>
  );
}


export function CategoryBento({ onWebsites }: { onWebsites: () => void }) {
  const navigate = useNavigate();
  const t = useT();

  const CATEGORIES = [
    {
      key: "web",
      title: t("Websites", "Websites"),
      desc: t("Six tiers, from presence to SaaS.", "Seis niveles, de presencia a SaaS."),
      icon: Code2,
      status: "active" as const,
      route: "/servicios/websites" as const,
    },
    {
      key: "marketing",
      title: t("Marketing & Content", "Marketing & Contenido"),
      desc: t("Content + Meta · Google · TikTok.", "Contenido + Meta · Google · TikTok."),
      icon: Megaphone,
      status: "active" as const,
      route: "/servicios/marketing" as const,
    },
    {
      key: "contenido",
      title: t("Content Production", "Producción de Contenido"),
      desc: t("Photo, video, reels, and monthly editorial.", "Foto, video, reels y editorial mensual."),
      icon: Camera,
      status: "soon" as const,
    },
    {
      key: "dron",
      title: t("Drone", "Drone"),
      desc: t("Aerial video and photography.", "Video y fotografía aérea."),
      icon: Video,
      status: "active" as const,
      route: "/servicios/video-con-dron" as const,
    },

    {
      key: "saas",
      title: t("Custom SaaS", "SaaS a Medida"),
      desc: t("Multi-user platforms.", "Plataformas multiusuario."),
      icon: Boxes,
      status: "soon" as const,
    },
    {
      key: "branding",
      title: t("Branding", "Branding"),
      desc: t("Identity and visual systems.", "Identidad y sistema visual."),
      icon: Sparkles,
      status: "soon" as const,
    },
  ];

  return (
    <section className="border-t border-neutral-200 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("Services", "Servicios")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-neutral-950 sm:text-4xl">
            {t("One agency. Your entire infrastructure.", "Una agencia. Toda tu infraestructura.")}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            const isActive = c.status === "active";
            const handleClick = () => {
              if (c.key === "web") return onWebsites();
              if (isActive && c.route) return navigate({ to: c.route });
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
            };
            return (
              <button
                key={c.key}
                onClick={handleClick}
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
                        {t("Get a quote", "Cotización")}
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
