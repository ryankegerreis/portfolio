import React, { Component, Fragment } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <Fragment>
        <div id='skills'>
          <div id='skills-header'>
            <h1>These are some skills I've collected.</h1>
          </div>


          <div className='columns'>
            <ul>
              <li><h3>Front End</h3></li>
              <hr />
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>React.js</li>
            </ul>
          </div>

          <div className='columns'>
            <ul>
              <li><h3>Back End</h3></li>
              <hr />
              <li>Javascript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>AJAX</li>
            </ul>
          </div>


          {/* <div id='random'>
            </div> */}


        </div>
      </Fragment >
    )
  }

}