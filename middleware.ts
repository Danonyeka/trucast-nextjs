// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Any public/static file (has an extension) should be left untouched.
const ASSET_EXT = /\.(?:png|jpe?g|webp|gif|svg|ico|txt|xml|json|map|pdf|woff2?|ttf|eot|otf|mp4|webm|zip)$/i

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const p = url.pathname

  // Let Next handle internal runtime stuff
  if (p.startsWith('/_next') || p.startsWith('/api')) {
    return NextResponse.next()
  }

  // Redirect legacy HTML pages FIRST
  if (p.endsWith('.html')) {
    url.pathname = p.slice(0, -5)
    return NextResponse.redirect(url, 308)
  }

  // Do not modify requests for static/public assets
  if (ASSET_EXT.test(p)) {
    return NextResponse.next()
  }

  // Only lowercase for route-like paths (no extension)
  if (/[A-Z]/.test(p)) {
    url.pathname = p.toLowerCase()
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
