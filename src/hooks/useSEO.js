import { useEffect } from 'react';

/**
 * Custom hook for managing SEO metadata
 * Sets canonical URLs and JSON-LD schema
 * @param {Object} config - SEO configuration
 * @param {string} config.title - Page title
 * @param {string} config.description - Page meta description
 * @param {string} config.keywords - Comma-separated keywords
 * @param {string} config.url - Canonical URL
 * @param {string} config.image - OG image URL
 * @param {string} config.type - Page type (website, article, etc.)
 * @param {Object} config.schema - JSON-LD schema object
 */
export const useSEO = (config) => {
  const baseUrl = 'https://olambolainternational.com';
  
  const {
    url = baseUrl,
    schema = null,
  } = config;

  const canonicalUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

  useEffect(() => {
    // Set canonical URL
    let link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.href = canonicalUrl;
    } else {
      link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }

    // Add JSON-LD schema if provided
    if (schema) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.remove();
      }
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [canonicalUrl, schema]);

  return {
    canonicalUrl,
  };
};

export default useSEO;
