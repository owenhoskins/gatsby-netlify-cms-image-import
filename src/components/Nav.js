import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link';
import logo from '../img/logo.svg';
import fbIcon from '../img/fb-icon.svg';
import './nav.scss'
import _ from 'lodash'

export default class Nav extends PureComponent {

  static propTypes = {
    title: PropTypes.string.isRequired,
    pages: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
    }))
  }

  state = {
    isBurgerActive: false
  }

  handleToggleBurger = () => {
    this.setState({
      isBurgerActive: !this.state.isBurgerActive
    })
  }

  handleLinkClick = () => {
    this.setState({
      isBurgerActive: false
    })
  }

  renderBrand() {
    const { isBurgerActive } = this.state
    const { title } = this.props
    return (
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
          <h1 className="title">{title}</h1>
        </a>

        <div
          className={
            `navbar-burger burger
            ${isBurgerActive && 'is-active'}`
          }
          onClick={this.handleToggleBurger}
        >
          <span/>
          <span/>
          <span/>
        </div>
      </div>
    )
  }

  render() {
    const { isBurgerActive } = this.state
    const { pages } = this.props

    const pagesBySection = _.groupBy(pages, 'section')

    const NavLink = ({ to, text }) =>
      <Link
        activeClassName="is-active"
        className="navbar-item"
        to={to}
        onClick={this.handleLinkClick}
      >
        {text}
      </Link>

    const renderAddedPages = (section) =>
      (pagesBySection[section] || [])
        .map(({ title, path }) =>
          <NavLink key={path} to={path} text={title} />
        )


    return (
      <nav className="navbar" style={{ marginTop: '0.75rem'}}>
        { this.renderBrand() }

        <div
          className={
            `navbar-menu
            ${isBurgerActive && 'is-active'}`
          }
        >
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                Angebot
              </div>
              <div className="navbar-dropdown">
                {renderAddedPages('Angebot')}
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                Philosophie
              </div>
              <div className="navbar-dropdown">
                {renderAddedPages('Philosophie')}
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                Über uns
              </div>
              <div className="navbar-dropdown">
                <NavLink to="/team" text="Team"/>
                {renderAddedPages('Über uns')}
              </div>
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
    )
  }
}
