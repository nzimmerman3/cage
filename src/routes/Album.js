import React from 'react'
import SpotifyPlayer from 'react-spotify-player'
import Header from "../components/SubHeader"


export default function Album(props) {
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'

  const uris = {
    "CAGE THE ELEPHANT": "spotify:album:7H814Cg8HV0qpoMheYbhNn",
    "MELOPHOBIA": "spotify:album:4EK8gtQfdVsmDTji7gBFlz",
    "THANK YOU HAPPY BIRTHDAY": "spotify:album:0WizSRN8LuMWhliou9PFlg",
    "SOCIAL CUES": "spotify:album:2VuZJsJBPLwg9BeQFQle8G",
    "UNPEELED": "spotify:album:4zpN41aGAYPWX3dzE19rH7",
    "TELL ME I'M PRETTY": "spotify:album:0nW0w37lrQ87k7PLZvC4qJ"
  }

  console.log(props)

  return (
    <div className="music">
      <Header />
      < div className="album-total">
        <div className="album-header">
          {props.location.state.state.title}
        </div>
        <div className="album-subheader">Cage The Elephant</div>
        <img src={props.location.state.state.loc} ></img>

        <div className="album-player">
          <SpotifyPlayer
            uri={uris[(props.location.state.state.title).toUpperCase()]}
            size={size}
            view={view}
            theme={theme}
          />
        </div>

      </div >
      {/* </div> */}

    </div>

  )
}
