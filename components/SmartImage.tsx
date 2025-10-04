// components/SmartImage.tsx
'use client'

import Image, { ImageProps } from 'next/image'

function normalizeProductImagePath(src: string): string {
  const dir = '/images/products/'
  if (!src.startsWith(dir)) return src

  // Split query/hash so we only normalize the filename itself
  const q = src.indexOf('?')
  const h = src.indexOf('#')
  const cut = [q, h].filter(i => i >= 0).reduce((m, i) => Math.min(m, i), Infinity)
  const head = cut === Infinity ? src : src.slice(0, cut)
  const tail = cut === Infinity ? ''   : src.slice(cut)

  // Decode and remove whitespace
  const raw = decodeURIComponent(head.slice(dir.length)).replace(/\s+/g, '')
  const dot = raw.lastIndexOf('.')
  const name = dot > 0 ? raw.slice(0, dot) : raw
  const ext  = dot > 0 ? raw.slice(dot + 1) : ''

  const lowerName = name.toLowerCase()

  // FIX: Only the Alu Profile images are stored lowercase (trc-alp*)
  if (lowerName.startsWith('trc-alp')) {
    const filename = `${lowerName}${ext ? '.' + ext.toLowerCase() : ''}`
    return dir + filename + tail
  }

  // Default behavior for the rest: uppercase name, lowercase extension
  const filename =
    `${name.toUpperCase()}${ext ? '.' + ext.toLowerCase() : ''}`

  return dir + filename + tail
}

export default function SmartImage(props: ImageProps) {
  const { src, sizes, ...rest } = props
  const isLocal = typeof src === 'string' && src.startsWith('/')

  const fixedSrc =
    typeof src === 'string' ? normalizeProductImagePath(src) : (src as any)

  return (
    <Image
      unoptimized={isLocal}
      sizes={('fill' in rest && (rest as any).fill && !sizes) ? '100vw' : sizes}
      src={fixedSrc}
      {...rest}
    />
  )
}
