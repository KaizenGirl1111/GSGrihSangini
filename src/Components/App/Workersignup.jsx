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
 /*  const [data,setData]=useState({
      name:"",
      email:"",
      
  }) */
/*   const [name,setName] = React.useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [contactNo, setContactNo] = useState(""); */

const navigate=useNavigate();
  const[data,setData]=useState({
    name:"",
    email:"",
    mobileNo:"",
    password:"",
    cpassword:""

  })

async  function handleSubmit(e) {
    e.preventDefault();
    if(data.password===data.cpassword){
     
      /* console.log(name,email,password,contactNo); */
      console.log(data)
   await axios.post("http://localhost:5000/workerSignup",data)
      navigate("/Workerlogin")
   
    }
    //code here

  }
  function handleChange({currentTarget:input}){
      setData({...data,[input.name]:input.value});
  }

  return (
    <Fragment>
    <NavigationBar />
      <form className="login_form" onSubmit={handleSubmit}>
        <h1 className="login_heading">
        Worker Signup
        </h1>

        <div className="input_element">
        <BsFillPersonFill/>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Name"
            autoComplete="on"
          />
        </div>
        
        <div className="input_element">
        <MdEmail/>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
            autoComplete="on"
          />
        </div>

        <div className="input_element">
        <BsFillTelephoneFill/>
          <input
            type="number"
            name="mobileNo"
            value={data.mobileNo}
            onChange={handleChange}
            placeholder="Contact Number"
          />
        </div>

        <div className="input_element">
        <RiLockPasswordFill/>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        <div className="input_element">
        <RiLockPasswordFill/>
          <input
            type="password"
            name="cpassword"
            value={data.cpassword}
            onChange={handleChange}
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



