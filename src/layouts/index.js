import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import logo from '../img/logo-tree.svg';
import fbIcon from '../img/fb-icon.svg';
import 'bulma';
import './style.scss'
import Carousel from '../components/Carousel'


const photos = [
  'img/foto-team.jpg'
]





const Navbar = () => (
  <nav className="navbar" style={{ padding: '20px 0'}}>
    <div className="navbar-brand">
      <a className="navbar-item" href="../">
        <h1 className="title">Freie Schule Bergmeilen</h1>
      </a>
      <span className="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
    </div>
    <div id="navbarMenu" className="navbar-menu">

      <div className="navbar-end">
        <div className="navbar-end">
          <Link className="navbar-item" to="/basisstufe">Angebot</Link>
          <Link className="navbar-item" to="/philosophy">Philosophie</Link>
          <Link className="navbar-item" to="/about">Über uns</Link>
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
    </div>
  </nav>
);




export default ({ children, data, ...props }) => (

  <div>
    <Helmet title={data.site.siteMetadata.title} />

    <div className="container">
      <nav className="navbar" style={{ marginTop: '0.75rem'}}>
        <div className="navbar-brand">
          <img
            className="image"
            src={logo}
            style={{ margin: '0 0 0 1rem'}}
          />
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
              <a className="navbar-link" href="/basisstufe">
                Angebot
              </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item " href="/basisstufe">
                  Basisstufe
                </a>
                <a className="navbar-item " href="/primarstufe">
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
            sizes(maxHeight:400, quality: 90) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    
  }
`

// carouselImages: imageSharp(id: { regex: "/carousel/" }) {
//   sizes(
//     duotone: { highlight: "#f00e2e", shadow: "#192550" }
//     traceSVG: {
//       color: "#f00e2e"
//       turnPolicy: TURNPOLICY_MINORITY
//       blackOnWhite: false
//     }
//     toFormat: PNG
//   ) {
//     src
//   }
// }
