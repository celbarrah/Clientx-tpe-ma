import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MB3WSPX3');`,
          }}
        />
      </head>
      <body className="antialiased bg-white text-[#111]">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MB3WSPX3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}