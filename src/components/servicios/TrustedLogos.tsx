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

// OpenAI/ChatGPT knot: the icon set dropped this mark, so it's drawn inline
// with the same grey → brand-colour hover behaviour as the CDN logos.
const ChatGPTMark = (
  <span className="text-neutral-400 transition-colors duration-300 group-hover:text-[#10A37F]">
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
      <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6 6 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07Zm-9.02 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5ZM3.6 18.3a4.47 4.47 0 0 1-.54-3.01l.14.09 4.79 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.9a4.5 4.5 0 0 1-6.14-1.64ZM2.34 7.9a4.48 4.48 0 0 1 2.35-1.97V11.6a.77.77 0 0 0 .38.67l5.82 3.36-2.02 1.17a.08.08 0 0 1-.07 0L3.96 14a4.5 4.5 0 0 1-1.62-6.1Zm16.6 3.86-5.83-3.4L15.13 7.2a.08.08 0 0 1 .07 0l4.84 2.8a4.49 4.49 0 0 1-.68 8.1v-5.66a.79.79 0 0 0-.42-.68Zm2.01-3.02-.14-.09-4.78-2.79a.78.78 0 0 0-.79 0L9.4 9.23V6.9a.07.07 0 0 1 .03-.06l4.84-2.79a4.5 4.5 0 0 1 6.68 4.66Zm-12.6 4.13-2.03-1.16a.08.08 0 0 1-.04-.06V6.08a4.5 4.5 0 0 1 7.37-3.45l-.14.08L8.73 5.47a.79.79 0 0 0-.39.68l-.01 6.72Zm1.1-2.36L12.05 9l2.6 1.5v3l-2.6 1.5-2.6-1.5v-3Z" />
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
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    size: "h-8",
  },
  { slug: "supabase", label: "Supabase" },
  { slug: "calendly", label: "Calendly" },
  { slug: "wordpress", label: "WordPress" },
  { slug: "vercel", label: "Vercel" },
  { slug: "chatgpt", label: "ChatGPT", node: ChatGPTMark },
  { slug: "claude", label: "Claude" },
  { slug: "godaddy", label: "GoDaddy" },
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
