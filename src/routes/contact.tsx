import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { sendContactMessage } from "@/lib/api/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Serendib Software Solutions" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Contact Serendib" },
      { property: "og:description", content: "Get in touch with the Serendib team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
          projectDetails,
        },
      });

      setStatus("success");
      setFeedback("Message sent successfully. We will get back to you soon.");
      if (form) form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    }
  };

  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Let's talk." subtitle="Tell us a bit about your project and we'll get back within one business day." />

      <section className="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-6">Start a project</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-1 gap-4">
              <input name="fullName" placeholder="Full name" className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            </div>
            <div className="grid sm:grid-cols-1 gap-4">
              <input name="phoneNumber" placeholder="Phone number" type="tel" className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            </div>
            <textarea name="projectDetails" placeholder="Tell us about your project…" rows={6} className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            <button type="submit" disabled={status === "sending"} className="w-full rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.01] transition disabled:opacity-60 disabled:hover:scale-100">
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {feedback ? (
              <p className={`text-sm ${status === "error" ? "text-red-300" : "text-emerald-300"}`}>
                {feedback}
              </p>
            ) : null}
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="glass rounded-3xl p-7 space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand"><Mail className="h-4 w-4 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <a href="mailto:srendibsoftwaresolutions@gmail.com" className="hover:text-accent">
                  srendibsoftwaresolutions@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand"><Phone className="h-4 w-4 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div>+94 74 018 7747</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand"><MapPin className="h-4 w-4 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Office</div>
                <div>Alawwa, Sri Lanka</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-[#25D366]"><MessageCircle className="h-4 w-4 text-white" /></div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <a href="https://wa.me/94740187747" className="hover:text-accent">Chat with us instantly →</a>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-7">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Follow us</div>
            <div className="flex gap-2">
              <a href="#" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577909078210" target="_blank" rel="noopener noreferrer" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl overflow-hidden aspect-video">
            <iframe
              title="Office location"
              className="w-full h-full grayscale-[40%] opacity-90"
              src="https://www.google.com/maps?q=Alawwa,Sri+Lanka&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
