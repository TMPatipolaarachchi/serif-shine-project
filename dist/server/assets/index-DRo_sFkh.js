import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { L as Layout, l as logo } from "./Layout-BsTsz0UT.js";
import { Sparkles, ArrowRight, Code2, Brain, Cloud, Layers, CheckCircle2, Rocket, ShieldCheck, Zap, Users, Globe, Smartphone, GraduationCap, Database, Palette, Plug, ShoppingBag, Wrench, Lock, Star, MessageSquare, Github } from "lucide-react";
import { useState, useRef, useEffect } from "react";
const services = [{
  icon: Code2,
  title: "Custom Software",
  desc: "Bespoke platforms engineered to fit your business model."
}, {
  icon: Globe,
  title: "Web Development",
  desc: "Lightning-fast, accessible, beautifully designed web apps."
}, {
  icon: Smartphone,
  title: "Mobile Apps",
  desc: "Native-feeling iOS & Android products users love."
}, {
  icon: Brain,
  title: "AI Solutions",
  desc: "LLMs, RAG pipelines, copilots, and intelligent automation."
}, {
  icon: Cloud,
  title: "Cloud Solutions",
  desc: "Scalable infrastructure on AWS, GCP, and Azure."
}, {
  icon: GraduationCap,
  title: "LMS Development",
  desc: "Modern learning platforms with assessments & analytics."
}, {
  icon: Database,
  title: "ERP Systems",
  desc: "Unified operations, finance, HR & supply-chain systems."
}, {
  icon: Palette,
  title: "UI/UX Design",
  desc: "Research-led design that turns users into fans."
}, {
  icon: Plug,
  title: "API Integrations",
  desc: "Connect anything to anything with reliable contracts."
}, {
  icon: ShoppingBag,
  title: "E-commerce",
  desc: "High-converting storefronts, headless or full-stack."
}, {
  icon: Wrench,
  title: "Maintenance & Support",
  desc: "24/7 monitoring, SLAs, and continuous improvement."
}, {
  icon: Lock,
  title: "Cybersecurity",
  desc: "Audits, hardening, and zero-trust architectures."
}];
const stack = ["React", "Next.js", "TypeScript", "Node.js", "Python", "Go", "Rust", "PostgreSQL", "MongoDB", "Redis", "AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform", "OpenAI", "LangChain", "TensorFlow", "Figma"];
const why = [{
  icon: Rocket,
  title: "Ship in weeks, not quarters",
  desc: "Tight, senior squads using modern tooling."
}, {
  icon: ShieldCheck,
  title: "Enterprise standards",
  desc: "SOC-2 mindset, security & accessibility by default."
}, {
  icon: Zap,
  title: "Performance obsessed",
  desc: "Real-user metrics, edge delivery, sub-second loads."
}, {
  icon: Users,
  title: "True partnership",
  desc: "Transparent process, async-first, deeply embedded."
}];
const process = [{
  n: "01",
  t: "Discover",
  d: "Workshops, audits, and crisp goals."
}, {
  n: "02",
  t: "Design",
  d: "Prototypes that feel real on day one."
}, {
  n: "03",
  t: "Build",
  d: "Two-week sprints with live demos."
}, {
  n: "04",
  t: "Launch",
  d: "Performance, security & SEO baked in."
}, {
  n: "05",
  t: "Evolve",
  d: "Continuous iteration with data."
}];
const testimonials = [{
  name: "Aisha N.",
  role: "CTO, Fintech",
  quote: "Serendib rebuilt our core platform in 12 weeks. The polish is unreal."
}, {
  name: "Marcus L.",
  role: "Founder, SaaS",
  quote: "Senior team, sharp design, and they actually ship. Rare combo."
}, {
  name: "Priya R.",
  role: "Head of Product",
  quote: "Best engineering partner we've worked with — period."
}];
const faqs = [{
  q: "How quickly can we start?",
  a: "Most engagements kick off within 1–2 weeks of signing."
}, {
  q: "Do you work with startups?",
  a: "Yes — from pre-seed MVPs to Series C scaling."
}, {
  q: "What's your pricing model?",
  a: "Fixed-scope, time & materials, or dedicated squads."
}, {
  q: "Do you sign NDAs?",
  a: "Always. Your IP and data stay yours."
}, {
  q: "Where are you based?",
  a: "HQ in Colombo with a distributed global team."
}];
function Counter({
  to,
  suffix = ""
}) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1600, start = performance.now();
        const tick = (t) => {
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
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
function Home() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-brand opacity-25 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-7xl px-4 pt-12 pb-28", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 animate-fade-up", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-accent" }),
            /* @__PURE__ */ jsx("span", { className: "uppercase tracking-[0.2em] text-muted-foreground", children: "Premium software studio" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight", children: [
            "Software that feels ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "inevitable." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed", children: "Serendib Software Solutions partners with ambitious teams to design, build, and scale digital products — beautifully engineered, end to end." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.03] transition-transform", children: [
              "Start a project ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/portfolio", className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition", children: "See our work" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-3 gap-6 max-w-md", children: [{
            v: 120,
            s: "+",
            l: "Projects shipped"
          }, {
            v: 48,
            s: "",
            l: "Specialists"
          }, {
            v: 14,
            s: "+",
            l: "Countries served"
          }].map((s) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-display font-semibold text-gradient", children: /* @__PURE__ */ jsx(Counter, { to: s.v, suffix: s.s }) }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.l })
          ] }, s.l)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 relative", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-square max-w-md mx-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-[2rem] bg-gradient-brand opacity-40 blur-3xl animate-glow" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 rounded-[2rem] glass p-8 flex items-center justify-center overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-20" }),
            /* @__PURE__ */ jsx("div", { className: "absolute h-72 w-72 rounded-full border border-white/10 animate-orbit" }),
            /* @__PURE__ */ jsx("div", { className: "absolute h-96 w-96 rounded-full border border-white/5 animate-orbit", style: {
              animationDuration: "40s",
              animationDirection: "reverse"
            } }),
            /* @__PURE__ */ jsx("img", { src: logo, alt: "Serendib logo", className: "relative h-56 w-56 rounded-3xl animate-float shadow-2xl" })
          ] }),
          [{
            Icon: Code2,
            pos: "top-4 -left-4"
          }, {
            Icon: Brain,
            pos: "top-1/3 -right-6"
          }, {
            Icon: Cloud,
            pos: "bottom-8 -left-6"
          }, {
            Icon: Layers,
            pos: "-bottom-4 right-10"
          }].map(({
            Icon,
            pos
          }, i) => /* @__PURE__ */ jsx("div", { className: `absolute ${pos} h-12 w-12 grid place-items-center rounded-2xl glass animate-float`, style: {
            animationDelay: `${i * 0.6}s`
          }, children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-accent" }) }, i))
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-10 border-y border-border/60 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex gap-12 animate-marquee whitespace-nowrap text-sm uppercase tracking-[0.3em] text-muted-foreground", children: [...stack, ...stack].map((t, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gradient-brand" }),
      t
    ] }, i)) }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4 py-28", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-4", children: "Who we are" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-semibold leading-tight", children: "A studio of senior engineers, designers & product thinkers." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "We exist to make software feel inevitable — clear, fast, and human. From early-stage MVPs to enterprise modernization, our small, senior squads embed with your team and ship product that moves the needle." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 grid sm:grid-cols-2 gap-3", children: ["No juniors, no hand-offs", "Design + engineering as one", "Async-first communication", "Outcomes over output"].map((t) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-accent flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: t })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: why.map((w, i) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 hover:bg-white/10 transition", style: {
        marginTop: i % 2 ? "2rem" : "0"
      }, children: [
        /* @__PURE__ */ jsx(w.icon, { className: "h-7 w-7 text-accent mb-4" }),
        /* @__PURE__ */ jsx("div", { className: "font-medium", children: w.title }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1.5", children: w.desc })
      ] }, w.title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-4", children: "What we do" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-semibold", children: "Services that scale with you" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: services.map((s) => /* @__PURE__ */ jsxs("div", { className: "group relative glass rounded-2xl p-6 hover:bg-white/10 transition overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-px rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-20 transition pointer-events-none" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center mb-5", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsx("div", { className: "font-medium text-lg", children: s.title }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-2 leading-relaxed", children: s.desc })
        ] })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4 py-20", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-12 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-brand opacity-10" }),
      /* @__PURE__ */ jsx("div", { className: "relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [{
        v: 120,
        s: "+",
        l: "Projects delivered"
      }, {
        v: 98,
        s: "%",
        l: "Client retention"
      }, {
        v: 48,
        s: "",
        l: "Engineers"
      }, {
        v: 14,
        s: "+",
        l: "Countries"
      }].map((s) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl font-display font-semibold text-gradient", children: /* @__PURE__ */ jsx(Counter, { to: s.v, suffix: s.s }) }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-2", children: s.l })
      ] }, s.l)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-4", children: "How we work" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-semibold", children: "A process that respects momentum" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-5 gap-4", children: process.map((p) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 hover:bg-white/10 transition", children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-display text-gradient mb-3", children: p.n }),
        /* @__PURE__ */ jsx("div", { className: "font-medium", children: p.t }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-2", children: p.d })
      ] }, p.n)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-4", children: "Selected work" }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-semibold", children: "Crafted with care" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/portfolio", className: "hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
          "All projects ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: [{
        t: "Nimbus AI",
        c: "AI Platform",
        grad: "from-blue-500 to-teal-400"
      }, {
        t: "Atlas Bank",
        c: "Fintech",
        grad: "from-teal-400 to-green-400"
      }, {
        t: "Lumen LMS",
        c: "EdTech",
        grad: "from-indigo-500 to-blue-400"
      }, {
        t: "Mercato",
        c: "E-commerce",
        grad: "from-green-400 to-emerald-500"
      }, {
        t: "Pulse Health",
        c: "Healthcare",
        grad: "from-cyan-400 to-blue-500"
      }, {
        t: "Orbital ERP",
        c: "Enterprise",
        grad: "from-blue-600 to-teal-500"
      }].map((p) => /* @__PURE__ */ jsxs("div", { className: "group relative aspect-[4/5] rounded-3xl overflow-hidden glass cursor-pointer", children: [
        /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${p.grad} opacity-60 group-hover:opacity-90 transition duration-500` }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30 mix-blend-overlay" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-6 z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-white/80", children: p.c }),
          /* @__PURE__ */ jsx("div", { className: "font-display text-2xl text-white mt-1", children: p.t }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-2 text-sm text-white/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500", children: [
            "View case study ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }, p.t)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-4", children: "Kind words" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-semibold", children: "Trusted by builders worldwide" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5", children: testimonials.map((t) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-7", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 text-accent", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 leading-relaxed", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 pt-5 border-t border-border/60", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: t.name }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] }, t.name)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-4xl px-4 py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-4", children: "FAQ" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-semibold", children: "Questions, answered" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(open === i ? null : i), className: "w-full text-left glass rounded-2xl p-6 hover:bg-white/10 transition", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: f.q }),
          /* @__PURE__ */ jsx("span", { className: `text-accent transition-transform ${open === i ? "rotate-45" : ""}`, children: "＋" })
        ] }),
        open === i && /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed animate-fade-up", children: f.a })
      ] }, f.q)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4 py-20", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-10 md:p-14 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-gradient-brand opacity-30 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs", children: [
            /* @__PURE__ */ jsx(MessageSquare, { className: "h-3.5 w-3.5 text-accent" }),
            " AI Concierge"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "mt-5 text-3xl md:text-4xl font-semibold", children: "Talk to our AI in seconds." }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Ask about pricing, timelines, or a tech stack — get an instant answer, anytime." }),
          /* @__PURE__ */ jsx("button", { className: "mt-6 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.03] transition", children: "Launch chat" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-5 space-y-3 font-mono text-xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent", children: "▸" }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "How long to build an MVP?" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-white/5 p-3", children: "Typically 6–10 weeks for a polished MVP. Want a tailored estimate?" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent", children: "▸" }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Do you do AI integrations?" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-white/5 p-3", children: "Yes — RAG, agents, fine-tuning, and on-prem deployments." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4 py-20", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden p-12 md:p-16 text-center glass", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-brand opacity-20" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-20" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-semibold leading-tight", children: [
          "Let's build something ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "remarkable." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground max-w-xl mx-auto", children: "Join 2,000+ founders & operators getting our monthly notes on shipping great software." }),
        /* @__PURE__ */ jsxs("form", { className: "mt-8 max-w-md mx-auto flex gap-2", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsx("input", { type: "email", placeholder: "you@company.com", className: "flex-1 rounded-full bg-white/5 border border-border px-5 py-3 text-sm outline-none focus:border-accent" }),
          /* @__PURE__ */ jsx("button", { className: "rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground glow-ring", children: "Subscribe" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.03] transition", children: [
            "Start a project ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "#", className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition", children: [
            /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }),
            " Open source"
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
