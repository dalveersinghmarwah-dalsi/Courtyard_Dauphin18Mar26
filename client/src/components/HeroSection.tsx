import CTAButton from "./CTAButton";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaSecondary?: {
    text: string;
    href: string;
  };
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Book a Tour",
  ctaHref = "/contact",
  ctaSecondary,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(44, 44, 44, 0.4), rgba(44, 44, 44, 0.4)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {
              background: "linear-gradient(135deg, oklch(0.97 0.003 70) 0%, oklch(0.92 0.004 286.32) 100%)",
            }
      }
    >
      {/* Content */}
      <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton href={ctaHref} size="lg" variant="primary">
            {ctaText}
          </CTAButton>
          {ctaSecondary && (
            <CTAButton href={ctaSecondary.href} size="lg" variant="outline">
              {ctaSecondary.text}
            </CTAButton>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
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
  );
}
