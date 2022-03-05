import React, { useState } from "react";
import Logo from "../images/cte.png";
import Cart from "../images/shopping-cart.png";
import Menu from "../images/menu-bars.png";
import Signature from "../images/signature-white.png"

function ShopHeader(props) {
  function changeFilter(type) {
    props.setFilter(type)
  }

  // const [dispCart, setDispCart] = useState(false)
  return (

    <div className="shop-navbar">
      <div className="shop-navbar-container">
        <ul className="shop-navbar-left">
          <a>
            <li>
              <p className="line" onClick={() => changeFilter("all")}>Tour Merch</p>
            </li>
          </a>
          <a>
            <li>
              <p className="line" onClick={() => changeFilter("music")}>Music</p>
            </li>
          </a>
          <a>
            <li>
              <p className="line" onClick={() => changeFilter("apparel")}>Apparel</p>
            </li>
          </a>
          <a>
            <li>
              <p className="line" onClick={() => changeFilter("accessory")}>Accessories</p>
            </li>
          </a>
        </ul>
        <p>
          <a>
            <li className="cart-container mx-auto vert-center">
              <img src={Cart} onClick={() => props.setShowCart(!(props.showCart))} />
            </li>
          </a>

          < a >
            <li className="signature-container">
              <img src={Signature} />
            </li>
          </a>

        </p>
      </div>
    </div >
  );
}

export default ShopHeader;
