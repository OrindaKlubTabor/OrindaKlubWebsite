const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("Error loading posts", JSON.stringify(result.errors))
    return
  }

  const posts = result.data.allContentfulPost.nodes
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/posts.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  result.data.allContentfulPost.nodes.forEach(post => {
    actions.createPage({
      path: `/${post.slug}/`,
      component: require.resolve("./src/templates/blogPost.js"),
      context: {
        slug: post.slug,
      },
    })
  })
}
