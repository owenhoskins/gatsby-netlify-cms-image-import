import React, { PureComponent } from 'react'
import Link from 'gatsby-link';
import logo from '../img/logo.svg';
import fbIcon from '../img/fb-icon.svg';
import './nav.scss'

export default class Nav extends PureComponent {

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

  render() {
    const { isBurgerActive } = this.state
    const { title } = this.props

    const NavLink = ({ to, text }) =>
      <Link className="navbar-item" to={to} onClick={this.handleLinkClick}>
        {text}
      </Link>

    return (
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
                <NavLink to="/angebot/kindergarten" text="Kindergarten" />
                <NavLink to="/angebot/primarstufe" text="Primarstufe" />
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                Philosophie
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                Über uns
              </div>
              <div className="navbar-dropdown">
                <NavLink to="/team" text="Kindergarten" />
                <Link
                  className="navbar-item"
                  to="/team"
                  onClick={this.handleLinkClick}
                >
                  Team
                </Link>
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
