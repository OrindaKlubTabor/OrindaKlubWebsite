const { EventEmitter } = require("events")
EventEmitter.defaultMaxListeners = 50

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Orinda Klub Tábor",
  },
  // Gatsby v5 defaults trailingSlash to "always". Make it explicit to avoid surprises.
  trailingSlash: "always",
  // Optionally enable GraphQL type generation files
  graphqlTypegen: true,

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1q7ryjezrt6k`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
  ],
}
