import 'funuicss/css/fun.css'
import "./assets/style/_style.css";
import "./assets/style/_Slide.css";
import "aos/dist/aos.css"
import AosInit from "@/components/AosInit"


const BASE_URL = "https://www.autoglassgurus.ca"

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AutoGlass Gurus — Windshield Repair & Replacement in Ontario",
    template: "%s | AutoGlass Gurus",
  },
  description: "AutoGlass Gurus offers expert windshield repair and replacement across Ontario — Etobicoke, Mississauga, Barrie, Oakville, Hamilton, Guelph, Kitchener & more. 24/7 emergency service, we pay up to 100% of your deductible, lifetime warranty. Book your free quote today!",
  keywords: [
    // Services
    "auto glass repair", "auto glass replacement", "windshield repair", "windshield replacement",
    "windshield chip repair", "cracked windshield repair", "rear window replacement",
    "side window replacement", "door glass replacement", "ADAS calibration",
    "emergency windshield repair", "mobile windshield repair", "same day windshield replacement",
    // Brand + intent
    "autoglass gurus", "auto glass gurus canada", "cheap windshield replacement ontario",
    "affordable windshield repair", "free windshield replacement insurance",
    "windshield deductible waiver ontario", "OEM windshield replacement",
    // Locations
    "auto glass etobicoke", "windshield repair etobicoke", "auto glass mississauga",
    "windshield repair mississauga", "auto glass barrie", "windshield repair barrie",
    "auto glass oakville", "auto glass hamilton", "auto glass guelph",
    "auto glass kitchener", "auto glass burlington", "auto glass brampton",
    "windshield replacement ontario", "auto glass ontario canada",
    "auto glass halton hills", "auto glass cambridge", "auto glass brantford",
    "auto glass collingwood", "auto glass orangeville", "auto glass grimsby",
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    siteName: "AutoGlass Gurus",
    type: "website",
    locale: "en_CA",
    url: BASE_URL,
    title: "AutoGlass Gurus — Windshield Repair & Replacement in Ontario",
    description: "24/7 auto glass repair across Ontario. We pay your deductible, lifetime warranty, mobile service. Serving Etobicoke, Barrie, Mississauga, Oakville, Hamilton & 25+ cities.",
    images: [{ url: "/banner.jpg", width: 1200, height: 630, alt: "AutoGlass Gurus — Ontario's Auto Glass Experts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoGlass Gurus — Windshield Repair in Ontario",
    description: "24/7 windshield repair & replacement across Ontario. We pay your deductible. Free quote online!",
    images: ["/banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
