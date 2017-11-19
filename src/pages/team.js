import React from 'react'
import _ from 'lodash'
import Img from 'gatsby-image'


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
          <Img
            resolutions={_.get(photo, 'childImageSharp.resolutions')}
          />
          {/*<img*/}
            {/*src={photo}*/}
            {/*alt={name}*/}
            {/*style={{ maxWidth: 200, maxHeight: 300, paddingRight: 30 }}*/}
          {/*/>*/}
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
      teamMembers: {
        edges: members
      }
    }
  }
) =>
  <section className="section">
    <div className="columns">
      <div className="column">
        {members.map(
          ({  node: {
              id,
              frontmatter
            }}, i) => <TeamMember key={i} {...frontmatter} />)}
      </div>
    </div>
  </section>


export const pageQuery = graphql`
  query TeamQuery {

    teamMembers: allMarkdownRemark(
      filter: {frontmatter: {dataKind: {eq: "team-member"}}},
      sort: {order: ASC, fields: [frontmatter___order]} 
    ) {
      edges {
        node {
          id
          frontmatter {
            name: title
            photo {
              childImageSharp {
               resolutions(width: 160, height: 200, quality: 90) {
                 ...GatsbyImageSharpResolutions
               }
              }
            }
            position
            experience
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


// photo {
//   childImageSharp {
//     responsiveSizes(maxWidth: 400) {
//       src
//       srcSet
//       sizes
//     }
//   }
// }
