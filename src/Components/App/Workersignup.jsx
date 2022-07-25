import React, { Fragment, useState } from 'react';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer/Footer';
import NavigationBar from './NavigationBar/NavigationBar';
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './signup.css';

function Signup() {
	let history = useNavigate('/');
	const [name, setName] = React.useState('');
	const [email, setEmail] = useState('');
	const [contactNo, setContactNo] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
	if(!name){
		toast.warning("Please enter your name",{autoClose:3000});
	}
	else if(!email){
		toast.warning("Please enter your email",{autoClose:3000});
	}
	else if(!contactNo){
		toast.warning("Please enter your contact number",{autoClose:3000});
	}
	else if(!password){
		toast.warning("Please enter password",{autoClose:3000});
	}
	else if(password !== cpassword){
		toast.warning("Passwords didn't match",{autoClose:3000});
	}else{
		const response = await fetch('http://localhost:5000/workerSignUp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				mobileNo: contactNo,
				password: password,
				email: email,
			}),
		});
		const json = await response.json();
		console.log(json);
		if (json === false) {
			toast.error('Invalid Credentials!!',{autoClose:3000});
		} else {
			toast.success("Registration Successful",{autoClose:3000});
			localStorage.setItem('token', json.token);
			history('/');
		}
	}
		
	}

	return (
		<Fragment>
			<NavigationBar />
			<div class='one'></div>
			<div className='login_form'>
				<form onSubmit={handleSubmit}>
					<h1 className='login_heading'>Worker Signup</h1>

					<div className='input_element'>
						<BsFillPersonFill />
						<input
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder='Name'
							autoComplete='on'
						/>
					</div>

					<div className='input_element'>
						<MdEmail />
						<input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Email'
							autoComplete='on'
						/>
					</div>

					<div className='input_element'>
						<BsFillTelephoneFill />
						<input
							type='number'
							value={contactNo}
							onChange={(e) => {
								setContactNo(e.target.value);
							}}
							placeholder='Contact Number'
						/>
					</div>

					<div className='input_element'>
						<RiLockPasswordFill />
						<input
							type='password'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							placeholder='Password'
						/>
					</div>

					<div className='input_element'>
						<RiLockPasswordFill />
						<input
							type='password'
							value={cpassword}
							onChange={(e) => setCpassword(e.target.value)}
							placeholder='Confirm Password'
						/>
					</div>

					<button type='submit' id='signUpBtn'>
						Signup
					</button>
					<Link to='/Workerlogin' className='registerlink'>
						registered?
					</Link>
				</form>
			</div>
			<Footer />
		</Fragment>
	);
}

export default Signup;
