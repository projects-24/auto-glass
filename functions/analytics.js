// Lightweight wrappers around the Google tag (gtag.js, AW-18174522353).
// All calls no-op safely if gtag hasn't loaded (e.g. ad-blockers, SSR).

export const GA_TAG_ID = "AW-18174522353"

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}

// Fired when a visitor taps a click-to-call link.
export function trackCall(phone) {
  trackEvent("phone_call", { phone })
  trackEvent("conversion", { send_to: GA_TAG_ID })
}

// Fired when a quote/contact form is submitted successfully.
export function trackLead(extra = {}) {
  trackEvent("generate_lead", extra)
  trackEvent("conversion", { send_to: GA_TAG_ID })
}
