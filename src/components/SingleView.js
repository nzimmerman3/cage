import React from 'react'
import Album from '../routes/Album'

export default function SingleView(props) {
  return (
    <div>
      <Album title={props.title} loc={props.loc} />
    </div>
  )
}
