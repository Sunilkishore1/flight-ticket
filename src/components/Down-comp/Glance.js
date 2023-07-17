import React from 'react'
import budget from '../../assets/budget.png';
import sofa from '../../assets/sofa.png';
import up from '../../assets/up-arrow.png';
import book from '../../assets/booking.png'
import './glance.css';

function Glance() {
    return (  
        <div className="home-container2">
          <div className="home-container2-child">
            <h1>All services at a glance</h1>
            <p>
              You can book the offers conveniently from home before you start
              your
              <br />
              trip. You can opt for further services during your trip too.
            </p>
            <div className="home-container2-main">
              <div className="home-container2-main1">
                <h2>
                  Why book
                  <br /> on airtrek.com ?
                </h2>
              </div>
              <div className="home-container2-main2">
                <div className="home-container2-main-icon">
                  <img src={budget}></img>
                </div>
                <div className="home-container2-main-cont">
                  <h3>No hidden costs</h3>
                  <p>
                    You save yourself the booking fees and always obtain the
                    best-value flights.
                  </p>
                </div>
              </div>
              <div className="home-container2-main2">
                <div className="home-container2-main-icon">
                  <img src={sofa}></img>
                </div>
                <div className="home-container2-main-cont">
                  <h3>More comfort</h3>
                  <p>
                    Create your trip flexibly and to suit your own individual
                    preferences: whether it's last-minute changes, a second
                    suitcase or a window seat.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-container2-main">
              <div className="home-container2-main1">
                <h2>
                  Even more comfort
                  <br /> during your flight.
                </h2>
              </div>
              <div className="home-container2-main2">
                <div className="home-container2-main-icon">
                  <img src={book}></img>
                </div>
                <div className="home-container2-main-cont">
                  <h3>Advance seat reservation</h3>
                  <p>
                    Reserve your seat before you start your journey exactly
                    according to your preferences — from a window seat to seats
                    with more legroom.
                  </p>
                </div>
              </div>
              <div className="home-container2-main2">
                <div className="home-container2-main-icon">
                  <img src={up}></img>
                </div>
                <div className="home-container2-main-cont">
                  <h3>Upgrade</h3>
                  <p>
                    Treat yourself to an upgrade and enjoy the amenities of
                    Premium Economy Class or Business Class or the luxury of
                    First Class and arrive at your destination more relaxed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Glance;