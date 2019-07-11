import React, { Component, Fragment } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <section id='home-link'>
          <div id='home' className='flex-col'>
            <h1>Hi <span>I'm Ryan</span>.</h1>
            <p>I'm a web developer.</p>
          </div>
        </section>
      </Fragment>
    )
  }
}