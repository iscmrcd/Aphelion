/**
 * Google Business Profile mark.
 *
 * simple-icons dropped the Google My Business slug, so the pin is drawn here
 * in Google's four brand colours instead of shipping a "GBP" text placeholder.
 */
export function GoogleBusinessIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Google Business Profile">
      <defs>
        <clipPath id="gbp-pin">
          <path d="M12 1.6c-4.2 0-7.6 3.3-7.6 7.4 0 5.5 6.7 12.3 7 12.6.3.3.9.3 1.2 0 .3-.3 7-7.1 7-12.6 0-4.1-3.4-7.4-7.6-7.4z" />
        </clipPath>
      </defs>
      <g clipPath="url(#gbp-pin)">
        <rect x="0" y="0" width="12" height="11" fill="#EA4335" />
        <rect x="12" y="0" width="12" height="11" fill="#FBBC05" />
        <rect x="0" y="11" width="12" height="13" fill="#34A853" />
        <rect x="12" y="11" width="12" height="13" fill="#4285F4" />
      </g>
      <circle cx="12" cy="9" r="3.1" fill="#fff" />
    </svg>
  );
}
