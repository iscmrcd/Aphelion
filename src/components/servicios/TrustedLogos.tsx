import { useT } from "@/lib/i18n";

// Official brand marks (Simple Icons CDN) rendered in grayscale, with the
// brand colour revealed on hover. Kept as <img> so the marks stay up to date.
const BRANDS: Array<{ slug: string; label: string; src?: string }> = [
  { slug: "meta", label: "Meta" },
  { slug: "facebook", label: "Facebook" },
  { slug: "instagram", label: "Instagram" },
  { slug: "tiktok", label: "TikTok" },
  { slug: "whatsapp", label: "WhatsApp" },
  { slug: "google", label: "Google" },
  { slug: "googleanalytics", label: "Google Analytics" },
  { slug: "googleads", label: "Google Ads" },
  { slug: "google-business", label: "Google Business", src: "https://cdn.simpleicons.org/google/9ca3af" },
  { slug: "stripe", label: "Stripe" },
  { slug: "mercadopago", label: "Mercado Pago" },
  {
    slug: "aws",
    label: "AWS",
    src: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
  { slug: "supabase", label: "Supabase" },
  { slug: "calendly", label: "Calendly" },
  { slug: "odoo", label: "Odoo" },
  { slug: "zoho", label: "Zoho" },
];

export function TrustedLogos() {
  const t = useT();
  return (
    <section className="border-t border-neutral-200 bg-neutral-50 px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
          {t("We integrate the platforms you already use", "Integramos las plataformas que ya usas")}
        </p>
        <div className="grid grid-cols-3 items-start gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-8">
          {BRANDS.map((brand) => (
            <div
              key={brand.slug}
              className="group flex flex-col items-center justify-start gap-2"
            >
              <img
                src={brand.src ?? `https://cdn.simpleicons.org/${brand.slug}/9ca3af`}
                alt={`${brand.label} logo`}
                loading="lazy"
                width={28}
                height={28}
                className="h-7 w-7 opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-95"
              />
              <span className="text-center text-[11px] font-medium leading-tight tracking-tight text-neutral-400 transition group-hover:text-neutral-950">
                {brand.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
