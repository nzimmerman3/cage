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
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" className="tour-header">
            <img src={BlackTape} class="img-responsive center-block d-block mx-auto" alt="" width="500px"/>
            <p class="text-center">Tour</p>
          </div>
          <div class="tour-content col-lg-12">
            {/* ------ EVENT 1 ------ */}
            <div class="event row no-gutter ">
              <div class="col-lg-7 no-gutter align-items-center">

                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div>14th February 2021</div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                  <div>Wardrobe Presented by Crash Records</div>
                </div>

              </div>
              <div class="col-lg-5 no-gutter">
                
                <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                  <div>Leeds, United Kingdom</div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
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
