import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './App.css'

const App = () => (
  <div className="popup-container">
    <h1>welcome to page</h1>
    <form>
      <label htmlFor="name">username</label>
      <br />
      <input id="name" type="text" placeholder="enter username" />
      <br />
      <label htmlFor="password">enter password</label>
      <br />
      <input id="password" type="password" placeholder="enter password" />
      <div className="button">
        <button type="button" className="trigger-button">
          login
        </button>

        <button type="button" className="trigger-button">
          logout
        </button>
      </div>
    </form>
    <Popup
      modal
      trigger={
        <div className="button">
          <p>new user</p>

          <button type="button" className="trigger-button">
            Create New Account
          </button>
        </div>
      }
    >
      {close => (
        <>
          <div>
            <form className="signupContainer">
              <h1>Add new User Details</h1>
              <label htmlFor="username">Fullname</label>
              <br />
              <input id="username" type="text" placeholder="enter username" />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" placeholder="enter your email" />
              <br />
              <label htmlFor="number">Mobile Number</label>
              <br />
              <input type="text" placeholder="enter your mobile number" />
              <br />
              <label htmlFor="address">Address</label>
              <br />
              <textarea placeholder="enter your address" />
              <br />
              <label htmlFor="city">City</label>
              <br />
              <input id="city" type="type" placeholder="enter your city" />
              <br />
              <label htmlFor="state">State</label>
              <br />
              <input id="state" type="type" placeholder="enter your state" />
              <br />
              <label htmlFor="pincode">Pincode</label>
              <br />
              <input
                id="pincode"
                type="type"
                placeholder="enter your pincode"
              />
              <br />
              <label htmlFor="country">Country</label>
              <br />
              <input
                id="country"
                type="type"
                placeholder="enter your country"
              />
              <br />
              <label htmlFor="companyname">Company Name</label>
              <br />
              <input
                id="companyname"
                type="type"
                placeholder="enter your companyname"
              />
              <br />
              <label htmlFor="occupation">Occupation</label>
              <br />
              <input
                id="occupation"
                type="type"
                placeholder="enter your Occupation"
              />
              <br />
              <label htmlFor="experience">Year Of Experience</label>
              <br />
              <input
                id="experience"
                type="type"
                placeholder="year of experience"
              />
              <br />

              <div className="button">
                <button type="button" className="trigger-button">
                  Add Details
                </button>
              </div>
            </form>
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            back
          </button>
        </>
      )}
    </Popup>
  </div>
)

export default App
