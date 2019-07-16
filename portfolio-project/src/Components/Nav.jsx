import React, { Component, Fragment } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar fixed='bottom' expand='true' bg='light' id='nav' >
          <Navbar.Text>
            <AnchorLink href="#home-link" className="navLink" id='nav-home'>Home</AnchorLink>
          </Navbar.Text>
          <Navbar.Text>
            <AnchorLink href="#about-link" className="navLink" id='nav-about'>About</AnchorLink>
          </Navbar.Text>
          <Navbar.Text>
            <AnchorLink href="#skill-link" className="navLink" id='nav-skills'>Skills</AnchorLink>
          </Navbar.Text>
          <Navbar.Text>
            <AnchorLink href="#portfolio-link" className="navLink" id='nav-port'>Portfolio</AnchorLink>
          </Navbar.Text>
          <Navbar.Text>
            <AnchorLink href="#connect-link" className="navLink" id='nav-connect'>Connect</AnchorLink>
          </Navbar.Text>
          <Navbar.Text>
            <a href="https://drive.google.com/file/d/1rIwie_5ub1pNfpQLAqRJlJTovqKdIS2U/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
          </Navbar.Text>
        </Navbar>
      </Fragment >
    )
  }
}