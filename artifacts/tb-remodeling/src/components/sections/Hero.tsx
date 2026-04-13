import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero modern dark kitchen remodel */}
        <img
          src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop"
          alt="Modern kitchen remodel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded bg-primary/20 text-primary border border-primary/30 font-semibold text-sm uppercase tracking-widest mb-6">
              Pittsburgh's Premier Contractor
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-foreground leading-[1.1] mb-6 tracking-tight uppercase"
          >
            T&B <span className="text-primary italic">Got It Done!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Family-owned and operated since 2012. We deliver exceptional kitchen, bathroom, flooring, and exterior renovations. Your dream space, built with uncompromising quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider text-lg px-8 py-4 rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] group"
            >
              Get a Free Quote
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:4128790701"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground border-2 border-border font-display font-bold uppercase tracking-wider text-lg px-8 py-4 rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              Call 412-879-0701
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
