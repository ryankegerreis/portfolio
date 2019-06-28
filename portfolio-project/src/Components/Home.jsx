import React, { Component, Fragment } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <body>


          <div className="st-container">

            <input type="radio" name="radio-set" checked="checked" id="st-control-1" />
            <a href="#st-panel-1">Serendipity</a>

            <input type="radio" name="radio-set" id="st-control-2" />
            <a href="#st-panel-2">Happiness</a>

            <input type="radio" name="radio-set" id="st-control-3" />
            <a href="#st-panel-3">Tranquillity</a>

            <input type="radio" name="radio-set" id="st-control-4" />
            <a href="#st-panel-4">Positivity</a>

            <input type="radio" name="radio-set" id="st-control-5" />
            <a href="#st-panel-5">Passion</a>

            <div className="st-scroll">

              <section className="st-panel" id="st-panel-1">
                <div className="st-deco" data-icon="H"></div>
                <h2>Serendipity</h2>
                <p>Banksy adipisicing eiusmod banh mi sed...</p>
              </section>

              <section className="st-panel st-color" id="st-panel-2">
                {/* <!-- ... --> */}
              </section>

              {/* <!-- ... st-panel-3, st-panel-4, st-panel-5 --> */}

            </div>
            {/* <!-- // st-scroll --> */}

          </div>
          {/* <!-- // st-container --> */}


        </body>
      </Fragment>
    )
  }

}