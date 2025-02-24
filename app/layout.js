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
  title: "Auto Glass Gurus",
  description: "AutoGlass Gurus",
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
