import React, { Fragment, Component } from 'react';
import Nav from './Components/Nav'
import Home from './Components/Home'
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
          <Nav />
        </header>
        <Home />
        <Skills />
        <Portfolio />
        <Connect />
      </Fragment>
    )
  }
}
