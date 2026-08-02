import { useT } from "@/lib/i18n";

type Brand = {
  slug: string;
  label: string;
  src?: string;
  /** Custom height class for wordmark-style logos */
  size?: string;
  node?: React.ReactNode;
};

// Google Business Profile mark (storefront pin) drawn inline: the official
// asset is not on any icon CDN. Grey by default, Google blue on hover to match
// the cross-fade the CDN marks get.
const GoogleBusinessMark = (
  <span className="text-neutral-400 transition-colors duration-300 group-hover:text-[#4285F4]">
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden="true">
      <path
        d="M12 23.2c0-.1 8-6.9 8-12.2a8 8 0 1 0-16 0c0 5.3 8 12.1 8 12.2Z"
        fill="currentColor"
      />
      <g fill="#fff">
        {/* storefront awning + shutter */}
        <path d="M6.6 6.7h10.8a.8.8 0 0 1 .78.62l.42 1.86a.6.6 0 0 1-.59.72H5.99a.6.6 0 0 1-.59-.72l.42-1.86a.8.8 0 0 1 .78-.62Z" />
        <path d="M7 11.1h10v4.6a.8.8 0 0 1-.8.8H7.8a.8.8 0 0 1-.8-.8v-4.6Z" opacity=".55" />
        <path d="M8.6 12.4h6.8v1.1H8.6zM8.6 14.2h6.8v1.1H8.6z" />
      </g>
    </svg>
  </span>
);

const BRANDS: Brand[] = [
  { slug: "meta", label: "Meta" },
  { slug: "facebook", label: "Facebook" },
  { slug: "instagram", label: "Instagram" },
  { slug: "tiktok", label: "TikTok" },
  { slug: "whatsapp", label: "WhatsApp" },
  { slug: "google", label: "Google" },
  { slug: "googleanalytics", label: "Google Analytics" },
  { slug: "googleads", label: "Google Ads" },
  { slug: "google-business", label: "Google Business", node: GoogleBusinessMark },
  { slug: "stripe", label: "Stripe" },
  { slug: "mercadopago", label: "Mercado Pago" },
  {
    slug: "aws",
    label: "AWS",
    src: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
  { slug: "supabase", label: "Supabase" },
  { slug: "calendly", label: "Calendly" },
  { slug: "odoo", label: "Odoo", size: "h-10" },
  { slug: "zoho", label: "Zoho", size: "h-10" },
];

function BrandItem({ brand }: { brand: Brand }) {
  const size = brand.size ?? "h-7";
  const base = `${size} w-auto max-w-[104px] object-contain transition-opacity duration-300`;

  return (
    <div className="group flex w-28 shrink-0 flex-col items-center justify-start gap-2 sm:w-32">
      <div className="flex h-11 items-center justify-center text-neutral-400 transition duration-300 group-hover:text-neutral-900">
        {brand.node ??
          (brand.src ? (
            <img
              src={brand.src}
              alt={`${brand.label} logo`}
              loading="lazy"
              className={`${base} opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0`}
            />
          ) : (
            // Two stacked marks: a neutral one by default, the true brand-colour
            // one revealed on hover. A CSS grayscale filter can't be undone on
            // single-colour SVGs served pre-tinted, so we cross-fade instead.
            <span className="relative inline-flex items-center justify-center">
              <img
                src={`https://cdn.simpleicons.org/${brand.slug}/a3a3a3`}
                alt={`${brand.label} logo`}
                loading="lazy"
                className={`${base} opacity-90 group-hover:opacity-0`}
              />
              <img
                src={`https://cdn.simpleicons.org/${brand.slug}`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={`${base} absolute inset-0 m-auto opacity-0 group-hover:opacity-100`}
              />
            </span>
          ))}
      </div>
      <span className="text-center text-[11px] font-medium leading-tight tracking-tight text-neutral-400 transition group-hover:text-neutral-950">
        {brand.label}
      </span>
    </div>
  );
}

export function TrustedLogos() {
  const t = useT();
  return (
    <section className="border-t border-neutral-200 bg-neutral-50 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 px-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
          {t("We integrate the platforms you already use", "Integramos las plataformas que ya usas")}
        </p>

        <div className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee items-start gap-4 group-hover/marquee:[animation-play-state:paused] sm:gap-8">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-start gap-4 sm:gap-8" aria-hidden={copy === 1}>
                {BRANDS.map((brand) => (
                  <BrandItem key={`${copy}-${brand.slug}`} brand={brand} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
