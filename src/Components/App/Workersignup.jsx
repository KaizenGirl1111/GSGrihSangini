import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { Fragment, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { authentication } from '../../firebase-config';
import Footer from './Footer/Footer';
import NavigationBar from './NavigationBar/NavigationBar';
import './signup.css';
function Signup() {
	let history = useNavigate('/');

	const [name, setName] = React.useState('');
	const [email, setEmail] = useState('');
	const [contactNo, setContactNo] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');

	const responseFacebook = (response) => {
		if (response.status !== 'unknown') {
			const name = response.name;
			const token = response.accessToken;
			localStorage.setItem('token', token);
			alert(
				`${name}  has logged in ` +
					'.You can now head back to the home page',
			);
		} else {
			console.log('error');
		}
		console.log(response);
	};

	const componentClicked = (data) => {
		console.log('data', data);
	};

	async function handleSubmit() {
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
			console.log('Invalid Credentials!!');
		} else {
			localStorage.setItem('token', json.token);
			history('/');
		}
	}

	function handleGoogleAuth() {
		const provider = new GoogleAuthProvider();
		signInWithPopup(authentication, provider)
			.then((result) => {
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				console.log(user.displayName);
				alert(
					`${user.displayName}  has logged in ` +
						'.You can now head back to the home page',
				);
				localStorage.setItem('token', token);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.email;
				const credential =
					GoogleAuthProvider.credentialFromError(error);
				alert(
					errorMessage +
						' ' +
						email +
						' ' +
						credential +
						' ' +
						errorCode,
				);
			});
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
				<p style={{ textAlign: 'center' }}>OR</p>
				<div className='auth'>
					<div className='social'>
						<button className='google' onClick={handleGoogleAuth}>
							<FcGoogle size={'2em'} /> Sign up with Google
						</button>
					</div>
					<div>
						<FacebookLogin
							appId={process.env.REACT_APP_FacebookAppId}
							autoLoad={false}
							fields='name,email,picture'
							onClick={componentClicked}
							callback={responseFacebook}
							cssClass='facebookbtn'
						/>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default Signup;
