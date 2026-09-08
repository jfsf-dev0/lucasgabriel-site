"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Post, slugify } from "@/lib/slugify";

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
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group flex flex-col bg-[#0E0E0E] rounded-2xl border border-white/[0.08] hover:border-[#4E83FF]/40 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#4E83FF]/10 transition-colors duration-300"
    >
      <Link href={`/${post.slug}`} className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
        <Image
          src={post.image || "/images/Lucas-01.jpg"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-60" />
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
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#4E83FF]/15 text-[#66AFFF] hover:bg-[#4E83FF]/25 transition-colors font-sora"
            >
              {cat}
            </Link>
          ))}
          <span className="text-xs text-neutral-400 ml-auto">
            {formattedDate}
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#66AFFF] transition-colors mb-2 line-clamp-2 leading-snug">
          <Link href={`/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {post.excerpt && (
          <p className="text-sm text-neutral-300 line-clamp-3 mb-4 flex-1 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        <div className="pt-4 border-t border-white/[0.06] mt-auto flex items-center justify-between">
          <span className="text-xs font-medium text-neutral-400">
            Por {post.author}
          </span>
          <Link
            href={`/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#66AFFF] group-hover:translate-x-1 transition-transform font-sora"
          >
            <span>Ler mais</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
