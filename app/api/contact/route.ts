// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // if you use nodemailer or other Node libs
export const dynamic = 'force-dynamic'; // avoid accidental caching

export async function GET() {
  // So opening /api/contact in a browser shows a helpful message
  return NextResponse.json({ ok: true, message: 'Submit via POST.' });
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    // TODO: send email / persist (e.g., nodemailer/Resend/Supabase)
    // await sendMail({ name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact POST error', err);
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }
}

// Optional if you’ll call this from another origin:
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
