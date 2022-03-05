import React, { useState } from 'react'
import Product1 from '../images/products/yellow-shirt.png'
import Product2 from '../images/products/pink-tote.png'
import Product3 from '../images/products/black-bandana.png'
import Product4 from '../images/products/social-cues-vinyl.png'
import ExitBtn from '../images/products/exit-btn.png'
import cartReducer from "../reducers/cart"
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions'
import CartContents from "../components/CartContents.js"

// var productToDisplay = {
//   "image": Product1,
//   "name": "Default",
//   "price": "$0.00",
//   //TODO add category (tour merch, music, apparel, etc.)
//   //TODO add description
//   "desc": "Description"
// }

const VIEWPRODUCTS = 'products';
const VIEWPRODUCT = 'product';

function Product(props) {

  const [dispProduct, setDispProduct] = useState({
    "image": Product1,
    "name": "T-Shirt",
    "price": "$40.00",
    "category": "apparel",
    "desc": "Custom dip-dye t-shirt featuring Cage the Elephant logo on front left chest and 2019 tour dates on the back."
  })

  const [view, setView] = useState(VIEWPRODUCTS);

  const [products] = useState([
    {
      "image": Product1,
      "name": "T-Shirt",
      "price": "$40.00",
      "category": "apparel",
      "desc": "Custom dip-dye t-shirt featuring Cage the Elephant logo on front left chest and 2019 tour dates on the back."
    },
    {
      "image": Product2,
      "name": "Tote Bag",
      "price": "$20.00",
      "category": "accessory",
      "desc": "Light pink tote bag featuring melted suit portrait design on one side."
    },
    {
      "image": Product3,
      "name": "Bandana",
      "price": "$16.00",
      "category": "accessory",
      "desc": "Black bandana featuring artwork from the Tell Me I'm Pretty album."
    },
    {
      "image": Product4,
      "name": "Social Cues",
      "price": "$40.00",
      "category": "music",
      "desc": "[TrackList]"
    },
    {
      "image": Product1,
      "name": "T-Shirt",
      "price": "$40.00",
      "category": "apparel",
      "desc": "Custom dip-dye t-shirt featuring Cage the Elephant logo on front left chest and 2019 tour dates on the back."
    },
    {
      "image": Product2,
      "name": "Tote Bag",
      "price": "$20.00",
      "category": "accessory",
      "desc": "Light pink tote bag featuring melted suit portrait design on one side."
    },
    {
      "image": Product3,
      "name": "Bandana",
      "price": "$16.00",
      "category": "accessory",
      "desc": "Black bandana featuring artwork from the Tell Me I'm Pretty album."
    },
    {
      "image": Product4,
      "name": "Social Cues",
      "price": "$40.00",
      "category": "music",
      "desc": "[TrackList]"
    },
    {
      "image": Product1,
      "name": "T-Shirt",
      "price": "$40.00",
      "category": "apparel",
      "desc": "Custom dip-dye t-shirt featuring Cage the Elephant logo on front left chest and 2019 tour dates on the back."
    },
    {
      "image": Product2,
      "name": "Tote Bag",
      "price": "$20.00",
      "category": "accessory",
      "desc": "Light pink tote bag featuring melted suit portrait design on one side."
    },
    {
      "image": Product3,
      "name": "Bandana",
      "price": "$16.00",
      "category": "accessory",
      "desc": "Black bandana featuring artwork from the Tell Me I'm Pretty album."
    },
    {
      "image": Product4,
      "name": "Social Cues",
      "price": "$40.00",
      "category": "music",
      "desc": "[TrackList]"
    },
    {
      "image": Product1,
      "name": "T-Shirt",
      "price": "$40.00",
      "category": "apparel",
      "desc": "Custom dip-dye t-shirt featuring Cage the Elephant logo on front left chest and 2019 tour dates on the back."
    },
    {
      "image": Product2,
      "name": "Tote Bag",
      "price": "$20.00",
      "category": "accessory",
      "desc": "Light pink tote bag featuring melted suit portrait design on one side."
    },
    {
      "image": Product3,
      "name": "Bandana",
      "price": "$16.00",
      "category": "accessory",
      "desc": "Black bandana featuring artwork from the Tell Me I'm Pretty album."
    },
    {
      "image": Product4,
      "name": "Social Cues",
      "price": "$40.00",
      "category": "music",
      "desc": "[TrackList]"
    },
  ])

  const dispatch = useDispatch()

  const renderViewProducts = () => (
    <div id="outerDiv" class="products row no-gutter center-block vert-center">
      {products.map((product, id) => (
        product.category === props.type || props.type === "all" ?
          <div onClick={() => {
            changeView(VIEWPRODUCT)
            setDispProduct(product)
          }
          }
            className="col-lg-2 product-container" key={id}>
            <img id="image" src={product.image} />
            <h3 id="name">{product.name}</h3>
            <h4>{product.price}</h4>
          </div> : ""
      ))}
    </div>
  );

  const renderViewProduct = () => (
    <div className="product-view row no-gutter center-block vert-center">
      <div id="center-hv" className="product-view-img-container col-lg-6">
        <div className="">
          <img src={dispProduct.image} />
          <div id="center-hv" className="product-view-slider">...</div>
        </div>
      </div>
      <div className="product-view-right-container col-lg-6 ">
        <div id="outerDiv" className="col-lg-11 product-view-info-container">
          <div className="product-view-txt-container">
            <h2 class="row">{dispProduct.name}</h2>
            <h3 class="row">{dispProduct.price}</h3>
            <p class="row">{dispProduct.desc}</p>
            <div id="center-hv" className="row product-view-add-btn-container">
              <div onClick={add}>Add to Cart</div>
            </div>
          </div>
        </div>
        <div className="col-lg-1 product-view-exit-btn-container">
          <div className="exit-btn">
            <img onClick={() => changeView(VIEWPRODUCTS)} src={ExitBtn} />
          </div>
        </div>
      </div>
    </div>
  )

  const add = () => {
    dispatch(addToCart(dispProduct))
  }

  const changeView = (newView) => {
    setView(newView);
  };

  return (
    <div>
      {props.showCart ?
        <CartContents />
        : ""}

      {view === VIEWPRODUCTS && renderViewProducts()}
      {view === VIEWPRODUCT && renderViewProduct()}

    </div>


  )
}

export default Product