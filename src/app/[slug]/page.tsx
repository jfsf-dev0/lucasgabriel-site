import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import PostLayout from "@/components/PostLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts(true);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Publicação não encontrada · Lucas Gabriel",
    };
  }

  return {
    title: `${post.title} · Lucas Gabriel`,
    description: post.excerpt || `Artigo sobre ${post.title} por Lucas Gabriel`,
    alternates: {
      canonical: `https://lucasgabriell.com.br/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${post.title} · Lucas Gabriel`,
      description: post.excerpt,
      url: `https://lucasgabriell.com.br/${slug}`,
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <PostLayout post={post} />;
}
