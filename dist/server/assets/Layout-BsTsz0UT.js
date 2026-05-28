import { jsx, jsxs } from "react/jsx-runtime";
import { useRouterState, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { X, Menu, Github, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
const logo = "/assets/logo-DX2Gv_9E.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass shadow-[var(--shadow-card)]" : ""}`,
            children: [
              /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
                /* @__PURE__ */ jsx("img", { src: logo, alt: "Serendib", className: "h-9 w-9 rounded-lg object-cover" }),
                /* @__PURE__ */ jsxs("span", { className: "font-display text-base font-semibold tracking-tight", children: [
                  "Serendib",
                  /* @__PURE__ */ jsx("span", { className: "block text-xs font-normal text-muted-foreground mt-0.5", children: "Software Solutions" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => {
                const active = pathname === l.to;
                return /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: l.to,
                    className: `px-3.5 py-2 rounded-lg text-sm transition-colors ${active ? "text-foreground bg-white/5" : "text-muted-foreground hover:text-foreground"}`,
                    children: l.label
                  },
                  l.to
                );
              }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "hidden md:inline-flex items-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.03] transition-transform",
                    children: "Start a project"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setOpen((v) => !v),
                    className: "lg:hidden p-2 rounded-lg glass",
                    "aria-label": "Toggle menu",
                    children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
                  }
                )
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxs("div", { className: "lg:hidden mt-2 rounded-2xl glass p-3 animate-fade-up", children: [
          links.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "block px-4 py-2.5 rounded-lg text-sm hover:bg-white/5",
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "block mt-2 text-center rounded-lg bg-gradient-brand px-4 py-2.5 text-sm font-medium text-primary-foreground",
              children: "Start a project"
            }
          )
        ] })
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative mt-32 border-t border-border/60", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30 pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("img", { src: logo, alt: "", className: "h-11 w-11 rounded-xl" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-lg font-semibold", children: "Serendib" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Software Solutions" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-sm leading-relaxed", children: "We build premium software for ambitious teams — from custom platforms and mobile apps to AI, cloud, and everything in between." }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("a", { href: "#", className: "h-9 w-9 grid place-items-center rounded-lg glass hover:bg-white/10 transition", children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/profile.php?id=61577909078210", target: "_blank", rel: "noopener noreferrer", className: "h-9 w-9 grid place-items-center rounded-lg glass hover:bg-white/10 transition", children: /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "h-9 w-9 grid place-items-center rounded-lg glass hover:bg-white/10 transition", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium mb-4", children: "Company" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-foreground", children: "About" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/careers", className: "hover:text-foreground", children: "Careers" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-foreground", children: "Blog" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/portfolio", className: "hover:text-foreground", children: "Portfolio" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium mb-4", children: "Services" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "Custom Software" }),
            /* @__PURE__ */ jsx("li", { children: "Web & Mobile" }),
            /* @__PURE__ */ jsx("li", { children: "AI & Cloud" }),
            /* @__PURE__ */ jsx("li", { children: "UI/UX Design" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium mb-4", children: "Contact" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mt-0.5" }),
              " srendibsoftwaresolutions@gmail.com"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mt-0.5" }),
              " +94 74 018 7747"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mt-0.5" }),
              " Alawwa, Sri Lanka"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Serendib Software Solutions. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Cookies" })
        ] })
      ] })
    ] })
  ] });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: "https://wa.me/+94740187747",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "WhatsApp",
      className: "fixed bottom-6 right-6 z-50 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform motion-safe:animate-bounce",
      children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "h-7 w-7", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" }) })
    }
  );
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 pt-24", children }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppButton, {})
  ] });
}
function PageHeader({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-4 py-20 text-center animate-fade-up", children: [
      eyebrow && /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6", children: eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-semibold leading-[1.05]", children: /* @__PURE__ */ jsx("span", { className: "text-gradient", children: title }) }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: subtitle })
    ] })
  ] });
}
export {
  Layout as L,
  PageHeader as P,
  logo as l
};
