import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import {RiLockPasswordFill} from "react-icons/ri"
import {MdEmail} from "react-icons/md"
import {BsFillPersonFill} from "react-icons/bs";
import {BsFillTelephoneFill} from "react-icons/bs";
import axios from "axios";
import { json } from "body-parser";
import {useNavigate} from "react-router-dom";



function Signup() {

  const [name,setName] = React.useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState(""); 
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");


  async function handleSubmit() {
      const response = await fetch('http://localhost:5000/workerSignUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ name: name, mobileNo: contactNo, password: password })
    });
    const json = await response.json();
    console.log(json)


  }

  return (
    <Fragment>
    <NavigationBar />
    <div class="one"></div>
      <form className="login_form" onSubmit={handleSubmit}>
        <h1 className="login_heading">
        Worker Signup
        </h1>

        <div className="input_element">
        <BsFillPersonFill/>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Name"
            autoComplete="on"
          />
        </div>
        
        <div className="input_element">

        <MdEmail/>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="on"
          />
        </div>

        <div className="input_element">

        <BsFillTelephoneFill/>
          <input
            type="number"
            value={contactNo}
            onChange={(e)=>{setContactNo(e.target.value)}}
            placeholder="Contact Number"
          />
        </div>

        <div className="input_element">
        <RiLockPasswordFill/>
          <input
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="Password"
          />
        </div>

        <div className="input_element">
        <RiLockPasswordFill/>
          <input
            type="password"
            value={cpassword}
            onChange={(e)=>setCpassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit">Signup</button>
        <Link to="/Workerlogin" className="registerlink">
          Already registered?
        </Link>
      </form>
      <Footer />
    </Fragment>
  );
}

export default Signup;


