import React from 'react'
import Header from "../components/SubHeader"
import Tour from './Tour'
import Photo from "../images/display-photos/neil-krug-7-cropped.jpg"
import ShopHeader from './ShopHeader'

export default function Shop() {
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
        </div>
    </div>
  )
}
