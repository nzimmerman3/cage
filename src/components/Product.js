import React from 'react'
import Product1 from '../images/products/yellow-shirt.png'
import Product2 from '../images/products/pink-tote.png'
import Product3 from '../images/products/black-bandana.png'
import Product4 from '../images/products/social-cues-vinyl.png'

const products = [
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
]

function Product(props) {
  // const product = products[props.id]
  return (
    <div>

      <div>
        {products.map((product, id) => (
          <div className="col-lg-2 product-container" key={id}>
            <img src={product.image}/>
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
          </div>
        ))}
      </div>

    </div>

    
  )
}

export default Product