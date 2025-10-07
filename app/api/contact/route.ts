import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';        // use Node runtime (NOT edge)
export const dynamic = 'force-dynamic'; // avoid caching

const resend = new Resend(process.env.RESEND_API_KEY);

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  try {
    const ct = req.headers.get('content-type') || '';

    // Support both classic forms and JSON
    let name = '', contact = '', message = '', website = '';
    if (ct.includes('application/json')) {
      const body = await req.json();
      name = String(body?.name ?? '');
      contact = String(body?.contact ?? '');
      message = String(body?.message ?? '');
      website = String(body?.website ?? '');
    } else {
      const fd = await req.formData();
      name = String(fd.get('name') ?? '');
      contact = String(fd.get('contact') ?? '');
      message = String(fd.get('message') ?? '');
      website = String(fd.get('website') ?? '');
    }

    // Honeypot: real users leave this blank
    if (website) return NextResponse.json({ ok: true });

    if (!name || !contact || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 422 });
    }

    const to = (process.env.CONTACT_TO || '').split(',').map(s => s.trim()).filter(Boolean);
    if (!to.length) {
      console.error('CONTACT_TO is not set');
      return NextResponse.json({ ok: false, error: 'Server not configured' }, { status: 500 });
    }

    const from = process.env.CONTACT_FROM || 'Trucast <onboarding@resend.dev>';
    const subject = `New contact form: ${name}`;
    const reply_to = isEmail(contact) ? contact : undefined;

    const text =
`Name: ${name}
Contact: ${contact}

${message}

IP: ${req.headers.get('x-forwarded-for') || 'unknown'}`;

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      reply_to,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
    }

    // Redirect back with a success flag for a no-JS form UX
    return NextResponse.redirect(new URL('/contact?sent=1', req.url), 303);
  } catch (err: any) {
    console.error('Contact POST error:', err);
    return NextResponse.json({ ok: false, error: err?.message || 'Unknown error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'POST your form here.' });
}
