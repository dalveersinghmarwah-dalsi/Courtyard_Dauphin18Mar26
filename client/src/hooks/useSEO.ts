import { useEffect } from "react";
import { updateMetaTags, type SEOMetadata } from "@/lib/seo";

/**
 * Hook to update SEO metadata when component mounts
 * Usage: useSEO(seoMetadata.home)
 */
export function useSEO(metadata: SEOMetadata) {
  useEffect(() => {
    updateMetaTags(metadata);
  }, [metadata]);
}
