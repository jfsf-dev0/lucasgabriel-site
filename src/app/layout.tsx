import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExitIntent from "@/components/ExitIntent";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lucasgabriell.com.br"),
  title: {
    default: "Webwize | Marketing B2B, CRM, Automação e Inteligência Artificial",
    template: "%s | Webwize",
  },
  description:
    "A Webwize estrutura aquisição, campanhas, páginas, CRM, automações, dados e inteligência artificial para transformar marketing em uma fonte consistente de oportunidades comerciais.",
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
    title: "Webwize | Marketing B2B, CRM, Automação e Inteligência Artificial",
    description:
      "A Webwize estrutura aquisição, campanhas, páginas, CRM, automações, dados e inteligência artificial para transformar marketing em uma fonte consistente de oportunidades comerciais.",
    url: "https://lucasgabriell.com.br",
    siteName: "Webwize",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webwize | Marketing B2B, CRM, Automação e Inteligência Artificial",
    description:
      "Transformamos marketing em uma fonte consistente de oportunidades comerciais B2B.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Webwize",
    founder: {
      "@type": "Person",
      name: "Lucas Gabriel",
      jobTitle: "Fundador e Estrategista B2B",
    },
    url: "https://lucasgabriell.com.br",
    description:
      "Operação de aquisição, CRM, automações e IA para empresas B2B gerarem oportunidades de venda previsíveis.",
    knowsAbout: [
      "Marketing B2B",
      "CRM Comercial",
      "Automação de Vendas",
      "Inteligência Artificial para Negócios",
      "Geração de Demanda",
      "Otimização de Conversão"
    ]
  };

  return (
    <html
      lang="pt-BR"
      className={`${inter.className} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrg),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#070707] text-white font-sans selection:bg-orange-500 selection:text-white w-full overflow-x-hidden">
        <Header />
        <main className="flex-1 pt-[74px] w-full">{children}</main>
        <Footer />
        <ExitIntent />
        <LeadCaptureModal />
      </body>
    </html>
  );
}
