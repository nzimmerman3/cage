import React from 'react'
import Product1 from '../images/products/pink-tote.png'

function Product({product}) {
    return (
        <div>

            <div class="text-center">
                <div className="product-container">
                    <img src={Product1} width="100"/>
                </div>
                <div className="product-name">T-Shirt</div>
                <div className="product-price">$40.00</div>
            </div>

        </div>
    )
}

export default Product