import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fart Crypto - Real-time Cryptocurrency Analytics & Insights",
  description:
    "Track live cryptocurrency prices, market trends, and in-depth analytics with Fart Crypto. Stay ahead with real-time data, charts, and insights.",
  keywords: [
    "cryptocurrency",
    "crypto analytics",
    "bitcoin price",
    "ethereum trends",
    "crypto market",
    "blockchain insights",
    "crypto trading",
    "crypto charts",
    "live crypto data",
  ],
  icons: {
    icon: "/icon.webp", // Favicon
  },
  openGraph: {
    title: "Fart Crypto - Real-time Crypto Analytics & Market Insights",
    description:
      "Monitor live crypto prices, trends, and analytics with Fart Crypto. Stay informed with real-time market insights.",
    url: "https://fart-crypto.vercel.app",
    siteName: "Fart Crypto",
    images: [
      {
        url: "https://fart-crypto.vercel.app/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Fart Crypto - Cryptocurrency Market Analytics",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fart Crypto - Real-time Cryptocurrency Analytics",
    description:
      "Get live cryptocurrency data, charts, and market analysis with Fart Crypto. Stay updated on Bitcoin, Ethereum, and more.",
    images: ["https://fart-crypto.vercel.app/og-image.webp"],
  },
  metadataBase: new URL("https://fart-crypto.vercel.app"),
  alternates: {
    canonical: "https://fart-crypto.vercel.app",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
