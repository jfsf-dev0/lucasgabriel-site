import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MarkdownRendererProps {
  content: string;
}

function renderInline(text: string): React.ReactNode[] {
  // Regex to match:
  // 1. Links: [text](href)
  // 2. Bold: **text**
  // 3. Italic: *text*
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Link [text](href)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, linkText, href] = linkMatch;
      const isWhatsApp = href.includes("wa.me") || href.includes("whatsapp");
      const isButtonLike =
        isWhatsApp ||
        linkText.toLowerCase().includes("aplicar") ||
        linkText.toLowerCase().includes("whatsapp");

      if (isButtonLike) {
        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 my-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base"
          >
            <span>{linkText}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        );
      }

      if (href.startsWith("/")) {
        return (
          <Link
            key={index}
            href={href}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            {linkText}
          </Link>
        );
      }

      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          {linkText}
        </a>
      );
    }

    // Bold **text**
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return (
        <strong key={index} className="font-semibold text-neutral-900 dark:text-neutral-100">
          {boldMatch[1]}
        </strong>
      );
    }

    // Italic *text*
    const italicMatch = part.match(/^\*([^*]+)\*$/);
    if (italicMatch) {
      return (
        <em key={index} className="italic text-neutral-800 dark:text-neutral-200">
          {italicMatch[1]}
        </em>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) return null;

  // Split by double newlines or single newlines for block tokens
  const rawBlocks = content.split(/\n\n+/);
  const elements: React.ReactNode[] = [];

  let keyIndex = 0;

  for (const block of rawBlocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    keyIndex++;

    // Image ![alt](src)
    const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imgMatch) {
      const [, alt, src] = imgMatch;
      elements.push(
        <figure key={`img-${keyIndex}`} className="my-8 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-md">
          <div className="relative w-full aspect-[16/9] max-h-[500px]">
            <Image
              src={src}
              alt={alt || "Imagem do post"}
              fill
              loading="lazy"
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {alt && (
            <figcaption className="p-3 text-center text-xs text-neutral-500 dark:text-neutral-400 italic">
              {alt}
            </figcaption>
          )}
        </figure>
      );
      continue;
    }

    // Heading 1
    if (trimmed.startsWith("# ")) {
      elements.push(
        <h1
          key={`h1-${keyIndex}`}
          className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mt-10 mb-4"
        >
          {renderInline(trimmed.slice(2))}
        </h1>
      );
      continue;
    }

    // Heading 2
    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${keyIndex}`}
          className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mt-8 mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2"
        >
          {renderInline(trimmed.slice(3))}
        </h2>
      );
      continue;
    }

    // Heading 3
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${keyIndex}`}
          className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mt-6 mb-3"
        >
          {renderInline(trimmed.slice(4))}
        </h3>
      );
      continue;
    }

    // Heading 4
    if (trimmed.startsWith("#### ")) {
      elements.push(
        <h4
          key={`h4-${keyIndex}`}
          className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200 mt-5 mb-2"
        >
          {renderInline(trimmed.slice(5))}
        </h4>
      );
      continue;
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      elements.push(
        <blockquote
          key={`quote-${keyIndex}`}
          className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 pl-4 py-3 my-6 italic text-neutral-700 dark:text-neutral-300 rounded-r-lg"
        >
          {renderInline(trimmed.replace(/^>\s*/, ""))}
        </blockquote>
      );
      continue;
    }

    // Unordered List
    const lines = trimmed.split("\n");
    const isList = lines.every((l) => l.trim().startsWith("- ") || l.trim().startsWith("* ") || !l.trim());
    if (isList) {
      elements.push(
        <ul key={`ul-${keyIndex}`} className="my-5 space-y-2 pl-2">
          {lines
            .map((l) => l.trim().replace(/^[-*]\s+/, "").trim())
            .filter(Boolean)
            .map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-neutral-700 dark:text-neutral-300">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <span>{renderInline(item)}</span>
              </li>
            ))}
        </ul>
      );
      continue;
    }

    // Standard Paragraph
    elements.push(
      <p
        key={`p-${keyIndex}`}
        className="leading-relaxed text-neutral-700 dark:text-neutral-300 my-4 text-base md:text-lg"
      >
        {renderInline(trimmed)}
      </p>
    );
  }

  return <div className="prose-clean">{elements}</div>;
}
