import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "O Problema — Webwize | Por que marketing isolado não gera vendas B2B",
  description:
    "Descubra por que o problema raramente é só o tráfego: conheça os 7 principais gargalos de aquisição e por que campanhas sem processo comercial estruturado falham.",
  alternates: {
    canonical: "https://lucasgabriel-site.vercel.app/o-problema",
  },
};

export default function OProblemaPage() {
  const problemBullets = [
    {
      number: "01",
      title: "Leads desqualificados",
      desc: "Contatos fora do perfil de cliente ideal (ICP) que custam tempo precioso e desgastam a equipe de vendas com reuniões vazias.",
    },
    {
      number: "02",
      title: "Páginas sem conversão",
      desc: "Tráfego pago direcionado para páginas genéricas, sem mensagens desenhadas para converter diretores e tomadores de decisão.",
    },
    {
      number: "03",
      title: "Vendas e marketing desconectados",
      desc: "Equipes desalinhadas trabalhando em silos e culpando uma à outra: marketing diz que entrega leads, vendas diz que os contatos são ruins.",
    },
    {
      number: "04",
      title: "CRM mal estruturado",
      desc: "Pipeline abandonado ou confuso, sem processos padronizados de qualificação e sem acompanhamento diário dos negócios abertos.",
    },
    {
      number: "05",
      title: "Follow-ups lentos ou inexistentes",
      desc: "Oportunidades quentes esfriam e se perdem por falta de agilidade no primeiro contato e ausência de réguas de nutrição.",
    },
    {
      number: "06",
      title: "Falta de clareza sobre canais",
      desc: "Incerteza total sobre qual fonte de aquisição (Google, Meta, LinkedIn) realmente gera reuniões de fechamento e receita real no caixa.",
    },
    {
      number: "07",
      title: "Decisões no escuro",
      desc: "Estratégias orientadas por intuição e achismos, sem dados de atribuição confiáveis ou visibilidade de CAC e LTV.",
    },
    {
      number: "08",
      title: "Operação fragmentada",
      desc: "Contratação de múltiplos fornecedores e agências que não conversam entre si e não assumem responsabilidade pelo resultado comercial.",
    },
  ];

  const comparisonIsolated = [
    "Anúncios sem estratégia comercial e foco apenas em métricas de vaidade",
    "Páginas genéricas sem proposta de valor clara para o público corporativo",
    "Leads jogados no WhatsApp sem contexto ou filtro prévio de maturidade",
    "Sem follow-up sistemático: perda constante de oportunidades por lentidão",
    "Métricas superficiais (cliques, impressões, curtidas e visualizações)",
    "Marketing e vendas trabalhando isolados e culpando um ao outro",
    "Processos manuais, lentos e dependentes de memória individual",
    "Gasto contínuo em anúncios sem previsibilidade de retorno ou escala",
  ];

  const comparisonStructured = [
    "Campanhas alinhadas ao ICP, personas e ciclo de venda consultivo",
    "Estrutura de conversão personalizada para tomadores de decisão B2B",
    "Fluxo de qualificação e distribuição inteligente no CRM comercial",
    "Automação de nutrição e reengajamento contínuo com inteligência artificial",
    "Métricas de negócio reais (SQLs, CAC, LTV e pipeline qualificado gerado)",
    "Funil unificado com SLA formal entre marketing e equipe de vendas",
    "Automação e Inteligência Artificial acelerando o ciclo comercial",
    "Máquina de aquisição previsível, escalável e 100% mensurável",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "O problema raramente é só o tráfego: Por que o marketing B2B comum falha",
    description: "Análise detalhada dos gargalos do marketing digital corporativo e a diferença para uma operação estruturada de aquisição.",
    author: {
      "@type": "Person",
      name: "Lucas Gabriel",
      url: "https://lucasgabriel-site.vercel.app/sobre",
    },
    publisher: {
      "@type": "Organization",
      name: "Webwize",
      url: "https://lucasgabriel-site.vercel.app",
    },
  };

  return (
    <div className="w-full bg-[#070707] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header da Página */}
      <section className="w-full relative py-16 md:py-20 border-b border-white/[0.08] bg-gradient-to-b from-black to-[#0E0E0E]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-left">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-sora">
            <Link href="/" className="hover:text-[#66AFFF] transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-white font-medium">O Problema</span>
          </nav>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-3">
            Diagnóstico do Cenário Atual
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
            O problema raramente{" "}
            <em className="italic text-gradient-blue font-serif font-medium">
              é só o tráfego.
            </em>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mt-4 leading-relaxed font-light">
            A maioria das empresas que tenta crescer no B2B enfrenta o mesmo gargalo: contratam agências de anúncios, disparam e-mails e postam conteúdos, mas nada disso está conectado com o time comercial e com o processo de fechamento de vendas.
          </p>
        </div>
      </section>

      {/* Os 8 Gargalos */}
      <section className="w-full relative py-16 md:py-20 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-left">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              Os 8 gargalos que travam o crescimento comercial B2B
            </h2>
            <div className="rhombus-divider">
              <div className="rhombus-dot" />
            </div>
            <p className="text-sm sm:text-base text-neutral-300 font-light">
              Identifique quais desses fatores estão drenando recursos na sua empresa hoje:
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problemBullets.map((item, idx) => (
              <StaggerItem
                key={idx}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#0E0E0E] hover:border-[#4E83FF]/40 transition-all duration-300 flex flex-col justify-start text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#4E83FF] tracking-wider font-sora">
                    Gargalo {item.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  {item.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparação */}
      <section className="w-full relative py-16 md:py-24 border-b border-white/[0.08] bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-left">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn direction="down">
              <p className="text-xs font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-2">
                Comparativo Estrutural
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight font-sans">
                A diferença entre fazer marketing e construir uma operação de aquisição
              </h2>
            </FadeIn>
            <div className="rhombus-divider-center">
              <div className="rhombus-dot" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coluna 1: Marketing Isolado */}
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0E0E0E] border border-red-500/30">
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 font-sora">
                Marketing Isolado
              </div>
              <h3 className="text-lg font-bold text-white mb-6">
                Como a maioria opera hoje
              </h3>
              <ul className="space-y-3.5 text-sm text-neutral-300 font-light">
                {comparisonIsolated.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 2: Operação Estruturada */}
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0E0E0E] border border-[#4E83FF]/50 shadow-xl shadow-[#4E83FF]/5">
              <div className="inline-block px-3 py-1 rounded-full bg-[#4E83FF]/15 text-[#66AFFF] text-xs font-bold uppercase tracking-wider mb-4 font-sora">
                Operação Estruturada (Webwize)
              </div>
              <h3 className="text-lg font-bold text-white mb-6">
                Como líderes constroem previsibilidade
              </h3>
              <ul className="space-y-3.5 text-sm text-neutral-200 font-normal">
                {comparisonStructured.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#4E83FF]/20 text-[#66AFFF] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#1d4ed8]/20 to-transparent border border-[#4E83FF]/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Sua empresa se identificou com esses gargalos?
              </h4>
              <p className="text-sm text-neutral-300 font-light">
                Solicite uma análise diagnóstica com nossa equipe para mapear onde sua operação está perdendo oportunidades.
              </p>
            </div>
            <button
              type="button"
              data-open-lead-modal="true"
              data-lead-source="o_problema_page"
              className="btn-luxo-azul !py-3 !px-7 !text-sm flex-shrink-0 cursor-pointer"
            >
              <span>Solicitar diagnóstico</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
