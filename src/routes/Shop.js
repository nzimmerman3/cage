import React from 'react'
import Header from "../components/SubHeader"
import Tour from './Tour'
import Photo from "../images/display-photos/neil-krug-7-cropped.jpg"
import ShopHeader from './ShopHeader'
import Product1 from '../images/products/yellow-shirt.png'
import Product2 from '../images/products/pink-tote.png'


export default function Shop() {

  const products = [Product1, Product2]

  return (
    <div>
        <Header />

        <div className="img-container">
          <img src={Photo} alt="" />
          <div class="bottom-left">
            <p>SHOP</p>
          </div>
        </div>
        
        <ShopHeader/>

        <div className="shop-background">
            {/* Content */}
            <div id="outerDiv" class="products row no-gutter center-block vert-center text-center">

              <div class="col-lg-4">
                <div class="col-lg-6">
                  <div>Product1</div>
                </div>
                <div class="col-lg-6">
                  <div>Product2</div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="col-lg-6">
                  <div>Product3</div>
                </div>
                <div class="col-lg-6">
                  <div>Product4</div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="col-lg-6">
                  <div>Product5</div>
                </div>
                <div class="col-lg-6">
                  <div>Product6</div>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}
