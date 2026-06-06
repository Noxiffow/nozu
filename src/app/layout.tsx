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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://noxiffow.github.io/nozu/#jonathan",
      "name": "Jonathan Neto",
      "url": "https://noxiffow.github.io/nozu/",
      "email": "natescripts@gmail.com",
      "jobTitle": "Freelance Técnico",
      "knowsAbout": [
        "Automatizaciones",
        "Desarrollo web",
        "Chatbots",
        "n8n",
        "FastAPI",
        "Python"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ES"
      },
      "sameAs": ["https://github.com/Noxiffow"]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://noxiffow.github.io/nozu/#nozu",
      "name": "Nozu",
      "url": "https://noxiffow.github.io/nozu/",
      "description": "Webs, automatizaciones y chatbots para negocios. Dime qué necesitas y lo resolvemos.",
      "founder": { "@id": "https://noxiffow.github.io/nozu/#jonathan" },
      "areaServed": "ES",
      "availableLanguage": "es",
      "email": "natescripts@gmail.com",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Nozu",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Páginas Web",
              "description": "Diseño y desarrollo de webs profesionales para negocios."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automatizaciones",
              "description": "Automatización de procesos con n8n: emails, notificaciones, reservas y más."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Chatbots e Integraciones",
              "description": "Chatbots para WhatsApp y web. Integración entre herramientas y APIs."
            }
          }
        ]
      }
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0d0d0d] text-[#e8e3dc]">
        {children}
      </body>
    </html>
  );
}
