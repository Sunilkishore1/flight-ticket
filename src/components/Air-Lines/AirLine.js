import React from 'react'
import indigo from '../../assets/indigo.png';
import airindia from '../../assets/airindia.png';
import airindiaexpress from '../../assets/airindiaexpress.png';
import asia from '../../assets/airasia.png';
import akasa from '../../assets/akasa.png';
import vistara from '../../assets/vistara.png';
import SpiceJet from '../../assets/spicejet.png';
import '../Air-Lines/AirLine.css';

function AirLine() {
    const list=[
        {
            "name":"Indigo Airlines",
            img:indigo
        },
        {
            "name":"Air India",
            img:airindia
        },
        {
            "name":"Air India Express",
            img:airindiaexpress
        },
        {
            "name":"Air Asia India",
            img:asia
        },
        {
            "name":"Akasa Air",
            img:akasa
        },
        {
            "name":"Vistara Airline",
            img:vistara
        },
        {
            "name":"SpiceJet",
            img:SpiceJet
        }
    ]
    return (  
        <div className='airline-container'>
            <h2>Popular Domestic Airlines</h2>
            <div className='inner-airline'>
                {
                    list.map((items)=>
                        <div className='airline-con'>
                            <div className='airline-img'>
                                <img src={items.img}></img>
                            </div>
                            <div className='airline-content'>
                                <p>{items.name}</p>
                            </div>

                        </div>

                    )
                }
            </div>
        </div>

    );
}

export default AirLine;