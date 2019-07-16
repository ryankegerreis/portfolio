import React, { Component, Fragment } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Navigation extends Component {
  render() {
    return (
      <Fragment>
        {/* <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light" id='nav'>

          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#home-link" className="nav-link" id='nav-home' >Home</a >
              </li>
              <li className="nav-item">
                <a href="#about-link" className="nav-link" id='nav-about' >About</a >
              </li>
              <li className="nav-item">
                <a href="#skill-link" className="nav-link" id='nav-skills' >Skills</a >
              </li>
              <li className="nav-item">
                <a href="#portfolio-link" className="nav-link" id='nav-port' >Portfolio</a >
              </li>
              <li className="nav-item">
                <a href="#connect-link" className="nav-link" id='nav-connect' >Connect</a >
              </li>
            </ul>
          </div>

        </nav>  */}

        <Navbar className="navbar fixed-bottom navbar-light bg-light" expand='true' id='nav' >
          {/* <Navbar.Brand>
            <span className="navBrand"> CK </span>
          </Navbar.Brand> */}
          {/* <Navbar.Toggle /> */}
          {/* <Navbar.Collapse> */}
          <Navbar.Text className="mr-md-3">
            <AnchorLink href="#home-link" className="navLink" id='nav-home'>Home</AnchorLink>
          </Navbar.Text>
          <Navbar.Text className="mr-md-3">
            <AnchorLink href="#about-link" className="navLink" id='nav-about'>About</AnchorLink>
          </Navbar.Text>
          <Navbar.Text className="mr-md-3">
            <AnchorLink href="#skill-link" className="navLink" id='nav-skills'>Skills</AnchorLink>
          </Navbar.Text>
          <Navbar.Text className="mr-md-3">
            <AnchorLink href="#portfolio-link" className="navLink" id='nav-port'>Portfolio</AnchorLink>
          </Navbar.Text>
          <Navbar.Text className="mr-md-3">
            <AnchorLink href="#connect-link" className="navLink" id='nav-connect'>Connect</AnchorLink>
          </Navbar.Text>
          <Navbar.Text className="mr-md-3">
            <a href="https://drive.google.com/file/d/1rIwie_5ub1pNfpQLAqRJlJTovqKdIS2U/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
          </Navbar.Text>
          {/* </Navbar.Collapse> */}
        </Navbar>
      </Fragment >
    )
  }
}