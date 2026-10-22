import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LiquidBackground } from "@/components/LiquidBackground";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Achini Subasinghe | Portfolio",
  description: "Personal portfolio website of Achini Subasinghe — Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={caveat.variable}>
      <body className="font-sans antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ice focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <LiquidBackground />
        <div className="relative z-10 flex min-h-dvh flex-col">
          <Navbar />
          <main
            id="content"
            className="mx-auto w-full max-w-[1120px] flex-1 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10"
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
