import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Audit Digital Gratuit — ClientX | Agence Marketing Digital",
  description:
    "Analysez votre visibilité digitale en 20 min avec les experts ClientX. Certifiés ISO 9001. Plus de 200 entreprises accompagnées depuis 2013.",
  openGraph: {
    title: "Audit Digital Gratuit — ClientX",
    description: "20 minutes pour identifier ce qui vous coûte des clients.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased bg-white text-[#111]">{children}</body>
    </html>
  );
}
