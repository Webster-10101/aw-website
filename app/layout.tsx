import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alistair Webster",
  description: "Coach and consultant",
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
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} antialiased font-sans`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

