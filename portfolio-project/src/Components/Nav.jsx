import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light flex" id='nav'>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto mx-auto">
              <li className="nav-item">
                <a href="#home-link" className="nav-link" >Home</a >
              </li>
              <li className="nav-item">
                <a href="#about-link" className="nav-link" >About</a >
              </li>
              <li className="nav-item">
                <a href="#skill-link" className="nav-link" >Skills</a >
              </li>
              <li className="nav-item">
                <a href="#portfolio-link" className="nav-link" >Portfolio</a >
              </li>
              <li className="nav-item">
                <a href="#connect-link" className="nav-link" >Connect</a >
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