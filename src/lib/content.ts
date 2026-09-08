import fs from "fs";
import path from "path";
import { Post, slugify } from "./slugify";

export type { Post };
export { slugify };

const CONTENT_DIR = path.join(process.cwd(), "src/content");

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: raw };
  }

  const yamlStr = match[1];
  const content = match[2].trim();
  const data: Record<string, unknown> = {};

  let currentKey = "";
  const lines = yamlStr.split("\n");

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    if (trimmed.startsWith("- ") && currentKey) {
      const val = trimmed.replace(/^- /, "").replace(/^["']|["']$/g, "").trim();
      const existing = data[currentKey];
      if (Array.isArray(existing)) {
        existing.push(val);
      } else {
        data[currentKey] = [val];
      }
      continue;
    }

    const colonIdx = line.indexOf(":");
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      const rawVal = line.slice(colonIdx + 1).trim();

      if (!rawVal) {
        currentKey = key;
        data[key] = [];
      } else {
        currentKey = "";
        let val: unknown = rawVal.replace(/^["']|["']$/g, "");
        if (rawVal === "true") val = true;
        else if (rawVal === "false") val = false;
        data[key] = val;
      }
    }
  }

  return { data, content };
}

export async function getAllPosts(includeDrafts = false): Promise<Post[]> {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR);
  const posts: Post[] = [];

  for (const file of files) {
    if (!file.endsWith(".mdx") && !file.endsWith(".md")) continue;

    const filePath = path.join(CONTENT_DIR, file);
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = parseFrontmatter(rawContent);

    const fileSlug = file.replace(/\.mdx?$/, "");
    const slug = (typeof data.slug === "string" && data.slug) ? data.slug : fileSlug;
    const title = typeof data.title === "string" ? data.title : fileSlug;
    const date = typeof data.date === "string" ? data.date : "2026-06-29";
    const status = (data.status === "draft" ? "draft" : "published") as "published" | "draft";
    const author = typeof data.author === "string" ? data.author : "Lucas Gabriel";
    const excerpt = typeof data.excerpt === "string" ? data.excerpt : "";
    const image = typeof data.image === "string" ? data.image : "/images/Lucas-01.jpg";
    const categories = Array.isArray(data.categories) ? (data.categories as string[]) : ["Sem categoria"];
    const tags = Array.isArray(data.tags) ? (data.tags as string[]) : [];

    if (!includeDrafts && status === "draft") {
      continue;
    }

    // Ignore empty templates like kit-padrao
    if (!content && slug === "kit-padrao") {
      continue;
    }

    posts.push({
      title,
      slug,
      date,
      status,
      author,
      excerpt,
      image,
      categories,
      tags,
      content,
    });
  }

  // Sort descending by date
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const allPosts = await getAllPosts(true);
  return allPosts.find((p) => p.slug === slug) || null;
}

export async function getAllCategories(): Promise<{ name: string; slug: string; count: number }[]> {
  const posts = await getAllPosts(false);
  const catMap = new Map<string, { name: string; slug: string; count: number }>();

  for (const post of posts) {
    for (const cat of post.categories) {
      const cSlug = slugify(cat);
      const existing = catMap.get(cSlug);
      if (existing) {
        existing.count += 1;
      } else {
        catMap.set(cSlug, { name: cat, slug: cSlug, count: 1 });
      }
    }
  }

  return Array.from(catMap.values()).sort((a, b) => b.count - a.count);
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  const posts = await getAllPosts(false);
  return posts.filter((post) =>
    post.categories.some((c) => slugify(c) === categorySlug)
  );
}
