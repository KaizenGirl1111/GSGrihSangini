import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer/Footer';
import NavigationBar from './NavigationBar/NavigationBar';
import './signup.css';

function Signup() {
	/*  const [data,setData]=useState({
      name:"",
      email:"",

  }) */
	/*   const [name,setName] = React.useState("");
  const [email, setEmail] = useState("");

  const [name,setName] = React.useState("");

  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [contactNo, setContactNo] = useState(""); */

	const navigate = useNavigate();
	const [data, setData] = useState({
		name: '',
		email: '',
		mobileNo: '',
		password: '',
		cpassword: '',
	});

	async function handleSubmit(e) {
		e.preventDefault();

		if (data.password === data.cpassword) {
			/* console.log(name,email,password,contactNo); */
			console.log(data);
			await axios.post('http://localhost:5000/workerSignup', data);
			navigate('/Workerlogin');
		}
		//code here

		const response = await fetch('http://localhost:5000/workerSignUp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: data.name,
				mobileNo: data.contactNo,
				password: data.password,
			}),
		});
		const json = await response.json();
		console.log(json);
	}
	function handleChange({ currentTarget: input }) {
		setData({ ...data, [input.name]: input.value });
	}

	return (
		<Fragment>
			<NavigationBar />
			<div class='one'></div>
			<form className='login_form' onSubmit={handleSubmit}>
				<h1 className='login_heading'>Worker Signup</h1>

				<div className='input_element'>
					<BsFillPersonFill />
					<input
						type='text'
						name='name'
						value={data.name}
						onChange={handleChange}
						placeholder='Name'
						autoComplete='on'
					/>
				</div>

				<div className='input_element'>
					<MdEmail />
					<input
						type='email'
						name='email'
						value={data.email}
						onChange={handleChange}
						placeholder='Email'
						autoComplete='on'
					/>
				</div>

				<div className='input_element'>
					<BsFillTelephoneFill />
					<input
						type='number'
						name='mobileNo'
						value={data.mobileNo}
						onChange={handleChange}
						placeholder='Contact Number'
					/>
				</div>

				<div className='input_element'>
					<RiLockPasswordFill />
					<input
						type='password'
						name='password'
						value={data.password}
						onChange={handleChange}
						placeholder='Password'
					/>
				</div>

				<div className='input_element'>
					<RiLockPasswordFill />
					<input
						type='password'
						name='cpassword'
						value={data.cpassword}
						onChange={handleChange}
						placeholder='Confirm Password'
					/>
				</div>

				<button type='submit'>Signup</button>
				<Link to='/Workerlogin' className='registerlink'>
					Already registered?
				</Link>
			</form>
			<Footer />
		</Fragment>
	);
}

export default Signup;
