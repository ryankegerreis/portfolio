import React, { Fragment, Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Nav from './Components/Nav'
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
          <Nav />
        </header>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/connect" component={Connect} />
        </Switch>

        {/* Re implement this once you can lock the screen to one page and scroll down via nav bar. */}
        {/* <Home />
        <About />
        <Skills />
        <Portfolio />
        <Connect /> */}



      </Fragment>
    )
  }
}
