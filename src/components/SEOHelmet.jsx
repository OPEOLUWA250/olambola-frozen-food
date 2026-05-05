import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const companyName = "Olambola International";
const baseUrl = "https://olambolainternational.com";

/**
 * SEO Meta Tags Component
 * Renders meta tags using Helmet for dynamic head manipulation
 */
export const SEOHelmet = ({ config }) => {
  const {
    title,
    description,
    keywords = "frozen fish, seafood, premium fish, fresh frozen fish, sustainable fishing",
    url = baseUrl,
    image = `${baseUrl}/olambola-logo.png`,
    type = "website",
    author = companyName,
    publishedDate,
    modifiedDate,
    schema = null,
  } = config;

  const fullTitle = title ? `${title} | ${companyName}` : companyName;
  const canonicalUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  // Add dynamic schema markup if provided
  useEffect(() => {
    if (schema) {
      // Remove existing schema script if present
      let existingScript = document.querySelector(
        'script[data-schema-helmet="true"]',
      );
      if (existingScript) {
        existingScript.remove();
      }

      // Create and add new schema script
      const schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.setAttribute("data-schema-helmet", "true");
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);

      return () => {
        if (schemaScript.parentNode) {
          schemaScript.parentNode.removeChild(schemaScript);
        }
      };
    }
  }, [schema]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={author} />

      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1E40AF" />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={companyName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@olambola" />
      <meta name="twitter:site" content="@olambola" />

      {/* Article Metadata */}
      {type === "article" && publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      {type === "article" && modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}

      {/* Image Metadata for Rich Snippets */}
      <meta property="image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEOHelmet;
