import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  ArrowRight, Sparkles, Code2, Smartphone, Cloud, Brain, ShieldCheck,
  GraduationCap, Database, Palette, Plug, ShoppingBag, Wrench, Lock,
  Globe, Rocket, Zap, Layers, Users, CheckCircle2, MessageSquare, Star,
  Github,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Serendib Software Solutions — Premium Software, AI & Cloud" },
      { name: "description", content: "We design and engineer premium software, AI platforms, and cloud systems for ambitious global teams." },
      { property: "og:title", content: "Serendib Software Solutions" },
      { property: "og:description", content: "Premium software engineering for ambitious teams." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Code2, title: "Custom Software", desc: "Bespoke platforms engineered to fit your business model." },
  { icon: Globe, title: "Web Development", desc: "Lightning-fast, accessible, beautifully designed web apps." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native-feeling iOS & Android products users love." },
  { icon: Brain, title: "AI Solutions", desc: "LLMs, RAG pipelines, copilots, and intelligent automation." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable infrastructure on AWS, GCP, and Azure." },
  { icon: GraduationCap, title: "LMS Development", desc: "Modern learning platforms with assessments & analytics." },
  { icon: Database, title: "ERP Systems", desc: "Unified operations, finance, HR & supply-chain systems." },
  { icon: Palette, title: "UI/UX Design", desc: "Research-led design that turns users into fans." },
  { icon: Plug, title: "API Integrations", desc: "Connect anything to anything with reliable contracts." },
  { icon: ShoppingBag, title: "E-commerce", desc: "High-converting storefronts, headless or full-stack." },
  { icon: Wrench, title: "Maintenance & Support", desc: "24/7 monitoring, SLAs, and continuous improvement." },
  { icon: Lock, title: "Cybersecurity", desc: "Audits, hardening, and zero-trust architectures." },
];

const stack = ["React","Next.js","TypeScript","Node.js","Python","Go","Rust","PostgreSQL","MongoDB","Redis","AWS","GCP","Azure","Kubernetes","Docker","Terraform","OpenAI","LangChain","TensorFlow","Figma"];

const why = [
  { icon: Rocket, title: "Ship in weeks, not quarters", desc: "Tight, senior squads using modern tooling." },
  { icon: ShieldCheck, title: "Enterprise standards", desc: "SOC-2 mindset, security & accessibility by default." },
  { icon: Zap, title: "Performance obsessed", desc: "Real-user metrics, edge delivery, sub-second loads." },
  { icon: Users, title: "True partnership", desc: "Transparent process, async-first, deeply embedded." },
];

const process = [
  { n: "01", t: "Discover", d: "Workshops, audits, and crisp goals." },
  { n: "02", t: "Design", d: "Prototypes that feel real on day one." },
  { n: "03", t: "Build", d: "Two-week sprints with live demos." },
  { n: "04", t: "Launch", d: "Performance, security & SEO baked in." },
  { n: "05", t: "Evolve", d: "Continuous iteration with data." },
];

const testimonials = [
  { name: "Aisha N.", role: "CTO, Fintech", quote: "Serendib rebuilt our core platform in 12 weeks. The polish is unreal." },
  { name: "Marcus L.", role: "Founder, SaaS", quote: "Senior team, sharp design, and they actually ship. Rare combo." },
  { name: "Priya R.", role: "Head of Product", quote: "Best engineering partner we've worked with — period." },
];

const faqs = [
  { q: "How quickly can we start?", a: "Most engagements kick off within 1–2 weeks of signing." },
  { q: "Do you work with startups?", a: "Yes — from pre-seed MVPs to Series C scaling." },
  { q: "What's your pricing model?", a: "Fixed-scope, time & materials, or dedicated squads." },
  { q: "Do you sign NDAs?", a: "Always. Your IP and data stay yours." },
  { q: "Where are you based?", a: "HQ in Colombo with a distributed global team." },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1600, start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Home() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-brand opacity-25 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span className="uppercase tracking-[0.2em] text-muted-foreground">Premium software studio</span>
              </div>
              <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight">
                Software that feels <span className="text-gradient">inevitable.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Serendib Software Solutions partners with ambitious teams to design,
                build, and scale digital products — beautifully engineered, end to end.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.03] transition-transform">
                  Start a project <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition">
                  See our work
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {[{v:120,s:"+",l:"Projects shipped"},{v:48,s:"",l:"Specialists"},{v:14,s:"+",l:"Countries served"}].map(s => (
                  <div key={s.l}>
                    <div className="text-3xl font-display font-semibold text-gradient"><Counter to={s.v} suffix={s.s} /></div>
                    <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-brand opacity-40 blur-3xl animate-glow" />
                <div className="absolute inset-0 rounded-[2rem] glass p-8 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="absolute h-72 w-72 rounded-full border border-white/10 animate-orbit" />
                  <div className="absolute h-96 w-96 rounded-full border border-white/5 animate-orbit" style={{ animationDuration: "40s", animationDirection: "reverse" }} />
                  <img src={logo} alt="Serendib logo" className="relative h-56 w-56 rounded-3xl animate-float shadow-2xl" />
                </div>
                {[{Icon:Code2,pos:"top-4 -left-4"},{Icon:Brain,pos:"top-1/3 -right-6"},{Icon:Cloud,pos:"bottom-8 -left-6"},{Icon:Layers,pos:"-bottom-4 right-10"}].map(({Icon,pos},i)=>(
                  <div key={i} className={`absolute ${pos} h-12 w-12 grid place-items-center rounded-2xl glass animate-float`} style={{ animationDelay: `${i*0.6}s` }}>
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-10 border-y border-border/60 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {[...stack, ...stack].map((t,i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />{t}
            </span>
          ))}
        </div>
      </section>

      {/* INTRO + WHY */}
      <section className="mx-auto max-w-7xl px-4 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Who we are</div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">A studio of senior engineers, designers & product thinkers.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We exist to make software feel inevitable — clear, fast, and human. From
              early-stage MVPs to enterprise modernization, our small, senior squads embed
              with your team and ship product that moves the needle.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {["No juniors, no hand-offs","Design + engineering as one","Async-first communication","Outcomes over output"].map((t) => (
                <div key={t} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {why.map((w,i) => (
              <div key={w.title} className="glass rounded-2xl p-6 hover:bg-white/10 transition" style={{ marginTop: i%2 ? "2rem" : "0" }}>
                <w.icon className="h-7 w-7 text-accent mb-4" />
                <div className="font-medium">{w.title}</div>
                <div className="text-sm text-muted-foreground mt-1.5">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">What we do</div>
          <h2 className="text-4xl md:text-5xl font-semibold">Services that scale with you</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="group relative glass rounded-2xl p-6 hover:bg-white/10 transition overflow-hidden">
              <div className="absolute -inset-px rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-20 transition pointer-events-none" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center mb-5">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-medium text-lg">{s.title}</div>
                <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="glass rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-10" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{v:120,s:"+",l:"Projects delivered"},{v:98,s:"%",l:"Client retention"},{v:48,s:"",l:"Engineers"},{v:14,s:"+",l:"Countries"}].map((s) => (
              <div key={s.l}>
                <div className="text-5xl font-display font-semibold text-gradient"><Counter to={s.v} suffix={s.s} /></div>
                <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">How we work</div>
          <h2 className="text-4xl md:text-5xl font-semibold">A process that respects momentum</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {process.map((p) => (
            <div key={p.n} className="glass rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="text-3xl font-display text-gradient mb-3">{p.n}</div>
              <div className="font-medium">{p.t}</div>
              <div className="text-sm text-muted-foreground mt-2">{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Selected work</div>
            <h2 className="text-4xl md:text-5xl font-semibold">Crafted with care</h2>
          </div>
          <Link to="/portfolio" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { t:"Nimbus AI", c:"AI Platform", grad:"from-blue-500 to-teal-400" },
            { t:"Atlas Bank", c:"Fintech", grad:"from-teal-400 to-green-400" },
            { t:"Lumen LMS", c:"EdTech", grad:"from-indigo-500 to-blue-400" },
            { t:"Mercato", c:"E-commerce", grad:"from-green-400 to-emerald-500" },
            { t:"Pulse Health", c:"Healthcare", grad:"from-cyan-400 to-blue-500" },
            { t:"Orbital ERP", c:"Enterprise", grad:"from-blue-600 to-teal-500" },
          ].map((p) => (
            <div key={p.t} className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.grad} opacity-60 group-hover:opacity-90 transition duration-500`} />
              <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <div className="text-xs uppercase tracking-[0.2em] text-white/80">{p.c}</div>
                <div className="font-display text-2xl text-white mt-1">{p.t}</div>
                <div className="mt-3 flex items-center gap-2 text-sm text-white/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  View case study <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Kind words</div>
          <h2 className="text-4xl md:text-5xl font-semibold">Trusted by builders worldwide</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-7">
              <div className="flex gap-0.5 text-accent">
                {Array.from({length:5}).map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 pt-5 border-t border-border/60">
                <div className="font-medium text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-semibold">Questions, answered</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f,i) => (
            <button key={f.q} onClick={() => setOpen(open===i?null:i)} className="w-full text-left glass rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                <span className={`text-accent transition-transform ${open===i?"rotate-45":""}`}>＋</span>
              </div>
              {open===i && <p className="mt-3 text-sm text-muted-foreground leading-relaxed animate-fade-up">{f.a}</p>}
            </button>
          ))}
        </div>
      </section>

      {/* AI CHATBOT */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="glass rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs">
                <MessageSquare className="h-3.5 w-3.5 text-accent" /> AI Concierge
              </div>
              <h2 className="mt-5 text-3xl md:text-4xl font-semibold">Talk to our AI in seconds.</h2>
              <p className="mt-4 text-muted-foreground">Ask about pricing, timelines, or a tech stack — get an instant answer, anytime.</p>
              <button className="mt-6 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.03] transition">Launch chat</button>
            </div>
            <div className="glass rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="flex gap-2"><span className="text-accent">▸</span><span className="text-muted-foreground">How long to build an MVP?</span></div>
              <div className="rounded-xl bg-white/5 p-3">Typically 6–10 weeks for a polished MVP. Want a tailored estimate?</div>
              <div className="flex gap-2"><span className="text-accent">▸</span><span className="text-muted-foreground">Do you do AI integrations?</span></div>
              <div className="rounded-xl bg-white/5 p-3">Yes — RAG, agents, fine-tuning, and on-prem deployments.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + NEWSLETTER */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center glass">
          <div className="absolute inset-0 bg-gradient-brand opacity-20" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">Let's build something <span className="text-gradient">remarkable.</span></h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">Join 2,000+ founders & operators getting our monthly notes on shipping great software.</p>
            <form className="mt-8 max-w-md mx-auto flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@company.com" className="flex-1 rounded-full bg-white/5 border border-border px-5 py-3 text-sm outline-none focus:border-accent" />
              <button className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground glow-ring">Subscribe</button>
            </form>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.03] transition">
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
                <Github className="h-4 w-4" /> Open source
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
