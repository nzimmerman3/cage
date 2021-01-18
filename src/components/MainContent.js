import React from "react"
import TornEdge from '../images/torn-edge.png'

function MainContent() {
    return (
      <main className="main" id="tour">
        {/* <div><a href="#"><img src={TornEdge} alt="" /></a></div> */}
        <div className="main-container">
          <div className="main-content">

            <div className="main-header-container">
              <a className="main-header">
                Tour
              </a>
            </div>

            <ul className="event-container">
                <li className="event-date">
                  14th February 2021
                </li>
                <li className="event-venue">
                  Wardrobe Presented by Crash Records [Matinee]
                </li>
                <li className="event-location">
                  Leeds, United Kingdom
                </li>
                <a className="event-ticket-button">
                  <p>Get Tickets</p>
                </a>
            </ul>
            <ul className="event-container">
                <li className="event-date">
                  15th February 2021
                </li>
                <li className="event-venue">
                  Pryzm Presented by Banquet Records
                </li>
                <li className="event-location">
                  Kingston, United Kingdom
                </li>
                <a className="event-ticket-button">
                  <p>Get Tickets</p>
                </a>
            </ul>
            <ul className="event-container">
                <li className="event-date">
                  14th February 2021
                </li>
                <li className="event-venue">
                  Wardrobe Presented by Crash Records [Matinee]
                </li>
                <li className="event-location">
                  Leeds, United Kingdom
                </li>
                <a className="event-ticket-button">
                  <p>Get Tickets</p>
                </a>
            </ul>
            <ul className="event-container">
                <li className="event-date">
                  15th February 2021
                </li>
                <li className="event-venue">
                  Pryzm Presented by Banquet Records
                </li>
                <li className="event-location">
                  Kingston, United Kingdom
                </li>
                <a className="event-ticket-button">
                  <p>Get Tickets</p>
                </a>
            </ul>
            <ul className="event-container">
                <li className="event-date">
                  14th February 2021
                </li>
                <li className="event-venue">
                  Wardrobe Presented by Crash Records [Matinee]
                </li>
                <li className="event-location">
                  Leeds, United Kingdom
                </li>
                <a className="event-ticket-button">
                  <p>Get Tickets</p>
                </a>
            </ul>

          </div>
        </div>
      </main>
    )
  }

  export default MainContent;