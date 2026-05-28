import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
const appCss = "/assets/styles-CrTUFRJs.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Serendib Software Solutions" },
      { name: "description", content: "Serendib Software Solutions builds custom software, web & mobile apps, AI and cloud platforms for ambitious global teams." },
      { name: "author", content: "Serendib Software Solutions" },
      { property: "og:title", content: "Serendib Software Solutions" },
      { property: "og:description", content: "Serendib Software Solutions builds custom software, web & mobile apps, AI and cloud platforms for ambitious global teams." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Serendib Software Solutions" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Serendib Software Solutions" },
      { name: "twitter:description", content: "Serendib Software Solutions builds custom software, web & mobile apps, AI and cloud platforms for ambitious global teams." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/cd70ca23-460f-43dd-96c3-81908e510541" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/cd70ca23-460f-43dd-96c3-81908e510541" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$6 = () => import("./services-CfJsPZ94.js");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Serendib Software Solutions"
    }, {
      name: "description",
      content: "Custom software, web, mobile, AI, cloud, ERP, LMS, design, and more."
    }, {
      property: "og:title",
      content: "Services — Serendib"
    }, {
      property: "og:description",
      content: "Premium engineering services for ambitious teams."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./portfolio-UfRavGlq.js");
const Route$5 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "Portfolio — Serendib Software Solutions"
    }, {
      name: "description",
      content: "A selection of recent projects across AI, fintech, healthcare, and more."
    }, {
      property: "og:title",
      content: "Portfolio — Serendib"
    }, {
      property: "og:description",
      content: "Selected work from the Serendib studio."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-CTSGiikX.js");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Serendib Software Solutions"
    }, {
      name: "description",
      content: "Tell us about your project. We respond within one business day."
    }, {
      property: "og:title",
      content: "Contact Serendib"
    }, {
      property: "og:description",
      content: "Get in touch with the Serendib team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./careers-DLYDpGii.js");
const Route$3 = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers — Serendib Software Solutions"
    }, {
      name: "description",
      content: "Join a senior team building world-class software. Remote-friendly, async-first."
    }, {
      property: "og:title",
      content: "Careers at Serendib"
    }, {
      property: "og:description",
      content: "Senior engineers, designers, and product thinkers wanted."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./blog-DwpjAi7E.js");
const Route$2 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Blog — Serendib Software Solutions"
    }, {
      name: "description",
      content: "Notes on engineering, design, AI, and shipping great software."
    }, {
      property: "og:title",
      content: "Serendib Blog"
    }, {
      property: "og:description",
      content: "Notes on engineering, design, AI, and shipping."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-BgQx2AJa.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Serendib Software Solutions"
    }, {
      name: "description",
      content: "Our story, mission, and the people building Serendib Software Solutions."
    }, {
      property: "og:title",
      content: "About Serendib"
    }, {
      property: "og:description",
      content: "Senior engineers, designers and product thinkers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DRo_sFkh.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Serendib Software Solutions — Premium Software, AI & Cloud"
    }, {
      name: "description",
      content: "We design and engineer premium software, AI platforms, and cloud systems for ambitious global teams."
    }, {
      property: "og:title",
      content: "Serendib Software Solutions"
    }, {
      property: "og:description",
      content: "Premium software engineering for ambitious teams."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const PortfolioRoute = Route$5.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const CareersRoute = Route$3.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$7
});
const BlogRoute = Route$2.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute,
  CareersRoute,
  ContactRoute,
  PortfolioRoute,
  ServicesRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
