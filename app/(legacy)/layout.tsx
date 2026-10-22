import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FathomEvents from "@/components/FathomEvents";

const siteUrl = "https://alistairwebster.com";

export const metadata: Metadata = {
  title: {
    default: "Alistair Webster — Speaking Coach, AI Consultant & Community Builder",
    template: "%s — Alistair Webster",
  },
  description:
    "Speaking and confidence coach, Freelancing for Good co-founder, and AI consultant. Based in Edinburgh.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Alistair Webster",
    title: "Alistair Webster — Speaking Coach, AI Consultant & Community Builder",
    description:
      "Speaking and confidence coach, Freelancing for Good co-founder, and AI consultant. Based in Edinburgh.",
    images: [
      {
        url: "/images/alistair-webster.jpg",
        width: 800,
        height: 800,
        alt: "Alistair Webster",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Alistair Webster — Speaking Coach, AI Consultant & Community Builder",
    description:
      "Speaking and confidence coach, Freelancing for Good co-founder, and AI consultant. Based in Edinburgh.",
    images: ["/images/alistair-webster.jpg"],
  },
};

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <script src="https://cdn.usefathom.com/script.js" data-site="BVRLOARP" defer />
      </head>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} antialiased font-sans`}
      >
        <FathomEvents />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

