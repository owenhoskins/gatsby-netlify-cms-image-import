import React from 'react'
import { formatDate, formatTime } from '../utils'
import Link from 'gatsby-link'
import { css } from 'glamor'


const styles = {
  datetime: {
    outer: css({
      '& > *+*': css({
        marginLeft: 5,
      })
    }),
    item: css({
      fontWeight: 'bold',
      border: '1px solid #ccc',
      borderRadius: 5,
      padding: '5px 7px',
    }),
  }
}

const EventsList = ({ events }) =>
  <div>
    {events.map(({ node: event }) => {
      return (
        <div
          className="box"
          key={event.id}
        >
            <h3>
              <Link to={event.frontmatter.path}>{event.frontmatter.title}</Link>
            </h3>
            <p {...styles.datetime.outer}>
              <small>{formatDate(event.frontmatter.date)}</small>,
              <small {...styles.datetime.hours}>{formatTime(event.frontmatter.date)}</small>
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

export default EventsList
