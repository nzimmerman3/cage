import React from "react";
import Header from "./Header"
import Newsletter from "./Newsletter"
import Tour from "../routes/Tour"
import Chrome from "../images/social-cues-chrome.gif"


function MainContent() {
  return (
    <div className="main">
      <main>

        <Header />
        <div className="gif-deco">
          <img src={Chrome} class="img-responsive center-block d-block chrome" alt=""/>
        </div>
        

        <Tour />
        <Newsletter />

      </main>
    </div>
  );
}

export default MainContent;
