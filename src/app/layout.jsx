import { Alexandria, Manrope } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../context/AppContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["500", "600", "700", "800"],
});

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Iron Pulse Gym | Premium Fitness Memberships",
  description: "A premium bilingual gym website with online booking and a Supabase-powered admin dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${manrope.variable} ${alexandria.variable} dark`}
      suppressHydrationWarning
    >
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
