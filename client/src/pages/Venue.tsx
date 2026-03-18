import Layout from "@/components/Layout";
import CTAButton from "@/components/CTAButton";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { MapPin, Clock, Users, Utensils } from "lucide-react";

/**
 * Design Philosophy: Refined Southern Elegance
 * - Photography-driven layout with minimal text
 * - Asymmetric grid showcasing venue images
 * - Gold accents and serif headings
 */

export default function Venue() {
  useSEO(seoMetadata.venue);
  const amenities = [
    {
      icon: Users,
      title: "Flexible Capacity",
      description: "Accommodate 25 to 250+ guests with configurable layouts",
    },
    {
      icon: Utensils,
      title: "Catering-Friendly",
      description: "Full kitchen facilities and vendor coordination available",
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Day and evening events with flexible rental periods",
    },
    {
      icon: MapPin,
      title: "Historic Location",
      description: "Downtown Mobile with nearby parking and accommodations",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            The Venue
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover the historic charm and modern elegance of The Courtyard on
            Dauphin
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Historic Courtyard, Modern Amenities
              </h2>
              <div className="w-12 h-1 bg-secondary mb-8"></div>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Built in the 1800s, The Courtyard on Dauphin is one of Mobile's
                most charming and distinctive venues. Our historic courtyard
                provides an authentic Southern backdrop that's both elegant and
                intimate.
              </p>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Located at 751 Dauphin Street in the heart of downtown Mobile,
                we're surrounded by historic architecture, fine dining, and
                cultural attractions. Our location is perfect for out-of-town
                guests looking to experience authentic Mobile hospitality.
              </p>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Whether you're planning a wedding, corporate event, or personal
                celebration, our flexible space and dedicated team will ensure
                your event is unforgettable.
              </p>
              <CTAButton href="/contact" size="lg">
                Schedule a Tour
              </CTAButton>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg aspect-square flex items-center justify-center border border-border">
              <div className="text-center">
                <p className="text-foreground/50 text-sm">
                  [Venue Exterior - Historic Courtyard Photo]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Venue Features
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-secondary mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-foreground/70">{amenity.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Photo Gallery
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary/10 to-accent/10 aspect-square rounded-lg flex items-center justify-center border border-border hover:shadow-md transition-shadow cursor-pointer"
              >
                <p className="text-foreground/50 text-sm text-center px-4">
                  [Gallery Image {index + 1}]
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/gallery" variant="secondary">
              View Full Gallery
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg aspect-square flex items-center justify-center border border-border">
              <div className="text-center">
                <p className="text-foreground/50 text-sm">
                  [Google Maps Embed]
                </p>
              </div>
            </div>

            {/* Location Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Location & Hours
              </h2>
              <div className="w-12 h-1 bg-secondary mb-8"></div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Address
                  </h3>
                  <p className="text-foreground/70">
                    751 Dauphin Street
                    <br />
                    Mobile, AL 36602
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:251-333-7368"
                    className="text-secondary hover:underline font-semibold"
                  >
                    251-333-RENT
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
                  <a
                    href="mailto:info@rentyellowhammer.com"
                    className="text-secondary hover:underline"
                  >
                    info@rentyellowhammer.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Hours
                  </h3>
                  <p className="text-foreground/70">
                    Tours available by appointment
                    <br />
                    Monday - Friday: 10am - 5pm
                    <br />
                    Saturday - Sunday: By request
                  </p>
                </div>

                <div className="pt-6">
                  <CTAButton href="/contact" size="lg">
                    Schedule a Tour
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See The Courtyard?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a private tour and experience the magic of our historic
            venue firsthand.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Book Your Tour
          </CTAButton>
        </div>
      </section>
    </Layout>
  );
}
