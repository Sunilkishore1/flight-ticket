import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar';
import BookTickets from '../Book-Tickets/BookTickets';
import '../Schedule/schedule.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Schedules() {
	const navigate = useNavigate();
    const [from,setFrom]=useState("");
    const [flights,setFlights]=useState([]);
    const solve = (timestamp) => {
        const date = new Date(timestamp)
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        return formattedTime;
    };

    const submitFrom = () => {
        if (from.length > 0) {
          axios
            .get(`http://localhost:8080/api/v1/auth/flights/from/${from}`, {
              headers: {
                Authorization: `Bearer ${
                  JSON.parse(localStorage.getItem("user")).token
                }`,
              },
            })
            .then((r) => {
              setFlights(r.data);
            });
        }
    };
    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/auth/flights")
        .then(r=>{
            setFlights(r.data);
        })
    },[])
    return (  
        <div className='schedule-container'>
            <NavBar/>
            <div className='top-outter'>
            <div className='top'>
            <h1 className='tet'>Search Flights</h1>
            <div className='bookcard'>
                <div className='ter'>
                    <input type="text"  className='ticket'
                     value={from}
                     onChange={(e) => {
                       setFrom(e.target.value);
                     }}
                     onKeyDown={submitFrom}></input>
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
        <div className='schedule-inner'>
        {flights.map(e=>
                
                <div className='flight-card-container'>
                <div className='flight-card-first'>
                    <img src={e.url}></img>
                    <h3>{e.flightName}</h3>
                    <p>{e.flightNumber}</p>
                </div>
                <div className='flight-starter'>
                    <h4>{e.startFrom}</h4>
                    <p>{solve(e.start)}</p>
                </div>
                <div className='flight-ender'>
                    <h4>{e.endTo}</h4>
                    <p>{solve(e.end)}</p>
                </div>
                <div className='flight-line'>
                    
                </div>
                <div className='flight-price'>
                    <h2>Rs.{e.price}</h2>
                </div>
                <div className='flight-book'>
                    <button
                    onClick={()=>{
                        navigate("/book/"+e.id)
                    }}>BOOK</button>
                </div>
            </div>)}
            </div>
        </div>
    );
}

export default Schedules;