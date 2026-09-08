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
    description: `Publicações e artigos na categoria ${current.name}`,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Início
        </Link>
        <span>/</span>
        <span className="text-neutral-400">Categorias</span>
        <span>/</span>
        <span className="text-neutral-900 dark:text-neutral-200 font-medium">
          {current.name}
        </span>
      </nav>

      {/* Category Header */}
      <div className="pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
          Categoria
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
          {current.name}
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
          {posts.length} {posts.length === 1 ? "publicação encontrada" : "publicações encontradas"} nesta categoria.
        </p>

        {/* Other categories */}
        <div className="flex flex-wrap gap-2 mt-6">
          <Link
            href="/"
            className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-blue-600"
          >
            ← Ver todos
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categoria/${c.slug}`}
              className={`text-xs font-medium px-3 py-1 rounded-full transition-colors ${
                c.slug === slug
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
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
          <p className="text-neutral-500 dark:text-neutral-400">
            Nenhuma publicação encontrada para esta categoria.
          </p>
          <Link
            href="/"
            className="inline-block mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Voltar para a página inicial
          </Link>
        </div>
      )}
    </div>
  );
}
