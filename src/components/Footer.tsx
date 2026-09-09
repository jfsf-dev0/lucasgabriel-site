import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#070707] transition-colors relative z-10">
      <div className="w-full px-[8vw] py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="max-w-md space-y-4 text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="Ir para o topo da página através do rodapé"
            >
              <span className="font-extrabold text-2xl text-white font-sans tracking-tight">
                Web<span className="text-orange-500">wize</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              Marketing, tecnologia e vendas para empresas B2B. Estruturamos aquisição, CRM, automação e inteligência artificial para transformar marketing em receita previsível.
            </p>
          </div>

          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-3 font-sora">
              Navegação
            </p>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#hero" className="hover:text-orange-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#o-problema" className="hover:text-orange-400 transition-colors">
                  O Problema
                </a>
              </li>
              <li>
                <a href="#a-solucao" className="hover:text-orange-400 transition-colors">
                  A Solução
                </a>
              </li>
              <li>
                <a href="#os-5-pilares" className="hover:text-orange-400 transition-colors">
                  Os 5 Pilares
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-orange-400 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#para-quem" className="hover:text-orange-400 transition-colors">
                  Para Quem É
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-orange-400 transition-colors">
                  Sobre a Webwize
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
          <p className="font-extralight tracking-wide text-neutral-300">
            © 2026 Webwize · Todos os direitos reservados
          </p>
          <p className="text-neutral-400">
            Next.js App Router · Tailwind CSS · Pure CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
