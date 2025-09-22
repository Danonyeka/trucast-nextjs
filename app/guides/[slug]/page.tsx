import Link from 'next/link';
import { guides } from '@/lib/content';
import { notFound } from 'next/navigation';
import React from 'react';

export default function GuideDetail({ params }: { params: { slug: string } }){
  const g = guides.find(x => x.slug === params.slug);
  if(!g) return notFound();
  return (
    <div className="container py-12 prose max-w-none">
      <Link className="link" href="/guides">← Back to Guides</Link>
      <h1 className="mt-2 text-3xl font-bold">{g.title}</h1>
      <p className="text-xs text-zinc-500">{new Date(g.date).toDateString()}</p>
      <div className="mt-6 whitespace-pre-wrap">{g.body}</div>
    </div>
  );
}
