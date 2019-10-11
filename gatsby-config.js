/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Martin Pszczola | Developer",
    description: "This is Martin Pszczola's web development portfolio. If you need help with a web project or would like me to join your team, you can contact me via this website.",
    url: "www.martinpszczola.com",

  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.martinpszczola.com',
        policy: [{ userAgent: '*', allow: '/'}]
      }
    },
  ],
}
