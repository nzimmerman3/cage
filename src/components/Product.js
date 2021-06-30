import React from 'react'
import Product1 from '../images/products/yellow-shirt.png'
import Product2 from '../images/products/pink-tote.png'

const products = {
  1: {
    "image": Product1,
    "name": "T-Shirt",
    "price": "$40.00"
    //TODO add category (tour merch, music, apparel, etc.)
  },
  2: {
    "image": Product2,
    "name": "Pink Tote",
    "price": "$20.00"
  }
}

function Product(props) {
  const product = products[props.id]
  return (
    <div>
      <div class="text-center">
        <div className="product-container">
          <img src={product["image"]} width="100" />
        </div>
        <div className="product-name">{product.name}</div>
        <div className="product-price">{product.price}</div>
      </div>

    </div>
  )
}

export default Product