import { site, absoluteUrl } from "../config/site";

/**
 * Per-page <head> tags. React 19 hoists <title>, <meta> and <link> into
 * <head> automatically, and scripts/prerender.js bakes them into static HTML.
 */
export default function Seo({
  title,
  description = site.description,
  path = "/",
  image = "/og-image.jpg",
  noindex = false,
  jsonLd,
}) {
  const fullTitle = title ? `${title} | ${site.name}` : site.name;
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : `${site.url}${image}`;
  const schemas = jsonLd ? [].concat(jsonLd) : [];

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex" />
      ) : (
        <link rel="canonical" href={url} />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${site.name} logo`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
