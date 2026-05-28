import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { MapPin, Briefcase, Coffee, Plane, Heart, GraduationCap, Sparkles } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Serendib Software Solutions" },
      { name: "description", content: "Join a senior team building world-class software. Remote-friendly, async-first." },
      { property: "og:title", content: "Careers at Serendib" },
      { property: "og:description", content: "Senior engineers, designers, and product thinkers wanted." },
    ],
  }),
  component: Careers,
});

const jobs = [
  { t: "Senior Full-Stack Engineer", l: "Remote · Global", d: "TypeScript, React, Node, Postgres" },
  { t: "Staff AI Engineer", l: "Remote · Global", d: "LLMs, RAG, agentic systems" },
  { t: "Senior Product Designer", l: "Colombo / Remote", d: "Figma, motion, design systems" },
  { t: "DevOps / Platform Engineer", l: "Remote · Global", d: "Kubernetes, Terraform, observability" },
  { t: "Mobile Engineer (iOS/Android)", l: "Remote · Global", d: "Swift, Kotlin, React Native" },
];

const perks = [
  { i: Plane, t: "Remote-first", d: "Work from anywhere with quarterly meetups." },
  { i: Heart, t: "Health & wellness", d: "Premium insurance and a yearly wellness stipend." },
  { i: GraduationCap, t: "Learning budget", d: "$1,500/year on courses, conferences, and books." },
  { i: Coffee, t: "Async-first", d: "Deep work over status meetings." },
  { i: Sparkles, t: "Equity for all", d: "Every full-time employee shares the upside." },
  { i: Briefcase, t: "Generous PTO", d: "30 days off + local holidays." },
];

function Careers() {
  return (
    <Layout>
      <PageHeader eyebrow="Careers" title="Do the best work of your life." subtitle="Senior team. Real ownership. Beautifully crafted projects with real impact." />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8">Open roles</h2>
        <div className="space-y-3">
          {jobs.map((j) => (
            <div key={j.t} className="group glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/10 transition">
              <div>
                <div className="font-display text-xl font-semibold">{j.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{j.d}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {j.l}
                </div>
                <a href="#apply" className="rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground">Apply</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Benefits</div>
          <h2 className="text-4xl font-semibold">Built for great work</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {perks.map((p) => (
            <div key={p.t} className="glass rounded-2xl p-6 hover:bg-white/10 transition">
              <p.i className="h-7 w-7 text-accent mb-4" />
              <div className="font-medium">{p.t}</div>
              <div className="text-sm text-muted-foreground mt-2">{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-2xl px-4 py-16">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-semibold">Apply now</h2>
          <p className="text-muted-foreground mt-2">Tell us about you — we read every application.</p>
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            {["Full name", "Email", "Role you're applying for", "Portfolio / GitHub URL"].map((p) => (
              <input key={p} placeholder={p} className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            ))}
            <textarea placeholder="Tell us about yourself" rows={5} className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            <button className="w-full rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground glow-ring">Submit application</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
