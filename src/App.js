import './styles/styles.css';
import logo_image from './images/spaceWardLogo_small.png'
import example_image from './images/nightfire2.gif'
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  //hooks and use states
  const [logging_in, setLogIn] = useState(false);

  const login_btn = (
    <div className='log_box'>
      <div className='button-wrapper'>
      <button type='button' className='login-btn button' onClick={ () => setLogIn(true)}>Login</button>
      
      </div>
      <div className='button-wrapper 1'>
      <button type='button' className='signup-btn button' onClick={ () => setLogIn(true)}>Sign Up</button>
      </div>
    </div>
  );

  const logging_in_box = (
    <div className='log_box'>
      <p>placeholder: username</p>
      <p>placeholder: password</p>
    </div>
  );

  return (
    <div className='App'>
      <header className='header'>
        <div className='logo'>
        <img src={logo_image} className='SW-Logo' alt='logo' />
        </div>
        <div className='account'>
          {logging_in ? logging_in_box : login_btn}
        </div>
      </header>

      <div className='whole-lower'>
        <div className='left-panels'>
          <div className='stats'>

            <div className='statblock'>
              <li className="list-inline-item">
                <h4>Total Hash Power:</h4>
              </li>
              <li className="list-inline-item stat-align-right">
                <h4>0</h4>
              </li>
              <li className="list-inline-item">
                <h4>My Hash Power:</h4>
              </li>
              <li className="list-inline-item stat-align-right">
                <h4>0</h4>
              </li>
              <li className="list-inline-item">
                <h4>Total Block Reward:</h4>
              </li>
              <li className="list-inline-item stat-align-right">
                <h4>0</h4>
              </li>
              <li className="list-inline-item">
                <h4>My Block Reward:</h4>
              </li>
              <li className="list-inline-item stat-align-right">
                <h4>0</h4>
              </li>
              <li className="list-inline-item">
                <h4>Time Between Blocks:</h4>
              </li>
              <li className="list-inline-item stat-align-right">
                <h4>0</h4>
              </li>
            </div>

          </div>
        </div>
        <div className='main-game'>
          <img src={example_image} className='example_image' alt='mg' />
        </div>

        
      </div>
      <div className='footer'>
          <div className='container'>
            <div className='foot-row1 ft-row'>
              <div className='block-title'>
                <h2 className="text-uppercase font-12">Quick Links:</h2>
              </div>
              <div className="block-content">
                <ul className="text-uppercase font-10">
                  <li>
                    <a href="/contact-us">Contact us</a>
                  </li>
                  <li>
                    <a href="/employee-tools">Employee tools</a>
                  </li>
                  <li>
                    <a href="/suppliers-and-small-business">Suppliers and Small Business</a>
                  </li>
                  <li>
                    <a href="/compliance-notices">Compliance Notices</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='foot-row2 ft-row'>
              <div className="block-title">
                <h2 className="text-uppercase font-12">Connect:</h2>
              </div>
              <div className="block-content">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="https://twitter.com/Spaceward_Crypt" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon="fa-solid fa-hashtag" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.facebook.com/SAICinc" target="_blank" rel="noreferrer">
                      facebook
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.linkedin.com/companies/saicinc" target="_blank" rel="noreferrer">
                      linkedin
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/saicinc" target="_blank" rel="noreferrer">
                      instagram
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.youtube.com/scienceapplications" target="_blank" rel="noreferrer">
                      youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>  

            <div className='foot-row3 ft-row'>
              <div className="block-content">
                <ul className="text-uppercase font-10 list-inline list-inline-separator">
                  <li className="list-inline-item">
                    <span className='copyright'>© 2022 Space Ward LLC</span>
                  </li>
                  <li className="list-inline-item">
                    <a href="/privacy-statement">Privacy statement</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/terms-of-use">Terms of Use</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/copyright">Copyright</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://investors.saic.com/corporate-governance">Corporate Governance</a>
                  </li>
                    <li className="list-inline-item">
                    <a href="/sitemap">Site Map</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

    </div>
  );
}

export default App;
