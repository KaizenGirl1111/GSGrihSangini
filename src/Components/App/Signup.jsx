import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import React, { Fragment, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
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
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');
	const [contactNo, setContactNo] = useState('');
	const [address, setAddress] = useState('');

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
				alert(errorMessage);
			});
	}

	function handleSignup() {
		createUserWithEmailAndPassword(authentication, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				alert(user.email + ' has logged in!');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
				alert(errorCode);
			});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const response = await fetch('http://localhost:5000/userSignUp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				contactNo: contactNo,
				address: address,
				email: email,
				password: password
			}),
		});
		const res = await response.json();
		console.log(res);
		if (res === false) {
			console.log('Invalid Credentials!!');
		} else {
			localStorage.setItem('token', res.token);
			history('/');
		}
	}

	return (
		<Fragment>
			<NavigationBar />
			<div class='one'></div>
			<div className='login_form'>
				<form onSubmit={handleSignup}>
					<h1 className='login_heading'>Signup</h1>

					<div className='input_element'>
						<BsFillPersonFill />
						<input
							type='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder='name'
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
							onChange={(e) => setContactNo(e.target.value)}
							placeholder='Contact Number'
						/>
					</div>

					<div className='input_element'>
						<AiFillHome />
						<input
							type='text'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							placeholder='Address'
						/>
					</div>

					<div className='input_element'>
						<RiLockPasswordFill />
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
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

					<button id='signUpBtn' onClick={handleSubmit} type='submit'>
						Signup
					</button>
					<Link to='/Login' className='registerlink'>
						Already registered?
					</Link>
				</form>
				<div className='social'>
					<p>OR</p>
					<button className='google' onClick={handleGoogleAuth}>
						<FcGoogle size={'2em'} /> Sign up with Google
					</button>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default Signup;
