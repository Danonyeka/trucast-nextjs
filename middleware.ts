// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Any public/static file (has an extension) should be left untouched.
const ASSET_EXT = /\.(?:png|jpe?g|webp|gif|svg|ico|txt|xml|json|map|pdf|woff2?|ttf|eot|otf|mp4|webm|zip)$/i

// ✅ Only treat these hosts as production for HSTS/HTTPS enforcement
const PROD_HOSTS = new Set(['trucast-ng.com', 'www.trucast-ng.com'])

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const p = url.pathname
  const host = req.headers.get('host') || ''
  const isProdHost = PROD_HOSTS.has(host)

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
    const res = NextResponse.next()
    // Add HSTS for assets too (safe), but only on prod host
    if (isProdHost) {
      res.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
    }
    return res
  }

  // Only lowercase for route-like paths (no extension)
  if (/[A-Z]/.test(p)) {
    url.pathname = p.toLowerCase()
    return NextResponse.redirect(url, 308)
  }

  // 🔒 Enforce HTTPS on production (defense-in-depth; Vercel already serves HTTPS)
  // Some environments pass proto via header:
  const proto = req.headers.get('x-forwarded-proto') || url.protocol.replace(':', '')
  if (isProdHost && proto !== 'https') {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 308)
  }

  // Continue to route; append HSTS for prod only
  const res = NextResponse.next()
  if (isProdHost) {
    res.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  }
  return res
}

export const config = {
  matcher: '/:path*',
}
