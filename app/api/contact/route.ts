// app/api/contact/route.ts
import { NextResponse, NextRequest } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  // Visiting the URL in a browser should succeed
  return NextResponse.json({ ok: true, message: 'Submit contact form via POST.' });
}

export async function POST(req: NextRequest) {
  // Require JSON
  if (!req.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ ok: false, error: 'Use JSON body' }, { status: 415 });
  }

  let data: any;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, message } = data || {};
  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: 'Missing fields: name, email, message' },
      { status: 400 }
    );
  }

  // TODO: send email / persist (nodemailer, Resend, etc.)
  // await sendMail({ name, email, message });

  return NextResponse.json({ ok: true, received: { name, email, message } });
}

// Optional CORS preflight (useful if posting from another origin)
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
