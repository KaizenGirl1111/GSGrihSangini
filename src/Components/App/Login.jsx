import React, { Fragment, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/userLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({ email: email, password: password })
      });
      const json=await response.json();
  }

  return (
    <Fragment>
      <NavigationBar />
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

        <button type="submit">Login</button>
        <Link to="/signup" className="registerlink">
          Create a new account?
        </Link>
      </form>
      <Footer/>
    </Fragment>
  );
}

export default Login;
