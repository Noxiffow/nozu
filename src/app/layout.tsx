import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nozu · Jonathan Neto — Freelance Técnico",
  description:
    "Webs, automatizaciones y chatbots para negocios. Dime qué necesitas y lo resolvemos — sin tecnicismos ni rodeos.",
  metadataBase: new URL("https://noxiffow.github.io"),
  alternates: {
    canonical: "https://noxiffow.github.io/nozu/",
  },
  openGraph: {
    title: "Nozu · Jonathan Neto — Freelance Técnico",
    description:
      "Webs, automatizaciones y chatbots para negocios. Dime qué necesitas y lo resolvemos.",
    url: "https://noxiffow.github.io/nozu/",
    siteName: "Nozu",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/nozu/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nozu — Freelance Técnico · Jonathan Neto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nozu · Jonathan Neto — Freelance Técnico",
    description:
      "Webs, automatizaciones y chatbots para negocios. Dime qué necesitas y lo resolvemos.",
    images: ["/nozu/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0d0d] text-[#e8e3dc]">
        {children}
      </body>
    </html>
  );
}
