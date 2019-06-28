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
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/connect" component={Connect} />


        {/* <Home />
        <About />
        <Skills />
        <Portfolio />
        <Connect /> */}


        {/* <header>
          <Nav />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dash} />
          <Route path="/browse" component={Browse} />
          <Route path="/mygoals" component={MyGoals} />
          <Route path="/newgoal" component={NewGoal} />
          <Route path="/editgoal/:id" component={EditGoal} />
          <Route path="/goaldetails/:id" component={GoalID} />
          <Route render={() => <h2>404</h2>} />
        </Switch> */}


      </Fragment>
    )
  }
}
