import type { Metadata } from "next";
import { Syne, Cormorant_Garamond, Inter } from "next/font/google";
import { ModalProvider } from "@/lib/modal-context";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Captanova | Unlock Your True Potential — Live Masterclass",
  description:
    "Join thousands worldwide who have transformed their mindset, discipline, confidence, and success with Captanova's live 2-hour masterclass. Limited seats available.",
  keywords: [
    "mindset masterclass",
    "self mastery",
    "confidence coaching",
    "discipline",
    "personal transformation",
    "live masterclass",
    "mindset coach",
    "peak performance",
  ],
  authors: [{ name: "Captanova" }],
  openGraph: {
    title: "Captanova | Unlock Your True Potential — Live Masterclass",
    description:
      "2-hour live masterclass. Rewire your mindset. Build unbreakable discipline. Become your highest self. Limited seats.",
    type: "website",
    locale: "en_US",
    siteName: "Captanova",
  },
  twitter: {
    card: "summary_large_image",
    title: "Captanova | Live Masterclass — Unlock Your True Potential",
    description:
      "Join the masterclass that has changed thousands of lives. 2 hours. Online. Limited seats.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
