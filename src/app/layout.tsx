import type { Metadata, Viewport } from "next";
import { Montserrat, Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lucasgabriell.com.br"),
  title: {
    default: "Lucas Gabriel · Aceleração de Negócios e Marketing",
    template: "%s · Lucas Gabriel",
  },
  description:
    "Implementação dos 8 Pilares de Crescimento para empresas que querem acelerar com método.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lucasgabriell.com.br",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Lucas Gabriel — Consultoria de Aceleração em 90 Dias",
    description:
      "Implementação dos 8 Pilares de Crescimento para empresas que querem acelerar com método.",
    url: "https://lucasgabriell.com.br",
    siteName: "Lucas Gabriel",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Gabriel — Consultoria de Aceleração",
    description:
      "Aceleração de negócios em 90 dias com os 8 Pilares de Crescimento.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lucas Gabriel",
    jobTitle: "Consultor de Marketing e Aceleração de Negócios",
    url: "https://lucasgabriell.com.br",
    sameAs: [],
    knowsAbout: [
      "Marketing Digital",
      "Aceleração de Negócios",
      "Estratégia Empresarial",
      "Implementação em 90 Dias",
      "Tráfego Pago",
      "Posicionamento Digital"
    ],
    offers: {
      "@type": "Offer",
      name: "Consultoria de Aceleração em 90 Dias",
      description: "Implementação completa dos 8 Pilares de Crescimento em 90 dias"
    }
  };

  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${sora.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPerson),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#070707] text-white font-sans selection:bg-[#4E83FF] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
