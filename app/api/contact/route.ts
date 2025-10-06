// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  return NextResponse.json({ ok: true, message: 'Submit contact form via POST.' });
}

export async function POST(req: NextRequest) {
  if (!req.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ ok: false, error: 'Use JSON body' }, { status: 415 });
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, message } = data || {};
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Missing fields: name, email, message' }, { status: 400 });
  }

  // TODO: send email / persist, etc.

  return NextResponse.json({ ok: true, received: { name, email, message } });
}

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
