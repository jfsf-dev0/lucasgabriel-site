import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllCategories, getPostsByCategory } from "@/lib/content";
import PostCard from "@/components/PostCard";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categories = await getAllCategories();
  const current = categories.find((c) => c.slug === slug);

  if (!current) {
    return {
      title: "Categoria não encontrada · Lucas Gabriel",
    };
  }

  return {
    title: `Categoria: ${current.name} · Lucas Gabriel`,
    description: `Publicações e artigos na categoria ${current.name} sobre aceleração de negócios e marketing por Lucas Gabriel.`,
    alternates: {
      canonical: `https://lucasgabriell.com.br/categoria/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `Categoria: ${current.name} · Lucas Gabriel`,
      description: `Publicações e artigos na categoria ${current.name}`,
      url: `https://lucasgabriell.com.br/categoria/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categories = await getAllCategories();
  const current = categories.find((c) => c.slug === slug);

  if (!current) {
    notFound();
  }

  const posts = await getPostsByCategory(slug);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-sora" aria-label="Trilha de navegação">
        <Link href="/" className="hover:text-[#66AFFF] transition-colors">
          Início
        </Link>
        <span>/</span>
        <span className="text-neutral-400">Categorias</span>
        <span>/</span>
        <span className="text-white font-medium">
          {current.name}
        </span>
      </nav>

      {/* Category Header */}
      <div className="pb-8 border-b border-white/[0.08]">
        <div className="inline-block px-3 py-1 rounded-full bg-[#4E83FF]/15 border border-[#4E83FF]/30 text-[#66AFFF] text-xs font-semibold uppercase tracking-wider mb-3 font-sora">
          Categoria
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
          {current.name}
        </h1>
        <p className="text-sm text-neutral-300 mt-2 font-light">
          {posts.length} {posts.length === 1 ? "publicação encontrada" : "publicações encontradas"} nesta categoria.
        </p>

        {/* Other categories */}
        <div className="flex flex-wrap gap-2 mt-6">
          <Link
            href="/"
            aria-label="Ver todas as categorias"
            className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-neutral-900 border border-white/[0.08] text-neutral-300 hover:text-white hover:border-[#4E83FF]/50 transition-colors font-sora"
          >
            ← Ver todos
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categoria/${c.slug}`}
              aria-label={`Filtrar por categoria ${c.name}`}
              className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors font-sora ${
                c.slug === slug
                  ? "bg-[#4E83FF] text-white shadow-md shadow-[#4E83FF]/30"
                  : "bg-neutral-900 border border-white/[0.08] text-neutral-300 hover:text-white hover:border-[#4E83FF]/50"
              }`}
            >
              {c.name} ({c.count})
            </Link>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-neutral-300">
            Nenhuma publicação encontrada para esta categoria.
          </p>
          <Link
            href="/"
            className="inline-block mt-4 text-sm font-semibold text-[#66AFFF] hover:underline"
          >
            Voltar para a página inicial
          </Link>
        </div>
      )}
    </div>
  );
}
