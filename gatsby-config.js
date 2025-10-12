const { EventEmitter } = require("events")
EventEmitter.defaultMaxListeners = 50

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Orinda Klub Tábor",
    siteUrl: "https://www.orindaklub.cz",
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
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        // Exclude pages you don't want in sitemap
        excludes: [
          "/dev-404-page/",
          "/404/",
          "/404.html",
          "/prihlas-se-do-souteze-2022/",
          "/prihlas-se-do-souteze-2023/",
          "/prihlas-se-do-souteze-2024/",
        ],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => "https://www.orindaklub.cz",
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          // Set custom priority and changefreq based on path
          let priority = 0.5
          let changefreq = "monthly"

          if (path === "/") {
            priority = 1.0
            changefreq = "weekly"
          } else if (path === "/application-form/") {
            priority = 0.9
            changefreq = "monthly"
          } else if (path === "/our-students/") {
            priority = 0.85
            changefreq = "monthly"
          } else if (path.startsWith("/our-students/")) {
            priority = 0.7
            changefreq = "yearly"
          } else if (path === "/blog/" || path.startsWith("/blog/")) {
            priority = 0.8
            changefreq = "weekly"
          } else if (
            path === "/about/" ||
            path === "/faq/" ||
            path === "/application-form/"
          ) {
            priority = 0.8
            changefreq = "monthly"
          }

          return {
            url: path,
            changefreq: changefreq,
            priority: priority,
          }
        },
      },
    },
  ],
}
