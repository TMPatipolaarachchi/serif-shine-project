import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";

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
  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Let's talk." subtitle="Tell us a bit about your project and we'll get back within one business day." />

      <section className="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-6">Start a project</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Full name" className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
              <input placeholder="Work email" type="email" className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Company" className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
              <select className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent">
                <option className="bg-background">Budget range</option>
                <option className="bg-background">$10K – $25K</option>
                <option className="bg-background">$25K – $75K</option>
                <option className="bg-background">$75K – $200K</option>
                <option className="bg-background">$200K+</option>
              </select>
            </div>
            <textarea placeholder="Tell us about your project…" rows={6} className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            <button className="w-full rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.01] transition">
              Send message
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="glass rounded-3xl p-7 space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand"><Mail className="h-4 w-4 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div>hello@serendib.dev</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand"><Phone className="h-4 w-4 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div>+94 77 123 4567</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand"><MapPin className="h-4 w-4 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Office</div>
                <div>Colombo, Sri Lanka</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-[#25D366]"><MessageCircle className="h-4 w-4 text-white" /></div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <a href="https://wa.me/94771234567" className="hover:text-accent">Chat with us instantly →</a>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-7">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Follow us</div>
            <div className="flex gap-2">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl overflow-hidden aspect-video">
            <iframe
              title="Office location"
              className="w-full h-full grayscale-[40%] opacity-90"
              src="https://www.google.com/maps?q=Colombo,Sri+Lanka&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
