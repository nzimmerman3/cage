import React from "react";
import Logo from "../images/cte.png";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <div className="home-navbar">
      <div className="home-navbar-content">
        <ul className="home-navbar-left">
          <li>
            <Link to="/news"><p className="line">News</p></Link>
          </li>
          <li>
            <Link to="/music"><p className="line">Music</p></Link>
          </li>
          <li>
            <a href="#tour"><p className="line">Tour</p></a>
          </li>
        </ul>
        <div className="home-navbar-center" id="logo">
          <li>
            <Link to="/"><img src={Logo} width="245" alt="" /></Link>
          </li>
        </div>
        <ul className="home-navbar-right">
          <li>
            <Link to="/shop"><p className="line">Shop</p></Link>
          </li>
          <li>
            <Link to="/video"><p className="line">Video</p></Link>
          </li>
          <li>
            <Link to="/photos"><p className="line">Photos</p></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
