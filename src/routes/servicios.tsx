import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Hero } from "@/components/servicios/Hero";
import { CategoryBento } from "@/components/servicios/CategoryBento";
import { WebsitesSection } from "@/components/servicios/WebsitesSection";
import { CategoryPlaceholders } from "@/components/servicios/CategoryPlaceholders";
import { FAQ } from "@/components/servicios/FAQ";
import { CTAFooter } from "@/components/servicios/CTAFooter";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Aphelion" },
      {
        name: "description",
        content:
          "Websites, marketing, contenido, video y SaaS para marcas high-ticket. Seis niveles de páginas web — de presencia profesional a plataformas SaaS.",
      },
      { property: "og:title", content: "Servicios — Aphelion" },
      {
        property: "og:description",
        content:
          "Infraestructura digital para marcas que no se conforman. Seis niveles de websites más servicios complementarios.",
      },
    ],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  const websitesRef = useRef<HTMLDivElement>(null);
  const scrollToWebsites = () =>
    websitesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950 antialiased selection:bg-neutral-950 selection:text-white">
      <Hero onCta={scrollToWebsites} />
      <CategoryBento onWebsites={scrollToWebsites} />
      <WebsitesSection ref={websitesRef} />
      <CategoryPlaceholders />
      <FAQ />
      <CTAFooter />
    </main>
  );
}
