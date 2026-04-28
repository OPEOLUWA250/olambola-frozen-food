/**
 * Sitemap generator utility
 * Run this script to generate sitemap.xml and other sitemaps
 * Usage: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://olambolainternational.com';

// Define all your routes and their metadata
const pages = [
  {
    url: '/',
    title: 'Home',
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/about',
    title: 'About',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/contact',
    title: 'Contact',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0],
  },
];

// Product pages (add your products dynamically)
const productPages = [
  {
    url: '/products/premium-fish',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    url: '/products/frozen-seafood',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    url: '/products/specialty-items',
    changefreq: 'monthly',
    priority: '0.7',
  },
];

function generateSitemapXML(urlList, fileName = 'sitemap.xml') {
  const sitemapStart = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">`;

  const sitemapEnd = `</urlset>`;

  const urlEntries = urlList
    .map((page) => {
      return `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join('\n');

  const sitemap = `${sitemapStart}\n${urlEntries}\n${sitemapEnd}`;

  const outputPath = path.join(
    import.meta.url.split('/').slice(0, -1).join('/').replace('file:///', ''),
    '../public',
    fileName
  );

  fs.writeFileSync(outputPath, sitemap);
  console.log(`✓ ${fileName} generated successfully`);
}

function generateSitemapIndex() {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-products.xml</loc>
  </sitemap>
</sitemapindex>`;

  const outputPath = path.join(
    import.meta.url.split('/').slice(0, -1).join('/').replace('file:///', ''),
    '../public',
    'sitemap-index.xml'
  );

  fs.writeFileSync(outputPath, sitemapIndex);
  console.log('✓ sitemap-index.xml generated successfully');
}

// Generate sitemaps
console.log('Generating sitemaps...');
generateSitemapXML(pages, 'sitemap.xml');
generateSitemapXML(productPages, 'sitemap-products.xml');
generateSitemapIndex();

console.log('\n✓ All sitemaps generated successfully!');
console.log('Submit to Google Search Console: https://www.google.com/webmasters/tools/');
