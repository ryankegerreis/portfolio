import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom';

export default class Connect extends Component {
  render() {
    return (
      <Fragment>
        <section id='connect-link'>
          <div id='connect' className='flex-row'>

            <div className='connect-header'>
              <h1>Thanks for stopping by. <span>Let's connect.</span></h1>
            </div>

            <div className='columns'>
              <a href="https://www.linkedin.com/in/ryankegerreis/">
                <img src={"../images/001-linkedin.png"} alt="Linkedin" className="logo-image" />
              </a>
            </div>

            <div className='columns'>
              <a href="https://github.com/ryankegerreis">
                <img src={"../images/002-github.png"} alt="Github" className="logo-image" />
              </a>
            </div>

            <div className='columns'>
              <a href="mailto:ryankegerreis@icloud.com">
                <img src={"../images/003-email.png"} alt="Email" className="logo-image" />
              </a>
            </div>
          </div>
        </section>
      </Fragment >
    )
  }

}