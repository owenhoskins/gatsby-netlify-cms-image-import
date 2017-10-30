import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';


const MAX_NEWS_ITEM_TO_SHOW = 3;

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  const isNewsItem = post => post.node.frontmatter.templateKey === 'news-item'
  const news = _.take(posts.filter(isNewsItem), MAX_NEWS_ITEM_TO_SHOW)

  return (
    <section className="section">
      <div className="columns">
        <div className="column">

          <h2 className="title">Lernen und Motivation</h2>

          Die Hirnforschung zeigt uns, dass nachhaltiges Lernen nur da möglich ist, wo ein Interesse des Lernenden am Stoff besteht. Deshalb ist multisensorisches Lernen zum richtigen (vom Kind selbst gewählten) Zeitpunkt der beste Weg, Inhalte langfristig im Gehirn abzuspeichern.
          Unsere Schule bietet Lerninhalte an, die auf den Lehrplan abgestimmt sind. Die Inhalte werden den Kindern so angeboten, dass sie dem Entdecker- und Forscherdrang der Kinder gerecht werden. Lehrer und Begleitpersonen sind jederzeit für das Kind da und begleiten es, damit es möglichst viele Lernziele ohne Druck erreichen kann.
          Kinder können sehr schnell lernen, wenn sie etwas Interessantes entdecken, deshalb stehen bei uns schon im Kindergarten Lerninhalte zur Verfügung, die über diese Stufe hinausgehen.

        </div>
        <div className="column">
          <h2 className="title">Aktuelles</h2>
          {news.map(({ node: post }) => {
            return (
              <div
                className="box"
                key={post.id}
              >
                  <h3>
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  </h3>
                  <p>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <br/>
                  <p>
                    {post.excerpt}
                    <br/>
                    <br/>
                    <Link className="button is-info is-small" to={post.frontmatter.path}>
                      Weiterlesen...
                    </Link>
                  </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            image
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
