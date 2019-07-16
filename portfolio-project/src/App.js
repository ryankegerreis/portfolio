import React, { Fragment, Component } from 'react';
import Navigation from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import Connect from './Components/Connect'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Navigation />
        </header>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Connect />
      </Fragment>
    )
  }
}
