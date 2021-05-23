import React from "react";
import Header from "./Header"
import Newsletter from "./Newsletter"
import BlackTape from "../images/black-tape.png";
import ChromeInitials from "../images/chrome-initials.gif";
import EventsList from "../routes/EventsList";

function MainContent() {
  return (
    <div className="main">
      <main>

        <Header />

        {/* <img src={ChromeInitials} class="img-responsive center-block d-block mx-auto" alt="" width="500px"/> */}

        <div className="tour" id="tour">
          
          <div class="" className="tour-header">
            <img src={BlackTape} class="img-responsive center-block d-block mx-auto" alt="" width="500px"/>
            <p class="text-center">Tour</p>
          </div>

          <div class="tour-content col-md-10 col-md-offset-1 container">
            {/* ------ EVENT 1 ------ */}
            <EventsList></EventsList>
            {/* <div id="outerDiv" class="event row no-gutter center-block vert-center">
              <div class="col-lg-7 no-gutter vert-center">

                <div class="col-lg-4 ">
                  <div>14th February 2021</div>
                </div>
                <div class="col-lg-8">
                  <div>Wardrobe Presented by Crash Records</div>
                </div>

              </div>
              <div class="col-lg-5 no-gutter vert-center">
                
                <div class="col-lg-7 gutter">
                  <div>Leeds, United Kingdom</div>
                </div>
                <div class="col-lg-5 gutter">
                    <button type="button" class="btn btn-default btn-xl">Get Tickets</button>
                </div>

              </div>
            </div> */}
            {/* ------ EVENT 1 ------ */}
          </div>
        </div>

        <Newsletter />
      </main>
    </div>
  );
}

export default MainContent;
