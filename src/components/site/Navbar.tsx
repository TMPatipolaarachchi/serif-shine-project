import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass shadow-[var(--shadow-card)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logo} alt="Serendib" className="h-9 w-9 rounded-lg object-cover" />
            <span className="font-display text-base font-semibold tracking-tight">
              Serendib
              <span className="text-muted-foreground font-normal hidden sm:inline"> / Software</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-3.5 py-2 rounded-lg text-sm transition-colors ${
                    active
                      ? "text-foreground bg-white/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.03] transition-transform"
            >
              Start a project
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg glass"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass p-3 animate-fade-up">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block px-4 py-2.5 rounded-lg text-sm hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-2 text-center rounded-lg bg-gradient-brand px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Start a project
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
