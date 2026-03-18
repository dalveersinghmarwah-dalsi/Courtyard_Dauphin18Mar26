import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * The Venue Page - Light Royal Aesthetic
 */

export default function Venue() {
  useSEO(seoMetadata.venue);
  const section1Ref = useScrollAnimation();
  const section2Ref = useScrollAnimation();
  const section3Ref = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-primary leading-tight mb-6 font-serif fade-in-up animate-in">
            The Venue
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light fade-in-up animate-in" style={{ animationDelay: "0.2s" }}>
            Historic elegance meets modern sophistication
          </p>
        </div>
      </section>

      {/* About Section */}
      <section ref={section1Ref} className="py-24 md:py-32 bg-white fade-in-up animate-in">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-muted to-accent/20 rounded-xl aspect-square flex items-center justify-center hover:shadow-lg transition-all duration-300">
              <p className="text-foreground/50 text-sm">[Venue Photo]</p>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
                A Space for Celebration
              </h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Nestled in the heart of historic downtown Mobile, The Courtyard on Dauphin offers an elegant setting for your most important moments. Our beautifully preserved venue combines historic charm with modern amenities.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Whether you're planning an intimate gathering or a grand celebration, our flexible spaces adapt to your vision, ensuring your event is as unique as you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section ref={section2Ref} className="py-24 md:py-32 bg-gradient-to-br from-muted/20 to-accent/10 fade-in-up animate-in">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center font-serif">
            Amenities & Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Historic courtyard setting",
              "Flexible indoor and outdoor spaces",
              "Professional lighting and sound",
              "Full kitchen facilities",
              "Climate-controlled environments",
              "Ample parking for guests",
              "Professional event coordination",
              "Vendor-friendly policies",
            ].map((amenity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-muted hover:scale-105"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-accent flex-shrink-0 mt-1 animate-soft-pulse"></div>
                <p className="text-foreground/70 font-medium">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity Section */}
      <section ref={section3Ref} className="py-24 md:py-32 bg-white fade-in-up animate-in">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center font-serif">
            Flexible Capacity
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { size: "Intimate", count: "25-75 guests", desc: "Perfect for small celebrations" },
              { size: "Standard", count: "75-150 guests", desc: "Ideal for most events" },
              { size: "Grand", count: "150-250+ guests", desc: "For large celebrations" },
            ].map((capacity, index) => (
              <div
                key={index}
                className="text-center p-8 border-t-4 border-secondary bg-gradient-to-b from-muted/10 to-transparent rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-primary mb-2 font-serif">
                  {capacity.size}
                </h3>
                <p className="text-lg font-semibold text-secondary mb-2">
                  {capacity.count}
                </p>
                <p className="text-foreground/70">{capacity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary to-primary/95 text-primary-foreground">
        <div className="container text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Tour?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Experience the elegance of The Courtyard on Dauphin in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Schedule a Tour
            </a>
            <a
              href="tel:251-333-7368"
              className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Call 251-333-RENT
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
