// /app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

// If your domain isn’t verified yet, temporarily use:
// const FROM = 'Trucast <onboarding@resend.dev>';
const FROM = process.env.RESEND_FROM || 'Trucast <onboarding@resend.dev>';

const TO =
  process.env.CONTACT_TO ||
  process.env.RESEND_TO ||
  'sales@trucast-ng.com';

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: NextRequest) {
  const ct = req.headers.get('content-type') || '';
  let data: Record<string, any> = {};

  try {
    if (ct.includes('application/json')) {
      data = await req.json();
    } else if (
      ct.includes('application/x-www-form-urlencoded') ||
      ct.includes('multipart/form-data')
    ) {
      const form = await req.formData();
      data = Object.fromEntries(form.entries());
    } else {
      return NextResponse.json(
        { ok: false, error: 'Use JSON or form-encoded body' },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }

  // Honeypot
  if ((data.website ?? '').toString().trim()) {
    return NextResponse.json({ ok: true });
  }

  const redirect = (data.redirect ?? '').toString().trim();

  const name = (data.name ?? '').toString().trim();
  const email = (data.email ?? '').toString().trim();
  const phone = (data.phone ?? '').toString().trim();
  const message = (data.message ?? '').toString().trim();

  if (!name || !message || (!email && !phone)) {
    const error = 'Missing fields';
    if (redirect.startsWith('/')) {
      const url = new URL(redirect, req.url);
      url.searchParams.set('error', encodeURIComponent(error));
      return NextResponse.redirect(url);
    }
    return NextResponse.json({ ok: false, error }, { status: 400 });
  }

  try {
    const text = [
      `Name: ${name}`,
      email ? `Email: ${email}` : null,
      phone ? `Phone: ${phone}` : null,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    const send = await resend.emails.send({
      from: FROM,
      to: [TO],
      subject: `Contact form: ${name}`,
      // IMPORTANT: Resend uses "replyTo", not "reply_to"
      replyTo: isEmail(email) ? email : undefined,
      text,
    });

    if ((send as any)?.error) throw (send as any).error;

    if (redirect.startsWith('/')) {
      return NextResponse.redirect(new URL(redirect, req.url));
    }
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const error = err?.message || 'Send failed';
    if (redirect.startsWith('/')) {
      const url = new URL(redirect, req.url);
      url.searchParams.set('error', encodeURIComponent(error));
      return NextResponse.redirect(url);
    }
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'Use POST with JSON or form data' });
}
