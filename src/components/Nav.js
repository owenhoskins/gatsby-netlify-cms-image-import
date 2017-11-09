import React, { PureComponent } from 'react'
import Link from 'gatsby-link';
import logo from '../img/logo-tree.svg';
import fbIcon from '../img/fb-icon.svg';

export default class Nav extends PureComponent {

  state = {
    isBurgerActive: false
  }

  handleToggleBurger = () => {
    this.setState({
      isBurgerActive: !this.state.isBurgerActive
    })
  }

  render() {
    const { isBurgerActive } = this.state
    const { title } = this.props
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
                <Link className="navbar-item" to="/angebot/basisstufe">
                  Basisstufe
                </Link>
                <Link className="navbar-item" to="/angebot/primarstufe">
                  Primarstufe
                </Link>
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
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/team">
                    Team
                  </Link>
                </div>
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
