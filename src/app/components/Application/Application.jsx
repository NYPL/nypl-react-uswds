import React from 'react';

import { Header, navConfig } from '@nypl/dgx-header-component';
import Footer from '@nypl/dgx-react-footer';

import Store from '../../stores/Store.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app-wrapper">
        <Header
          skipNav={{ target: 'mainContent' }}
          navData={navConfig.current}
        />

        <div id="mainContent">
          <div className="usa-grid">
            <div className="usa-width-one-whole">
              <h1>NYPL USDWS</h1>
            </div>
          </div>

          <div className="usa-grid">
            <div className="usa-width-one-third">
              <nav>
                <ul className="usa-sidenav-list">
                  <li>
                    <a href="">
                      Parent link
                    </a>
                  </li>
                  <li>
                    <a href="" className="usa-current">
                      Current page
                    </a>
                    <ul className="usa-sidenav-sub_list">
                      <li>
                        <a href="">
                          Child link
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Child link
                        </a>
                        <ul className="usa-sidenav-sub_list">
                          <li>
                            <a href="">
                              Grandchild link
                            </a>
                          </li>
                          <li>
                            <a href="">
                              Grandchild link
                            </a>
                          </li>
                          <li>
                            <a href="" className="usa-current">
                              Grandchild link
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="">
                          Child link
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Child link
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Child link
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">
                      Parent link
                    </a>
                  </li>
                </ul>
              </nav>

            </div>

            <div className="usa-width-two-thirds">
              <div className="usa-alert usa-alert-success" >
                <div className="usa-alert-body">
                  <h3 className="usa-alert-heading">Success Status</h3>
                  <p className="usa-alert-text">Lorem ipsum dolor sit amet, <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.</p>
                </div>
              </div>

              <form className="usa-search">
                <div role="search">
                  <label className="usa-sr-only" for="search-field">Search</label>
                  <input className="usa-input" id="search-field" type="search" htmlFor="search" />
                  <button className="usa-button" type="submit">
                    <span className="usa-search-submit-text">Search</span>
                  </button>
                </div>
              </form>

              <form className="usa-form">
                <fieldset>
                  <legend>Name</legend>
                  <label for="title">Title <span className="usa-input-label-helper">(optional)</span></label>
                  <input className="usa-input-tiny" id="title" name="title" type="text" />

                  <label for="first-name">First name</label>
                  <input id="first-name" name="first-name" type="text" required aria-required="true" />

                  <label for="middle-name">Middle name <span className="usa-input-label-helper">(optional)</span></label>
                  <input id="middle-name" name="middle-name" type="text" />

                  <label for="last-name">Last name</label>
                  <input id="last-name" name="last-name" type="text" required aria-required="true" />
                </fieldset>
              </form>

              <form className="usa-form-large">
                <fieldset>
                  <legend>Mailing address</legend>
                  <label for="mailing-address-1">Street address 1</label>
                  <input id="mailing-address-1" name="mailing-address-1" type="text" />

                  <label for="mailing-address-2">Street address 2 <span className="usa-input-label-helper">(optional)</span></label>
                  <input id="mailing-address-2" name="mailing-address-2" type="text" />

                  <div>
                    <div className="usa-input-grid usa-input-grid-medium">
                      <label for="city">City</label>
                      <input id="city" name="city" type="text" />
                    </div>

                    <div className="usa-input-grid usa-input-grid-small">
                      <label for="state">State</label>
                      <select id="state" name="state">
                        <option value>- Select -</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                        <option value="AA">AA - Armed Forces Americas</option>
                        <option value="AE">AE - Armed Forces Africa</option>
                        <option value="AE">AE - Armed Forces Canada</option>
                        <option value="AE">AE - Armed Forces Europe</option>
                        <option value="AE">AE - Armed Forces Middle East</option>
                        <option value="AP">AP - Armed Forces Pacific</option>
                      </select>
                    </div>
                  </div>

                  <label for="zip">ZIP</label>
                  <input className="usa-input-medium" id="zip" name="zip" type="text" pattern="[\d]{5}(-[\d]{4})?" />

                  <div className="usa-input-error">
                    <label className="usa-input-error-label" for="input-error">Text input error</label>
                    <span className="usa-input-error-message" id="input-error-message" role="alert">Helpful error message</span>
                    <input id="input-error" name="input-error" type="text" aria-describedby="input-error-message" />
                  </div>

                  <label for="input-success">Text input success</label>
                  <input className="usa-input-success" id="input-success" name="input-success" type="text" />
                </fieldset>
              </form>

              <table>
                <caption>Bordered table</caption>
                <thead>
                  <tr>
                    <th scope="col">Document title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Declaration of Independence</th>
                    <td>Statement adopted by the Continental Congress declaring independence from the British Empire.</td>
                    <td>1776</td>
                  </tr>
                  <tr>
                    <th scope="row">Bill of Rights</th>
                    <td>The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>
                    <td>1791</td>
                  </tr>
                  <tr>
                    <th scope="row">Declaration of Sentiments</th>
                    <td>A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.</td>
                    <td>1848</td>
                  </tr>
                  <tr>
                    <th scope="row">Emancipation Proclamation</th>
                    <td>An executive order granting freedom to slaves in designated southern states.</td>
                    <td>1863</td>
                  </tr>
                </tbody>
              </table>
      
            </div>
          </div>

        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
