import Layout from "@/components/Layout";
import LeadForm from "@/components/LeadForm";
import CTAButton from "@/components/CTAButton";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Refined Southern Elegance
 * - Lead capture focused
 * - Transparent pricing approach (custom quotes)
 * - Emphasis on value and flexibility
 */

const pricingTiers = [
  {
    name: "Intimate Gathering",
    capacity: "25-75 guests",
    features: [
      "Venue rental (4 hours)",
      "Tables and chairs",
      "Basic setup and breakdown",
      "Parking for guests",
      "Event coordinator",
      "Flexible date options",
    ],
    note: "Perfect for small celebrations",
  },
  {
    name: "Standard Event",
    capacity: "75-150 guests",
    features: [
      "Venue rental (6 hours)",
      "Tables and chairs",
      "Setup and breakdown",
      "Parking for guests",
      "Dedicated event coordinator",
      "Catering coordination",
      "Flexible configurations",
    ],
    note: "Most popular option",
    featured: true,
  },
  {
    name: "Grand Celebration",
    capacity: "150-250+ guests",
    features: [
      "Extended venue rental (8+ hours)",
      "Tables and chairs",
      "Full setup and breakdown",
      "Premium parking",
      "Dedicated event coordinator",
      "Full catering support",
      "Custom configurations",
      "Day-of coordination",
    ],
    note: "For large-scale events",
  },
];

export default function Pricing() {
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    setAnimateHero(true);
  }, []);

  useSEO(seoMetadata.pricing);
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] pt-32 overflow-hidden bg-gradient-to-br from-background via-muted/10 to-accent/8">


        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-accent/6 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/6 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
          <h1 className={`text-6xl md:text-8xl font-bold text-primary leading-tight mb-6 font-serif transition-all duration-1000 ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} animate-very-slow-fade-in animate-continuous-float`}>
            Transparent Pricing
          </h1>
          <p className={`text-xl md:text-2xl text-foreground/80 mb-12 font-light transition-all duration-1000 delay-500 ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} animate-very-slow-float`}>
            Flexible packages tailored to your event and budget
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Event Packages
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
            <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
              All packages include venue access, tables, chairs, and a dedicated
              event coordinator. Custom packages available for unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden transition-all ${
                  tier.featured
                    ? "ring-2 ring-secondary shadow-lg scale-105"
                    : "border border-border shadow-sm hover:shadow-md"
                } ${tier.featured ? "bg-white" : "bg-white"}`}
              >
                {/* Header */}
                <div
                  className={`p-8 ${
                    tier.featured
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-gradient-to-r from-secondary/10 to-accent/10"
                  }`}
                >
                  <h3 className={`text-2xl font-bold mb-2 ${
                    tier.featured ? "" : "text-primary"
                  }`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm font-semibold ${
                    tier.featured ? "opacity-90" : "text-secondary"
                  }`}>
                    {tier.capacity}
                  </p>
                  {tier.note && (
                    <p className={`text-xs mt-2 ${
                      tier.featured ? "opacity-75" : "text-foreground/60"
                    }`}>
                      {tier.note}
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className={`flex-shrink-0 mt-0.5 ${
                            tier.featured
                              ? "text-secondary"
                              : "text-accent"
                          }`}
                        />
                        <span className="text-foreground/70 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <CTAButton
                    href="#contact-form"
                    variant={tier.featured ? "primary" : "outline"}
                    className="w-full"
                  >
                    Get Pricing
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What's Included in Every Package
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              "Historic venue space",
              "Tables and chairs",
              "Setup and breakdown",
              "Parking for guests",
              "Dedicated event coordinator",
              "Catering coordination",
              "Flexible rental hours",
              "Weather contingency planning",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary-foreground text-sm font-bold">
                    ✓
                  </span>
                </div>
                <p className="text-foreground/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Pricing Details
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                How We Price Events
              </h3>
              <p className="text-foreground/70 mb-4">
                Our pricing is transparent and based on several factors:
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">•</span>
                  <span>Guest count and event capacity needed</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">•</span>
                  <span>Event date and day of week</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">•</span>
                  <span>Rental duration and hours</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">•</span>
                  <span>Additional services and amenities</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Additional Costs to Consider
              </h3>
              <p className="text-foreground/70 mb-4">
                Beyond the venue rental, you may want to budget for:
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">•</span>
                  <span>Catering and beverages</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">•</span>
                  <span>Decorations and florals</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">•</span>
                  <span>Photography and videography</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">•</span>
                  <span>Entertainment and music</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Payment & Booking
              </h3>
              <p className="text-foreground/70">
                We require a deposit to secure your event date, with the balance
                due prior to your event. Flexible payment plans are available.
                Contact us for specific terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="contact-form" className="py-16 md:py-24 bg-white">
        <div className="container">
          <LeadForm
            title="Get Custom Pricing"
            description="Tell us about your event and we'll provide a detailed quote tailored to your needs."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Pricing FAQs
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                q: "Are there discounts for off-season events?",
                a: "Yes, we offer flexible pricing for off-peak dates. Contact us to discuss your specific dates.",
              },
              {
                q: "What is your cancellation policy?",
                a: "Cancellation policies vary based on booking date. Please contact us for specific details on your event.",
              },
              {
                q: "Can we negotiate pricing for large groups?",
                a: "Absolutely! We work with you to create a package that fits your budget and needs.",
              },
              {
                q: "Is there a minimum guest count?",
                a: "We accommodate events of 25 or more guests. For smaller gatherings, please contact us.",
              },
              {
                q: "What if we need to extend our rental time?",
                a: "Extensions are available based on availability. Hourly rates apply for additional time.",
              },
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-primary mb-3">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Event?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to get a custom quote and check availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Request Quote
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
