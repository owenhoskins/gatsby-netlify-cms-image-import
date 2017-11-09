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
    className="box"
  >
    <article className="columns">
      <div className="column is-one-quarter">
        <figure className=" is-2by3">
          <img
            src={photo}
            alt={name}
            style={{ maxWidth: 200, maxHeight: 300, paddingRight: 30 }}
          />
        </figure>
      </div>
      <div className="column">
        <div className="content">
            <h2 className="title is-3">{name}</h2>
            <div>
              <h3 className="subtitle is-5">Funktion an der Schule</h3>
              { position }
            </div>
            <br/>
            <div>
              <h3 className="subtitle is-5">Ausbildung/Berufserfahrung</h3>
              { experience }
            </div>
            <br/>
            {!_.isEmpty(children) &&
              <div>
                <h3 className="subtitle is-5">Kinder</h3>
              <ul>
                {
                  children.map(({ name, year }) =>
                   <li key={name}>{ name }, { year }</li>
                  )
                }
              </ul>
              </div>
            }
            { /* bio */ }
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
        {teamMembers.map((member, i) => <TeamMember key={i} {...member} />)}
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
