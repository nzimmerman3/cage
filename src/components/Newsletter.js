import React from 'react'
import Signature from "../images/signature-white.png";


export default function Newsletter() {
  return (
    <footer className="footer" id="news">
      <div className="footer-content">
        <div className="footer-signature">
          <img src={Signature} width="210" alt="logo" />
        </div>
        <div className="form-box">
          <form action="">
            <h1>Sign Up for Our Newsletter</h1>
            <p>
              Sign up for our newsletter! Get all the latest updates and
              information on upcoming events first!
            </p>
            <div className="input-box">
              {/* <i class="fa fa-envelope-o"></i> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
              ></input>
            </div>
            <button type="button" class="subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
        <div>
          {/*           <p>© 2021 Sony Music Entertainment. All Rights Reserved.</p>
          <p>
            RCA and Design is a registered trademark of RCA Trademark Management
            SA. Used under license.
          </p> */}
          {/* <p><a href="mailto:email@example.com">email@example.com</a></p> */}
        </div>
      </div>
    </footer>
  )
}
