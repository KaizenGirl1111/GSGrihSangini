import React, { Fragment, useState } from "react";
import "./login.css";
import { Link ,useNavigate} from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import {BsFillTelephoneFill} from "react-icons/bs";
import {RiLockPasswordFill} from "react-icons/ri";
import axios from "axios";


function Login() {
  const[data,setData]=useState({
    
    mobileNo:"",
    password:"",
   

  })

  const navigate=useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    await axios.post("http://localhost:5000/workerLogin",data)
    navigate("./clientrequest");

    const response = await fetch('http://localhost:5000/workerLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({mobileNo: contactNo, password: password })
    });
    const json = await response.json();
    console.log(json)


  }
  function handleChange({currentTarget:input}){
    setData({...data,[input.name]:input.value});
}

  return (
    <Fragment>
      <NavigationBar />
      <div class="one"></div>
      <form className="login_form" onSubmit={handleSubmit}>
        <h1 className="login_heading">Worker Login</h1>

        <div className="input_element">
        <BsFillTelephoneFill/>
          <input
            type="number"
            name="mobileNo"
            value={data.mobileNo}
            onChange={handleChange}
            placeholder="Contact Number"
            autoComplete="on"
          />
        </div>

        <div className="input_element">
        <RiLockPasswordFill/>
          <input
            name="password"
            type="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        <button type="submit">Login</button>
        <Link to="/Workersignup" className="registerlink">
          Create a new account?
        </Link>
      </form>
      <Footer/>
    </Fragment>
  );
}



export default Login;




export default Login;




