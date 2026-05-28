import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout, P as PageHeader } from "./Layout-BsTsz0UT.js";
import { Target, Eye, Heart, Award } from "lucide-react";
import "@tanstack/react-router";
import "react";
const values = [{
  icon: Target,
  t: "Clarity",
  d: "Crisp thinking, simple solutions, no jargon."
}, {
  icon: Eye,
  t: "Craft",
  d: "Pixel-perfect design backed by rigorous engineering."
}, {
  icon: Heart,
  t: "Care",
  d: "We treat your product like our own."
}, {
  icon: Award,
  t: "Candor",
  d: "Honest opinions, even when they're uncomfortable."
}];
const team = [{
  n: "Ravindu Perera",
  r: "Founder & CEO"
}, {
  n: "Anika Silva",
  r: "Head of Design"
}, {
  n: "Kasun Jayawardena",
  r: "Engineering Lead"
}, {
  n: "Dilani Fernando",
  r: "Product Director"
}, {
  n: "Sahan Kumara",
  r: "AI Practice Lead"
}, {
  n: "Nuwan Bandara",
  r: "Cloud Architect"
}];
const timeline = [{
  y: "2018",
  t: "Founded in Colombo with a 4-person team."
}, {
  y: "2020",
  t: "Crossed 25 ship-it projects and our first global client."
}, {
  y: "2022",
  t: "Opened AI & cloud practices. Team grew to 30."
}, {
  y: "2024",
  t: "100+ projects, partners in 14 countries."
}, {
  y: "2026",
  t: "Launched Serendib Labs — open-source tooling."
}];
function About() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "About us", title: "Building the future, one product at a time.", subtitle: "We're a senior software studio with a bias for craft, clarity, and shipping." }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-5xl px-4 py-16 grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-8", children: [
        /* @__PURE__ */ jsx(Target, { className: "h-7 w-7 text-accent mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-3", children: "Our Mission" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "To make world-class software accessible to ambitious teams everywhere — fast, beautiful, and built to last." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-8", children: [
        /* @__PURE__ */ jsx(Eye, { className: "h-7 w-7 text-accent mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-3", children: "Our Vision" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "A world where every team can ship software that feels inevitable — clear, fast, and human." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-3", children: "Our values" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-semibold", children: "What we believe" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: values.map((v) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 hover:bg-white/10 transition", children: [
        /* @__PURE__ */ jsx(v.icon, { className: "h-7 w-7 text-accent mb-4" }),
        /* @__PURE__ */ jsx("div", { className: "font-medium text-lg", children: v.t }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-2", children: v.d })
      ] }, v.t)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-3", children: "The team" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-semibold", children: "People you'll meet" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: team.map((m) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition", children: [
        /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-2xl bg-gradient-brand grid place-items-center font-display text-xl text-primary-foreground", children: m.n.split(" ").map((p) => p[0]).join("") }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium", children: m.n }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: m.r })
        ] })
      ] }, m.n)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-3xl px-4 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-3", children: "Milestones" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-semibold", children: "Our journey" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative pl-8 border-l border-border/60 space-y-8", children: timeline.map((s) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-gradient-brand glow-ring" }),
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-display text-gradient", children: s.y }),
        /* @__PURE__ */ jsx("div", { className: "text-muted-foreground mt-1", children: s.t })
      ] }, s.y)) })
    ] })
  ] });
}
export {
  About as component
};
