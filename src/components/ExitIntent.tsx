"use client";

import { useEffect, useState, useCallback } from "react";
import FormCaptura from "./FormCaptura";

export default function ExitIntent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        if (typeof window !== "undefined" && !sessionStorage.getItem("exit_intent_shown")) {
          sessionStorage.setItem("exit_intent_shown", "true");
          setIsOpen(true);
        }
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="relative w-full max-w-lg bg-[#0E0E0E] border border-[#4E83FF]/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#4E83FF]/20 text-white max-h-[92vh] overflow-y-auto">
        {/* Botão X para fechar */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Fechar modal de saída"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-5 text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-semibold uppercase tracking-wider mb-2.5 font-sora">
            Oportunidade Comercial
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-sans leading-tight">
            Antes de sair — veja se faz sentido para você
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
            Sua empresa pode ter uma operação estruturada de aquisição B2B gerando oportunidades previsíveis todo mês. Solicite uma análise sem compromisso.
          </p>
        </div>

        <FormCaptura
          isModal={false}
          source="exit_intent"
          onClose={handleClose}
        />
      </div>
    </div>
  );
}
