'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [selected, setSelected] = useState(0);
  return <div><div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-50 border"><Image src={images[selected]} alt={`${name} — view ${selected + 1}`} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-4" /></div>{images.length > 1 && <div className="mt-3 flex flex-wrap gap-3" aria-label="Product image views">{images.map((src, index) => <button key={src} type="button" onClick={() => setSelected(index)} aria-label={`View ${index + 1} of ${name}`} aria-pressed={selected === index} className={`relative h-20 w-20 rounded-lg border-2 bg-white ${selected === index ? 'border-emerald-700' : 'border-zinc-200'}`}><Image src={src} alt="" fill sizes="80px" className="object-contain p-1" /></button>)}</div>}<p className="mt-3 text-xs text-zinc-500">Product images are for identification. Confirm the required finish and model with sales.</p></div>;
}
