import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Home Page - Royal Luxury Aesthetic
 * Clean, elegant, simple design with regal colors
 */

export default function Home() {
  useSEO(seoMetadata.home);
  const section1Ref = useScrollAnimation();
  const section2Ref = useScrollAnimation();
  const section3Ref = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary/95">
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground leading-tight mb-6 font-serif">
            The Courtyard on Dauphin
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 font-light">
            An experience tailored for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Schedule a Tour
            </a>
            <a
              href="/venue"
              className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Explore the Venue
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section ref={section1Ref} className="py-24 md:py-32 bg-white fade-in-up">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-serif">
              Welcome to Elegance
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Located in the heart of historic downtown Mobile, The Courtyard on Dauphin offers a sophisticated setting for your most important celebrations. Whether you're planning an intimate gathering or a grand celebration, our elegant venue provides the perfect backdrop for unforgettable memories.
            </p>
            <div className="w-12 h-1 bg-secondary mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section ref={section2Ref} className="py-24 md:py-32 bg-muted/10 fade-in-up">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center font-serif">
            Events We Host
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Weddings", href: "/weddings" },
              { title: "Parties & Events", href: "/parties" },
              { title: "Corporate", href: "/corporate" },
              { title: "Gallery", href: "/gallery" },
            ].map((event, index) => (
              <a
                key={index}
                href={event.href}
                className="group p-8 bg-white rounded-lg text-center hover:shadow-lg transition-all duration-300"
              >
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
      <section ref={section3Ref} className="py-24 md:py-32 bg-white fade-in-up">
        <div className="container max-w-4xl mx-auto px-4">
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
              <div key={index} className="p-6 border-l-4 border-secondary">
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
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4">
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
              <div key={index} className="p-6 bg-primary-foreground/10 rounded-lg">
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
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="tel:251-333-7368"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Call 251-333-RENT
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
