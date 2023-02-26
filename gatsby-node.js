/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      posts: allMdx(
        filter: { internal: { contentFilePath: { regex: "/posts/" } } }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
      docs: allMdx(
        filter: { internal: { contentFilePath: { regex: "/docs/" } } }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors)
  }

  const posts = result.data.posts.nodes
  const postTemplate = path.resolve(`./src/templates/post.jsx`)

  posts.forEach(node => {
    createPage({
      path: node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })

  const docs = result.data.docs.nodes
  const docTemplate = path.resolve(`./src/templates/docs.jsx`)

  docs.forEach(node => {
    createPage({
      path: node.frontmatter.slug,
      component: `${docTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
