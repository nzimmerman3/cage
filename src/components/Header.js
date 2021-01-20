import React from "react";
import Logo from "../images/cte.png";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <ul className="navbar-left">
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
            <Link to="/tour">Tour</Link>
          </li>
        </ul>
        <div className="navbar-center" id="logo">
          <li>
            <Link to="/"><img src={Logo} width="245" alt="" /></Link>
          </li>
        </div>
        <ul className="navbar-right">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/video">Video</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
