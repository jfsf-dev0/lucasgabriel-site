export interface Post {
  title: string;
  slug: string;
  date: string;
  status: "published" | "draft";
  author: string;
  excerpt: string;
  image: string;
  categories: string[];
  tags: string[];
  content: string;
}

export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}
