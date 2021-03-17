import React from 'react'
import Pic from "../images/display-photos/group-photo.jpg"
import Header from "../components/SubHeader"



export default function Photos() {

  const photos = [Pic, Pic, Pic, Pic, Pic, Pic, Pic, Pic]

  return (
    <div>
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

