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
// asset is not on any icon CDN, and the whole strip renders monochrome anyway.
const GoogleBusinessMark = (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
    <path
      d="M12 22s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"
      fill="currentColor"
    />
    <path
      d="M8 8.6h8M8.6 10.6h6.8v3.6H8.6z"
      stroke="#fff"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
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
  { slug: "odoo", label: "Odoo" },
  { slug: "zoho", label: "Zoho" },
];

function BrandItem({ brand }: { brand: Brand }) {
  return (
    <div className="group flex w-28 shrink-0 flex-col items-center justify-start gap-2 sm:w-32">
      <div className="flex h-9 items-center justify-center text-neutral-400 transition duration-300 group-hover:text-neutral-900">
        {brand.node ?? (
          <img
            src={brand.src ?? `https://cdn.simpleicons.org/${brand.slug}`}
            alt={`${brand.label} logo`}
            loading="lazy"
            className={`${brand.size ?? "h-7"} w-auto max-w-[104px] object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0`}
          />
        )}
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
