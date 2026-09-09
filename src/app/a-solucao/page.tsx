import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "A Solução — Webwize | Infraestrutura de Aquisição para Empresas B2B",
  description:
    "Construímos a infraestrutura de aquisição da sua empresa. Unimos geração de demanda, páginas de alta conversão, CRM e inteligência artificial para gerar previsibilidade de vendas.",
  alternates: {
    canonical: "https://lucasgabriel-site.vercel.app/a-solucao",
  },
};

export default function ASolucaoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Assessoria de Aquisição e Operação Comercial B2B",
    provider: {
      "@type": "Organization",
      name: "Webwize",
      url: "https://lucasgabriel-site.vercel.app",
    },
    description:
      "Implementação completa da infraestrutura de aquisição B2B unindo mídia paga, landing pages, CRM comercial, inteligência artificial e análise de dados.",
  };

  return (
    <div className="w-full bg-[#070707] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero da Solução */}
      <section className="w-full relative py-16 md:py-20 border-b border-white/[0.08] bg-gradient-to-b from-black to-[#0E0E0E] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <Image
            src="/images/Lucas-Gabriel-pagina-azul_04.webp"
            alt="Lucas Gabriel - Webwize Solução"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-left">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-sora">
            <Link href="/" className="hover:text-[#66AFFF] transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-white font-medium">A Solução</span>
          </nav>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-3">
            Infraestrutura Comercial Integrada
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
            Construímos a{" "}
            <em className="italic text-gradient-blue font-serif font-medium">
              infraestrutura de aquisição
            </em>{" "}
            da sua empresa.
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mt-4 leading-relaxed font-light">
            A Webwize não entrega apenas anúncios soltos ou relatórios que não dizem nada. Criamos uma verdadeira máquina que une geração de demanda, páginas de alta conversão, CRM ativo, automações inteligentes e IA para abastecer seu time de vendas com reuniões qualificadas todos os dias.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              data-open-lead-modal="true"
              data-lead-source="a_solucao_hero"
              className="btn-luxo-azul !py-3.5 !px-8 !text-sm cursor-pointer"
            >
              <span>Solicitar diagnóstico da minha empresa</span>
            </button>
            <Link
              href="/como-funciona"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/[0.15] hover:border-[#4E83FF] text-neutral-300 hover:text-white text-sm font-semibold transition-colors"
            >
              <span>Ver como funciona o método</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Os Componentes da Infraestrutura */}
      <section className="w-full relative py-16 md:py-24 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-left">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              Um ecossistema comercial completo funcionando em harmonia
            </h2>
            <div className="rhombus-divider">
              <div className="rhombus-dot" />
            </div>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              O modelo comum de contratar agência de tráfego, programador de site e consultor de vendas isolados sempre cria pontas soltas. A Webwize consolida todas as disciplinas em uma única engrenagem previsível:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-[#0E0E0E] border border-white/[0.08] hover:border-[#4E83FF]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#4E83FF]/15 border border-[#4E83FF]/30 flex items-center justify-center text-[#66AFFF] mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. Geração de Demanda Qualificada</h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Campanhas ativas no Google Ads (fundo de funil com intenção imediata), Meta Ads e LinkedIn Ads mirando diretores, gerentes e tomadores de decisão da sua lista de contas-alvo.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0E0E0E] border border-white/[0.08] hover:border-[#4E83FF]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#4E83FF]/15 border border-[#4E83FF]/30 flex items-center justify-center text-[#66AFFF] mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Engenharia de Conversão</h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Páginas com carregamento instantâneo, design de alta autoridade e copy persuasivo desenhado para responder às objeções críticas de quem contrata soluções B2B de alto valor.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0E0E0E] border border-white/[0.08] hover:border-[#4E83FF]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#4E83FF]/15 border border-[#4E83FF]/30 flex items-center justify-center text-[#66AFFF] mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. CRM e Processo de Vendas</h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Estruturação do funil de vendas, etapas claras de qualificação (MQL para SQL), definição de SLA de resposta para que nenhum lead fique sem contato rápido e distribuição justa para os corretores/vendedores.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0E0E0E] border border-white/[0.08] hover:border-[#4E83FF]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#4E83FF]/15 border border-[#4E83FF]/30 flex items-center justify-center text-[#66AFFF] mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">4. Automação e Inteligência Artificial</h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Agentes autônomos para qualificar dados de contato no primeiro minuto, fluxos inteligentes de WhatsApp, cadências automáticas de follow-up e reengajamento de propostas paradas.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/os-5-pilares"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#66AFFF] hover:text-white transition-colors"
            >
              <span>Conheça os 5 pilares detalhados</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
