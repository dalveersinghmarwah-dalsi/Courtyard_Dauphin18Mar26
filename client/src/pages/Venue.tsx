import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BotanicalDivider from "@/components/BotanicalDivider";
import FeatureBadge from "@/components/FeatureBadge";
import { MapPin, Wifi, Users, Utensils } from "lucide-react";

/**
 * The Venue Page
 * Detailed venue information with amenities and photo gallery
 * Sophisticated warm design with scroll animations
 */

export default function Venue() {
  useSEO(seoMetadata.venue);
  const section1Ref = useScrollAnimation();
  const section2Ref = useScrollAnimation();
  const section3Ref = useScrollAnimation();

  const amenities = [
    {
      icon: Users,
      title: "Flexible Capacity",
      description: "Accommodate 25 to 250+ guests with adjustable layouts",
    },
    {
      icon: Utensils,
      title: "Full-Service Catering",
      description: "Work with our recommended caterers or bring your own",
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "High-speed internet, climate control, and AV capabilities",
    },
    {
      icon: MapPin,
      title: "Historic Location",
      description: "Downtown Mobile's most sought-after event venue",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-muted/30 to-accent/20">
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight mb-6 font-serif fade-in-up">
            The Courtyard on Dauphin
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 fade-in-up" style={{ animationDelay: "0.2s" }}>
            Historic Elegance Meets Modern Sophistication
          </p>
        </div>
      </section>

      {/* About the Space */}
      <section ref={section1Ref} className="py-20 md:py-32 bg-white fade-in-up">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-serif">
              About The Space
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              The Courtyard on Dauphin is a stunning boutique event venue
              located in the heart of historic downtown Mobile, Alabama. With
              its elegant architecture, natural lighting, and versatile layout,
              it's the perfect setting for weddings, corporate events, and
              personal celebrations.
            </p>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Our dedicated event specialists work closely with you to
              understand your vision and ensure that every detail is executed
              flawlessly. From intimate gatherings to grand celebrations, we
              have the expertise and resources to make your event unforgettable.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Whether you're planning a ceremony and reception, a corporate
              retreat, or a personal milestone celebration, The Courtyard on
              Dauphin offers the perfect combination of historic charm and
              modern amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section ref={section2Ref} className="py-20 md:py-32 bg-muted/20 fade-in-up">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center font-serif">
            Venue Amenities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 font-serif">
                        {amenity.title}
                      </h3>
                      <p className="text-foreground/70">{amenity.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <BotanicalDivider />

          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center font-serif">
              Why Choose Us
            </h3>
            <div className="space-y-6">
              <FeatureBadge number={1}>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Professional Event Coordination
                  </h4>
                  <p className="text-foreground/70">
                    Our experienced team handles all the details so you can
                    focus on celebrating.
                  </p>
                </div>
              </FeatureBadge>
              <FeatureBadge number={2}>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Customizable Spaces
                  </h4>
                  <p className="text-foreground/70">
                    Adjust layouts and configurations to match your event
                    vision perfectly.
                  </p>
                </div>
              </FeatureBadge>
              <FeatureBadge number={3}>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Vendor Network
                  </h4>
                  <p className="text-foreground/70">
                    Access to trusted local caterers, florists, and service
                    providers.
                  </p>
                </div>
              </FeatureBadge>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section ref={section3Ref} className="py-20 md:py-32 bg-white fade-in-up">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center font-serif">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-muted to-accent rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
              >
                <span className="text-muted-foreground font-semibold">
                  Gallery Image {i}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/gallery"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-block"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Book Your Event?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule a tour of The Courtyard on Dauphin and discover why it's
            the perfect venue for your special event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Schedule a Tour
            </a>
            <a
              href="tel:251-333-7368"
              className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
