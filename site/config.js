module.exports = {
  siteUrl: process.env.ROOT_URL || "https://danielgregory.dev",
  siteLogo: `images/daniel-gregory-dev-icon.png`,
  repoUrl: `https://github.com/mrmadhat/danielgregory.dev`,
  title: `Daniel Gregory Freelance Website Developer`,
  shortTitle: `DG Dev`,
  keywords: ["Software developer", "product developer"],
  description: `I design and develop websites that turn visitors into customers.`,
  author: {
    name: `Daniel Gregory`,
    description: `Daniel Gregory is a website developer based in Bolton, UK.`,
  },
  organization: `Daniel Gregory Development`,
  twitterHandle: `@itsdannylalala`,
  icon: `src/images/daniel-gregory-dev-icon.png`, // relative to gatsby config
  theme: {
    color: {
      primaryBg: `#fff`,
      primary: `#000000`,
      secondary: `#707070`,
      accent: `#841717`,
    },
  },
}
