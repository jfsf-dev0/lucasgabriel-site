import Link from "next/link";
import Image from "next/image";
import { Post, slugify } from "@/lib/content";
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
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Início
        </Link>
        <span>/</span>
        {post.categories[0] && (
          <>
            <Link
              href={`/categoria/${slugify(post.categories[0])}`}
              className="hover:text-blue-600 transition-colors"
            >
              {post.categories[0]}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-neutral-900 dark:text-neutral-200 truncate max-w-[200px]">
          {post.title}
        </span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((cat) => (
            <Link
              key={cat}
              href={`/categoria/${slugify(cat)}`}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 hover:bg-blue-100 transition-colors"
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

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4 leading-tight">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
            LG
          </div>
          <div>
            <div className="font-semibold text-neutral-900 dark:text-neutral-100">
              {post.author}
            </div>
            <div className="text-xs">
              Publicado em {formattedDate}
            </div>
          </div>
        </div>
      </header>

      {/* Featured Hero Image */}
      {post.image && (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-10 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
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
      <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-800 dark:text-neutral-200">
        <MarkdownRenderer content={post.content} />
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
            Tags Relacionadas
          </h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="my-14 p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold mb-2">
            Pronto para acelerar o marketing da sua empresa?
          </h3>
          <p className="text-blue-100 mb-6 text-sm sm:text-base leading-relaxed">
            Implementamos um sistema previsível de aquisição de clientes e posicionamento estratégico nos próximos 90 dias.
          </p>
          <a
            href="https://wa.me/5511949845827?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20servi%C3%A7o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-700 font-bold text-sm shadow-md hover:bg-blue-50 transition-colors"
          >
            <span>Quero me aplicar para o programa</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Back Link */}
      <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Voltar para a página inicial</span>
        </Link>
      </div>
    </article>
  );
}
