import React from 'react'
import Pic1 from "../images/display-photos/group-photo.jpg"
import Pic2 from "../images/display-photos/austin-show.jpeg"
import Pic3 from "../images/display-photos/neil-krug-1.jpg"
import Pic4 from "../images/display-photos/neil-krug-2.jpg"
import Pic5 from "../images/display-photos/neil-krug-3.jpg"
import Pic6 from "../images/display-photos/neil-krug-4.jpg"
import Header from "../components/SubHeader"

import Eye from "../images/blinking-eye.gif"
import Lip from "../images/dripping-lip.gif"



export default function Photos() {

  const photos = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic1, Pic1, Pic1, Pic1]

  return (
    <div className="photo">
      <Header />

      <div className="photo-content">

        <div className="gif-deco">
          <img src={Eye} class="img-responsive eye-1" alt=""/>
          <img src={Eye} class="img-responsive eye-2" alt=""/>
          <img src={Lip} class="img-responsive lip-1" alt=""/>
        </div>
        
        <div className="photo-display">
          {photos.map((p) => {
            return (<div className="photo">
              <img src={p}>
              </img>
            </div>)
          })}
        </div>
        
      </div>

    </div>

  )
}

