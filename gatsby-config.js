/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: ".env",
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://casapatronalto.com/",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Casa Patron: Short Term Vacation Rental Home in Alto, NM Near Ruidoso & Ski Apache`,
    description: `Escape to the stunning mountains of Alto, NM and stay at Casa Patron, a beautiful short term vacation rental home located near Ruidoso. This family-friendly home is perfect for large parties and is conveniently located next to Ski Apache. Experience the beauty of nature and make unforgettable memories at Casa Patron.`,
    titleTemplate: "Casa Patron",
    author: `@riefer02`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/content/docs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cp-square-logo.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-sitemap`,
  ],
}
