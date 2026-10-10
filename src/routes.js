/**
 * Pages that get prerendered to static HTML and listed in the sitemap.
 * Keep in sync with the <Route>s in App.jsx.
 */
export const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/training", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
];
