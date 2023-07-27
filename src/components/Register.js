import React, { useState } from "react";
import logo from '../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../redux/userSlice";


function Register() {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
  
	const submitHandle = (e) => {
		axios
		  .post("http://localhost:8080/api/v1/auth/register", {
			name,
			email,
			password,
		  })
		  .then((r) => {
			// alert(r.data.token);
			console.log(r.data.token);
			dispatch(
			  login({
				username: email,
			  })
			);
			localStorage.setItem(
			  "user",
			  JSON.stringify({
				email: email,
				password: password,
				token: r.data.token,
			  })
			);
	
			navigate("/");
		});
	};
	
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
							<input type="text" id="" className="inputfield" placeholder="Name"
							 value={name}
							 onChange={(e) => {
							   setName(e.target.value);
							 }}
							/>
						</div>
						<div className="line">
							<input type="email" id="email" className="inputfield" placeholder="E-mail"
							value={email}
							onChange={(e) => {
							  setEmail(e.target.value);
							}}
		  
							/>
						</div>
						<div className="line">
							<input type="password" id="password" className="inputfield" placeholder="Password"
							value={password}
							onChange={(e) => {
							  setPassword(e.target.value);
							}}		  
							/>
						</div>
					</div>
					<button id="login-reg"
					 onClick={(e) => {
						submitHandle(e);
					  }}
					>
						 Register </button>
					<Link to="/login" className="link-button">
						Already have an account?
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Register;