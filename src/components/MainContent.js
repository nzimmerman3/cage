import React from "react";
import Header from "./Header"
import Newsletter from "./Newsletter"
import BlackTape from "../images/black-tape.png";

function MainContent() {
  return (
    <div className="main">
      <main>

        <Header />

        <div className="tour" id="tour">
          <div class="col-lg-12" className="tour-header">
            <img src={BlackTape} class="img-responsive center-block d-block mx-auto" alt="" width="400px"/>
            <p class="text-center">Tour</p>
          </div>
          <div class="tour-content col-lg-12">
            {/* ------ EVENT 1 ------ */}
            <div class="event row no-gutter ">
              <div class="col-lg-10 no-gutter align-items-center">

                <div class="col-lg-3 ">
                  <div>14th February 2021</div>
                </div>
                <div class="col-lg-5">
                  <div>Wardrobe Presented by Crash Records</div>
                </div>
                <div class="col-lg-4">
                  <div>Leeds, United Kingdom</div>
                </div>

              </div>
              <div class="col-lg-2 no-gutter button-padding">
                
                <div class="col-lg-12">
                  <button type="button" class="btn btn-default btn-xl">Get Tickets</button>
                </div>

              </div>
            </div>
            {/* ------ EVENT 1 ------ */}
          </div>
        </div>

        <Newsletter />
      </main>
    </div>
  );
}

export default MainContent;
