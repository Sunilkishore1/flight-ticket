import React from 'react';
import '../Flight-card/flightcard.css';

function FlightCard() {

    return ( 
        <div className='flight-card-outter'>
            <div className='flight-card-container'>
                <div className='flight-card-first'>
                    <img src='https://images.ixigo.com/img/common-resources/airline-new/QP.png'></img>
                    <h3>flight-Name</h3>
                    <p>flight-number</p>
                </div>
                <div className='flight-starter'>
                    <h4>loc</h4>
                    <h3>time</h3>
                </div>
                <div className='flight-ender'>
                    <h4>loc</h4>
                    <h3>time</h3>
                </div>
                <div className='flight-line'>
                    
                </div>
                <div className='flight-price'>
                    <h2>price</h2>
                </div>
                <div className='flight-book'>
                    <button>BOOK</button>
                </div>
            </div>
        </div>
     );
}

export default FlightCard;