import React from 'react'
import { useSelector } from 'react-redux'

//TODO need to make cart contents look different than just normal products

const CartContents = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart)
  let totalPrice = 0
  return (
    <div>
      {cart.map((product) => {
        totalPrice += Number(product.price.substring(1))

        return (
          <div
            className="col-sm-2 product-container" >
            <img id="image" src={product.image} />
            <h3 id="name">{product.name}</h3>
            {/* <h4>{product.price}</h4> */}
          </div>)
      })}
      <h3 style={{ margin: "auto", color: "white" }} >Total Price: ${totalPrice}</h3>
    </div>

  )
}

export default CartContents