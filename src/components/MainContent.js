import React from "react";
import Header from "./Header"
import Newsletter from "./Newsletter"
import Tour from "../routes/Tour"
import ChromeInitials from "../images/chrome-initials.gif"
import Footer from "./Footer"


function MainContent() {
  return (
    <div className="main">
      <main>

        <Header />

        <img src={ChromeInitials} class="img-responsive center-block d-block mx-auto" alt="" width="500px"/>

        <div className="main-content">
          <Tour />
          <Newsletter />
        </div>

      </main>
    </div>
  );
}

export default MainContent;
