import { Helmet } from "react-helmet-async";

const companyName = "Olambola Foods";
const baseUrl = "https://olambola.com";

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
    image = `${baseUrl}/logo.png`,
    type = "website",
  } = config;

  const fullTitle = title ? `${title} | ${companyName}` : companyName;
  const canonicalUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={companyName} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={companyName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEOHelmet;
