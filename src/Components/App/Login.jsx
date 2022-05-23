import React, { Fragment, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
import {useNavigate} from "react-router-dom";
import {authentication} from "../../firebase-config"
import {signInWithEmailAndPassword} from "firebase/auth"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useNavigate('/')


  function handleLogin(){
    signInWithEmailAndPassword(authentication, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Welcome Back ! " +user.email)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    const response = await fetch('http://localhost:5000/userLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password })
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
        <h1 className="login_heading">Login</h1>

        <div className="input_element">
        <MdEmail/>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="on"
          />
        </div>

        <div className="input_element">
        <RiLockPasswordFill/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <button onClick={handleLogin} type="submit">Login</button>
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <Link to="/forgot" className="registerlink" style={{fontSize:"13px",textDecoration:"none"}}>
          Forgot password?
        </Link>
        <Link to="/signup" className="registerlink" style={{fontSize:"13px",textDecoration:"none"}}>
          Create a new account?
        </Link>
        
        </div>
      </form>
      <Footer/>
    </Fragment>
  );
}

export default Login;
