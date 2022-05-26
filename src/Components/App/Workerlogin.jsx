import axios from 'axios';
import React, { Fragment, useState } from 'react';
import {
	BsFillEyeFill,
	BsFillEyeSlashFill,
	BsFillTelephoneFill,
} from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer/Footer';
import './login.css';
import NavigationBar from './NavigationBar/NavigationBar';

function Login() {
	const [data, setData] = useState({
		mobileNo: '',
		password: '',
	});

	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		await axios.post('http://localhost:5000/workerLogin', data);
		navigate('./clientrequest');

		const response = await fetch('http://localhost:5000/workerLogin', {
			method: 'POST',
		});
	}

	const [contactNo, setContactNo] = useState('');
	const [password, setPassword] = useState('');
	const [visible, setVisible] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		const response = await fetch('http://localhost:5000/workerLogin', {
			method: 'POST',

			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ mobileNo: contactNo, password: password }),
		});
		const json = await response.json();

		console.log(json);

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
				<h1 className='login_heading'>Worker Login</h1>

				<div className='input_element'>
					<BsFillTelephoneFill />
					<input
						type='number'
						name='mobileNo'
						value={data.mobileNo}
						onChange={handleChange}
						placeholder='Contact Number'
						autoComplete='on'
					/>
				</div>

				<div className='input_element'>
					<RiLockPasswordFill />
					<input
						name='password'
						value={data.password}
						onChange={handleChange}
						type={visible ? 'text' : 'password'}
						// onChange={(e) => setPassword(e.target.value)}

						placeholder='Password'
					/>
					<div
						onClick={() => {
							setVisible(!visible);
						}}
					>
						{visible ? (
							<BsFillEyeFill fontSize='20px' />
						) : (
							<BsFillEyeSlashFill fontSize='20px' />
						)}
					</div>
				</div>

				<button type='submit'>Login</button>
				<Link to='/Workersignup' className='registerlink'>
					Create a new account?
				</Link>
			</form>
			<Footer />
		</Fragment>
	);
}

export default Login;
