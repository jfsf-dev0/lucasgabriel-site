"use client";

import { useState, useId, useEffect } from "react";

interface FormCapturaProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  subtitle?: string;
  source?: string;
  isModal?: boolean;
}

export default function FormCaptura({
  isOpen = true,
  onClose,
  title = "Solicitar Diagnóstico de Aquisição B2B",
  subtitle = "Preencha as informações abaixo para avaliarmos sua operação e apresentar o plano de estruturação.",
  source = "modal",
  isModal = true,
}: FormCapturaProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [empresa, setEmpresa] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const nomeId = useId();
  const emailId = useId();
  const whatsappId = useId();
  const empresaId = useId();

  // Fecha com ESC se for modal
  useEffect(() => {
    if (!isOpen || !isModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isModal, onClose]);

  if (isModal && !isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          whatsapp,
          empresa,
          source,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Erro ao enviar informações. Tente novamente.");
      }

      setStatus("success");
      setNome("");
      setEmail("");
      setWhatsapp("");
      setEmpresa("");

      // Se for modal, fecha após 3 segundos
      if (onClose) {
        setTimeout(() => {
          onClose();
          setStatus("idle");
        }, 3200);
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Ocorreu um erro ao enviar. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <div className="w-full">
      {status === "success" ? (
        <div className="py-8 px-4 text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500 text-orange-400 mx-auto flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white font-sans">
            Diagnóstico Solicitado!
          </h3>
          <p className="text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
            Obrigado pelo interesse. Nossa equipe de especialistas B2B entrará em contato em breve via WhatsApp para os próximos passos.
          </p>
          {onClose && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setStatus("idle");
                }}
                className="btn-luxo-azul !py-2.5 !px-6 !text-xs !rounded-full"
              >
                Fechar janela
              </button>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {status === "error" && (
            <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
              <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                <line x1="12" y1="8" x2="12" y2="12" strokeWidth={2} />
                <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth={2} />
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label htmlFor={nomeId} className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5 font-sora">
              Seu Nome Completo *
            </label>
            <input
              id={nomeId}
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: João da Silva"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-[#070707] border border-white/[0.12] text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor={emailId} className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5 font-sora">
              E-mail Corporativo *
            </label>
            <input
              id={emailId}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex: joao@empresa.com.br"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-[#070707] border border-white/[0.12] text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all disabled:opacity-50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={whatsappId} className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5 font-sora">
                WhatsApp com DDD *
              </label>
              <input
                id={whatsappId}
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="Ex: (11) 99999-9999"
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-[#070707] border border-white/[0.12] text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor={empresaId} className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5 font-sora">
                Nome da Empresa *
              </label>
              <input
                id={empresaId}
                type="text"
                required
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                placeholder="Ex: Minha Empresa B2B"
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-[#070707] border border-white/[0.12] text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all disabled:opacity-50"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="btn-luxo-azul w-full !py-3.5 !text-sm !font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Processando...</span>
                </>
              ) : (
                <>
                  <span>Solicitar Diagnóstico Agora</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-neutral-400 text-center pt-1 font-light">
            🔒 Seus dados estão 100% seguros. Não enviamos spam.
          </p>
        </form>
      )}
    </div>
  );

  if (!isModal) {
    return formContent;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-lg bg-[#0E0E0E] border border-white/[0.12] rounded-2xl p-6 sm:p-8 shadow-2xl shadow-orange-500/10 text-white">
        {/* Botão Fechar X */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar formulário"
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="mb-6 text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-[11px] font-semibold uppercase tracking-wider mb-2 font-sora">
            Diagnóstico B2B
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-sans leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {formContent}
      </div>
    </div>
  );
}
