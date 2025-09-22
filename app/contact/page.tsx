
'use client';
import { site } from '@/lib/site';
import { useState } from 'react';
export default function ContactPage(){
  const [name, setName] = useState('');
  const [reply, setReply] = useState('');
  const [msg, setMsg] = useState('');
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${name || 'Customer'}`);
    const body = encodeURIComponent(`Name: ${name}\nReply to: ${reply}\n\n${msg}`);
    window.location.href = `mailto:${site.emailPrimary}?cc=${site.emailSecondary}&subject=${subject}&body=${body}`;
  }
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div><p className="font-semibold">WhatsApp / Phone</p><p className="text-sm text-zinc-600"><a className="link" href={site.waLink}>{site.phone}</a></p></div>
          <div><p className="font-semibold">Emails</p><p className="text-sm text-zinc-600"><a className="link" href={`mailto:${site.emailPrimary}`}>{site.emailPrimary}</a> • <a className="link" href={`mailto:${site.emailSecondary}`}>{site.emailSecondary}</a></p></div>
          <div><p className="font-semibold">Address</p><p className="text-sm text-zinc-600">{site.address}</p></div>
          <div><p className="font-semibold">Business Hours</p><p className="text-sm text-zinc-600">{site.hours}</p></div>
        </div>
        <div className="rounded-2xl bg-white shadow-sm border p-6">
          <p className="font-semibold">Quick Message</p>
          <form className="mt-3 space-y-3" onSubmit={submit}>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="w-full rounded-xl border border-zinc-200 px-3 py-2" />
            <input value={reply} onChange={e=>setReply(e.target.value)} placeholder="Email or phone" className="w-full rounded-xl border border-zinc-200 px-3 py-2" />
            <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Your message" rows={4} className="w-full rounded-xl border border-zinc-200 px-3 py-2" />
            <div className="flex gap-3">
              <button className="btn-primary">Send via Email</button>
              <a href={site.waLink} target="_blank" className="btn-outline">Chat on WhatsApp</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
