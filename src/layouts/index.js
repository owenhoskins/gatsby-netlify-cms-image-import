import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import fbIcon from '../img/fb-icon.svg';
import 'bulma';

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () =>
  <div style={{ padding: 20 }}>
    <Slider
      dots
      infinite
      speed={1000}
      slidesToShow={1}
      slidesToScroll={1}
      adaptiveHeight={false}
    >
      <div style={{
        background: 'url(img/foto-team.jpg) 50% 50% no-repeat',
        height: 500
      }} />

      <div><h3>2</h3></div>
    </Slider>
  </div>



const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="../">
          <h1 className="subtitle">Freie Schule Bergmeilen</h1>
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
                <img src={fbIcon} alt="Freie Schule Bergmeilen auf Facebook" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);


const TemplateWrapper = ({ children, ...props }) => (
  <div>
    <Helmet title="Freie Schule Bergmeilen" />
    <section className="hero is-info is-medium is-bold">
      <div className="container">
        <div className="hero-head">
          <Navbar/>
        </div>
        { props.location.pathname === '/' &&
        <div className="hero-body" style={{ padding: '2rem 10rem' }}>
          <Carousel/>
        </div>
        }
      </div>
    </section>

    <div className="column is-8 is-offset-2">
    <div>{children()}</div>
    </div>

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
