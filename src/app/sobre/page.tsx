import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/MotionWrappers";

export const metadata: Metadata = {
  title: "Sobre — Webwize | Lucas Gabriel e a Assessoria de Aquisição B2B",
  description:
    "Conheça Lucas Gabriel e a Webwize: estrategista em unir geração de demanda, engenharia de conversão, CRM comercial e inteligência artificial para acelerar empresas B2B.",
  alternates: {
    canonical: "https://lucasgabriel-site.vercel.app/sobre",
  },
};

export default function SobrePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Person",
      name: "Lucas Gabriel",
      jobTitle: "Fundador e Estrategista B2B na Webwize",
      url: "https://lucasgabriel-site.vercel.app/sobre",
      description:
        "Estrategista especializado em acelerar empresas B2B através de infraestrutura unificada de marketing, tecnologia, CRM e inteligência artificial.",
      affiliation: {
        "@type": "Organization",
        name: "Webwize",
        url: "https://lucasgabriel-site.vercel.app",
      },
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
            <span className="text-white font-medium">Sobre</span>
          </nav>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4E83FF] font-sora mb-3">
            Quem Faz Acontecer
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
            Sobre a Webwize &{" "}
            <em className="italic text-gradient-blue font-serif font-medium">
              Lucas Gabriel
            </em>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mt-4 leading-relaxed font-light">
            Construindo a ponte definitiva entre o investimento em marketing e o fechamento real de contratos corporativos.
          </p>
        </div>
      </section>

      {/* Conteúdo Principal Sobre */}
      <section className="w-full relative py-20 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Foto / Imagem */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl">
                <Image
                  src="/images/Lucas-Gabriel-pagina-azul_06.webp"
                  alt="Lucas Gabriel - Webwize"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </div>

            {/* Texto de Apresentação */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#4E83FF]/15 border border-[#4E83FF]/30 text-[#66AFFF] text-xs font-bold uppercase tracking-wider font-sora">
                Estratégia & Execução
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans leading-snug">
                Eliminando o abismo entre o marketing e o caixa da empresa
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                <p>
                  A <strong className="font-semibold text-white">Webwize</strong> nasceu para resolver a maior frustração dos fundadores e diretores B2B: a distância entre o que é gasto em anúncios e o que de fato se transforma em vendas no time comercial.
                </p>
                <p>
                  Fundada por <strong className="font-semibold text-white">Lucas Gabriel</strong>, estrategista com ampla bagagem em geração de demanda qualificada, engenharia de conversão, estruturação de CRM e aplicação prática de inteligência artificial, a empresa desenvolveu um método proprietário que trata marketing não como custo de publicidade, mas como uma operação previsível de receita.
                </p>
                <p>
                  Aqui não há espaço para métricas vazias (curtidas, visualizações ou cliques sem contexto). Toda a tecnologia, páginas, fluxos de automação e campanhas são desenhados com um único propósito: <strong className="font-semibold text-white">abastecer a equipe comercial com oportunidades qualificadas e gerar retorno tangível sobre o capital investido.</strong>
                </p>
              </div>

              {/* Destaques / Valores */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0E0E0E] border border-white/[0.08]">
                  <h4 className="text-sm font-bold text-white mb-1">Rigor Técnico</h4>
                  <p className="text-xs text-neutral-400 font-light">
                    Decisões orientadas por números, dados de atribuição e retorno financeiro real.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#0E0E0E] border border-white/[0.08]">
                  <h4 className="text-sm font-bold text-white mb-1">Visão Integrada</h4>
                  <p className="text-xs text-neutral-400 font-light">
                    Anúncios, CRM, landing pages e IA conectados sem atrito ou perda de dados.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  data-open-lead-modal="true"
                  data-lead-source="sobre_page"
                  className="btn-luxo-azul !py-3.5 !px-8 !text-sm cursor-pointer text-center"
                >
                  <span>Solicitar diagnóstico com Lucas Gabriel</span>
                </button>
                <a
                  href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20diretamente%20com%20o%20Lucas%20Gabriel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/[0.15] hover:border-[#4E83FF] text-neutral-200 hover:text-white text-sm font-semibold transition-colors text-center"
                >
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
