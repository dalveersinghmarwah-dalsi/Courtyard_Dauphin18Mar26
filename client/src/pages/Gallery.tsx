import Layout from "@/components/Layout";
import { useState } from "react";
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
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Explore the beauty and elegance of The Courtyard on Dauphin
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-32 bg-background">
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
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
    </Layout>
  );
}
