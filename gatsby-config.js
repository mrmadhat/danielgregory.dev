module.exports = {
  siteMetadata: {
    title: `Unfilter`,
    description: `Unfilter is your online diary. You can choose to share a piece of you or not, the decision is yours.`,
    author: `Daniel Gregory`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-fathom",
      options: {
        // Unique site id
        siteId: "QESCFHHW",
        // Domain whitelist
        whitelistHostnames: ["unfilter.life", "www.unfilter.life"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `unfilter`,
        short_name: `Unfilter`,
        start_url: `/`,
        background_color: `#FFF8F2`,
        theme_color: `#424242`,
        display: `minimal-ui`,
        icon: `src/images/unfilter-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/theme/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
