/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // 1. Your canonical site URL:
  siteUrl: "https://www.minibunnplanner.com",

  // 2. Where to output the generated files.
  //    By default next-sitemap writes to the 'public/' folder,
  //    producing /public/sitemap.xml and /public/robots.txt.
  outDir: "./public",

  // 3. Generate a robots.txt alongside your sitemap:
  generateRobotsTxt: true,

  // 4. How often crawlers should revisit important pages:
  changefreq: "weekly",

  // 5. Priority hints (0.0–1.0) for your pages in the sitemap index:
  priority: 0.7,

  // 6. Optional: exclude any paths you don’t want indexed:
  exclude: [],

  // 7. If you need custom robots.txt rules, you can add:
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/api/" },
    ],
    additionalSitemaps: [
      // if you host extra sitemaps elsewhere:
    ],
  },
};
