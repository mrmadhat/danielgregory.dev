const site = require("./site/config")

/**
 * Information about the site
 */

const siteMetadata = {
  title: site.title,
  description: site.description,
  author: {
    name: site.author.name,
    miniBio: site.author.description,
  },
  siteUrl: `https://danielgregory.dev`,
  keywords: site.keywords,
  canonicalUrl: site.siteUrl,
  image: site.siteLogo,
  organization: {
    name: site.organization,
    url: site.siteUrl,
    logo: site.siteLogo,
  },
  social: {
    twitter: site.twitterHandle,
    fbAppID: "",
  },
}

const manifest = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: site.title,
    short_name: site.shortTitle,
    start_url: `/`,
    background_color: site.theme.color.primaryBg,
    theme_color: site.theme.color.accent,
    display: `minimal-ui`,
    icon: site.icon,
  },
}

/**
 * Site Content
 */
const fileSystem = [
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
      name: `images`,
      path: `${__dirname}/src/pages`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `articles`,
      path: `${__dirname}/content/articles`,
    },
  },
]

const seoPlugins = [
  `gatsby-plugin-sitemap`,
  "gatsby-plugin-robots-txt",
  {
    resolve: "gatsby-plugin-html-attributes",
    options: {
      lang: "en",
    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-2YM2ELHQR2", // Google Analytics / GA
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**"],
      },
    },
  },
]

const content = [
  `gatsby-plugin-catch-links`,
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      defaultLayouts: {
        default: `${__dirname}/src/templates/markdown-page.js`,
      },
      gatsbyRemarkPlugins: [
        { resolve: "gatsby-remark-vscode" },
        {
          resolve: "gatsby-remark-images",
          options: {
            backgroundColor: site.theme.color.primaryBg,
            maxWidth: 1035,
          },
        },
        {
          resolve: "gatsby-remark-copy-linked-files",
          options: {
            ignoreFileExtensions: [],
          },
        },
      ],
    },
  },
  ...seoPlugins,
]
/**
 * Visitor data and seo
 */
const analytics = {
  resolve: "gatsby-plugin-fathom",
  options: {
    siteId: "AGKSAWUQ",
    whitelistHostnames: ["danielgregory.dev", "www.danielgregory.dev"],
  },
}

const seo = `gatsby-plugin-react-helmet`

/**
 * Themeing
 */
const styling = [
  `gatsby-plugin-emotion`,
  `gatsby-plugin-nprogress`,
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `site/typography`,
    },
  },
]

const images = [
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: "gatsby-remark-images",
    options: {
      backgroundColor: site.theme.color.primaryBg,
      maxWidth: 1035,
    },
  },
]

module.exports = {
  siteMetadata,
  plugins: [
    seo,
    analytics,
    manifest,
    ...content,
    ...fileSystem,
    ...styling,
    ...images,

    // TODO
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
