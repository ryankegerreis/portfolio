import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom';

export default class Connect extends Component {
  render() {
    return (
      <Fragment>
        <div id='connect' className='flex-row'>

          <div className='connect-header'>
            <h1>Thanks for stopping by. Let's connect.</h1>
          </div>

          <div className='columns'>
            <img src={"../images/001-linkedin.png"} alt="Linkedin" className="logo-image" />
          </div>

          <div className='columns'>
            <img src={"../images/002-github.png"} alt="Github" className="logo-image" />
          </div>

          <div className='columns'>
            <a href="https://www.linkedin.com/in/ryankegerreis/"></a>
            <img src={"../images/003-email.png"} alt="Email" className="logo-image" />
          </div>

        </div>
      </Fragment>
    )
  }

}