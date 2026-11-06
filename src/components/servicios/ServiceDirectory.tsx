import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Workflow, Aperture } from "lucide-react";
import { useT } from "@/lib/i18n";
import { InteractiveSurface, Reveal } from "./Motion";
import webImage from "@/assets/banners/gradient-1.jpg.asset.json";
import marketingImage from "@/assets/banners/gradient-3.png.asset.json";
import systemsImage from "@/assets/banners/gradient-5.avif.asset.json";

export function ServiceDirectory({ showHeading = true }: { showHeading?: boolean }) {
  const t = useT();
  const services = [
    {
      number: "01",
      icon: Code2,
      image: webImage.url,
      to: "/servicios/websites" as const,
      title: t("Websites", "Sitios web"),
      description: t(
        "Present what you do clearly and make it easy for website visitors to get in touch.",
        "Presenta lo que haces con claridad y facilita que quien visita tu sitio te contacte.",
      ),
      tags: t(
        "Business websites · Landing pages · Online stores",
        "Páginas empresariales · Landing pages · Tiendas",
      ),
      action: t("Explore web design", "Explorar diseño web"),
    },
    {
      number: "02",
      icon: Aperture,
      image: marketingImage.url,
      to: "/servicios/marketing" as const,
      title: t("Marketing & content", "Marketing y contenido"),
      description: t(
        "Original content to keep your social channels active, with managed campaign options.",
        "Contenido propio para mantener tus redes activas, con opciones de campañas administradas.",
      ),
      tags: t(
        "Social media · Campaigns · Photo & video",
        "Redes sociales · Campañas · Foto y video",
      ),
      action: t("Explore marketing", "Explorar marketing"),
    },
    {
      number: "03",
      icon: Workflow,
      image: systemsImage.url,
      to: "/servicios/automatizacion" as const,
      title: t("Automation & systems", "Automatización y sistemas"),
      description: t(
        "Organise the enquiries, appointments and records currently spread across messages and spreadsheets.",
        "Organiza consultas, citas y datos que hoy resuelves entre mensajes y hojas de cálculo.",
      ),
      tags: t(
        "AI agents · Scheduling · Custom software",
        "Agentes IA · Agendas · Software a medida",
      ),
      action: t("Explore automation", "Explorar automatización"),
    },
  ];

  return (
    <section
      id="servicios"
      aria-label={t("Our services", "Nuestros servicios")}
      className="scroll-mt-24 border-t border-neutral-200 px-5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {showHeading && (
          <Reveal className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="studio-eyebrow">{t("What we do", "Lo que hacemos")}</p>
              <h2 className="studio-heading mt-4">
                {t(
                  "The right pieces.\nWorking together.",
                  "Las piezas correctas.\nTrabajando juntas.",
                )}
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
              {t(
                "Start with what your business needs today. We help you connect the rest.",
                "Empieza por lo que tu negocio necesita hoy. Te ayudamos a conectar lo demás.",
              )}
            </p>
          </Reveal>
        )}
        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 70} className="h-full">
              <InteractiveSurface
                image={service.image}
                className="service-surface h-full rounded-3xl border border-neutral-200 bg-white"
              >
                <Link to={service.to} className="relative flex h-full flex-col p-7 sm:p-8">
                  <div className="mb-16 flex items-center justify-between">
                    <service.icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.3} />
                    <span className="service-muted text-xs tracking-widest text-neutral-400">
                      /{service.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium tracking-[-0.025em]">{service.title}</h3>
                  <p className="service-muted mt-4 text-sm leading-relaxed text-neutral-500">
                    {service.description}
                  </p>
                  <p className="service-muted mt-6 text-[11px] leading-relaxed text-neutral-400">
                    {service.tags}
                  </p>
                  <div className="mt-auto pt-9">
                    <span className="flex items-center justify-between border-t border-current/15 pt-5 text-sm font-medium">
                      {service.action}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </InteractiveSurface>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm">
          <p className="text-neutral-500">
            {t(
              "Need a single production or a brand identity?",
              "¿Buscas una producción puntual o una identidad de marca?",
            )}
          </p>
          <Link
            to="/servicios"
            hash="especialidades"
            className="inline-flex items-center gap-2 font-medium underline decoration-neutral-300 underline-offset-4"
          >
            {t("Explore all services", "Ver todos los servicios")}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServiceSpecialties() {
  const t = useT();
  const specialties = [
    {
      to: "/servicios/produccion" as const,
      name: t("Photo & video production", "Producción de foto y video"),
      description: t(
        "Reels, brand films and original photography.",
        "Reels, comerciales y fotografía original.",
      ),
    },
    {
      to: "/servicios/video-con-dron" as const,
      name: t("Drone video", "Video con dron"),
      description: t(
        "Aerial views of spaces, events and developments.",
        "Tomas aéreas de espacios, eventos y desarrollos.",
      ),
    },
    {
      to: "/branding" as const,
      name: t("Brand identity", "Identidad de marca"),
      description: t(
        "A visual identity you can apply consistently.",
        "Una identidad visual que puedas aplicar con coherencia.",
      ),
    },
    {
      to: "/servicios/agente-ia" as const,
      name: t("AI agents", "Agentes de IA"),
      description: t(
        "Try live demos before planning your implementation.",
        "Prueba las demos antes de planear tu implementación.",
      ),
    },
    {
      to: "/seo" as const,
      name: "SEO",
      description: t(
        "Help customers find your business in search.",
        "Ayuda a tus clientes a encontrarte en buscadores.",
      ),
    },
    {
      to: "/ecommerce" as const,
      name: t("Online stores", "Tiendas en línea"),
      description: t(
        "Your catalog, payments and purchasing experience.",
        "Tu catálogo, pagos y experiencia de compra.",
      ),
    },
  ];
  return (
    <section
      id="especialidades"
      className="scroll-mt-24 border-t border-neutral-200 px-5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="studio-eyebrow">{t("Specialist services", "Servicios especializados")}</p>
          <h2 className="studio-heading mt-4">
            {t(
              "A specific need.\nA focused project.",
              "Una necesidad concreta.\nUn proyecto enfocado.",
            )}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {specialties.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex items-center justify-between gap-5 border-t border-neutral-200 py-7"
            >
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="mt-2 text-sm text-neutral-500">{item.description}</p>
              </div>
              <ArrowUpRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-neutral-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-950"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
