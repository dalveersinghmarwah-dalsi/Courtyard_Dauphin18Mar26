import Layout from "@/components/Layout";
import LeadForm from "@/components/LeadForm";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Refined Southern Elegance
 * - Lead capture focused
 * - Multiple contact methods
 * - Location information prominent
 */

export default function Contact() {
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    setAnimateHero(true);
  }, []);

  useSEO(seoMetadata.contact);
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
            Get in Touch
          </h1>
          <p className={`text-xl md:text-2xl text-foreground/80 mb-12 font-light transition-all duration-1000 delay-500 ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} animate-very-slow-float`}>
            We'd love to hear about your event. Contact us today to schedule a
            tour or get more information.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Phone</h3>
              <a
                href="tel:251-333-7368"
                className="text-secondary hover:underline font-semibold"
              >
                251-333-RENT
              </a>
              <p className="text-sm text-foreground/60 mt-2">
                Available Monday-Friday, 10am-5pm
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
              <a
                href="mailto:info@rentyellowhammer.com"
                className="text-secondary hover:underline"
              >
                info@rentyellowhammer.com
              </a>
              <p className="text-sm text-foreground/60 mt-2">
                Response within 24 hours
              </p>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Address</h3>
              <p className="text-foreground/70 text-sm">
                751 Dauphin Street
                <br />
                Mobile, AL 36602
              </p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Hours</h3>
              <p className="text-foreground/70 text-sm">
                Mon-Fri: 10am - 5pm
                <br />
                Sat-Sun: By appointment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <LeadForm
            title="Schedule a Tour or Get Information"
            description="Fill out the form below and we'll be in touch within 24 hours to discuss your event."
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Location
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg aspect-square flex items-center justify-center border border-border">
              <div className="text-center">
                <p className="text-foreground/50 text-sm">
                  [Google Maps Embed - 751 Dauphin Street, Mobile, AL]
                </p>
              </div>
            </div>

            {/* Location Info */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Historic Downtown Mobile
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-primary mb-2">Address</h4>
                  <p className="text-foreground/70">
                    751 Dauphin Street
                    <br />
                    Mobile, AL 36602
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2">Parking</h4>
                  <p className="text-foreground/70">
                    Ample on-site and street parking available. Nearby parking
                    lots also available for large events.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Nearby Attractions
                  </h4>
                  <p className="text-foreground/70">
                    Located in the heart of historic downtown Mobile, near
                    restaurants, shops, galleries, and cultural attractions.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2">
                    Guest Accommodations
                  </h4>
                  <p className="text-foreground/70">
                    Multiple hotels within walking distance. Yellowhammer
                    Hospitality also offers short-term rental accommodations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Contact FAQs
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                q: "How long does it take to hear back from you?",
                a: "We aim to respond to all inquiries within 24 hours during business hours. For urgent matters, please call us directly.",
              },
              {
                q: "Can I schedule a tour outside of business hours?",
                a: "Yes! Tours can be scheduled by appointment on weekends and evenings. Please contact us to arrange a time that works for you.",
              },
              {
                q: "What should I bring to my tour?",
                a: "Just bring yourself! We recommend bringing photos or inspiration for your event, and a list of questions.",
              },
              {
                q: "Can I bring my fiancé/partner/family to the tour?",
                a: "Absolutely! We encourage you to bring key decision-makers. Tours are more fun with your planning team.",
              },
              {
                q: "Do you offer virtual tours?",
                a: "Yes, we can arrange virtual tours via video call. Contact us to schedule a time.",
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

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Can't Wait to Meet You!
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you have questions or are ready to book, we're here to help
            make your event unforgettable.
          </p>
          <a
            href="tel:251-333-7368"
            className="inline-block px-8 py-4 text-lg font-semibold bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Call 251-333-RENT
          </a>
        </div>
      </section>
    </Layout>
  );
}
