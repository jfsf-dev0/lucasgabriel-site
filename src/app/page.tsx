import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/content";
import PostCard from "@/components/PostCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrappers";

export default async function HomePage() {
  const posts = await getAllPosts(false);
  const categories = await getAllCategories();

  const problemCards = [
    {
      title: "Falta de estrutura estratégica para crescer.",
      bg: "#0B0B0B",
      icon: (
        <svg className="w-5 h-5 text-[#4E83FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Marketing sem previsibilidade de aquisição.",
      bg: "#060606",
      icon: (
        <svg className="w-5 h-5 text-[#4E83FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Dependência excessiva de indicação.",
      bg: "#0B0B0B",
      icon: (
        <svg className="w-5 h-5 text-[#4E83FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Pouca diferenciação no mercado.",
      bg: "#060606",
      icon: (
        <svg className="w-5 h-5 text-[#4E83FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
        </svg>
      ),
    },
    {
      title: "Baixa consistência na geração de oportunidades.",
      bg: "#0B0B0B",
      icon: (
        <svg className="w-5 h-5 text-[#4E83FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Crescimento travado por falta de posicionamento.",
      bg: "#060606",
      icon: (
        <svg className="w-5 h-5 text-[#4E83FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
  ];

  const deliverables = [
    {
      image: "/images/Lucas-01.jpg",
      title: "Gestão de Tráfego Pago",
      desc: "Google Ads e Meta Ads gerenciados com estratégia, não apenas no automático.",
    },
    {
      image: "/images/Lucas-02.jpg",
      title: "Criação e Otimização de Campanhas",
      desc: "Campanhas construídas para converter, com testes constantes e melhora contínua.",
    },
    {
      image: "/images/Lucas-03.jpg",
      title: "Landing Pages de Conversão",
      desc: "Estruturação de páginas otimizadas para transformar visitantes em leads.",
    },
    {
      image: "/images/Lucas-04.jpg",
      title: "Google Business Profile",
      desc: "Otimização do seu perfil para aparecer mais e melhor nas buscas locais.",
    },
    {
      image: "/images/Lucas-05.jpg",
      title: "Remarketing Estratégico",
      desc: "Recuperação de leads que visitaram mas ainda não converteram.",
    },
    {
      image: "/images/Lucas-06.jpg",
      title: "Estratégia de Conteúdo",
      desc: "Posicionamento digital que gera autoridade e atrai clientes organicamente.",
    },
    {
      image: "/images/Lucas-08.jpg",
      title: "Análise de Métricas",
      desc: "Relatórios claros sobre o que está funcionando e onde estão as oportunidades.",
    },
    {
      image: "/images/Lucas-07.jpg",
      title: "Automações",
      desc: "Automatize tarefas repetitivas, atendimento e processos para ganhar eficiência, reduzir custos e escalar seu negócio.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[800px] flex items-center justify-center border-b border-white/[0.08] overflow-hidden">
        {/* Desktop background */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-top bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_01.jpg')",
          }}
        />
        {/* Mobile background */}
        <div
          className="absolute inset-0 block md:hidden bg-cover bg-top bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/images/Lucas-gabriel-mobile-111.jpg')",
          }}
        />

        {/* Content Box */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-[380px] pb-16 md:pt-28 md:pb-28">
          <div className="md:w-[48%] border-l-[3px] border-[#4E83FF] pl-6 md:pl-8 space-y-6">
            <FadeIn direction="left" delay={0.1}>
              <p className="text-xs sm:text-sm font-medium tracking-wide text-neutral-300">
                Serviços de implementação de Marketing
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-white">
                Estruturação e Implementação de Marketing para{" "}
                <em className="italic text-gradient-blue font-serif font-medium">
                  Aceleração de Negócios
                </em>
              </h1>
            </FadeIn>

            <div className="rhombus-divider">
              <div className="rhombus-dot" />
            </div>

            <FadeIn direction="left" delay={0.3}>
              <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed">
                <strong className="font-semibold text-white">
                  Transforme o potencial da sua empresa para impulsionar suas vendas
                </strong>{" "}
                e preparar seu negócio para o próximo nível de crescimento através de estratégias de Marketing e posicionamento.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="pt-2">
              <a
                href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxo-azul w-full sm:w-auto"
              >
                <span>Quero me aplicar para o programa de aceleração</span>
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M505.1 19.1c-1.2-5.5-6.7-11-12.2-12.2C460.7 0 435.5 0 410.4 0 307.2 0 245.3 55.2 199.1 128H94.8c-16.3 0-35.6 11.9-42.9 26.5L2.5 253.3A28.4 28.4 0 000 264a24 24 0 0024 24h103.8l-22.5 22.5c-11.4 11.4-13 32.3 0 45.3l45.3 45.3c11.2 11.2 32.2 13.2 45.3 0l22.5-22.5V488a24 24 0 0024 24 28.6 28.6 0 0010.7-2.5l98.7-49.4c14.6-7.3 26.5-26.5 26.5-42.9v-104.4c72.6-46.3 128-108.4 128-211.1 0-25.2 0-50.4-7-82.6zm-121.1 148.9a40 40 0 1140-40 40 40 0 01-40 40z" />
                </svg>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: A METODOLOGIA (#metodologia)
          ========================================================================= */}
      <section
        id="metodologia"
        className="relative py-20 md:py-28 border-b border-white/[0.08] bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_02.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left intro */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn direction="right">
                <p className="text-xs font-bold uppercase tracking-widest text-[#4E83FF] font-sora">
                  A METODOLOGIA
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
                  A metodologia utilizada para transformar marketing em um sistema previsível de{" "}
                  <em className="italic text-gradient-blue font-serif font-medium">
                    aquisição de clientes e crescimento.
                  </em>
                </h2>
              </FadeIn>

              <div className="rhombus-divider">
                <div className="rhombus-dot" />
              </div>

              <FadeIn direction="down" delay={0.2}>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  Uma abordagem desenvolvida para estruturar, implementar e otimizar os pilares que{" "}
                  <strong className="font-semibold text-white">
                    impulsionam aquisição de clientes, vendas e crescimento sustentável.
                  </strong>
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} className="pt-2">
                <a
                  href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxo-azul w-full sm:w-auto"
                >
                  <span>Quero me aplicar para o programa de aceleração</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M505.1 19.1c-1.2-5.5-6.7-11-12.2-12.2C460.7 0 435.5 0 410.4 0 307.2 0 245.3 55.2 199.1 128H94.8c-16.3 0-35.6 11.9-42.9 26.5L2.5 253.3A28.4 28.4 0 000 264a24 24 0 0024 24h103.8l-22.5 22.5c-11.4 11.4-13 32.3 0 45.3l45.3 45.3c11.2 11.2 32.2 13.2 45.3 0l22.5-22.5V488a24 24 0 0024 24 28.6 28.6 0 0010.7-2.5l98.7-49.4c14.6-7.3 26.5-26.5 26.5-42.9v-104.4c72.6-46.3 128-108.4 128-211.1 0-25.2 0-50.4-7-82.6zm-121.1 148.9a40 40 0 1140-40 40 40 0 01-40 40z" />
                  </svg>
                </a>
              </FadeIn>
            </div>

            {/* Right 6 Problem Cards */}
            <div className="lg:col-span-7">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problemCards.map((card, i) => (
                  <StaggerItem
                    key={i}
                    className="p-5 rounded-[10px] border border-white/[0.09] transition-all duration-300 hover:border-[#4E83FF]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4E83FF]/10 flex items-start gap-4"
                    style={{ backgroundColor: card.bg }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#4E83FF]/10 border border-[#4E83FF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {card.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-white leading-snug">
                      {card.title}
                    </h3>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TRANSFORMAÇÃO & COMPARAÇÃO
          ========================================================================= */}
      <section
        className="relative py-20 md:py-28 border-b border-white/[0.08] bg-[#000000] bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_03.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold max-w-3xl mx-auto leading-snug">
              Estamos vivendo uma das MAIORES transformações na{" "}
              <em className="italic text-gradient-blue font-serif font-medium">
                forma como empresas crescem
              </em>
            </h2>
          </FadeIn>

          <div className="rhombus-divider-center">
            <div className="rhombus-dot" />
          </div>

          <FadeIn direction="down" delay={0.1}>
            <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto mb-14 leading-relaxed">
              A próxima década será liderada por empresas capazes de gerar demanda, conquistar clientes e permanecer relevantes para eles continuamente, e essa será sua vantagem competitiva.
            </p>
          </FadeIn>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Card Left: Como a maioria tenta crescer */}
            <FadeIn direction="left" delay={0.2} className="p-8 rounded-2xl bg-[#0E0E0E] border border-white/[0.08] flex flex-col justify-between hover:border-white/20 transition-colors">
              <div>
                <h3 className="text-xl font-bold text-neutral-100 mb-6 font-sans flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-500" />
                  Como a maioria tenta crescer
                </h3>
                <ul className="space-y-3.5 text-sm text-neutral-400 mb-8">
                  {[
                    "Campanhas isoladas",
                    "Marketing sem estratégia",
                    "Dependência de indicação",
                    "Baixa previsibilidade comercial",
                    "Pouca diferenciação no mercado",
                    "Crescimento inconsistente",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-neutral-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/[0.04] text-xs text-neutral-300">
                <strong className="text-white font-semibold">Resultado:</strong> Vendas imprevisíveis, crescimento lento e oportunidades perdidas.
              </div>
            </FadeIn>

            {/* Card Right: Como empresas líderes constroem crescimento */}
            <FadeIn direction="right" delay={0.2} className="p-8 rounded-2xl bg-gradient-to-br from-[#102454]/40 via-[#070707] to-[#070707] border border-[#4E83FF]/60 flex flex-col justify-between shadow-2xl shadow-[#4E83FF]/15 hover:border-[#66AFFF] transition-all">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 font-sans flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4E83FF] shadow-sm shadow-[#4E83FF]" />
                  Como empresas líderes constroem crescimento
                </h3>
                <ul className="space-y-3.5 text-sm text-neutral-200 mb-8">
                  {[
                    "Sistema de marketing integrado",
                    "Posicionamento claro e validado",
                    "Canais previsíveis de aquisição",
                    "Alta previsibilidade comercial",
                    "Diferenciação competitiva sólida",
                    "Crescimento escalável e consistente",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#4E83FF] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-[#4E83FF]/15 border border-[#4E83FF]/30 text-xs text-neutral-200">
                <strong className="text-[#66AFFF] font-semibold">Resultado:</strong> Crescimento acelerado, alta conversão e previsibilidade de receita.
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.4} className="mt-12">
            <a
              href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxo-azul"
            >
              <span>Quero me aplicar para o programa de aceleração</span>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: A SOLUÇÃO (#solucao)
          ========================================================================= */}
      <section
        id="solucao"
        className="relative py-20 md:py-28 border-b border-white/[0.08] bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_03.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left details */}
            <div className="lg:col-span-6 space-y-6">
              <FadeIn direction="left">
                <p className="text-xs font-bold uppercase tracking-widest text-[#4E83FF] font-sora">
                  A SOLUÇÃO
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
                  Como funciona a{" "}
                  <em className="italic text-gradient-blue font-serif font-medium">
                    implementação do serviço?
                  </em>
                </h2>
              </FadeIn>

              <div className="rhombus-divider">
                <div className="rhombus-dot" />
              </div>

              <FadeIn direction="down" delay={0.2}>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  Durante 90 dias, estruturamos e implementamos os principais pilares responsáveis pela aquisição de{" "}
                  <strong className="font-semibold text-white">
                    clientes, vendas e crescimento da sua empresa.
                  </strong>
                </p>
              </FadeIn>

              {/* Stat badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-[#4E83FF]/15 border border-[#4E83FF]/40 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#4E83FF]/20 flex items-center justify-center text-[#66AFFF]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Resultado mensurável</h4>
                    <p className="text-xs text-neutral-400">Metas de ROI e conversão</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#4E83FF]/15 border border-[#4E83FF]/40 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#4E83FF]/20 flex items-center justify-center text-[#66AFFF]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Dados em tempo real</h4>
                    <p className="text-xs text-neutral-400">Dashboards e acompanhamento</p>
                  </div>
                </div>
              </div>

              <FadeIn direction="up" delay={0.3} className="pt-4">
                <a
                  href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxo-azul w-full sm:w-auto"
                >
                  <span>Quero me aplicar para o programa de aceleração</span>
                </a>
              </FadeIn>
            </div>

            {/* Right: Flow Process Card */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#0E0E0E]/90 border border-white/[0.09] shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                <div className="w-12 h-12 rounded-xl bg-[#4E83FF]/15 border border-[#4E83FF]/40 flex items-center justify-center text-[#66AFFF]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                    Um sistema. Não apenas anúncios.
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Estratégia, posicionamento e execução integrados
                  </p>
                </div>
              </div>

              <div className="flow-wrap">
                {/* Fase 01 */}
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
                    <p className="flow-label">Fase 01</p>
                    <h4 className="text-base font-bold text-white font-sora">Diagnóstico Estratégico</h4>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                      Mapeamos sua empresa, mercado e concorrência para identificar gargalos e oportunidades de crescimento.
                    </p>
                  </div>
                </div>

                {/* Fase 02 */}
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
                    <p className="flow-label">Fase 02</p>
                    <h4 className="text-base font-bold text-white font-sora">Estruturação</h4>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                      Construímos os fundamentos do crescimento: posicionamento, oferta comercial, funil e planejamento.
                    </p>
                  </div>
                </div>

                {/* Fase 03 */}
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
                    <p className="flow-label">Fase 03</p>
                    <h4 className="text-base font-bold text-white font-sora">Implementação</h4>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                      Colocamos a estratégia em prática, ativando os ativos responsáveis por gerar demanda e vendas.
                    </p>
                  </div>
                </div>

                {/* Fase 04 */}
                <div className="flow-item">
                  <div className="flow-left">
                    <div className="flow-dot">
                      <svg viewBox="0 0 24 24">
                        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                  </div>
                  <div className="flow-text">
                    <p className="flow-label">Fase 04</p>
                    <h4 className="text-base font-bold text-white font-sora">Aceleração</h4>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                      Maximizamos conversões e refinamos continuamente processos, equipe e estratégia para garantir crescimento consistente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: O QUE ENTREGO (#entrego)
          ========================================================================= */}
      <section
        id="entrego"
        className="relative py-20 md:py-28 border-b border-white/[0.08] bg-[#151515] bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_04.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down">
            <p className="text-xs font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-2">
              O QUE ENTREGO
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold max-w-2xl mx-auto leading-snug">
              Tudo que o seu negócio precisa para{" "}
              <em className="italic text-gradient-blue font-serif font-medium">
                acelerar vendas
              </em>
            </h2>
          </FadeIn>

          <div className="rhombus-divider-center">
            <div className="rhombus-dot" />
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left">
            {deliverables.map((item, idx) => (
              <StaggerItem
                key={idx}
                className="group rounded-2xl bg-[#0B0B0B] border border-white/[0.08] overflow-hidden hover:border-[#4E83FF]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#4E83FF]/15 flex flex-col"
              >
                <div className="relative w-full aspect-[16/11] bg-neutral-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-white mb-2 leading-snug font-sans group-hover:text-[#66AFFF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PARA QUEM É (#quem)
          ========================================================================= */}
      <section
        id="quem"
        className="relative py-20 md:py-28 border-b border-white/[0.08] bg-[#151515] bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_05.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn direction="down">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
                Para quem é o{" "}
                <em className="italic text-gradient-blue font-serif font-medium">
                  serviço
                </em>
              </h2>
            </FadeIn>
            <div className="rhombus-divider-center">
              <div className="rhombus-dot" />
            </div>
          </div>

          <div className="kps-process-grid">
            {/* Card 1 */}
            <FadeIn direction="left" className="kps-step">
              <div className="kps-icon-wrap">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  <line x1="17" y1="4" x2="21" y2="4" />
                  <line x1="17" y1="7" x2="21" y2="7" />
                  <line x1="19" y1="4" x2="19" y2="1" />
                </svg>
              </div>
              <p className="kps-eyebrow">Para quem é</p>
              <h3>Empresários, Sócios e Fundadores</h3>
              <p>
                Que desejam transformar marketing em crescimento, aumentar suas vendas e construir uma operação capaz de gerar clientes de forma previsível.
              </p>
              <div className="kps-divider" />
            </FadeIn>

            {/* Card 2 */}
            <FadeIn direction="right" className="kps-step">
              <div className="kps-icon-wrap">
                <svg viewBox="0 0 24 24">
                  <polyline points="22 7 13 7 13 2" />
                  <path d="M2 17l4 4 4-4" />
                  <path d="M6 21V9a4 4 0 0 1 4-4h3l5 5v5" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                </svg>
              </div>
              <p className="kps-eyebrow">Para quem é</p>
              <h3>Empresas Prontas para o Próximo Nível</h3>
              <p>
                Que buscam estruturar marketing, vendas e posicionamento para acelerar resultados e crescer com mais consistência.
              </p>
              <div className="kps-divider" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: SOBRE O LUCAS GABRIEL (#sobre)
          ========================================================================= */}
      <section
        id="sobre"
        className="relative py-20 md:py-28 border-b border-white/[0.08] bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_06.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-[50%] space-y-6">
            <FadeIn direction="down">
              <p className="text-xs font-bold uppercase tracking-widest text-[#4E83FF] font-sora">
                Quem faz acontecer
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Sobre o{" "}
                <em className="italic text-gradient-blue font-serif font-medium">
                  Lucas Gabriel
                </em>
              </h2>
            </FadeIn>

            <div className="rhombus-divider">
              <div className="rhombus-dot" />
            </div>

            <FadeIn direction="right" delay={0.2} className="space-y-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              <p>
                Lucas Gabriel é especialista em{" "}
                <strong className="font-semibold text-white">
                  aquisição de clientes através de tráfego pago e posicionamento digital
                </strong>
                , com atuação focada em transformar{" "}
                <strong className="font-semibold text-white">
                  negócios locais e prestadores de serviço em máquinas previsíveis de vendas
                </strong>
                .
              </p>
              <p>
                Ao longo da sua experiência, desenvolveu um método prático que une{" "}
                <strong className="font-semibold text-white">
                  estratégia, análise de dados e execução direta
                </strong>
                , eliminando a dependência de indicação e criando um{" "}
                <strong className="font-semibold text-white">
                  fluxo constante de oportunidades comerciais
                </strong>
                .
              </p>
              <p>
                Seu trabalho é voltado para empresários que querem{" "}
                <strong className="font-semibold text-white">
                  crescimento real, previsível e sustentável,
                </strong>{" "}
                sem achismos, sem promessas vazias e sem dependência de sorte.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="pt-2">
              <a
                href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxo-azul"
              >
                <span>Quero me aplicar para o programa de aceleração</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CTA BANNER FINAL
          ========================================================================= */}
      <section className="relative py-20 md:py-24 bg-gradient-to-r from-[#1746b8] via-[#2358df] to-[#103bb0] border-b border-white/[0.08] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <FadeIn direction="left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Pronto para acelerar <br />
              o seu negócio?
            </h2>
          </FadeIn>

          <div className="rhombus-divider-center">
            <div className="rhombus-dot bg-white shadow-[0_0_10px_white]" />
          </div>

          <FadeIn direction="right" delay={0.1}>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              <strong className="font-semibold text-white">Se você quer transformar marketing </strong>
              <strong className="font-semibold text-white">em crescimento, fortalecer sua </strong>
              <strong className="font-semibold text-white">presença no mercado</strong> e criar uma base sólida para escalar resultados, faça sua aplicação.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="pt-4">
            <a
              href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxo !text-base !py-4 !px-8"
            >
              <span>Quero me aplicar para o programa de aceleração</span>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: PUBLICAÇÕES & ARTIGOS MIGRADOS (MDX)
          ========================================================================= */}
      <section className="relative py-20 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-1">
                Base de Conhecimento
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Artigos & Publicações
              </h2>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <Link
                href="/"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#4E83FF] text-white shadow"
              >
                Todos ({posts.length})
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categoria/${cat.slug}`}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#151515] border border-white/[0.06] text-neutral-300 hover:bg-[#4E83FF]/20 hover:text-[#66AFFF] transition-colors"
                >
                  {cat.name} ({cat.count})
                </Link>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
