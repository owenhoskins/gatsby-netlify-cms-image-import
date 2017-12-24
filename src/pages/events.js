import React from 'react'
import EventsList from '../components/EventsList'
import Helmet from 'react-helmet';


export default (
  {
    data: {
      eventsRemarks: {
        edges: eventNodes
      },
    }
  }) =>
  <section className="section">
    <Helmet>
      <title>Veranstaltungen</title>
    </Helmet>
    <h2 className="title is-size-3 is-bold-light">Veranstaltungen</h2>
    <div>
      <EventsList events={eventNodes}/>
    </div>
  </section>




export const eventsFragment = graphql`
  fragment events on RootQueryType {
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
            date
            path
          }
        }
      }
    }
  }
`



export const pageQuery = graphql`
  query EventsPageQuery {
    ...events  
  }
`;
