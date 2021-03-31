import React from 'react'
import Pic1 from "../images/display-photos/group-photo.jpg"
import Pic2 from "../images/display-photos/austin-show.jpeg"
import Header from "../components/SubHeader"



export default function Photos() {

  const photos = [Pic1, Pic2, Pic1, Pic1, Pic1, Pic1, Pic1, Pic1, Pic1]

  return (
    <div className="photo">
      <Header />
      <div className="photo-display">
        {photos.map((p) => {
          return (<div className="photo">
            <img src={p}>
            </img>
          </div>)
        })}

      </div>
    </div>

  )
}

