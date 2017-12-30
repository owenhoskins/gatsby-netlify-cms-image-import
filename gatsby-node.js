const path = require('path');
const _ = require('lodash');
const loadYaml = require('./loadYaml')

const adminConfig = loadYaml('./static/admin/config.yml')

exports.onCreateNode = ({
  node,
  getNode,
  loadNodeContent,
  boundActionCreators,
}) => {
  const { frontmatter } = node
  if (frontmatter) {
    const { image } = frontmatter
    if (image) {
      if (image.indexOf(adminConfig.public_folder) === 0) {
        frontmatter.image = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, adminConfig.media_folder, image.substr(adminConfig.public_folder.length))
        )
      }
    }
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { dataKind: { eq:null } }} 
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              templateKey
              path
              date
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
        context: {} // additional data can be passed via context
      });
    });
  });
};


// With dataKind:

// allMarkdownRemark(
//   sort: { order: DESC, fields: [frontmatter___date] },
//   filter: { frontmatter: { dataKind: { eq:null} }}
// ) {
//   edges {
//     node {
//       excerpt(pruneLength: 400)
//       html
//       id
//       frontmatter {
//         dataKind
//         templateKey
//         path
//         date
//         title
//       }
//     }
//   }
// }
// }
