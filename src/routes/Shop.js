import React, { useState } from 'react'
import Header from "../components/SubHeader"
import Tour from './Tour'
import Photo from "../images/display-photos/neil-krug-7-cropped.jpg"
import ShopHeader from './ShopHeader'
import Product from '../components/Product'
import Signature from '../images/signature-white.png'
import Product1 from '../images/products/yellow-shirt.png'
import ExitBtn from '../images/products/exit-btn.png'

export default function Shop() {
  const [filter, setFilter] = useState("all")

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

      <ShopHeader setFilter={setFilter} />

      <div className="shop-background">
        <Product type={filter}></Product>
      </div>
    </div>
  )
}