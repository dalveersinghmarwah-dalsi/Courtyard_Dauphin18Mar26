import * as React from "react";
import Layout from "@/components/Layout";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import CTAButton from "@/components/CTAButton";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { Heart, Sparkles, Users, Music } from "lucide-react";

/**
 * Design Philosophy: Refined Southern Elegance
 * - SEO-optimized landing page for wedding searches
 * - Conversion-focused with prominent CTAs
 * - Testimonials and social proof
 * - Detailed service descriptions
 */

const weddingTestimonials = [
  {
    name: "Sarah & Michael",
    role: "Wedding Couple - June 2024",
    content:
      "The Courtyard on Dauphin was absolutely perfect for our wedding. The historic setting provided the most romantic backdrop, and the team handled every detail flawlessly. Our guests are still talking about it!",
    rating: 5,
  },
  {
    name: "Emily & James",
    role: "Wedding Couple - September 2024",
    content:
      "From the moment we toured the venue, we knew it was the one. The elegant courtyard, professional staff, and attention to detail made our wedding day truly magical.",
    rating: 5,
  },
  {
    name: "Jessica & David",
    role: "Wedding Couple - April 2024",
    content:
      "We couldn't have asked for a better venue or team. The Courtyard's unique character and the staff's dedication to making our vision come true exceeded all expectations.",
    rating: 5,
  },
];

const weddingServices = [
  {
    icon: Heart,
    title: "Ceremony Space",
    description:
      "Beautiful indoor and outdoor ceremony options with flexible configurations for your ideal setup.",
  },
  {
    icon: Sparkles,
    title: "Reception Venue",
    description:
      "Elegant reception space with full catering facilities and room for up to 250 guests.",
  },
  {
    icon: Users,
    title: "Guest Accommodations",
    description:
      "Partner properties available for out-of-town guests looking for nearby lodging.",
  },
  {
    icon: Music,
    title: "Entertainment",
    description:
      "Full support for DJ, live band, or other entertainment with excellent acoustics.",
  },
];

export default function Weddings() {
  useSEO(seoMetadata.weddings);
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
            Weddings
          </h1>
          <p className={`text-xl md:text-2xl text-foreground/80 font-light transition-all duration-1000 delay-200 ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Create unforgettable memories in our historic, elegant venue
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
              Why Couples Choose The Courtyard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weddingServices.map((service, index) => {
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

      {/* Wedding Details */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg aspect-square flex items-center justify-center border border-border">
              <p className="text-foreground/50 text-sm">[Wedding Ceremony Photo]</p>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Your Perfect Wedding Day
              </h2>
              <div className="w-12 h-1 bg-secondary mb-8"></div>

              <p className="text-foreground/70 mb-4 leading-relaxed">
                Every wedding is unique, and we believe your venue should reflect
                your personal style and vision. The Courtyard on Dauphin provides
                the perfect canvas for your dream wedding.
              </p>

              <p className="text-foreground/70 mb-4 leading-relaxed">
                Our historic courtyard offers timeless elegance, while our
                flexible indoor and outdoor spaces accommodate ceremonies and
                receptions of any size. From intimate gatherings of 50 to grand
                celebrations of 250+, we have the perfect setup for you.
              </p>

              <p className="text-foreground/70 mb-8 leading-relaxed">
                Our experienced event team will work with you every step of the
                way, from initial planning through your wedding day. We coordinate
                with caterers, florists, photographers, and other vendors to bring
                your vision to life.
              </p>

              <CTAButton href="#contact-form" size="lg">
                Get Wedding Information
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Testimonials */}
      <Testimonials testimonials={weddingTestimonials} title="Real Weddings, Real Stories" />

      {/* Wedding Packages Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flexible Wedding Packages
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
            <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
              We offer customizable packages to fit your budget and vision. Every
              wedding is unique, so we work with you to create the perfect plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ceremony Only",
                description: "Perfect for intimate ceremonies",
              },
              {
                name: "Ceremony & Reception",
                description: "Complete wedding day experience",
              },
              {
                name: "Full-Day Rental",
                description: "Extended access for rehearsal and events",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-lg p-8 border border-border hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {pkg.name}
                </h3>
                <p className="text-foreground/70 mb-4">{pkg.description}</p>
                <p className="text-sm text-foreground/60 mb-4">
                  Custom pricing based on your needs
                </p>
                <CTAButton href="#contact-form" variant="outline" size="sm">
                  Get Details
                </CTAButton>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-4">
              Contact us for detailed pricing and package information
            </p>
            <CTAButton href="/contact" size="lg">
              Request Wedding Pricing
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="contact-form" className="py-16 md:py-24 bg-background">
        <div className="container">
          <LeadForm
            title="Plan Your Wedding"
            description="Tell us about your wedding vision and we'll provide detailed information and pricing."
            defaultEventType="wedding"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Wedding FAQs
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                q: "What is the maximum guest capacity?",
                a: "The Courtyard can accommodate up to 250 guests for receptions and 150 for ceremonies, with flexible configurations available.",
              },
              {
                q: "Do you allow outside catering?",
                a: "We work with approved caterers and also have preferred vendor partnerships. Our team can coordinate with your chosen vendor.",
              },
              {
                q: "What is included in the venue rental?",
                a: "Venue rental includes access to our ceremony and reception spaces, tables, chairs, and basic setup. Additional services and packages are available.",
              },
              {
                q: "Can we have an outdoor ceremony?",
                a: "Yes! Our historic courtyard is perfect for outdoor ceremonies, with indoor backup options available.",
              },
              {
                q: "What is your cancellation policy?",
                a: "Cancellation policies vary by booking date. Please contact us for specific details on your event.",
              },
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-primary mb-3">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-4">
              Have more questions? Contact our wedding specialists.
            </p>
            <CTAButton href="/contact" size="lg">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Plan Your Wedding?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a tour of The Courtyard and let our team help bring your
            wedding vision to life.
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
