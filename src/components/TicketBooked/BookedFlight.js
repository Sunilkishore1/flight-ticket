import React from 'react'
import NavBar from '../NavBar';
import Ticket from '../Ticket/Ticket';

function BookedFlight() {
    return (  
        <div className='booked-container'>
            <NavBar/>
            <Ticket/>
        </div>
    );
}

export default BookedFlight;