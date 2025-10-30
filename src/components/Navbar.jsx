import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#destinations", label: "Destinations" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 text-white shadow-lg">
                <Plane className="h-5 w-5" />
              </span>
              <span className="text-white/90 font-semibold tracking-tight">Aurelia Travel</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-white text-slate-900 font-medium px-5 py-2 shadow/50 shadow-white/10 hover:shadow-white/30 transition-shadow"
              >
                Plan a Trip
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 pb-4">
              <div className="grid gap-2 pt-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-white/90 py-2"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-white text-slate-900 font-medium px-5 py-2"
                >
                  Plan a Trip
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
