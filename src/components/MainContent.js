import React from "react";
import Header from "./Header"
import Newsletter from "./Newsletter"
import BlackTape from "../images/black-tape.png";

function MainContent() {
  return (
    <main>
      <Header />
      <div className="tour" id="tour">
        <div class="col-lg-12" className="tour-header">
          <img src={BlackTape} class="img-responsive center-block d-block mx-auto" alt="" width="400px"/>
          <p class="text-center">Tour</p>
        </div>
        {/* <div className="tour-header"><p>Tour</p></div> */}
        <div className="tour-content" >
          <div className="event" class="row event-border">
            <div className="event-left">
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                  <div>14th February 2021</div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                  <div>Wardrobe Presented by Crash Records</div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div>Leeds, United Kingdom</div>
                </div>
              </div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <button type="button" class="btn btn-default btn-xl">Get Tickets</button>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="tour" id="tour">
        <div className="tour-header">
          <img src={BlackTape} alt="" />
          <p>Tour</p>
        </div>
        <div className="tour-content">
          <div className="event">
            <div className="event-container">
              <ul className="event-left">
                <a>
                  <li>Location</li>
                </a>
                <a>
                  <li>Venue</li>
                </a>
                <a>
                  <li>Date</li>
                </a>
              </ul>
              <ul className="event-right">
                <a>
                  <li>
                    <p>Get Tickets</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="event">
            <div className="event-container">
              <ul className="event-left">
                <a>
                  <li>Location</li>
                </a>
                <a>
                  <li>Venue</li>
                </a>
                <a>
                  <li>Date</li>
                </a>
              </ul>
              <ul className="event-right">
                <a>
                  <li>
                    <p>Get Tickets</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="event">
            <div className="event-container">
              <ul className="event-left">
                <a>
                  <li>Location</li>
                </a>
                <a>
                  <li>Venue</li>
                </a>
                <a>
                  <li>Date</li>
                </a>
              </ul>
              <ul className="event-right">
                <a>
                  <li>
                    <p>Get Tickets</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="event">
            <div className="event-container">
              <ul className="event-left">
                <a>
                  <li>Location</li>
                </a>
                <a>
                  <li>Venue</li>
                </a>
                <a>
                  <li>Date</li>
                </a>
              </ul>
              <ul className="event-right">
                <a>
                  <li>
                    <p>Get Tickets</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="event">
            <div className="event-container">
              <ul className="event-left">
                <a>
                  <li>Location</li>
                </a>
                <a>
                  <li>Venue</li>
                </a>
                <a>
                  <li>Date</li>
                </a>
              </ul>
              <ul className="event-right">
                <a>
                  <li>
                    <p>Get Tickets</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="event">
            <div className="event-container">
              <ul className="event-left">
                <a>
                  <li>Location</li>
                </a>
                <a>
                  <li>Venue</li>
                </a>
                <a>
                  <li>Date</li>
                </a>
              </ul>
              <ul className="event-right">
                <a>
                  <li>
                    <p>Get Tickets</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      <Newsletter />
    </main>
  );
}

export default MainContent;
