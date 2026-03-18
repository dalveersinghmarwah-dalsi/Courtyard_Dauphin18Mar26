import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BotanicalDivider from "@/components/BotanicalDivider";
import FeatureBadge from "@/components/FeatureBadge";
import { Phone, MapPin, Users } from "lucide-react";

/**
 * Home Page - Sophisticated Warm Design
 * Elegant layout with scroll animations, botanical elements, and graceful interactions
 */

const testimonials = [
  {
    name: "Sarah & Michael",
    role: "Wedding Couple",
    content:
      "The Courtyard on Dauphin was the perfect backdrop for our wedding. The historic charm combined with modern amenities made everything seamless and magical.",
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
  const section1Ref = useScrollAnimation();
  const section2Ref = useScrollAnimation();
  const section3Ref = useScrollAnimation();
  const testimonialRefs = testimonials.map(() => useScrollAnimation());

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-muted/30 to-accent/20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-tight mb-6 font-serif">
              The Courtyard on Dauphin
            </h1>
          </div>

          <div className="mb-12 fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              An experience tailored for <span className="font-semibold">you.</span>
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Schedule a Tour
            </a>
            <a
              href="/venue"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Explore the Venue
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section
        ref={section1Ref}
        className="py-20 md:py-32 bg-white fade-in-up"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
              See a Virtual Tour or Schedule an In-Person Visit
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Let us help you book an unforgettable experience. Picture a
              stress-free event planning experience where you don't have to
              worry about the nitty-gritty details.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:251-333-7368"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Phone size={18} />
              Call to Book A Tour
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* What Makes Us Perfect Section */}
      <section
        ref={section2Ref}
        className="py-20 md:py-32 bg-muted/20 fade-in-up"
      >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
              What Makes The Courtyard on Dauphin Perfect For...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {[
              {
                title: "Weddings?",
                description:
                  "You can use the same venue for both the ceremony and reception. Our staff can even adjust the layout to prepare for the reception festivities after the ceremony.",
              },
              {
                title: "Corporate Events?",
                description:
                  "Corporate events hosted at a venue provide a professional and polished atmosphere for businesses to showcase their brand and impress clients.",
              },
              {
                title: "Personal Celebrations?",
                description:
                  "From birthday parties to anniversaries and reunions, our flexible space adapts to your vision and creates memorable moments.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-4 font-serif">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <BotanicalDivider />

          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center font-serif">
              Explore Your Options
            </h3>
            <div className="space-y-6">
              <FeatureBadge number={1}>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Professional Planning Support
                  </h4>
                  <p className="text-foreground/70">
                    Our dedicated event specialists handle every detail, from
                    catering coordination to day-of logistics.
                  </p>
                </div>
              </FeatureBadge>
              <FeatureBadge number={2}>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Flexible Space & Capacity
                  </h4>
                  <p className="text-foreground/70">
                    From intimate gatherings of 25 to grand celebrations of
                    250+ guests, our space adapts to your vision.
                  </p>
                </div>
              </FeatureBadge>
              <FeatureBadge number={3}>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Historic Location with Modern Amenities
                  </h4>
                  <p className="text-foreground/70">
                    Located in the heart of downtown Mobile's historic district,
                    offering authentic Southern charm with modern conveniences.
                  </p>
                </div>
              </FeatureBadge>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={section3Ref}
        className="py-20 md:py-32 bg-primary text-primary-foreground fade-in-up"
      >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              What Our Clients Have Said About Us...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={testimonialRefs[index]}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-primary-foreground/90 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            Ready to Find Out More?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let us help you book an unforgettable experience at The Courtyard
            on Dauphin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="tel:251-333-7368"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={18} />
              251-333-RENT
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
