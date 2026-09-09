import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "Os 5 Pilares de Crescimento — Webwize | Geração, Conversão, CRM, IA e Dados",
  description:
    "Conheça os 5 pilares da operação Webwize: Geração de Demanda, Estrutura de Conversão, CRM e Operação Comercial, Automação & IA e Dados & Inteligência Comercial.",
  alternates: {
    canonical: "https://lucasgabriel-site.vercel.app/os-5-pilares",
  },
};

export default function Os5PilaresPage() {
  const pillars = [
    {
      number: "01",
      title: "Geração de Demanda",
      subtitle: "Mídia paga precisa e prospecção corporativa",
      desc: "Google Ads (capturando clientes no momento exato da busca por solução), Meta Ads e LinkedIn Ads mirando tomadores de decisão específicos (C-Level, Diretores e Gerentes). Chega de tráfego desqualificado: focamos em decisores com orçamento e intenção real.",
      deliverables: [
        "Campanhas de Google Search de alta intenção",
        "LinkedIn Ads focado em empresas-alvo e cargos de decisão",
        "Remarketing omnichannel para contas em consideração",
        "Negativação contínua de termos e filtros de ICP",
      ],
    },
    {
      number: "02",
      title: "Estrutura de Conversão",
      subtitle: "Landing pages corporativas de altíssimo impacto",
      desc: "Páginas com carregamento em milissegundos, design que transmite autoridade imediata e copywriting focado na dor do cliente corporativo. Desenvolvemos narrativas comerciais que eliminam dúvidas e conduzem o visitante a agendar uma reunião com o time de vendas.",
      deliverables: [
        "Landing Pages de altíssima velocidade (Next.js & Pure CSS)",
        "Copywriting estratégico focado no ciclo de venda consultivo",
        "Formulários inteligentes com validação e enriquecimento de dados",
        "Testes A/B contínuos de títulos, provas sociais e chamadas para ação",
      ],
    },
    {
      number: "03",
      title: "CRM e Operação Comercial",
      subtitle: "Processo de vendas padronizado e visibilidade total",
      desc: "Implementação e configuração do CRM de ponta a ponta. Criamos pipelines estruturados, critérios objetivos de qualificação (MQL para SQL), definição de SLA de primeiro atendimento e fluxos para que nenhuma oportunidade seja esquecida pela equipe.",
      deliverables: [
        "Estruturação de pipeline por etapas do ciclo de decisão",
        "Definição de regras de qualificação (ICP, orçamento, urgência)",
        "SLA comercial de atendimento rápido a novos leads",
        "Treinamento e cadência operacional para os vendedores",
      ],
    },
    {
      number: "04",
      title: "Automação e Inteligência Artificial",
      subtitle: "Agilidade operacional e qualificação 24/7",
      desc: "Utilizamos inteligência artificial e automações avançadas para acelerar o tempo de resposta aos novos contatos. Agentes inteligentes efetuam a triagem inicial, fluxos de WhatsApp nutrem quem ainda não está no momento de compra e reengajam propostas adormecidas.",
      deliverables: [
        "Agentes de IA para pré-qualificação imediata via WhatsApp",
        "Cadências automáticas de nutrição e reengajamento comercial",
        "Distribuição inteligente e automática de oportunidades",
        "Integração de APIs de mensageria, CRM e formulários",
      ],
    },
    {
      number: "05",
      title: "Dados e Inteligência Comercial",
      subtitle: "Clareza absoluta sobre CAC, ROI e retorno real",
      desc: "Dashboards em tempo real que mostram exatamente de onde vem cada venda e quanto cada canal custou. Eliminamos métricas de vaidade: você saberá o Custo por Oportunidade Qualificada (SQL), o tempo médio do ciclo comercial e o retorno sobre o investimento.",
      deliverables: [
        "Dashboards de aquisição e performance comercial em tempo real",
        "Atribuição precisa de receita por anúncio e canal de entrada",
        "Acompanhamento rigoroso de CAC, LTV e taxa de conversão",
        "Reuniões periódicas de alinhamento tático orientadas a dados",
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Os 5 Pilares de Crescimento Webwize",
    description: "Infraestrutura comercial e de aquisição para empresas B2B",
    itemListElement: pillars.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Pilar ${p.number}: ${p.title}`,
      description: p.desc,
    })),
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
            <span className="text-white font-medium">Os 5 Pilares</span>
          </nav>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-3">
            A Metodologia Completa
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
            Os 5 Pilares da{" "}
            <em className="italic text-gradient-blue font-serif font-medium">
              Operação Webwize
            </em>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mt-4 leading-relaxed font-light">
            Cada pilar representa uma engrenagem vital da sua máquina de vendas. Quando conectados, sua empresa alcança consistência, previsibilidade e velocidade de crescimento sem depender da sorte.
          </p>
        </div>
      </section>

      {/* Lista detalhada dos 5 Pilares */}
      <section className="w-full relative py-16 md:py-24 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-left space-y-12">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#0E0E0E] border border-white/[0.08] hover:border-[#4E83FF]/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.06]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#4E83FF] font-sora">
                    Pilar {item.number}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-sans">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#66AFFF] mt-1 font-medium">
                    {item.subtitle}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#4E83FF]/15 border border-[#4E83FF]/30 flex items-center justify-center text-[#66AFFF] flex-shrink-0">
                  <span className="font-bold text-base font-sora">{item.number}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-6">
                {item.desc}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-sora mb-3">
                  Entregas e Implementações Chave:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#4E83FF]/20 text-[#66AFFF] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                        ✓
                      </span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Banner de CTA */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1d4ed8]/30 via-[#0B0B0B] to-[#0B0B0B] border border-[#4E83FF]/50 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                Pronto para implementar esses 5 pilares na sua empresa?
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Nossa equipe de especialistas avalia seu momento comercial e desenha o plano de estruturação sob medida para seu negócio.
              </p>
            </div>
            <button
              type="button"
              data-open-lead-modal="true"
              data-lead-source="os_5_pilares_page"
              className="btn-luxo-azul !py-4 !px-8 !text-sm cursor-pointer flex-shrink-0"
            >
              <span>Solicitar diagnóstico gratuito</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
