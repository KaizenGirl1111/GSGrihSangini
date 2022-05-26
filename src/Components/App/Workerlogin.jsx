import React, { Fragment, useState } from "react";
import "./login.css";
import { Link ,useNavigate} from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";

import {BsFillTelephoneFill} from "react-icons/bs";
import {RiLockPasswordFill} from "react-icons/ri";
import axios from "axios";
import {BsFillEyeFill,BsFillEyeSlashFill} from "react-icons/bs";


function Login() {

  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/workerLogin", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobileNo: contactNo, password: password }),
    });
    const json = await response.json();
  }


  return (
    <Fragment>
      <NavigationBar />
      <div class="one"></div>
      <form className="login_form" onSubmit={handleSubmit}>
        <h1 className="login_heading">Worker Login</h1>

        <div className="input_element">
          <BsFillTelephoneFill />
          <input
            type="number"
            name="mobileNo"
            value={contactNo}
            onChange={(e)=>{setContactNo(e.target.value)}}
            placeholder="Contact Number"
            autoComplete="on"
          />
        </div>

        <div className="input_element">
          <RiLockPasswordFill />
          <input

            name="password"
            value={password}
            type={visible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}

            placeholder="Password"
          />
          <div onClick={()=>{setVisible(!visible)}}>
          {visible ? <BsFillEyeFill fontSize="20px" /> : <BsFillEyeSlashFill fontSize="20px"/>}
          </div>
        </div>

        <button type="submit">Login</button>
        <Link to="/Workersignup" className="registerlink">
          Create a new account?
        </Link>
      </form>
      <Footer />
    </Fragment>
  );
}

export default Login;