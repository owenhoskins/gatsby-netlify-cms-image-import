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

          <h2 className="title">Unsere Ziele</h2>
          <div className="content">
            <h4>Das Kind ganzheitlich wahrnehmen</h4>
            Wir schaffen einen Ort, an dem sich Kinder zuhause fühlen und an dem sie ihr Potential entfalten kann. Wir möchten Kinder in ihrer Ganzheit wahrzunehmen und den verschiedenen Wesen mit Respekt und Gleichheit zu begegnen. Wir achten die Kreativität und die Besonderheit jedes Individuums. Wir geben den Kindern Zeit, sich selber und die eigenen Bedürfnisse kennenzulernen
            <br/><br/>
            <h4>Das Kind für seine Rolle in der Gesellschaft vorbereiten</h4>
            Wir legen Wert auf einen sozialen Umgang miteinander, üben aktiv das Lösen von Konflikten und respektieren persönliche Grenzen. Wir arbeiten altersdurchmischt und lernen voneinander. Wir fördern was für die berufliche und private Zukunft wertvoll ist (Vernetztes und lösungsorientiertes Denken, Sozialkompetenz) und pflegen eine positive Feedback- und Fehlerkultur.
            <br/><br/>
            <h4>Die Motivation aufrechterhalten</h4>
            Das natürliche, angeborene Bestreben zu lernen und sich zu entwickeln soll erhalten bleiben. Indem wir täglich auf die Bedürfnisse jedes einzelnen Kindes eingehen, erhalten wir die innere Motivation zu lernen aufrecht.
            <br/><br/>
            <h4>Mit allen Sinnen lernen</h4>
            Lerninhalte werden in unserer Schule mit allen Sinnen erlebt. Wir bieten Erfahrungen, die es ermöglichen Lernstoff nachhaltig abzuspeichern. Durch ganzheitliche Lernerfahrungen fördern wir vernetztes Denken.
            <br/><br/>
            <h4>Das Selbstvertrauen stärken</h4>
            Wir schenken den Kindern Vertrauen in ihre eigene Lernfähigkeit, in dem wir stärkenorientiert arbeiten und die Interessen der Kinder wahrnehmen. Wir schauen Fehler als wertvoll und lehrreich an und bewerten nicht. Wir arbeiten ohne Druck und zeigen dem Kind und seinen Eltern die Stärken und Kompetenzen des Kindes auf.
            <br/><br/>
            <h4>Das Kind lernt seine Umwelt kennen</h4>
            Wir lernen in und mit der Natur und fördern so die Motorik und Eigenwahrnehmung der Kinder sowie das ökologische Verständnis.
            <br/><br/>
            <h4>Eine starke Gemeinschaft aufbauen</h4>
            Wir legen Wert darauf, dass Schule und Eltern am gleichen Strick ziehen. Die Eltern, das Kind und die Schule sehen wir als gleichwertige Partner an, die ein gemeinsames Ziel verfolgen. Als Erwachsene leben wir den Kindern vor, dass Gemeinschaft stark macht und fördern das Miteinander durch verschiedene Projekte und Anlässen, an denen die Eltern sich beteiligen können.
          </div>

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
