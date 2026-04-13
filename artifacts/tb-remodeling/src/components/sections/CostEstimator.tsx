import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, AlertCircle } from "lucide-react";

type ProjectType = "kitchen" | "bathroom" | "flooring" | "painting" | "deck" | "concrete";
type ProjectSize = "small" | "medium" | "large";

const ESTIMATES: Record<ProjectType, Record<ProjectSize, [number, number]>> = {
  kitchen: { small: [5000, 15000], medium: [15000, 40000], large: [40000, 80000] },
  bathroom: { small: [3000, 8000], medium: [8000, 20000], large: [20000, 45000] },
  flooring: { small: [1000, 3000], medium: [3000, 8000], large: [8000, 20000] },
  painting: { small: [500, 2000], medium: [2000, 6000], large: [6000, 15000] },
  deck: { small: [5000, 12000], medium: [12000, 25000], large: [25000, 50000] },
  concrete: { small: [2000, 6000], medium: [6000, 15000], large: [15000, 35000] }
};

const LABELS = {
  kitchen: "Kitchen Remodel",
  bathroom: "Bathroom Remodel",
  flooring: "Flooring Installation",
  painting: "Painting (Int/Ext)",
  deck: "Deck Build",
  concrete: "Concrete Work"
};

export function CostEstimator() {
  const [type, setType] = useState<ProjectType>("kitchen");
  const [size, setSize] = useState<ProjectSize>("medium");

  const [min, max] = ESTIMATES[type][size];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="estimator" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border shadow-2xl rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-muted p-8 text-center border-b border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide mb-2">Project Cost Estimator</h2>
            <p className="text-muted-foreground">Select your project type and size to get an instant rough estimate.</p>
          </div>

          {/* Body */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Controls */}
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(Object.keys(LABELS) as ProjectType[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => setType(t)}
                        className={`p-3 rounded-lg border text-sm font-semibold transition-all duration-200 ${
                          type === t 
                            ? "bg-primary border-primary text-primary-foreground shadow-[0_0_10px_rgba(245,158,11,0.3)]" 
                            : "bg-background border-border text-foreground hover:border-primary/50"
                        }`}
                      >
                        {LABELS[t]}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                    Project Size / Scope
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(["small", "medium", "large"] as ProjectSize[]).map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`p-3 rounded-lg border text-sm font-semibold capitalize transition-all duration-200 ${
                          size === s 
                            ? "bg-primary border-primary text-primary-foreground shadow-[0_0_10px_rgba(245,158,11,0.3)]" 
                            : "bg-background border-border text-foreground hover:border-primary/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result Display */}
              <div className="bg-background rounded-xl border border-border p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                
                <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Estimated Range
                </h4>
                
                <motion.div 
                  key={`${type}-${size}`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="font-display text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-6"
                >
                  {formatCurrency(min)} <span className="text-foreground/50 text-3xl">-</span> {formatCurrency(max)}
                </motion.div>

                <div className="flex items-start gap-2 text-xs text-muted-foreground text-left bg-muted/50 p-4 rounded-lg mb-8">
                  <AlertCircle className="w-4 h-4 shrink-0 text-primary mt-0.5" />
                  <p>
                    This is a rough estimate for planning purposes. Actual costs depend on materials, specific site conditions, and custom requests.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="w-full inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold uppercase tracking-wider py-4 rounded-md transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                >
                  Get Exact Quote
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
