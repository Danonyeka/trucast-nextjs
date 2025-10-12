// /app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';         // SMTP requires Node runtime
export const dynamic = 'force-dynamic';  // no caching for API route

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
  if (ctype.includes('application/json')) return (await req.json()) as Record<string, unknown>;
  const fd = await req.formData(); // supports urlencoded & multipart
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
    if (redirect.startsWith('/')) return NextResponse.redirect(new URL(redirect, req.url));
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name || '').trim().slice(0, 100);
  const email = String(data.email || '').trim();
  const phone = String(data.phone || '').trim().slice(0, 40);
  const message = String(data.message || '').trim();

  if (!name) return NextResponse.json({ ok: false, error: 'Name is required' }, { status: 422 });
  if (!isEmail(email)) return NextResponse.json({ ok: false, error: 'Valid email is required' }, { status: 422 });
  if (!message || message.length < 5) {
    return NextResponse.json({ ok: false, error: 'Message is too short' }, { status: 422 });
  }

  const subject = `New contact form: ${name}`;
  const plain =
    `Name: ${name}\nEmail: ${email}\n` +
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

  // SMTP settings from Vercel env
  const host = process.env.SMTP_HOST || 'smtp-relay.brevo.com';
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || 'false') === 'true'; // 465=true, 587=false
  const user = process.env.SMTP_USER!;
  const pass = process.env.SMTP_PASS!;
  const to = (process.env.CONTACT_TO || 'yourname@gmail.com') as string;
  const from = (process.env.CONTACT_FROM || user) as string;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,           // e.g., 'Trucast <sales@trucast-ng.com>'
      to,             // your inbox (Gmail or wherever)
      subject,
      text: plain,
      html,
      replyTo: email, // <- correct key (camelCase)
    });

    if (redirect.startsWith('/')) return NextResponse.redirect(new URL(redirect, req.url));
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const msg = err?.message || 'Send failed';
    if (redirect.startsWith('/')) {
      const u = new URL(redirect, req.url);
      u.searchParams.delete('sent');
      u.searchParams.set('error', msg);
      return NextResponse.redirect(u);
    }
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'Use POST with JSON or form data' });
}
