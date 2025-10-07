import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

// Keep FROM as a verified sender in Resend (domain must be verified)
const FROM = process.env.RESEND_FROM || 'Trucast <noreply@your-domain.com>';

// Allow comma-separated recipients in CONTACT_TO/RESEND_TO
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
    } else if (ct.includes('application/x-www-form-urlencoded') || ct.includes('multipart/form-data')) {
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

  // Honeypot field: bots fill this
  if ((data.website ?? '').toString().trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name ?? '').toString().trim();
  const contact = (data.contact ?? '').toString().trim();
  const message = (data.message ?? '').toString().trim();

  if (!name || !contact || !message) {
    return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
  }

  // Only set replyTo if "contact" looks like an email
  const isEmail = /\S+@\S+\.\S+/.test(contact);

  try {
    const send = await resend.emails.send({
      from: FROM,
      to: TO, // string[] is fine
      subject: `Contact form: ${name}`,
      replyTo: isEmail ? contact : undefined, // <-- fixed key (camelCase)
      text: `Name: ${name}\nContact: ${contact}\n\n${message}`,
    });

    // Resend throws on failure; extra guard just in case
    if ((send as any)?.error) throw (send as any).error;

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || 'Send failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'Use POST with JSON or form data' });
}
