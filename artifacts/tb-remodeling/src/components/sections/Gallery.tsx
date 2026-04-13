import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, ExternalLink, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const PHOTOS = [
  { url: "/gallery/kitchen-remodel.jpg",          category: "Kitchen",   label: "Kitchen Remodel — Dark Cabinets & Pendant Lights" },
  { url: "/gallery/kitchen-oak-granite.jpg",       category: "Kitchen",   label: "Kitchen — Oak Cabinets & Granite Countertops" },
  { url: "/gallery/bathroom-blue-tile.jpg",        category: "Bathroom",  label: "Bathroom — Blue Patterned Tile & New Vanity" },
  { url: "/gallery/bathroom-marble-tile.jpg",      category: "Bathroom",  label: "Bathroom — Marble Tile Floor Installation" },
  { url: "/gallery/bathroom-vanity-dark-tile.jpg", category: "Bathroom",  label: "Bathroom — New Vanity & Dark Slate Tile" },
  { url: "/gallery/bathroom-freestanding-tub.jpg", category: "Bathroom",  label: "Luxury Bathroom — Freestanding Soaking Tub" },
  { url: "/gallery/bathroom-luxury-tub.jpg",       category: "Bathroom",  label: "Master Bathroom — Full Renovation" },
  { url: "/gallery/bathroom-skylight.jpg",         category: "Bathroom",  label: "Bathroom — Skylight & Recessed Lighting" },
  { url: "/gallery/shower-hex-tile.jpg",           category: "Bathroom",  label: "Walk-In Shower — Hex Mosaic Tile & Bench" },
  { url: "/gallery/shower-marble-tile.jpg",        category: "Bathroom",  label: "Shower — Marble Tile & Glass Door" },
  { url: "/gallery/hardwood-flooring.jpg",         category: "Flooring",  label: "Hardwood Flooring — Full Room Install" },
  { url: "/gallery/tile-flooring.jpg",             category: "Flooring",  label: "Wood-Look Tile Flooring Installation" },
  { url: "/gallery/deck-stained.jpg",              category: "Decking",   label: "Deck — Stained & Sealed with Custom Railing" },
  { url: "/gallery/deck-covered-porch.jpg",        category: "Decking",   label: "Covered Porch & Deck Addition" },
  { url: "/gallery/deck-black-railing.jpg",        category: "Decking",   label: "Deck — White Posts & Black Iron Railing" },
  { url: "/gallery/deck-composite.jpg",            category: "Decking",   label: "Composite Deck — Chevron Pattern Design" },
  { url: "/gallery/deck-elevated-stairs.jpg",      category: "Decking",   label: "Elevated Deck with Custom Staircase" },
  { url: "/gallery/deck-patio-complete.jpg",       category: "Decking",   label: "Completed Deck — Ready for Entertaining" },
  { url: "/gallery/concrete-steps.jpg",            category: "Concrete",  label: "Concrete Steps — Fresh Pour & Form Work" },
  { url: "/gallery/stone-retaining-wall.jpg",      category: "Outdoor",   label: "Stone Block Retaining Wall & Landscaping" },
  { url: "/gallery/project1.png",                  category: "T&B Work",  label: "T&B Remodeling — Pittsburgh Project" },
];

const CATEGORIES = ["All", "Kitchen", "Bathroom", "Flooring", "Decking", "Concrete", "Outdoor"];

const CATEGORY_COLORS: Record<string, string> = {
  Kitchen:  "bg-orange-500/90",
  Bathroom: "bg-blue-500/90",
  Flooring: "bg-amber-500/90",
  Decking:  "bg-green-600/90",
  Concrete: "bg-slate-500/90",
  Outdoor:  "bg-emerald-600/90",
  "T&B Work": "bg-primary/90",
};

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? PHOTOS : PHOTOS.filter(p => p.category === activeFilter);

  const openLightbox = (globalIndex: number) => setLightbox(globalIndex);
  const closeLightbox = () => setLightbox(null);

  const prevPhoto = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + PHOTOS.length) % PHOTOS.length);
  };
  const nextPhoto = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % PHOTOS.length);
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Our Portfolio</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Real <span className="text-primary">Pittsburgh</span> Work
            </h3>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Every job done right, every time. Real projects, real craftsmanship — T&amp;B Got It Done!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center shrink-0">
            <a
              href="https://www.facebook.com/TB-construction-111024870817783/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white font-display font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all duration-300 text-sm whitespace-nowrap"
            >
              <Facebook className="w-4 h-4" />
              More on Facebook
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="#contact"
              className="text-foreground border-b-2 border-primary pb-1 font-display font-bold uppercase tracking-wider hover:text-primary transition-colors inline-block w-fit whitespace-nowrap"
            >
              Start Your Project
            </a>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full font-display font-bold uppercase tracking-wider text-xs transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 opacity-60 text-[10px]">
                  ({PHOTOS.filter(p => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((photo) => {
              const globalIndex = PHOTOS.indexOf(photo);
              return (
                <motion.div
                  key={photo.url}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-card shadow-lg hover:shadow-primary/10 hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openLightbox(globalIndex)}
                >
                  <img
                    src={photo.url}
                    alt={`${photo.label} by T&B Remodeling & Construction Pittsburgh PA`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5">
                    <span className="font-display text-base font-bold uppercase tracking-wide text-white drop-shadow-lg leading-tight">
                      {photo.label}
                    </span>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`${CATEGORY_COLORS[photo.category] || "bg-primary/90"} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg`}>
                      {photo.category}
                    </span>
                  </div>
                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-background/70 backdrop-blur-sm rounded-full p-1.5">
                      <ZoomIn className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4 text-lg">See even more projects on our Facebook page</p>
          <a
            href="https://www.facebook.com/TB-construction-111024870817783/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white font-display font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
          >
            <Facebook className="w-5 h-5" />
            View Full Portfolio on Facebook
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/96 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground bg-card rounded-full border border-border z-10"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-foreground/60 hover:text-primary bg-card rounded-full border border-border z-10"
              onClick={e => { e.stopPropagation(); prevPhoto(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-foreground/60 hover:text-primary bg-card rounded-full border border-border z-10"
              onClick={e => { e.stopPropagation(); nextPhoto(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.img
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={PHOTOS[lightbox].url}
              alt={PHOTOS[lightbox].label}
              className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />

            <div className="absolute bottom-5 left-0 right-0 text-center px-16">
              <span className={`inline-block ${CATEGORY_COLORS[PHOTOS[lightbox].category] || "bg-primary/90"} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mr-2`}>
                {PHOTOS[lightbox].category}
              </span>
              <span className="font-display font-bold uppercase tracking-widest text-foreground text-sm">
                {PHOTOS[lightbox].label}
              </span>
              <span className="ml-3 text-muted-foreground text-xs">{lightbox + 1} / {PHOTOS.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
