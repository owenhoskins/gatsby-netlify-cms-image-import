import React from 'react'
import Link from 'gatsby-link'
import _ from 'lodash'
import { css } from 'glamor'
import { formatDate } from '../utils'

const styles = {
  columns: css({
    display: 'flex',
    '@media screen and (max-width: 768px)': {
      flexDirection: 'column',
    }
  }),
  aktuelles: css({
    '@media screen and (max-width: 768px)': {
      order: -1
    }
  })
}



const NewsColumn = ({ newsRemarks, numItemsToShow }) => {
  if (_.isEmpty(newsRemarks)) {
    return null
  }
  const { edges: newsEntries } = newsRemarks
  const news = _.take(newsEntries, numItemsToShow)
  return (
    <div
      className="column"
      {...styles.aktuelles}
    >
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
                <small>{formatDate(newsItem.frontmatter.date)}</small>
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


const Goals = ({ title, goals }) =>
  <div>
    <h2 className="title">{title}</h2>
    <div className="content">
      {
        goals.map(({ title, description }) =>
          <div key={title}>
            <h4>{ title }</h4>
            { description }<br/><br/>
          </div>
        )
      }
    </div>
  </div>

export default (
  {
    data: {
      newsRemarks,
      site: { siteMetadata: { goals, numNewsItems } }
    }
  }) =>
  <section className="section">
    <div
      className="columns"
      {...styles.columns}
    >
      <div className="column">
        <Goals {...goals} />
      </div>

      <NewsColumn
        newsRemarks={newsRemarks}
        numItemsToShow={numNewsItems}
      />
    </div>
  </section>



export const pageQuery = graphql`
  query IndexQuery {
  
    newsRemarks: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] },
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

    site {
      siteMetadata {
        numNewsItems
        goals {
          title
          goals {
            description
            title
          }
        }
      }
    }
  }
`;
