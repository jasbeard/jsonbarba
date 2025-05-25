/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jsonbarba.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: [
    '/404',
  ],
}