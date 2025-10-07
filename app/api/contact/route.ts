import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

// Use a VERIFIED sender in Resend (domain verified)
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
    return respondOk(data.redirect as string | undefined, 'Thanks!');
  }

  // Map your form fields (name/email/phone/message)
  const name = (data.name ?? '').toString().trim();
  const email = (data.email ?? '').toString().trim();
  const phone = (data.phone ?? '').toString().trim();
  const message = (data.message ?? '').toString().trim();

  // Compose a human "contact" line for the email body
  const contactLine = [email, phone].filter(Boolean).join(' | ');

  if (!name || (!email && !phone) || !message) {
    return respondErr(
      data.redirect as string | undefined,
      'Missing fields',
      400
    );
  }

  // Only set replyTo if we have an email
  const isEmail = /\S+@\S+\.\S+/.test(email);

  try {
    const send = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `Contact form: ${name}`,
      replyTo: isEmail ? email : undefined,   // <-- correct camelCase key
      text: `Name: ${name}\nContact: ${contactLine}\n\n${message}`,
    });

    if ((send as any)?.error) throw (send as any).error;

    return respondOk(data.redirect as string | undefined);
  } catch (err: any) {
    return respondErr(
      data.redirect as string | undefined,
      err?.message || 'Send failed',
      500
    );
  }
}

export async function GET() {
  // People opening the URL in a browser will see this (no body sent)
  return NextResponse.json({
    ok: false,
    error: 'Use POST with form fields: name, email/phone, message.',
  });
}

/** Helpers: redirect if ?redirect= is provided; otherwise JSON**
