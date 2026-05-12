/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://merlinspirithouse.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ['/privacy-policy/', '/disclaimer/'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}
