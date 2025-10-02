// app/blog/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic'; // skip SSG to prevent prerender errors
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Blog | Trucast Nigeria',
  description:
    'Insights and updates from Trucast Nigeria on electrical accessories in Nigeria, LED lighting and smart devices—bulk buying tips, product launches and how-to guides.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Trucast Nigeria',
    description:
      'Guides, tips, and updates on electrical accessories, LED lighting, and smart devices.',
    url: '/blog',
  },
};

type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  author?: string;
  date?: string;
};

const fmtDate = (d?: string) => {
  if (!d) return '';
  const t = Date.parse(d);
  if (Number.isNaN(t)) return '';
  return new Date(t).toLocaleDateString('en-NG', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export default async function BlogPage() {
  // Load posts at runtime (not at module scope)
  let posts: Post[] = [];
  try {
    const mod: any = await import('@/lib/content');
    const arr = mod?.posts;
    posts = Array.isArray(arr) ? (arr as Post[]) : [];
  } catch (e) {
    console.error('[blog] failed to load posts:', e);
    posts = [];
  }

  // JSON-LD for list
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `/blog/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="container py-12">
        <h1 className="text-2xl font-bold">Trucast Blog</h1>
        <p className="mt-2 text-zinc-600">Updates and announcements.</p>

        {posts.length === 0 ? (
          <p className="mt-6 text-sm text-zinc-600">
            No posts yet. Add entries in <code>lib/content.ts</code> under <code>posts</code>.
          </p>
        ) : (
          <div className="mt-6 space-y-4">
            {posts.map((p) => (
              <article key={p.slug} className="card p-5 transition hover:shadow-md">
                <h2 className="text-xl font-semibold">
                  <Link className="link" href={`/blog/${p.slug}`}>
                    {p.title}
                  </Link>
                </h2>
                {p.excerpt && <p className="mt-1 text-sm text-zinc-600">{p.excerpt}</p>}
                <div className="mt-2 text-xs text-zinc-500">
                  {p.author ? `${p.author} — ` : ''}
                  {fmtDate(p.date)}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
