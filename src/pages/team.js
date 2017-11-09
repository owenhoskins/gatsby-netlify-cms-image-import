import React from 'react'
import _ from 'lodash'


const TeamMember = ({
  name,
  photo,
  position,
  experience,
  children
}) =>
  <div
    key={name}
    className="box"
  >
    <article className="media">
      <div className="media-left">
        <figure className=" is-2by3">
          <img
            src={photo}
            alt={name}
            style={{ maxHeight: 300, marginRight: 40 }}
          />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <div className="media-content">
            <h2 className="title is-3">{name}</h2>
            <p>
              <h3 className="subtitle is-5">Funktion an der Schule</h3>
              { position }
            </p>
            <br/>
            <p>
              <h3 className="subtitle is-5">Ausbildung/Berufserfahrung</h3>
              { experience }
            </p>
            <br/>
            {!_.isEmpty(children) &&
              <div>
                <h3 className="subtitle is-5">Kinder</h3>
              <ul>
                {
                  children.map(({ name, year }) =>
                   <li>{ name }, { year }</li>
                  )
                }
              </ul>
              </div>
            }
            { /* bio */ }
          </div>
        </div>
      </div>
    </article>
  </div>


export default (
  {
    data: {
      site: {
        siteMetadata: {
          team: {
            teamMembers
          }
        }
      }
    }
  }
) =>
  <section className="section">
    <div className="columns">
      <div className="column">
        {teamMembers.map(member => <TeamMember {...member} />)}
      </div>
    </div>
  </section>


export const pageQuery = graphql`
  query TeamQuery {

    site {
      siteMetadata {
        team {
          teamMembers {
            experience
            name
            photo
            position
            children {
              name
              year
            }
          }
        }
      }
    }
  }
`;
