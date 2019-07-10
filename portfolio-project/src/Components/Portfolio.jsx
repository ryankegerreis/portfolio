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

          <div className='columns overlaythree'>
            <h3>{portfolioProjects[0].name}</h3>
            <a href={portfolioProjects[0].live} title='View Site' className='pseudover v2'>
              <img src={portfolioProjects[0].img} alt={portfolioProjects[0].alt} />
            </a>
          </div>

          <div className='columns overlaythree'>
            <h3>{portfolioProjects[1].name}</h3>
            <a href={portfolioProjects[1].live} title='View Site' className='pseudover v2'>
              <img src={portfolioProjects[1].img} alt={portfolioProjects[1].alt} />
            </a>
          </div>

          <div className='columns overlaythree'>
            <h3>{portfolioProjects[2].name}</h3>
            <a href={portfolioProjects[2].live} title='View Site' className='pseudover v2'>
              <img src={portfolioProjects[2].img} alt={portfolioProjects[2].alt} />
            </a>
          </div>

        </div>
      </Fragment>
    )
  }

}