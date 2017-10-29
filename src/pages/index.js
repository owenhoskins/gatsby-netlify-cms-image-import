import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';


const MAX_NEWS_ITEM_TO_SHOW = 3;

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  const isNewsItem = post => post.node.frontmatter.templateKey === 'news-item'
  const news = _.take(posts.filter(isNewsItem), MAX_NEWS_ITEM_TO_SHOW)

  return (
    <section className="section">
      {news.map(({ node: post }) => {
        return (
          <div className="box"
               key={post.id}
          >
            <div className="card-content">
              <h3>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h3>
              <p>
                <small>{post.frontmatter.date}</small>
              </p>
              <br/>
              <p>
                {post.excerpt}
                <br/>
                <br/>
                <Link className="button is-info is-small" to={post.frontmatter.path}>
                  Weiterlesen...
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </section>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            image
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
