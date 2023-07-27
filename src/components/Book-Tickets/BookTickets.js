import React, { Component } from 'react';
import "./booktickets.css";

function BookTickets() {
    return ( 
        <div className='top-outter'>
        <div className='top'>
            <h1 className='tet'>Search Flights</h1>
            <div className='bookcard'>
                <div className='ter'>
                    <input type="text"  className='ticket'></input>
                    <h4 className='word'>Leaving from</h4>
                 </div>

                 <div className='ter'>
                 <input type="text"  className='ticket'></input>
                 <h4 className='word'>Going to</h4>
                 </div>

                 <div className='ter'>
                 <input type="date"  className='ticket'></input>
                 <h4 className='word'>Departure</h4>
                 </div>
                 
                <button type="submit" className="ticketsearch"><i class="fa fa-search"></i></button>
            </div>
        </div>
        </div>
     );
}

export default BookTickets;