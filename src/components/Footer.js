import React from "react";

function Footer() {
  return (

    <div className="footer-bottom">
      <div className="footer-bottom-container">
        <ul className="socials">
          <a href="https://www.youtube.com/user/cagetheelephant" target="_blank">
            <li>
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </li>
          </a>
          <a href="https://twitter.com/cagetheelephant" target="_blank">
            <li>
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </li>
          </a>
          <a href="https://www.facebook.com/cagetheelephant" target="_blank">
            <li>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </li>
          </a>
          <a href="https://www.instagram.com/cagetheelephant" target="_blank">
            <li>
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </li>
          </a>
        </ul>
        <p>
          &copy; 2021
          
          <a href="https://tools.sonymusiccreative.com/privacy/PCP_UK.pdf">
            <p className="line">PRIVACY &amp; COOKIE POLICY</p>
          </a>
          <a><p>|</p></a>
          <a href="https://www.sonymusic.co.uk/">
            <p className="line">SONY MUSIC ENTERTAINMENT UK LTD.</p>
          </a>
          

        </p>
      </div>
    </div>
  );
}

export default Footer;
