import localFont from "next/font/local";
import 'funuicss/css/fun.css'
import "./assets/style/_style.css";
import "./assets/style/_Slide.css";
import "aos/dist/aos.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Auto Glass Gurus: Get you windshield repaired",
  description: "Expert auto glass services across Canada—windshield repair and replacement, side and rear window fixes, 24/7 emergency response, and advanced ADAS calibration. Fast, certified, and precise care for over 3,000 vehicle models. Book your service today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
