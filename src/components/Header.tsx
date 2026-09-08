"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#solucao", label: "Solução" },
    { href: "/#metodologia", label: "A Metodologia" },
    { href: "/#entrego", label: "O que entrego" },
    { href: "/#quem", label: "Para quem é" },
    { href: "/#sobre", label: "Sobre o Lucas Gabriel" },
  ];

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all -mb-[74px]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 h-[74px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Ir para a página inicial de Lucas Gabriel"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#3671FF] to-[#66AFFF] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-[#4E83FF]/25 group-hover:scale-105 transition-transform duration-300">
            LG
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-[#66AFFF] transition-colors font-sans">
              Lucas Gabriel
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#4E83FF] -mt-1 font-sora">
              Aceleração de Negócios
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-neutral-300 hover:text-[#66AFFF] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com Lucas Gabriel no WhatsApp via cabeçalho"
            className="btn-luxo-azul !py-2.5 !px-5 !text-xs !rounded-full hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            <span>Falar no WhatsApp</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
          aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-neutral-950/95 border-b border-neutral-800 px-5 py-4 space-y-3 animate-fadeIn"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-200 hover:text-[#4E83FF] py-2 border-b border-neutral-900"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aplicar para o programa de aceleração no WhatsApp via menu mobile"
              className="btn-luxo-azul w-full !py-3 !text-sm text-center"
            >
              Quero me aplicar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
