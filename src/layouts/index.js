import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import fbIcon from '../img/fb-icon.svg';
import 'bulma';

const Navbar = () => (
  <nav className="navbar is-light">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Aktuelles
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/basisstufe">Basisstufe</Link>
        <Link className="navbar-item" to="/philosophy">Leitende Gedanken</Link>
        <Link className="navbar-item" to="/about">Über uns</Link>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://www.facebook.com/Freie-Schule-Bergmeilen-502505593264330/" target="_blank">
          <span className="icon">
            <img src={fbIcon} alt="Freie Schule Bergmeilen auf Facebook" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Freie Schule Bergmeilen" />
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
