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
  title: "Nozu · Jonathan Neto — Backend Freelance",
  description:
    "Desarrollador backend freelance. Chatbots IA, automatizaciones con n8n y APIs REST para negocios que quieren sistemas que funcionen de verdad.",
  openGraph: {
    title: "Nozu · Jonathan Neto — Backend Freelance",
    description:
      "Chatbots IA, automatizaciones con n8n y APIs REST. Si tienes un proyecto técnico concreto, hablemos.",
    url: "https://noxiffow.github.io/nozu",
    siteName: "Nozu",
    locale: "es_ES",
    type: "website",
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
