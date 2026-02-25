import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { Analytics } from "@/components/Analytics";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body-fallback",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IH Clinic by Dr. Indu Rekha | Women & Child Care in Homeopathy",
    template: "%s | IH Clinic",
  },
  description:
    "Women & child care in homeopathy. Tirupati-based clinic by Dr. Indu Rekha. PCOD, infertility, children's health, and more. Aude Sapere.",
  openGraph: {
    type: "website",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Analytics />
        <JsonLd />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
