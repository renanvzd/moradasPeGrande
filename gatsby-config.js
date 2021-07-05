/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteMetadata = require('./config/metadata');

module.exports = {
  /* Your site config here */
  siteMetadata, 
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#7159c1`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.moradasdopegrande.com.br`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
  ]
}
