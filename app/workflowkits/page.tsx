import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Process Simplification — WorkflowKits Digital Technology',
  description: 'Explore WorkflowKits Digital Technology business process simplification services: clearer workflows, fewer repetitive tasks and easier handovers.',
  alternates: { canonical: 'https://www.trucast-ng.com/workflowkits' },
};

export default function WorkflowKitsPage() {
  return <>
    <section className="bg-[#183e40] text-white">
      <div className="container py-16 sm:py-20">
        <p className="text-xs uppercase tracking-widest text-green-200">WorkflowKits Digital Technology</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-6xl leading-tight font-semibold tracking-tight">Make everyday work flow more easily.</h1>
        <p className="mt-6 max-w-2xl text-lg text-green-50">Business process simplification for clearer workflows, less repetitive work and easier handovers. Start with the process, then discuss the right digital support.</p>
        <div className="mt-7 flex flex-wrap gap-4"><a href="https://workflowkits.com" className="rounded-xl bg-white text-[#183e40] px-5 py-3 font-semibold">Visit WorkflowKits ↗</a><Link href="/categories" className="rounded-xl border border-white px-5 py-3">Browse Trucast products</Link></div>
      </div>
    </section>
    <section className="container py-14">
      <h2 className="text-3xl font-semibold">A practical starting point</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        {[
          ['01 / Understand', 'Map the work', 'Discuss the task, the people involved and the steps from request to completion.'],
          ['02 / Simplify', 'Find the friction', 'Identify repeated entry, missing information, unnecessary steps and difficult handovers.'],
          ['03 / Plan', 'Agree the next steps', 'Discuss a simpler workflow and suitable digital support, with scope and delivery agreed around your needs.'],
        ].map(([number, title, text]) => <article key={number} className="border-t-2 border-brand pt-5"><p className="text-xs text-brand font-semibold uppercase tracking-wider">{number}</p><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-3 text-zinc-600">{text}</p></article>)}
    </div></section>
    <section className="bg-zinc-50 border-y"><div className="container py-12 grid md:grid-cols-2 gap-8"><div><h2 className="text-3xl font-semibold">Which process slows your business down?</h2><p className="mt-4 text-zinc-600">Prepare a short brief: what needs to get done, who is involved, where work gets delayed or repeated, and what a better result would look like.</p></div><div><h3 className="text-xl font-semibold">A separate service conversation</h3><p className="mt-3 text-zinc-600">Digital service enquiries are handled separately from Trucast product orders. Visit WorkflowKits to explore its services and contact options.</p><a className="btn-primary mt-5" href="https://workflowkits.com">Continue to WorkflowKits ↗</a></div></div></section>
  </>;
}
