// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';        // ensure Node runtime (Resend SDK compatible)
export const dynamic = 'force-dynamic'; // don't prerender

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_TO =
  process.env.CONTACT_TO || 'sales@trucast-ng.com';
const CONTACT_FROM =
  process.env.CONTACT_FROM || 'Trucast Website <noreply@trucast-ng.com>';

function pick(s: unknown, max = 2000) {
  return String(s ?? '').toString().trim().slice(0, max);
}

export async function POST(req: NextRequest) {
  try {
    const ct = req.headers.get('content-type') || '';
    let name = '', contact = '', message = '';

    if (ct.includes('application/json')) {
      const body = await req.json();
      name = pick(body.name);
      contact = pick(body.contact);
      message = pick(body.message, 8000);
    } else {
      const form = await req.formData();
      // basic honeypot
      if (pick(form.get('website'))) {
        return NextResponse.json({ ok: true });
      }
      name = pick(form.get('name'));
      contact = pick(form.get('contact'));
      message = pick(form.get('message'), 8000);
    }

    if (!name || !contact || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO.split(',').map(s => s.trim()).filter(Boolean),
      subject: `New contact from ${name}`,
      reply_to: contact,
      text: `Name: ${name}\nContact: ${contact}\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Server error' }, { status: 500 });
  }
}

// Optional: a health-check
export async function GET() {
  return NextResponse.json({ ok: false, error: 'Use POST' }, { status: 400 });
}
