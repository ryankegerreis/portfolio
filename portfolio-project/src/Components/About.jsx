import React, { Component, Fragment } from 'react'

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div id='about' className='flex'>
          <h1>A little about me.</h1>
          <p>My name is Ryan Kegerreis.</p>
          <h1>A little more about me.</h1>
          <p>My background is in startups and venture capital. I was the first employee at Global Accelerated Ventures, a small VC firm in South Florida. But after working closely with developers for several years, I realized I wanted to be one. Now I have a firm foundation in designing and build web based applications and websites.</p>
        </div>
      </Fragment>
    )
  }
}