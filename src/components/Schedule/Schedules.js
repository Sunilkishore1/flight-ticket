import React from 'react'
import NavBar from '../NavBar';
import BookTickets from '../Book-Tickets/BookTickets';

function Schedules() {
    return (  
        <div className='schedule-container'>
            <NavBar/>
            <BookTickets/>
        </div>
    );
}

export default Schedules;