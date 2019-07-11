import React, { Component, Fragment } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <Fragment>
        <div id='skills' className='flex-row'>
          <div id='skills-header'>
            <h1>These are <span>some skills</span> I've collected.</h1>
          </div>


          <div className='columns'>
            <ul>

              <div className='left'>
                <li><h3>Front End</h3></li>
                <hr />
                <img src="./images/logos/html-5.svg" alt="" srcset="" />
                <li>HTML5</li>
                <img src="./images/logos/css-3.svg" alt="" srcset="" />
                <li>CSS3</li>
                <img src="./images/logos/sass.svg" alt="" srcset="" />
                <li>SASS</li>
              </div>

              <div className='right'>
                <img src="./images/logos/jquery.svg" alt="" srcset="" />
                <li>jQuery</li>
                <img src="./images/logos/bootstrap.svg" alt="" srcset="" />
                <li>Bootstrap</li>
                <img src="./images/logos/react.svg" alt="" srcset="" />
                <li>React.js</li>
              </div>

            </ul>
          </div>

          <div className='columns'>
            <ul>
              <li><h3>Back End</h3></li>
              <hr />
              <img src="./images/logos/javascript.svg" alt="" srcset="" />
              <li>Javascript</li>
              <img src="./images/logos/nodejs.svg" alt="" srcset="" />
              <li>Node.js</li>
              <img src="./images/logos/express.svg" alt="" srcset="" />
              <li>Express.js</li>
              <img src="./images/logos/mongodb.svg" alt="" srcset="" />
              <li>MongoDB</li>
              <img src="./images/logos/mongoose.svg" alt="" srcset="" />
              <li>Mongoose</li>
              <img src="./images/logos/ajax.svg" alt="" srcset="" />
              <li>AJAX</li>
            </ul>
          </div>


        </div>
      </Fragment >
    )
  }

}