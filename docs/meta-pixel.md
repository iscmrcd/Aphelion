# Meta Pixel — event map

Existing dataset: CRM Aphelion `2813619889012734`. No new pixel, token, connector, campaign or CAPI path. The existing web CAPI **has not been reconfigured or independently verified**. Browser event IDs are available for correlation, but this change does not establish browser/server deduplication without a matching ID and event name from that existing CAPI.

| Event | Successful trigger | Controlled parameters | ID / deduplication |
|---|---|---|---|
| PageView | Single initial permitted initialization | None | One root initialization; Meta retains its existing automatic history behavior, no router PageViews added |
| Lead | Contact `submitLead` returns `ok === true` | `content_name: contact_form`, `lead_source: contact-form` | `contact:<uuid>` per submitted attempt, ref lock before awaiting; event+ID deduplication |
| Lead | Actual chat returns `captured === true` | `content_name: aphelion_chat`, `lead_source: chat` | `chat:<sessionId>`, once per session across component remounts in the same document |
| Lead | Diagnostic `submitLead` returns `ok === true` | `content_name: diagnostico` | Existing attemptId, stable generated fallback only when absent; event+ID deduplication |
| Contact | Click on `wa.me`, `api.whatsapp.com`, `mailto:` or `tel:` | `content_name: contact_click`, `channel: whatsapp/email/phone` | One capturing document listener; once per click, no navigation prevention |

WhatsApp **Contact measures a click, not a confirmed conversation or sent message**. Internal `/contacto` links are not Contact. Contact clicks never generate Lead. Opening chat, asking a question, invalid submissions, exceptions and unsuccessful server responses are not conversions.

## Runtime and privacy

- Exact normalized host allowlist: `aphelion.mx`, `www.aphelion.mx`; previews, local/test and other published hosts are denied even in production builds.
- Base script moved from the unconditional production head snippet to the shared initializer after host/permission checks. Unconditional noscript beacon removed: it bypassed both checks.
- No-banner fallback: same-origin `/cdn-cgi/trace`, 2-second timeout, verified `h` and ISO country. EEA, UK, Switzerland and unknown/failed region resolution block loading and all helpers. Regional acceptance UI remains available as later setup; no silence interpreted as consent. No blocked-event replay.
- GPC, DNT and saved advertising/marketing refusals block events. Storage/change notifications revoke an initialized Pixel; every helper rechecks permission. No matching fields or automatic form matching are added. Existing Meta-side automatic collection settings remain unverified.
- Privacy notice now describes Meta, data, purposes, regional blocking and browser/contact withdrawal. Existing CAPI consent enforcement is **unverified and unchanged**, so this browser-only change cannot attest to site-wide CAPI compliance.
- New Lead/Contact parameters contain no names, emails, phone numbers, messages, companies, industries, hrefs or diagnostic results. Meta's browser SDK independently includes page context/cookies/device information; parameters alone are not a claim of anonymization.
- The diagnostic is a B2B business assessment, not a patient booking. Its existing custom assessment/industry events are preserved as requested, but their industry context warrants reviewing dataset restrictions in Events Manager before ad use. No patient/health-outcome tracking added.

## Validation

Run isolated tests with `node scripts/test-meta-pixel.mjs`. The runner uses the existing TypeScript dependency; no extra paid service or test framework is required. Tests mock browser globals, trace and fbq; they never load Meta or invoke backend submissions. Initial contact/chat UI checks used mocked server responses, without sending real forms, emails, SMS or chat messages.

Validation on November 4, 2026 (America/Tijuana): **13/13 isolated tests passed**. Initial Chromium UI checks with mocked server modules confirmed invalid contact submits invoke nothing, failed response shows recovery, successful response shows confirmation, and double-click issues one submission. Chat opening invoked nothing; mocked `captured: false/true` replies rendered normally. Localhost never initialized fbq. The final GitHub changes passed a local production build, TypeScript check and sitemap validation.

## Contact confirmation page

After a successful contact submission, the existing controlled Lead is sent and the router navigates to `/gracias`, preserving the active `lang` (`es` or `en`). `/contacto`, `/contacto?lang=es` and `/contacto?lang=en` use the same handler and event. No personal information goes into the confirmation URL. Failed responses and invalid forms stay on the form. The inline confirmation remains as a fallback if navigation fails.

`/gracias`, `/gracias?lang=es` and `/gracias?lang=en` render a bilingual confirmation, optional WhatsApp link and home link. They contain no Lead tracking code: direct visits and reloads are not leads. `noindex, follow` is set, and the sitemap generator excludes this route. Local browser review confirmed both languages, the no-query route and noindex metadata. The WhatsApp CTA uses the same delegated Contact event. Diagnostic and chat flows are not redirected. No URL-based Lead conversion rule should be added in Meta.

Build and typecheck are handled by the preview's automatic checks; do not interpret passing checks as provider receipt, attribution or optimization eligibility. Nothing has been published. Verify the published domains, permitted-region transmissions and Events Manager receipt after explicit publication approval. Empty/old event history is not repaired by creating a duplicate install. An outcome before region lookup finishes is intentionally blocked, not queued for later replay. A throwing SDK call is marked attempted to avoid an uncertain duplicate.
