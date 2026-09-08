import Link from "next/link";

export default function Header() {
  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/a-metodologia", label: "Metodologia" },
    { href: "/solucao-marketing", label: "Solução" },
    { href: "/o-que-entrego", label: "Serviços" },
    { href: "/para-quem-e", label: "Para Quem É" },
    { href: "/sobre-o-lucas-gabriel", label: "Sobre" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            LG
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 transition-colors">
              Lucas Gabriel
            </span>
            <span className="block text-[10px] uppercase font-semibold tracking-wider text-blue-600 dark:text-blue-400">
              Aceleração de Negócios
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
          >
            <span>Falar no WhatsApp</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile nav pills */}
      <div className="md:hidden border-t border-neutral-100 dark:border-neutral-900 px-4 py-2 overflow-x-auto flex gap-2 no-scrollbar">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
