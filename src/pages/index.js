import React from 'react'
import _ from 'lodash'
import { css } from 'glamor'
import EventsList from '../components/EventsList'


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
  const events =
    _.take(
      eventsEntries.filter(({ node }) => new Date(node.frontmatter.date) >= new Date())
    , numItemsToShow
  )
  if (_.isEmpty(events)) {
    return null
  }
  return (
    <div
      className="column"
      {...styles.aktuelles}
    >
      <h2 className="title">Aktuelles</h2>
      <EventsList events={events}/>
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
  
    ...events  

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
