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
    siteUrl: "https://www.martinpszczola.com",

  },
  plugins: [
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'process.env.GATSBY_GA_ID'
      },
    },
  ],
}
