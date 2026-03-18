import * as React from "react";
import Layout from "@/components/Layout";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import CTAButton from "@/components/CTAButton";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { Cake, Gift, Users, Music } from "lucide-react";

/**
 * Design Philosophy: Refined Southern Elegance
 * - SEO-optimized landing page for personal events
 * - Focus on variety of event types
 * - Conversion-focused with prominent CTAs
 */

const partyTestimonials = [
  {
    name: "Margaret & Family",
    role: "50th Birthday Celebration",
    content:
      "The Courtyard provided the perfect setting for my milestone birthday. The elegant atmosphere and attentive staff made the celebration truly special.",
    rating: 5,
  },
  {
    name: "Lisa & Tom",
    role: "Anniversary Party",
    content:
      "We celebrated our 25th anniversary here and it was magical. The historic charm and beautiful courtyard created an unforgettable evening.",
    rating: 5,
  },
  {
    name: "Jennifer",
    role: "Baby Shower Host",
    content:
      "Hosted my daughter's baby shower at The Courtyard and everything was perfect. The space is beautiful and the team was so helpful.",
    rating: 5,
  },
];

const eventTypes = [
  {
    icon: Cake,
    title: "Birthday Parties",
    description:
      "From milestone birthdays to intimate gatherings, celebrate in style.",
  },
  {
    icon: Gift,
    title: "Baby Showers",
    description:
      "Create lasting memories for expecting parents in our elegant space.",
  },
  {
    icon: Users,
    title: "Anniversaries",
    description:
      "Celebrate your love story with an intimate anniversary celebration.",
  },
  {
    icon: Music,
    title: "Reunions",
    description:
      "Reconnect with friends and family in a memorable setting.",
  },
];

export default function Parties() {
  useSEO(seoMetadata.parties);
  const [animateHero, setAnimateHero] = React.useState(false);

  React.useEffect(() => {
    setAnimateHero(true);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] pt-32 overflow-hidden bg-gradient-to-br from-background via-muted/10 to-accent/8">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/6 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/6 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className={`text-6xl md:text-8xl font-bold text-primary leading-tight mb-4 font-serif transition-all duration-1000 ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Parties & Events
          </h1>
          <p className={`text-xl md:text-2xl text-foreground/80 font-light transition-all duration-1000 delay-200 ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Celebrate life's special moments in our historic, elegant venue
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
              Perfect for Every Celebration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {event.title}
                  </h3>
                  <p className="text-foreground/70">{event.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg aspect-square flex items-center justify-center border border-border">
              <p className="text-foreground/50 text-sm">[Party Event Photo]</p>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Create Unforgettable Memories
              </h2>
              <div className="w-12 h-1 bg-secondary mb-8"></div>

              <p className="text-foreground/70 mb-4 leading-relaxed">
                Whether you're celebrating a milestone birthday, hosting a baby
                shower, or gathering for an anniversary, The Courtyard on Dauphin
                provides the perfect setting for your special occasion.
              </p>

              <p className="text-foreground/70 mb-4 leading-relaxed">
                Our historic courtyard and elegant indoor spaces create an
                atmosphere of sophistication and warmth. With flexible capacity
                from 25 to 250+ guests, we can accommodate gatherings of any size.
              </p>

              <p className="text-foreground/70 mb-8 leading-relaxed">
                Our experienced event team handles all the details, from setup to
                cleanup, so you can focus on enjoying your celebration with loved
                ones.
              </p>

              <CTAButton href="#contact-form" size="lg">
                Get Event Information
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        testimonials={partyTestimonials}
        title="Celebrations We've Hosted"
      />

      {/* Event Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What's Included
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              "Elegant venue space",
              "Tables and chairs",
              "Basic setup and breakdown",
              "Flexible rental hours",
              "Parking for guests",
              "Catering coordination",
              "Dedicated event specialist",
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

      {/* Event Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flexible Event Packages
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
            <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
              We offer customizable packages for events of any size and style.
              Contact us for personalized pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Intimate Gathering",
                guests: "25-75 guests",
                description: "Perfect for smaller celebrations",
              },
              {
                name: "Medium Event",
                guests: "75-150 guests",
                description: "Ideal for most celebrations",
              },
              {
                name: "Grand Celebration",
                guests: "150-250+ guests",
                description: "Large-scale events and parties",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {pkg.name}
                </h3>
                <p className="text-secondary font-semibold mb-3">{pkg.guests}</p>
                <p className="text-foreground/70 mb-4">{pkg.description}</p>
                <CTAButton href="#contact-form" variant="outline" size="sm">
                  Get Details
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="contact-form" className="py-16 md:py-24 bg-white">
        <div className="container">
          <LeadForm
            title="Plan Your Celebration"
            description="Tell us about your event and we'll provide detailed information and pricing."
            defaultEventType="birthday"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Event FAQs
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                q: "What is the minimum guest count?",
                a: "We accommodate events of 25 or more guests. For smaller gatherings, please contact us to discuss options.",
              },
              {
                q: "Can we bring our own caterer?",
                a: "Yes! We work with outside caterers and have a list of preferred vendors if you need recommendations.",
              },
              {
                q: "What time can we book the venue?",
                a: "Rental times are flexible and customizable. We offer daytime, evening, and extended rental options.",
              },
              {
                q: "Is there parking available?",
                a: "Yes, we have ample parking for your guests. Street parking and nearby lots are also available.",
              },
              {
                q: "Can we decorate the venue?",
                a: "Absolutely! We encourage personalization. Our team can advise on decoration options that complement the space.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Celebrate?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a tour and let our team help create an unforgettable event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Schedule a Tour
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
