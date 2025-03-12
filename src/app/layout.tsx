"use client";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Background from "@/components/layout/Background";
import { useEffect } from "react";
import { initParallax, setAnimationDelays } from "@/utils/parallax";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize parallax and animation effects on mount
  useEffect(() => {
    initParallax();
    setAnimationDelays();
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Vanguard Digital | Custom Software Development Agency</title>
        <meta
          name="description"
          content="We build custom software solutions that drive business growth. Expert web development, mobile apps, and digital transformation services."
        />
      </head>
      <body className={inter.className}>
        <Background />
        <main className="min-h-screen">
          {/* Always render children, but they'll initially be invisible until animations run */}
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
