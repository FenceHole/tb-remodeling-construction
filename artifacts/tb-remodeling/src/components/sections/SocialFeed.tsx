import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, ExternalLink, Heart, MessageCircle, Camera, Star } from "lucide-react";

const FB_PAGE_URL = "https://www.facebook.com/TB-construction-111024870817783/";
const IG_URL = "https://www.instagram.com/tandb.handyservices";

const FB_EMBED_URL =
  "https://www.facebook.com/plugins/page.php" +
  "?href=https%3A%2F%2Fwww.facebook.com%2FTB-construction-111024870817783%2F" +
  "&tabs=timeline" +
  "&width=500" +
  "&height=600" +
  "&small_header=false" +
  "&adapt_container_width=true" +
  "&hide_cover=false" +
  "&show_facepile=true";

function FacebookEmbed() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="rounded-xl border border-border bg-background p-8 text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-[#1877F2] flex items-center justify-center mx-auto">
          <Facebook className="w-9 h-9 text-white" />
        </div>
        <div>
          <h4 className="font-display font-bold text-xl uppercase tracking-wide mb-2">T&B on Facebook</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Follow our Facebook page to see our latest projects, before &amp; afters, customer reviews, and special offers — posted regularly!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-left">
          {[
            { icon: <Camera className="w-4 h-4 text-primary" />, text: "Before & After Photos" },
            { icon: <Star className="w-4 h-4 text-primary" />, text: "5-Star Customer Reviews" },
            { icon: <Heart className="w-4 h-4 text-primary" />, text: "Project Updates" },
            { icon: <MessageCircle className="w-4 h-4 text-primary" />, text: "Free Quote Requests" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-card border border-border rounded-lg p-3">
              {item.icon}
              <span className="text-xs font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
        <a
          href={FB_PAGE_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-white font-display font-bold uppercase tracking-wider py-3.5 px-6 rounded-lg transition-all duration-300"
        >
          <Facebook className="w-5 h-5" />
          Visit Our Facebook Page
          <ExternalLink className="w-4 h-4" />
        </a>
        <p className="text-xs text-muted-foreground/60">
          Live feed will display automatically on the published site.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-xl bg-background w-full min-h-[620px]">
      <iframe
        src={FB_EMBED_URL}
        width="100%"
        height="620"
        style={{ border: "none", overflow: "hidden", display: "block" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="T&B Construction Facebook Page"
        onError={() => setFailed(true)}
        onLoad={e => {
          try {
            const frame = e.currentTarget as HTMLIFrameElement;
            if (!frame.contentDocument && !frame.contentWindow) setFailed(true);
          } catch {
            // cross-origin — this is normal; iframe is likely loaded fine
          }
        }}
      />
    </div>
  );
}

export function SocialFeed() {
  return (
    <section id="social" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Stay Connected</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Follow Our <span className="text-primary">Work</span>
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See our latest projects, before &amp; afters, and updates straight from our socials. Follow us for real Pittsburgh remodeling results!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Facebook Embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg uppercase tracking-wide">T&amp;B Construction on Facebook</h4>
                <a
                  href={FB_PAGE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#1877F2] hover:underline flex items-center gap-1"
                >
                  facebook.com/TB-construction <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <FacebookEmbed />
          </motion.div>

          {/* Right side: Instagram + Nextdoor + Why Follow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Instagram Card */}
            <div className="bg-background border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg uppercase tracking-wide">Instagram</h4>
                  <a
                    href={IG_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                  >
                    @tandb.handyservices <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Follow us on Instagram for behind-the-scenes remodeling action, project spotlights, and before &amp; after reveals from across Pittsburgh.
              </p>
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-display font-bold uppercase tracking-wider py-3 px-6 rounded-lg transition-all duration-300 hover:opacity-90"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Nextdoor Card */}
            <div className="bg-background border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00B246] flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-display leading-none">N</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg uppercase tracking-wide">Nextdoor</h4>
                  <p className="text-sm text-muted-foreground">T&amp;B Handyservices</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Your neighbors are already recommending us! Find T&amp;B on Nextdoor to see community reviews and request our services.
              </p>
              <a
                href="https://nextdoor.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#00B246] hover:bg-[#00B246]/90 text-white font-display font-bold uppercase tracking-wider py-3 px-6 rounded-lg transition-all duration-300"
              >
                <span className="text-lg font-display font-bold leading-none">N</span>
                Find Us on Nextdoor
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Why Follow */}
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <h4 className="font-display font-bold text-lg uppercase tracking-wide mb-4 text-primary">Why Follow T&amp;B?</h4>
              <ul className="space-y-3">
                {[
                  { icon: <Camera className="w-5 h-5 text-primary" />, text: "Real Pittsburgh before & after project photos" },
                  { icon: <Star className="w-5 h-5 text-primary" />, text: "Honest customer reviews from your neighbors" },
                  { icon: <Heart className="w-5 h-5 text-primary" />, text: "Special deals announced on social first" },
                  { icon: <MessageCircle className="w-5 h-5 text-primary" />, text: "Message us directly for a quick quote" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
