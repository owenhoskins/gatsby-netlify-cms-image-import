import React from 'react'
import { formatDate, formatTime } from '../utils'
import Link from 'gatsby-link'
import { css } from 'glamor'
import CalendarDate from './CalendarDate'


const styles = {
  outer: css({
    '& > *+*': css({
      marginTop: 5,
    })
  }),
  calendarDate: css({
    float: 'left',
  }),
  event: {
    header: css({
      display: 'flex',
    }),
    title: css({
      lineHeight: '1.75rem',
    })
  },
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
  <div {...styles.outer}>
    {events.map(({ node: event }) => {
      return (
          <div
            className="box"
            key={event.id}
          >
            <Link to={event.frontmatter.path}>
            <div {...styles.event.header}>
              <div {...styles.calendarDate}>
                <CalendarDate date={event.frontmatter.date}/>
              </div>
              <div>
                <h3 {...styles.event.title}>
                  {event.frontmatter.title}
                </h3>
                <p {...styles.datetime.outer}>
                  <small>{formatDate(event.frontmatter.date)}</small>,
                  <small {...styles.datetime.hours}>{formatTime(event.frontmatter.date)}</small>
                </p>
              </div>
            </div>
            {/*<p>*/}
              {/*{event.excerpt}*/}
              {/*<br/>*/}
              {/*<br/>*/}
              {/*<Link className="button is-info is-small" to={event.frontmatter.path}>*/}
                {/*Weiterlesen...*/}
              {/*</Link>*/}
            {/*</p>*/}
        </Link>
          </div>
      );
    })}
  </div>

export default EventsList
