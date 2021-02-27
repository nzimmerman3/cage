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

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



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
          navigation
          spaceBetween={50}
          slidesPerView={1}

        >
          {albums.map((al) => {
            return <SwiperSlide className="album">
              <img src={al["loc"]}></img>
              <Album title={al["name"]} />
            </SwiperSlide>
          })}
          <div class="swiper-pagination"></div>


        </Swiper>
      </section>
    </main >
  );
}
