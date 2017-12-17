import React from 'react';
import Helmet from 'react-helmet';
import { formatDate } from '../utils'

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <section className="section">
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="content">
        <h1 className="title is-size-2 has-text-info is-bold-light">
          {post.frontmatter.title}
        </h1>
        <p style={{ marginTop: '-.5rem', marginBottom: '2rem' }}>
          {formatDate(post.frontmatter.date)}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </section>
  );
}

export const pageQuery = graphql`
  query NewsItemByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
