// components/seo/JsonLd.client.tsx
'use client'

import { useEffect } from 'react'

type Json = Record<string, unknown> | Array<Record<string, unknown>>

function safeJsonLd(data: Json) {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

export default function JsonLdClient({
  id,
  data,
  inHead = true,
}: {
  id?: string
  data: Json
  /** put script in <head> (default) or at end of <body> */
  inHead?: boolean
}) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id || `ld-${Math.random().toString(36).slice(2)}`
    script.text = safeJsonLd(data)

    const parent = inHead ? document.head : document.body
    parent.appendChild(script)

    return () => {
      try { parent.removeChild(script) } catch {}
    }
    // data is serialized from server → client once; this runs once after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return null
}
