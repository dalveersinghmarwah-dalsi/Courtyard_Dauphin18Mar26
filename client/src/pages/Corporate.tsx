import * as React from "react";
import Layout from "@/components/Layout";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import CTAButton from "@/components/CTAButton";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { Briefcase, Users, Lightbulb, Award } from "lucide-react";

/**
 * Design Philosophy: Refined Southern Elegance
 * - SEO-optimized landing page for corporate events
 * - Professional tone with business focus
 * - Conversion-focused with prominent CTAs
 */

const corporateTestimonials = [
  {
    name: "Jennifer Martinez",
    role: "Event Coordinator, Fortune 500 Company",
    content:
      "The Courtyard provided the perfect setting for our corporate retreat. The professional atmosphere, excellent facilities, and dedicated team made the event seamless.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    role: "CEO, Local Tech Company",
    content:
      "We hosted our annual client appreciation event here and it was outstanding. The elegant venue impressed our guests and the staff handled everything professionally.",
    rating: 5,
  },
  {
    name: "Amanda Thompson",
    role: "HR Director, Manufacturing Company",
    content:
      "Perfect venue for our team building event. The space accommodated all our needs and the team was incredibly helpful in coordinating all the details.",
    rating: 5,
  },
];

const corporateServices = [
  {
    icon: Briefcase,
    title: "Corporate Retreats",
    description:
      "Inspire teams with off-site meetings in an elegant, distraction-free environment.",
  },
  {
    icon: Users,
    title: "Client Entertainment",
    description:
      "Impress clients and partners in our sophisticated, professional setting.",
  },
  {
    icon: Lightbulb,
    title: "Team Building",
    description:
      "Create lasting connections with team building events and activities.",
  },
  {
    icon: Award,
    title: "Holiday Parties",
    description:
      "Celebrate company achievements with memorable holiday gatherings.",
  },
];

export default function Corporate() {
  useSEO(seoMetadata.corporate);
  const [animateHero, setAnimateHero] = React.useState(false);

  React.useEffect(() => {
    setAnimateHero(true);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/10 to-accent/8">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/6 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/6 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className={`text-6xl md:text-8xl font-bold text-primary leading-tight mb-6 font-serif transition-all duration-1000 ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Corporate Events
          </h1>
          <p className={`text-xl md:text-2xl text-foreground/80 font-light transition-all duration-1000 delay-200 ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Impress clients, energize teams, and celebrate achievements
          </p>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
              Corporate Event Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg aspect-square flex items-center justify-center border border-border">
              <p className="text-foreground/50 text-sm">[Corporate Event Photo]</p>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Excellence
              </h2>
              <div className="w-12 h-1 bg-secondary mb-8"></div>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                The Courtyard on Dauphin is the ideal venue for corporate events,
                retreats, and business gatherings. Our professional team
                understands the unique requirements of corporate events and
                delivers flawless execution.
              </p>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                Whether you're hosting a client appreciation event, team retreat,
                board meeting, or holiday celebration, our elegant space provides
                the perfect backdrop for business success. We handle all logistics
                so you can focus on your event objectives.
              </p>

              <p className="text-foreground/70 mb-8 leading-relaxed">
                Our flexible spaces accommodate groups from 25 to 250+ people, and
                we offer full catering coordination, AV support, and dedicated
                event management.
              </p>

              <CTAButton href="#contact-form" size="lg">
                Get Corporate Pricing
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        testimonials={corporateTestimonials}
        title="Corporate Events We've Hosted"
      />

      {/* Corporate Features */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Professional Amenities
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              "Professional AV and presentation equipment",
              "High-speed WiFi throughout venue",
              "Full catering facilities and coordination",
              "Flexible room configurations",
              "Dedicated event coordinator",
              "Ample parking for attendees",
              "Climate-controlled indoor spaces",
              "Outdoor courtyard option",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary-foreground text-sm font-bold">
                    ✓
                  </span>
                </div>
                <p className="text-foreground/70">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Types of Corporate Events
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Corporate Retreats",
                description:
                  "Multi-day offsite meetings designed to inspire and energize your team.",
              },
              {
                title: "Board Meetings",
                description:
                  "Professional space for executive meetings and strategic planning.",
              },
              {
                title: "Client Entertainment",
                description:
                  "Impress clients and partners with elegant hospitality.",
              },
              {
                title: "Team Building Events",
                description:
                  "Create lasting connections and strengthen team dynamics.",
              },
              {
                title: "Holiday Parties",
                description:
                  "Celebrate company achievements and employee appreciation.",
              },
              {
                title: "Product Launches",
                description:
                  "Showcase your products in an impressive, professional setting.",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {event.title}
                </h3>
                <p className="text-foreground/70">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="contact-form" className="py-20 md:py-32 bg-white">
        <div className="container">
          <LeadForm
            title="Plan Your Corporate Event"
            description="Tell us about your corporate event and we'll provide detailed information and pricing."
            defaultEventType="corporate"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Corporate Event FAQs
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                q: "Do you provide AV and presentation equipment?",
                a: "Yes, we have professional AV equipment available. Our team can assist with setup and technical support.",
              },
              {
                q: "What is your internet connectivity like?",
                a: "We offer high-speed WiFi throughout the venue to support your business needs.",
              },
              {
                q: "Can you accommodate dietary restrictions?",
                a: "Absolutely. We work with caterers to accommodate all dietary needs and preferences.",
              },
              {
                q: "What is the capacity for different event types?",
                a: "We accommodate 25-250+ guests depending on your event format. Theater-style, classroom, banquet, and cocktail configurations are available.",
              },
              {
                q: "Do you offer multi-day rental options?",
                a: "Yes, we offer flexible rental periods including full-day, multi-day, and extended options for retreats.",
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
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Plan Your Corporate Event
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a tour and let our professional team help create a
            successful event.
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
