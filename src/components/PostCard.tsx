import Link from "next/link";
import Image from "next/image";
import { Post, slugify } from "@/lib/content";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="group flex flex-col bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`/${post.slug}`} className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <Image
          src={post.image || "/images/Lucas-01.jpg"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {post.status === "draft" && (
          <span className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow">
            Rascunho
          </span>
        )}
      </Link>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {post.categories.map((cat) => (
            <Link
              key={cat}
              href={`/categoria/${slugify(cat)}`}
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 hover:bg-blue-100 transition-colors"
            >
              {cat}
            </Link>
          ))}
          <span className="text-xs text-neutral-400 dark:text-neutral-500 ml-auto">
            {formattedDate}
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
          <Link href={`/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {post.excerpt && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 mb-4 flex-1">
            {post.excerpt}
          </p>
        )}

        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-auto flex items-center justify-between">
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
            Por {post.author}
          </span>
          <Link
            href={`/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
          >
            <span>Ler mais</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
