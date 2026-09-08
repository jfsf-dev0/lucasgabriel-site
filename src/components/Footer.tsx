import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070707] transition-colors relative z-10">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="max-w-md space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Ir para a página inicial através do rodapé"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#3671FF] to-[#66AFFF] flex items-center justify-center text-white font-black text-sm shadow">
                LG
              </div>
              <span className="font-extrabold text-lg text-white font-sans tracking-tight">
                Lucas Gabriel
              </span>
            </Link>
            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              Estruturação e Implementação de Marketing para Aceleração de Negócios. Transforme o potencial da sua empresa para impulsionar suas vendas e preparar seu negócio para o próximo nível.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#4E83FF] mb-3 font-sora">
              Navegação
            </p>
            <ul className="space-y-2 text-sm text-neutral-300">
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
        </div>

        <div className="border-t border-white/[0.06] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
          <p className="font-extralight tracking-wide text-neutral-300">
            © 2026 · Todos os direitos reservados à Lucas Gabriel
          </p>
          <p className="text-neutral-400">
            Next.js App Router · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
