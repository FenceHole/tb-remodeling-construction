import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Michael R.",
    location: "Mount Lebanon, PA",
    project: "Kitchen Remodel",
    text: "Tito and his crew completely transformed our outdated 90s kitchen. The custom cabinetry and tile work is flawless. They were communicative, clean, and finished right on budget. Highly recommend!"
  },
  {
    name: "Sarah J.",
    location: "Cranberry Twp, PA",
    project: "Bathroom & Flooring",
    text: "Brenda made the scheduling and quoting process incredibly easy. When the crew arrived, they were professional and respectful of our home. The new master bath is our favorite room in the house."
  },
  {
    name: "David W.",
    location: "South Side, Pittsburgh",
    project: "Concrete Driveway",
    text: "T&B poured a new double driveway and sidewalk for us. The grading is perfect, no more water pooling near the garage. Hardest working guys I've seen in the business."
  },
  {
    name: "Emily C.",
    location: "Wexford, PA",
    project: "Deck Build",
    text: "We wanted a large composite deck for summer hosting. T&B delivered exactly what we envisioned. Sturdy construction and beautiful finish. 'T&B Got It Done' is accurate!"
  },
  {
    name: "Robert T.",
    location: "Bethel Park, PA",
    project: "Full Interior Paint",
    text: "Hired them to paint the entire interior of our new home before moving in. Crisp lines, perfect coverage, and they finished a day early. Great family business."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Client Reviews</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            Pittsburgh's <span className="text-primary">#1 Choice</span>
          </h3>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Read what your neighbors have to say about our remodeling and construction services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border p-8 rounded-xl relative hover:border-primary/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-muted/30 rotate-180" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground/90 italic leading-relaxed mb-6">
                "{review.text}"
              </p>
              
              <div className="mt-auto">
                <p className="font-display font-bold text-lg uppercase tracking-wide text-foreground">
                  {review.name}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary font-semibold">{review.project}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{review.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom two centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:w-2/3 lg:mx-auto">
          {REVIEWS.slice(3, 5).map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-background border border-border p-8 rounded-xl relative hover:border-primary/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-muted/30 rotate-180" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground/90 italic leading-relaxed mb-6">
                "{review.text}"
              </p>
              
              <div className="mt-auto">
                <p className="font-display font-bold text-lg uppercase tracking-wide text-foreground">
                  {review.name}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary font-semibold">{review.project}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{review.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
