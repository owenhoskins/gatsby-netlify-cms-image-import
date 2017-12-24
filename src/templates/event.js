import React from 'react';
import Helmet from 'react-helmet';
import { formatDate, formatTime } from '../utils'

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <section className="section">
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="content">
        <h1 className="title is-size-3 is-bold-light">
          {post.frontmatter.title}
        </h1>
        <p style={{ marginTop: '-.5rem', marginBottom: '2rem' }}>
          {`${formatDate(post.frontmatter.date)}, ${formatTime(post.frontmatter.date)}`}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </section>
  );
}

export const pageQuery = graphql`
  query EventByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
      }
    }
  }
`;
