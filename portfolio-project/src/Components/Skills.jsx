import React, { Component, Fragment } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <Fragment >
        <section id='skill-link'>
          <div id='skills' className='parent'>
            <section></section>
            <div id='skills-header'>
              <h1>These are <span>some skills</span> I've collected.</h1>
            </div>

            <div className='child1'>

              <table align="center">
                <tr><img src="./images/logos/html-5.svg" alt="" srcset="" /></tr>
                <tr> <p>HTML5</p> </tr>
                <tr><img src="./images/logos/css-3.svg" alt="" srcset="" /></tr>
                <tr><p>CSS3</p></tr>
                <tr><img src="./images/logos/sass.svg" alt="" srcset="" /></tr>
                <tr><p>SASS</p></tr>
              </table>

            </div>

            <div className='child2'>

              <table align="center">
                <tr><img src="./images/logos/jquery.svg" alt="" srcset="" /></tr>
                <tr> <p>HTML5</p> </tr>
                <tr><img src="./images/logos/bootstrap.svg" alt="" srcset="" /></tr>
                <tr><p>CSS3</p></tr>
                <tr><img src="./images/logos/react.svg" alt="" srcset="" /></tr>
                <tr><p>SASS</p></tr>
              </table>


            </div>



            <div className='child3'>


              <table align="center">
                <tr><img src="./images/logos/javascript.svg" alt="" srcset="" /></tr>
                <tr> <p>Javascript</p> </tr>
                <tr><img src="./images/logos/nodejs.svg" alt="" srcset="" /></tr>
                <tr><p>Node.js</p></tr>
                <tr><img src="./images/logos/express.svg" alt="" srcset="" /></tr>
                <tr><p>Express.js</p></tr>
              </table>



            </div>

            <div className='child4'>

              <table align="center">
                <tr><img src="./images/logos/mongodb.svg" alt="" srcset="" /></tr>
                <tr> <p>MongoDB</p> </tr>
                <tr><img src="./images/logos/mongoose.svg" alt="" srcset="" /></tr>
                <tr><p>Mongoose</p></tr>
                <tr><img src="./images/logos/ajax.svg" alt="" srcset="" /></tr>
                <tr><p>AJAX</p></tr>
              </table>



            </div>



          </div>
        </section>
      </Fragment >
    )
  }

}