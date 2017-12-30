import React from 'react';
import Helmet from 'react-helmet';
import PhotoGallery from '../components/PhotoGallery'


export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <section className="section">
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="content">
        <h1 className="title is-size-3 is-bold-light">
          {post.frontmatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div>
          <PhotoGallery photos={
            post.frontmatter.images.map(({
              image: { childImageSharp: { sizes: {
                aspectRatio, src, srcSet, sizes
              }}}
            }) => console.log(aspectRatio, sizes) || ({
              width: aspectRatio, height: 1, src,
              srcSet: srcSet.split(","),
              sizes: [sizes]
            }))
          } />
        </div>
      </div>
    </section>
  );
}

export const pageQuery = graphql`
  query GalleryByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        images {
          image {
            childImageSharp {
             sizes {
               aspectRatio
               src
               srcSet
               sizes
             }
            }
          }
        }
      }
    }
  }
`;
