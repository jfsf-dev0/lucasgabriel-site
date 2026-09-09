import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "Como Funciona — Webwize",
  description:
    "Da estratégia à operação funcionando em 4 etapas: Diagnóstico, Estruturação, Implementação e Otimização.",
  alternates: {
    canonical: "https://lucasgabriel-site.vercel.app/como-funciona",
  },
};

export default function ComoFuncionaPage() {
  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Como a Webwize estrutura sua operação de aquisição",
    step: [
      {
        "@type": "HowToStep",
        name: "Diagnóstico Estratégico",
        text: "Mapeamento do cenário atual, personas B2B e gargalos no funil de vendas.",
      },
      {
        "@type": "HowToStep",
        name: "Estruturação",
        text: "Desenho do funil de aquisição, seleção de canais e arquitetura técnica.",
      },
      {
        "@type": "HowToStep",
        name: "Implementação",
        text: "Ativação de campanhas, landing pages, CRM e automações.",
      },
      {
        "@type": "HowToStep",
        name: "Otimização Contínua",
        text: "Análise de dados, testes e escala com previsibilidade.",
      },
    ],
  };

  const steps = [
    {
      number: "01",
      title: "Diagnóstico Estratégico",
      timeframe: "Semanas 01 e 02",
      desc: "Realizamos uma imersão profunda no seu modelo de negócio, histórico comercial e concorrência. Mapeamos com exatidão o perfil de cliente ideal (ICP), as objeções mais comuns nas reuniões de vendas e onde seu funil atual está vazando oportunidades.",
      points: [
        "Auditoria completa de canais anteriores e métricas históricas",
        "Entrevistas com a liderança e equipe comercial",
        "Definição do Perfil de Cliente Ideal (ICP) e critérios de qualificação",
        "Mapeamento do plano tático de implementação",
      ],
    },
    {
      number: "02",
      title: "Estruturação e Engenharia",
      timeframe: "Semanas 03 e 04",
      desc: "Desenhamos a arquitetura do funil de aquisição, a mensagem central de autoridade e a infraestrutura técnica. Criamos o copy das páginas, definimos os fluxos de distribuição de leads e configuramos o pipeline dentro do CRM.",
      points: [
        "Criação das Landing Pages de alta conversão (Next.js)",
        "Desenvolvimento do copy de autoridade e propostas de valor",
        "Configuração e modelagem do funil no CRM",
        "Definição de SLAs e regras de passagem de bastão comercial",
      ],
    },
    {
      number: "03",
      title: "Implementação e Ativação",
      timeframe: "Semanas 05 e 06",
      desc: "Colocamos a máquina para rodar. Ativamos as campanhas de Google Ads, Meta Ads e LinkedIn Ads, integramos as automações de resposta instantânea e os agentes de IA, e iniciamos a entrega de leads qualificados diretamente para o time de vendas.",
      points: [
        "Ativação de mídia paga e campanhas de conversão",
        "Integração de APIs de WhatsApp, formulários e CRM",
        "Ativação dos fluxos de automação e agentes de triagem",
        "Alinhamento inicial com os vendedores sobre o fluxo de entrada",
      ],
    },
    {
      number: "04",
      title: "Otimização e Escala",
      timeframe: "Contínuo",
      desc: "Com dados reais gerados diariamente, refinamos os anúncios, melhoramos as taxas de conversão de cada página e otimizamos o tempo de resposta comercial. Realizamos alinhamentos semanais e expandimos o investimento com base no retorno real (ROI).",
      points: [
        "Análise contínua de CAC, LTV e taxa de conversão por canal",
        "Testes A/B de criativos, copys e páginas",
        "Reuniões periódicas de alinhamento com a equipe de vendas",
        "Escala previsível de investimento e faturamento",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#070707] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      {/* Header */}
      <section className="w-full relative py-16 md:py-20 border-b border-white/[0.08] bg-gradient-to-b from-black to-[#0E0E0E]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-left">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-sora">
            <Link href="/" className="hover:text-[#66AFFF] transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Como Funciona</span>
          </nav>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-3">
            Processo de Execução
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
            Da estratégia à operação funcionando em{" "}
            <em className="italic text-gradient-blue font-serif font-medium">
              4 etapas estruturadas
            </em>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mt-4 leading-relaxed font-light">
            Não acreditamos em fórmulas mágicas nem em execuções improvisadas. Nosso método foi projetado para construir uma máquina sólida, testada e com previsibilidade de entrega.
          </p>
        </div>
      </section>

      {/* Timeline das 4 Etapas */}
      <section className="w-full relative py-20 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-left space-y-12">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#0E0E0E] border border-white/[0.08] hover:border-[#4E83FF]/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4E83FF]/20 border border-[#4E83FF]/40 text-[#66AFFF] flex items-center justify-center font-bold text-lg font-sora">
                    {st.number}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white font-sans">
                      {st.title}
                    </h2>
                    <span className="text-xs font-semibold text-[#4E83FF] font-sora uppercase tracking-wider">
                      {st.timeframe}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6">
                {st.desc}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-sora mb-3">
                  Atividades Principais da Etapa:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {st.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#4E83FF]/20 text-[#66AFFF] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                        ✓
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* CTA Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1d4ed8]/30 via-[#0B0B0B] to-[#0B0B0B] border border-[#4E83FF]/50 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                Inicie pela Etapa 01: Diagnóstico Estratégico
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-lg">
                Avalie o potencial de aceleração da sua empresa B2B e receba o desenho da sua máquina de aquisição personalizada.
              </p>
            </div>
            <button
              type="button"
              data-open-lead-modal="true"
              data-lead-source="como_funciona_page"
              className="btn-luxo-azul !py-4 !px-8 !text-sm cursor-pointer flex-shrink-0"
            >
              <span>Solicitar Diagnóstico Inicial</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
