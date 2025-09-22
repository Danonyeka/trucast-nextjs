import Link from "next/link";
import { posts as allPosts } from "@/lib/content";

export default function BlogPage() {
  const posts = allPosts ?? []; // defensive: never undefined

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold">Trucast Blog</h1>
      <p className="text-zinc-600 mt-2">Updates and announcements.</p>

      {posts.length === 0 ? (
        <p className="mt-6 text-sm text-zinc-600">
          No posts yet. Add entries in <code>lib/content.ts</code> under <code>posts</code>.
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          {posts.map((p) => (
            <article key={p.slug} className="card p-5 hover:shadow-md transition">
              <h2 className="text-xl font-semibold">
                <Link className="link" href={`/blog/${p.slug}`}>
                  {p.title}
                </Link>
              </h2>
              <p className="text-sm text-zinc-600 mt-1">{p.excerpt}</p>
              <div className="text-xs text-zinc-500 mt-2">
                {p.author ? `${p.author} — ` : ""}
                {new Date(p.date).toLocaleDateString()}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
