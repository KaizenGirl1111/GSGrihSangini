import React from "react";
import "./signup.css";
import { Link,useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import {authentication} from "../../firebase-config";
import {GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword} from "firebase/auth"

function Signup() {
  let history = useNavigate('/');
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");

  function handleGoogleAuth(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      alert(user.displayName+" has logged in");
      alert("You can now, head back to Home page")
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage);
    });

    
}

function handleSignup(){
  createUserWithEmailAndPassword(authentication, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert(user.email+" has logged in!");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}


  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/userSignUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ name: name, contactNo: contactNo, address: address, email: email, password: password })
    });
    const res = await response.json();
    console.log(response)
    if (res === false) {
      console.log("Invalid Credentials!!");
    } else {
      localStorage.setItem('token', res.token)
      history('/')
    }



  }

  

  return (
    <Fragment>
      <NavigationBar />
      <div class="one"></div>
      <form className="login_form" onSubmit={handleSubmit}>
        <h1 className="login_heading">Signup</h1>

        <div className="input_element">
          <BsFillPersonFill />
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            autoComplete="on"
          />
        </div>

        <div className="input_element">
          <MdEmail />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="on"
          />
        </div>

        <div className="input_element">
          <BsFillTelephoneFill />
          <input
            type="number"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            placeholder="Contact Number"
          />
        </div>

        <div className="input_element">
          <AiFillHome />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
        </div>

        <div className="input_element">
          <RiLockPasswordFill />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="input_element">
          <RiLockPasswordFill />
          <input
            type="password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>

        <button id="signUpBtn" onClick={handleSignup} type="submit">Signup</button>
        <Link to="/Login" className="registerlink">
          registered?
        </Link>
        <div className="social">
          <p>OR</p>
          <button onClick={handleGoogleAuth} >Google +</button>
        </div>
      </form>
      <Footer />
    </Fragment>
  );
}

export default Signup;
