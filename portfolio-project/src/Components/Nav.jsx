import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <Fragment>

        <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>Home</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/about'}>About</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/skills'}>Skills</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/portfolio'}>Portfolio</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/connect'}>Connect</Link >
              </li>
            </ul>
          </div>
        </nav>

      </Fragment >
    )
  }
}