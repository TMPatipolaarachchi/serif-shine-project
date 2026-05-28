import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout, P as PageHeader } from "./Layout-BsTsz0UT.js";
import { MapPin, Plane, Heart, GraduationCap, Coffee, Sparkles, Briefcase } from "lucide-react";
import "@tanstack/react-router";
import "react";
const jobs = [{
  t: "Senior Full-Stack Engineer",
  l: "Remote · Global",
  d: "TypeScript, React, Node, Postgres"
}, {
  t: "Staff AI Engineer",
  l: "Remote · Global",
  d: "LLMs, RAG, agentic systems"
}, {
  t: "Senior Product Designer",
  l: "Colombo / Remote",
  d: "Figma, motion, design systems"
}, {
  t: "DevOps / Platform Engineer",
  l: "Remote · Global",
  d: "Kubernetes, Terraform, observability"
}, {
  t: "Mobile Engineer (iOS/Android)",
  l: "Remote · Global",
  d: "Swift, Kotlin, React Native"
}];
const perks = [{
  i: Plane,
  t: "Remote-first",
  d: "Work from anywhere with quarterly meetups."
}, {
  i: Heart,
  t: "Health & wellness",
  d: "Premium insurance and a yearly wellness stipend."
}, {
  i: GraduationCap,
  t: "Learning budget",
  d: "$1,500/year on courses, conferences, and books."
}, {
  i: Coffee,
  t: "Async-first",
  d: "Deep work over status meetings."
}, {
  i: Sparkles,
  t: "Equity for all",
  d: "Every full-time employee shares the upside."
}, {
  i: Briefcase,
  t: "Generous PTO",
  d: "30 days off + local holidays."
}];
function Careers() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Careers", title: "Do the best work of your life.", subtitle: "Senior team. Real ownership. Beautifully crafted projects with real impact." }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold mb-8", children: "Open roles" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: jobs.map((j) => /* @__PURE__ */ jsxs("div", { className: "group glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/10 transition", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-xl font-semibold", children: j.t }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children: j.d })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
            " ",
            j.l
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#apply", className: "rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground", children: "Apply" })
        ] })
      ] }, j.t)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-3", children: "Benefits" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-semibold", children: "Built for great work" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: perks.map((p) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 hover:bg-white/10 transition", children: [
        /* @__PURE__ */ jsx(p.i, { className: "h-7 w-7 text-accent mb-4" }),
        /* @__PURE__ */ jsx("div", { className: "font-medium", children: p.t }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-2", children: p.d })
      ] }, p.t)) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "apply", className: "mx-auto max-w-2xl px-4 py-16", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-8 md:p-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold", children: "Apply now" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2", children: "Tell us about you — we read every application." }),
      /* @__PURE__ */ jsxs("form", { className: "mt-6 space-y-4", onSubmit: (e) => e.preventDefault(), children: [
        ["Full name", "Email", "Role you're applying for", "Portfolio / GitHub URL"].map((p) => /* @__PURE__ */ jsx("input", { placeholder: p, className: "w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" }, p)),
        /* @__PURE__ */ jsx("textarea", { placeholder: "Tell us about yourself", rows: 5, className: "w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" }),
        /* @__PURE__ */ jsx("button", { className: "w-full rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground glow-ring", children: "Submit application" })
      ] })
    ] }) })
  ] });
}
export {
  Careers as component
};
