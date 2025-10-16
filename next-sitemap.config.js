/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ayisrhmn.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404'],
  changefreq: 'monthly',
  priority: 1.0,
};
