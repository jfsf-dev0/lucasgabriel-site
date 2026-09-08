import type { Metadata, Viewport } from "next";
import { Montserrat, Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AmbientCanvas from "@/components/AmbientCanvas";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    "Estruturação e Implementação de Marketing para Aceleração de Negócios. Transforme o potencial da sua empresa para impulsionar suas vendas.",
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
    title: "Lucas Gabriel · Aceleração de Negócios e Marketing",
    description:
      "Estruturação e Implementação de Marketing para Aceleração de Negócios. Transforme o potencial da sua empresa para impulsionar suas vendas.",
    url: "https://lucasgabriell.com.br",
    siteName: "Lucas Gabriel",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Gabriel · Aceleração de Negócios e Marketing",
    description:
      "Estruturação e Implementação de Marketing para Aceleração de Negócios. Transforme o potencial da sua empresa para impulsionar suas vendas.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${sora.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#070707] text-white font-sans selection:bg-[#4E83FF] selection:text-white">
        <AmbientCanvas />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
