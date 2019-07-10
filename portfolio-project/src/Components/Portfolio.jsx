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
            <h3>Chicken Run</h3>
            <img src={portfolioProjects[0].img} alt="" />
          </div>

          <div className='columns'>
            <h3>Reinvest</h3>
            <img src={portfolioProjects[1].img} alt="" />
          </div>

          <div className='columns'>
            <h3>Promise</h3>
            <img src={portfolioProjects[2].img} alt="" />
          </div>

        </div>
      </Fragment>
    )
  }

}