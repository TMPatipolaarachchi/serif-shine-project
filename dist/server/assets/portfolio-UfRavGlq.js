import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout, P as PageHeader } from "./Layout-BsTsz0UT.js";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import "@tanstack/react-router";
const projects = [{
  t: "Nimbus AI",
  c: "AI",
  grad: "from-blue-500 to-teal-400",
  d: "An LLM-powered analytics platform handling 12M queries/mo with sub-200ms latency."
}, {
  t: "Atlas Bank",
  c: "Fintech",
  grad: "from-teal-400 to-green-400",
  d: "Modern core banking experience with biometric auth and instant transfers."
}, {
  t: "Lumen LMS",
  c: "EdTech",
  grad: "from-indigo-500 to-blue-400",
  d: "A learning platform used by 40+ universities with assessments and analytics."
}, {
  t: "Mercato",
  c: "E-commerce",
  grad: "from-green-400 to-emerald-500",
  d: "Headless commerce stack converting at 5.2% with personalized recommendations."
}, {
  t: "Pulse Health",
  c: "Healthcare",
  grad: "from-cyan-400 to-blue-500",
  d: "HIPAA-compliant patient portal with telehealth and AI triage."
}, {
  t: "Orbital ERP",
  c: "Enterprise",
  grad: "from-blue-600 to-teal-500",
  d: "End-to-end ERP for a logistics company managing 8K shipments/day."
}, {
  t: "Beacon",
  c: "AI",
  grad: "from-purple-500 to-blue-500",
  d: "Internal AI knowledge agent for a 4,000-person engineering org."
}, {
  t: "Verdant",
  c: "E-commerce",
  grad: "from-emerald-400 to-teal-500",
  d: "Sustainable D2C brand storefront with subscriptions and loyalty."
}];
const cats = ["All", "AI", "Fintech", "EdTech", "E-commerce", "Healthcare", "Enterprise"];
function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const list = filter === "All" ? projects : projects.filter((p) => p.c === filter);
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Portfolio", title: "Work we're proud of.", subtitle: "A small slice of recent projects across industries and continents." }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 justify-center mb-10", children: cats.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setFilter(c), className: `rounded-full px-4 py-2 text-sm transition ${filter === c ? "bg-gradient-brand text-primary-foreground" : "glass hover:bg-white/10"}`, children: c }, c)) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20", children: list.map((p) => /* @__PURE__ */ jsxs("button", { onClick: () => setActive(p), className: "group text-left relative aspect-[4/5] rounded-3xl overflow-hidden glass", children: [
        /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${p.grad} opacity-60 group-hover:opacity-90 transition duration-500` }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30 mix-blend-overlay" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full glass opacity-0 group-hover:opacity-100 transition", children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-white/80", children: p.c }),
          /* @__PURE__ */ jsx("div", { className: "font-display text-2xl text-white mt-1", children: p.t })
        ] })
      ] }, p.t)) })
    ] }),
    active && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[100] grid place-items-center bg-background/80 backdrop-blur-md p-4 animate-fade-up", onClick: () => setActive(null), children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl w-full glass rounded-3xl overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxs("div", { className: `aspect-[16/9] bg-gradient-to-br ${active.grad} relative`, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30 mix-blend-overlay" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setActive(null), className: "absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full glass", children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent", children: active.c }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl mt-2", children: active.t }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4 leading-relaxed", children: active.d })
      ] })
    ] }) })
  ] });
}
export {
  Portfolio as component
};
