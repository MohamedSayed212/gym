import "./globals.css";
import { AppProvider } from "../context/AppContext";

export const metadata = {
  title: "Iron Pulse Gym | Premium Fitness Memberships",
  description: "A premium bilingual gym website with online booking and a Supabase-powered admin dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
