import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import CTAButton from "@/components/CTAButton";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { MapPin, Users, Sparkles } from "lucide-react";

/**
 * Design Philosophy: Refined Southern Elegance
 * - Asymmetric layout with generous whitespace
 * - Serif typography for headings, sans-serif for body
 * - Warm gold accents and deep charcoal text
 * - Photography-focused with minimal text
 */

const testimonials = [
  {
    name: "Sarah & Michael",
    role: "Wedding Couple",
    content:
      "The Courtyard on Dauphin was the perfect backdrop for our wedding. The historic charm combined with modern amenities made everything seamless.",
    rating: 5,
  },
  {
    name: "Jennifer Martinez",
    role: "Corporate Event Planner",
    content:
      "Outstanding venue for our company retreat. The team was professional, accommodating, and the space was absolutely beautiful.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Birthday Celebration Host",
    content:
      "Hosted my 50th birthday party here and it was unforgettable. The courtyard ambiance is truly magical, especially in the evening.",
    rating: 5,
  },
];

export default function Home() {
  useSEO(seoMetadata.home);
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="The Courtyard on Dauphin"
        subtitle="A historic boutique venue in downtown Mobile, Alabama, perfect for weddings, celebrations, and corporate events."
        ctaText="Book a Tour"
        ctaHref="/contact"
        ctaSecondary={{
          text: "Explore the Venue",
          href: "/venue",
        }}
      />

      {/* Venue Highlights */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Highlight 1 */}
            <div className="flex flex-col items-start">
              <div className="mb-6">
                <MapPin className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Historic Location
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Located in the heart of downtown Mobile's historic district, our
                venue offers authentic Southern charm with modern amenities.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="flex flex-col items-start">
              <div className="mb-6">
                <Users className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Flexible Capacity
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                From intimate gatherings of 25 to grand celebrations of 250+
                guests, our space adapts to your vision and guest count.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="flex flex-col items-start">
              <div className="mb-6">
                <Sparkles className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Full-Service Support
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Our dedicated event specialists handle every detail, from
                catering coordination to day-of logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose The Courtyard?
              </h2>
              <div className="w-12 h-1 bg-secondary mb-8"></div>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                The Courtyard on Dauphin is more than just a venue—it's a
                destination. Our historic courtyard, originally built in the
                1800s, provides an authentic backdrop for your most important
                celebrations.
              </p>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                We believe in personalized service. Every event is unique, and
                our team works closely with you to bring your vision to life.
                Whether you're planning an intimate dinner or a grand wedding,
                we're here to make it unforgettable.
              </p>
              <CTAButton href="/venue" variant="secondary">
                Learn More About Us
              </CTAButton>
            </div>

            {/* Placeholder for Image */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg aspect-square flex items-center justify-center border border-border">
              <div className="text-center">
                <p className="text-foreground/50 text-sm">
                  [Venue Image - High-quality courtyard photo]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* Event Types Preview */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Perfect for Every Occasion
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Weddings */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 h-48 flex items-center justify-center">
                <p className="text-foreground/40">[Wedding Image]</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Weddings</h3>
                <p className="text-foreground/70 mb-6">
                  From intimate ceremonies to grand receptions, create your
                  perfect wedding day.
                </p>
                <CTAButton href="/weddings" variant="outline" size="sm">
                  Learn More
                </CTAButton>
              </div>
            </div>

            {/* Parties & Personal Events */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 h-48 flex items-center justify-center">
                <p className="text-foreground/40">[Party Image]</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Parties & Personal Events
                </h3>
                <p className="text-foreground/70 mb-6">
                  Celebrate life's milestones with birthdays, showers, and more.
                </p>
                <CTAButton href="/parties" variant="outline" size="sm">
                  Learn More
                </CTAButton>
              </div>
            </div>

            {/* Corporate Events */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 h-48 flex items-center justify-center">
                <p className="text-foreground/40">[Corporate Image]</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Corporate Events
                </h3>
                <p className="text-foreground/70 mb-6">
                  Impress clients and energize teams with our professional space.
                </p>
                <CTAButton href="/corporate" variant="outline" size="sm">
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our event specialists today to schedule a tour and discuss
            your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Book a Tour
            </CTAButton>
            <a
              href="tel:251-333-7368"
              className="px-8 py-4 text-lg font-semibold border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Call 251-333-RENT
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
