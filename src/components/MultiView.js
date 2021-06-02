import React, { useState } from 'react'
import '../App.css';

import AlbumUP from "../images/unpeeled.png"
import AlbumTMIP from "../images/tell-me-im-pretty.jpg";
import AlbumM from "../images/melophobia.jpg";
import AlbumSC from "../images/social-cues.jpg"
import AlbumTYHB from "../images/thank-you-happy-birthday.jpg"
import AlbumCTE from "../images/cage-the-elephant.jpg"

import Header from "../components/SubHeader"
import AlbumPreview from "../components/AlbumPreview"

import SpotifyPlayer from 'react-spotify-player'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/controller/controller.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);


export default function MultiView(props) {
  const albums =
    [
      // UPPERCASE -> PascalCase
      { "name": "Cage The Elephant", "loc": AlbumCTE },
      { "name": "Melophobia", "loc": AlbumM },
      { "name": "Thank You Happy Birthday", "loc": AlbumTYHB },
      { "name": "Social Cues", "loc": AlbumSC },
      { "name": "Unpeeled", "loc": AlbumUP },
      { "name": "Tell Me I'm Pretty", "loc": AlbumTMIP },
    ]

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
  const [player, setPlayer] = useState(false)
  const [title, setTitle] = useState("")
  const [loc, setLoc] = useState("")
  return (
    <div>
      <Header />
      <section className="music">
        <Swiper
          className="album-list"
          loop
          effect="coverflow"
          coverflowEffect={{
            slideShadows: false,
          }}
          scrollbar={{ draggable: true }}
          spaceBetween={50}
          slidesPerView={3}

        >
          {albums.map((al) => {
            return <SwiperSlide className="album">
              <AlbumPreview title={al["name"]} loc={al["loc"]} player={player} change={setPlayer} setTitle={setTitle} setLoc={setLoc} />
            </SwiperSlide>
          })}
          <div class="swiper-pagination"></div>
        </Swiper>
        {player ? <div className="album-player">
          <SpotifyPlayer
            uri={uris[(title).toUpperCase()]}
            size={size}
            view={view}
            theme={theme}
          />
        </div> : <div></div>}
      </section>

    </div>
  )
}
