// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const p = url.pathname

  // Skip internal/static assets
  if (p.startsWith('/_next') || p.startsWith('/api') || p.startsWith('/static')) {
    return NextResponse.next()
  }

  // /Something -> /something
  if (/[A-Z]/.test(p)) {
    url.pathname = p.toLowerCase()
    return NextResponse.redirect(url, 308)
  }

  // /about.html -> /about
  if (p.endsWith('.html')) {
    url.pathname = p.slice(0, -5)
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
