import React, { Component, Fragment } from 'react'

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div id='about' className='flex'>
          <h1>A little about me.</h1>
          <p>But please, hold the applause.</p>
        </div>
      </Fragment>
    )
  }
}