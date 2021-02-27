import React from "react";
import Logo from "../images/cte.png";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function SubHeader() {
  return (
    <div className="sub-navbar">
      <div className="sub-navbar-content">
        <ul className="sub-navbar-left">
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
        <div className="sub-navbar-center" id="logo">
          <li>
            <Link to="/"><img src={Logo} width="245" alt="" /></Link>
          </li>
        </div>
        <ul className="sub-navbar-right">
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

export default SubHeader;
