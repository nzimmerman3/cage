import React, { useState } from 'react'
import Header from "../components/SubHeader"
import Photo from "../images/display-photos/neil-krug-7-cropped.jpg"
import ShopHeader from './ShopHeader'
import Product from '../components/Product'


export default function Shop() {
  const [filter, setFilter] = useState("all")
  const [showCart, setShowCart] = useState(false)

  return (
    <div>
      <Header />



      <div className="shop-header-container">
        <img src={Photo} className="shop-header-img" alt="" />
        <div class="bottom-left">
          <p>SHOP</p>
        </div>
      </div>

      <ShopHeader setFilter={setFilter} setShowCart={setShowCart} showCart={showCart} />

      <div className="shop-background">
        <Product type={filter} showCart={showCart} setShowCart={setShowCart} ></Product>
      </div>
    </div>
  )
}