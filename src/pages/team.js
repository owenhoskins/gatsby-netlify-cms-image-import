import React from 'react'


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
        {members.map((
          { node: {
            id,
            frontmatter: {
              name,
              position
            }
          }}) =>
            <div
              key={id}
              className="box"
            >
              <article className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <div className="media-content">
                      <h2 className="title is-4">{name}</h2>
                      <h3 className="subtitle is-6">{position}</h3>
                      { /* bio */ }
                    </div>
                  </div>

                  <div className="content">
                  </div>
                </div>
              </article>
            </div>
        )}
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
            position
          }
        }
      }
    }
  }
`;
