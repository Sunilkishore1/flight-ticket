import React from "react";
import NavBar from "./NavBar";
import Caption from "./Caption";

function Home() {
	return (
		<div className="flex-container">
			<div className="content-home">
				<NavBar/>
				<Caption/>
			</div>
			
		</div>
	);
}

export default Home;
