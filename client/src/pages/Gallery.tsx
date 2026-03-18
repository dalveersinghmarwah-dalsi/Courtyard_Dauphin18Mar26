import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { seoMetadata } from "@/lib/seo";
import { X } from "lucide-react";

/**
 * Design Philosophy: Refined Southern Elegance
 * - Photography-focused grid layout
 * - Minimal text, maximum visual impact
 * - Lightbox for detailed viewing
 */

interface GalleryImage {
  id: number;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = Array.from({ length: 24 }).map(
  (_, index) => ({
    id: index + 1,
    title: `Venue Photo ${index + 1}`,
    category: ["ceremony", "reception", "courtyard", "details"][
      index % 4
    ] as string,
  })
);

const categories = [
  { name: "All", value: "all" },
  { name: "Ceremony", value: "ceremony" },
  { name: "Reception", value: "reception" },
  { name: "Courtyard", value: "courtyard" },
  { name: "Details", value: "details" },
];

export default function Gallery() {
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    setAnimateHero(true);
  }, []);

  useSEO(seoMetadata.gallery);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

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
            Photo Gallery
          </h1>
          <p className={`text-xl md:text-2xl text-foreground/80 mb-12 font-light transition-all duration-1000 delay-500 ${animateHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} animate-very-slow-float`}>
            Explore the beauty and elegance of The Courtyard on Dauphin
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.value
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-white text-foreground border border-border hover:border-secondary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="bg-gradient-to-br from-secondary/10 to-accent/10 aspect-square rounded-lg flex items-center justify-center border border-border hover:shadow-lg transition-all cursor-pointer hover:scale-105"
              >
                <div className="text-center">
                  <p className="text-foreground/50 text-sm">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 aspect-video rounded-lg flex items-center justify-center border border-border">
              <div className="text-center">
                <p className="text-foreground/50 text-lg">{selectedImage.title}</p>
              </div>
            </div>

            {/* Image Info */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-gold">
            See The Courtyard in Person
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            These photos don't do justice to the elegance and charm of our venue.
            Schedule a tour and experience it yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="px-8 py-4 text-lg font-semibold bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Schedule a Tour
            </a>
            <a
              href="tel:251-333-7368"
              className="px-8 py-4 text-lg font-semibold border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Call 251-333-RENT
            </a>
          </div>
        </div>
      </section>

      {/* Philosophical Quote */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container text-center max-w-2xl mx-auto px-4">
          <p className="font-allison text-4xl md:text-5xl text-brand-gold mb-4">
            "The best things in life are not things." – Art Buchwald
          </p>
        </div>
      </section>
    </Layout>
  );
}
