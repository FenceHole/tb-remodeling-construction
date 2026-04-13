import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { CostEstimator } from "@/components/sections/CostEstimator";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { SocialFeed } from "@/components/sections/SocialFeed";
import { RemodelVisualizer } from "@/components/sections/RemodelVisualizer";
import { Contact } from "@/components/sections/Contact";

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.tandbconstruction.com/#business",
      "name": "T&B Remodeling & Construction, LLC",
      "alternateName": ["T&B Remodeling", "T and B Construction", "TB Remodeling Pittsburgh"],
      "description": "Pittsburgh's premier remodeling and construction company. Expert kitchen remodeling, bathroom renovations, flooring, painting, decking, concrete, drywall, and plumbing. Family-owned by Tito & Brenda Vazquez since 2012.",
      "image": "/tb-logo.png",
      "logo": "/tb-logo.png",
      "url": "https://www.tandbconstruction.com",
      "telephone": "+14128790701",
      "email": "tandb7975@gmail.com",
      "foundingDate": "2012",
      "founder": [
        { "@type": "Person", "name": "Tito Vazquez" },
        { "@type": "Person", "name": "Brenda Vazquez" }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pittsburgh",
        "addressRegion": "PA",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Pittsburgh", "addressRegion": "PA" },
        { "@type": "AdministrativeArea", "name": "Allegheny County" },
        { "@type": "AdministrativeArea", "name": "Westmoreland County" },
        { "@type": "AdministrativeArea", "name": "Washington County" }
      ],
      "sameAs": [
        "https://www.facebook.com/TB-construction-111024870817783/",
        "https://www.instagram.com/tandb.handyservices"
      ],
      "priceRange": "$$",
      "paymentAccepted": "Cash, Check, Credit Card",
      "openingHours": "Mo-Sa 07:00-18:00",
      "hasMap": "https://maps.google.com/?q=Pittsburgh+PA",
      "serviceType": [
        "Kitchen Remodeling",
        "Bathroom Remodeling",
        "Flooring Installation",
        "Drywall Installation",
        "Versa-Lock Wall Construction",
        "Electrical Services",
        "Plumbing Services",
        "Interior Painting",
        "Exterior Painting",
        "Deck Building",
        "Concrete Work"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "47",
        "bestRating": "5"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.tandbconstruction.com/#website",
      "url": "https://www.tandbconstruction.com",
      "name": "T&B Remodeling & Construction Pittsburgh",
      "description": "Pittsburgh's trusted remodeling contractor since 2012",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.tandbconstruction.com/#contact",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>T&B Remodeling & Construction Pittsburgh PA | Kitchen, Bathroom, Flooring | Est. 2012</title>
        <meta name="description" content="T&B Remodeling & Construction LLC — Pittsburgh's top-rated remodeling contractor since 2012. Kitchen remodels, bathroom renovations, flooring, painting, decking, concrete & more. Call 412-879-0701 for a FREE estimate!" />
        <meta name="keywords" content="Pittsburgh remodeling, Pittsburgh contractor, kitchen remodel Pittsburgh, bathroom remodel Pittsburgh, flooring Pittsburgh, home renovation Pittsburgh, concrete Pittsburgh, deck builder Pittsburgh, painting contractor Pittsburgh, Allegheny County remodeling, T&B Remodeling, TB Construction Pittsburgh" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="T&B Remodeling & Construction LLC" />
        <link rel="canonical" href="https://www.tandbconstruction.com" />

        {/* Open Graph */}
        <meta property="og:title" content="T&B Remodeling & Construction | Pittsburgh, PA | Est. 2012" />
        <meta property="og:description" content="Pittsburgh's most trusted family-owned remodeling contractor. Kitchens, bathrooms, flooring, painting, decking & concrete. T&B Got It Done! Call 412-879-0701." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tandbconstruction.com" />
        <meta property="og:image" content="/tb-logo.png" />
        <meta property="og:image:alt" content="T&B Remodeling & Construction LLC Pittsburgh PA" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="T&B Remodeling & Construction" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="T&B Remodeling & Construction | Pittsburgh PA" />
        <meta name="twitter:description" content="Pittsburgh's #1 family-owned remodeling contractor. Kitchens, bathrooms, flooring & more. T&B Got It Done!" />
        <meta name="twitter:image" content="/tb-logo.png" />

        {/* Facebook */}
        <meta property="fb:app_id" content="966242223397117" />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="US-PA" />
        <meta name="geo.placename" content="Pittsburgh" />
        <meta name="geo.position" content="40.4406;-79.9959" />
        <meta name="ICBM" content="40.4406, -79.9959" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(SCHEMA)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <CostEstimator />
        <Stats />
        <Testimonials />
        <Gallery />
        <RemodelVisualizer />
        <SocialFeed />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
