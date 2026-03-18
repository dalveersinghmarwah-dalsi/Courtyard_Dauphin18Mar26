import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

/**
 * Home Page - Dynamic & Animated with Rich Effects
 * Every element has smooth, graceful animations
 */

export default function Home() {
  useSEO(seoMetadata.home);
  const section1Ref = useScrollAnimation();
  const section2Ref = useScrollAnimation();
  const section3Ref = useScrollAnimation();
  const section4Ref = useScrollAnimation();
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
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
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className={`text-6xl md:text-8xl font-bold text-primary leading-tight mb-6 font-serif transition-all duration-1000 ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} animate-very-slow-fade-in animate-continuous-float`}>
            The Courtyard on Dauphin
          </h1>
          <p className={`text-xl md:text-2xl text-foreground/80 mb-12 font-light transition-all duration-1000 delay-500 ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} animate-very-slow-float`}>
            An experience tailored for you
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <a
              href="/contact"
              className="px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover-lift hover-glow hover:shadow-lg transition-all duration-300 animate-bounce"
            >
              Schedule a Tour
            </a>
            <a
              href="/venue"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover-lift"
            >
              Explore the Venue
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section ref={section1Ref} className="py-20 md:py-28 bg-white pattern-dots fade-in-up animate-in relative">
        <div className="container max-w-3xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-serif animate-float-up hover-glow p-4 rounded-lg transition-all duration-300">
              Welcome to Elegance
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6 animate-float-up delay-100 hover:text-foreground transition-colors duration-300">
              Located in the heart of historic downtown Mobile, The Courtyard on Dauphin offers a sophisticated setting for your most important celebrations. Whether you're planning an intimate gathering or a grand celebration, our elegant venue provides the perfect backdrop for unforgettable memories.
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-secondary via-accent to-secondary mx-auto animate-float-up delay-200 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section ref={section2Ref} className="py-20 md:py-28 bg-gradient-to-br from-muted/8 to-accent/6 fade-in-up animate-in pattern-lines relative">
        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center font-serif">
            Events We Host
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Weddings", href: "/weddings", iconClass: "fa-solid fa-ring" },
              { title: "Parties & Events", href: "/parties", iconClass: "fa-solid fa-champagne-glasses" },
              { title: "Corporate", href: "/corporate", iconClass: "fa-solid fa-briefcase" },
              { title: "Gallery", href: "/gallery", iconClass: "fa-solid fa-camera" },
            ].map((event, index) => (
              <a
                key={index}
                href={event.href}
                className="group p-8 bg-white rounded-xl text-center hover-lift hover-glow transition-all duration-300 border border-muted animate-float-up hover:animate-glow flex flex-col items-center gap-4"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <i className={`${event.iconClass} text-4xl text-secondary group-hover:animate-bounce transition-all duration-300 animate-subtle-tilt`}></i>
                <h3 className="text-2xl font-bold text-primary font-serif group-hover:text-secondary transition-colors duration-300 underline-animate">
                  {event.title}
                </h3>
                <p className="text-foreground/70 text-sm group-hover:text-foreground transition-colors duration-300">
                  Discover what makes us perfect for your {event.title.toLowerCase().replace(" & ", " and ")}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={section3Ref} className="py-20 md:py-28 bg-custom-bg-color fade-in-up animate-in pattern-grid relative">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center font-serif animate-float-up">
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
              <div
                key={index}
                className="p-6 border-l-4 border-secondary hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-muted/8 to-transparent rounded-r-lg animate-float-up hover-lift hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-primary mb-3 font-serif underline-animate">
                  {item.title}
                </h3>
                <p className="text-foreground/75 group-hover:text-foreground transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={section4Ref} className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/95 text-white fade-in-up animate-in pattern-fade relative">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-serif animate-float-up text-white">
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
              <div
                key={index}
                className="p-6 bg-white/15 rounded-xl hover:bg-white/25 transition-all duration-300 backdrop-blur-sm border border-white/20 animate-float-up hover-lift hover:animate-glow"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-lg mb-4 italic animate-blink">{testimonial.quote}</p>
                <p className="font-semibold underline-animate">{testimonial.name}</p>
                <p className="text-sm opacity-80">{testimonial.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif animate-float-up">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg text-foreground/75 mb-8 animate-float-up delay-100">
            Let us help you create an unforgettable experience at The Courtyard on Dauphin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-float-up delay-200">
            <a
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover-lift hover-glow transition-all duration-300 animate-bounce"
            >
              Get in Touch
            </a>
            <a
              href="tel:251-333-7368"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover-lift hover:animate-glow"
            >
              Call 251-333-RENT
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
