import React from "react";

function MainContent() {
  return (
    <main className="main">
      <div className="main-container" id="tour">
        <div className="main-content">
          <div className="main-header-container">
            <a className="main-header">Tour</a>
          </div>

          <ul className="event-container">
            <a>
              <li>14th February 2021</li>
            </a>
            <a>
              <li>Wardrobe Presented by Crash Records [Matinee]</li>
            </a>
            <a>
              <li>Leeds, United Kingdom</li>
            </a>
            <a>
              <div className="event-ticket-button">
                <p>Get Tickets</p>
              </div>
            </a>
          </ul>

          <ul className="event-container">
            <a>
              <li>15th February 2021</li>
            </a>
            <a>
              <li>Pryzm Presented by Banquet Records</li>
            </a>
            <a>
              <li>Kingston, United Kingdom</li>
            </a>
            <a>
              <div className="event-ticket-button">
                <p>Get Tickets</p>
              </div>
            </a>
          </ul>

          <ul className="event-container">
            <a>
              <li>16th February 2021</li>
            </a>
            <a>
              <li>Chalk Presented By Resident</li>
            </a>
            <a>
              <li>Brighton, United Kingdom</li>
            </a>
            <a>
              <div className="event-ticket-button">
                <p>Get Tickets</p>
              </div>
            </a>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
