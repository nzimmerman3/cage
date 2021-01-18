import React from "react";
import Signature from "../images/signature-white.png";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-signature">
          <img src={Signature} width="200" alt="logo" />
        </div>
        <div>
          <p>© 2021 Sony Music Entertainment. All Rights Reserved.</p>
          <p>
            RCA and Design is a registered trademark of RCA Trademark Management
            SA. Used under license.
          </p>
          {/* <p><a href="mailto:email@example.com">email@example.com</a></p> */}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <ul className="socials">
            <a href="#">
              <li>
                <i class="fa fa-youtube" aria-hidden="true"></i>
              </li>
            </a>
            <a href="#">
              <li>
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </li>
            </a>
            <a href="#">
              <li>
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </li>
            </a>
            <a href="#">
              <li>
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </li>
            </a>
          </ul>
          <p>
            &copy; 2021 SONY MUSIC ENTERTAINMENT UK LTD. | PRIVACY &amp; COOKIE
            POLICY
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
