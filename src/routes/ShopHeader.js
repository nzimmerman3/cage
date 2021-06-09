import React from "react";
import Logo from "../images/cte.png";
import Cart from "../images/shopping-cart.png";
import Menu from "../images/menu-bars.png";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function ShopHeader() {
  return (
    <div className="shop-navbar">
      <div className="shop-navbar-content">
        <ul className="shop-navbar-left">
          <li>
            <a ><div><img src={Menu} height="35"/></div></a>
          </li>
        </ul>
        <div className="shop-navbar-center" id="logo">
            <a> <div className="shop-header"> Shop </div> </a>
        </div>
        <ul className="shop-navbar-right">
          <li>
            <a ><div><img src={Cart} height="30"/></div></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShopHeader;
