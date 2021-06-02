import React, { useState } from 'react'

export default function AlbumPreview(props) {
  const uris = {
    "CAGE THE ELEPHANT": "spotify:album:7H814Cg8HV0qpoMheYbhNn",
    "MELOPHOBIA": "spotify:album:4EK8gtQfdVsmDTji7gBFlz",
    "THANK YOU HAPPY BIRTHDAY": "spotify:album:0WizSRN8LuMWhliou9PFlg",
    "SOCIAL CUES": "spotify:album:2VuZJsJBPLwg9BeQFQle8G",
    "UNPEELED": "spotify:album:4zpN41aGAYPWX3dzE19rH7",
    "TELL ME I'M PRETTY": "spotify:album:0nW0w37lrQ87k7PLZvC4qJ"
  }
  return (
    <div>
      < div className="music-total" >
        <img src={props.loc} onClick={() => {
          props.change(true);
          props.setTitle(props.title)
          props.setLoc(props.loc)
        }
        }></img>
        <div className="music-header">
          {props.title}
        </div>
        <div className="music-subheader">Cage The Elephant</div>
      </div >

    </div>
  )
}
