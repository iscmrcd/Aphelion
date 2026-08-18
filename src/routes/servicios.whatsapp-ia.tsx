import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * The service moved from /servicios/whatsapp-ia to /servicios/agente-ia when it
 * was repositioned from a WhatsApp-specific product to an embeddable website
 * chat agent. The old URL was already in the sitemap we submitted, so it
 * redirects permanently instead of 404ing and losing whatever Google indexed.
 */
export const Route = createFileRoute("/servicios/whatsapp-ia")({
  beforeLoad: () => {
    throw redirect({ to: "/servicios/agente-ia", statusCode: 301 });
  },
});
