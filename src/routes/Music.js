import React from "react";
import '../App.css';

import AlbumUP from "../images/unpeeled.png"
import AlbumTMIP from "../images/tell-me-im-pretty.jpg";
import AlbumM from "../images/melophobia.jpg";
import AlbumSC from "../images/social-cues.jpg"
import AlbumTYHB from "../images/thank-you-happy-birthday.jpg"
import AlbumCTE from "../images/cage-the-elephant.jpg"

import Album from "./Album"
import Header from "../components/SubHeader"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/controller/controller.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);



export default function Music(props) {


  const albums =
    [
      { "name": "SOCIAL CUES", "loc": AlbumSC },
      { "name": "UNPEELED", "loc": AlbumUP },
      { "name": "TELL ME I'M PRETTY", "loc": AlbumTMIP },
      { "name": "MELOPHOBIA", "loc": AlbumM },
      { "name": "THANK YOU HAPPY BIRTHDAY", "loc": AlbumTYHB },
      { "name": "CAGE THE ELEPHANT", "loc": AlbumCTE },
    ]

  return (
    <main>
      <Header />
      <section className="music">
        <Swiper
          className="album-list"
          loop
          effect="coverflow"
          coverflowEffect={{
            // rotate: 50,
            // stretch: 0,
            // depth: 100,
            // modifier: 1,
            slideShadows: false,
          }}
          scrollbar={{draggable: true}}
          spaceBetween={50}
          slidesPerView={3}

        >
          {albums.map((al) => {
            return <SwiperSlide className="album">
              <Album title={al["name"]} loc={al["loc"]} />
            </SwiperSlide>
          })}
          <div class="swiper-pagination"></div>


        </Swiper>
      </section>
    </main >
  );
}
