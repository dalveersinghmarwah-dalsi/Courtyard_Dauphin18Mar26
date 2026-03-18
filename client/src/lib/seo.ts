/**
 * SEO Metadata Configuration
 * Provides consistent meta tags, Open Graph, and structured data across the site
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SITE_NAME = "The Courtyard on Dauphin";
const SITE_URL = "https://courtyardondauphin.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: "The Courtyard on Dauphin | Boutique Event Venue in Mobile, AL",
    description:
      "Elegant boutique event venue in historic downtown Mobile, Alabama. Perfect for weddings, corporate events, and celebrations. Book your tour today.",
    keywords: [
      "event venue mobile alabama",
      "wedding venue mobile",
      "corporate event space mobile",
      "party venue mobile",
      "historic venue mobile",
    ],
    ogTitle: "The Courtyard on Dauphin | Boutique Event Venue",
    ogDescription:
      "Discover the perfect venue for your wedding, corporate event, or celebration in historic downtown Mobile.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  },
  venue: {
    title: "The Venue | The Courtyard on Dauphin",
    description:
      "Explore our historic courtyard venue with flexible capacity, modern amenities, and elegant indoor/outdoor spaces. Located at 751 Dauphin Street, Mobile, AL.",
    keywords: [
      "venue details",
      "venue amenities",
      "venue location",
      "historic courtyard",
      "event space features",
    ],
    ogTitle: "The Courtyard on Dauphin - Venue Details",
    ogDescription:
      "Historic boutique event venue with flexible capacity and elegant spaces for any occasion.",
  },
  weddings: {
    title: "Wedding Venue Mobile, AL | The Courtyard on Dauphin",
    description:
      "Perfect wedding venue in Mobile, Alabama. Historic courtyard setting, flexible packages, and dedicated wedding coordinators. View testimonials and book your tour.",
    keywords: [
      "wedding venue mobile alabama",
      "wedding reception venue",
      "ceremony venue mobile",
      "wedding packages",
      "wedding coordinator mobile",
      "elegant wedding venue",
    ],
    ogTitle: "Wedding Venue in Mobile, AL | The Courtyard on Dauphin",
    ogDescription:
      "Create unforgettable memories at our historic, elegant wedding venue. Flexible packages and professional coordinators.",
  },
  parties: {
    title: "Party Venue Mobile, AL | Birthday, Shower & Event Venue",
    description:
      "Celebrate life's special moments at The Courtyard on Dauphin. Perfect for birthday parties, baby showers, anniversaries, and reunions in Mobile, AL.",
    keywords: [
      "party venue mobile",
      "birthday party venue",
      "baby shower venue mobile",
      "anniversary venue",
      "reunion venue",
      "event space mobile",
    ],
    ogTitle: "Party & Event Venue in Mobile, AL",
    ogDescription:
      "Elegant venue for birthday parties, showers, anniversaries, and personal celebrations.",
  },
  corporate: {
    title: "Corporate Event Venue Mobile, AL | Team Building & Retreats",
    description:
      "Professional corporate event venue in Mobile, Alabama. Perfect for retreats, meetings, client entertainment, and team building. Book your corporate event today.",
    keywords: [
      "corporate event venue mobile",
      "corporate retreat venue",
      "business meeting space",
      "team building venue",
      "client entertainment venue",
      "professional event space",
    ],
    ogTitle: "Corporate Event Venue in Mobile, AL",
    ogDescription:
      "Professional venue for corporate retreats, meetings, and team building events.",
  },
  gallery: {
    title: "Photo Gallery | The Courtyard on Dauphin",
    description:
      "View photos of The Courtyard on Dauphin. See our elegant ceremony spaces, reception areas, historic courtyard, and event details.",
    keywords: [
      "venue photos",
      "event photos",
      "venue gallery",
      "courtyard photos",
      "event space images",
    ],
    ogTitle: "Photo Gallery - The Courtyard on Dauphin",
    ogDescription: "Explore our elegant venue through our photo gallery.",
  },
  pricing: {
    title: "Event Pricing & Packages | The Courtyard on Dauphin",
    description:
      "Transparent pricing for events at The Courtyard on Dauphin. Flexible packages for 25-250+ guests. Get a custom quote for your event.",
    keywords: [
      "venue pricing",
      "event packages",
      "venue cost",
      "pricing information",
      "package options",
    ],
    ogTitle: "Pricing & Packages - The Courtyard on Dauphin",
    ogDescription:
      "Flexible event packages and transparent pricing for your celebration.",
  },
  contact: {
    title: "Contact Us | The Courtyard on Dauphin",
    description:
      "Contact The Courtyard on Dauphin to schedule a tour or get event information. Phone: 251-333-RENT. Located at 751 Dauphin Street, Mobile, AL.",
    keywords: [
      "contact venue",
      "schedule tour",
      "event inquiry",
      "venue contact",
      "book tour",
    ],
    ogTitle: "Contact The Courtyard on Dauphin",
    ogDescription:
      "Get in touch to schedule a tour or learn more about hosting your event.",
  },
};

/**
 * Generate JSON-LD structured data for LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: SITE_NAME,
    description:
      "Boutique event venue in historic downtown Mobile, Alabama",
    address: {
      "@type": "PostalAddress",
      streetAddress: "751 Dauphin Street",
      addressLocality: "Mobile",
      addressRegion: "AL",
      postalCode: "36602",
      addressCountry: "US",
    },
    telephone: "+1-251-333-7368",
    email: "info@rentyellowhammer.com",
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    priceRange: "$$",
    areaServed: ["Mobile", "Baldwin County", "Alabama"],
    eventTypes: [
      "Wedding",
      "Corporate Event",
      "Birthday Party",
      "Baby Shower",
      "Anniversary",
      "Reunion",
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.6954",
      longitude: "-88.0399",
    },
  };
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yellowhammer Hospitality",
    url: "https://rentyellowhammer.com",
    logo: "https://rentyellowhammer.com/logo.png",
    description: "Boutique event venue company in Mobile, Alabama",
    sameAs: [
      "https://www.facebook.com/CourtyardonDauphin",
      "https://www.instagram.com/courtyardondauphin",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+1-251-333-7368",
      email: "info@rentyellowhammer.com",
    },
  };
}

/**
 * Update document head with meta tags
 */
export function updateMetaTags(metadata: SEOMetadata) {
  // Title
  document.title = metadata.title;

  // Meta description
  updateMetaTag("description", metadata.description);

  // Keywords
  if (metadata.keywords) {
    updateMetaTag("keywords", metadata.keywords.join(", "));
  }

  // Open Graph tags
  updateMetaTag("og:title", metadata.ogTitle || metadata.title, "property");
  updateMetaTag(
    "og:description",
    metadata.ogDescription || metadata.description,
    "property"
  );
  updateMetaTag(
    "og:image",
    metadata.ogImage || DEFAULT_OG_IMAGE,
    "property"
  );
  updateMetaTag("og:type", metadata.ogType || "website", "property");
  updateMetaTag("og:url", metadata.canonicalUrl || SITE_URL, "property");

  // Twitter Card
  updateMetaTag("twitter:card", "summary_large_image");
  updateMetaTag("twitter:title", metadata.ogTitle || metadata.title);
  updateMetaTag(
    "twitter:description",
    metadata.ogDescription || metadata.description
  );
  updateMetaTag(
    "twitter:image",
    metadata.ogImage || DEFAULT_OG_IMAGE
  );

  // Canonical URL
  updateCanonicalLink(metadata.canonicalUrl || SITE_URL);

  // Add structured data
  addStructuredData(generateLocalBusinessSchema());
  addStructuredData(generateOrganizationSchema());
}

/**
 * Helper: Update or create a meta tag
 */
function updateMetaTag(
  name: string,
  content: string,
  attribute: "name" | "property" = "name"
) {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/**
 * Helper: Update or create canonical link
 */
function updateCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

/**
 * Helper: Add JSON-LD structured data
 */
function addStructuredData(schema: Record<string, unknown>) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
