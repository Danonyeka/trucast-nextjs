// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SmartImage from '@/components/SmartImage'
import { getPost } from '@/lib/content'
import { BlogPostingLd, BreadcrumbLd } from '@/components/seo/JsonLd'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trucast-ng.com'

/** Tiny markdown → HTML (safe for our own static strings) */
function mdToHtml(src: string): string {
  let s = src
  s = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  s = s.replace(/^### (.*)$/gm, '<h3>$1</h3>')
  s = s.replace(/^## (.*)$/gm, '<h2>$1</h2>')
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  s = s.replace(/\*(.+?)\*/g, '<em>$1</em>')
  s = s.replace(/(?:^|\n)- (.*)(?=\n(?!- )|$)/gs, (m) => {
    const items = m
      .trim()
      .split('\n')
      .map((line) => line.replace(/^- /, '').trim())
      .map((t) => `<li>${t}</li>`)
      .join('')
    return `<ul>${items}</ul>`
  })
  s = s
    .split(/\n{2,}/)
    .map((blk) => {
      if (/^<h[23]>/.test(blk) || /^<ul>/.test(blk)) return blk
      return `<p>${blk.replace(/\n/g, '<br/>')}</p>`
    })
    .join('\n')
  return s
}

/** Helpers */
function isoDate(d: string) {
  return new Date(d).toISOString().split('T')[0]
}
function summarize(text: string, fallback = 'Trucast Nigeria blog post') {
  const plain = text.replace(/[#*_>`~\-]/g, ' ').replace(/\s+/g, ' ').trim()
  return (plain || fallback).slice(0, 160)
}

type PageProps = { params: { slug: string } }

/** SEO metadata per post */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return { title: 'Blog | Trucast Nigeria' }

  const canonical = `${SITE_URL}/blog/${params.slug}`
  const description = post.excerpt || summarize(post.content)
  const img = post.cover || '/og.jpg'
  const title = `${post.title} | Trucast Nigeria`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title,
      description,
      type: 'article',
      images: [{ url: img }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [img],
    },
  }
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = getPost(params.slug)
  if (!post) return notFound()

  const canonical = `${SITE_URL}/blog/${params.slug}`
  const image = post.cover || '/og.jpg'
  const description = post.excerpt || summarize(post.content)
  const dateStr = new Date(post.date).toLocaleDateString()

  return (
    <>
      {/* JSON-LD (SSR) */}
      <BlogPostingLd
        headline={post.title}
        description={description}
        url={canonical}
        image={image}
        datePublished={isoDate(post.date)}
        dateModified={isoDate(post.updated ?? post.date)}
        authorName={post.author || 'Trucast Nigeria Limited'}
        publisherName="Trucast Nigeria Limited"
        publisherLogo="/og.jpg"
        baseUrl={SITE_URL}
      />
      <BreadcrumbLd
        items={[
          { name: 'Home', item: SITE_URL },
          { name: 'Blog', item: `${SITE_URL}/blog` },
          { name: post.title, item: canonical },
        ]}
      />

      {/* ----- existing UI below ----- */}
      <div className="container py-10">
        <nav className="text-sm text-zinc-600 mb-4">
          <Link className="link" href="/blog">
            ← Back to Blog
          </Link>
        </nav>

        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="text-xs text-zinc-500 mt-1">
          {post.author ? `${post.author} • ` : ''}
          {dateStr}
        </div>

        {post.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((t: string) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-full text-xs bg-brand/10 text-brand ring-1 ring-brand/20"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {post.cover ? (
          <div className="mt-6 relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-100">
            <SmartImage src={post.cover} alt={post.title} fill className="object-cover" />
          </div>
        ) : null}

        <article
          className="prose prose-zinc mt-6"
          dangerouslySetInnerHTML={{ __html: mdToHtml(post.content) }}
        />
      </div>
    </>
  )
}
