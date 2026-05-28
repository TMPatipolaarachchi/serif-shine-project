import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Target, Eye, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Serendib Software Solutions" },
      { name: "description", content: "Our story, mission, and the people building Serendib Software Solutions." },
      { property: "og:title", content: "About Serendib" },
      { property: "og:description", content: "Senior engineers, designers and product thinkers." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Target, t: "Clarity", d: "Crisp thinking, simple solutions, no jargon." },
  { icon: Eye, t: "Craft", d: "Pixel-perfect design backed by rigorous engineering." },
  { icon: Heart, t: "Care", d: "We treat your product like our own." },
  { icon: Award, t: "Candor", d: "Honest opinions, even when they're uncomfortable." },
];

const team = [
  { n: "Ravindu Perera", r: "Founder & CEO" },
  { n: "Anika Silva", r: "Head of Design" },
  { n: "Kasun Jayawardena", r: "Engineering Lead" },
  { n: "Dilani Fernando", r: "Product Director" },
  { n: "Sahan Kumara", r: "AI Practice Lead" },
  { n: "Nuwan Bandara", r: "Cloud Architect" },
];

const timeline = [
  { y: "2018", t: "Founded in Colombo with a 4-person team." },
  { y: "2020", t: "Crossed 25 ship-it projects and our first global client." },
  { y: "2022", t: "Opened AI & cloud practices. Team grew to 30." },
  { y: "2024", t: "100+ projects, partners in 14 countries." },
  { y: "2026", t: "Launched Serendib Labs — open-source tooling." },
];

function About() {
  return (
    <Layout>
      <PageHeader eyebrow="About us" title="Building the future, one product at a time." subtitle="We're a senior software studio with a bias for craft, clarity, and shipping." />

      <section className="mx-auto max-w-5xl px-4 py-16 grid md:grid-cols-2 gap-8">
        <div className="glass rounded-3xl p-8">
          <Target className="h-7 w-7 text-accent mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">To make world-class software accessible to ambitious teams everywhere — fast, beautiful, and built to last.</p>
        </div>
        <div className="glass rounded-3xl p-8">
          <Eye className="h-7 w-7 text-accent mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">A world where every team can ship software that feels inevitable — clear, fast, and human.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Our values</div>
          <h2 className="text-4xl font-semibold">What we believe</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <div key={v.t} className="glass rounded-2xl p-6 hover:bg-white/10 transition">
              <v.icon className="h-7 w-7 text-accent mb-4" />
              <div className="font-medium text-lg">{v.t}</div>
              <div className="text-sm text-muted-foreground mt-2">{v.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">The team</div>
          <h2 className="text-4xl font-semibold">People you'll meet</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((m) => (
            <div key={m.n} className="glass rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition">
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand grid place-items-center font-display text-xl text-primary-foreground">
                {m.n.split(" ").map(p=>p[0]).join("")}
              </div>
              <div>
                <div className="font-medium">{m.n}</div>
                <div className="text-sm text-muted-foreground">{m.r}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Milestones</div>
          <h2 className="text-4xl font-semibold">Our journey</h2>
        </div>
        <div className="relative pl-8 border-l border-border/60 space-y-8">
          {timeline.map((s) => (
            <div key={s.y} className="relative">
              <div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-gradient-brand glow-ring" />
              <div className="text-2xl font-display text-gradient">{s.y}</div>
              <div className="text-muted-foreground mt-1">{s.t}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
