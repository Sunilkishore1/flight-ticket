import { useState } from 'react';
import React from "react";
import logo from '../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

function Login() {
	const [name, setName] = useState("");
  	const [pass, setPass] = useState("");
	const navigate=useNavigate();
	const dispatch = useDispatch();
  	const submitHandler = (e) => {
    	e.preventDefault();
    	dispatch(
      		login({
        	username: name,
      		})
    	);
		navigate('/')
  	};
	return (
		<div className="login-signup">
			<div className="login-content">

				<div className='company'>
					<img src={logo}></img>
					<h1 id='company-name'>AeroSearch</h1>
				</div>

				<div className="card">
					<h1>Login</h1>
					<div className='card-contents'>
						<div className="line">
							<input type="email" id="username" className="inputfield" placeholder='E-mail'
							value={name}
							onChange={(e) => {
							setName(e.currentTarget.value);
			              }} />
						</div>
						<div className="line">
							<input type="password" id="password" className="inputfield"  placeholder='Password'
							value={pass}
							onChange={(e) => {
							setPass(e.currentTarget.value);
			              }}/>
						</div>

					</div>
					 <button id="login-reg" onClick={submitHandler}>
						Sign-in
					</button>
					<Link to="/register" className="link-button">
						Create a new Account
					</Link>
				</div>
			</div>
		</div>
	);
}
export default Login;