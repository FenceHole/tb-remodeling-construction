import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images/Logo Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 bg-card rounded-xl p-8 border border-border/50 shadow-2xl">
              <div className="flex flex-col items-center justify-center py-10 bg-background/60 rounded-lg h-full min-h-[300px]">
                <div className="h-52 w-52 rounded-full overflow-hidden ring-4 ring-primary/50 shadow-[0_0_40px_rgba(245,158,11,0.25)]">
                  <img
                    src="/tb-logo-circle.png"
                    alt="T&B Remodeling & Construction Pittsburgh PA — Est. 2012"
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
                <p className="mt-5 font-display text-xl font-bold text-primary italic uppercase tracking-widest">
                  Est. 2012 · Pittsburgh, PA
                </p>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
                <p className="font-display text-4xl font-bold">13+</p>
                <p className="font-semibold uppercase tracking-wider text-sm">Years Experience</p>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[100px] -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">About T&B Remodeling</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              A Legacy of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Quality Craftsmanship</span>
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Founded in 2012, T&B Remodeling & Construction is a proudly family-owned business serving the greater Pittsburgh area. Owners Tito and Brenda Vazquez built this company on a foundation of hard work, transparent communication, and an unwavering commitment to quality.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tito brings decades of hands-on expertise to every job site, ensuring that whether we're pouring a new driveway or installing intricate bathroom tile, the work meets our rigorous standards. Brenda serves as your dedicated point of contact, ensuring your project runs smoothly from the first email to the final walkthrough.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Licensed & Insured",
                "Free Accurate Estimates",
                "Residential & Commercial",
                "100% Satisfaction Guarantee"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-semibold text-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-border">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-background bg-card flex items-center justify-center font-display font-bold text-lg text-primary shadow-lg">T</div>
                <div className="w-12 h-12 rounded-full border-2 border-background bg-card flex items-center justify-center font-display font-bold text-lg text-primary shadow-lg">B</div>
              </div>
              <div>
                <p className="font-bold text-foreground font-display tracking-wide uppercase">Tito & Brenda Vazquez</p>
                <p className="text-sm text-primary font-semibold uppercase tracking-wider">Founders / Owners</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
