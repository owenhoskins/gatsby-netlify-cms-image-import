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



const EventsColumn = ({ eventsRemarks, numItemsToShow }) => {
  if (_.isEmpty(eventsRemarks)) {
    return null
  }
  const { edges: eventsEntries } = eventsRemarks
  const events = _.take(eventsEntries, numItemsToShow)
  return (
    <div
      className="column"
      {...styles.aktuelles}
    >
      <h2 className="title">Aktuelles</h2>
      {events.map(({ node: event }) => {
        return (
          <div
            className="box"
            key={event.id}
          >
              <h3>
                <Link to={event.frontmatter.path}>{event.frontmatter.title}</Link>
              </h3>
              <p>
                <small>{formatDate(event.frontmatter.date)}</small>
              </p>
              <br/>
              <p>
                {event.excerpt}
                <br/>
                <br/>
                <Link className="button is-info is-small" to={event.frontmatter.path}>
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
      eventsRemarks,
      site: { siteMetadata: { goals, numEvents } }
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

      <EventsColumn
        eventsRemarks={eventsRemarks}
        numItemsToShow={numEvents}
      />
    </div>
  </section>



export const pageQuery = graphql`
  query IndexQuery {
  
    eventsRemarks: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] },
      filter:{ frontmatter: { templateKey: { eq:"event" } }}
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
        numEvents
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
