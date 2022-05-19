import React, { Fragment, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import {BsFillTelephoneFill} from "react-icons/bs";
import {RiLockPasswordFill} from "react-icons/ri"

function Login() {
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
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

  return (
    <Fragment>
      <NavigationBar />
      <form className="login_form" onSubmit={handleSubmit}>
        <h1 className="login_heading">Worker Login</h1>

        <div className="input_element">
        <BsFillTelephoneFill/>
          <input
            type="number"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            placeholder="Contact Number"
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


