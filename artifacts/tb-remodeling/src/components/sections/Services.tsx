import { motion } from "framer-motion";
import { 
  ChefHat, Bath, Layers, Square, 
  Zap, Paintbrush, Home, Hammer, ArrowRight
} from "lucide-react";

const SERVICES = [
  {
    id: "kitchen",
    title: "Kitchen Remodeling",
    description: "Full kitchen renovations, custom cabinets, stone countertops, and intricate backsplashes.",
    icon: ChefHat,
  },
  {
    id: "bathroom",
    title: "Bathroom Remodeling",
    description: "Complete bathroom overhauls, custom tiling, modern fixtures, and shower conversions.",
    icon: Bath,
  },
  {
    id: "flooring",
    title: "Flooring",
    description: "Expert installation of hardwood, luxury vinyl plank (LVP), laminate, and ceramic tile.",
    icon: Layers,
  },
  {
    id: "drywall",
    title: "Drywall & Versa-Lock",
    description: "Seamless drywall installation and finishing, plus durable Versa-Lock retaining walls.",
    icon: Square,
  },
  {
    id: "electrical",
    title: "Electrical & Plumbing",
    description: "Safe, up-to-code electrical and plumbing services integrated into your remodeling projects.",
    icon: Zap,
  },
  {
    id: "painting",
    title: "Interior & Exterior Painting",
    description: "Flawless full paint jobs to protect and beautify both the inside and outside of your property.",
    icon: Paintbrush,
  },
  {
    id: "decking",
    title: "Decking",
    description: "Custom deck builds, repairs, and extensions using premium treated wood or composite materials.",
    icon: Home,
  },
  {
    id: "concrete",
    title: "Concrete Work",
    description: "High-quality concrete pouring for driveways, patios, walkways, and structural foundations.",
    icon: Hammer,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-card/30 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">What We Do</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              Our <span className="text-primary">Services</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              From interior overhauls to exterior hardscaping, we have the skills and experience to handle every aspect of your property's transformation.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-card border border-border/50 p-8 rounded-xl hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-14 h-14 bg-background border border-border rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground text-primary transition-colors duration-300 relative z-10">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h4 className="font-display text-xl font-bold uppercase tracking-wide mb-3 relative z-10">
                  {service.title}
                </h4>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>
                
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider group-hover:text-foreground transition-colors relative z-10 mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
