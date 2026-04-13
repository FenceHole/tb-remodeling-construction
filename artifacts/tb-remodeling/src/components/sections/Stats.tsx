import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({ from, to, suffix = "", duration = 2 }: { from: number, to: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Stats() {
  const stats = [
    { label: "Projects Completed", value: 500, suffix: "+" },
    { label: "Years Experience", value: 13, suffix: "+" },
    { label: "Satisfaction", value: 100, suffix: "%" },
    { label: "5-Star Reviews", value: 150, suffix: "+" },
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* landing page stats construction background */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply">
        <img
          src="https://pixabay.com/get/gb513916e455dc2b2f16794302e7bdddfc7b91c9496fd3897f8be6c127626fe7279839f583f1c31dd77675614a8f66d516c8890cb9842bf1a497d88c05a44606c_1280.jpg"
          alt="Texture"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x-0 sm:divide-x sm:divide-primary-foreground/20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center sm:px-6"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-primary-foreground tracking-tight mb-2">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-primary-foreground/80 font-semibold uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
