import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { L as Layout, P as PageHeader } from "./Layout-BsTsz0UT.js";
import { Mail, Phone, MapPin, MessageCircle, Github, Facebook, Linkedin } from "lucide-react";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, a as createServerFn } from "./server-BTPB9ss1.js";
import { z } from "zod";
import "@tanstack/react-router";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  workEmail: z.string().trim().optional().refine((v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), {
    message: "Enter a valid email address"
  }),
  phoneNumber: z.string().trim().min(1, "Phone number is required"),
  projectDetails: z.string().trim().min(1, "Project details are required")
});
const sendContactMessage = createServerFn({
  method: "POST"
}).inputValidator(contactFormSchema).handler(createSsrRpc("fbd394cc9fa4af3080fc71bce795b650ae4ce5bc0cb7fdb09c73ce183438bcb8"));
function Contact() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const workEmail = String(formData.get("workEmail") ?? "").trim();
    const phoneNumber = String(formData.get("phoneNumber") ?? "").trim();
    const projectDetails = String(formData.get("projectDetails") ?? "").trim();
    setStatus("sending");
    setFeedback("");
    try {
      await sendContactMessage({
        data: {
          fullName,
          workEmail,
          phoneNumber,
          projectDetails
        }
      });
      setStatus("success");
      setFeedback("Message sent successfully. We will get back to you soon.");
      if (form) form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Contact", title: "Let's talk.", subtitle: "Tell us a bit about your project and we'll get back within one business day." }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 glass rounded-3xl p-8 md:p-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-6", children: "Start a project" }),
        /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-1 gap-4", children: /* @__PURE__ */ jsx("input", { name: "fullName", placeholder: "Full name", className: "w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" }) }),
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-1 gap-4", children: /* @__PURE__ */ jsx("input", { name: "phoneNumber", placeholder: "Phone number", type: "tel", className: "w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" }) }),
          /* @__PURE__ */ jsx("textarea", { name: "projectDetails", placeholder: "Tell us about your project…", rows: 6, className: "w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" }),
          /* @__PURE__ */ jsx("button", { type: "submit", disabled: status === "sending", className: "w-full rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.01] transition disabled:opacity-60 disabled:hover:scale-100", children: status === "sending" ? "Sending..." : "Send message" }),
          feedback ? /* @__PURE__ */ jsx("p", { className: `text-sm ${status === "error" ? "text-red-300" : "text-emerald-300"}`, children: feedback }) : null
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-7 space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand", children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Email" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:srendibsoftwaresolutions@gmail.com", className: "hover:text-accent", children: "srendibsoftwaresolutions@gmail.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand", children: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Phone" }),
              /* @__PURE__ */ jsx("div", { children: "+94 74 018 7747" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand", children: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Office" }),
              /* @__PURE__ */ jsx("div", { children: "Alawwa, Sri Lanka" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "h-10 w-10 grid place-items-center rounded-xl bg-[#25D366]", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "WhatsApp" }),
              /* @__PURE__ */ jsx("a", { href: "https://wa.me/94740187747", className: "hover:text-accent", children: "Chat with us instantly →" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-7", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3", children: "Follow us" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("a", { href: "#", className: "h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition", children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/profile.php?id=61577909078210", target: "_blank", rel: "noopener noreferrer", className: "h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition", children: /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "glass rounded-3xl overflow-hidden aspect-video", children: /* @__PURE__ */ jsx("iframe", { title: "Office location", className: "w-full h-full grayscale-[40%] opacity-90", src: "https://www.google.com/maps?q=Alawwa,Sri+Lanka&output=embed", loading: "lazy" }) })
      ] })
    ] })
  ] });
}
export {
  Contact as component
};
