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
import AlbumPreview from "../components/AlbumPreview"

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
      // UPPERCASE -> PascalCase
      { "name": "Cage The Elephant", "loc": AlbumCTE },
      { "name": "Melophobia", "loc": AlbumM },
      { "name": "Thank You Happy Birthday", "loc": AlbumTYHB },
      { "name": "Social Cues", "loc": AlbumSC },
      { "name": "Unpeeled", "loc": AlbumUP },
      { "name": "Tell Me I'm Pretty", "loc": AlbumTMIP },
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
            slideShadows: false,
          }}
          scrollbar={{ draggable: true }}
          spaceBetween={50}
          slidesPerView={3}

        >
          {albums.map((al) => {
            return <SwiperSlide className="album">
              <AlbumPreview title={al["name"]} loc={al["loc"]} />
            </SwiperSlide>
          })}
          <div class="swiper-pagination"></div>


        </Swiper>
      </section>
    </main >
  );
}
