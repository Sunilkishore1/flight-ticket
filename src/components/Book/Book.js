import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar';
import '../Book/book.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Book() {
    const fid=useParams();
    const[serv,setServ]=useState("First Class");
    const[seat,setSeat]=useState("Aisle");
    const[child,setChild]=useState(0);
    const[adult,setAdult]=useState(0);
    const[requir,setRequir]=useState("Nil");
    const navigate=useNavigate();

    const submitHandle=(e)=>{
        axios
            .post("http://localhost:8080/api/v1/auth/seat",{
                flightId:fid.id,
                serviceLevel:serv,
                seatType:seat,
                requirements:requir,
                children:child,
                adults:adult,
                userId:JSON.parse(localStorage.getItem("data")).id
            })
            .then(()=>{
                navigate("/booked")

            })
    }

    return (
        <div className='book-container'>
            <NavBar/>
            <div className='book-inner'>
                <div className='book-select-class'>
                    <label>Service-Level</label>
                    <select onChange={(e)=>{setServ(e.target.value)}}>
                        <option value="First Class">First Class</option>
                        <option value="Business Class">Business Class</option>
                        <option value="Premium Economy">Premium Economy</option>
                        <option value="Economy">Economy</option>
                    </select>
                </div>
                <div className='book-select-seat'>
                    <label>Seat-Type</label>
                    <select onChange={(e)=>{setSeat(e.target.value)}}>
                        <option value="Window">Window</option>
                        <option value="Aisle">Aisle</option>
                    </select>
                </div>
                <div className='book-select-noOfSeat'>
                    <div className='book-child'>
                        <label>Number of Children</label>
                        <select onChange={(e)=>{
                            
                            
                            setChild(e.target.value)
                        
                            }}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className='book-adult'>
                    <label>Number of Adults</label>
                        <select onChange={(e)=>{setAdult(e.target.value)}}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                </div>
                <div className='book-select-requirement'>
                    <label>Additional Requirements</label>
                    <textarea onChange={(e)=>{setRequir(e.target.value)}}></textarea>
                </div>
                <button onClick={(e)=>{
                    submitHandle(e);
                }}>CONFIRM</button>
            </div>
        </div>
    );
}

export default Book;