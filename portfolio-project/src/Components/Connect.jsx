import React, { Component, Fragment } from 'react'

export default class Connect extends Component {
  render() {
    return (
      <Fragment>
        <div id='connect' className='flex-col'>
          <div>
            <h1>Thanks for stopping by. Let's connect.</h1>
          </div>
          {/* <div> */}
          <img src="../../public/images/001-linkedin.png" alt="" className='logo-image' />
          {/* </div> */}
        </div>
      </Fragment>
    )
  }

}