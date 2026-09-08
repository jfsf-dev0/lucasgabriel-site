import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070707] transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#3671FF] to-[#66AFFF] flex items-center justify-center text-white font-black text-sm shadow">
                LG
              </div>
              <span className="font-extrabold text-lg text-white font-sans tracking-tight">
                Lucas Gabriel
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed font-normal">
              Estruturação e Implementação de Marketing para Aceleração de Negócios. Transforme o potencial da sua empresa para impulsionar suas vendas e preparar seu negócio para o próximo nível.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4E83FF] mb-3 font-sora">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/#solucao" className="hover:text-[#66AFFF] transition-colors">
                  Solução
                </Link>
              </li>
              <li>
                <Link href="/#metodologia" className="hover:text-[#66AFFF] transition-colors">
                  A Metodologia
                </Link>
              </li>
              <li>
                <Link href="/#entrego" className="hover:text-[#66AFFF] transition-colors">
                  O Que Entrego
                </Link>
              </li>
              <li>
                <Link href="/#quem" className="hover:text-[#66AFFF] transition-colors">
                  Para Quem É
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:text-[#66AFFF] transition-colors">
                  Sobre o Lucas Gabriel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4E83FF] mb-3 font-sora">
              Categorias
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/categoria/marketing" className="hover:text-[#66AFFF] transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/categoria/metodologia" className="hover:text-[#66AFFF] transition-colors">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link href="/categoria/solucoes" className="hover:text-[#66AFFF] transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="/categoria/servicos" className="hover:text-[#66AFFF] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/categoria/estrategia" className="hover:text-[#66AFFF] transition-colors">
                  Estratégia
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="font-extralight tracking-wide text-neutral-300">
            © 2026 · Todos os direitos reservados à Lucas Gabriel
          </p>
          <p className="text-neutral-500">
            Next.js App Router · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
