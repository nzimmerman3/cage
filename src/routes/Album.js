import React from 'react'
import SpotifyPlayer from 'react-spotify-player'


export default function Album(props) {
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'

  const uris = {
    "M": "spotify:album:4EK8gtQfdVsmDTji7gBFlz",
    "TMIP": "spotify:album:0nW0w37lrQ87k7PLZvC4qJ"
  }
  console.log(props)

  return (
    < div >
      <SpotifyPlayer
        uri={uris[props.title]}
        size={size}
        view={view}
        theme={theme}
      />
    </div >
  )
}
