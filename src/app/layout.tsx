import type { Metadata } from "next";
import { Caveat, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LiquidBackground } from "@/components/LiquidBackground";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-family",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-family",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-script-family",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://achini.space"),
  title: {
    default: "Achini Subasinghe | Portfolio",
    template: "%s | Achini Subasinghe",
  },
  description:
    "Portfolio of Achini Subasinghe, a software engineering undergraduate at NSBM Green University building full-stack web applications.",
  openGraph: {
    title: "Achini Subasinghe | Portfolio",
    description:
      "Software engineering undergraduate building full-stack web applications with Next.js, TypeScript, Node.js, and Spring Boot.",
    url: "https://achini.space",
    siteName: "Achini Subasinghe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achini Subasinghe | Portfolio",
    description:
      "Software engineering undergraduate building full-stack web applications with Next.js, TypeScript, Node.js, and Spring Boot.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} ${caveat.variable}`}
    >
      <body className="font-sans antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[var(--z-skip)] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background focus:outline-none"
        >
          Skip to content
        </a>
        <LiquidBackground />
        <div className="relative z-[var(--z-content)] flex min-h-dvh flex-col">
          <Navbar />
          <main
            id="content"
            className="mx-auto w-full max-w-[1200px] flex-1 px-5 pb-20 pt-10 sm:px-6 md:pb-24 md:pt-14"
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
