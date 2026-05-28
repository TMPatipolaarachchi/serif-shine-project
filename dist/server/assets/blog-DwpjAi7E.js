import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout, P as PageHeader } from "./Layout-BsTsz0UT.js";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import "@tanstack/react-router";
const posts = [{
  t: "Designing for trust in financial apps",
  c: "Design",
  d: "May 12, 2026",
  e: "How visual hierarchy, motion, and copy shape user confidence."
}, {
  t: "RAG isn't dead — you're just doing it wrong",
  c: "AI",
  d: "Apr 28, 2026",
  e: "Five patterns that make retrieval-augmented apps actually work."
}, {
  t: "From idea to MVP in 8 weeks",
  c: "Process",
  d: "Apr 14, 2026",
  e: "Our exact playbook for shipping polished MVPs fast."
}, {
  t: "Edge-first architecture in 2026",
  c: "Engineering",
  d: "Mar 30, 2026",
  e: "Why the edge changes how we think about state."
}, {
  t: "Hiring senior engineers without burning out",
  c: "Team",
  d: "Mar 18, 2026",
  e: "A pragmatic process that respects everyone's time."
}, {
  t: "The minimal viable design system",
  c: "Design",
  d: "Mar 02, 2026",
  e: "Start small. Ship. Iterate. A practical guide."
}];
const cats = ["All", "Design", "AI", "Engineering", "Process", "Team"];
function Blog() {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");
  const list = posts.filter((p) => (filter === "All" || p.c === filter) && p.t.toLowerCase().includes(q.toLowerCase()));
  const [featured, ...rest] = list.length ? list : posts;
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Blog", title: "Notes from the studio.", subtitle: "Engineering, design, AI, and the craft of shipping software." }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center justify-between mb-10", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: cats.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setFilter(c), className: `rounded-full px-4 py-2 text-sm transition ${filter === c ? "bg-gradient-brand text-primary-foreground" : "glass hover:bg-white/10"}`, children: c }, c)) }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full md:w-72", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search articles…", className: "w-full rounded-full bg-white/5 border border-border pl-11 pr-4 py-2.5 text-sm outline-none focus:border-accent" })
        ] })
      ] }),
      featured && /* @__PURE__ */ jsxs("article", { className: "group glass rounded-3xl overflow-hidden mb-8 grid md:grid-cols-2 cursor-pointer", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-video md:aspect-auto bg-gradient-to-br from-blue-500 to-teal-400 relative", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30 mix-blend-overlay" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-10 flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-xs uppercase tracking-[0.2em] text-accent", children: [
            featured.c,
            " · Featured"
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl md:text-4xl font-semibold mt-3", children: featured.t }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4 leading-relaxed", children: featured.e }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: featured.d }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 ml-auto text-accent group-hover:translate-x-1 transition" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20", children: rest.map((p) => /* @__PURE__ */ jsxs("article", { className: "group glass rounded-2xl overflow-hidden hover:bg-white/10 transition cursor-pointer", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] bg-gradient-to-br from-teal-400 to-green-400 relative", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30 mix-blend-overlay" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent", children: p.c }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold mt-2", children: p.t }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed", children: p.e }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-4", children: p.d })
        ] })
      ] }, p.t)) })
    ] })
  ] });
}
export {
  Blog as component
};
