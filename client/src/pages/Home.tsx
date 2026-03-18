import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Home Page - Light Royal Aesthetic with Elegant Patterns
 * Bright, elegant, animated with grace and movement
 */

export default function Home() {
  useSEO(seoMetadata.home);
  const section1Ref = useScrollAnimation();
  const section2Ref = useScrollAnimation();
  const section3Ref = useScrollAnimation();
  const section4Ref = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/15">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/8 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-primary leading-tight mb-6 font-serif fade-in-up animate-in">
            The Courtyard on Dauphin
          </h1>
          <p className="text-xl md:text-2xl text-foreground/75 mb-12 font-light fade-in-up animate-in" style={{ animationDelay: "0.2s" }}>
            An experience tailored for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up animate-in" style={{ animationDelay: "0.4s" }}>
            <a
              href="/contact"
              className="px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Schedule a Tour
            </a>
            <a
              href="/venue"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Explore the Venue
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section ref={section1Ref} className="py-24 md:py-32 bg-white pattern-dots fade-in-up animate-in relative">
        <div className="container max-w-3xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-serif">
              Welcome to Elegance
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Located in the heart of historic downtown Mobile, The Courtyard on Dauphin offers a sophisticated setting for your most important celebrations. Whether you're planning an intimate gathering or a grand celebration, our elegant venue provides the perfect backdrop for unforgettable memories.
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-secondary via-accent to-secondary mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section ref={section2Ref} className="py-24 md:py-32 bg-gradient-to-br from-muted/15 to-accent/10 fade-in-up animate-in pattern-lines relative">
        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center font-serif">
            Events We Host
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Weddings", href: "/weddings", icon: "💍" },
              { title: "Parties & Events", href: "/parties", icon: "🎉" },
              { title: "Corporate", href: "/corporate", icon: "💼" },
              { title: "Gallery", href: "/gallery", icon: "📸" },
            ].map((event, index) => (
              <a
                key={index}
                href={event.href}
                className="group p-8 bg-white rounded-xl text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-muted"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:animate-float">{event.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-serif group-hover:text-secondary transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-foreground/60 text-sm">
                  Discover what makes us perfect for your {event.title.toLowerCase()}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={section3Ref} className="py-24 md:py-32 bg-white fade-in-up animate-in pattern-grid relative">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center font-serif">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Historic Elegance",
                description: "Set in a beautifully preserved historic building with timeless charm and character.",
              },
              {
                title: "Professional Team",
                description: "Our experienced coordinators handle every detail to ensure your event is flawless.",
              },
              {
                title: "Flexible Spaces",
                description: "Adaptable venues accommodate events from intimate gatherings to large celebrations.",
              },
              {
                title: "Prime Location",
                description: "Located in downtown Mobile's most vibrant cultural and dining district.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 border-l-4 border-secondary hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-muted/10 to-transparent rounded-r-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">
                  {item.title}
                </h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={section4Ref} className="py-24 md:py-32 bg-gradient-to-br from-primary to-primary/90 text-white fade-in-up animate-in pattern-fade relative">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-serif">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Michael",
                event: "Wedding",
                quote: "The Courtyard was the perfect venue for our wedding. Elegant, professional, and absolutely beautiful.",
              },
              {
                name: "Jennifer Martinez",
                event: "Corporate Event",
                quote: "Outstanding venue and exceptional service. Our clients were incredibly impressed.",
              },
              {
                name: "The Johnson Family",
                event: "Anniversary Party",
                quote: "A truly special place. We felt like royalty celebrating our milestone here.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white/15 rounded-xl hover:bg-white/25 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm opacity-80">{testimonial.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let us help you create an unforgettable experience at The Courtyard on Dauphin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="tel:251-333-7368"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Call 251-333-RENT
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
