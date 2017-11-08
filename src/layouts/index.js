import React from 'react'
import Nav from '../components/Nav'
import Helmet from 'react-helmet'
import 'bulma'
import './style.scss'
import Carousel from '../components/Carousel'


export default (
  {
    children,
    data: {
      site: { siteMetadata: { title }},
      carouselImages,
    },
    ...props
  }) => (

  <div>
    <Helmet title={title} />

    <div className="container">
      <Nav title={title} />
    </div>

    <section className="hero is-info is-bold">
      <div className="hero-body">
        <div className="container">
        { props.location.pathname === '/' &&
          <Carousel images={carouselImages.edges}/>
        }
        </div>
        {props.location.pathname === '/' &&
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <h1 className="title">Kindgerecht und familienfreundlich</h1>
                <div className="content">
                  Wir begleiten das Kind auf seinem persönlichen Lern- und Lebensweg.
                  Wir lernen mit allen Sinnen und aus dem Leben.
                  Selbstbestimmtes (freies) Lernen sowie freies Spiel ermöglichen es den Kindern, ihr Potential zu
                  entfalten.
                  Altersdurchmischtes Lernen in kleinen Gruppen ermöglicht gegenseitiges Profitieren sowie das
                  Entwickeln einer hohen Sozialkompetenz.
                  Wir lernen ohne Belohnungs- oder Bestrafungssysteme, ohne Prüfungen und ohne Noten. Im Vordergrund
                  steht die persönliche Entwicklung jedes einzelnen Kindes.
                </div>
              </div>
            </div>
          </section>
        </div>
        }
      </div>
    </section>


    <div className="container">{children()}</div>

    <footer className="footer">
      <div className="container">
        &copy; { new Date().getFullYear() } Freie Schule Bergmeilen
      </div>
    </footer>


  </div>
)


export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }

    carouselImages: allImageSharp(filter: { id:{ regex: "/carousel/"}}) {
      edges {
        node {
          ... on ImageSharp {
            sizes(maxHeight:350, quality: 90, cropFocus: ENTROPY) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    
  }
`

