import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <Fragment>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to={'/home'}>RK</Link >
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/home'}>Home</Link >
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