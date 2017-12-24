import React from 'react'
import { css } from 'glamor'
import colors from '../styles/styles.scss'


const styles = {
  outer: css({
    '& > *+*': {
      marginTop: '1rem',
    }
  }),
  icon: css({
    color: colors.complement1,
    // backgroundColor: colors.secondary23,
    // borderRadius: '50%',
    // '& > i': {
    //   display: 'table-cell',
    //   textAlign: 'center',
    //   color: 'white',
    //   fontSize: '.9rem',
    //   width: '1.4rem',
    //   height: '1.4rem',
    // },
    marginRight: '.6rem',
  }),
}


const GoalsList = ({ goals }) =>
  <div {...styles.outer}>
    {
      goals.map(({ title, description }) =>
        <div key={title}>
          <h4>
            <span {...styles.icon}>
              <i className="fa fa-star"></i>
            </span>
            { title }
          </h4>
          { description }<br/><br/>
        </div>
      )
    }
  </div>


export default GoalsList
