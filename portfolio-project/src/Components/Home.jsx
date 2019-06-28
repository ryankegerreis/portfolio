import React, { Component, Fragment } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div id='home' className='flex'>
          <h1>Hi, I'm Ryan.</h1>
          <p>I'm a web developer.</p>
        </div>
      </Fragment>
    )
  }
}