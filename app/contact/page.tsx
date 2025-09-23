'use client';

import { site } from '@/lib/site';
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [reply, setReply] = useState('');
  const [msg, setMsg] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(`Website inquiry from ${name || 'Customer'}`);
    const body = encodeURIComponent(`Name: ${name}\nReply to: ${reply}\n\n${msg}`);

    // ✅ Only primary email, no cc
    window.location.href = `mailto:${site.emailPrimary}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="container py-16">
      <h1 className="text-2xl font-semibold">Contact Trucast</h1>
      <p className="text-zinc-600 mt-2">We’d love to hear from you.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-xl">
        <input
          className="input"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          placeholder="Your email or phone"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <textarea
          className="textarea"
          rows={6}
          placeholder="Message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="btn" type="submit">Send</button>
      </form>
    </div>
  );
}
