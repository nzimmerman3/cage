import React from 'react'
import Header from "../components/SubHeader"
import Tour from './Tour'
import Photo from "../images/display-photos/neil-krug-7-cropped.jpg"
import ShopHeader from './ShopHeader'
import Product from '../components/Product'
import Signature from '../images/signature-white.png'
import Product1 from '../images/products/yellow-shirt.png'
import ExitBtn from '../images/products/exit-btn.png'

export default function Shop() {

  return (
    <div>
      <Header />

      <div className="shop-header-container">
        <img src={Photo} className="shop-header-img" alt="" />
        <div class="bottom-left">
          {/* <img src={Signature} className="shop-header-signature"/> */}
          <p>SHOP</p>
        </div>
      </div>

      <ShopHeader />

      <div className="shop-background">
        
        {/*===== ProductsList =====*/}
        {/* <div id="outerDiv" class="products row no-gutter center-block vert-center">
          <Product></Product>
        </div> */}
        {/*===== ProductsList =====*/}

        {/*===== ProductView =====*/}
        <div className="product-view row no-gutter center-block vert-center">
          <div id="center-hv" className="product-view-img-container col-lg-6">
            <div className="">
              <img src={Product1}/>
              <div id="center-hv" className="product-view-slider">...</div>
            </div>
          </div>
          <div className="product-view-right-container col-lg-6 ">
            <div id="outerDiv" className="col-lg-11 product-view-info-container">
              <div className="product-view-txt-container">
                <h2 class="row">T-Shirt</h2>
                <h3 class="row">$40.00</h3>
                <p class="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                <div id="center-hv" className="row product-view-add-btn-container">
                  <div>Add to Cart</div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 product-view-exit-btn-container">
              <div className="exit-btn">
                <img src={ExitBtn}/>
              </div>
            </div>
          </div>
        </div>
        {/*===== ProductView =====*/}

      </div>
    </div>
  )
}
