import React from 'react'
import "./flightRoute.css"
import { Img } from '@chakra-ui/react';
import mumbai from '../../assets/mumbai.png'
import chennai from '../../assets/chennai.webp';
import bangalore from '../../assets/bangalore.webp';
import delhi from '../../assets/delhi.webp';
import hyderabath from '../../assets/hydrabath.webp';
import pune from '../../assets/pune.webp';
import kolkata from '../../assets/kolkata.webp';
import ahamadhabath from '../../assets/Ahamadhabath.webp';
import goa from '../../assets/goa.webp';




function FlightRoute() {
    const list=[
        {
            "name":"Mumbai Flights",
            "img":mumbai,
            "to":"Goa, Delhi, Bangalore, Ahmedabad"
        },
        {
            "name":"Chennai Flights",
            "img":chennai,
            "to":"Mumbai, Delhi, Madurai, Coimbatore"
        },
        {
            "name":"Bangalore Flights",
            "img":bangalore,
            "to":"Mumbai, Delhi, Goa, Hyderabad"
        },
        {
            "name":"Delhi Flights",
            "img":delhi,
            "to":"Mumbai, Goa, Bangalore, Pune"
        },
        {
            "name":"Hyderabad Flights",
            "img":hyderabath,
            "to":"Mumbai, Goa, Bangalore, Delhi"
        },
        {
            "name":"Pune Flights",
            "img":pune,
            "to":"Mumbai, Delhi, Madurai, Coimbatore"
        },
        {
            "name":"Kolkata Flights",
            "img":kolkata,
            "to":"Mumbai, Delhi, Madurai, Coimbatore"
        },
        {
            "name":"Ahemdabad Flights",
            "img":ahamadhabath,
            "to":"Mumbai, Delhi, Madurai, Coimbatore"
        },
        {
            "name":"Goa Flights",
            "img":goa,
            "to":"Mumbai, Delhi, Bangalore, Hyderabad"
        }
        

    ]
    return (  
        <div className='route-container'>
                <h2>Popular Flight Routes</h2>
            <div className='inner-route'>
                {
                    list.map((items)=>
                    <div className='grid-con'>
                        <div className='grid-img'>   
                            <img src={items.img}></img>
                        </div>
                        <div className='grid-content'>       
                            <p>{items.name}</p>
                            <h1>To:{items.to}</h1>
                        </div>
                    
                    
                    </div>
                   
                    )
                }
            </div>
        </div>
    );
}

export default FlightRoute;