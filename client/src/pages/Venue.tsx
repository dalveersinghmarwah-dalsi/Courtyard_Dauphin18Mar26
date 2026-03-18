import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

/**
 * The Venue Page - Light Royal Aesthetic with Rich Animations
 */

export default function Venue() {
  useSEO(seoMetadata.venue);
  const section1Ref = useScrollAnimation();
  const section2Ref = useScrollAnimation();
  const section3Ref = useScrollAnimation();


  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] pt-32 overflow-hidden bg-gradient-to-br from-background via-muted/10 to-accent/8">


        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-primary leading-tight mb-6 font-serif">
            The Venue
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 font-light">
            Historic elegance meets modern sophistication
          </p>
        </div>
      </section>

      {/* About Section */}
      <section ref={section1Ref} className="py-16 md:py-24 bg-white pattern-dots fade-in-up animate-in relative">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-muted to-accent/10 rounded-xl aspect-square flex items-center justify-center hover:shadow-lg transition-all duration-300 animate-float-up">
              <p className="text-foreground/50 text-sm">[Venue Photo]</p>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif animate-float-up">
                A Space for Celebration
              </h2>
              <p className="text-lg text-foreground/75 mb-4 leading-relaxed animate-float-up delay-100">
                Nestled in the heart of historic downtown Mobile, The Courtyard on Dauphin offers an elegant setting for your most important moments. Our beautifully preserved venue combines historic charm with modern amenities.
              </p>
              <p className="text-lg text-foreground/75 leading-relaxed animate-float-up delay-200">
                Whether you're planning an intimate gathering or a grand celebration, our flexible spaces adapt to your vision, ensuring your event is as unique as you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section ref={section2Ref} className="py-16 md:py-24 bg-gradient-to-br from-muted/8 to-accent/6 fade-in-up animate-in pattern-lines relative">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center font-serif animate-float-up">
            Amenities & Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Historic courtyard setting",
              "Flexible indoor and outdoor spaces",
              "Professional lighting and sound",
              "Full kitchen facilities",
              "Climate-controlled environments",
              "Ample parking for guests",
              "Professional event coordination",
              "Vendor-friendly policies",
            ].map((amenity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-muted hover:scale-105 animate-float-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-accent flex-shrink-0 mt-1 animate-soft-pulse"></div>
                <p className="text-foreground/75 font-medium">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity Section */}
      <section ref={section3Ref} className="py-16 md:py-24 bg-white fade-in-up animate-in pattern-grid relative">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center font-serif animate-float-up">
            Flexible Capacity
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { size: "Intimate", count: "25-75 guests", desc: "Perfect for small celebrations" },
              { size: "Standard", count: "75-150 guests", desc: "Ideal for most events" },
              { size: "Grand", count: "150-250+ guests", desc: "For large celebrations" },
            ].map((capacity, index) => (
              <div
                key={index}
                className="text-center p-8 border-t-4 border-secondary bg-gradient-to-b from-muted/8 to-transparent rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-float-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-2 font-serif">
                  {capacity.size}
                </h3>
                <p className="text-lg font-semibold text-secondary mb-2">
                  {capacity.count}
                </p>
                <p className="text-foreground/75">{capacity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 text-white pattern-fade relative">
        <div className="container text-center max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif animate-float-up">
            Ready to Tour?
          </h2>
          <p className="text-lg text-white/90 mb-8 animate-float-up delay-100">
            Experience the elegance of The Courtyard on Dauphin in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-float-up delay-200">
            <a
              href="/contact"
              className="px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Schedule a Tour
            </a>
            <a
              href="tel:251-333-7368"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              Call 251-333-RENT
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
