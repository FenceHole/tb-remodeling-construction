import { Phone, Mail, MapPin, Facebook, Instagram, Hammer } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/40 shadow-lg">
                <img src="/tb-logo-circle.png" alt="T&B Remodeling & Construction LLC Pittsburgh PA" className="w-full h-full object-cover object-bottom" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-base font-bold text-foreground tracking-wide">T&amp;B Remodeling</span>
                <span className="text-xs font-bold text-foreground/70 tracking-wide">&amp; Construction, LLC</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pittsburgh's trusted remodeling contractor since 2012. Family-owned by Tito & Brenda Vazquez. We take pride in delivering exceptional craftsmanship for residential and commercial spaces.
            </p>
            <p className="font-display text-xl font-bold text-primary italic uppercase tracking-wider">
              "T&B Got It Done!"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Cost Estimator', href: '#estimator' },
                { label: 'Our Work', href: '#gallery' },
                { label: 'Reviews', href: '#testimonials' },
                { label: 'Follow Us', href: '#social' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4 tracking-wider">Our Services</h4>
            <ul className="space-y-2">
              {['Kitchen Remodeling', 'Bathroom Remodeling', 'Flooring', 'Drywall & Walls', 'Electrical & Plumbing', 'Interior & Exterior Painting', 'Deck Building', 'Concrete Work'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <Hammer className="w-3 h-3 text-primary/50" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4 tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:4128790701" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Phone className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-sm font-semibold text-foreground">Call or Text</span>
                    <span className="text-sm">412-879-0701</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:tandb7975@gmail.com" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-sm font-semibold text-foreground">Email Us</span>
                    <span className="text-sm">tandb7975@gmail.com</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span className="block text-sm font-semibold text-foreground">Service Area</span>
                  <span className="text-sm">Pittsburgh, PA & Surrounding Areas</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} T&B Remodeling & Construction, LLC · Pittsburgh, PA · Est. 2012 · All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/TB-construction-111024870817783/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="T&B Construction on Facebook"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/tandb.handyservices" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="T&B on Instagram"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://nextdoor.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="T&B on Nextdoor"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 font-bold text-base"
            >
              <span className="font-display">N</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
