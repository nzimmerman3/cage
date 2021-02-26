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
    "SC": "spotify:album:2VuZJsJBPLwg9BeQFQle8G",
    "UP": "spotify:album:4zpN41aGAYPWX3dzE19rH7",
    "M": "spotify:album:4EK8gtQfdVsmDTji7gBFlz",
    "TMIP": "spotify:album:0nW0w37lrQ87k7PLZvC4qJ",
    "TYHB": "spotify:album:0WizSRN8LuMWhliou9PFlg",
    "CTE": "spotify:album:7H814Cg8HV0qpoMheYbhNn"
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
