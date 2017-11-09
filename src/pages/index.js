import React from 'react'
import Link from 'gatsby-link'
import _ from 'lodash'


const NewsColumn = ({ newsRemarks, numItemsToShow }) => {
  if (_.isEmpty(newsRemarks)) {
    return null
  }
  const { edges: newsEntries } = newsRemarks
  const news = _.take(newsEntries, numItemsToShow)
  return (
    <div className="column">
      <h2 className="title">Aktuelles</h2>
      {news.map(({ node: newsItem }) => {
        return (
          <div
            className="box"
            key={newsItem.id}
          >
              <h3>
                <Link to={newsItem.frontmatter.path}>{newsItem.frontmatter.title}</Link>
              </h3>
              <p>
                <small>{newsItem.frontmatter.date}</small>
              </p>
              <br/>
              <p>
                {newsItem.excerpt}
                <br/>
                <br/>
                <Link className="button is-info is-small" to={newsItem.frontmatter.path}>
                  Weiterlesen...
                </Link>
              </p>
          </div>
        );
      })}
    </div>
  )
}

export default (
  {
    data
  }) =>
  <section className="section">
    <div className="columns">
      <div className="column">
        <h2 className="title">{data.goalsRemark.frontmatter.title}</h2>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.goalsRemark.html }}
        />
      </div>

      <NewsColumn
        newsRemarks={data.newsRemarks}
        numItemsToShow={3}
      />
    </div>
  </section>



export const pageQuery = graphql`
  query IndexQuery {
  
    newsRemarks: allMarkdownRemark(
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
