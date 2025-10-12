// components/SmartImage.tsx
'use client';

import Image, { ImageProps } from 'next/image';

function safeDecode(s: string) {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

function normalizeProductImagePath(src: string): string {
  const dir = '/images/products/';
  if (!src || typeof src !== 'string') return src as unknown as string;
  if (!src.startsWith(dir)) return src;

  // Split query/hash so we only normalize the filename itself
  const q = src.indexOf('?');
  const h = src.indexOf('#');
  const cut = [q, h].filter(i => i >= 0).reduce((m, i) => Math.min(m, i), Infinity);
  const head = cut === Infinity ? src : src.slice(0, cut);
  const tail = cut === Infinity ? ''   : src.slice(cut);

  // Decode safely, remove whitespace, then UPPERCASE name and lowercase extension
  let filename = safeDecode(head.slice(dir.length)).replace(/\s+/g, '');
  const dot = filename.lastIndexOf('.');
  if (dot > 0) {
    const name = filename.slice(0, dot).toUpperCase();
    const ext  = filename.slice(dot + 1).toLowerCase();
    filename = `${name}.${ext}`;
  } else {
    filename = filename.toUpperCase();
  }

  return dir + filename + tail;
}

export default function SmartImage(props: ImageProps) {
  const { src, sizes, alt, ...rest } = props;

  const resolvedSrc =
    typeof src === 'string'
      ? normalizeProductImagePath(src)
      : (src as any);

  // If src is empty or not a string, fall back to a harmless placeholder
  const safeSrc =
    typeof resolvedSrc === 'string' && resolvedSrc.length > 0
      ? resolvedSrc
      : '/og.jpg';

  return (
    <Image
      // ✅ Let Next.js optimize local images (no `unoptimized` override)
      // Provide a default sizes when using `fill`
      sizes={('fill' in rest && (rest as any).fill && !sizes) ? '100vw' : sizes}
      src={safeSrc}
      alt={alt || 'image'}
      {...rest}
    />
  );
}
