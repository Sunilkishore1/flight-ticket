import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="login-signup">
			<div className="login-content">

				<div className='company'>
					<img src={logo}></img>
					<h1 id='company-name'>AeroSearch</h1>
				</div>

				<div className="card">
					<h1>Login</h1>
					<div className="line">
						<label htmlFor="username">
							<h2>Username: </h2>
						</label>
						<input type="text" id="username" className="inputfield" />
					</div>
					<div className="line">
						<label htmlFor="password">
							<h2>Password: </h2>
						</label>
						<input type="password" id="password" className="inputfield" />
					</div>
					<button>Login</button>
					<Link to="/register" className="link-button">
						Create a new Account
					</Link>
				</div>
			</div>
		</div>
	);
}
export default Login;
