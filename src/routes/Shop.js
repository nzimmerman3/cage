import React from 'react'
import Header from "../components/SubHeader"
import Tour from './Tour'
import Photo from "../images/display-photos/neil-krug-7-cropped.jpg"
import ShopHeader from './ShopHeader'
import Product1 from '../images/products/yellow-shirt.png'
import Product2 from '../images/products/pink-tote.png'
import Product from './Product'
import Signature from '../images/signature-white.png'


export default function Shop() {

  const products = [Product1, Product2]

  return (
    <div>
        <Header />

        <div className="photo-container">
          <img src={Photo} className="photo" alt="" />
          <div class="bottom-left">
            {/* <img src={Signature} className="photo-signature"/> */}
            <p>SHOP</p>
          </div>
        </div>
        
        <ShopHeader/>

        <div className="shop-background">
            {/* Content */}
            <div id="outerDiv" class="products row no-gutter center-block vert-center text-center">

              <div class="col-lg-2">
                  {/* <div>Product1</div> */}
                  <Product></Product>
              </div>
              <div class="col-lg-2">
                  {/* <div>Product1</div> */}
                  <Product></Product>
              </div>
              <div class="col-lg-2">
                  {/* <div>Product1</div> */}
                  <Product></Product>
              </div>
              <div class="col-lg-2">
                  {/* <div>Product1</div> */}
                  <Product></Product>
              </div>
              <div class="col-lg-2">
                  {/* <div>Product1</div> */}
                  <Product></Product>
              </div>
              <div class="col-lg-2">
                  {/* <div>Product1</div> */}
                  <Product></Product>
              </div>

            </div>
        </div>
    </div>
  )
}
