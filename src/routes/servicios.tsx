import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Hero } from "@/components/servicios/Hero";
import { TrustedLogos } from "@/components/servicios/TrustedLogos";
import { CategoryBento } from "@/components/servicios/CategoryBento";
import { WebsitesOverview } from "@/components/servicios/WebsitesOverview";
import { CategoryPlaceholders } from "@/components/servicios/CategoryPlaceholders";
import { CTAFooter } from "@/components/servicios/CTAFooter";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Aphelion" },
      {
        name: "description",
        content:
          "Websites, marketing, contenido, video y SaaS para marcas high-ticket. Infraestructura digital para marcas que no se conforman.",
      },
      { property: "og:title", content: "Servicios — Aphelion" },
      {
        property: "og:description",
        content:
          "Infraestructura digital para marcas que no se conforman. Websites en 6 niveles más servicios complementarios.",
      },
    ],
  }),
  ssr: false,
  component: ServiciosPage,
});

function ServiciosPage() {
  const navigate = useNavigate();
  const goWebsites = () => navigate({ to: "/servicios/websites" });

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <Hero onCta={goWebsites} />
      <TrustedLogos />
      <CategoryBento onWebsites={goWebsites} />
      <WebsitesOverview />
      <CategoryPlaceholders />
      <CTAFooter />
    </main>
  );
}
