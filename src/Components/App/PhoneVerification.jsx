
import React,{Fragment, useState} from 'react';
import NavigationBar from "./NavigationBar/NavigationBar";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer/Footer";
import {BsFillTelephoneFill} from "react-icons/bs";
import "./login.css";
import './PhoneVerification.css'
import Axios from "axios"


function PhoneVerification() {

  const navigate=useNavigate();

const[contactNo,setContactNo]=useState("")
const[isSend,setIsSend]=useState(false)
const[userOtp,setUserOtp]=useState()
const otp= 100000 + Math.floor(Math.random() * 900000);

  function handleSubmit(e){
    e.preventDefault()
    if(userOtp===otp){

      navigate("/Workerlogin");
    }

  }
  function handleToggle(e){
    e.preventDefault();
    setIsSend(!isSend);
    Axios.get("https://api.authkey.io/request?authkey=your_auth_key&mobile="+contactNo+"&country_code=91&sid=Your_SID&company=grihsangini&otp="+userOtp+"&time=10mins").then(
    (response)=>{
        console.log(response);
    }
    )
  }

  return (
    <Fragment>
    <NavigationBar />
    {isSend?<form className="login_form" onSubmit={handleSubmit}>
    <button className='x-close' onClick={handleToggle}>
      x
    </button>
    <div className="input_element">
      
        <input
          type="number"
          value={userOtp}
          onChange={(e) => setUserOtp(e.target.value)}
          placeholder=" Enter your OTP"
          autoComplete="on"
        />
        
      </div>
      <button type='submit'>
          Verify
        </button>
    </form>:
    
    <form className="login_form" onSubmit={handleSubmit}>
    
      <h1 className="login_heading">Enter your contact number </h1>

      <div className="input_element">
      <BsFillTelephoneFill/>
        <input
          type="number"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          placeholder=" Enter your Contact Number"
          autoComplete="on"
        />
        
      </div>
      <button onClick={handleToggle} type='submit'>
          Send
        </button>
      </form>}
      <Footer/>
    </Fragment>
  )
}

export default PhoneVerification