import React, { Fragment, useState } from "react";
import "./forgotPassword.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import {MdEmail} from "react-icons/md"

function ForgotPassword() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/forgotPassword',{
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email})
    })
    //code here
  }

  return (
    <Fragment>
      <NavigationBar />
      <div class="one"></div>
      <form className="forgot_form" onSubmit={handleSubmit}>
        <h2 className="forgot_heading">Forgot Password</h2>

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

        <button type="Submit">Submit</button>
      </form>
      <Footer/>
    </Fragment>
  );
}

export default ForgotPassword;
