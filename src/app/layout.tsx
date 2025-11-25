import type { Metadata } from "next";
import { alata, manrope } from "./fonts";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "@/components/ui/Footer";
import { Toaster } from "sonner";

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
        url: "/og_image.png", // Replace with your actual image
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
    images: ["/og_image.png"], // Replace with your actual image
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
    <html lang="en" className="h-full">
      <body
        className={`${alata.variable} ${manrope.variable} antialiased min-h-dvh flex flex-col`}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
