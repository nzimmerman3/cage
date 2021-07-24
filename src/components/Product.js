import React, { useState } from 'react'
import Product1 from '../images/products/yellow-shirt.png'
import Product2 from '../images/products/pink-tote.png'
import Product3 from '../images/products/black-bandana.png'
import Product4 from '../images/products/social-cues-vinyl.png'
import ExitBtn from '../images/products/exit-btn.png'

var productToDisplay = {
  "image": Product1,
  "name": "Default",
  "price": "$0.00",
  //TODO add category (tour merch, music, apparel, etc.)
  //TODO add description
  "desc": "Description"
}

const VIEWPRODUCTS = 'products';
const VIEWPRODUCT = 'product';

function Product(props) {

  const [view, setView] = useState(VIEWPRODUCTS);

  const [products] = useState([
    {
      "image": Product1,
      "name": "T-Shirt",
      "price": "$40.00",
      //TODO add category (tour merch, music, apparel, etc.)
      //TODO add description
      "desc": "Custom dip-dye t-shirt featuring Cage the Elephant logo on front left chest and 2019 tour dates on the back."
    },
    {
      "image": Product2,
      "name": "Tote Bag",
      "price": "$20.00",
      //TODO add category (tour merch, music, apparel, etc.)
      //TODO add description
      "desc": "Light pink tote bag featuring melted suit portrait design on one side."
    },
    {
      "image": Product3,
      "name": "Bandana",
      "price": "$16.00",
      //TODO add category (tour merch, music, apparel, etc.)
      //TODO add description
      "desc": "Black bandana featuring artwork from the Tell Me I'm Pretty album."
    },
    {
      "image": Product4,
      "name": "Social Cues",
      "price": "$40.00",
      //TODO add category (tour merch, music, apparel, etc.)
      //TODO add description
      "desc": "[TrackList]"
    },
    {
      "image": Product1,
      "name": "T-Shirt",
      "price": "$40.00",
      //TODO add category (tour merch, music, apparel, etc.)
      //TODO add description
      "desc": "Custom dip-dye t-shirt featuring Cage the Elephant logo on front left chest and 2019 tour dates on the back."
    },
    {
      "image": Product2,
      "name": "Tote Bag",
      "price": "$20.00",
      //TODO add category (tour merch, music, apparel, etc.)
      //TODO add description
      "desc": "Light pink tote bag featuring melted suit portrait design on one side."
    },
    {
      "image": Product3,
      "name": "Bandana",
      "price": "$16.00",
      //TODO add category (tour merch, music, apparel, etc.)
      //TODO add description
      "desc": "Black bandana featuring artwork from the Tell Me I'm Pretty album."
    },
    {
      "image": Product4,
      "name": "Social Cues",
      "price": "$40.00",
      //TODO add category (tour merch, music, apparel, etc.)
      //TODO add description
      "desc": "[TrackList]"
    },
    {
      "image": Product1,
      "name": "T-Shirt",
      "price": "$40.00",
      //TODO add category (tour merch, music, apparel, etc.)
      //TODO add description
      "desc": "Custom dip-dye t-shirt featuring Cage the Elephant logo on front left chest and 2019 tour dates on the back."
    },
    {
      "image": Product2,
      "name": "Tote Bag",
      "price": "$20.00",
      //TODO add category (tour merch, music, apparel, etc.)
      //TODO add description
      "desc": "Light pink tote bag featuring melted suit portrait design on one side."
    },
    {
      "image": Product3,
      "name": "Bandana",
      "price": "$16.00",
      //TODO add category (tour merch, music, apparel, etc.)
      //TODO add description
      "desc": "Black bandana featuring artwork from the Tell Me I'm Pretty album."
    },
    {
      "image": Product4,
      "name": "Social Cues",
      "price": "$40.00",
      //TODO add category (tour merch, music, apparel, etc.)
      //TODO add description
      "desc": "[TrackList]"
    }
  ])

  const renderViewProducts = () => (
    <div id="outerDiv" class="products row no-gutter center-block vert-center">
      {products.map((product, id) => (
        <div onClick={ () => changeView(VIEWPRODUCT) }
        className="col-lg-2 product-container" key={id}>
          <img id="image" src={product.image}/>
          <h3 id="name">{product.name}</h3>
          <h4>{product.price}</h4>
        </div>
      ))}
    </div>
  );

  const renderViewProduct = () => (
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
            <img onClick={ () => changeView(VIEWPRODUCTS) } src={ExitBtn}/>
          </div>
        </div>
      </div>
    </div>
  )

  const changeView = (newView) => {
    setView(newView);
  };

  return (
    <div>

      {view === VIEWPRODUCTS && renderViewProducts()}
      {view === VIEWPRODUCT && renderViewProduct()}
      
    </div>

    
  )
}

export default Product