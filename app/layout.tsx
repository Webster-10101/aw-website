import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alistair Webster",
  description: "Coach and consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="antialiased bg-stone-50 text-stone-900">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

