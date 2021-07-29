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

function ShopHeader(props) {
  function changeFilter(type) {
    props.setFilter(type)
  }
  return (
    <div className="shop-navbar">
      <div className="shop-navbar-content">
        <ul className="shop-navbar-left">
          <li>
            <div className="line shop-line" onClick={() => changeFilter("all")}>Tour Merch</div>
          </li>
          <li>
            <div className="line shop-line" onClick={() => changeFilter("music")}>Music</div>
          </li>
          <li>
            <div className="line shop-line" onClick={() => changeFilter("apparel")}>Apparel</div>
          </li>
          <li>
            <div className="line shop-line" onClick={() => changeFilter("accessory")}>Accessories</div>
          </li>
        </ul>

        <ul className="shop-navbar-right ">

          <li className="cart-container mx-auto vert-center">
            <img src={Cart} />
          </li>
          <li className="signature-container">
            <img src={Signature} />
          </li>

        </ul>
      </div>
    </div>
  );
}

export default ShopHeader;
