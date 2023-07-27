import { Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import NavBar from '../NavBar';
import '../Customer/customer.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Customer() {
    const navigate=useNavigate();
    const[email,setEmail]=useState("");
    const[feedBack,setFeedBack]=useState("");
    const submitHandle = (e) => {
		axios
		  .post("http://localhost:8080/api/v1/users/addUserFeedback",{
            email,
            feedBack
          })

          .catch((r)=>{
            navigate("/")
          })
	};
    return (  
        <>
            <NavBar/>
            <div className='Customer-content'>
                <h1>What's on your Mind?</h1>
                <div className='mail'>
                    <label>Email:</label>
                    <input type='email' value={email}
							 onChange={(e) => {
							   setEmail(e.target.value);
							 }} required></input>
                </div>
                <div className='query'>
                    <label>Enter Your Queries:</label>
                    <textarea value={feedBack}
							 onChange={(e) => {
							   setFeedBack(e.target.value);
							 }}></textarea>
                </div>
                <div className='customer-button'>
                    <button onClick={(e)=>{
                        submitHandle(e);
                    }}>Submit</button>
                </div>
            </div>
        
        </>
    );
}

export default Customer;