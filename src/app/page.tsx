import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "Webwize | Marketing B2B, CRM, Automação e Inteligência Artificial",
  description:
    "A Webwize estrutura aquisição, campanhas, páginas, CRM, automações, dados e inteligência artificial para transformar marketing em uma fonte consistente de oportunidades comerciais.",
  alternates: {
    canonical: "https://lucasgabriel-site.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const problemBullets = [
    {
      number: "01",
      title: "Leads desqualificados",
      desc: "Contatos fora do perfil de cliente ideal (ICP) que custam tempo precioso e desgastam a equipe comercial.",
    },
    {
      number: "02",
      title: "Páginas sem conversão",
      desc: "Tráfego pago sem páginas e mensagens desenhadas para converter tomadores de decisão corporativos.",
    },
    {
      number: "03",
      title: "Vendas e marketing desconectados",
      desc: "Equipes desalinhadas trabalhando em silos e culpando uma à outra pela falta de reuniões fechadas.",
    },
    {
      number: "04",
      title: "CRM mal estruturado",
      desc: "Pipeline abandonado, sem processos padronizados de qualificação e sem acompanhamento diário da equipe.",
    },
    {
      number: "05",
      title: "Follow-ups lentos ou inexistentes",
      desc: "Oportunidades quentes esfriam e se perdem por falta de agilidade no primeiro contato e ausência de automação.",
    },
    {
      number: "06",
      title: "Falta de clareza sobre canais",
      desc: "Incerteza total sobre qual fonte de tráfego realmente gera reuniões de fechamento e faturamento real.",
    },
    {
      number: "07",
      title: "Decisões no escuro",
      desc: "Estratégias guiadas por intuição sem dados confiáveis de atribuição, CAC (Custo de Aquisição) e LTV.",
    },
    {
      number: "08",
      title: "Operação fragmentada",
      desc: "Múltiplos fornecedores isolados que não conversam entre si e não assumem responsabilidade pelo resultado comercial.",
    },
  ];

  const comparisonIsolated = [
    "Anúncios sem estratégia comercial e foco apenas em cliques",
    "Páginas genéricas sem proposta de valor clara para B2B",
    "Leads jogados no WhatsApp sem contexto ou filtro prévio",
    "Sem follow-up sistemático: perda constante de leads por lentidão",
    "Métricas de vaidade (cliques, impressões e curtidas)",
    "Marketing e vendas trabalhando isolados e culpando um ao outro",
    "Processos manuais, lentos e dependentes de memória individual",
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
      subtitle: "Mídia paga precisa e prospecção corporativa",
      desc: "Google Ads (capturando clientes na intenção máxima de busca), Meta Ads e LinkedIn Ads mirando tomadores de decisão específicos (C-Level, Diretores e Gerentes). Tráfego qualificado com intenção real de compra.",
      deliverables: [
        "Google Search de alta intenção e intenção comercial",
        "LinkedIn Ads focado em empresas-alvo e cargos de decisão",
        "Remarketing omnichannel para contas em consideração",
        "Negativação contínua de termos e filtros rigorosos de ICP",
      ],
      tags: ["Google Ads", "LinkedIn Ads", "ICP B2B", "Remarketing"],
    },
    {
      number: "02",
      title: "Estrutura de Conversão",
      subtitle: "Landing pages de altíssimo impacto e velocidade",
      desc: "Páginas com carregamento em milissegundos, design que transmite autoridade imediata e copywriting focado nas dores reais do cliente B2B, conduzindo o visitante ao agendamento com vendas.",
      deliverables: [
        "Landing Pages de altíssima velocidade (Next.js & Pure CSS)",
        "Copywriting estratégico focado no ciclo consultivo",
        "Formulários inteligentes com validação e enriquecimento",
        "Testes contínuos de títulos, provas sociais e conversão",
      ],
      tags: ["Landing Pages", "Copywriting B2B", "Velocidade", "Conversão"],
    },
    {
      number: "03",
      title: "CRM e Operação Comercial",
      subtitle: "Processo de vendas padronizado e visibilidade total",
      desc: "Implementação e configuração do CRM de ponta a ponta. Criamos pipelines estruturados, critérios objetivos de qualificação (MQL para SQL), definição de SLA de resposta e cadência operacional.",
      deliverables: [
        "Estruturação de pipeline por etapas do ciclo de decisão",
        "Definição de regras de qualificação (ICP, orçamento, urgência)",
        "SLA comercial de atendimento rápido a novos leads",
        "Treinamento e cadência operacional para os vendedores",
      ],
      tags: ["Pipeline", "Qualificação SQL", "SLA Comercial", "CRM"],
    },
    {
      number: "04",
      title: "Automação e IA",
      subtitle: "Agilidade operacional e qualificação 24/7",
      desc: "Utilizamos inteligência artificial e automações avançadas para acelerar o tempo de resposta aos novos contatos, triagem inicial via agentes inteligentes e nutrição contínua no WhatsApp.",
      deliverables: [
        "Agentes de IA para pré-qualificação imediata via WhatsApp",
        "Cadências automáticas de nutrição e reengajamento comercial",
        "Distribuição inteligente e automática de oportunidades",
        "Integração de APIs de mensageria, CRM e formulários",
      ],
      tags: ["Agentes de IA", "Nutrição", "WhatsApp API", "Automações"],
    },
    {
      number: "05",
      title: "Dados e Inteligência Comercial",
      subtitle: "Clareza absoluta sobre CAC, ROI e retorno real",
      desc: "Dashboards em tempo real com atribuição clara de receita por canal, custo por oportunidade qualificada (SQL), ciclo médio de fechamento e retorno sobre o investimento.",
      deliverables: [
        "Dashboards de aquisição e performance comercial em tempo real",
        "Atribuição precisa de receita por anúncio e canal de entrada",
        "Acompanhamento rigoroso de CAC, LTV e taxa de conversão",
        "Reuniões periódicas de alinhamento tático orientadas a dados",
      ],
      tags: ["Dashboards", "Atribuição", "CAC & LTV", "Business Intelligence"],
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnóstico Estratégico",
      timeframe: "Semanas 01 e 02",
      desc: "Mapeamento profundo do cenário atual da empresa, personas B2B, gargalos no funil de vendas e oportunidades imediatas de receita.",
      points: [
        "Auditoria completa de canais anteriores e métricas históricas",
        "Entrevistas com liderança e equipe comercial",
        "Definição do Perfil de Cliente Ideal (ICP) e critérios de qualificação",
        "Mapeamento do plano tático de implementação",
      ],
    },
    {
      number: "02",
      title: "Estruturação e Engenharia",
      timeframe: "Semanas 03 e 04",
      desc: "Desenho da arquitetura do funil de aquisição, mensagem central de autoridade e infraestrutura técnica das páginas e CRM.",
      points: [
        "Criação das Landing Pages de alta conversão (Next.js)",
        "Desenvolvimento do copy de autoridade e proposta de valor",
        "Configuração e modelagem do funil no CRM",
        "Definição de SLAs e regras de passagem de bastão comercial",
      ],
    },
    {
      number: "03",
      title: "Implementação e Ativação",
      timeframe: "Semanas 05 e 06",
      desc: "Ativação prática de campanhas de tráfego, automações de resposta instantânea, agentes de IA e entrega de oportunidades ao time comercial.",
      points: [
        "Ativação de mídia paga no Google, Meta e LinkedIn",
        "Integração de APIs de WhatsApp, formulários e CRM",
        "Ativação de fluxos de nutrição e triagem inteligente",
        "Alinhamento operacional com os vendedores sobre o fluxo de entrada",
      ],
    },
    {
      number: "04",
      title: "Otimização e Escala",
      timeframe: "Contínuo",
      desc: "Análise rigorosa de dados de conversão, reuniões periódicas de alinhamento com a equipe comercial e expansão orientada ao ROI real.",
      points: [
        "Análise contínua de CAC, LTV e conversão por canal",
        "Testes contínuos de criativos, copys e páginas",
        "Reuniões periódicas de alinhamento com equipe de vendas",
        "Escala previsível de investimento e faturamento",
      ],
    },
  ];

  const b2bSegments = [
    {
      title: "Indústrias & Manufatura",
      desc: "Empresas com ticket elevado, catálogo técnico e necessidade de gerar cotações qualificadas com compradores e diretores industriais.",
    },
    {
      title: "SaaS & Empresas de Tecnologia",
      desc: "Softwares corporativos e plataformas que buscam volume previsível de demonstrações e reuniões qualificadas com tomadores de decisão.",
    },
    {
      title: "Serviços B2B & Consultorias",
      desc: "Consultorias empresariais, escritórios jurídicos, engenharia e logística que vendem contratos consultivos de alto valor agregado.",
    },
    {
      title: "Distribuidoras & Atacadistas",
      desc: "Operações comerciais que precisam expandir a carteira de revendedores, lojistas e clientes corporativos de forma ativa e digital.",
    },
  ];

  const criteriaYes = [
    "Sua empresa vende produtos ou serviços para outras empresas (B2B)",
    "Possui produto ou serviço validado com clientes ativos e satisfeitos",
    "Ticket médio estruturado e ciclo de venda consultivo",
    "Equipe comercial (ou sócio) dedicada ao fechamento de reuniões",
    "Capacidade operacional para absorver novas demandas comerciais",
    "Busca por previsibilidade e rigor técnico, não por métricas de vaidade",
  ];

  const criteriaNo = [
    "Empresas B2C (venda direta para consumidor final ou e-commerce tradicional)",
    "Negócios sem modelo validado ou em fase de ideação inicial",
    "Quem busca apenas 'postagens em redes sociais' sem métrica de negócio",
    "Quem não possui equipe ou processo para realizar follow-up comercial",
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
        name: "Como a Webwize atua na prática?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Atuamos em 4 etapas estruturadas: Diagnóstico Estratégico, Estruturação e Engenharia, Implementação e Ativação, e Otimização e Escala Contínua.",
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[#070707] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* =========================================================================
          SECTION 1: HERO (#hero)
          ========================================================================= */}
      <section
        id="hero"
        className="w-full relative min-h-[750px] flex items-center justify-start border-b border-white/[0.08] overflow-hidden"
      >
        {/* Desktop background image with priority */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          <Image
            src="/images/Lucas-Gabriel-pagina-azul_01.webp"
            alt="Webwize - Marketing, tecnologia e vendas para empresas B2B"
            fill
            priority
            quality={80}
            style={{ objectFit: "cover", objectPosition: "top" }}
            sizes="100vw"
          />
        </div>
        {/* Mobile background image with priority */}
        <div className="absolute inset-0 block md:hidden pointer-events-none">
          <Image
            src="/images/Lucas-gabriel-mobile-111.webp"
            alt="Webwize - Mobile"
            fill
            priority
            quality={80}
            style={{ objectFit: "cover", objectPosition: "top" }}
            sizes="100vw"
          />
        </div>

        {/* Hero Content Box */}
        <div className="relative max-w-6xl mx-auto px-8 md:px-16 lg:px-24 w-full pt-[280px] pb-12 md:py-24 flex items-center">
          <div className="w-full md:w-[52%] border-l-[3px] border-[#4E83FF] pl-7 space-y-5 text-left">
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
          SECTION 2: O PROBLEMA (#o-problema)
          ========================================================================= */}
      <section
        id="o-problema"
        className="w-full py-24 relative border-b border-white/[0.08] bg-[#070707] bg-cover bg-top bg-no-repeat overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat pointer-events-none opacity-40"
          style={{
            backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_02.webp')",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-8 md:px-16 lg:px-24 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Cards à esquerda — grid 2x4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problemBullets.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-white/[0.08] bg-[#0E0E0E]/90 hover:border-[#4E83FF]/40 transition-all flex flex-col justify-start text-left"
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
                </div>
              ))}
            </div>

            {/* Texto à direita */}
            <div className="space-y-6 text-left">
              <FadeIn direction="right">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4E83FF] font-sora">
                  O Desafio Comercial
                </p>
              </FadeIn>

              <FadeIn direction="right" delay={0.1}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.2]">
                  O problema raramente{" "}
                  <em className="italic text-gradient-blue font-serif font-medium">
                    é só o tráfego.
                  </em>
                </h2>
              </FadeIn>

              <div className="rhombus-divider">
                <div className="rhombus-dot" />
              </div>

              <FadeIn direction="right" delay={0.2} className="space-y-4 text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                <p>
                  A maioria das empresas que tenta crescer no B2B enfrenta o mesmo gargalo: contratam agências de anúncios, disparam e-mails e postam conteúdos, mas nada disso está conectado com o time de vendas.
                </p>
                <p className="font-semibold text-white pt-1">
                  A Webwize integra todos esses pontos em uma única operação unificada de aquisição.
                </p>
              </FadeIn>

              <div className="pt-2">
                <button
                  type="button"
                  data-open-lead-modal="true"
                  data-lead-source="o_problema"
                  aria-label="Diagnosticar gargalos da minha empresa"
                  className="btn-luxo-azul !py-3 !px-6 !text-sm cursor-pointer"
                >
                  <span>Diagnosticar meus gargalos</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMPARAÇÃO (MARKETING ISOLADO VS OPERAÇÃO ESTRUTURADA)
          ========================================================================= */}
      <section
        id="comparacao"
        className="w-full py-24 relative border-b border-white/[0.08] bg-[#070707] bg-cover bg-top bg-no-repeat overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat pointer-events-none opacity-30"
          style={{
            backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_03.webp')",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-8 md:px-16 lg:px-24 w-full text-center">
          <FadeIn direction="down">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#4E83FF] font-sora mb-2">
              Mudança de Paradigma
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold leading-snug max-w-3xl mx-auto font-sans">
              A diferença entre fazer marketing e{" "}
              <em className="italic text-gradient-blue font-serif font-medium">
                construir uma operação de aquisição.
              </em>
            </h2>
          </FadeIn>

          <div className="rhombus-divider-center">
            <div className="rhombus-dot" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-left">
            {/* Coluna 1: Marketing Isolado */}
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0E0E0E] border border-white/[0.08] hover:border-red-500/30 transition-all">
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 font-sora">
                Marketing Isolado
              </div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-6 font-sans">
                O modelo fragmentado comum
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
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0E0E0E] border border-[#4E83FF]/40 shadow-xl shadow-[#4E83FF]/5 hover:border-[#4E83FF] transition-all">
              <div className="inline-block px-3 py-1 rounded-full bg-[#4E83FF]/15 border border-[#4E83FF]/40 text-[#66AFFF] text-xs font-semibold uppercase tracking-wider mb-4 font-sora">
                Operação Estruturada
              </div>
              <h3 className="text-lg font-semibold text-white mb-6 font-sans">
                A abordagem Webwize
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
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: A SOLUÇÃO (#a-solucao)
          ========================================================================= */}
      <section
        id="a-solucao"
        className="w-full py-24 relative border-b border-white/[0.08] bg-[#070707] bg-cover bg-top bg-no-repeat overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-35">
          <Image
            src="/images/Lucas-Gabriel-pagina-azul_04.webp"
            alt="Lucas Gabriel - Webwize"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-8 md:px-16 lg:px-24 w-full text-left">
          <div className="max-w-3xl space-y-6">
            <FadeIn direction="left">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#4E83FF] font-sora">
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

            <p className="text-sm md:text-base text-neutral-300 font-normal leading-relaxed">
              A Webwize não entrega apenas anúncios soltos ou relatórios que não dizem nada. Criamos uma verdadeira máquina que une geração de demanda, páginas de alta conversão, CRM ativo, automações inteligentes e IA para abastecer seu time de vendas com reuniões qualificadas.
            </p>

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

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                data-open-lead-modal="true"
                data-lead-source="solucao"
                aria-label="Solicitar diagnóstico da minha empresa"
                className="btn-luxo-azul !py-3.5 !px-8 !text-sm cursor-pointer"
              >
                <span>Solicitar diagnóstico</span>
              </button>

              <a
                href="#os-5-pilares"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#66AFFF] hover:text-white transition-colors"
              >
                <span>Ver os 5 pilares detalhados</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OS 5 PILARES DA OPERAÇÃO WEBWIZE (#os-5-pilares)
          ========================================================================= */}
      <section
        id="os-5-pilares"
        className="w-full py-32 relative border-b border-white/[0.08] bg-[#121212] text-center"
      >
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <FadeIn direction="down">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#4E83FF] font-sora mb-2">
              Infraestrutura Completa
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold max-w-3xl mx-auto leading-snug font-sans">
              Os 5 Pilares da{" "}
              <em className="italic text-gradient-blue font-serif font-medium">
                Operação Webwize
              </em>
            </h2>
            <p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto mt-3 font-normal">
              Tudo o que sua empresa precisa para transformar marketing em receita previsível e recorrente.
            </p>
          </FadeIn>

          <div className="rhombus-divider-center">
            <div className="rhombus-dot" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-left">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-[#0B0B0B] border border-white/[0.08] p-6 hover:border-[#4E83FF]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4E83FF] font-sora">
                      Pilar {item.number}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#4E83FF]/15 border border-[#4E83FF]/30 flex items-center justify-center text-[#66AFFF]">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 font-sans group-hover:text-[#66AFFF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#66AFFF] mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-4">
                    {item.desc}
                  </p>

                  {/* Entregáveis */}
                  <div className="space-y-2 mb-4 pt-3 border-t border-white/[0.06]">
                    <p className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider font-sora">
                      Entregas principais:
                    </p>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-[#4E83FF] mt-0.5">•</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* 6th Card: Diagnóstico Comercial */}
            <div className="rounded-2xl bg-gradient-to-br from-[#1d4ed8]/30 via-[#0B0B0B] to-[#0B0B0B] border border-[#4E83FF]/40 p-6 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#66AFFF] font-sora">
                  Próximo Passo
                </span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2 font-sans">
                  Implemente os 5 Pilares na sua empresa
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Solicite um diagnóstico gratuito para avaliar quais pilares precisam de implementação imediata no seu modelo comercial.
                </p>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  data-open-lead-modal="true"
                  data-lead-source="os_5_pilares"
                  aria-label="Solicitar diagnóstico dos 5 pilares"
                  className="btn-luxo-azul w-full !py-3 !text-xs text-center cursor-pointer block"
                >
                  <span>Solicitar diagnóstico dos 5 pilares</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: COMO FUNCIONA (#como-funciona)
          ========================================================================= */}
      <section
        id="como-funciona"
        className="w-full py-32 relative border-b border-white/[0.08] bg-[#070707] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 text-left">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn direction="down">
              <p className="text-xs font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-2">
                Método de Execução
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight font-sans">
                Como Funciona a Execução em{" "}
                <em className="italic text-gradient-blue font-serif font-medium">
                  4 Etapas
                </em>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 mt-3 font-light">
                Do diagnóstico inicial até a máquina rodando com dados e otimização contínua.
              </p>
            </FadeIn>
            <div className="rhombus-divider-center">
              <div className="rhombus-dot" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E0E0E] border border-white/[0.08] hover:border-[#4E83FF]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#4E83FF]/15 border border-[#4E83FF]/30 text-[#66AFFF] flex items-center justify-center font-bold text-sm font-sora">
                        {st.number}
                      </div>
                      <h3 className="text-base font-bold text-white font-sans">{st.title}</h3>
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.05]">
                      {st.timeframe}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                    {st.desc}
                  </p>

                  <ul className="space-y-1.5 text-xs text-neutral-300 pt-3 border-t border-white/[0.06]">
                    {st.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-[#4E83FF] mt-0.5">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              data-open-lead-modal="true"
              data-lead-source="como_funciona"
              aria-label="Agendar diagnóstico da metodologia"
              className="btn-luxo-azul !py-3 !px-8 !text-sm cursor-pointer"
            >
              <span>Agendar diagnóstico da metodologia</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PARA QUEM É (#para-quem)
          ========================================================================= */}
      <section
        id="para-quem"
        className="w-full py-24 relative border-b border-white/[0.08] bg-[#0E0E0E] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 text-left">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn direction="down">
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#4E83FF] font-sora mb-2">
                Foco Exclusivo
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug font-sans">
                Para empresas que{" "}
                <em className="italic text-gradient-blue font-serif font-medium">
                  vendem para empresas.
                </em>
              </h2>
              <p className="text-sm md:text-base text-neutral-300 mt-3 font-light">
                Metodologia desenhada especificamente para o ciclo de vendas complexo e consultivo.
              </p>
            </FadeIn>
            <div className="rhombus-divider-center">
              <div className="rhombus-dot" />
            </div>
          </div>

          {/* 2 Perfis Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="kps-step text-left">
              <div className="kps-icon-wrap">
                <svg viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-2">
                Perfil 01
              </p>
              <h3 className="text-xl font-bold text-white mb-2">Empresas com Venda Consultiva</h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-4">
                Negócios com produto ou serviço validado que chegaram no limite do crescimento dependente de indicações e networking casual.
              </p>
              <div className="kps-divider" />
            </div>

            <div className="kps-step text-left">
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
              <h3 className="text-xl font-bold text-white mb-2">Líderes Prontos para Escala</h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-4">
                Organizações prontas para abastecer o time de vendas diariamente com leads qualificados, CRM ativo e processos previsíveis.
              </p>
              <div className="kps-divider" />
            </div>
          </div>

          {/* Segmentos B2B */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-white mb-6 text-center font-sans">
              Segmentos B2B com alta aderência
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {b2bSegments.map((seg, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#070707] border border-white/[0.08] hover:border-[#4E83FF]/40 transition-all flex flex-col justify-start"
                >
                  <span className="text-xs font-bold text-[#66AFFF] mb-2 font-sora">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2">{seg.title}</h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {seg.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Critérios: Para quem é vs Para quem não é */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-[#070707] border border-[#4E83FF]/30">
              <div className="inline-block px-3 py-1 rounded-full bg-[#4E83FF]/15 text-[#66AFFF] text-xs font-semibold uppercase tracking-wider mb-4 font-sora">
                Para quem É a Webwize
              </div>
              <ul className="space-y-3 text-sm text-neutral-300 font-light">
                {criteriaYes.map((crit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#4E83FF] font-bold">✓</span>
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-[#070707] border border-red-500/20">
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 font-sora">
                Para quem NÃO é
              </div>
              <ul className="space-y-3 text-sm text-neutral-400 font-light">
                {criteriaNo.map((crit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: SOBRE A WEBWIZE & LUCAS GABRIEL (#sobre)
          ========================================================================= */}
      <section
        id="sobre"
        className="w-full py-24 relative border-b border-white/[0.08] bg-[#070707] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Coluna esquerda — foto */}
            <div className="relative">
              <Image
                src="/images/lucas-sobre.webp"
                alt="Lucas Gabriel"
                width={520}
                height={620}
                className="rounded-2xl object-cover object-top w-full"
              />
            </div>

            {/* Coluna direita — texto */}
            <div className="flex flex-col gap-6 text-left">
              <span className="text-blue-500 text-sm font-semibold tracking-widest uppercase font-sora">
                Quem faz acontecer
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight font-sans">
                Sobre a Webwize & <em className="text-blue-400 not-italic">Lucas Gabriel</em>
              </h2>
              <div className="w-16 h-0.5 bg-blue-600" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                A Webwize nasceu para resolver o maior problema do marketing B2B: o abismo entre o que é investido em campanhas e o que de fato vira contrato fechado no time de vendas.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Fundada por <strong className="text-white font-semibold">Lucas Gabriel</strong>, estrategista com sólida trajetória em geração de demanda, estruturação de CRM, automação comercial e inteligência artificial, a operação é orientada a resultados comerciais mensuráveis, sem métricas de vaidade.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Atuamos como um braço estratégico e técnico integrado à sua equipe, garantindo que cada real investido em aquisição gere dados claros de CAC, ciclo de venda e retorno financeiro previsível.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button
                  type="button"
                  data-open-lead-modal="true"
                  data-lead-source="sobre"
                  aria-label="Solicitar diagnóstico com Lucas Gabriel"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors cursor-pointer text-center"
                >
                  <span>Solicitar diagnóstico</span>
                </button>
                <a
                  href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20a%20Webwize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 hover:border-gray-400 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors text-center"
                >
                  <span>Conversar diretamente</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CTA BANNER FINAL (#cta-final)
          ========================================================================= */}
      <section
        id="cta-final"
        className="w-full py-24 relative bg-gradient-to-b from-[#66AFFF] to-[#4E83FF] border-b border-[#FF5A00]/60 text-center overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 space-y-6">
          <FadeIn direction="left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight font-sans">
              Quanto da sua próxima receita <br className="hidden sm:inline" />
              já está sendo construída hoje?
            </h2>
          </FadeIn>

          <div className="rhombus-divider-center">
            <div className="rhombus-dot bg-white shadow-[0_0_10px_white]" />
          </div>

          <FadeIn direction="right" delay={0.1}>
            <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto font-normal leading-relaxed">
              Se você quer transformar marketing em uma fonte consistente de oportunidades de venda, parar de depender da sorte e criar uma máquina de aquisição previsível para sua empresa B2B, faça sua solicitação agora.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              data-open-lead-modal="true"
              data-lead-source="cta_final"
              aria-label="Solicitar diagnóstico gratuito"
              className="btn-luxo !text-[18px] !py-4 !px-10 cursor-pointer w-full sm:w-auto"
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
