import type { Metadata } from "next";
import { alata, manrope } from "./fonts";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "@/components/ui/Footer";
import { Toaster } from "sonner";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Swediana - Flytthjälp, Städning & Bygg i Uppsala",
    template: "%s | Swediana",
  },
  description:
    "Swediana erbjuder professionell flytthjälp, flyttstäd, byggstäd och företagsstädning i Uppsala.",
  keywords: [
    "Swediana",
    "flytthjälp Uppsala",
    "flyttstäd Uppsala",
    "byggstäd Uppsala",
    "företagsstädning Uppsala",
    "flyttfirma Uppsala",
    "städfirma Uppsala",
    "professionell städning",
    "flyttjänster",
    "RUT-avdrag",
  ],
  authors: [{ name: "Swediana" }],
  creator: "Swediana",
  publisher: "Swediana",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://www.swediana.se",
    siteName: "Swediana",
    title: "Swediana - Flytthjälp, Städning & Bygg i Uppsala",
    description:
      "Professionell flytthjälp, flyttstäd, byggstäd och företagsstädning i Uppsala.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Swediana - Flytthjälp och Städning i Uppsala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swediana - Flytthjälp, Städning & Bygg i Uppsala",
    description:
      "Professionell flytthjälp, flyttstäd, byggstäd och företagsstädning i Uppsala.",
    images: ["/og_image.png"],
  },
  alternates: {
    canonical: "https://www.swediana.se",
  },
  category: "services",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className="h-full">
      <head>
        <meta name="apple-mobile-web-app-title" content="Swediana" />
        {/* Google Tag Manager script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P4B23ZJP');
          `}
        </Script>

        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X6VVYMMNEC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X6VVYMMNEC');
          `}
        </Script>
      </head>

      <body
        className={`${alata.variable} ${manrope.variable} antialiased min-h-dvh flex flex-col`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P4B23ZJP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End GTM noscript */}

        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
