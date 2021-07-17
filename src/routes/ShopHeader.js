import React from "react";
import Logo from "../images/cte.png";
import Cart from "../images/shopping-cart.png";
import Menu from "../images/menu-bars.png";
import Signature from "../images/signature-white.png"
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
            <Link ><p className="line">Tour Merch</p></Link>
          </li>
          <li>
            <Link ><p className="line">Music</p></Link>
          </li>
          <li>
            <Link ><p className="line">Apparel</p></Link>
          </li>
          <li>
            <Link ><p className="line">Accessories</p></Link>
          </li>
        </ul>
        
        <ul className="shop-navbar-right ">

          <li className="cart-container mx-auto vert-center">
            <img src={Cart}/>
          </li>
          <li className="signature-container">
            <img src={Signature}/>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default ShopHeader;
