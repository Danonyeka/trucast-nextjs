import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

// Use a VERIFIED sender in Resend (domain must be verified there)
const FROM = process.env.RESEND_FROM || 'Trucast <noreply@your-domain.com>';

// Allow comma-separated recipients in env
const rawTo =
  process.env.CONTACT_TO ||
  process.env.RESEND_TO ||
  'sales@trucast-ng.com';
const TO = rawTo.split(',').map(s => s.trim()).filter(Boolean);

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

  // Honeypot: if filled, quietly accept
  if ((data.website ?? '').toString().trim()) {
    return respondOk(req.url, data.redirect as string | undefined, 'Thanks!');
  }

  // Your form fields: name, email (or phone), message
  const name = (data.name ?? '').toString().trim();
  const email = (data.email ?? '').toString().trim();
  const phone = (data.phone ?? '').toString().trim();
  const message = (data.message ?? '').toString().trim();

  // Compose a human-readable contact line
  const contactLine = [email, phone].filter(Boolean).join(' | ');

  if (!name || (!email && !phone) || !message) {
    return respondErr(req.url, data.redirect as string | undefined, 'Missing fields', 400);
  }

  // Only set replyTo if there's a valid email
  const isEmail = /\S+@\S+\.\S+/.test(email);

  try {
    const send = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `Contact form: ${name}`,
      replyTo: isEmail ? email : undefined, // <-- camelCase
      text: `Name: ${name}\nContact: ${contactLine}\n\n${message}`,
    });

    if ((send as any)?.error) throw (send as any).error;

    return respondOk(req.url, data.redirect as string | undefined);
  } catch (err: any) {
    return respondErr(req.url, data.redirect as string | undefined, err?.message || 'Send failed', 500);
  }
}

export async function GET() {
  // Friendly message if someone opens the URL directly
  return NextResponse.json({
    ok: false,
    error: 'Use POST with form fields: name, email/phone, message.',
  });
}

/**
 * Helpers: redirect if a redirect URL is provided; otherwise respond with JSON.
 */
function respondOk(reqUrl: string, redirect?: string, msg = 'OK') {
  if (redirect) {
    return NextResponse.redirect(new URL(redirect, reqUrl), 303);
  }
  return NextResponse.json({ ok: true, message: msg });
}

function respondErr(reqUrl: string, redirect?: string, error = 'Error', status = 400) {
  if (redirect) {
    const url = new URL(redirect, reqUrl);
    url.searchParams.set('error', encodeURIComponent(error));
    return NextResponse.redirect(url, 303);
  }
  return NextResponse.json({ ok: false, error }, { status });
}
