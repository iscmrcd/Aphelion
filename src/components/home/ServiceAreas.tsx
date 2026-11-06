import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Code2, Megaphone, Workflow } from "lucide-react";
import { useT } from "@/lib/i18n";
import { useTouchActive } from "@/hooks/use-touch-active";
import grad2 from "@/assets/banners/gradient-2.jpg.asset.json";
import grad5 from "@/assets/banners/gradient-5.avif.asset.json";
import grad6 from "@/assets/banners/gradient-6.avif.asset.json";

type AreaRoute = "/servicios/websites" | "/servicios/marketing" | "/servicios/automatizacion";

type Area = {
  key: string;
  route: AreaRoute;
  icon: typeof Code2;
  gradient: string;
  title: string;
  problem: string;
  items: string[];
  price: string;
  priceNote: string;
  cta: string;
};

/**
 * The three ways in: websites, marketing and automation. Everything else
 * (drone, branding) is listed underneath as a complementary service, so the
 * visitor understands the big areas first and the specific service after.
 */
export function ServiceAreas() {
  const t = useT();

  const AREAS: Area[] = [
    {
      key: "web",
      route: "/servicios/websites",
      icon: Code2,
      gradient: grad2.url,
      title: t("Websites", "Sitios web"),
      problem: t(
        "A site that presents you well and turns visits into messages.",
        "Una página que te presenta bien y convierte visitas en mensajes.",
      ),
      items: [
        t("Business sites and landing pages", "Páginas empresariales y landing pages"),
        t("Online stores", "Tiendas en línea"),
        t("Campaign tracking ready from day one", "Medición de campañas lista desde el día uno"),
      ],
      price: t("From $9,900 MXN", "Desde $9,900 MXN"),
      priceNote: t("+ upkeep from $190 / month", "+ mantenimiento desde $190 al mes"),
      cta: t("See websites", "Ver sitios web"),
    },
    {
      key: "marketing",
      route: "/servicios/marketing",
      icon: Megaphone,
      gradient: grad5.url,
      title: t("Marketing & content", "Marketing y contenido"),
      problem: t(
        "Real content and campaigns that bring in new clients.",
        "Contenido real y campañas que traen clientes nuevos.",
      ),
      items: [
        t(
          "Social media and Meta, Google and TikTok ads",
          "Redes y campañas en Meta, Google y TikTok",
        ),
        t("Photo, video and reels", "Fotografía, video y reels"),
        t("Aerial drone footage", "Tomas aéreas con dron"),
      ],
      price: t("From $6,450 MXN / month", "Desde $6,450 MXN al mes"),
      priceNote: t(
        "+ VAT · ad spend paid to the platforms",
        "+ IVA · la pauta se paga a las plataformas",
      ),
      cta: t("See marketing", "Ver marketing"),
    },
    {
      key: "automatizacion",
      route: "/servicios/automatizacion",
      icon: Workflow,
      gradient: grad6.url,
      title: t("Automation & systems", "Automatización y sistemas"),
      problem: t(
        "No message left unanswered, and an operation that doesn't live in WhatsApp and spreadsheets.",
        "Que ningún mensaje se quede sin respuesta y tu operación no viva en WhatsApp y Excel.",
      ),
      items: [
        t(
          "AI agent that answers, qualifies and books",
          "Agente de IA que responde, califica y agenda",
        ),
        t("Booking, CRM and automatic follow-up", "Agenda, CRM y seguimiento automático"),
        t("Custom systems and client portals", "Sistemas y portales a medida"),
      ],
      price: t("Systems from $59,500 MXN", "Sistemas desde $59,500 MXN"),
      priceNote: t("AI agent quoted by volume", "Agente IA según volumen de mensajes"),
      cta: t("See automation", "Ver automatización"),
    },
  ];

  return (
    <section
      id="servicios"
      className="scroll-mt-20 border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            {t("Services", "Servicios")}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.025em] text-neutral-950 sm:text-5xl">
            {t("Three ways we help you grow.", "Tres formas de hacer crecer tu negocio.")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {AREAS.map((a, i) => (
            <AreaCard key={a.key} area={a} index={i + 1} />
          ))}
        </div>

        <p className="mt-8 text-sm text-neutral-500">
          {t("Also: ", "También: ")}
          <Link
            to="/servicios/video-con-dron"
            className="font-medium text-neutral-950 underline-offset-4 hover:underline"
          >
            {t("drone video", "video con dron")}
          </Link>
          {" · "}
          <Link
            to="/branding"
            className="font-medium text-neutral-950 underline-offset-4 hover:underline"
          >
            branding
          </Link>
        </p>
      </div>
    </section>
  );
}

function AreaCard({ area: a, index }: { area: Area; index: number }) {
  const { ref, active } = useTouchActive<HTMLAnchorElement>();
  const Icon = a.icon;

  // Every text colour has a hover/active twin: on top of the gradient the
  // card reads white, as the website tier cards do.
  const on = "transition group-hover:text-white group-data-[active=true]:text-white";

  return (
    <Link
      ref={ref}
      to={a.route}
      data-active={active ? "true" : "false"}
      className="group relative flex flex-col md:min-h-[440px] overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-950 data-[active=true]:border-neutral-950 sm:p-7"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 scale-105 opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100 group-data-[active=true]:scale-100 group-data-[active=true]:opacity-100"
        style={{
          backgroundImage: `url(${a.gradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative flex items-center justify-between">
        <span
          className={`text-xs font-medium tabular-nums tracking-[0.14em] text-neutral-500 ${on}`}
        >
          0{index}
        </span>
        <ArrowUpRight className={`h-5 w-5 text-neutral-400 ${on}`} />
      </div>

      <Icon className={`relative mt-6 h-6 w-6 md:mt-10 text-neutral-950 ${on}`} strokeWidth={1.5} />
      <h3
        className={`relative mt-4 text-2xl font-medium tracking-[-0.02em] text-neutral-950 ${on}`}
      >
        {a.title}
      </h3>
      <p
        className={`relative mt-2 text-sm leading-relaxed text-neutral-500 transition group-hover:text-white/85 group-data-[active=true]:text-white/85`}
      >
        {a.problem}
      </p>

      <ul
        className={`relative mt-6 space-y-2 border-t border-dashed border-neutral-300 pt-5 transition group-hover:border-white/30 group-data-[active=true]:border-white/30`}
      >
        {a.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-neutral-800 transition group-hover:text-white/90 group-data-[active=true]:text-white/90"
          >
            <Check
              className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-neutral-950 ${on}`}
              strokeWidth={2.5}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-auto pt-6 md:pt-8">
        <p className={`text-lg font-medium tabular-nums tracking-[-0.01em] text-neutral-950 ${on}`}>
          {a.price}
        </p>
        <p className="mt-0.5 text-xs text-neutral-500 transition group-hover:text-white/70 group-data-[active=true]:text-white/70">
          {a.priceNote}
        </p>
        <span className={`mt-5 inline-flex text-sm font-medium text-neutral-950 ${on}`}>
          {a.cta} →
        </span>
      </div>
    </Link>
  );
}
