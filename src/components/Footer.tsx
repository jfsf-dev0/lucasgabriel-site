import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow">
                LG
              </div>
              <span className="font-bold text-lg text-neutral-900 dark:text-neutral-100">
                Lucas Gabriel
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
              Estruturação e Implementação de Marketing para Aceleração de Negócios. Transforme o potencial da sua empresa para impulsionar suas vendas e preparar seu negócio para o próximo nível.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-3">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/a-metodologia" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link href="/solucao-marketing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Solução
                </Link>
              </li>
              <li>
                <Link href="/o-que-entrego" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  O Que Entrego
                </Link>
              </li>
              <li>
                <Link href="/para-quem-e" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Para Quem É
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-3">
              Categorias
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <Link href="/categoria/marketing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/categoria/metodologia" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link href="/categoria/solucoes" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="/categoria/servicos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/categoria/estrategia" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Estratégia
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>© 2026 · Todos os direitos reservados à Lucas Gabriel</p>
          <p>Migrado com sucesso para Next.js App Router</p>
        </div>
      </div>
    </footer>
  );
}
