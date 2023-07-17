import React, { useEffect, useState } from "react";
import Caption from "./Caption";
import NavBar from "./NavBar";
import bg1 from '../assets/background-2.jpg';
import bg2 from '../assets/background-3.jpg';
import bg3 from '../assets/background-4.jpg';
import bg4 from '../assets/background-5.jpg';
import offer from '../assets/offer.png'
import FlightRoute from "./flight-Route/FlightRoute";
import AirLine from "./Air-Lines/AirLine";
import Glance from "./Down-comp/Glance";
import Footer from "./Footer/Footer";

function Home() {
	let arr=[bg1,bg2,bg3,bg4];
	const [index,setIndex]=useState(0);

	useEffect(()=>{
		setTimeout(()=>{
			if(index<arr.length-1){
				setIndex(index+1);
			}
			else{
				setIndex(0);
			}
		},2000)
	},[index])

	return (
		<div className="flex-container">
			<div className="content-home">
				<NavBar/>
				<div className="img-wrap">
					<img src={arr[index]} id="slider"/>
					<div className="top-left">
						
						<div className='para'>
                		<p>READY TO TAKE OFF?!</p>
            			</div>
					</div>
				</div>
				<div className="offer">
					<img src={offer}></img>
				</div>
			</div>
			<FlightRoute/>
			<AirLine/>
			<Glance/>
			<Footer/>
		</div>
	);
}

export default Home;
