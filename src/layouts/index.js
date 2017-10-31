import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import fbIcon from '../img/fb-icon.svg';
import 'bulma';
import './style.scss'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  'img/foto-team.jpg'
]


const Carousel = () =>
  <div style={{
    padding: '0 1.5rem',
    overflow: 'hidden',
  }}>
    <Slider
      dots
      infinite
      speed={1000}
      slidesToShow={1}
      slidesToScroll={1}
      adaptiveHeight={false}
    >
      {photos.map(url =>
        <figure
          key={url}
          className="image"
          style={{ padding: '0 1rem'}}
        >
          <img
            src={url}
          />
        </figure>

      )}
    </Slider>
  </div>



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


const TemplateWrapper = ({ children, ...props }) => (

  <div>
    <Helmet title="Freie Schule Bergmeilen" />

    <div className="container">
      <nav className="navbar" style={{ padding: '0.75rem 0'}}>
        <div className="navbar-brand">
          <a className="navbar-item" href="../">
            <h1 className="title">Freie Schule Bergmeilen</h1>
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

    { props.location.pathname === '/' &&
    <section className="hero is-info is-bold">
      <div className="hero-body">
        <div className="container">
          <Carousel/>
        </div>
      </div>
    </section>
    }




        {/*<div className="container">*/}
          {/*<div className="columns is-vcentered">*/}
            {/*<div className="column">*/}
              {/*<p className="title">*/}
                {/*Documentation*/}
              {/*</p>*/}
              {/*<p className="subtitle">*/}
                {/*Everything you need to <strong>create a website</strong> with Bulma*/}
              {/*</p>*/}
            {/*</div>*/}
            {/*<div className="column is-narrow">*/}
              {/*<div id="carboncontainer">*/}
              {/*</div>*/}

            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}



    {/*<nav className="navbar has-shadow">*/}
      {/*<div className="container">*/}

        {/*</div>*/}
      {/*</div>*/}

    {/*</nav>*/}


    <div className="container">{children()}</div>

    <footer className="footer">
      <div className="container">
        &copy; { new Date().getFullYear() } Freie Schule Bergmeilen
      </div>
    </footer>


  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
