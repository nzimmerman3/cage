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
            <Link to="/news"><p className="line">News</p></Link>
          </li>
          <li>
            <Link to="/music"><p className="line">Music</p></Link>
          </li>
          <li>
            <Link to="#tour"><p className="line">Tour</p></Link>
            {/* FIXME: currently going from /music to /music#tour instead of #tour */}
          </li>
        </ul>
        <div className="sub-navbar-center" id="logo">
          <li>
            <Link to="/"><img src={Logo} width="245" alt="" /></Link>
          </li>
        </div>
        <ul className="sub-navbar-right">
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

export default SubHeader;
