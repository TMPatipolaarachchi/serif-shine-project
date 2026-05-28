import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Serendib Software Solutions" },
      { name: "description", content: "A selection of recent projects across AI, fintech, healthcare, and more." },
      { property: "og:title", content: "Portfolio — Serendib" },
      { property: "og:description", content: "Selected work from the Serendib studio." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { t: "Nimbus AI", c: "AI", grad: "from-blue-500 to-teal-400", d: "An LLM-powered analytics platform handling 12M queries/mo with sub-200ms latency." },
  { t: "Atlas Bank", c: "Fintech", grad: "from-teal-400 to-green-400", d: "Modern core banking experience with biometric auth and instant transfers." },
  { t: "Lumen LMS", c: "EdTech", grad: "from-indigo-500 to-blue-400", d: "A learning platform used by 40+ universities with assessments and analytics." },
  { t: "Mercato", c: "E-commerce", grad: "from-green-400 to-emerald-500", d: "Headless commerce stack converting at 5.2% with personalized recommendations." },
  { t: "Pulse Health", c: "Healthcare", grad: "from-cyan-400 to-blue-500", d: "HIPAA-compliant patient portal with telehealth and AI triage." },
  { t: "Orbital ERP", c: "Enterprise", grad: "from-blue-600 to-teal-500", d: "End-to-end ERP for a logistics company managing 8K shipments/day." },
  { t: "Beacon", c: "AI", grad: "from-purple-500 to-blue-500", d: "Internal AI knowledge agent for a 4,000-person engineering org." },
  { t: "Verdant", c: "E-commerce", grad: "from-emerald-400 to-teal-500", d: "Sustainable D2C brand storefront with subscriptions and loyalty." },
];

const cats = ["All", "AI", "Fintech", "EdTech", "E-commerce", "Healthcare", "Enterprise"];

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<typeof projects[0] | null>(null);
  const list = filter === "All" ? projects : projects.filter((p) => p.c === filter);

  return (
    <Layout>
      <PageHeader eyebrow="Portfolio" title="Work we're proud of." subtitle="A small slice of recent projects across industries and continents." />

      <section className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                filter === c ? "bg-gradient-brand text-primary-foreground" : "glass hover:bg-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20">
          {list.map((p) => (
            <button
              key={p.t}
              onClick={() => setActive(p)}
              className="group text-left relative aspect-[4/5] rounded-3xl overflow-hidden glass"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.grad} opacity-60 group-hover:opacity-90 transition duration-500`} />
              <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay" />
              <div className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full glass opacity-0 group-hover:opacity-100 transition">
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-white/80">{p.c}</div>
                <div className="font-display text-2xl text-white mt-1">{p.t}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-background/80 backdrop-blur-md p-4 animate-fade-up" onClick={() => setActive(null)}>
          <div className="max-w-2xl w-full glass rounded-3xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className={`aspect-[16/9] bg-gradient-to-br ${active.grad} relative`}>
              <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay" />
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full glass">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-accent">{active.c}</div>
              <h3 className="font-display text-3xl mt-2">{active.t}</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">{active.d}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
