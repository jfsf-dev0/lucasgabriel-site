import Link from "next/link";
import Image from "next/image";
import { Post, slugify } from "@/lib/slugify";
import MarkdownRenderer from "./MarkdownRenderer";

interface PostLayoutProps {
  post: Post;
}

export default function PostLayout({ post }: PostLayoutProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8 font-sora" aria-label="Trilha de navegação">
        <Link href="/" className="hover:text-orange-400 transition-colors">
          Início
        </Link>
        <span>/</span>
        {post.categories[0] && (
          <>
            <Link
              href={`/categoria/${slugify(post.categories[0])}`}
              className="hover:text-orange-400 transition-colors"
            >
              {post.categories[0]}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-white truncate max-w-[240px]">
          {post.title}
        </span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((cat) => (
            <Link
              key={cat}
              href={`/categoria/${slugify(cat)}`}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/30 hover:bg-orange-500/25 transition-colors font-sora"
            >
              {cat}
            </Link>
          ))}
          {post.status === "draft" && (
            <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-amber-500 text-white shadow">
              Rascunho
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-5 leading-tight font-sans">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 font-normal">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center gap-4 text-sm text-neutral-300 pt-5 border-t border-white/[0.08]">
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-orange-500/30">
            LG
          </div>
          <div>
            <div className="font-bold text-white font-sans">
              {post.author}
            </div>
            <div className="text-xs text-neutral-400">
              Publicado em {formattedDate}
            </div>
          </div>
        </div>
      </header>

      {/* Featured Hero Image */}
      {post.image && (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl mb-12 bg-neutral-900 border border-white/[0.08]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      )}

      {/* Main Content Body */}
      <div className="prose prose-invert max-w-none text-neutral-200">
        <MarkdownRenderer content={post.content} />
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="mt-14 pt-6 border-t border-white/[0.08]">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-3 font-sora">
            Tags Relacionadas
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-md bg-[#151515] border border-white/[0.06] text-neutral-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="my-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#3a1300] via-[#1a0800] to-[#070707] border border-orange-500/40 text-white shadow-2xl shadow-orange-500/15">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2 font-sora">
            Programa de Aceleração 2026
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Pronto para acelerar o marketing da sua empresa?
          </h2>
          <p className="text-neutral-300 mb-8 text-sm sm:text-base leading-relaxed">
            Implementamos um sistema previsível de aquisição de clientes e posicionamento estratégico nos próximos 90 dias.
          </p>
          <a
            href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero me aplicar para o programa de aceleração no WhatsApp (Página de Post)"
            className="btn-luxo-azul"
          >
            <span>Quero me aplicar para o programa</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Back Link */}
      <div className="pt-6 border-t border-white/[0.08] flex justify-between items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:underline"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Voltar para a página inicial</span>
        </Link>
      </div>
    </article>
  );
}
