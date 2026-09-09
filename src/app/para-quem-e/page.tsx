import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "Para Quem É — Webwize | Empresas B2B com Venda Consultiva",
  description:
    "A Webwize atende empresas que vendem para outras empresas (B2B): indústrias, SaaS, consultorias, serviços corporativos e distribuidoras prontas para profissionalizar a aquisição.",
  alternates: {
    canonical: "https://lucasgabriel-site.vercel.app/para-quem-e",
  },
};

export default function ParaQuemEPage() {
  const segments = [
    {
      title: "Indústrias & Manufatura",
      desc: "Empresas com ticket elevado, catálogo técnico e necessidade de gerar cotações e propostas com diretores industriais, compradores e gestores de suprimentos.",
      fit: "Excelente aderência",
    },
    {
      title: "SaaS & Empresas de Tecnologia",
      desc: "Softwares corporativos, plataformas em nuvem e soluções tecnológicas que buscam volume previsível de demonstrações (demos) com decisores de TI e negócios.",
      fit: "Excelente aderência",
    },
    {
      title: "Serviços Corporativos & Consultorias",
      desc: "Escritórios jurídicos, consultorias tributárias e empresariais, engenharia, logística e terceirização que vendem contratos consultivos de alto valor.",
      fit: "Excelente aderência",
    },
    {
      title: "Distribuidoras & Atacadistas",
      desc: "Operações comerciais B2B que precisam expandir ativamente sua carteira de lojistas, revendedores e clientes corporativos de forma digital e estruturada.",
      fit: "Excelente aderência",
    },
  ];

  const criteriaYes = [
    "Sua empresa vende produtos ou serviços para outras empresas (B2B)",
    "Possui produto ou serviço validado com clientes ativos e satisfeitos",
    "Ticket médio estruturado e ciclo de venda consultivo",
    "Equipe comercial (ou sócio) dedicada ao fechamento de reuniões",
    "Capacidade operacional para absorver novas demandas comerciais",
    "Busca por previsibilidade e rigor técnico, não por likes em redes sociais",
  ];

  const criteriaNo = [
    "Empresas B2C (venda direta para consumidor final ou e-commerce tradicional)",
    "Negócios sem modelo validado ou em fase de ideação inicial",
    "Quem busca apenas 'postagens em redes sociais' sem métrica de negócio",
    "Quem não possui equipe ou processo para realizar follow-up comercial",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Para Quem É a Assessoria Webwize",
    description: "Critérios de qualificação e perfis de empresas B2B atendidas pela Webwize.",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Empresas B2B, Indústrias, Empresas de SaaS e Prestadores de Serviços Corporativos",
    },
  };

  return (
    <div className="w-full bg-[#070707] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="w-full relative py-16 md:py-20 border-b border-white/[0.08] bg-gradient-to-b from-black to-[#0E0E0E]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-left">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-sora">
            <Link href="/" className="hover:text-[#66AFFF] transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Para Quem É</span>
          </nav>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-3">
            Foco e Segmentação
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
            Para empresas que{" "}
            <em className="italic text-gradient-blue font-serif font-medium">
              vendem para empresas.
            </em>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mt-4 leading-relaxed font-light">
            Nossa metodologia e tecnologia foram desenvolvidas especificamente para o ciclo de vendas complexo, consultivo e com múltiplos decisores corporativos.
          </p>
        </div>
      </section>

      {/* Os 2 Perfis Principais */}
      <section className="w-full relative py-20 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-left space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <h3 className="text-2xl font-bold text-white mb-3">Empresas com Venda Consultiva</h3>
              <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-6">
                Negócios que já possuem modelo validado, faturam e entregam excelência aos seus clientes, mas perceberam que chegaram no limite do crescimento dependente de indicações e prospecção manual informal.
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
              <h3 className="text-2xl font-bold text-white mb-3">Líderes Prontos para Escala</h3>
              <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-6">
                Organizações prontas para profissionalizar sua operação comercial, abastecendo o time de vendas diariamente com leads qualificados, processos padronizados em CRM e métricas claras de conversão.
              </p>
              <div className="kps-divider" />
            </div>
          </div>

          {/* Segmentos */}
          <div className="pt-8">
            <h2 className="text-2xl font-bold text-white mb-2 font-sans">
              Segmentos B2B com maior aderência
            </h2>
            <div className="rhombus-divider">
              <div className="rhombus-dot" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {segments.map((seg, sIdx) => (
                <div
                  key={sIdx}
                  className="p-6 rounded-2xl bg-[#0E0E0E] border border-white/[0.08] hover:border-[#4E83FF]/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">{seg.title}</h3>
                    <span className="text-[11px] font-semibold text-[#66AFFF] px-2.5 py-0.5 rounded-full bg-[#4E83FF]/15 border border-[#4E83FF]/30 font-sora">
                      {seg.fit}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {seg.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Critérios Sim vs Não */}
          <div className="pt-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-sans">
              Critérios de Qualificação para a Assessoria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 rounded-2xl bg-[#0E0E0E] border border-[#4E83FF]/40">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#66AFFF] font-sora mb-4 flex items-center gap-2">
                  <span>✓ Para quem a Webwize é ideal</span>
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-200">
                  {criteriaYes.map((crit, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#4E83FF]/20 text-[#66AFFF] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                        ✓
                      </span>
                      <span>{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-7 rounded-2xl bg-[#0E0E0E] border border-red-500/30">
                <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 font-sora mb-4 flex items-center gap-2">
                  <span>✕ Para quem NÃO é indicada</span>
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 font-light">
                  {criteriaNo.map((crit, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                        ✕
                      </span>
                      <span>{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1d4ed8]/30 via-[#0B0B0B] to-[#0B0B0B] border border-[#4E83FF]/50 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                Sua empresa se enquadra no perfil?
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-lg">
                Agende uma sessão diagnóstica com nossa equipe técnica para avaliar seu cenário e desenhar sua estratégia de aceleração.
              </p>
            </div>
            <button
              type="button"
              data-open-lead-modal="true"
              data-lead-source="para_quem_e_page"
              className="btn-luxo-azul !py-4 !px-8 !text-sm cursor-pointer flex-shrink-0"
            >
              <span>Avaliar se me qualifico</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
