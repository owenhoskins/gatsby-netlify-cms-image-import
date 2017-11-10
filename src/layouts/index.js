import React from 'react';
import Nav from '../components/Nav'
import Helmet from 'react-helmet';
import 'bulma';
import './style.scss'
import Carousel from '../components/Carousel'


export default (
  {
    children,
    data: {
      site: { siteMetadata: { title, hero } },
      carouselImages,
      heroRemark,
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
                <h1 className="title">{hero.title}</h1>
                <div className="content">{hero.text}</div>
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
        hero {
          title
          text
        }
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

