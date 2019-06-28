import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <Fragment>

        {/* Bootstrap version */}
        <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light flex" id='nav'>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto mx-auto">
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


        {/* Flexbox version */}
        {/* <nav id='nav'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Connect</li>
          </ul>
        </nav> */}
      </Fragment >
    )
  }
}