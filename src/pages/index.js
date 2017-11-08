import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';


const MAX_NEWS_ITEM_TO_SHOW = 3;

export default function Index(
  {
    data: {
      newsEntries: { edges: newsEntries },
      goalsRemark,
    }
  }) {

  const news = _.take(newsEntries, MAX_NEWS_ITEM_TO_SHOW)
  return (
    <section className="section">
      <div className="columns">
        <div className="column">

          <h2 className="title">{goalsRemark.frontmatter.title}</h2>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: goalsRemark.html }}
          />

        </div>
        <div className="column">
          <h2 className="title">Aktuelles</h2>
          {news.map(({ node: post }) => {
            return (
              <div
                className="box"
                key={post.id}
              >
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
            );
          })}
        </div>
      </div>
    </section>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    newsEntries: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter:{ frontmatter: { templateKey: { eq:"news-item" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
    goalsRemark: markdownRemark(frontmatter: { path: { eq: "/goals" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
