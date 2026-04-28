/**
 * SEO Configuration for Olambola Foods
 * This file centralizes all SEO-related configuration
 */

export const SEOConfig = {
  // Site-wide information
  site: {
    name: "Olambola International",
    domain: "https://olambolainternational.com",
    description:
      "Premium quality fish and seafood from the world's finest waters",
    defaultImage: "https://olambolainternational.com/logo.png",
    language: "en",
    locale: "en_US",
  },

  // Social Media
  social: {
    facebook: "https://www.facebook.com/olambola",
    twitter: "https://www.twitter.com/olambola",
    instagram: "https://www.instagram.com/olambola",
    linkedin: "https://www.linkedin.com/company/olambola",
  },

  // Contact Information
  contact: {
    email: "info@olambola.com",
    phone: "+1-XXXXXXXXXX",
    address: {
      streetAddress: "Your Address",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "ZIP",
      addressCountry: "US",
    },
  },

  // Pages configuration
  pages: [
    {
      path: "/",
      title: "Premium Fish & Seafood Delivery",
      description:
        "Discover premium quality fresh and frozen fish, seafood, and sustainable fishing products from Olambola Foods.",
      keywords:
        "frozen fish, seafood delivery, premium fish, fresh frozen fish",
      priority: 1.0,
      changefreq: "weekly",
    },
    {
      path: "/about",
      title: "About Us - Olambola Foods Story",
      description:
        "Learn about Olambola Foods, our mission for premium quality fish and seafood, and commitment to sustainability.",
      keywords: "about olambola, sustainable fishing, premium seafood company",
      priority: 0.8,
      changefreq: "monthly",
    },
    {
      path: "/contact",
      title: "Contact Us - Get in Touch",
      description:
        "Contact Olambola Foods with questions about our premium fish and seafood products.",
      keywords: "contact olambola, fish delivery support, customer service",
      priority: 0.7,
      changefreq: "monthly",
    },
  ],

  // JSON-LD Schema defaults
  schema: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Olambola Foods",
      url: "https://olambola.com",
      logo: "https://olambola.com/logo.png",
      description: "Premium quality fish and seafood supplier",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-XXXXXXXXXX",
        contactType: "Customer Service",
      },
      sameAs: [
        "https://www.facebook.com/olambola",
        "https://www.twitter.com/olambola",
        "https://www.instagram.com/olambola",
      ],
    },
  },
};

export default SEOConfig;
