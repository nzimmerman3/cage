import React from "react";
import '../App.css';
import AlbumTMIP from "../images/tell-me-im-pretty.jpg";
import AlbumM from "../images/melophobia.jpg";
import SpotifyLogo from "../images/spotify-logo-white.png";

import SpotifyPlayer from 'react-spotify-player'

export default function Music() {
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'


  return (
    <main>

      <section className="music">

        <div className="music-header">
          <p>Music</p>
        </div>

        <div className="music-content">
          <SpotifyPlayer
            uri="spotify:album:4EK8gtQfdVsmDTji7gBFlz"
            size={size}
            view={view}
            theme={theme}
          />

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

        </div>

      </section>
    </main>
  );
}
