import { useState } from 'react';
import React from "react";
import logo from '../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import axios from "axios";


function Login() {
	const dispatch = useDispatch();
	const submitHandler = (e) => {
	  e.preventDefault();
	  axios
		.post(`http://localhost:8080/api/v1/auth/authenticate`, {
		  email: email,
		  password: pass,
		})
		.then((r) => {

			if(r.status === 200 ){
				getData();
			}
		  if (r.data !== null) {
			dispatch(
			  login({
				username: email,
				
			  })
			);
			localStorage.setItem(
			  "user",
			  JSON.stringify({
				email: email,
				pass: pass,
				token: r.data.token,
				id: r.data.id
			  })
			);
			navigate("/");
		  }
		})
		.catch((r) => {
		  alert(r.response.status+
			" Error"+
			 " Wrong username or password");
		//   toast.error("Username or Password invalid");
		});
	};
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const getData=()=>{
		axios.get("http://localhost:8080/api/v1/auth/details/" + email)
		.then(res=>{
			console.log(res.data);
			localStorage.setItem("data",JSON.stringify({id:res.data.id}));
		})
	}
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
							value={email}
							onChange={(e) => {
							  setEmail(e.currentTarget.value);
							}}
		  
							/>
						</div>
						<div className="line">
							<input type="password" id="password" className="inputfield"  placeholder='Password'
							value={pass}
							onChange={(e) => {
							  setPass(e.currentTarget.value);
							}}
		  
							/>
						</div>

					</div>
					 <button id="login-reg"  onClick={(e) => {
                    submitHandler(e);
                  }}
					>
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