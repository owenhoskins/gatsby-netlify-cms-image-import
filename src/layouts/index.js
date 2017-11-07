import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import logo from '../img/logo-tree.svg';
import fbIcon from '../img/fb-icon.svg';
import 'bulma';
import './style.scss'
import Carousel from '../components/Carousel'


export default ({ children, data, ...props }) => (

  <div>
    <Helmet title={data.site.siteMetadata.title} />

    <div className="container">
      <nav className="navbar" style={{ marginTop: '0.75rem'}}>
        <div
          className="navbar-brand"
          style={{
            paddingLeft: 50,
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 10,
            minHeight: 64,
          }}
        >
          <a className="navbar-item" href="../">
            <h1 className="title">{data.site.siteMetadata.title}</h1>
          </a>

          <div className="navbar-burger burger" data-target="navMenuDocumentation">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>


        <div id="navMenuDocumentation" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                Angebot
              </div>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="/angebot/basisstufe">
                  Basisstufe
                </a>
                <a className="navbar-item " href="/angebot/primarstufe">
                  Primarstufe
                </a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="/philosophie">
                Philosophie
              </a>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="/about">
                Über uns
              </a>
            </div>

            <a className="navbar-item" href="https://www.facebook.com/Freie-Schule-Bergmeilen-502505593264330/" target="_blank">
                <span className="icon">
                  <img
                    src={fbIcon} alt="Freie Schule Bergmeilen auf Facebook"
                    style={{
                      filter: 'grayscale(100%)',
                      opacity: 0.2,
                    }}
                  />
                </span>
            </a>
          </div>
        </div>
      </nav>

    </div>

    <section className="hero is-info is-bold">
      <div className="hero-body">
        <div className="container">
        { props.location.pathname === '/' &&
          <Carousel images={data.carouselImages.edges}/>
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

