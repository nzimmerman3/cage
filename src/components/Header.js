import React from "react";
import Logo from "../images/cte.png";

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <ul className="navbar-left">
          <a href="#news">
            <li>News</li>
          </a>
          <a href="#">
            <li>Music</li>
          </a>
          <a href="#tour">
            <li>Tour</li>
          </a>
        </ul>
        <div className="navbar-center" id="logo">
          <a href="#">
            <img src={Logo} width="245" alt="" />
          </a>
        </div>
        <ul className="navbar-right">
          <a href="#">
            <li>Shop</li>
          </a>
          <a href="#">
            <li>Video</li>
          </a>
          <a href="#">
            <li>Photos</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
