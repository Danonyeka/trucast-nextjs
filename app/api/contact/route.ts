// /app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';            // <-- ensure Node runtime (Resend SDK needs Node)
export const dynamic = 'force-dynamic';     // avoid caching on some hosts

const resend = new Resend(process.env.RESEND_API_KEY!);

// Use your verified domain here once ready, else it falls back to onboarding
const FROM = process.env.RESEND_FROM || 'Trucast <onboarding@resend.dev>';
const TO =
  process.env.CONTACT_TO ||
  process.env.RESEND_TO ||
  'sales@trucast-ng.com';

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || '').trim());
}
function esc(s: string) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function readBody(req: NextRequest) {
  const ctype = req.headers.get('content-type') || '';
  if (ctype.includes('application/json')) {
    return (await req.json()) as Record<string, unknown>;
  }
  // supports x-www-form-urlencoded & multipart/form-data
  const fd = await req.formData();
  return Object.fromEntries(fd.entries());
}

export async function POST(req: NextRequest) {
  let data: any = {};
  try {
    data = await readBody(req);
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 });
  }

  // redirect back to /contact on success
  const redirect =
    typeof data.redirect === 'string' && data.redirect ? String(data.redirect) : '/contact?sent=1';

  // Honeypot (spam trap). If filled, pretend success.
  const honeypot = String(data.company || data.website || '').trim();
  if (honeypot) {
    if (redirect.startsWith('/')) {
      return NextResponse.redirect(new URL(redirect, req.url));
    }
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name || '').trim().slice(0, 100);
  const email = String(data.email || '').trim();
  const phone = String(data.phone || '').trim().slice(0, 40);
  const message = String(data.message || '').trim();

  if (!name) {
    return NextResponse.json({ ok: false, error: 'Name is required' }, { status: 422 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Valid email is required' }, { status: 422 });
  }
  if (!message || message.length < 5) {
    return NextResponse.json({ ok: false, error: 'Message is too short' }, { status: 422 });
  }

  const subject = `New contact form: ${name}`;
  const plain =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    (phone ? `Phone: ${phone}\n` : '') +
    `\nMessage:\n${message}\n`;

  const html =
    `<div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu">
      <h2 style="margin:0 0 12px 0">New Contact Form</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : ''}
      <p style="white-space:pre-wrap"><strong>Message:</strong><br>${esc(message)}</p>
      <hr style="margin:16px 0;border:0;border-top:1px solid #eee" />
      <p style="color:#6b7280;font-size:12px">Sent from trucast-ng.com contact form</p>
    </div>`;

  try {
    const { error } = await resend.emails.send({
      from: FROM,           // e.g., 'Trucast <hello@trucast-ng.com>' (must be verified domain)
      to: [TO],             // where you want to receive the message
      subject,
      html,
      text: plain,
      reply_to: email,      // lets you reply directly to the sender
    });

    if (error) {
      throw new Error(error.message || 'Email send failed');
    }

    if (redirect.startsWith('/')) {
      return NextResponse.redirect(new URL(redirect, req.url));
    }
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const msg = err?.message || 'Send failed';
    // Show a friendly error on the contact page if redirect is local
    if (redirect.startsWith('/')) {
      const url = new URL(redirect.replace('sent=1', ''), req.url);
      url.searchParams.set('error', encodeURIComponent(msg));
      return NextResponse.redirect(url);
    }
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'Use POST with JSON or form data' });
}
