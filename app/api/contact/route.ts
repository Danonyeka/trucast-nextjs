// app/api/contact/route.ts
import { NextResponse } from 'next/server';

function isForm(req: Request) {
  const ct = req.headers.get('content-type') || '';
  return (
    ct.includes('application/x-www-form-urlencoded') ||
    ct.includes('multipart/form-data')
  );
}

export async function POST(req: Request) {
  let name = '', email = '', phone = '', message = '', website = '', redirect = '';

  try {
    if (isForm(req)) {
      const fd = await req.formData();
      name = String(fd.get('name') || '');
      email = String(fd.get('email') || '');
      phone = String(fd.get('phone') || '');
      message = String(fd.get('message') || '');
      website = String(fd.get('website') || '');
      redirect = String(fd.get('redirect') || '/contact?sent=1');
    } else {
      const body = await req.json().catch(() => ({} as any));
      name = body.name || '';
      email = body.email || '';
      phone = body.phone || '';
      message = body.message || '';
      website = body.website || '';
      redirect = body.redirect || '/contact?sent=1';
    }

    // Honeypot
    if (website) {
      return isForm(req)
        ? NextResponse.redirect(new URL('/contact?sent=1', req.url), 303)
        : NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      if (isForm(req)) {
        const params = new URLSearchParams({ error: 'Fill required fields' });
        return NextResponse.redirect(new URL('/contact?' + params, req.url), 303);
      }
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    const TO = process.env.CONTACT_TO || 'sales@trucast-ng.com';
    const FROM = process.env.CONTACT_FROM || 'no-reply@trucast-ng.com';
    const API = process.env.RESEND_API_KEY;

    // Send email (or log if key not set)
    if (API) {
      const { Resend } = await import('resend');
      const resend = new Resend(API);
      await resend.emails.send({
        from: FROM,
        to: TO,
        reply_to: email,
        subject: `New contact form — ${name}`,
        text: `Name: ${name}
Email: ${email}
Phone: ${phone || '—'}

Message:
${message}
`,
      });
    } else {
      console.log('CONTACT FORM (no RESEND_API_KEY set):', {
        name, email, phone, message,
      });
    }

    if (isForm(req)) {
      return NextResponse.redirect(new URL(redirect, req.url), 303);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('CONTACT_ERROR', err);
    if (isForm(req)) {
      const params = new URLSearchParams({ error: 'Something went wrong' });
      return NextResponse.redirect(new URL('/contact?' + params, req.url), 303);
    }
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json(
    { ok: false, error: 'Use POST with form or JSON body' },
    { status: 405 }
  );
}
