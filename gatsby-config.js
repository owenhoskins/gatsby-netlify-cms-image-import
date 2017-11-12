const yaml = require('js-yaml')
const fs = require('fs')
const loadYaml = (fname) =>
  yaml.safeLoad(fs.readFileSync(fname, 'utf8'))


const siteMetadata = loadYaml('./data/site-metadata.yml')
const { trackingId } = siteMetadata

module.exports = {
  siteMetadata: {
    ...siteMetadata,
    goals: loadYaml('./data/goals.yml'),
    hero: loadYaml('./data/hero.yml'),
    team: loadYaml('./data/team.yml'),
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img/carousel`,
        name: 'carousel-images'
      }
    },
    // This plugin exposes helper functions for processing
    // images with the NPM package “sharp”. It's used by
    // several other plugins.
    'gatsby-plugin-sharp',
    // This plugin identifies file nodes that are images and
    // transforms these to create new “ImageSharp” nodes.
    // With them you can resize images and
    // generate responsive image thumbnails.
    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 800,
        linkImagesToOriginal: false
      }
    },

    'gatsby-remark-copy-linked-files',  // for e.g. PDF inclusion


    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId,
      },
    },

  ]
};
