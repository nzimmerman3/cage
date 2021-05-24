import React from "react";
import Header from "./Header"
import Newsletter from "./Newsletter"
import Tour from "../routes/Tour"
import ChromeCTE from "../images/chrome-initials.gif"


function MainContent() {
  return (
    <div className="main">
      <main>

        <Header />

        {/* <img src={ChromeCTE} class="img-responsive center-block d-block mx-auto" alt="" width="500px"/> */}

        <Tour />
        <Newsletter />

      </main>
    </div>
  );
}

export default MainContent;
