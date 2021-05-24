import React from 'react'
import Header from "../components/SubHeader"
import BlackTape from "../images/black-tape.png";
import EventsList from "../routes/EventsList";

export default function Tour() {
  return (
    <div>
      <div className="tour" id="tour">
          <div class="" className="tour-header">
            <img src={BlackTape} class="img-responsive center-block d-block mx-auto" alt="" width="500px"/>
            <p class="text-center">Tour</p>
          </div>
          <div class="tour-content col-md-10 col-md-offset-1 container">
            {/* ------ EVENT 1 ------ */}
            <EventsList></EventsList>
            {/* ------ EVENT 1 ------ */}
          </div>
        </div>
    </div>
  )
}

