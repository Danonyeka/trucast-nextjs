// app/guides/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides } from '@/lib/content';

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = guides.find(x => x.slug === params.slug);
  if (!g) notFound();

  return (
    <div className="container py-12">
      <Link className="link" href="/guides">← Back to Guides</Link>
      <h1 className="mt-2 text-3xl font-bold">{g.title}</h1>

      {g.date && (
        <p className="text-xs text-zinc-500">{new Date(g.date).toDateString()}</p>
      )}

      <div className="mt-6 whitespace-pre-wrap">
        {g.body ?? g.excerpt}
      </div>
    </div>
  );
}
