"use client";

import { useState, useEffect } from "react";
import FormCaptura from "./FormCaptura";

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("hero");

  useEffect(() => {
    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.source) {
        setSource(customEvent.detail.source);
      }
      setIsOpen(true);
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-open-lead-modal]");
      if (target) {
        e.preventDefault();
        const customSource = target.getAttribute("data-lead-source") || "site_cta";
        setSource(customSource);
        setIsOpen(true);
      }
    };

    window.addEventListener("open-lead-modal", handleCustomEvent);
    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("open-lead-modal", handleCustomEvent);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <FormCaptura
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      source={source}
      isModal={true}
    />
  );
}

export function LeadButton({
  children,
  className,
  source = "hero",
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  source?: string;
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      data-open-lead-modal="true"
      data-lead-source={source}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </button>
  );
}
