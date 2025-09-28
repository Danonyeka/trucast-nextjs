// app/go/catalog/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'edge'; // fast, global

export async function GET() {
  // Change this once (or from an ENV var) and the QR never needs reprinting.
  const dest = process.env.CATALOG_URL
    ?? 'https://heyzine.com/flip-book/02dae39788.html';

  // 301 = permanent, good for scanners; if you want “temporary” use 302.
  return NextResponse.redirect(dest, { status: 301 });
}
