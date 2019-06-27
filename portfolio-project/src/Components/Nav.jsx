import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <Fragment>
        <div className='navbar'>
          <a className='navbar-brand'><Link to={'/portfolio-project/src/Components/Home.jsx'}>Ryan</Link></a>

        </div>



      </Fragment>
    )
  }

}