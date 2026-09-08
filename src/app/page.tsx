import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "Webwize | Marketing B2B, CRM, Automação e Inteligência Artificial",
  description:
    "A Webwize estrutura aquisição, campanhas, páginas, CRM, automações, dados e inteligência artificial para transformar marketing em uma fonte consistente de oportunidades comerciais.",
  alternates: {
    canonical: "https://lucasgabriell.com.br",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const problemBullets = [
    {
      number: "01",
      title: "Leads desqualificados",
      desc: "Contatos fora do perfil que custam tempo precioso e desgastam a equipe comercial.",
    },
    {
      number: "02",
      title: "Páginas sem conversão",
      desc: "Tráfego pago sem páginas e mensagens desenhadas para converter tomadores de decisão.",
    },
    {
      number: "03",
      title: "Vendas e marketing desconectados",
      desc: "Equipes desalinhadas trabalhando em silos e culpando um ao outro pela falta de vendas.",
    },
    {
      number: "04",
      title: "CRM mal estruturado",
      desc: "Pipeline abandonado, sem processos padronizados e sem acompanhamento diário da equipe.",
    },
    {
      number: "05",
      title: "Follow-ups lentos ou inexistentes",
      desc: "Oportunidades quentes esfriam e se perdem por falta de agilidade e automação de contato.",
    },
    {
      number: "06",
      title: "Falta de clareza sobre canais",
      desc: "Incerteza total sobre qual fonte de tráfego realmente gera reuniões e faturamento real.",
    },
    {
      number: "07",
      title: "Decisões no escuro",
      desc: "Estratégias baseadas em palpites e intuição, sem dados de atribuição confiáveis.",
    },
    {
      number: "08",
      title: "Operação fragmentada",
      desc: "Contratação de múltiplos fornecedores que não conversam entre si e não geram previsibilidade.",
    },
  ];

  const comparisonIsolated = [
    "Anúncios sem estratégia comercial e foco apenas em cliques",
    "Páginas genéricas sem proposta de valor clara para B2B",
    "Leads jogados no WhatsApp sem contexto ou filtro prévio",
    "Sem follow-up sistemático: perda constante de leads por lentidão",
    "Métricas de vaidade (cliques, impressões e curtidas)",
    "Marketing e vendas trabalhando isolados e culpando um ao outro",
    "Processos manuais, lentos e dependentes de esforço individual",
    "Gasto contínuo sem previsibilidade de retorno ou escala",
  ];

  const comparisonStructured = [
    "Campanhas alinhadas ao ICP, personas e ciclo de venda B2B",
    "Estrutura de conversão personalizada para vendas consultivas",
    "Fluxo de qualificação e distribuição inteligente no CRM",
    "Automação de nutrição e reengajamento inteligente contínuo",
    "Métricas de negócio reais (SQLs, CAC, LTV e pipeline gerado)",
    "Funil unificado com SLA definido entre marketing e vendas",
    "Automação e Inteligência Artificial acelerando a operação",
    "Máquina de aquisição previsível, escalável e mensurável",
  ];

  const pillars = [
    {
      number: "01",
      title: "Geração de Demanda",
      desc: "Google Ads, Meta Ads e LinkedIn Ads desenhados para capturar a atenção de tomadores de decisão e empresas no momento certo de compra.",
      tags: ["Google Ads", "Meta Ads", "LinkedIn Ads", "ICP B2B"],
    },
    {
      number: "02",
      title: "Estrutura de Conversão",
      desc: "Landing pages de altíssima velocidade e copy persuasivo orientadas ao ciclo consultivo B2B, transmitindo autoridade e clareza de proposta de valor.",
      tags: ["Landing Pages", "Copywriting B2B", "Velocidade Extrema", "Mobile Ready"],
    },
    {
      number: "03",
      title: "CRM e Operação Comercial",
      desc: "Pipeline estruturado, regras claras de qualificação (MQL para SQL), SLA de resposta rápida e integração completa entre marketing e vendas.",
      tags: ["Pipeline de Vendas", "Qualificação SQL", "SLA Comercial", "Distribuição de Leads"],
    },
    {
      number: "04",
      title: "Automação e IA",
      desc: "Resposta imediata a novas oportunidades, agentes de inteligência artificial para pré-qualificação, nutrição inteligente e follow-up contínuo.",
      tags: ["Agentes de IA", "Nutrição Automática", "Follow-up Ativo", "WhatsApp API"],
    },
    {
      number: "05",
      title: "Dados e Inteligência Comercial",
      desc: "Painéis em tempo real com atribuição clara de receita por canal, custo por oportunidade qualificada, ciclo médio de fechamento e ROI real.",
      tags: ["Dashboards em Tempo Real", "Atribuição de Receita", "CAC & LTV", "Inteligência de Dados"],
    },
  ];

  const b2bSegments = [
    {
      title: "Indústrias & Manufatura",
      desc: "Empresas com ticket elevado, catálogo técnico e necessidade de gerar cotações qualificadas com compradores e diretores industriais.",
    },
    {
      title: "SaaS & Empresas de Tecnologia",
      desc: "Softwares corporativos e plataformas de tecnologia que buscam volume previsível de demonstrações e trials com decisores de TI e negócios.",
    },
    {
      title: "Serviços B2B & Consultorias",
      desc: "Escritórios jurídicos, consultorias empresariais, engenharia, logística e terceirização que vendem serviços consultivos de alto valor.",
    },
    {
      title: "Distribuidoras & Atacadistas",
      desc: "Operações comerciais que precisam expandir a carteira de revendedores, lojistas e clientes corporativos de forma ativa e digital.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é a Webwize?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Webwize é uma assessoria de marketing, tecnologia e vendas especializada em empresas B2B. Estruturamos geração de demanda, páginas de conversão, CRM comercial, automação e inteligência artificial para gerar oportunidades previsíveis de venda.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o diagnóstico estratégico da Webwize?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No diagnóstico, avaliamos seu modelo de vendas atual, gargalos de conversão, canais de aquisição e CRM para desenhar um plano de estruturação completo para sua empresa.",
        },
      },
      {
        "@type": "Question",
        name: "Quais são os 5 pilares da operação Webwize?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Os 5 pilares são: 1. Geração de Demanda, 2. Estrutura de Conversão, 3. CRM e Operação Comercial, 4. Automação e Inteligência Artificial, 5. Dados e Inteligência Comercial.",
        },
      },
      {
        "@type": "Question",
        name: "Para quais tipos de empresas a Webwize é indicada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Webwize é indicada para empresas que vendem para outras empresas (B2B) com vendas consultivas e ticket estruturado, como indústrias, SaaS, prestadores de serviços corporativos, distribuidoras e consultorias.",
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[800px] flex items-center justify-start border-b border-white/[0.08] overflow-hidden">
        {/* Desktop background image with priority */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          <Image
            src="/images/Lucas-Gabriel-pagina-azul_01.jpg"
            alt="Webwize - Marketing, tecnologia e vendas para empresas B2B"
            width={1920}
            height={749}
            priority
            quality={85}
            className="w-full h-full object-cover object-top"
            sizes="100vw"
          />
        </div>
        {/* Mobile background image with priority */}
        <div className="absolute inset-0 block md:hidden pointer-events-none">
          <Image
            src="/images/Lucas-gabriel-mobile-111.jpg"
            alt="Webwize - Mobile"
            width={800}
            height={1276}
            priority
            quality={85}
            className="w-full h-full object-cover object-top"
            sizes="100vw"
          />
        </div>

        {/* Hero Content Box */}
        <div className="relative max-w-[1140px] mx-auto px-4 w-full pt-[330px] pb-12 md:pt-[110px] md:pb-[70px] flex items-center">
          <div className="w-full md:w-[48%] border-l-[3px] border-[#4E83FF] pl-7 space-y-5 text-left">
            <FadeIn direction="left" delay={0.1}>
              <p className="text-[13px] font-semibold tracking-wider text-[#66AFFF] uppercase font-sora">
                Operação de Aquisição B2B
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight leading-[1.16] text-white font-sans">
                Marketing, tecnologia e vendas para{" "}
                <em className="italic text-gradient-blue font-serif font-medium">
                  empresas B2B
                </em>
              </h1>
            </FadeIn>

            <div className="rhombus-divider">
              <div className="rhombus-dot" />
            </div>

            <FadeIn direction="left" delay={0.3} className="space-y-3">
              <p className="text-base sm:text-lg font-medium text-white leading-snug">
                Sua empresa não precisa de mais marketing. Precisa de uma operação que gere oportunidades de venda.
              </p>
              <p className="text-sm md:text-[15px] text-neutral-300 font-normal leading-relaxed">
                A Webwize estrutura aquisição, campanhas, páginas, CRM, automações, dados e inteligência artificial para transformar marketing em uma fonte consistente de oportunidades comerciais.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                data-open-lead-modal="true"
                data-lead-source="hero"
                aria-label="Solicitar diagnóstico de aquisição B2B"
                className="btn-luxo-azul w-full sm:w-auto cursor-pointer"
              >
                <span>Solicitar diagnóstico</span>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <a
                href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20a%20opera%C3%A7%C3%A3o%20B2B%20da%20minha%20empresa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/[0.18] hover:border-[#4E83FF] hover:bg-white/[0.04] text-neutral-200 hover:text-white text-sm font-semibold transition-all text-center"
              >
                <span>Falar no WhatsApp</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: O PROBLEMA (#problema)
          Row-reverse: 50% text RIGHT, 47% cards LEFT (2 columns)
          ========================================================================= */}
      <section
        id="problema"
        className="relative py-20 md:py-28 border-b border-white/[0.08] bg-[#070707] bg-cover bg-top bg-no-repeat overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat pointer-events-none opacity-40"
          style={{
            backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_02.jpg')",
          }}
        />

        <div className="relative max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-14">
            
            {/* RIGHT SIDE: Text Column */}
            <div className="w-full md:w-[50%] space-y-6 text-left">
              <FadeIn direction="right">
                <p className="text-[14px] font-semibold uppercase tracking-widest text-[#4E83FF] font-sora">
                  O Desafio Comercial
                </p>
              </FadeIn>

              <FadeIn direction="right" delay={0.1}>
                <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold tracking-tight leading-[1.2]">
                  O problema raramente{" "}
                  <em className="italic text-gradient-blue font-serif font-medium">
                    é só o tráfego.
                  </em>
                </h2>
              </FadeIn>

              <div className="rhombus-divider">
                <div className="rhombus-dot" />
              </div>

              <FadeIn direction="right" delay={0.2} className="space-y-4 text-sm md:text-[17px] text-neutral-300 font-normal leading-relaxed">
                <p>
                  A maioria das empresas que tenta crescer no B2B enfrenta o mesmo gargalo: contratam agências de anúncios, disparam e-mails e postam conteúdos, mas nada disso está conectado com o time de vendas e com o processo de fechamento.
                </p>
                <p>
                  O resultado são campanhas caras, leads que não fecham contratos e a sensação permanente de que marketing digital não funciona para vendas complexas.
                </p>
                <p className="font-semibold text-white pt-1">
                  A Webwize integra todos esses pontos em uma única operação unificada de aquisição.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} className="pt-2">
                <button
                  type="button"
                  data-open-lead-modal="true"
                  data-lead-source="problema"
                  className="btn-luxo-azul !py-3 !px-6 !text-sm cursor-pointer"
                >
                  <span>Diagnosticar minha operação B2B</span>
                </button>
              </FadeIn>
            </div>

            {/* LEFT SIDE: 8 Cards in 2 Columns */}
            <div className="w-full md:w-[47%]">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {problemBullets.map((item, idx) => (
                  <StaggerItem
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-[#0E0E0E]/90 hover:border-[#4E83FF]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start text-left"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-[#4E83FF] tracking-wider font-sora">
                        {item.number}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    </div>
                    <h3 className="text-sm font-semibold text-white leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMPARAÇÃO (MARKETING ISOLADO VS OPERAÇÃO ESTRUTURADA)
          ========================================================================= */}
      <section
        className="relative py-20 md:py-28 border-b border-white/[0.08] bg-[#070707] bg-cover bg-top bg-no-repeat overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat pointer-events-none opacity-30"
          style={{
            backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_03.jpg')",
          }}
        />

        <div className="relative max-w-[1140px] mx-auto px-4 w-full text-center">
          <FadeIn direction="down">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#4E83FF] font-sora mb-2">
              Mudança de Paradigma
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold leading-snug max-w-3xl mx-auto">
              A diferença entre fazer marketing e{" "}
              <em className="italic text-gradient-blue font-serif font-medium">
                construir uma operação de aquisição.
              </em>
            </h2>
          </FadeIn>

          <div className="rhombus-divider-center">
            <div className="rhombus-dot" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
            {/* Coluna 1: Marketing Isolado */}
            <FadeIn direction="left" className="p-7 sm:p-9 rounded-2xl bg-[#0E0E0E] border border-white/[0.08] hover:border-red-500/30 transition-all duration-300">
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 font-sora">
                Marketing Isolado
              </div>
              <h3 className="text-[20px] font-semibold text-neutral-100 mb-6 font-sans flex items-center gap-2.5">
                <span>O modelo fragmentado comum</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-neutral-300 font-light">
                {comparisonIsolated.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Coluna 2: Operação Estruturada */}
            <FadeIn direction="right" className="p-7 sm:p-9 rounded-2xl bg-[#0E0E0E] border border-[#4E83FF]/40 shadow-xl shadow-[#4E83FF]/5 hover:border-[#4E83FF] transition-all duration-300">
              <div className="inline-block px-3 py-1 rounded-full bg-[#4E83FF]/15 border border-[#4E83FF]/40 text-[#66AFFF] text-xs font-semibold uppercase tracking-wider mb-4 font-sora">
                Operação Estruturada
              </div>
              <h3 className="text-[20px] font-semibold text-white mb-6 font-sans flex items-center gap-2.5">
                <span>A abordagem Webwize</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-neutral-200 font-normal">
                {comparisonStructured.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#4E83FF]/20 text-[#66AFFF] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: A SOLUÇÃO & COMO FUNCIONA (#solucao & #como-funciona)
          ========================================================================= */}
      <section
        id="solucao"
        className="relative py-20 md:py-28 border-b border-white/[0.08] bg-[#070707] bg-cover bg-top bg-no-repeat overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat pointer-events-none opacity-35"
          style={{
            backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_04.jpg')",
          }}
        />

        <div className="relative max-w-[1140px] mx-auto px-4 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
            
            {/* Left side: Text & Stats */}
            <div className="w-full lg:w-[48%] space-y-6 text-left">
              <FadeIn direction="left">
                <p className="text-[14px] font-semibold uppercase tracking-widest text-[#4E83FF] font-sora">
                  A SOLUÇÃO
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-[46px] font-semibold tracking-tight leading-[1.14]">
                  Construímos a{" "}
                  <em className="italic text-gradient-blue font-serif font-medium">
                    infraestrutura de aquisição
                  </em>{" "}
                  da sua empresa.
                </h2>
              </FadeIn>

              <div className="rhombus-divider">
                <div className="rhombus-dot" />
              </div>

              <FadeIn direction="down" delay={0.2} className="space-y-3">
                <p className="text-sm md:text-[17px] text-neutral-300 font-normal leading-relaxed">
                  A Webwize não entrega apenas anúncios soltos ou relatórios que não dizem nada. Criamos uma verdadeira máquina que une geração de demanda, páginas de alta conversão, CRM ativo, automações inteligentes e IA para abastecer seu time de vendas com reuniões qualificadas.
                </p>
                <p className="text-sm md:text-[16px] text-neutral-300 font-normal leading-relaxed">
                  Toda a tecnologia trabalha alinhada à sua meta comercial, garantindo clareza total sobre o retorno de cada real investido.
                </p>
              </FadeIn>

              {/* 2 Stat Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-[#4E83FF]/15 border border-[#4E83FF]/40 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#4E83FF]/25 flex items-center justify-center text-[#66AFFF] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Pipeline Previsível</h3>
                    <p className="text-xs text-neutral-300">Oportunidades com SLA</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#4E83FF]/15 border border-[#4E83FF]/40 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#4E83FF]/25 flex items-center justify-center text-[#66AFFF] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Automação & IA</h3>
                    <p className="text-xs text-neutral-300">Agilidade comercial</p>
                  </div>
                </div>
              </div>

              <FadeIn direction="up" delay={0.3} className="pt-2">
                <button
                  type="button"
                  data-open-lead-modal="true"
                  data-lead-source="solucao"
                  aria-label="Solicitar diagnóstico da minha empresa"
                  className="btn-luxo-azul w-full sm:w-auto !text-[16px] cursor-pointer"
                >
                  <span>Solicitar diagnóstico da minha empresa</span>
                </button>
              </FadeIn>
            </div>

            {/* Right side: 4-step Flow Process Card (Como Funciona) */}
            <div id="como-funciona" className="w-full lg:w-[48%] p-8 sm:p-10 rounded-3xl bg-[#0E0E0E]/95 border border-white/[0.09] shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                <div className="w-12 h-12 rounded-xl bg-[#4E83FF]/15 border border-[#4E83FF]/40 flex items-center justify-center text-[#66AFFF]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                    Como Funciona a Execução
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Método de estruturação e escala em 4 etapas
                  </p>
                </div>
              </div>

              <div className="flow-wrap text-left">
                {/* Etapa 01 */}
                <div className="flow-item">
                  <div className="flow-left">
                    <div className="flow-dot">
                      <svg viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    <div className="flow-line" />
                  </div>
                  <div className="flow-text">
                    <p className="flow-label">Etapa 01</p>
                    <h4 className="text-base font-bold text-white font-sora">Diagnóstico Estratégico</h4>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                      Mapeamento profundo do cenário atual da empresa, personas B2B, gargalos no funil de vendas e oportunidades imediatas de geração de receita.
                    </p>
                  </div>
                </div>

                {/* Etapa 02 */}
                <div className="flow-item">
                  <div className="flow-left">
                    <div className="flow-dot">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div className="flow-line" />
                  </div>
                  <div className="flow-text">
                    <p className="flow-label">Etapa 02</p>
                    <h4 className="text-base font-bold text-white font-sora">Estruturação</h4>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                      Desenho do funil de aquisição, posicionamento da oferta comercial, seleção criteriosa de canais e arquitetura técnica das páginas e integrações.
                    </p>
                  </div>
                </div>

                {/* Etapa 03 */}
                <div className="flow-item">
                  <div className="flow-left">
                    <div className="flow-dot">
                      <svg viewBox="0 0 24 24">
                        <polyline points="22 7 13 7 13 2" />
                        <path d="M2 17l4 4 4-4" />
                        <path d="M6 21V9a4 4 0 0 1 4-4h3l5 5v4" />
                        <line x1="2" y1="12" x2="6" y2="12" />
                      </svg>
                    </div>
                    <div className="flow-line" />
                  </div>
                  <div className="flow-text">
                    <p className="flow-label">Etapa 03</p>
                    <h4 className="text-base font-bold text-white font-sora">Implementação</h4>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                      Configuração e ativação prática de campanhas de tráfego, landing pages de alta conversão, CRM comercial e automações com inteligência artificial.
                    </p>
                  </div>
                </div>

                {/* Etapa 04 */}
                <div className="flow-item">
                  <div className="flow-left">
                    <div className="flow-dot">
                      <svg viewBox="0 0 24 24">
                        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                  </div>
                  <div className="flow-text">
                    <p className="flow-label">Etapa 04</p>
                    <h4 className="text-base font-bold text-white font-sora">Otimização Contínua</h4>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                      Análise rigorosa de dados de conversão, reuniões periódicas de alinhamento com a equipe comercial, testes contínuos e escala com previsibilidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OS 5 PILARES DA OPERAÇÃO WEBWIZE (#pilares)
          ========================================================================= */}
      <section
        id="pilares"
        className="relative py-20 md:py-28 border-b border-white/[0.08] bg-[#121212] text-center"
      >
        <div className="max-w-[1140px] mx-auto px-4">
          <FadeIn direction="down">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#4E83FF] font-sora mb-2">
              Infraestrutura Completa
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold max-w-3xl mx-auto leading-snug">
              Os 5 Pilares da{" "}
              <em className="italic text-gradient-blue font-serif font-medium">
                Operação Webwize
              </em>
            </h2>
            <p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto mt-3 font-normal">
              Tudo o que sua empresa precisa para transformar marketing em receita previsível, conectado de ponta a ponta.
            </p>
          </FadeIn>

          <div className="rhombus-divider-center">
            <div className="rhombus-dot" />
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
            {pillars.map((item, idx) => (
              <StaggerItem
                key={idx}
                className="group rounded-2xl bg-[#0B0B0B] border border-white/[0.08] p-7 hover:border-[#4E83FF]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#4E83FF]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4E83FF] font-sora">
                      Pilar {item.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#4E83FF]/15 border border-[#4E83FF]/30 flex items-center justify-center text-[#66AFFF]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-sans group-hover:text-[#66AFFF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            ))}

            {/* 6th Card: CTA Card in the grid */}
            <StaggerItem className="rounded-2xl bg-gradient-to-br from-[#1d4ed8]/30 via-[#0B0B0B] to-[#0B0B0B] border border-[#4E83FF]/40 p-7 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#66AFFF] font-sora">
                  Próximo Passo
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-3 font-sans">
                  Pronto para estruturar sua máquina de vendas?
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  Nossa equipe analisa a maturidade comercial da sua empresa e apresenta o plano exato para implementar esses 5 pilares na sua operação.
                </p>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  data-open-lead-modal="true"
                  data-lead-source="pilares_card"
                  className="btn-luxo-azul w-full !py-3 !text-sm cursor-pointer"
                >
                  <span>Solicitar diagnóstico</span>
                </button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PARA QUEM É (#para-quem)
          ========================================================================= */}
      <section
        id="para-quem"
        className="relative min-h-[676px] py-16 md:py-24 flex items-center border-b border-white/[0.08] bg-[#0E0E0E] bg-cover bg-top bg-no-repeat overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat pointer-events-none opacity-40"
          style={{
            backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_05.jpg')",
          }}
        />

        <div className="relative max-w-[1140px] mx-auto px-4 w-full">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn direction="down">
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#4E83FF] font-sora mb-2">
                Foco Exclusivo
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-snug">
                Para empresas que{" "}
                <em className="italic text-gradient-blue font-serif font-medium">
                  vendem para empresas.
                </em>
              </h2>
              <p className="text-sm md:text-base text-neutral-300 mt-3 font-light">
                A metodologia e a tecnologia da Webwize foram desenhadas especificamente para o ciclo de vendas complexo e consultivo.
              </p>
            </FadeIn>
            <div className="rhombus-divider-center">
              <div className="rhombus-dot" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <FadeIn direction="left" className="kps-step text-left">
              <div className="kps-icon-wrap">
                <svg viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-2">
                Perfil 01
              </p>
              <h3 className="text-2xl font-bold text-white mb-3">Empresas com Venda Consultiva</h3>
              <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-6">
                Negócios que já possuem modelo validado, faturam e entregam excelência aos seus clientes, mas perceberam que chegaram no limite do crescimento dependente de indicações e prospecção manual informal.
              </p>
              <div className="kps-divider" />
            </FadeIn>

            <FadeIn direction="right" className="kps-step text-left">
              <div className="kps-icon-wrap">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-2">
                Perfil 02
              </p>
              <h3 className="text-2xl font-bold text-white mb-3">Líderes Prontos para Escala</h3>
              <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-6">
                Organizações prontas para profissionalizar sua operação comercial, abastecendo o time de vendas diariamente com leads qualificados, processos padronizados em CRM e métricas claras de conversão.
              </p>
              <div className="kps-divider" />
            </FadeIn>
          </div>

          {/* Segmentos Atendidos */}
          <div className="mt-12 pt-10 border-t border-white/[0.08]">
            <h4 className="text-center text-xs font-bold uppercase tracking-widest text-neutral-400 font-sora mb-8">
              Segmentos B2B com maior aderência
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {b2bSegments.map((seg, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#4E83FF]/30 transition-colors"
                >
                  <h5 className="text-sm font-bold text-white mb-1.5">{seg.title}</h5>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">{seg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: SOBRE A WEBWIZE & LUCAS GABRIEL (#sobre)
          ========================================================================= */}
      <section
        id="sobre"
        className="relative min-h-[747px] flex items-center border-b border-white/[0.08] overflow-hidden"
      >
        {/* Desktop background */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          <Image
            src="/images/Lucas-Gabriel-pagina-azul_06.jpg"
            alt="Sobre a Webwize e Lucas Gabriel"
            width={1920}
            height={747}
            loading="lazy"
            quality={85}
            className="w-full h-full object-cover object-top"
            sizes="100vw"
          />
        </div>
        {/* Mobile background */}
        <div className="absolute inset-0 block md:hidden pointer-events-none">
          <Image
            src="/images/Lucas-gabriel-mobile-222.jpg"
            alt="Lucas Gabriel - Webwize Mobile"
            width={800}
            height={2051}
            loading="lazy"
            quality={85}
            className="w-full h-full object-cover object-top"
            sizes="100vw"
          />
        </div>

        <div className="relative max-w-[1140px] mx-auto px-4 w-full pt-[412px] pb-12 md:py-[100px] flex justify-end">
          {/* Aligned to the RIGHT side on desktop (51% width) */}
          <div className="w-full md:w-[51%] space-y-6 text-left">
            <FadeIn direction="down">
              <p className="text-[14px] font-semibold uppercase tracking-widest text-[#4E83FF] font-sora">
                Quem Faz Acontecer
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold leading-tight">
                Sobre a Webwize &{" "}
                <em className="italic text-gradient-blue font-serif font-medium">
                  Lucas Gabriel
                </em>
              </h2>
            </FadeIn>

            <div className="rhombus-divider">
              <div className="rhombus-dot" />
            </div>

            <FadeIn direction="right" delay={0.2} className="space-y-4 text-sm md:text-[17px] text-neutral-300 font-normal leading-relaxed">
              <p>
                A <strong className="font-semibold text-white">Webwize</strong> nasceu para resolver o maior problema do marketing B2B: o abismo entre o que é investido em campanhas e o que de fato vira contrato fechado no time de vendas.
              </p>
              <p>
                Fundada por <strong className="font-semibold text-white">Lucas Gabriel</strong>, estrategista com sólida trajetória em geração de demanda, estruturação de CRM, automação comercial e inteligência artificial, a operação foi moldada para empresas que buscam rigor técnico e previsibilidade comercial.
              </p>
              <p>
                Aqui não há espaço para métricas de vaidade ou relatórios confusos. Cada ação, página e automação é desenhada com um único objetivo: <strong className="font-semibold text-white">gerar oportunidades qualificadas de venda e transformar marketing em um motor sustentável de crescimento corporativo.</strong>
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="pt-2">
              <button
                type="button"
                data-open-lead-modal="true"
                data-lead-source="sobre"
                aria-label="Solicitar diagnóstico com Lucas Gabriel"
                className="btn-luxo-azul !text-[17px] cursor-pointer"
              >
                <span>Solicitar diagnóstico com Lucas Gabriel</span>
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CTA BANNER FINAL
          ========================================================================= */}
      <section className="relative py-16 md:py-[100px] bg-gradient-to-b from-[#66AFFF] to-[#4E83FF] border-b border-[#FF5A00]/60 text-center overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-4 space-y-6">
          <FadeIn direction="left">
            <h2 className="text-3xl sm:text-4xl md:text-[54px] font-semibold text-white leading-tight">
              Quanto da sua próxima receita <br className="hidden sm:inline" />
              já está sendo construída hoje?
            </h2>
          </FadeIn>

          <div className="rhombus-divider-center">
            <div className="rhombus-dot bg-white shadow-[0_0_10px_white]" />
          </div>

          <FadeIn direction="right" delay={0.1}>
            <p className="text-base md:text-[19px] text-white/95 max-w-2xl mx-auto font-normal leading-relaxed">
              Se você quer transformar marketing em uma fonte consistente de oportunidades de venda, parar de depender da sorte e criar uma máquina de aquisição previsível para sua empresa B2B, faça sua solicitação agora.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              data-open-lead-modal="true"
              data-lead-source="cta_final"
              aria-label="Solicitar diagnóstico gratuito"
              className="btn-luxo !text-[20px] !py-4 !px-10 cursor-pointer w-full sm:w-auto"
            >
              <span>Solicitar diagnóstico gratuito</span>
            </button>

            <a
              href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20a%20opera%C3%A7%C3%A3o%20B2B%20da%20minha%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar via WhatsApp"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-black/30 hover:bg-black/45 border border-white/40 text-white font-semibold text-base transition-all w-full sm:w-auto text-center"
            >
              <span>Conversar via WhatsApp</span>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
