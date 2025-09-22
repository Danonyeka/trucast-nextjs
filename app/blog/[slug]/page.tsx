import { notFound } from "next/navigation";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { getPost } from "@/lib/content";

/** Tiny markdown → HTML (safe for our own static strings) */
function mdToHtml(src: string): string {
  let s = src;

  // escape & basic sanitization of angle brackets in text blocks
  s = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // headings
  s = s.replace(/^### (.*)$/gm, "<h3>$1</h3>");
  s = s.replace(/^## (.*)$/gm, "<h2>$1</h2>");

  // bold **text** and italics *text*
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // unordered lists (simple)
  s = s.replace(/(?:^|\n)- (.*)(?=\n(?!- )|$)/gs, (m) => {
    const items = m
      .trim()
      .split("\n")
      .map((line) => line.replace(/^- /, "").trim())
      .map((t) => `<li>${t}</li>`)
      .join("");
    return `<ul>${items}</ul>`;
  });

  // paragraphs (wrap leftover blocks separated by blank lines)
  s = s
    .split(/\n{2,}/)
    .map((blk) => {
      if (/^<h[23]>/.test(blk) || /^<ul>/.test(blk)) return blk;
      return `<p>${blk.replace(/\n/g, "<br/>")}</p>`;
    })
    .join("\n");

  return s;
}

type PageProps = { params: { slug: string } };

export default function BlogDetailPage({ params }: PageProps) {
  const post = getPost(params.slug);
  if (!post) return notFound();

  const dateStr = new Date(post.date).toLocaleDateString();

  return (
    <div className="container py-10">
      <nav className="text-sm text-zinc-600 mb-4">
        <Link className="link" href="/blog">← Back to Blog</Link>
      </nav>

      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="text-xs text-zinc-500 mt-1">
        {post.author ? `${post.author} • ` : ""}{dateStr}
      </div>

      {post.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-brand/10 text-brand ring-1 ring-brand/20">
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {post.cover ? (
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mt-6 ring-1 ring-zinc-200 bg-white">
          <SmartImage src={post.cover} alt={post.title} fill className="object-cover" />
        </div>
      ) : null}

      <article
        className="prose prose-zinc mt-6 max-w-none"
        dangerouslySetInnerHTML={{ __html: mdToHtml(post.content) }}
      />
    </div>
  );
}
