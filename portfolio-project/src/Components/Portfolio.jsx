import React, { Component, Fragment } from 'react'
import portfolioProjects from './ProjectData'

export default class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <div id='portfolio' className='flex-row'>
          <div id='portfolio-header'>
            <h1>This is my portfolio.</h1>
          </div>

          <div className='columns'>
            <p>Isn't it cool?</p>
            <img src={portfolioProjects[0].img} alt="" width='400px' />
          </div>

          <div className='columns'>
            <p>Stuff</p>
          </div>

          <div className='columns'>
            <p>More Stuff</p>
          </div>




        </div>
      </Fragment>
    )
  }

}