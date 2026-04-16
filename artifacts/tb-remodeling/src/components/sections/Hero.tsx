import { motion } from "framer-motion";
import { ChevronRight, Ruler, Hammer } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-20 sm:pt-36 md:pt-44 lg:pt-48 overflow-hidden">

      {/* Background: kitchen photo + teal overlay + blueprint grid */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop"
          alt="Modern kitchen remodel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#082028]/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082028] via-[#082028]/90 to-[#082028]/40" />
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-60" />
      </div>

      {/* Copper top ruler edge */}
      <div className="absolute top-0 left-0 right-0 z-20 ruler-edge" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-8 sm:pb-12 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Text Content ── */}
          <div>
            {/* Blueprint label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="blueprint-label">Pittsburgh · Est. 2012 · Premier Renovator</span>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-sm bg-primary/15 text-primary border border-primary/40 font-semibold text-xs uppercase tracking-widest mb-6">
                <Hammer className="w-3.5 h-3.5" />
                Pittsburgh's Premier Contractor
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold font-display text-foreground leading-[1.05] mb-6 tracking-tight uppercase"
            >
              T&amp;B{" "}
              <span
                className="italic"
                style={{ color: "#c4773a" }}
              >
                Got It Done!
              </span>
            </motion.h1>

            {/* Copper divider line with ruler ticks */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="origin-left mb-6"
            >
              <div className="copper-divider w-3/4" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
              style={{ color: "#7faab4" }}
            >
              Family-owned since 2012. We deliver exceptional kitchen, bathroom, flooring, and exterior renovations. Your dream space, built with uncompromising quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="copper-glow inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider text-lg px-8 py-4 rounded-sm hover:bg-primary/90 transition-all duration-300 group"
              >
                Get a Free Quote
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:4128790701"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground border-2 font-display font-bold uppercase tracking-wider text-lg px-8 py-4 rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
                style={{ borderColor: "rgba(198,119,58,0.4)" }}
              >
                Call 412-879-0701
              </a>
            </motion.div>

            {/* Small stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 mt-10 pt-6"
              style={{ borderTop: "1px solid rgba(42,127,138,0.25)" }}
            >
              {[
                { value: "13+", label: "Years" },
                { value: "500+", label: "Projects" },
                { value: "5★", label: "Rating" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl font-bold" style={{ color: "#c4773a" }}>{s.value}</p>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#7faab4" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Medallion Logo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Radiating blueprint lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 45, 90, 135].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-full h-px origin-center"
                  style={{
                    transform: `rotate(${deg}deg)`,
                    background: "linear-gradient(90deg, transparent 0%, rgba(42,127,138,0.2) 30%, rgba(42,127,138,0.35) 50%, rgba(42,127,138,0.2) 70%, transparent 100%)",
                  }}
                />
              ))}
            </div>

            {/* Outer measurement ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: "440px",
                height: "440px",
                border: "1px dashed rgba(196,119,58,0.25)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: "380px",
                height: "380px",
                border: "1px solid rgba(42,127,138,0.15)",
              }}
            />

            {/* Ruler tick marks around circle */}
            <svg
              className="absolute"
              width="460"
              height="460"
              viewBox="0 0 460 460"
              style={{ opacity: 0.3 }}
            >
              {Array.from({ length: 36 }).map((_, i) => {
                const angle = (i * 10 * Math.PI) / 180;
                const isMajor = i % 3 === 0;
                const r1 = 220;
                const r2 = isMajor ? 207 : 212;
                const x1 = 230 + r1 * Math.cos(angle);
                const y1 = 230 + r1 * Math.sin(angle);
                const x2 = 230 + r2 * Math.cos(angle);
                const y2 = 230 + r2 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#c4773a"
                    strokeWidth={isMajor ? 1.5 : 0.75}
                  />
                );
              })}
            </svg>

            {/* Corner measurement labels */}
            {[
              { top: "12px", left: "50%", label: "N" },
              { bottom: "12px", left: "50%", label: "S" },
              { left: "12px", top: "50%", label: "W" },
              { right: "12px", top: "50%", label: "E" },
            ].map((pos, i) => (
              <span
                key={i}
                className="absolute font-display text-[10px] font-bold"
                style={{
                  ...pos,
                  transform: "translate(-50%, -50%)",
                  color: "rgba(196,119,58,0.45)",
                  letterSpacing: "0.1em",
                }}
              >
                {pos.label}
              </span>
            ))}

            {/* The Logo Medallion */}
            <motion.img
              src="/tb-logo-new.png"
              alt="T&B Remodeling & Construction LLC — Pittsburgh's Premier Renovator"
              className="medallion-glow relative z-10 select-none"
              style={{ width: "320px", height: "320px", objectFit: "contain" }}
              animate={{ rotate: [0, 0.5, 0, -0.5, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />

            {/* Corner blueprint annotations */}
            <div className="absolute top-4 right-4 flex flex-col items-end" style={{ color: "rgba(42,127,138,0.45)" }}>
              <div className="flex items-center gap-1.5">
                <Ruler className="w-3 h-3" />
                <span className="text-[9px] font-mono uppercase tracking-widest">T&B-2012-PGH</span>
              </div>
              <div className="w-8 h-px mt-1" style={{ background: "rgba(196,119,58,0.4)" }} />
            </div>
            <div className="absolute bottom-4 left-4" style={{ color: "rgba(42,127,138,0.45)" }}>
              <span className="text-[9px] font-mono uppercase tracking-widest">REV. 13 · PITTSBURGH PA</span>
              <div className="w-8 h-px mt-1" style={{ background: "rgba(196,119,58,0.4)" }} />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
