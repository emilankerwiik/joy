import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "x402 Payments Skill | Give AI Agents the Power to Pay",
  description:
    "Enable AI agents to make micropayments via x402 protocol. Purchase browser sessions on Browserbase, scrape with Firecrawl, and more - all with automatic crypto payments.",
  keywords: [
    "x402",
    "AI agents",
    "micropayments",
    "cryptocurrency",
    "Cursor",
    "Agent Skills",
    "Browserbase",
    "Firecrawl",
    "thirdweb",
  ],
  authors: [{ name: "Emil Ankerwiik" }],
  openGraph: {
    title: "x402 Payments Skill",
    description: "Give AI agents the power to pay with x402 micropayments",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
