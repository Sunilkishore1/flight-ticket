import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

function Register() {
	return (
		<div className="login-signup">
			<div className="register-container">
				
				<div className='company'>
					<img src={logo}></img>
					<h1 id='company-name'>AeroSearch</h1>
				</div>
				
				<div className="card">
					<h1> Register </h1>
					<div className="card-contents">
						<div className="line">
							<input type="text" id="" className="inputfield" placeholder="Name"/>
						</div>
						<div className="line">
							<input type="email" id="email" className="inputfield" placeholder="E-mail"/>
						</div>
						<div className="line">
							<input type="password" id="password" className="inputfield" placeholder="Password"/>
						</div>
					</div>
					<button id="login-reg"> Register </button>
					<Link to="/login" className="link-button">
						Already have an account?
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Register;