import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import {
  Code2, Globe, Smartphone, Brain, Cloud, GraduationCap, Database,
  Palette, Plug, ShoppingBag, Wrench, Lock, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Serendib Software Solutions" },
      { name: "description", content: "Custom software, web, mobile, AI, cloud, ERP, LMS, design, and more." },
      { property: "og:title", content: "Services — Serendib" },
      { property: "og:description", content: "Premium engineering services for ambitious teams." },
    ],
  }),
  component: Services,
});

const items = [
  { icon: Code2, t: "Custom Software Development", d: "Bespoke platforms engineered around your business logic, integrations, and growth path." },
  { icon: Globe, t: "Web Development", d: "Lightning-fast, accessible, beautifully designed websites and web applications." },
  { icon: Smartphone, t: "Mobile App Development", d: "Native-feeling iOS and Android apps with shared codebases where it makes sense." },
  { icon: Brain, t: "AI Solutions", d: "LLM apps, RAG pipelines, agents, copilots, and intelligent automations." },
  { icon: Cloud, t: "Cloud Solutions", d: "Scalable, secure infrastructure on AWS, GCP, and Azure with IaC by default." },
  { icon: GraduationCap, t: "LMS Development", d: "Modern learning platforms with assessments, analytics, and gamification." },
  { icon: Database, t: "ERP Systems", d: "Unified operations, finance, HR, and supply chain — built or extended." },
  { icon: Palette, t: "UI/UX Design", d: "Research-led product design that turns users into advocates." },
  { icon: Plug, t: "API Integrations", d: "Connect anything to anything with reliable contracts and observability." },
  { icon: ShoppingBag, t: "E-commerce Solutions", d: "High-converting storefronts — headless, Shopify, or fully custom." },
  { icon: Wrench, t: "Maintenance & Support", d: "24/7 monitoring, SLAs, and a senior team you can actually reach." },
  { icon: Lock, t: "Cybersecurity Services", d: "Audits, hardening, penetration testing, and zero-trust architectures." },
];

function Services() {
  return (
    <Layout>
      <PageHeader eyebrow="Services" title="Everything you need, under one roof." subtitle="Twelve services. One senior team. End-to-end ownership from idea to scale." />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s) => (
            <div key={s.t} className="group relative glass rounded-3xl p-7 hover:bg-white/10 transition overflow-hidden">
              <div className="absolute -inset-px rounded-3xl bg-gradient-brand opacity-0 group-hover:opacity-20 transition pointer-events-none" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center mb-5">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-display text-xl font-semibold">{s.t}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.d}</p>
                <div className="mt-5 flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-15" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold">Not sure where to start?</h2>
            <p className="mt-3 text-muted-foreground">Tell us about your project. We'll send a tailored proposal in 48 hours.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.03] transition">
              Get a proposal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
