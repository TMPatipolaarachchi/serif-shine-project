import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="" className="h-11 w-11 rounded-xl" />
              <div>
                <div className="font-display text-lg font-semibold">Serendib</div>
                <div className="text-xs text-muted-foreground">Software Solutions</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              We build premium software for ambitious teams — from custom platforms and
              mobile apps to AI, cloud, and everything in between.
            </p>
            <div className="flex gap-2">
              <a href="#" className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-white/10 transition">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577909078210" target="_blank" rel="noopener noreferrer" className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-white/10 transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-white/10 transition">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium mb-4">Company</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/careers" className="hover:text-foreground">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium mb-4">Services</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>Custom Software</li>
              <li>Web & Mobile</li>
              <li>AI & Cloud</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium mb-4">Contact</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5" /> srendibsoftwaresolutions@gmail.com</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5" /> +94 74 018 7747</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Alawwa, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Serendib Software Solutions. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
