import Link from 'next/link';
import { guides } from '@/lib/content';

export default function GuidesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold mb-6">Guides & Resources</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="card p-5 hover:shadow-md transition"
          >
            <h2 className="font-semibold">{g.title}</h2>
            <p className="text-sm text-zinc-600 mt-1">{g.excerpt}</p>
            <span className="inline-block mt-3 text-xs text-brand font-medium">
              {g.category}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
