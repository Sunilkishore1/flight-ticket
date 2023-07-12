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
					<div className="line">
						<label htmlFor="name">
							<h2> Name: </h2>
						</label>
						<input type="text" id="" className="inputfield" />
					</div>
					<div className="line">
						<label htmlFor="username">
							<h2> Username: </h2>
						</label>
						<input type="text" id="username" className="inputfield" />
					</div>
					<div className="line">
						<label htmlFor="email">
							<h2> E-mail: </h2>
						</label>
						<input type="text" id="email" className="inputfield" />
					</div>
					<div className="line">
						<label htmlFor="password">
							<h2> Password: </h2>
						</label>
						<input type="password" id="password" className="inputfield" />
					</div>
					<button> Register </button>
					<Link to="/login" className="link-button">
						Already have an account?
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Register;
