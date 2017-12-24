import React from 'react'
import { css } from 'glamor'

const styles = {
  outer: css({
    // border: '1px solid #ccc',
    // borderRadius: 3,
    margin: '0 5px 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '4rem',
    height: '4rem',
  }),
  date: css({
    // display: 'flex',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    lineHeight: '2rem',
  }),
  month: css({
    fontSize: '1.1rem',
    // display: 'flex',
    textTransform: 'uppercase',
    textAlign: 'center',
  }),
}

const MONTH = [
  'Jan', 'Feb',	'März',	'Apr', 'Mai',	'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez'
]
const CalendarDate = ({ date }) => {
  const d = new Date(date)
  return (
    <div {...styles.outer}>
      <div {...styles.date}>
        {`${d.getDate()}.`}
      </div>
      <div {...styles.month}>
        {MONTH[d.getMonth()]}
      </div>
    </div>
  )
}




export default CalendarDate
