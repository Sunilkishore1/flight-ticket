import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar';
import '../TicketBooked/bookedflight.css';
import axios from 'axios';

function BookedFlight() {
    const[pass,setPass]=useState([]);
    const[flight,setFlight]=useState([]);
    const init=async()=>{
        await axios.
        get(`http://localhost:8080/api/v1/auth/seat/user/${JSON.parse(localStorage.getItem("data")).id}`)
        .then(r=>{
            setPass(r.data);
            console.log(r.data);
        })
        axios.get(`http://localhost:8080/api/v1/auth/flights/202`)
        .then(e=>{
            setFlight(e.data);
            console.log(e.data);
        })
       
    }
    useEffect(()=>{
     init();
    },[])

    return (
    <div className='booked-container'>
    <NavBar/>

   
      { flight.length>0 &&
        flight?.map(f=>
            <div className='booked-content'>
        <div className='header'>
            <h1>AeroSearch</h1>
        </div>
            <div className='booked-content-inner'>
                <div className='booked-flight-content'>
                    <table>
                        {/* <img src='url'></img> */}
                        <tr>
                            <td>Flight-Name</td>
                            <td>{f.flightName}</td>
                        </tr>
                        <tr>
                            <td>Flight-Number</td>
                            <td>{f.flightNumber}</td>
                        </tr>
                        <tr>
                            <td>From</td>
                            <td>{fetch.startFrom}</td>
                        </tr>
                        <tr>
                            <td>To</td>
                            <td>{f.endTo}</td>
                        </tr>
                        <tr>
                            <td>Arrvial</td>
                            <td>13:05:55</td>
                        </tr>
                        <tr>
                            <td>Departure</td>
                            <td>15:05:00</td>
                        </tr>
                    </table>
                </div>
                <div className='booked-flight-content'>
                    <table>
                        {/* <img src='url'></img> */}
                        <tr>
                            <td>Service Level</td>
                            <td>{pass[0].serviceLevel}</td>
                        </tr>
                        <tr>
                            <td>Seat Type</td>
                            <td>{pass[0].seatType}</td>
                        </tr>
                        <tr>
                            <td>Children</td>
                            <td>{pass[0].children}</td>
                        </tr>
                        <tr>
                            <td>Adults</td>
                            <td>{pass[0].adults}</td>
                        </tr>
                        <tr>
                            <td>Requirements</td>
                            <td>{pass[0].requirements}</td>
                        </tr>
                    </table>
                </div>
                <div className='booked-flight-content'>
                    <table>
                        {/* <img src='url'></img> */}
                        <tr>
                            <td>Name</td>
                            <td>Swamy</td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td>swamy@gmail.com</td>
                        </tr>
                    </table>
                </div>
            </div>
        
    </div>
            )
      }
        
</div>

    );
}

export default BookedFlight;