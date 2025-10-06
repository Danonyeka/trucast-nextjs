// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

function redirectOrJson(req: NextRequest, data: any, status = 200) {
  const accept = req.headers.get('accept') || '';
  // If a browser posted a form, it'll usually accept HTML — redirect for nicer UX
  if (accept.includes('text/html')) {
    const url = new URL('/contact?sent=1', req.url);
    return NextResponse.redirect(url, { status: 303 });
  }
  return NextResponse.json(data, { status });
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'POST here with JSON or form data.' });
}

export async function POST(req: NextRequest) {
  const ctype = req.headers.get('content-type') || '';
  let name = '', email = '', message = '';

  try {
    if (ctype.includes('application/json')) {
      const body = await req.json();
      name = body?.name ?? '';
      email = body?.email ?? '';
      message = body?.message ?? '';
    } else {
      // Handles application/x-www-form-urlencoded and multipart/form-data
      const fd = await req.formData();
      name = String(fd.get('name') ?? '');
      email = String(fd.get('email') ?? '');
      message = String(fd.get('message') ?? '');
      // Optional honeypot to block bots:
      if (fd.get('website')) return redirectOrJson(req, { ok: true }); // silently ignore
    }
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid body' }, { status: 400 });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: 'Missing fields: name, email, message' },
      { status: 400 }
    );
  }

  // TODO: send an email / store in DB
  // await sendEmail({ name, email, message });

  return redirectOrJson(req, { ok: true, received: { name, email, message } });
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
