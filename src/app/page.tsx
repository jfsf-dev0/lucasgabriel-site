import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/content";
import PostCard from "@/components/PostCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "Lucas Gabriel · Aceleração de Negócios e Marketing",
  description:
    "Estruturação e Implementação de Marketing para Aceleração de Negócios. Transforme o potencial da sua empresa para impulsionar suas vendas e preparar seu negócio para o próximo nível.",
  alternates: {
    canonical: "https://lucasgabriell.com.br",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Dificuldade em cobrar mais caro e fechar grandes clientes.",
      bg: "#0B0B0B",
      icon: (
        <svg className="w-5 h-5 text-[#4E83FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Contratação de agências que apenas postam sem gerar retorno.",
      bg: "#060606",
      icon: (
        <svg className="w-5 h-5 text-[#4E83FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
  ];

  const deliverables = [
    {
      image: "/images/Lucas-01.jpg",
      title: "Diagnóstico Completo",
      desc: "Análise profunda de canais, funil, concorrência e posicionamento da empresa para mapear gargalos.",
    },
    {
      image: "/images/Lucas-02.jpg",
      title: "Posicionamento Estratégico",
      desc: "Construção de uma narrativa comercial de autoridade, elevando a percepção de valor dos seus serviços.",
    },
    {
      image: "/images/Lucas-03.jpg",
      title: "Estruturação de Oferta",
      desc: "Refinamento e formatação de ofertas comerciais com alto apelo de compra e diferenciação de mercado.",
    },
    {
      image: "/images/Lucas-04.jpg",
      title: "Canais de Aquisição",
      desc: "Configuração e ativação de anúncios direcionados (Meta Ads, Google Ads) focados em geração de leads.",
    },
    {
      image: "/images/Lucas-05.jpg",
      title: "Funil de Vendas e CRM",
      desc: "Implementação de processos de qualificação, acompanhamento de leads e organização da equipe comercial.",
    },
    {
      image: "/images/Lucas-06.jpg",
      title: "Otimização de Conversão",
      desc: "Aprimoramento de páginas de captura, pontos de contato e scripts de fechamento para máxima eficiência.",
    },
    {
      image: "/images/Lucas-07.jpg",
      title: "Dashboards de Métricas",
      desc: "Painéis de indicadores em tempo real para tomada de decisões baseada em dados, CAC, LTV e ROI.",
    },
    {
      image: "/images/Lucas-08.jpg",
      title: "Acompanhamento Contínuo",
      desc: "Alinhamentos estratégicos periódicos, refinamento tático constante e suporte executivo direto.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      {/* =========================================================================
          SECTION 1: HERO SECTION (EXACT ELEMENTOR RATIOS & PRIORITY IMAGE PRELOAD)
          ========================================================================= */}
      <section className="relative min-h-[800px] flex items-center justify-start border-b border-white/[0.08] overflow-hidden">
        {/* Desktop background with priority */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          <Image
            src="/images/Lucas-Gabriel-pagina-azul_01.jpg"
            alt="Lucas Gabriel - Aceleração de Negócios e Marketing"
            fill
            priority
            quality={85}
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        {/* Mobile background with priority */}
        <div className="absolute inset-0 block md:hidden pointer-events-none">
          <Image
            src="/images/Lucas-gabriel-mobile-111.jpg"
            alt="Lucas Gabriel - Mobile"
            fill
            priority
            quality={85}
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>

        {/* Content Box (Exact Elementor dimensions: 46% width desktop, min-height 800px, 350px top pad mobile) */}
        <div className="relative max-w-[1140px] mx-auto px-4 w-full pt-[350px] pb-10 md:pt-[100px] md:pb-[60px] flex items-center">
          <div className="w-full md:w-[46%] border-l-[3px] border-[#4E83FF] pl-7 space-y-5 text-left">
            <FadeIn direction="left" delay={0.1}>
              <p className="text-[13px] font-normal tracking-wide text-neutral-300">
                Serviços de implementação de Marketing
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-[48px] font-semibold tracking-tight leading-[1.18] text-white">
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
              <p className="text-sm md:text-[16px] text-neutral-300 font-normal leading-relaxed">
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
                aria-label="Quero me aplicar para o programa de aceleração - Seção Principal"
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
          SECTION 2: METODOLOGIA / DESAFIOS (EXACT ELEMENTOR ROW-REVERSE)
          Desktop: 50% text RIGHT, 47% cards LEFT (2 columns)
          ========================================================================= */}
      <section
        id="metodologia"
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
            
            {/* RIGHT SIDE: Text Column (50% width desktop) */}
            <div className="w-full md:w-[50%] space-y-6 text-left">
              <FadeIn direction="right">
                <p className="text-[14px] font-normal uppercase tracking-widest text-[#4E83FF] font-sora">
                  O Problema
                </p>
              </FadeIn>

              <FadeIn direction="right" delay={0.1}>
                <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold tracking-tight leading-[1.25]">
                  Por que a maioria das empresas{" "}
                  <em className="italic text-gradient-blue font-serif font-medium">
                    não consegue escalar?
                  </em>
                </h2>
              </FadeIn>

              <div className="rhombus-divider">
                <div className="rhombus-dot" />
              </div>

              <FadeIn direction="right" delay={0.2} className="space-y-4 text-sm md:text-[18px] text-neutral-300 font-normal leading-relaxed">
                <p>
                  A maioria das empresas que tenta crescer no digital enfrenta o mesmo problema: criam campanhas, postam conteúdo, contratam serviços, mas{" "}
                  <strong className="font-semibold text-white">não possuem uma estrutura integrada de marketing e vendas.</strong>
                </p>
                <p>
                  O resultado é um processo de aquisição inconsistente, dependente de indicação e com baixa previsibilidade de receita.
                </p>
              </FadeIn>
            </div>

            {/* LEFT SIDE: 6 Cards in 2 Columns (47% width desktop) */}
            <div className="w-full md:w-[47%]">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problemCards.map((item, idx) => (
                  <StaggerItem
                    key={idx}
                    className="p-5 rounded-xl border border-white/[0.08] hover:border-[#4E83FF]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start text-left"
                    style={{ backgroundColor: item.bg }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#4E83FF]/15 border border-[#4E83FF]/30 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TRANSFORMAÇÃO & COMPARATIVO (90% WIDTH CENTERED)
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
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold leading-snug">
              Crescer não é sobre sorte.{" "}
              <em className="italic text-gradient-blue font-serif font-medium">
                É sobre método.
              </em>
            </h2>
          </FadeIn>

          <div className="rhombus-divider-center">
            <div className="rhombus-dot" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
            {/* Card 1: Como a maioria cresce */}
            <FadeIn direction="left" className="p-8 sm:p-10 rounded-2xl bg-[#0E0E0E] border border-white/[0.08] hover:border-red-500/30 transition-all duration-300">
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4 font-sora">
                Modelo Frágil
              </div>
              <h3 className="text-[22px] font-semibold text-neutral-100 mb-6 font-sans flex items-center gap-2.5">
                <span>Como a maioria cresce</span>
              </h3>
              <ul className="space-y-4 text-sm text-neutral-300 font-light">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✕</span>
                  <span>Dependência absoluta de indicações e boca a boca.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✕</span>
                  <span>Ações de marketing isoladas sem estratégia unificada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✕</span>
                  <span>Falta de controle sobre volume e previsibilidade de vendas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✕</span>
                  <span>Guerra de preços por falta de diferenciação e posicionamento.</span>
                </li>
              </ul>
            </FadeIn>

            {/* Card 2: Como empresas líderes constroem crescimento */}
            <FadeIn direction="right" className="p-8 sm:p-10 rounded-2xl bg-[#0E0E0E] border border-[#4E83FF]/40 shadow-xl shadow-[#4E83FF]/5 hover:border-[#4E83FF] transition-all duration-300">
              <div className="inline-block px-3 py-1 rounded-full bg-[#4E83FF]/15 border border-[#4E83FF]/40 text-[#66AFFF] text-xs font-semibold uppercase tracking-wider mb-4 font-sora">
                Modelo Estruturado
              </div>
              <h3 className="text-[22px] font-semibold text-white mb-6 font-sans flex items-center gap-2.5">
                <span>Como líderes constroem crescimento</span>
              </h3>
              <ul className="space-y-4 text-sm text-neutral-200 font-normal">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#4E83FF]/20 text-[#66AFFF] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</span>
                  <span>Funil previsível com aquisição contínua e qualificada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#4E83FF]/20 text-[#66AFFF] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</span>
                  <span>Posicionamento de autoridade que atrai os clientes certos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#4E83FF]/20 text-[#66AFFF] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</span>
                  <span>Decisões embasadas em métricas claras e retorno sobre investimento.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#4E83FF]/20 text-[#66AFFF] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</span>
                  <span>Ofertas estruturadas que permitem cobrar mais e fechar contratos maiores.</span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: A SOLUÇÃO / FASES 01 A 04 (EXACT 48% / 48% SPLIT)
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
            
            {/* Left side: Text & Stats (48% width) */}
            <div className="w-full lg:w-[48%] space-y-6 text-left">
              <FadeIn direction="left">
                <p className="text-[14px] font-normal uppercase tracking-widest text-[#4E83FF] font-sora">
                  A SOLUÇÃO
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-[52px] font-semibold tracking-tight leading-[1.12]">
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
                <p className="text-sm md:text-[18px] text-neutral-300 font-normal leading-relaxed">
                  Durante 90 dias, estruturamos e implementamos os principais pilares responsáveis pela aquisição de{" "}
                  <strong className="font-semibold text-white">
                    clientes, vendas e crescimento da sua empresa.
                  </strong>
                </p>
              </FadeIn>

              {/* 2 Stat Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-[#4E83FF]/20 border border-[#4E83FF] flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#4E83FF]/25 flex items-center justify-center text-[#66AFFF]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Resultado mensurável</h3>
                    <p className="text-xs text-neutral-300">Metas de ROI e escala</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#4E83FF]/20 border border-[#4E83FF] flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#4E83FF]/25 flex items-center justify-center text-[#66AFFF]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Dados em tempo real</h3>
                    <p className="text-xs text-neutral-300">Dashboards contínuos</p>
                  </div>
                </div>
              </div>

              <FadeIn direction="up" delay={0.3} className="pt-2">
                <a
                  href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Quero me aplicar para o programa de aceleração - Seção Solução"
                  className="btn-luxo-azul w-full sm:w-auto !text-[17px]"
                >
                  <span>Quero me aplicar para o programa de aceleração</span>
                </a>
              </FadeIn>
            </div>

            {/* Right side: 4-step Flow Process Card (48% width) */}
            <div className="w-full lg:w-[48%] p-8 sm:p-10 rounded-3xl bg-[#0E0E0E]/95 border border-white/[0.09] shadow-2xl backdrop-blur-md">
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
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
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
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
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
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
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
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
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
          SECTION 5: O QUE ENTREGO (8 CARDS IN 4 COLUMNS, 23% WIDTH EACH)
          ========================================================================= */}
      <section
        id="entrego"
        className="relative py-20 md:py-28 border-b border-white/[0.08] bg-[#151515] text-center"
      >
        <div className="max-w-[1140px] mx-auto px-4">
          <FadeIn direction="down">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold max-w-3xl mx-auto leading-snug">
              O que você recebe ao implementar o{" "}
              <em className="italic text-gradient-blue font-serif font-medium">
                serviço na sua empresa?
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
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[18px] font-semibold text-white mb-2 leading-snug font-sans group-hover:text-[#66AFFF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-neutral-300 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PARA QUEM É (2 KPS-STEP CARDS)
          ========================================================================= */}
      <section
        id="quem"
        className="relative min-h-[676px] py-16 md:py-20 flex items-center border-b border-white/[0.08] bg-[#151515] bg-cover bg-top bg-no-repeat overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat pointer-events-none opacity-40"
          style={{
            backgroundImage: "url('/images/Lucas-Gabriel-pagina-azul_05.jpg')",
          }}
        />

        <div className="relative max-w-[1140px] mx-auto px-4 w-full">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <FadeIn direction="down">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-snug">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <h3 className="text-2xl font-bold text-white mb-4">Empresários, Sócios e Fundadores</h3>
              <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-6">
                Que já possuem um negócio validado, faturam e têm clientes, mas perceberam que chegaram no limite do crescimento através de indicações.
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
              <h3 className="text-2xl font-bold text-white mb-4">Empresas Prontas para o Próximo Nível</h3>
              <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-6">
                Que buscam previsibilidade de aquisição, equipe de vendas abastecida com leads qualificados e um processo comercial estruturado para escalar.
              </p>
              <div className="kps-divider" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: SOBRE O LUCAS GABRIEL (#sobre) - EXACT ALIGN TO RIGHT (51% WIDTH)
          ========================================================================= */}
      <section
        id="sobre"
        className="relative min-h-[747px] flex items-center border-b border-white/[0.08] overflow-hidden"
      >
        {/* Desktop background (Lucas is on the LEFT) */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          <Image
            src="/images/Lucas-Gabriel-pagina-azul_06.jpg"
            alt="Lucas Gabriel - Sobre"
            fill
            loading="lazy"
            quality={85}
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        {/* Mobile background */}
        <div className="absolute inset-0 block md:hidden pointer-events-none">
          <Image
            src="/images/Lucas-gabriel-mobile-222.jpg"
            alt="Lucas Gabriel - Perfil Mobile"
            fill
            loading="lazy"
            quality={85}
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>

        <div className="relative max-w-[1140px] mx-auto px-4 w-full pt-[412px] pb-10 md:py-[100px] flex justify-end">
          {/* Exactly 51% width aligned to the RIGHT side on desktop */}
          <div className="w-full md:w-[51%] space-y-6 text-left">
            <FadeIn direction="down">
              <p className="text-[14px] font-normal uppercase tracking-widest text-[#4E83FF] font-sora">
                Quem faz acontecer
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-[45px] font-semibold leading-tight">
                Sobre o{" "}
                <em className="italic text-gradient-blue font-serif font-medium">
                  Lucas Gabriel
                </em>
              </h2>
            </FadeIn>

            <div className="rhombus-divider">
              <div className="rhombus-dot" />
            </div>

            <FadeIn direction="right" delay={0.2} className="space-y-4 text-sm md:text-[18px] text-neutral-300 font-normal leading-relaxed">
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
                aria-label="Quero me aplicar para o programa de aceleração - Seção Sobre Lucas Gabriel"
                className="btn-luxo-azul !text-[18px]"
              >
                <span>Quero me aplicar para o programa de aceleração</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CTA BANNER FINAL (EXACT ELEMENTOR GRADIENT & ORANGE BTN-LUXO)
          ========================================================================= */}
      <section className="relative py-16 md:py-[100px] bg-gradient-to-b from-[#66AFFF] to-[#4E83FF] border-b border-[#FF5A00]/60 text-center overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-4 space-y-6">
          <FadeIn direction="left">
            <h2 className="text-3xl sm:text-4xl md:text-[58px] font-semibold text-white leading-tight">
              Pronto para acelerar <br />
              o seu negócio?
            </h2>
          </FadeIn>

          <div className="rhombus-divider-center">
            <div className="rhombus-dot bg-white shadow-[0_0_10px_white]" />
          </div>

          <FadeIn direction="right" delay={0.1}>
            <p className="text-base md:text-[19px] text-white/95 max-w-2xl mx-auto font-normal leading-relaxed">
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
              aria-label="Quero me aplicar para o programa de aceleração - Chamada Final"
              className="btn-luxo !text-[23px] !py-5 !px-12"
            >
              <span>Quero me aplicar para o programa de aceleração</span>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: BASE DE CONHECIMENTO (ARTIGOS & PUBLICADOS MDX)
          ========================================================================= */}
      <section className="relative py-20 bg-[#070707] border-t border-white/[0.06]">
        <div className="max-w-[1140px] mx-auto px-4">
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
                aria-label="Ver todas as publicações na base de conhecimento"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#4E83FF] text-white shadow"
              >
                Todos ({posts.length})
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categoria/${cat.slug}`}
                  aria-label={`Ver artigos na categoria ${cat.name}`}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-900 border border-white/[0.08] text-neutral-300 hover:text-white hover:border-[#4E83FF]/50 transition-colors font-sora"
                >
                  {cat.name} ({cat.count})
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
