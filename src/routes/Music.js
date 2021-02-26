import React from "react";
import '../App.css';
import AlbumTMIP from "../images/tell-me-im-pretty.jpg";
import AlbumM from "../images/melophobia.jpg";

import Album from "./Album"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



export default function Music(props) {


  const albums =
    [
      { "name": "TMIP", "loc": AlbumTMIP },
      { "name": "M", "loc": AlbumM },
    ]

  return (
    <main>

      <section className="music">

        <div className="music-header">
          <p>Music</p>
        </div>

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

        {/* <ul className="album-list">

          {albums.map((al) => {
            return <li className="album">
              <Link to={{ pathname: `/album`, title: al["name"] }}>
                <img src={al["loc"]}></img>
              </Link>
            </li>
          })}
        </ul> */}


        {/* <div className="music-content">
          

          <div className="song">
          <div className="song-container">
            <ul className="song-left">
              <a>
                <li><h1>06: Halo</h1>
                  <h2>Melophobia</h2>
                  <div className="follow-button"><p>Follow</p></div></li>
              </a>
              <a>
                <li><img src={AlbumM} alt="album" /></li>
              </a>
            </ul>
            <ul className="song-right">
              <a>
                <li>
                  <p><img src={SpotifyLogo} /></p>
                </li>
              </a>
            </ul>
          </div>
        </div>

        </div> */}

      </section>
    </main >
  );
}
