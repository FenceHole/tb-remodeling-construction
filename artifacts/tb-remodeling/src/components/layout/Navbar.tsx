import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Estimator", href: "#estimator" },
  { name: "Our Work", href: "#gallery" },
  { name: "AI Visualizer", href: "#visualizer" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Follow Us", href: "#social" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-xl py-1"
          : "bg-transparent border-transparent py-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div
              className={cn(
                "rounded-full overflow-hidden shrink-0 transition-all duration-300 ring-2 ring-primary/40 group-hover:ring-primary/80 shadow-lg group-hover:shadow-primary/20",
                isScrolled ? "h-14 w-14" : "h-20 w-20"
              )}
            >
              <img
                src="/tb-logo-circle.png"
                alt="T&B Remodeling & Construction LLC Pittsburgh PA"
                className="w-full h-full object-cover object-bottom"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg sm:text-xl font-bold text-foreground tracking-wide leading-tight">
                T&amp;B Remodeling
              </span>
              <span className="text-xs sm:text-sm font-bold text-foreground/80 tracking-wide leading-tight">
                &amp; Construction, LLC
              </span>
              <span className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-widest leading-tight">
                "Got It Done!"
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-4">
            <div className="flex gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 uppercase tracking-wider whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Email button */}
            <a
              href="mailto:tandb7975@gmail.com"
              aria-label="Email T&B Remodeling"
              className="flex items-center gap-2 border border-primary/60 hover:border-primary text-primary hover:bg-primary/10 px-4 py-2.5 rounded-sm font-display font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap shrink-0 text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>

            {/* Phone button */}
            <a
              href="tel:4128790701"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-sm font-display font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>412-879-0701</span>
            </a>
          </div>

          {/* Mobile: email + phone + hamburger */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href="mailto:tandb7975@gmail.com"
              aria-label="Email T&B Remodeling"
              className="flex items-center gap-1.5 border border-primary/60 text-primary px-3 py-2 rounded-sm font-display font-bold text-sm uppercase tracking-wide"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="tel:4128790701"
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-2 rounded-sm font-display font-bold text-sm uppercase tracking-wide"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">412-879-0701</span>
              <span className="sm:hidden">Call</span>
            </a>
            <button
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={cn(
          "xl:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-2xl transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col p-4 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-display font-semibold text-foreground/90 hover:text-primary transition-colors py-3 border-b border-border/50 uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="mailto:tandb7975@gmail.com"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-sm font-display font-bold uppercase tracking-wider"
            >
              <Mail className="w-4 h-4" />
              tandb7975@gmail.com
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-display font-bold uppercase tracking-wider"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
