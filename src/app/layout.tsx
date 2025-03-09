import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/layout/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vanguard Digital | Custom Software Development Agency",
  description:
    "We build custom software solutions that drive business growth. Expert web development, mobile apps, and digital transformation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Background />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
