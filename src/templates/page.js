import React from 'react';

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div className="container">
      <div className="section">
        <h2 className="title is-size-3 is-bold-light">{post.frontmatter.title}</h2>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query Page($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
