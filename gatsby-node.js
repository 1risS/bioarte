/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    })
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (["ArtistasYaml", "BiotecnologiaYaml"].includes(node.internal.type)) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allArtistasYaml {
        edges {
          node {
            fields {
              slug
            }
            nombre
            cvUrl
            formacion
            bio
            foto
            obraPrincipalUrl
            obraBotonLabel
            obras {
              ciudadPais
              foto
              titulo
              url
              descripcion
            }
          }
        }
      }

      allBiotecnologiaYaml {
        edges {
          node {
            fields {
              slug
            }
            nombre
            descripcion
            foto
            secciones {
              titulo
              foto
              descripcion
            }
          }
        }
      }
    }
  `)

  result.data.allArtistasYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/artist.js`),
      context: {
        slug: node.fields.slug,
        ...node,
      },
    })
  })

  result.data.allBiotecnologiaYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/biotecnologia.js`),
      context: {
        slug: node.fields.slug,
        ...node,
      },
    })
  })
}
